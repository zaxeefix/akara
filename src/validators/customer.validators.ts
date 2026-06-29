import { z } from "zod";

export const updateCustomerSchema = z.object({
  name: z.string().min(2).max(120).optional(),
  firstName: z.string().max(80).optional(),
  lastName: z.string().max(80).optional(),
  address: z.string().max(240).optional(),
  language: z.enum(["en", "ha", "yo", "ig", "tiv"]).optional()
});
