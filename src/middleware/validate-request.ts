import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

type Schemas = {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
};

export const validateRequest = (schemas: Schemas) => (req: Request, _res: Response, next: NextFunction) => {
  if (schemas.body) req.body = schemas.body.parse(req.body);
  if (schemas.params) req.params = schemas.params.parse(req.params);
  if (schemas.query) req.query = schemas.query.parse(req.query);
  next();
};
