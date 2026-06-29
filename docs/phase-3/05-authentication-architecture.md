# Authentication Architecture

## Supported Roles

- `CUSTOMER`
- `VENDOR`
- `ADMIN`
- `SUPER_ADMIN`
- `RIDER` future role

Users can have more than one role. For example, a vendor can also order as a customer.

## Core Auth Components

- NextAuth for frontend-oriented authentication flows.
- Backend JWT access token for API authorization.
- Refresh token rotation for long-lived sessions.
- Google OAuth for social login.
- Phone OTP for phone verification and phone login.
- Password hashing for email/password accounts.
- 2FA for admins and vendors.
- RBAC middleware on protected routes.

## Email and Password Flow

1. User submits email or phone and password.
2. API validates request body.
3. API finds user by email or phone.
4. API checks account status.
5. API verifies password hash.
6. If user requires 2FA, API returns 2FA challenge.
7. If successful, API issues short-lived access token and refresh token.
8. API logs successful login.

Security:

- Passwords must be hashed with Argon2id or bcrypt.
- Login attempts must be rate-limited.
- Failed logins must create security logs.
- Error messages must not reveal whether an account exists.

## Google OAuth Flow

1. User selects Continue with Google.
2. Frontend starts OAuth flow through NextAuth or sends Google credential to backend.
3. Backend verifies Google token server-side.
4. Backend matches existing user by verified email.
5. If no user exists, backend creates user with default CUSTOMER role.
6. Backend issues application tokens.
7. User lands on intended page.

Security:

- Accept only verified Google emails.
- Store OAuth provider ID if needed.
- Do not trust frontend-only identity claims.

## Phone OTP Flow

1. User enters phone number.
2. API normalizes and validates Nigerian phone format.
3. API creates hashed OTP with expiry.
4. OTP provider sends code.
5. User submits code.
6. API checks hash, expiry, and attempt count.
7. API marks phone verified or logs user in.
8. API consumes OTP.

Security:

- OTPs are never stored in plain text.
- Codes expire quickly.
- Request and verify endpoints are rate-limited.
- Attempts are capped.

## JWT Access Token

Access token should include minimal claims:

- `sub`: user ID.
- `roles`: assigned roles.
- `sessionId` or token version if needed.
- `iat` and `exp`.

Recommended lifetime:

- 10 to 15 minutes.

Security:

- Use strong secret or asymmetric signing.
- Never include sensitive personal data.
- Validate token issuer and expiry.
- Rotate secrets with a plan.

## Refresh Token

Refresh tokens should be:

- Long-lived but revocable.
- Stored hashed in database.
- Rotated on every use.
- Revoked on logout, password reset, account suspension, or suspicious activity.

Recommended storage:

- Secure, HTTP-only cookie for browser flows.
- If mobile app exists later, use secure device storage.

## Admin Login

Admin login must require:

- Email/password.
- 2FA challenge.
- Active ADMIN or SUPER_ADMIN role.
- Non-suspended account.

Admin sessions should have:

- Shorter idle timeout.
- Security log on login, logout, failed 2FA, and sensitive actions.
- Strict route protection.

## Vendor Login

Vendor login can use:

- Email/password.
- Google login if account is linked.
- Phone OTP where supported.

2FA should be optional for basic vendors at MVP but strongly recommended. It may become required for high-volume vendors or payout access.

## Customer Login

Customer login can use:

- Email/password.
- Google login.
- Phone OTP.

2FA is not required for MVP customers.

## 2FA for Admins and Vendors

Supported methods:

- TOTP authenticator app recommended.
- OTP by SMS can be fallback, but less secure.

Flow:

1. User starts setup.
2. System verifies recent login.
3. System generates secret or challenge.
4. User verifies code.
5. System enables 2FA.
6. Recovery codes are generated if supported.

Required for:

- Admins.
- Super admins.

Recommended for:

- Vendors.
- Vendors accessing payouts or sensitive settings.

## Session Revocation

Revoke sessions when:

- User logs out.
- Password changes.
- 2FA settings change.
- Account is suspended.
- Refresh token reuse is detected.
- Admin forces logout.

## Auth Auditing

Create security logs for:

- Login success and failure.
- OTP request and failed verify.
- Refresh token reuse.
- Password reset.
- 2FA setup and verification.
- Admin login.
- Suspicious IP or device changes.
