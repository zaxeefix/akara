import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import { authLimiter } from "../middleware/rate-limit";
import { validateRequest } from "../middleware/validate-request";
import { googleLoginSchema, loginSchema, otpRequestSchema, otpVerifySchema, refreshTokenSchema, registerSchema } from "../validators/auth.validators";
import { asyncHandler } from "../utils/async-handler";
import { ok } from "../utils/api-response";
import { authService } from "../services/auth.service";
import { ApiError } from "../utils/api-error";

const router = Router();

router.post("/register", authLimiter, validateRequest({ body: registerSchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.register(req.body), "auth.registered", 201);
}));

router.post("/login", authLimiter, validateRequest({ body: loginSchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.login(req.body.identifier, req.body.password), "auth.loggedIn");
}));

router.post("/logout", authenticate, asyncHandler(async (req, res) => {
  ok(res, await authService.logout(req.user!.id), "auth.loggedOut");
}));

router.post("/refresh-token", validateRequest({ body: refreshTokenSchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.refresh(req.body.refreshToken), "auth.refreshed");
}));

router.get("/me", authenticate, asyncHandler(async (req, res) => {
  ok(res, await authService.me(req.user!.id));
}));

router.post("/google", authLimiter, validateRequest({ body: googleLoginSchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.googleLogin(req.body), "auth.loggedIn");
}));

router.post("/otp/request", authLimiter, validateRequest({ body: otpRequestSchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.requestOtp(req.body), "auth.otpRequested");
}));

router.post("/otp/verify", authLimiter, validateRequest({ body: otpVerifySchema }), asyncHandler(async (req, res) => {
  ok(res, await authService.verifyOtp(req.body), "auth.loggedIn");
}));

router.post("/2fa/setup", authenticate, asyncHandler(async () => {
  throw new ApiError(501, "NOT_IMPLEMENTED", "auth.twoFactorNotConfigured");
}));

router.post("/2fa/verify", authLimiter, asyncHandler(async () => {
  throw new ApiError(501, "NOT_IMPLEMENTED", "auth.twoFactorNotConfigured");
}));

export default router;
