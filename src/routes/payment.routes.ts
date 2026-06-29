import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { paymentInitializeSchema, paymentVerifySchema } from "../validators/payment.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { paymentService } from "../services/payment.service";

const router = Router();

router.post("/initialize", authenticate, requireRole("CUSTOMER"), validateRequest({ body: paymentInitializeSchema }), asyncHandler(async (req, res) => {
  ok(res, await paymentService.initialize(req.user!.id, req.body), "payments.initialized", 201);
}));

router.post("/verify", authenticate, requireRole("CUSTOMER"), validateRequest({ body: paymentVerifySchema }), asyncHandler(async (req, res) => {
  ok(res, await paymentService.verify(req.user!.id, req.body.reference), "payments.verified");
}));

router.post("/webhook", asyncHandler(async (req, res) => {
  ok(res, await paymentService.webhook(req.header("x-paystack-signature"), req.body), "payments.webhookReceived");
}));

router.get("/my-payments", authenticate, requireRole("CUSTOMER"), asyncHandler(async (req, res) => {
  ok(res, await paymentService.myPayments(req.user!.id));
}));

export default router;
