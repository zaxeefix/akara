# Security

Phase 4 includes the backend security foundation:

- Helmet security headers.
- CORS allowlist.
- API rate limiting.
- Auth route rate limiting.
- bcrypt password hashing.
- JWT access token verification.
- Refresh token support with stored token hash.
- Role-based access control.
- Zod input validation.
- Central safe error handling.
- Audit logging helper.
- Security logging helper.
- File upload validation structure.
- Paystack webhook signature verification structure.

## Secrets

Never commit:

- `.env`
- Database URLs
- JWT secrets
- Paystack keys
- Google Maps keys
- Cloudinary secrets
- OTP credentials
- Private keys

## Access Control

Protected routes use authentication middleware. Admin routes require `ADMIN` or `SUPER_ADMIN`. Vendor menu and order management checks are scoped to the authenticated vendor's business.

## Payment Webhooks

Paystack webhook requests should include `x-paystack-signature`. The backend verifies the signature when `PAYSTACK_SECRET_KEY` is configured.

## File Uploads

The backend includes upload metadata validation structure for file size and MIME type. Actual Cloudinary upload endpoints should use signed or server-side uploads and must not expose Cloudinary secrets.

## Phase 6 Hardening Notes

- Frontend public variables must only contain values safe for browsers.
- Admin and vendor pages include route-guard scaffolding and must be connected to real session cookies before production.
- Payment webhooks must be tested with provider signatures before launch.
- Cloudinary upload endpoints must be completed server-side before accepting production uploads.
