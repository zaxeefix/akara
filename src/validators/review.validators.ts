import { z } from "zod";

export const reviewCreateSchema = z.object({
  vendorId: z.string().min(1),
  orderId: z.string().min(1).optional(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(800).optional()
});

export const reviewUpdateSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  comment: z.string().max(800).optional()
});

export const reviewReportSchema = z.object({
  reason: z.string().min(3).max(300)
});
