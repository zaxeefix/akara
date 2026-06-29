import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { validateRequest } from "../middleware/validate-request";
import { idParamSchema } from "../validators/common.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { notificationService } from "../services/notification.service";
import { requestParam } from "../utils/request-param";

const router = Router();

router.use(authenticate);

router.get("/", asyncHandler(async (req, res) => {
  ok(res, await notificationService.list(req.user!.id));
}));

router.patch("/read-all", asyncHandler(async (req, res) => {
  ok(res, await notificationService.readAll(req.user!.id), "notifications.readAll");
}));

router.patch("/:id/read", validateRequest({ params: idParamSchema }), asyncHandler(async (req, res) => {
  ok(res, await notificationService.read(req.user!.id, requestParam(req.params.id)), "notifications.read");
}));

export default router;
