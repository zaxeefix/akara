import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { menuService } from "../services/menu.service";

const router = Router();

router.get("/", asyncHandler(async (_req, res) => {
  ok(res, await menuService.categories());
}));

export default router;
