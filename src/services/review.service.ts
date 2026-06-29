import { prisma } from "../prisma/client";
import { ApiError } from "../utils/api-error";

export const reviewService = {
  async create(userId: string, data: { vendorId: string; orderId?: string; rating: number; comment?: string }) {
    if (data.orderId) {
      const order = await prisma.order.findFirst({ where: { id: data.orderId, customerId: userId, vendorId: data.vendorId } });
      if (!order) throw new ApiError(403, "ORDER_REVIEW_NOT_ALLOWED", "reviews.notAllowed");
    }
    return prisma.review.create({ data: { userId, ...data } });
  },

  vendorReviews(vendorId: string) {
    return prisma.review.findMany({
      where: { vendorId, deletedAt: null, status: { in: ["APPROVED", "FLAGGED"] } },
      include: { user: { select: { id: true, name: true } } },
      orderBy: { createdAt: "desc" }
    });
  },

  async update(userId: string, id: string, data: { rating?: number; comment?: string }) {
    const review = await prisma.review.findFirst({ where: { id, userId, deletedAt: null } });
    if (!review) throw new ApiError(404, "REVIEW_NOT_FOUND", "reviews.notFound");
    return prisma.review.update({ where: { id }, data });
  },

  async remove(userId: string, roles: string[], id: string) {
    const review = await prisma.review.findUnique({ where: { id } });
    if (!review) throw new ApiError(404, "REVIEW_NOT_FOUND", "reviews.notFound");
    if (review.userId !== userId && !roles.includes("ADMIN") && !roles.includes("SUPER_ADMIN")) {
      throw new ApiError(403, "FORBIDDEN", "auth.forbidden");
    }
    await prisma.review.update({ where: { id }, data: { deletedAt: new Date() } });
    return { deleted: true };
  },

  async report(id: string, reason: string) {
    return prisma.review.update({ where: { id }, data: { status: "FLAGGED", reportReason: reason } });
  }
};
