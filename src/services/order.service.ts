import type { OrderStatus } from "@prisma/client";
import { prisma } from "../prisma/client";
import { ApiError } from "../utils/api-error";

export const orderService = {
  async create(userId: string, data: { vendorId: string; deliveryType: "PICKUP" | "DELIVERY"; deliveryAddress?: string; customerNote?: string; items: Array<{ menuItemId: string; quantity: number }> }) {
    const menuItems = await prisma.menuItem.findMany({
      where: { id: { in: data.items.map((item) => item.menuItemId) }, vendorId: data.vendorId, deletedAt: null, isAvailable: true }
    });

    if (menuItems.length !== data.items.length) {
      throw new ApiError(400, "INVALID_ORDER_ITEMS", "orders.invalidItems");
    }

    const subtotal = data.items.reduce((sum, item) => {
      const menuItem = menuItems.find((entry) => entry.id === item.menuItemId);
      return sum + Number(menuItem?.price ?? 0) * item.quantity;
    }, 0);
    const deliveryFee = data.deliveryType === "DELIVERY" ? 500 : 0;
    const total = subtotal + deliveryFee;

    return prisma.order.create({
      data: {
        orderNumber: `AKC-${Date.now()}`,
        customerId: userId,
        vendorId: data.vendorId,
        deliveryType: data.deliveryType,
        deliveryAddress: data.deliveryAddress,
        customerNote: data.customerNote,
        subtotal,
        deliveryFee,
        total,
        items: {
          create: data.items.map((item) => {
            const menuItem = menuItems.find((entry) => entry.id === item.menuItemId)!;
            return {
              menuItemId: menuItem.id,
              name: menuItem.name,
              quantity: item.quantity,
              unitPrice: menuItem.price,
              total: Number(menuItem.price) * item.quantity
            };
          })
        }
      },
      include: { items: true, vendor: true }
    });
  },

  myOrders(userId: string) {
    return prisma.order.findMany({ where: { customerId: userId }, include: { items: true, vendor: true, payments: true }, orderBy: { createdAt: "desc" } });
  },

  async byId(userId: string, roles: string[], id: string) {
    const order = await prisma.order.findUnique({ where: { id }, include: { items: true, vendor: true, payments: true } });
    if (!order) throw new ApiError(404, "ORDER_NOT_FOUND", "orders.notFound");
    const canAdmin = roles.includes("ADMIN") || roles.includes("SUPER_ADMIN");
    const canCustomer = order.customerId === userId;
    const canVendor = order.vendor.userId === userId;
    if (!canAdmin && !canCustomer && !canVendor) throw new ApiError(403, "FORBIDDEN", "auth.forbidden");
    return order;
  },

  async updateStatus(userId: string, roles: string[], id: string, status: OrderStatus) {
    const order = await prisma.order.findUnique({ where: { id }, include: { vendor: true } });
    if (!order) throw new ApiError(404, "ORDER_NOT_FOUND", "orders.notFound");
    const canAdmin = roles.includes("ADMIN") || roles.includes("SUPER_ADMIN");
    const canVendor = order.vendor.userId === userId;
    if (!canAdmin && !canVendor) throw new ApiError(403, "FORBIDDEN", "auth.forbidden");
    return prisma.order.update({ where: { id }, data: { status }, include: { items: true, vendor: true } });
  },

  async vendorOrders(userId: string) {
    const vendor = await prisma.vendor.findUnique({ where: { userId } });
    if (!vendor) throw new ApiError(404, "VENDOR_NOT_FOUND", "vendor.notFound");
    return prisma.order.findMany({ where: { vendorId: vendor.id }, include: { items: true, payments: true }, orderBy: { createdAt: "desc" } });
  }
};
