import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema } from "../validators/common.validators";
import { orderCreateSchema, orderStatusSchema } from "../validators/order.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { orderService } from "../services/order.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.post("/", authenticate, requireRole("CUSTOMER"), validateRequest({ body: orderCreateSchema }), asyncHandler(async (req, res) => {
  ok(res, await orderService.create(req.user!.id, req.body), "orders.created", 201);
}));

router.get("/my-orders", authenticate, requireRole("CUSTOMER"), asyncHandler(async (req, res) => {
  ok(res, await orderService.myOrders(req.user!.id));
}));

router.get("/:id", authenticate, validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await orderService.byId(req.user!.id, req.user!.roles, requestParam(req.params.id)));
}));

router.patch("/:id/status", authenticate, validateRequest({ params: idParamSchema, body: orderStatusSchema }), asyncHandler(async (req, res) => {
  ok(res, await orderService.updateStatus(req.user!.id, req.user!.roles, requestParam(req.params.id), req.body.status), "orders.statusUpdated");
}));

export default router;
