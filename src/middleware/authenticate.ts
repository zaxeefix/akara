import type { NextFunction, Request, Response } from "express";
import { prisma } from "../prisma/client";
import { ApiError } from "../utils/api-error";
import { verifyAccessToken } from "../utils/tokens";

export const authenticate = async (req: Request, _res: Response, next: NextFunction) => {
  const header = req.header("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;

  if (!token) {
    next(new ApiError(401, "UNAUTHORIZED", "auth.unauthorized"));
    return;
  }

  try {
    const payload = verifyAccessToken(token);
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, roles: true, email: true, phone: true, status: true }
    });

    if (!user || user.status !== "ACTIVE") {
      throw new ApiError(401, "UNAUTHORIZED", "auth.unauthorized");
    }

    req.user = {
      id: user.id,
      roles: user.roles,
      email: user.email,
      phone: user.phone
    };
    next();
  } catch (error) {
    next(error instanceof ApiError ? error : new ApiError(401, "UNAUTHORIZED", "auth.unauthorized"));
  }
};
