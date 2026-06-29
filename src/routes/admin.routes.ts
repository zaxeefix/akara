import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { auditLog } from "../middleware/audit-log";
import { idParamSchema } from "../validators/common.validators";
import { adminDecisionSchema } from "../validators/admin.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { adminService } from "../services/admin.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.use(authenticate, requireRole("ADMIN", "SUPER_ADMIN"));

router.get("/dashboard", asyncHandler(async (_req, res) => {
  ok(res, await adminService.dashboard());
}));

router.get("/vendors/pending", asyncHandler(async (_req, res) => {
  ok(res, await adminService.pendingVendors());
}));

router.patch("/vendors/:id/approve", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  const id = requestParam(req.params.id);
  const vendor = await adminService.approveVendor(id);
  await auditLog(req, "VENDOR_APPROVED", "Vendor", id);
  ok(res, vendor, "admin.vendorApproved");
}));

router.patch("/vendors/:id/reject", validateRequest({ params: idParamSchema, body: adminDecisionSchema }), asyncHandler(async (req, res) => {
  const id = requestParam(req.params.id);
  const vendor = await adminService.rejectVendor(id, req.body.reason);
  await auditLog(req, "VENDOR_REJECTED", "Vendor", id, { reason: req.body.reason });
  ok(res, vendor, "admin.vendorRejected");
}));

router.patch("/vendors/:id/suspend", validateRequest({ params: idParamSchema, body: adminDecisionSchema }), asyncHandler(async (req, res) => {
  const id = requestParam(req.params.id);
  const vendor = await adminService.suspendVendor(id, req.body.reason);
  await auditLog(req, "VENDOR_SUSPENDED", "Vendor", id, { reason: req.body.reason });
  ok(res, vendor, "admin.vendorSuspended");
}));

router.get("/customers", asyncHandler(async (_req, res) => {
  ok(res, await adminService.customers());
}));

router.get("/orders", asyncHandler(async (_req, res) => {
  ok(res, await adminService.orders());
}));

router.get("/payments", asyncHandler(async (_req, res) => {
  ok(res, await adminService.payments());
}));

router.get("/security-logs", asyncHandler(async (_req, res) => {
  ok(res, await adminService.securityLogs());
}));

router.get("/audit-logs", asyncHandler(async (_req, res) => {
  ok(res, await adminService.auditLogs());
}));

export default router;
