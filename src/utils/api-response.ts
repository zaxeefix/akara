import type { Response } from "express";

export const ok = (res: Response, data: unknown, message = "common.success", statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
    message,
    requestId: res.req.requestId
  });
};
