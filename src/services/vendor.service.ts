import type { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";
import { distanceKm } from "../utils/distance";

export const vendorService = {
  async register(userId: string, data: Prisma.VendorUncheckedCreateInput) {
    return prisma.vendor.upsert({
      where: { userId },
      create: { ...data, userId, status: "PENDING" },
      update: { ...data, status: "PENDING" }
    });
  },

  async me(userId: string) {
    return prisma.vendor.findUnique({ where: { userId }, include: { menuItems: { include: { category: true } } } });
  },

  async updateMe(userId: string, data: Prisma.VendorUncheckedUpdateInput) {
    return prisma.vendor.update({ where: { userId }, data });
  },

  async list(filters: { status?: "APPROVED" | "PENDING" } = {}) {
    return prisma.vendor.findMany({
      where: { deletedAt: null, status: filters.status },
      orderBy: { createdAt: "desc" }
    });
  },

  async byId(id: string) {
    return prisma.vendor.findFirst({
      where: { id, deletedAt: null },
      include: { menuItems: { where: { deletedAt: null }, include: { category: true } }, reviews: true }
    });
  },

  async nearby(lat: number, lng: number, radius: number) {
    const vendors = await prisma.vendor.findMany({
      where: { status: "APPROVED", deletedAt: null, latitude: { not: null }, longitude: { not: null } },
      include: { menuItems: true }
    });

    return vendors
      .map((vendor) => ({
        ...vendor,
        distanceKm: distanceKm(lat, lng, Number(vendor.latitude), Number(vendor.longitude))
      }))
      .filter((vendor) => vendor.distanceKm <= radius)
      .sort((a, b) => a.distanceKm - b.distanceKm);
  },

  async submitVerification(userId: string) {
    return prisma.vendor.update({ where: { userId }, data: { status: "PENDING" } });
  },

  async verificationStatus(userId: string) {
    return prisma.vendor.findUnique({ where: { userId }, select: { status: true, rejectionReason: true, approvedAt: true, suspendedAt: true } });
  }
};
