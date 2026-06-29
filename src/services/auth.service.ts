import crypto from "node:crypto";
import type { Role } from "@prisma/client";
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
