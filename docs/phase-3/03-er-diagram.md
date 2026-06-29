# Text-Based ER Diagram

## Major Relationships

```text
User
  1 ── 0..1 CustomerProfile
  1 ── 0..1 VendorProfile
  1 ── 0..1 AdminProfile
  1 ── many UserRole
  1 ── many RefreshToken
  1 ── many Notification
  1 ── many Message as sender
  1 ── many AuditLog as actor
  1 ── many SecurityLog
  1 ── 0..1 UserLanguagePreference

CustomerProfile
  1 ── many Order
  1 ── many Review
  1 ── many Favorite
  1 ── many Wallet

VendorProfile
  1 ── many VendorBusiness

VendorBusiness
  1 ── 0..1 VendorVerification
  1 ── 0..1 VendorLocation
  1 ── many BusinessDocument
  1 ── many VendorBusinessPhoto
  1 ── many DeliveryOption
  1 ── many MenuItem
  1 ── many Order
  1 ── many Review
  1 ── many Favorite
  1 ── many Advertisement
  1 ── many VendorSubscription
  1 ── many VendorLanguagePreference

FoodCategory
  1 ── many MenuItem

MenuItem
  1 ── many ProductImage
  1 ── many OrderItem

Order
  many ── 1 CustomerProfile
  many ── 1 VendorBusiness
  1 ── many OrderItem
  1 ── many Payment
  1 ── many OrderStatusEvent
  1 ── 0..1 DeliveryTracking
  1 ── many Review

Payment
  many ── 1 Order
  1 ── many RefundRequest

Wallet
  1 ── many WalletTransaction

Review
  many ── 1 CustomerProfile
  many ── 1 VendorBusiness
  many ── 0..1 Order
  1 ── many ReviewImage

Conversation
  1 ── many Message

SubscriptionPlan
  1 ── many VendorSubscription

SupportTicket
  many ── 0..1 User
```

## Required Relationship Coverage

| Requirement | Relationship |
| --- | --- |
| User to customer profile | `User 1 -> 0..1 CustomerProfile` |
| User to vendor profile | `User 1 -> 0..1 VendorProfile` |
| Vendor to menu items | `VendorBusiness 1 -> many MenuItem` |
| Vendor to orders | `VendorBusiness 1 -> many Order` |
| Customer to orders | `CustomerProfile 1 -> many Order` |
| Order to order items | `Order 1 -> many OrderItem` |
| Order to payment | `Order 1 -> many Payment` |
| Vendor to reviews | `VendorBusiness 1 -> many Review` |
| Customer to reviews | `CustomerProfile 1 -> many Review` |
| Vendor to verification documents | `VendorBusiness 1 -> many BusinessDocument` |
| User to notifications | `User 1 -> many Notification` |
| User to messages | `User 1 -> many Message as sender` |
| Admin to audit logs | `User/Admin actor 1 -> many AuditLog` |

## Notes

- `UserRole` allows one user to hold multiple roles, such as customer and vendor.
- `VendorBusiness` is the operational marketplace entity customers interact with.
- `VendorProfile` represents the owner or operator account.
- `OrderItem` stores price snapshots so historic orders remain correct if menu prices change.
- `PaymentWebhookEvent` is intentionally separate from `Payment` to preserve raw provider events for reconciliation.
- `AuditLog` and `SecurityLog` are append-only operational records.
