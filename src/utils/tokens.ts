import jwt from "jsonwebtoken";
import type { Role } from "@prisma/client";
import { env, requireEnv } from "../config/env";

type TokenPayload = {
  sub: string;
  roles: Role[];
};

export const signAccessToken = (payload: TokenPayload) => {
  return jwt.sign(payload, requireEnv("JWT_SECRET"), {
    expiresIn: env.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    issuer: "akaraconnect-api"
  });
};

export const signRefreshToken = (payload: TokenPayload) => {
  return jwt.sign(payload, requireEnv("JWT_REFRESH_SECRET"), {
    expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions["expiresIn"],
    issuer: "akaraconnect-api"
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, requireEnv("JWT_SECRET"), {
    issuer: "akaraconnect-api"
  }) as TokenPayload & jwt.JwtPayload;
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, requireEnv("JWT_REFRESH_SECRET"), {
    issuer: "akaraconnect-api"
  }) as TokenPayload & jwt.JwtPayload;
};
