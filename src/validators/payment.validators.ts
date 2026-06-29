import { z } from "zod";

export const paymentInitializeSchema = z.object({
  orderId: z.string().min(1),
  method: z.enum([
    "PAYSTACK",
    "FLUTTERWAVE",
    "MONIEPOINT",
    "OPAY",
    "PALMPAY",
    "BANK_TRANSFER",
    "WALLET",
    "CASH_ON_DELIVERY",
    "CARD"
  ]).default("PAYSTACK")
});

export const paymentVerifySchema = z.object({
  reference: z.string().min(3),
  method: z.enum(["PAYSTACK", "FLUTTERWAVE", "MONIEPOINT", "OPAY", "PALMPAY", "BANK_TRANSFER", "WALLET", "CASH_ON_DELIVERY", "CARD"]).default("PAYSTACK")
});
