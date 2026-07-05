import "dotenv/config";
import { z } from "zod";

const optionalSecret = z.preprocess(
  (value) => {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();
    return trimmed.length === 0 ? undefined : trimmed;
  },
  z.string().min(32, "Must contain at least 32 characters. Leave blank only when auth is not enabled.").optional()
);

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),
  DATABASE_URL: z.string().optional(),
  DIRECT_URL: z.string().optional(),
  JWT_SECRET: optionalSecret,
  JWT_REFRESH_SECRET: optionalSecret,
  ACCESS_TOKEN_EXPIRES_IN: z.string().default("15m"),
  REFRESH_TOKEN_EXPIRES_IN: z.string().default("7d"),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
  PAYSTACK_SECRET_KEY: z.string().optional(),
  PAYSTACK_PUBLIC_KEY: z.string().optional(),
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  GOOGLE_MAPS_API_KEY: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  OTP_WEBHOOK_URL: z.string().url().optional(),
  OTP_SENDER_NAME: z.string().default("AkaraConnect")
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Invalid environment configuration", parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;

export const requireEnv = (key: keyof typeof env) => {
  const value = env[key];
  if (!value) {
    throw new Error(`${key} is required for this operation`);
  }
  return String(value);
};
