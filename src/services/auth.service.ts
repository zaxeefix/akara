import crypto from "node:crypto";
import type { OtpPurpose, Role } from "@prisma/client";
import { env } from "../config/env";
import { prisma } from "../prisma/client";
import { ApiError } from "../utils/api-error";
import { hashPassword, verifyPassword } from "../utils/password";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/tokens";

const publicUserSelect = {
  id: true,
  name: true,
  email: true,
  phone: true,
  roles: true,
  language: true,
  status: true,
  createdAt: true
};

const tokenHash = (token: string) => crypto.createHash("sha256").update(token).digest("hex");
const otpHash = (phone: string, purpose: OtpPurpose, code: string) => {
  const secret = env.JWT_SECRET || "akaraconnect-local-otp-secret";
  return crypto.createHmac("sha256", secret).update(`${phone}:${purpose}:${code}`).digest("hex");
};

const normalizePhone = (phone: string) => phone.replace(/[\s-]/g, "").trim();

type GoogleTokenInfo = {
  aud?: string;
  email?: string;
  email_verified?: string | boolean;
  name?: string;
  picture?: string;
  sub?: string;
};

async function sendOtp(phone: string, code: string) {
  if (!env.OTP_WEBHOOK_URL) {
    if (env.NODE_ENV === "production") {
      throw new ApiError(501, "OTP_PROVIDER_NOT_CONFIGURED", "Phone OTP is not configured. Set OTP_WEBHOOK_URL in Render.");
    }
    return;
  }

  const response = await fetch(env.OTP_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone,
      code,
      sender: env.OTP_SENDER_NAME,
      message: `${code} is your AkaraConnect verification code. It expires in 10 minutes.`
    })
  });

  if (!response.ok) {
    throw new ApiError(502, "OTP_PROVIDER_FAILED", "Phone OTP provider failed to send the code.");
  }
}

