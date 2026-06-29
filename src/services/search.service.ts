import { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";
import { distanceKm } from "../utils/distance";

export const searchService = {
  async vendors(query: {
    keyword?: string;
    state?: string;
    lga?: string;
    community?: string;
    category?: string;
    lat?: number;
    lng?: number;
    radius: number;
    page: number;
    limit: number;
  }) {
    const where: Prisma.VendorWhereInput = {
      status: "APPROVED",
      deletedAt: null,
      state: query.state ? { contains: query.state, mode: "insensitive" } : undefined,
      localGovernment: query.lga ? { contains: query.lga, mode: "insensitive" } : undefined,
      community: query.community ? { contains: query.community, mode: "insensitive" } : undefined,
      OR: query.keyword ? [
        { businessName: { contains: query.keyword, mode: "insensitive" } },
        { description: { contains: query.keyword, mode: "insensitive" } },
        { menuItems: { some: { name: { contains: query.keyword, mode: "insensitive" } } } }
      ] : undefined,
      menuItems: query.category ? { some: { category: { slug: query.category } } } : undefined
    };

    const vendors = await prisma.vendor.findMany({
      where,
      include: { menuItems: { include: { category: true } } },
      skip: (query.page - 1) * query.limit,
      take: query.limit
    });

    if (query.lat !== undefined && query.lng !== undefined) {
      return vendors
        .filter((vendor) => vendor.latitude !== null && vendor.longitude !== null)
        .map((vendor) => ({ ...vendor, distanceKm: distanceKm(query.lat!, query.lng!, Number(vendor.latitude), Number(vendor.longitude)) }))
        .filter((vendor) => vendor.distanceKm <= query.radius)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    }

    return vendors;
  }
};
