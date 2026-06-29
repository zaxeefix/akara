# High-Level Architecture

## Architecture Overview

AkaraConnect should use a modular web architecture with a Next.js frontend, an Express.js API backend, PostgreSQL hosted on Neon, and Prisma as the database access layer. Third-party integrations should be wrapped behind internal service interfaces so providers can be changed or expanded without rewriting core marketplace logic.

## Main Components

```text
Users
  |
  | Web Browser / Mobile Browser
  v
Next.js Frontend on Vercel
  |
  | HTTPS API calls
  v
Express.js Backend on Render
  |
  | Prisma
  v
PostgreSQL on Neon

External Services:
- NextAuth / Google OAuth
- Phone OTP provider
- Cloudinary
- Google Maps API
- Google Places API
- Payment providers
- Notification providers
- GitHub Actions
```

## Frontend Layer

Technology:

- Next.js
- React
- TypeScript
- Tailwind CSS

Responsibilities:

- Render public, customer, vendor, and admin interfaces.
- Handle client-side interactions.
- Use localized text from i18n files.
- Provide responsive mobile-first layouts.
- Use API clients for backend communication.
- Display maps and location-aware discovery.
- Protect role-specific routes.

## Backend Layer

Technology:

- Node.js
- Express.js
- TypeScript

Responsibilities:

- Provide REST APIs.
- Validate requests.
- Enforce role-based permissions.
- Manage order lifecycle.
- Coordinate payment verification.
- Handle vendor approval logic.
- Manage Cloudinary uploads.
- Generate notifications.
- Record audit logs.
- Protect against abuse through rate limiting and security middleware.

## Data Layer

Technology:

- PostgreSQL on Neon
- Prisma

Responsibilities:

- Persist users, vendors, menus, orders, payments, reviews, notifications, audit logs, and settings.
- Enforce relational integrity.
- Support geospatial query strategy where feasible.
- Provide migration workflow in Phase 2 or later.

## Integration Layer

External integrations should be isolated through service modules:

- Payment service
- Map service
- Storage service
- Notification service
- OTP service
- Auth service

This keeps core marketplace logic stable even if providers change.

## Security Architecture

- HTTPS for all production traffic.
- JWT and secure sessions for authentication.
- OAuth for Google login.
- Phone OTP verification.
- Role-based access control.
- Admin two-factor authentication.
- Rate limiting for sensitive routes.
- Input validation at API boundaries.
- Prisma query safety for SQL injection protection.
- XSS protection through safe rendering and sanitization.
- CSRF protection for session-based routes.
- Audit logs for sensitive actions.
- Secure environment variable management.
- Backups and recovery planning.

## Localization Architecture

- All user-facing text should use translation keys.
- Language files should be organized by locale.
- Initial locales: `en`, `ha`, `yo`, `ig`, `tiv`.
- Browser language detection should select supported languages automatically.
- Manual language selection should override browser detection.
- Adding a new language should require adding a language file, not changing core application code.

## Payment Architecture

The payment module should use an internal provider interface.

Initial MVP recommendation:

- Start with one primary payment provider for implementation simplicity.
- Keep cash on delivery as an offline option.
- Design for Paystack, Flutterwave, Moniepoint, Opay, PalmPay, Visa, Mastercard, bank transfer, wallet, and cash on delivery.

Payment lifecycle:

1. Create order.
2. Initialize payment if online.
3. Redirect or open payment authorization.
4. Receive provider callback or webhook.
5. Verify transaction server-side.
6. Update payment and order status.
7. Notify customer and vendor.

## Deployment Architecture

- Frontend hosted on Vercel.
- Backend hosted on Render.
- Database hosted on Neon.
- Media hosted on Cloudinary.
- Version control on GitHub.
- CI/CD through GitHub Actions.

## Observability Plan

MVP should prepare for:

- Structured logs.
- Error tracking.
- Request IDs.
- Payment webhook logs.
- Admin action audit logs.
- Security event logs.
- Basic uptime monitoring.

## Scalability Considerations

- Separate frontend and backend deployments.
- Modular service boundaries.
- Provider abstraction for payments and notifications.
- Database indexes for vendor discovery, order history, and admin queues.
- Caching strategy for categories and public vendor data in later phases.
- Background jobs for notifications, reports, reconciliation, and cleanup in later phases.
