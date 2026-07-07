# AkaraConnect API

Base path: `/api`

All protected endpoints require:

```http
Authorization: Bearer <access_token>
```

## Health

- `GET /api/health`

## Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh-token`
- `GET /api/auth/me`

Google login, phone OTP, and 2FA have reserved service structure and should be completed with real providers in a later phase.

## Customers

- `GET /api/customers/me`
- `PATCH /api/customers/me`
- `GET /api/customers/favorites`
- `POST /api/customers/favorites/:vendorId`
- `DELETE /api/customers/favorites/:vendorId`

## Vendors

- `POST /api/vendors/register`
- `GET /api/vendors/me`
- `PATCH /api/vendors/me`
- `GET /api/vendors`
- `GET /api/vendors/:id`
- `GET /api/vendors/nearby`
- `POST /api/vendors/verification`
- `GET /api/vendors/verification/status`
- `GET /api/vendors/orders`

## Categories and Menu

- `GET /api/categories`
- `POST /api/vendors/menu`
- `GET /api/vendors/menu`
- `PATCH /api/vendors/menu/:itemId`
- `DELETE /api/vendors/menu/:itemId`

## Orders

- `POST /api/orders`
- `GET /api/orders/my-orders`
- `GET /api/orders/:id`
- `PATCH /api/orders/:id/status`

## Payments

- `POST /api/payments/initialize`
- `POST /api/payments/verify`
- `POST /api/payments/webhook`
- `GET /api/payments/my-payments`

## Reviews

- `POST /api/reviews`
- `GET /api/vendors/:vendorId/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `POST /api/reviews/:id/report`

## Notifications

- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`
- `PATCH /api/notifications/read-all`

## Admin

Admin endpoints require `ADMIN` or `SUPER_ADMIN`.

- `GET /api/admin/dashboard`
- `GET /api/admin/vendors/pending`
- `PATCH /api/admin/vendors/:id/approve`
- `PATCH /api/admin/vendors/:id/reject`
- `PATCH /api/admin/vendors/:id/suspend`
- `GET /api/admin/customers`
- `GET /api/admin/orders`
- `GET /api/admin/payments`
- `GET /api/admin/security-logs`
- `GET /api/admin/audit-logs`

## Search

- `GET /api/search/vendors`

Example queries:

```http
GET /api/search/vendors?keyword=akara
GET /api/search/vendors?state=Kaduna
GET /api/search/vendors?lga=Kaduna%20North
GET /api/search/vendors?lat=10.5105&lng=7.4165&radius=5
```

## Integration Notes

Production frontend requests use the same-origin Next.js `/api/*` proxy. Vercel should set `AKARACONNECT_API_URL` to the Render backend `/api` base URL. `NEXT_PUBLIC_API_URL` is only needed when intentionally exposing a browser-side backend URL.

Authenticated requests should include the bearer access token. Payment verification and webhook trust must always be completed on the backend.

## Beta Placeholders

The following modules have safe API architecture or UI placeholders but are not full production workflows yet:

- Delivery rider jobs and earnings.
- Vendor staff management.
- Wallets, withdrawal requests, and automated settlement.
- CMS pages, advertisements, and blog management.
- AI recommendations, fraud scoring, and spam detection.
- Vendor subscription plan automation.
