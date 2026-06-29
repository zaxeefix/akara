import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema, vendorIdParamSchema } from "../validators/common.validators";
import { reviewCreateSchema, reviewReportSchema, reviewUpdateSchema } from "../validators/review.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { reviewService } from "../services/review.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.post("/", authenticate, requireRole("CUSTOMER"), validateRequest({ body: reviewCreateSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.create(req.user!.id, req.body), "reviews.created", 201);
}));

router.get("/vendors/:vendorId", validateRequest({ params: vendorIdParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.vendorReviews(requestParam(req.params.vendorId)));
}));

router.patch("/:id", authenticate, requireRole("CUSTOMER"), validateRequest({ params: idParamSchema, body: reviewUpdateSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.update(req.user!.id, requestParam(req.params.id), req.body), "reviews.updated");
}));

router.delete("/:id", authenticate, validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.remove(req.user!.id, req.user!.roles, requestParam(req.params.id)), "reviews.deleted");
}));

router.post("/:id/report", authenticate, validateRequest({ params: idParamSchema, body: reviewReportSchema }), asyncHandler(async (req, res) => {
  ok(res, await reviewService.report(requestParam(req.params.id), req.body.reason), "reviews.reported");
}));

export default router;
