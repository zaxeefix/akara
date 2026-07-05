import { Router } from "express";
import authRoutes from "./auth.routes";
import customerRoutes from "./customer.routes";
import vendorRoutes from "./vendor.routes";
import menuRoutes from "./menu.routes";
import categoryRoutes from "./category.routes";
import orderRoutes from "./order.routes";
import paymentRoutes from "./payment.routes";
import reviewRoutes from "./review.routes";
import notificationRoutes from "./notification.routes";
import adminRoutes from "./admin.routes";
import searchRoutes from "./search.routes";
import { prisma } from "../prisma/client";
import { ok } from "../utils/api-response";

const router = Router();

router.get("/health", (_req, res) => {
  ok(res, {
    service: "AkaraConnect API",
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

router.get("/ready", async (_req, res, next) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    ok(res, {
      service: "AkaraConnect API",
      status: "ready",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

router.use("/auth", authRoutes);
router.use("/customers", customerRoutes);
router.use("/categories", categoryRoutes);
router.use("/vendors", menuRoutes);
router.use("/vendors", vendorRoutes);
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);
router.use("/reviews", reviewRoutes);
router.use("/notifications", notificationRoutes);
router.use("/admin", adminRoutes);
router.use("/search", searchRoutes);

export default router;
