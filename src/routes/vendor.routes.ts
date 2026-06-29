import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema } from "../validators/common.validators";
import { nearbyVendorQuerySchema, vendorRegisterSchema, vendorUpdateSchema, vendorVerificationSchema } from "../validators/vendor.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { vendorService } from "../services/vendor.service";
import { orderService } from "../services/order.service";
import { reviewService } from "../services/review.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.get("/nearby", validateRequest({ query: nearbyVendorQuerySchema }), asyncHandler(async (req, res) => {
  ok(res, await vendorService.nearby(req.query.lat as unknown as number, req.query.lng as unknown as number, req.query.radius as unknown as number));
}));

router.get("/", asyncHandler(async (_req, res) => {
  ok(res, await vendorService.list({ status: "APPROVED" }));
}));

router.get("/me", authenticate, requireRole("VENDOR"), asyncHandler(async (req, res) => {
  ok(res, await vendorService.me(req.user!.id));
}));

router.patch("/me", authenticate, requireRole("VENDOR"), validateRequest({ body: vendorUpdateSchema }), asyncHandler(async (req, res) => {
  ok(res, await vendorService.updateMe(req.user!.id, req.body), "vendors.updated");
}));

router.post("/register", authenticate, requireRole("VENDOR"), validateRequest({ body: vendorRegisterSchema }), asyncHandler(async (req, res) => {
  ok(res, await vendorService.register(req.user!.id, req.body), "vendors.registered", 201);
}));

router.post("/verification", authenticate, requireRole("VENDOR"), validateRequest({ body: vendorVerificationSchema }), asyncHandler(async (req, res) => {
  ok(res, await vendorService.submitVerification(req.user!.id), "vendors.verificationSubmitted");
}));

router.get("/verification/status", authenticate, requireRole("VENDOR"), asyncHandler(async (req, res) => {
  ok(res, await vendorService.verificationStatus(req.user!.id));
}));

router.get("/orders", authenticate, requireRole("VENDOR"), asyncHandler(async (req, res) => {
  ok(res, await orderService.vendorOrders(req.user!.id));
}));

router.get("/:id/reviews", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.vendorReviews(requestParam(req.params.id)));
}));

router.get("/:id", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await vendorService.byId(requestParam(req.params.id)));
}));

export default router;
