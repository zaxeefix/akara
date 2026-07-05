import { z } from "zod";

const publicRegistrationRoleSchema = z.enum(["CUSTOMER", "VENDOR"]);

export const registerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().optional(),
  phone: z.string().min(7).max(20).optional(),
  password: z.string().min(8).max(100),
  role: publicRegistrationRoleSchema.default("CUSTOMER"),
  language: z.enum(["en", "ha", "yo", "ig", "tiv"]).default("en")
}).refine((data) => data.email || data.phone, {
  message: "Email or phone is required",
  path: ["email"]
});

export const loginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(1)
});

export const googleLoginSchema = z.object({
  idToken: z.string().min(20),
  role: publicRegistrationRoleSchema.default("CUSTOMER"),
  language: z.enum(["en", "ha", "yo", "ig", "tiv"]).default("en")
});

export const otpPurposeSchema = z.enum(["LOGIN", "PHONE_VERIFICATION", "PASSWORD_RESET"]);

export const otpRequestSchema = z.object({
  phone: z.string().min(7).max(20),
  purpose: otpPurposeSchema.default("LOGIN")
});

export const otpVerifySchema = z.object({
  phone: z.string().min(7).max(20),
  code: z.string().regex(/^\d{6}$/),
  purpose: otpPurposeSchema.default("LOGIN"),
  role: publicRegistrationRoleSchema.default("CUSTOMER"),
  language: z.enum(["en", "ha", "yo", "ig", "tiv"]).default("en")
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(20)
});
