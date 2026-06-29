import crypto from "node:crypto";
import { prisma } from "../prisma/client";
import { env } from "../config/env";
import { ApiError } from "../utils/api-error";

export const paymentService = {
  async initialize(userId: string, data: { orderId: string; method: "PAYSTACK" | "FLUTTERWAVE" | "MONIEPOINT" | "OPAY" | "PALMPAY" | "BANK_TRANSFER" | "WALLET" | "CASH_ON_DELIVERY" | "CARD" }) {
    const order = await prisma.order.findFirst({ where: { id: data.orderId, customerId: userId } });
    if (!order) throw new ApiError(404, "ORDER_NOT_FOUND", "orders.notFound");

    const reference = `AKC-PAY-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
    const payment = await prisma.payment.create({
      data: {
        userId,
        orderId: order.id,
        method: data.method,
        amount: order.total,
        providerReference: reference,
        status: data.method === "CASH_ON_DELIVERY" ? "PENDING" : "PENDING",
        authorizationUrl: data.method === "PAYSTACK" && env.PAYSTACK_PUBLIC_KEY ? `https://checkout.paystack.com/${reference}` : undefined
      }
    });

    return payment;
  },

  async verify(userId: string, reference: string) {
    const payment = await prisma.payment.findFirst({ where: { providerReference: reference, userId } });
    if (!payment) throw new ApiError(404, "PAYMENT_NOT_FOUND", "payments.notFound");

    return prisma.payment.update({
      where: { id: payment.id },
      data: { status: "SUCCESSFUL" }
    });
  },

  async webhook(signature: string | undefined, rawBody: unknown) {
    if (env.PAYSTACK_SECRET_KEY && signature) {
      const expected = crypto
        .createHmac("sha512", env.PAYSTACK_SECRET_KEY)
        .update(JSON.stringify(rawBody))
        .digest("hex");
      if (signature !== expected) {
        throw new ApiError(401, "INVALID_WEBHOOK_SIGNATURE", "payments.invalidSignature");
      }
    }

    return { received: true };
  },

  myPayments(userId: string) {
    return prisma.payment.findMany({ where: { userId }, include: { order: true }, orderBy: { createdAt: "desc" } });
  }
};
