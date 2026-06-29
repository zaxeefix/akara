# Phase 3 Checklist

Begin Phase 3 only after Phase 2 UI/UX planning is reviewed and approved.

## Database Schema

- Define core entities.
- Define relationships.
- Define required fields.
- Define optional fields.
- Define indexes.
- Define unique constraints.
- Define audit log storage.
- Define soft delete strategy where needed.
- Define geolocation storage strategy.
- Define payment and webhook records.
- Define localization-related records if admin-managed translations are stored.

## ER Diagram

- Create ER diagram for users, roles, vendors, menu items, categories, orders, payments, reviews, notifications, audit logs, and admin actions.
- Include vendor registration and approval states.
- Include customer favorites.
- Include order status timeline.
- Include payment transaction references.
- Include future rider extension points.

## Prisma Models

- Plan Prisma model names and relationships.
- Define enums for roles, order status, payment status, vendor status, review status, and notification type.
- Plan indexes for search, vendor location, order history, approval queues, and audit logs.
- Confirm migration strategy.
- Confirm seed data strategy for categories and languages.

## API Specification

- Define API style and route conventions.
- Define authentication endpoints.
- Define customer endpoints.
- Define vendor endpoints.
- Define admin endpoints.
- Define order endpoints.
- Define payment endpoints.
- Define review endpoints.
- Define notification endpoints.
- Define localization endpoints if needed.
- Define request and response shapes.
- Define error response format.
- Define pagination, filtering, and sorting conventions.
- Define webhook endpoints and verification requirements.

## Authentication Architecture

- Confirm NextAuth integration strategy.
- Confirm JWT/session approach.
- Confirm Google login flow.
- Confirm phone OTP provider and flow.
- Confirm password hashing approach.
- Confirm account linking rules.
- Confirm session expiration and refresh behavior.
- Confirm admin two-factor authentication.

## Role-Based Access Control

- Define roles: customer, vendor, admin, future rider.
- Define permissions for each role.
- Define admin permission levels.
- Define protected frontend routes.
- Define protected backend routes.
- Define ownership checks for vendor and customer resources.
- Define audit logging for sensitive actions.

## Security Model

- Define threat model for MVP.
- Define OWASP Top 10 controls.
- Define rate limiting rules.
- Define input validation strategy.
- Define CSRF strategy.
- Define XSS prevention strategy.
- Define SQL injection prevention strategy through Prisma and validation.
- Define secure headers.
- Define environment secret management.
- Define payment webhook verification.
- Define file upload validation.
- Define backup and restore approach.
- Define logging and monitoring requirements.

## Data Privacy

- Identify personal data collected.
- Define data retention policy.
- Define customer account deletion or deactivation behavior.
- Define vendor data visibility rules.
- Define admin access controls for sensitive information.

## Integration Planning

- Confirm Cloudinary upload architecture.
- Confirm Google Maps and Places usage.
- Confirm payment provider priority.
- Confirm OTP provider.
- Confirm notification channels.
- Confirm deployment environment variable needs.

## Phase 3 Exit Criteria

- Database schema is reviewed.
- ER diagram is complete.
- Prisma model plan is approved.
- API specification is complete enough for implementation.
- Authentication architecture is approved.
- RBAC matrix is approved.
- Security model is approved.
- Phase 4 implementation scope is clear.
