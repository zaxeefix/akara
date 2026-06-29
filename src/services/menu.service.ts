import type { Prisma } from "@prisma/client";
import { prisma } from "../prisma/client";
import { ApiError } from "../utils/api-error";

const getVendorForUser = async (userId: string) => {
  const vendor = await prisma.vendor.findUnique({ where: { userId } });
  if (!vendor) throw new ApiError(404, "VENDOR_NOT_FOUND", "vendor.notFound");
  return vendor;
};

export const menuService = {
  categories() {
    return prisma.foodCategory.findMany({ where: { isActive: true }, orderBy: { name: "asc" } });
  },

  async create(userId: string, data: Omit<Prisma.MenuItemUncheckedCreateInput, "vendorId">) {
    const vendor = await getVendorForUser(userId);
    return prisma.menuItem.create({ data: { ...data, vendorId: vendor.id }, include: { category: true } });
  },

  async mine(userId: string) {
    const vendor = await getVendorForUser(userId);
    return prisma.menuItem.findMany({ where: { vendorId: vendor.id, deletedAt: null }, include: { category: true } });
  },

  async update(userId: string, itemId: string, data: Prisma.MenuItemUncheckedUpdateInput) {
    const vendor = await getVendorForUser(userId);
    const item = await prisma.menuItem.findFirst({ where: { id: itemId, vendorId: vendor.id } });
    if (!item) throw new ApiError(404, "MENU_ITEM_NOT_FOUND", "menu.notFound");
    return prisma.menuItem.update({ where: { id: itemId }, data, include: { category: true } });
  },

  async remove(userId: string, itemId: string) {
    const vendor = await getVendorForUser(userId);
    await prisma.menuItem.updateMany({ where: { id: itemId, vendorId: vendor.id }, data: { deletedAt: new Date() } });
    return { deleted: true };
  }
};
