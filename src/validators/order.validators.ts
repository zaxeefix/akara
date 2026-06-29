import { z } from "zod";

export const orderCreateSchema = z.object({
  vendorId: z.string().min(1),
  deliveryType: z.enum(["PICKUP", "DELIVERY"]),
  deliveryAddress: z.string().max(240).optional(),
  customerNote: z.string().max(500).optional(),
  items: z.array(z.object({
    menuItemId: z.string().min(1),
    quantity: z.number().int().positive().max(99)
  })).min(1)
});

export const orderStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "ACCEPTED",
    "PREPARING",
    "READY_FOR_PICKUP",
    "OUT_FOR_DELIVERY",
    "DELIVERED",
    "CANCELLED",
    "REJECTED"
  ])
});
