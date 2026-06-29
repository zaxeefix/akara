# Database Architecture

## Goals

The AkaraConnect database should support thousands of vendors, millions of customers, high order volume, location-based discovery, payment reconciliation, moderation workflows, auditability, and future rider expansion.

The design should prioritize:

- Relational integrity.
- Fast vendor discovery.
- Safe financial records.
- Clear user role separation.
- Vendor approval and verification history.
- Auditable admin actions.
- Extensible localization and future rider support.
- Soft deletion for user-facing business records.

## Database Platform

- Database: PostgreSQL on Neon.
- ORM: Prisma.
- Connection mode: pooled application connection for normal API traffic.
- Direct connection: `DIRECT_URL` for migrations and administrative Prisma operations when required.

## Core Entity Groups

### Identity and Access

- `User`: shared login identity for customers, vendors, admins, and future riders.
- `CustomerProfile`: customer-specific profile.
- `VendorProfile`: vendor-owner profile.
- `AdminProfile`: admin-specific profile.
- `UserRole`: role assignments for CUSTOMER, VENDOR, ADMIN, SUPER_ADMIN, and future RIDER.
- `RefreshToken`: refresh token rotation and session tracking.
- `OtpCode`: phone OTP login and verification.
- `TwoFactorMethod`: 2FA setup for admins and vendors.

### Vendor Business

- `VendorBusiness`: main vendor business record.
- `VendorVerification`: approval and verification lifecycle.
- `BusinessDocument`: verification documents and uploaded business proofs.
- `VendorLocation`: structured address, GPS coordinates, and Google Maps metadata.
- `VendorBusinessPhoto`: extra business photos.
- `DeliveryOption`: pickup, vendor delivery, platform delivery future, and delivery settings.

### Catalog

- `FoodCategory`: Akara, Pap, Bread, Tea, Moi Moi, Masa, Kunun, Waina, Yam and Egg, Beans, Rice, Local Snacks, and future categories.
- `MenuItem`: vendor food products.
- `ProductImage`: menu item images.

### Orders and Delivery

- `Order`: customer order header.
- `OrderItem`: ordered menu items and price snapshot.
- `OrderStatusEvent`: timeline of order status changes.
- `DeliveryTracking`: delivery/pickup tracking details and future rider extension.

### Payments and Wallets

- `Payment`: payment attempt or successful transaction linked to order.
- `PaymentWebhookEvent`: raw provider webhook event audit.
- `RefundRequest`: refund request and processing status.
- `Wallet`: customer, vendor, or future rider wallet.
- `WalletTransaction`: wallet credit/debit ledger entries.

### Trust, Communication, and Support

- `Review`: customer review for vendor and order.
- `ReviewImage`: optional review photos.
- `Favorite`: customer saved vendors.
- `Notification`: user notification.
- `Conversation`: customer-vendor/admin support conversation.
- `Message`: chat message.
- `CallLog`: call intent logs.
- `SupportTicket`: customer, vendor, or admin support tickets.

### Admin, Security, and Moderation

- `FraudReport`: fraud or abuse report.
- `AuditLog`: admin and sensitive action audit trail.
- `SecurityLog`: authentication, authorization, and suspicious security events.
- `Advertisement`: vendor ads and platform placements.
- `SubscriptionPlan`: vendor subscription packages.
- `VendorSubscription`: vendor subscription state.
- `PlatformSetting`: configurable platform settings.

### Localization

- `UserLanguagePreference`: selected language per user.
- `VendorLanguagePreference`: vendor-supported language preferences when needed.

Application UI text should live in i18n language files, not database rows. Database localization is only for user preferences and future admin-managed marketplace content.

## Scaling Strategy

### Indexing

Recommended indexes:

- User email, phone, and status.
- Role lookup by user and role.
- Vendor status and approval status.
- Vendor location by state, local government, community, and coordinates.
- Food category slug.
- Menu items by vendor, category, availability, and deleted state.
- Orders by customer, vendor, status, created date, and payment status.
- Payments by provider reference and status.
- Reviews by vendor, customer, moderation status, and rating.
- Notifications by user, read state, and created date.
- Audit and security logs by actor, action, severity, and created date.

### Location Search

MVP can store latitude and longitude as decimal values and calculate distance in API queries. For stronger scale, later phases can add PostgreSQL earthdistance/cube or PostGIS if Neon project settings support it.

Initial model:

- `latitude Decimal(10, 7)`
- `longitude Decimal(10, 7)`
- indexed with address fields.

### Data Retention

- Orders, payments, wallet transactions, audit logs, and security logs should not be hard-deleted.
- User-facing records such as vendors, menu items, reviews, messages, and support tickets should support `deletedAt`.
- Financial records should use immutable append-style events where possible.

### Multitenancy

AkaraConnect does not need strict tenant separation for MVP. Vendor ownership and admin access should be enforced through RBAC and resource ownership checks.

### Backups

- Use Neon automated backups.
- Document manual backup and restore process before production.
- Keep payment webhook records for reconciliation.
- Test restore process before launch.

## Assumptions

- A user can have multiple roles.
- A vendor user owns or manages one or more vendor businesses in the future, though MVP may limit to one.
- Reviews should be tied to completed orders where possible.
- Cash on delivery is represented as a payment method with confirmation workflow.
- Future rider entities are prepared through enums and delivery tracking fields but not fully implemented in MVP.
