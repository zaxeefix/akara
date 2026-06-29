# REST API Specification

## API Conventions

Base path: `/api/v1`

Response envelope:

```json
{
  "success": true,
  "data": {},
  "message": "translation.key.optional",
  "requestId": "req_123"
}
```

Error envelope:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "validation.failed",
    "details": []
  },
  "requestId": "req_123"
}
```

Common error responses:

- `400 VALIDATION_ERROR`
- `401 UNAUTHORIZED`
- `403 FORBIDDEN`
- `404 NOT_FOUND`
- `409 CONFLICT`
- `429 RATE_LIMITED`
- `500 INTERNAL_SERVER_ERROR`

Security defaults:

- All non-public endpoints require HTTPS.
- Authenticated endpoints require access token.
- Mutating endpoints require validation and authorization checks.
- Admin and vendor-sensitive endpoints are audited.
- Payment webhooks require provider signature verification.

## Authentication Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/auth/register` | Register user | Public | `name`, `email?`, `phone?`, `password`, `role?` | `user`, `accessToken`, `refreshToken?` | 400, 409, 429 | Hash password, validate role, rate limit |
| POST | `/auth/login` | Email/phone password login | Public | `identifier`, `password` | `user`, `accessToken`, `refreshToken?`, `requires2FA?` | 400, 401, 429 | Rate limit, security log failures |
| POST | `/auth/google` | Google OAuth login callback/exchange | Public | `idToken` or OAuth callback payload | `user`, `accessToken`, `refreshToken?` | 400, 401, 409 | Verify token server-side |
| POST | `/auth/otp/request` | Request phone OTP | Public | `phone`, `purpose` | `expiresIn`, `maskedPhone` | 400, 429 | Hash OTP, cooldown, no user enumeration |
| POST | `/auth/otp/verify` | Verify phone OTP | Public | `phone`, `code`, `purpose` | `user`, `accessToken`, `refreshToken?` | 400, 401, 429 | Limit attempts, consume OTP |
| POST | `/auth/logout` | Logout current session | Authenticated | `refreshToken?` | `revoked: true` | 401 | Revoke refresh token |
| POST | `/auth/refresh` | Refresh access token | Public | `refreshToken` | `accessToken`, `refreshToken` | 401, 429 | Refresh token rotation |
| POST | `/auth/forgot-password` | Request password reset | Public | `emailOrPhone` | `accepted: true` | 400, 429 | No account enumeration |
| POST | `/auth/reset-password` | Reset password | Public | `token`, `newPassword` | `updated: true` | 400, 401, 429 | Hash new password, revoke sessions |
| POST | `/auth/2fa/setup` | Start 2FA setup | VENDOR, ADMIN, SUPER_ADMIN | `method` | `setupData`, `recoveryCodes?` | 400, 401, 403 | Require recent auth |
| POST | `/auth/2fa/verify` | Verify 2FA challenge | VENDOR, ADMIN, SUPER_ADMIN | `code`, `challengeId?` | `verified: true`, `accessToken?` | 400, 401, 429 | Rate limit and audit |

## Customer Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GET | `/customers/me` | Get profile | CUSTOMER | None | `customerProfile` | 401, 403, 404 | Owner only |
| PATCH | `/customers/me` | Update profile | CUSTOMER | Profile fields | `customerProfile` | 400, 401, 403 | Validate fields |
| GET | `/customers/vendors/search` | Search vendors | Public/CUSTOMER | Query: `q`, `category`, `location`, `page` | `vendors`, `pagination` | 400 | Public data only |
| GET | `/customers/vendors/nearby` | Find nearby vendors | Public/CUSTOMER | Query: `lat`, `lng`, `radius`, `category` | `vendors`, `mapPins` | 400 | Validate coordinates |
| GET | `/customers/vendors/:vendorId` | View vendor details | Public/CUSTOMER | None | `vendor`, `menu`, `reviews` | 404 | Approved vendors only |
| POST | `/customers/favorites/:vendorId` | Add favorite | CUSTOMER | None | `favorite` | 401, 403, 404, 409 | Owner only |
| DELETE | `/customers/favorites/:vendorId` | Remove favorite | CUSTOMER | None | `removed: true` | 401, 403, 404 | Owner only |
| POST | `/customers/orders` | Place order | CUSTOMER | `vendorId`, `items`, `fulfillmentType`, `address?`, `note?` | `order` | 400, 401, 409 | Validate prices server-side |
| GET | `/customers/orders` | View orders | CUSTOMER | Query filters | `orders`, `pagination` | 401, 403 | Owner only |
| GET | `/customers/orders/:orderId/track` | Track order | CUSTOMER | None | `order`, `timeline`, `deliveryTracking` | 401, 403, 404 | Owner only |
| POST | `/customers/orders/:orderId/reviews` | Review vendor | CUSTOMER | `rating`, `comment?` | `review` | 400, 401, 403, 409 | Completed order preferred |
| POST | `/customers/vendors/:vendorId/report` | Report vendor | CUSTOMER | `reason`, `description?` | `fraudReport` | 400, 401, 404 | Abuse rate limit |
| GET | `/customers/notifications` | Notifications | CUSTOMER | Query: `read?`, `page` | `notifications` | 401 | Owner only |

