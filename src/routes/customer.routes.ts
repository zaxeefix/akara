import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema } from "../validators/common.validators";
import { updateCustomerSchema } from "../validators/customer.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { customerService } from "../services/customer.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.use(authenticate, requireRole("CUSTOMER"));

router.get("/me", asyncHandler(async (req, res) => {
  ok(res, await customerService.getProfile(req.user!.id));
}));

router.patch("/me", validateRequest({ body: updateCustomerSchema }), asyncHandler(async (req, res) => {
  ok(res, await customerService.updateProfile(req.user!.id, req.body), "customers.updated");
}));

router.get("/favorites", asyncHandler(async (req, res) => {
  ok(res, await customerService.favorites(req.user!.id));
}));

router.post("/favorites/:id", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await customerService.addFavorite(req.user!.id, requestParam(req.params.id)), "favorites.added", 201);
}));

router.delete("/favorites/:id", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await customerService.removeFavorite(req.user!.id, requestParam(req.params.id)), "favorites.removed");
}));

export default router;
