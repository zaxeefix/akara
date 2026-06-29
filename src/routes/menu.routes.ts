import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { requireRole } from "../middleware/require-role";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema } from "../validators/common.validators";
import { menuItemSchema, menuItemUpdateSchema } from "../validators/menu.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { menuService } from "../services/menu.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.post("/menu", authenticate, requireRole("VENDOR"), validateRequest({ body: menuItemSchema }), asyncHandler(async (req, res) => {
  ok(res, await menuService.create(req.user!.id, req.body), "menu.created", 201);
}));

router.get("/menu", authenticate, requireRole("VENDOR"), asyncHandler(async (req, res) => {
  ok(res, await menuService.mine(req.user!.id));
}));

router.patch("/menu/:id", authenticate, requireRole("VENDOR"), validateRequest({ params: idParamSchema, body: menuItemUpdateSchema }), asyncHandler(async (req, res) => {
  ok(res, await menuService.update(req.user!.id, requestParam(req.params.id), req.body), "menu.updated");
}));

router.delete("/menu/:id", authenticate, requireRole("VENDOR"), validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await menuService.remove(req.user!.id, requestParam(req.params.id)), "menu.deleted");
}));

export default router;
