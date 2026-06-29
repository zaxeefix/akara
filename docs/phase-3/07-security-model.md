# Security Model

## Security Goals

- Protect user accounts, vendor records, financial data, and admin operations.
- Prevent common web application attacks.
- Keep sensitive secrets out of source code.
- Preserve auditability for high-impact actions.
- Maintain payment and wallet integrity.

## OWASP Top 10 Protection

| Risk | Protection |
| --- | --- |
| Broken access control | RBAC middleware, ownership checks, admin 2FA, audit logs |
| Cryptographic failures | HTTPS, password hashing, encrypted secrets, secure cookies |
| Injection | Prisma parameterization, validation, no raw SQL unless reviewed |
| Insecure design | Threat modeling, approval workflows, least privilege |
| Security misconfiguration | Secure headers, environment-specific config, no secrets in logs |
| Vulnerable components | Dependency scanning, lockfile review, CI checks |
| Auth failures | Rate limits, 2FA, refresh token rotation, secure sessions |
| Integrity failures | Signed webhooks, CI/CD protections, audit logs |
| Logging failures | Security logs, payment webhook logs, admin action logs |
| SSRF | Validate external URLs, restrict server-side fetches |

## SQL Injection Protection

- Use Prisma query APIs.
- Avoid raw SQL.
- If raw SQL is required, use parameterized queries only.
- Validate and sanitize all query filters.
- Limit sorting fields to allowlisted values.

## XSS Protection

- Escape rendered text by default.
- Sanitize rich text if introduced later.
- Avoid rendering untrusted HTML.
- Use secure Content Security Policy.
- Validate uploaded file types.
- Store user-facing text safely.

## CSRF Protection

- Use CSRF protection for cookie-based session flows.
- Use SameSite cookies.
- Use non-cookie bearer tokens carefully.
- Protect mutating endpoints.

## Rate Limiting

Apply strict limits to:

- Login.
- OTP request.
- OTP verification.
- Password reset.
- Payment initialization.
- Webhook endpoints.
- Search and nearby vendor queries.
- Review creation.
- Chat messages.
- File uploads.
- Admin login.

## Password Hashing

- Use Argon2id preferred or bcrypt as fallback.
- Never store plain passwords.
- Enforce minimum password strength.
- Rehash on login if hashing parameters change.

## JWT Security

- Short-lived access tokens.
- Minimal claims.
- Strong signing secret or asymmetric keys.
- Validate issuer, audience, expiry, and signature.
- Do not store sensitive data in JWT.

## Refresh Token Rotation

- Store refresh token hashes only.
- Rotate refresh token on every refresh.
- Revoke old token after use.
- Detect token reuse and revoke the session family.
- Revoke all sessions after password reset.

## Secure Cookies

Use for browser refresh tokens:

- `HttpOnly`
- `Secure`
- `SameSite=Lax` or stricter depending on flow
- Limited path where possible
- Reasonable expiry

## Input Validation

- Validate all request bodies, params, and query strings.
- Reject unknown fields for sensitive endpoints.
- Normalize emails and phone numbers.
- Validate Nigerian phone formats.
- Validate coordinates.
- Validate money as decimal values, not floating-point calculations.

## File Upload Validation

- Validate file size.
- Validate MIME type and extension.
- Use image processing or Cloudinary transformations.
- Do not trust original file names.
- Store Cloudinary public IDs for deletion.
- Separate public images from sensitive verification documents.

## Cloudinary Upload Protection

- Prefer signed server-side upload flows for sensitive uploads.
- Restrict allowed formats.
- Restrict folder paths by environment and model type.
- Do not expose Cloudinary API secret to frontend.
- Validate returned URLs and public IDs.

## Admin Route Protection

- Require ADMIN or SUPER_ADMIN role.
- Require 2FA.
- Require recent authentication for critical actions.
- Audit all sensitive actions.
- Rate-limit admin login.
- Log suspicious access attempts.

## API Authorization Middleware

Every protected route should use:

- Authentication.
- Role check.
- Resource ownership check.
- Status check for suspended users/vendors.
- Optional permission check.

## Audit Logging

Audit:

- Vendor approval, rejection, suspension.
- Customer suspension.
- Payment management actions.
- Refund decisions.
- Settings changes.
- Subscription plan changes.
- Admin role changes.
- Review moderation.
- Security policy changes.

Audit logs should include:

- Actor.
- Action.
- Target type.
- Target ID.
- Before and after where safe.
- IP address.
- User agent.
- Timestamp.

## Security Logging

Log:

- Login attempts.
- OTP failures.
- 2FA failures.
- Refresh token reuse.
- Permission denials.
- Suspicious IP changes.
- Webhook signature failures.
- Rate-limit triggers.

## Backup Strategy

- Use Neon automated backups.
- Document manual backup process.
- Test restore before production.
- Keep payment webhook events for reconciliation.
- Export audit/security logs only through protected admin tools.

## Data Privacy

- Collect only needed personal data.
- Mask phone numbers in logs.
- Never log passwords, OTPs, tokens, or payment secrets.
- Restrict admin PII access.
- Support account deactivation and deletion policy.
- Keep financial records according to legal and operational requirements.

## Payment Webhook Security

- Verify provider signatures.
- Enforce idempotency using provider reference/event ID.
- Store raw payload for audit.
- Process only server-verified payments.
- Never trust client payment success alone.
- Reconcile delayed or failed callbacks.

## Environment Variable Protection

Never hard-code:

- Database URLs.
- JWT secrets.
- Paystack keys.
- Flutterwave keys.
- Google Maps keys.
- Cloudinary secrets.
- OTP provider keys.

Use:

- `.env.example` with placeholder names only.
- Hosting provider secret stores.
- Separate development, staging, and production secrets.
