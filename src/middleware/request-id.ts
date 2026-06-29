import type { NextFunction, Request, Response } from "express";
import crypto from "node:crypto";

export const requestId = (req: Request, res: Response, next: NextFunction) => {
  req.requestId = req.header("x-request-id") ?? crypto.randomUUID();
  res.setHeader("x-request-id", req.requestId);
  next();
};
