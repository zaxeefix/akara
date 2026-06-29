# Monitoring and Logging

## Render Logs

Monitor:

- Backend startup failures.
- Prisma connection errors.
- API 5xx responses.
- Payment webhook failures.
- Rate-limit spikes.
- Authentication failures.

## Vercel Logs

Monitor:

- Frontend build failures.
- Runtime route errors.
- Slow page responses.
- Missing environment variables.
- PWA and metadata route errors.

## Backend Error Logs

Track:

- Request ID.
- Route.
- Status code.
- Error code.
- User role where safe.
- Never log secrets, tokens, passwords, OTPs, or payment secrets.

## Security Logs

Review:

- Failed logins.
- OTP failures.
- Admin login attempts.
- Permission denials.
- Refresh token anomalies.
- Webhook signature failures.

## Audit Logs

Review:

- Vendor approvals, rejections, and suspensions.
- Payment management actions.
- Review moderation.
- Settings changes.
- Admin role changes.

## Payment Logs

Track:

- Payment initialization.
- Verification success/failure.
- Webhook delivery.
- Duplicate references.
- Refund requests.

## Uptime Monitoring

Recommended checks:

- Frontend home page.
- Backend `GET /api/health`.
- Login endpoint availability.
- Payment webhook endpoint availability.

Suggested services:

- Better Stack.
- UptimeRobot.
- Render health checks.
- Vercel analytics and logs.

## Fraud Review

Review suspicious vendor activity:

- Repeated rejected vendors.
- Many failed payment attempts.
- Sudden review spikes.
- Repeated order cancellations.
- Unusual admin access attempts.
