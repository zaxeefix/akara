import { prisma } from "../prisma/client";

export const notificationService = {
  list(userId: string) {
    return prisma.notification.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
  },

  read(userId: string, id: string) {
    return prisma.notification.updateMany({ where: { id, userId }, data: { readAt: new Date() } });
  },

  readAll(userId: string) {
    return prisma.notification.updateMany({ where: { userId, readAt: null }, data: { readAt: new Date() } });
  }
};
