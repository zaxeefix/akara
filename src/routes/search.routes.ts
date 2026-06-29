import { Router } from "express";
import { validateRequest } from "../middleware/validate-request";
import { vendorSearchQuerySchema } from "../validators/search.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { searchService } from "../services/search.service";

const router = Router();

router.get("/vendors", validateRequest({ query: vendorSearchQuerySchema }), asyncHandler(async (req, res) => {
  ok(res, await searchService.vendors(req.query as never));
}));

export default router;
