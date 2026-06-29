import { z } from "zod";

export const menuItemSchema = z.object({
  categoryId: z.string().min(1),
  name: z.string().min(2).max(120),
  description: z.string().max(500).optional(),
  price: z.coerce.number().positive(),
  imageUrl: z.string().url().optional(),
  isAvailable: z.boolean().default(true)
});

export const menuItemUpdateSchema = menuItemSchema.partial();