## Vendor Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/vendors/businesses` | Register vendor business | VENDOR | Business registration fields | `vendorBusiness` | 400, 401, 403, 409 | Validate location/contact |
| PATCH | `/vendors/businesses/:businessId` | Update business profile | VENDOR | Business fields | `vendorBusiness` | 400, 401, 403, 404 | Owner check |
| POST | `/vendors/businesses/:businessId/logo` | Upload logo | VENDOR | Multipart image | `logoUrl` | 400, 401, 403 | File validation, Cloudinary |
| POST | `/vendors/businesses/:businessId/cover-photo` | Upload cover photo | VENDOR | Multipart image | `coverPhotoUrl` | 400, 401, 403 | File validation |
| POST | `/vendors/businesses/:businessId/photos` | Upload business photos | VENDOR | Multipart images | `photos` | 400, 401, 403 | Limit count/size |
| POST | `/vendors/businesses/:businessId/documents` | Submit verification documents | VENDOR | Multipart files, `type` | `documents` | 400, 401, 403 | Private storage rules |
| POST | `/vendors/businesses/:businessId/menu-items` | Create menu item | VENDOR | Menu item fields | `menuItem` | 400, 401, 403 | Owner check |
| PATCH | `/vendors/menu-items/:itemId` | Update menu item/prices | VENDOR | Menu item fields | `menuItem` | 400, 401, 403, 404 | Owner check, audit price changes |
| DELETE | `/vendors/menu-items/:itemId` | Delete menu item | VENDOR | None | `deleted: true` | 401, 403, 404 | Soft delete |
| GET | `/vendors/businesses/:businessId/orders` | Manage orders list | VENDOR | Query filters | `orders`, `pagination` | 401, 403 | Owner check |
| GET | `/vendors/orders/:orderId` | View order details | VENDOR | None | `order` | 401, 403, 404 | Owner check |
| PATCH | `/vendors/orders/:orderId/status` | Update order status | VENDOR | `status`, `note?` | `order`, `timelineEvent` | 400, 401, 403, 409 | Validate status transition |
| GET | `/vendors/businesses/:businessId/earnings` | View earnings | VENDOR | Query dates | `summary`, `transactions` | 401, 403 | Owner check |
| GET | `/vendors/businesses/:businessId/analytics` | View analytics | VENDOR | Query dates | `metrics`, `charts` | 401, 403 | Owner check |
| GET | `/vendors/businesses/:businessId/reviews` | View reviews | VENDOR | Query filters | `reviews`, `summary` | 401, 403 | Owner check |
| PATCH | `/vendors/businesses/:businessId/delivery-options` | Manage delivery settings | VENDOR | Delivery option fields | `deliveryOptions` | 400, 401, 403 | Validate fee/distance |

## Admin Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/admin/auth/login` | Admin login | ADMIN, SUPER_ADMIN | `identifier`, `password`, `twoFactorCode?` | `user`, `accessToken` | 401, 403, 429 | 2FA required, security log |
| GET | `/admin/dashboard` | Dashboard analytics | ADMIN, SUPER_ADMIN | Query dates | `metrics`, `queues` | 401, 403 | Admin only |
| POST | `/admin/vendors/:businessId/approve` | Approve vendor | ADMIN, SUPER_ADMIN | `notes?` | `vendorBusiness` | 401, 403, 404 | Audit log |
| POST | `/admin/vendors/:businessId/reject` | Reject vendor | ADMIN, SUPER_ADMIN | `reason`, `notes?` | `vendorBusiness` | 400, 401, 403 | Audit log |
| POST | `/admin/vendors/:businessId/suspend` | Suspend vendor | ADMIN, SUPER_ADMIN | `reason` | `vendorBusiness` | 400, 401, 403 | Audit log |
| GET | `/admin/customers` | Manage customers | ADMIN, SUPER_ADMIN | Query filters | `customers`, `pagination` | 401, 403 | PII access logged |
| GET | `/admin/orders` | Manage orders | ADMIN, SUPER_ADMIN | Query filters | `orders`, `pagination` | 401, 403 | Admin only |
| GET | `/admin/payments` | Manage payments | ADMIN, SUPER_ADMIN | Query filters | `payments`, `pagination` | 401, 403 | Financial access logged |
| GET | `/admin/fraud-reports` | Review fraud reports | ADMIN, SUPER_ADMIN | Query filters | `reports`, `pagination` | 401, 403 | Admin only |
| PATCH | `/admin/fraud-reports/:reportId` | Update fraud report | ADMIN, SUPER_ADMIN | `status`, `notes?` | `fraudReport` | 400, 401, 403 | Audit log |
| POST | `/admin/advertisements` | Manage advertisements | ADMIN, SUPER_ADMIN | Advertisement fields | `advertisement` | 400, 401, 403 | Validate placement |
| POST | `/admin/subscription-plans` | Manage subscription plans | SUPER_ADMIN | Plan fields | `plan` | 400, 401, 403 | Super admin only |
| GET | `/admin/security-logs` | View security logs | ADMIN, SUPER_ADMIN | Query filters | `logs`, `pagination` | 401, 403 | Security access logged |
| GET | `/admin/audit-logs` | View audit trail | ADMIN, SUPER_ADMIN | Query filters | `logs`, `pagination` | 401, 403 | Immutable records |
| GET | `/admin/localization` | Manage localization | ADMIN, SUPER_ADMIN | Query locale/key | `localizationStatus` | 401, 403 | UI files remain source of truth |
| PATCH | `/admin/settings/:key` | Manage settings | SUPER_ADMIN | `value` | `setting` | 400, 401, 403 | Secrets not returned |

