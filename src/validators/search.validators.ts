import { z } from "zod";

export const vendorSearchQuerySchema = z.object({
  keyword: z.string().max(120).optional(),
  state: z.string().max(80).optional(),
  lga: z.string().max(120).optional(),
  community: z.string().max(120).optional(),
  category: z.string().max(120).optional(),
  lat: z.coerce.number().min(-90).max(90).optional(),
  lng: z.coerce.number().min(-180).max(180).optional(),
  radius: z.coerce.number().positive().max(100).default(10),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20)
});
