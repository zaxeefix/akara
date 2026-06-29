import type { Role } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error";

export const requireRole = (...roles: Role[]) => (req: Request, _res: Response, next: NextFunction) => {
  if (!req.user) {
    next(new ApiError(401, "UNAUTHORIZED", "auth.unauthorized"));
    return;
  }

  if (!req.user.roles.some((role) => roles.includes(role))) {
    next(new ApiError(403, "FORBIDDEN", "auth.forbidden"));
    return;
  }

  next();
};
