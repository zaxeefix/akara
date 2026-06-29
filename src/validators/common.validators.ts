import { z } from "zod";

export const idParamSchema = z.object({
  id: z.string().min(1)
});

export const vendorIdParamSchema = z.object({
  vendorId: z.string().min(1)
});

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20)
});

export const imageUrlSchema = z.string().url().optional().or(z.literal(""));
