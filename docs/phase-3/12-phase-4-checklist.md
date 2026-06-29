# Phase 4 Backend Implementation Checklist

Begin Phase 4 only after Phase 3 is reviewed and approved.

## Project Setup

- Initialize Git repository if still needed.
- Create backend workspace.
- Configure TypeScript.
- Configure linting and formatting.
- Add environment variable loading.
- Add `.env.example` with placeholders only.
- Add base test setup.

## Express Server

- Create Express app.
- Add health route.
- Add request ID middleware.
- Add JSON body parsing limits.
- Add CORS configuration.
- Add security headers.
- Add error handler.
- Add not-found handler.

## Prisma Setup

- Move approved schema into backend Prisma folder.
- Configure PostgreSQL datasource.
- Generate Prisma client.
- Create initial migration only after approval.
- Add seed script.
- Add database connection utility.

## Auth Module

- Implement register.
- Implement login.
- Implement Google OAuth exchange.
- Implement phone OTP request and verify.
- Implement JWT access tokens.
- Implement refresh token rotation.
- Implement logout.
- Implement password reset.
- Implement 2FA setup and verification.

## User Module

- User profile service.
- Role assignment service.
- Account status management.
- Language preference service.

## Customer Module

- Customer profile.
- Favorite vendors.
- Customer order history.
- Notifications.

## Vendor Module

- Vendor business registration.
- Vendor business profile update.
- Vendor location.
- Verification submission.
- Logo and cover upload.
- Business photos.
- Delivery settings.

## Menu Module

- Food categories.
- Menu item CRUD.
- Price editing.
- Availability toggles.
- Product images.

## Order Module

- Order creation.
- Order item price snapshots.
- Order timeline.
- Vendor order management.
- Status transition rules.
- Customer tracking.

## Payment Module

- Provider abstraction.
- Initial provider implementation.
- Cash on delivery.
- Payment initialization.
- Payment verification.
- Webhook handling.
- Refund request.
- Wallet transaction foundation.

## Maps Module

- Save vendor GPS location.
- Find nearby vendors.
- Calculate distance.
- Directions link generation.
- Delivery estimate foundation.

## Review Module

- Review creation.
- Review editing.
- Review deletion.
- Review photo upload.
- Review reporting.
- Admin moderation.

## Notification Module

- Notification creation.
- Notification listing.
- Mark as read.
- Translation-key notification payloads.

## Chat Module

- Conversation creation.
- Send message.
- List messages.
- Mark message as read.

## Admin Module

- Admin dashboard.
- Vendor approval.
- Vendor rejection.
- Vendor suspension.
- Customer management.
- Order management.
- Payment management.
- Fraud review.
- Advertisement management.
- Subscription plan management.
- Security logs.
- Audit trail.
- Settings.

## Security Middleware

- Authentication middleware.
- Role middleware.
- Ownership middleware.
- Recent-auth middleware.
- Request validation middleware.
- Rate limiting.
- Audit logging.
- Security logging.
- File upload validation.
- Webhook signature verification.

## Tests

- Auth unit tests.
- Auth integration tests.
- Vendor registration tests.
- Vendor approval tests.
- Menu management tests.
- Order creation tests.
- Payment verification tests.
- Webhook idempotency tests.
- RBAC tests.
- Security middleware tests.
- Validation tests.

## Phase 4 Exit Criteria

- Backend server runs locally.
- Prisma schema is migrated in development.
- Core auth works.
- RBAC middleware protects routes.
- Vendor registration and approval work.
- Customer can create an order.
- Vendor can update order status.
- Payment abstraction is implemented.
- Tests cover critical paths.
- No secrets are committed.
