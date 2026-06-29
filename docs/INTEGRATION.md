# Integration Plan

## Frontend to Backend

The frontend API client uses:

```bash
NEXT_PUBLIC_API_URL=
```

This should point to the backend `/api` base URL, for example:

```text
https://akaraconnect-api.onrender.com/api
```

## Auth

Connected endpoint structure:

- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`
- Logout: `POST /api/auth/logout`
- Refresh token: `POST /api/auth/refresh-token`
- Current user: `GET /api/auth/me`

Prepared placeholders:

- Google login.
- Phone OTP.
- 2FA.

Production requirement:

- Replace local-storage session handling with secure cookie/session handling before launch if browser threat model requires it.

## Customer Workflow

1. Customer registers or logs in.
2. Customer searches vendors through `/api/search/vendors`.
3. Customer finds nearby vendors through coordinates.
4. Customer opens vendor profile.
5. Customer adds menu items to cart.
6. Customer chooses pickup or delivery.
7. Customer initializes payment or chooses cash on delivery.
8. Customer tracks order.
9. Customer reviews vendor.
10. Customer saves favorite vendor.
11. Customer receives notifications.

## Vendor Workflow

1. Vendor registers account.
2. Vendor registers business.
3. Vendor submits verification.
4. Vendor updates business profile.
5. Vendor creates and edits menu items.
6. Vendor receives orders.
7. Vendor updates order status.
8. Vendor views earnings, analytics, and reviews.

## Admin Workflow

1. Admin logs in.
2. Admin views dashboard.
3. Admin approves, rejects, or suspends vendors.
4. Admin manages customers and vendors.
5. Admin reviews orders and payments.
6. Admin reviews fraud, security logs, and audit logs.

## Maps

Frontend uses:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

Backend should remain responsible for any private Maps usage. Fallbacks must show vendor address, distance, and Google Maps directions link.

## Payments

Frontend uses only:

```bash
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
```

Backend owns:

- Paystack secret key.
- Payment initialization trust.
- Payment verification.
- Webhook signature verification.

## Uploads

Cloudinary secrets remain backend-only.

Upload flows to complete before production:

- Vendor logo.
- Vendor cover photo.
- Business photos.
- Menu item images.
- Review photos.
- Verification documents.

Validation:

- File size.
- MIME type.
- Extension.
- Upload purpose.
- Ownership and role checks.
