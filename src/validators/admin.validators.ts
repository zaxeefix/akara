import { z } from "zod";

export const adminDecisionSchema = z.object({
  reason: z.string().max(500).optional()
});