export const authService = {
  async register(data: { name: string; email?: string; phone?: string; password: string; role: Role; language: string }) {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          data.email ? { email: data.email.toLowerCase() } : {},
          data.phone ? { phone: data.phone } : {}
        ].filter((item) => Object.keys(item).length > 0)
      }
    });

    if (existing) {
      throw new ApiError(409, "CONFLICT", "auth.accountExists");
    }

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email?.toLowerCase(),
        phone: data.phone,
        passwordHash: await hashPassword(data.password),
        roles: [data.role],
        language: data.language,
        customerProfile: data.role === "CUSTOMER" ? { create: {} } : undefined
      },
      select: publicUserSelect
    });

    const tokens = await authService.issueTokens(user.id, user.roles);
    return { user, ...tokens };
  },

  async googleLogin(data: { idToken: string; role: "CUSTOMER" | "VENDOR"; language: string }) {
    if (!env.GOOGLE_CLIENT_ID) {
      throw new ApiError(501, "GOOGLE_PROVIDER_NOT_CONFIGURED", "Google login is not configured. Set GOOGLE_CLIENT_ID in Render.");
    }

    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(data.idToken)}`);
    if (!response.ok) {
      throw new ApiError(401, "INVALID_GOOGLE_TOKEN", "Google login failed. Try again.");
    }

    const tokenInfo = await response.json() as GoogleTokenInfo;
    const emailVerified = tokenInfo.email_verified === true || tokenInfo.email_verified === "true";
    if (tokenInfo.aud !== env.GOOGLE_CLIENT_ID || !tokenInfo.email || !emailVerified) {
      throw new ApiError(401, "INVALID_GOOGLE_TOKEN", "Google login failed. Try again.");
    }

    const email = tokenInfo.email.toLowerCase();
    let user = await prisma.user.findUnique({ where: { email }, select: publicUserSelect });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name: tokenInfo.name || email.split("@")[0],
          email,
          passwordHash: await hashPassword(crypto.randomBytes(32).toString("hex")),
          roles: [data.role],
          language: data.language,
          customerProfile: data.role === "CUSTOMER" ? { create: {} } : undefined
        },
        select: publicUserSelect
      });
    }

    const tokens = await authService.issueTokens(user.id, user.roles);
    return { user, ...tokens };
  },

  async requestOtp(data: { phone: string; purpose: OtpPurpose }) {
    const phone = normalizePhone(data.phone);
    const code = crypto.randomInt(100000, 1000000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await sendOtp(phone, code);

    await prisma.otpCode.create({
      data: {
        phone,
        purpose: data.purpose,
        codeHash: otpHash(phone, data.purpose, code),
        expiresAt
      }
    });

    return {
      expiresIn: 600,
      maskedPhone: phone.replace(/.(?=.{4})/g, "*"),
      devCode: env.NODE_ENV === "production" ? undefined : code
    };
  },

  async verifyOtp(data: { phone: string; code: string; purpose: OtpPurpose; role: "CUSTOMER" | "VENDOR"; language: string }) {
    const phone = normalizePhone(data.phone);
    const otp = await prisma.otpCode.findFirst({
      where: {
        phone,
        purpose: data.purpose,
        consumedAt: null,
        expiresAt: { gt: new Date() }
      },
      orderBy: { createdAt: "desc" }
    });

    if (!otp) {
      throw new ApiError(401, "INVALID_OTP", "Invalid or expired OTP.");
    }

    if (otp.attempts >= 5) {
      throw new ApiError(429, "OTP_ATTEMPTS_EXCEEDED", "Too many OTP attempts. Request a new code.");
    }

    if (otp.codeHash !== otpHash(phone, data.purpose, data.code)) {
      await prisma.otpCode.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } });
      throw new ApiError(401, "INVALID_OTP", "Invalid or expired OTP.");
    }

    await prisma.otpCode.update({ where: { id: otp.id }, data: { consumedAt: new Date() } });

    let user = await prisma.user.findUnique({ where: { phone }, select: publicUserSelect });
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: `User ${phone.slice(-4)}`,
          phone,
          passwordHash: await hashPassword(crypto.randomBytes(32).toString("hex")),
          roles: [data.role],
          language: data.language,
          customerProfile: data.role === "CUSTOMER" ? { create: {} } : undefined
        },
        select: publicUserSelect
      });
    }

    const tokens = await authService.issueTokens(user.id, user.roles);
    return { user, ...tokens };
  },

  async login(identifier: string, password: string) {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: identifier.toLowerCase() }, { phone: identifier }]
      }
    });

    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      throw new ApiError(401, "INVALID_CREDENTIALS", "auth.invalidCredentials");
    }

    if (user.status !== "ACTIVE") {
      throw new ApiError(403, "ACCOUNT_NOT_ACTIVE", "auth.accountNotActive");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    const tokens = await authService.issueTokens(user.id, user.roles);
    const safeUser = await prisma.user.findUniqueOrThrow({ where: { id: user.id }, select: publicUserSelect });
    return { user: safeUser, ...tokens };
  },

  async issueTokens(userId: string, roles: Role[]) {
    const accessToken = signAccessToken({ sub: userId, roles });
    const refreshToken = signRefreshToken({ sub: userId, roles });
    await prisma.user.update({
      where: { id: userId },
      data: { refreshTokenHash: tokenHash(refreshToken) }
    });
    return { accessToken, refreshToken };
  },

  async refresh(refreshToken: string) {
    const payload = verifyRefreshToken(refreshToken);
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });

    if (!user || user.refreshTokenHash !== tokenHash(refreshToken)) {
      throw new ApiError(401, "UNAUTHORIZED", "auth.unauthorized");
    }

    return authService.issueTokens(user.id, user.roles);
  },

  async logout(userId: string) {
    await prisma.user.update({ where: { id: userId }, data: { refreshTokenHash: null } });
    return { loggedOut: true };
  },

  async me(userId: string) {
    return prisma.user.findUniqueOrThrow({ where: { id: userId }, select: publicUserSelect });
  }
};
