import { prisma } from "../prisma/client";

export const adminService = {
  async dashboard() {
    const [users, vendorsPending, orders, payments, securityLogs] = await Promise.all([
      prisma.user.count(),
      prisma.vendor.count({ where: { status: "PENDING" } }),
      prisma.order.count(),
      prisma.payment.count(),
      prisma.securityLog.findMany({ take: 10, orderBy: { createdAt: "desc" } })
    ]);
    return { users, vendorsPending, orders, payments, securityLogs };
  },

  pendingVendors() {
    return prisma.vendor.findMany({ where: { status: "PENDING" }, orderBy: { createdAt: "desc" } });
  },

  approveVendor(id: string) {
    return prisma.vendor.update({ where: { id }, data: { status: "APPROVED", approvedAt: new Date(), rejectionReason: null } });
  },

  rejectVendor(id: string, reason?: string) {
    return prisma.vendor.update({ where: { id }, data: { status: "REJECTED", rejectionReason: reason } });
  },

  suspendVendor(id: string, reason?: string) {
    return prisma.vendor.update({ where: { id }, data: { status: "SUSPENDED", suspendedAt: new Date(), rejectionReason: reason } });
  },

  customers() {
    return prisma.user.findMany({ where: { roles: { has: "CUSTOMER" } }, select: { id: true, name: true, email: true, phone: true, status: true, createdAt: true } });
  },

  orders() {
    return prisma.order.findMany({ include: { items: true, vendor: true, customer: { select: { id: true, name: true } } }, orderBy: { createdAt: "desc" } });
  },

  payments() {
    return prisma.payment.findMany({ include: { order: true, user: { select: { id: true, name: true } } }, orderBy: { createdAt: "desc" } });
  },

  securityLogs() {
    return prisma.securityLog.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
  },

  auditLogs() {
    return prisma.auditLog.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
  }
};
