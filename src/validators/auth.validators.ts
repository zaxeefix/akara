import { z } from "zod";

const roleSchema = z.enum(["CUSTOMER", "VENDOR", "ADMIN", "SUPER_ADMIN", "RIDER"]);

export const registerSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().optional(),
  phone: z.string().min(7).max(20).optional(),
  password: z.string().min(8).max(100),
  role: roleSchema.default("CUSTOMER"),
  language: z.enum(["en", "ha", "yo", "ig", "tiv"]).default("en")
}).refine((data) => data.email || data.phone, {
  message: "Email or phone is required",
  path: ["email"]
});

export const loginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(1)
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(20)
});