## Payment Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/payments/initialize` | Initialize payment | CUSTOMER | `orderId`, `provider` | `payment`, `authorizationUrl?` | 400, 401, 403, 409 | Verify order ownership |
| POST | `/payments/verify` | Verify payment | CUSTOMER | `reference`, `provider` | `payment`, `order` | 400, 401, 404 | Server-side provider verification |
| POST | `/payments/webhooks/:provider` | Payment webhook | Provider | Raw provider payload | `received: true` | 400, 401 | Signature verification, idempotency |
| POST | `/payments/:paymentId/refund-request` | Refund request | CUSTOMER, ADMIN | `reason`, `amount?` | `refundRequest` | 400, 401, 403 | Ownership/admin check |
| POST | `/wallets/transactions` | Wallet transaction | CUSTOMER, VENDOR, ADMIN | `walletId`, `type`, `amount` | `transaction` | 400, 401, 403 | Ledger validation |
| POST | `/payments/cod/confirm` | Cash on delivery confirmation | VENDOR, ADMIN | `orderId`, `amountReceived` | `payment`, `order` | 400, 401, 403 | Vendor ownership or admin |

## Maps and Location Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PUT | `/locations/vendors/:businessId` | Save vendor GPS location | VENDOR | Address fields, `latitude`, `longitude`, `googlePlaceId?` | `vendorLocation` | 400, 401, 403 | Owner check |
| GET | `/locations/vendors/nearby` | Find vendors near coordinates | Public/CUSTOMER | Query: `lat`, `lng`, `radius` | `vendors` | 400 | Limit radius |
| GET | `/locations/distance` | Calculate distance | Public/CUSTOMER | Query: origin/destination | `distanceKm`, `duration` | 400 | Rate limit |
| GET | `/locations/directions-link` | Get directions link | Public/CUSTOMER | Query: `vendorId`, origin optional | `url` | 400, 404 | Public approved vendors |
| GET | `/locations/delivery-estimate` | Estimate delivery time | CUSTOMER | Query: `vendorId`, destination | `estimate` | 400, 401 | Validate coordinates |

## Review Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/reviews` | Create review | CUSTOMER | `orderId`, `vendorId`, `rating`, `comment?` | `review` | 400, 401, 403, 409 | Completed order check |
| PATCH | `/reviews/:reviewId` | Edit review | CUSTOMER | `rating?`, `comment?` | `review` | 400, 401, 403 | Owner check |
| DELETE | `/reviews/:reviewId` | Delete review | CUSTOMER, ADMIN | None | `deleted: true` | 401, 403, 404 | Soft delete/audit admin |
| POST | `/reviews/:reviewId/images` | Upload review photo | CUSTOMER | Multipart image | `reviewImage` | 400, 401, 403 | File validation |
| POST | `/reviews/:reviewId/report` | Report review | CUSTOMER, VENDOR | `reason`, `description?` | `fraudReport` | 400, 401, 403 | Rate limit |
| PATCH | `/admin/reviews/:reviewId/moderate` | Moderate review | ADMIN, SUPER_ADMIN | `status`, `notes?` | `review` | 400, 401, 403 | Audit log |

## Chat Endpoints

| Method | URL | Description | Role | Request body | Response body | Error responses | Security notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| POST | `/chats/conversations` | Create conversation | CUSTOMER, VENDOR, ADMIN | `vendorId?`, `orderId?`, `subject?` | `conversation` | 400, 401, 403 | Relationship check |
| POST | `/chats/conversations/:conversationId/messages` | Send message | CUSTOMER, VENDOR, ADMIN | `body`, `type?`, `media?` | `message` | 400, 401, 403 | Participant check, sanitize |
| GET | `/chats/conversations/:conversationId/messages` | Get messages | CUSTOMER, VENDOR, ADMIN | Query: `cursor`, `limit` | `messages`, `nextCursor` | 401, 403 | Participant check |
| PATCH | `/chats/messages/:messageId/read` | Mark as read | CUSTOMER, VENDOR, ADMIN | None | `readAt` | 401, 403, 404 | Participant check |
