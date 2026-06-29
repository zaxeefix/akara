import { prisma } from "../prisma/client";

export const customerService = {
  async getProfile(userId: string) {
    return prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        language: true,
        customerProfile: true
      }
    });
  },

  async updateProfile(userId: string, data: { name?: string; firstName?: string; lastName?: string; address?: string; language?: string }) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        language: data.language,
        customerProfile: {
          upsert: {
            create: { firstName: data.firstName, lastName: data.lastName, address: data.address },
            update: { firstName: data.firstName, lastName: data.lastName, address: data.address }
          }
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        language: true,
        customerProfile: true
      }
    });
  },

  async favorites(userId: string) {
    return prisma.favorite.findMany({
      where: { userId },
      include: { vendor: true },
      orderBy: { createdAt: "desc" }
    });
  },

  async addFavorite(userId: string, vendorId: string) {
    return prisma.favorite.upsert({
      where: { userId_vendorId: { userId, vendorId } },
      create: { userId, vendorId },
      update: {},
      include: { vendor: true }
    });
  },

  async removeFavorite(userId: string, vendorId: string) {
    await prisma.favorite.deleteMany({ where: { userId, vendorId } });
    return { removed: true };
  }
};
