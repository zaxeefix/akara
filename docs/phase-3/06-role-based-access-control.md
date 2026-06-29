# Role-Based Access Control

## Roles

| Role | Description |
| --- | --- |
| `CUSTOMER` | Can browse, order, pay, review, favorite vendors, and manage own account. |
| `VENDOR` | Can manage owned vendor businesses, menus, orders, earnings, and reviews. |
| `ADMIN` | Can moderate users, vendors, orders, fraud reports, payments, and logs. |
| `SUPER_ADMIN` | Can manage all admin capabilities, platform settings, subscription plans, and admin users. |
| `RIDER` | Future role for delivery jobs, delivery status, and rider earnings. |

## Public Routes

Accessible without login:

- Landing page.
- Vendor marketplace public browsing.
- Vendor detail public information.
- Food category browsing.
- Register.
- Login.
- Google login.
- Phone OTP request and verification.
- Forgot password.
- Reset password.
- Language switcher.
- Public help pages.

Rules:

- Public vendor data must only show approved, non-suspended vendors.
- Public endpoints must rate-limit search and location requests.

## Customer-Only Routes

Accessible to `CUSTOMER`:

- Customer profile.
- Update profile.
- Add/remove favorites.
- Place order.
- View own orders.
- Track own orders.
- Review vendors for eligible orders.
- Report vendors and reviews.
- Customer notifications.
- Customer chat conversations.
- Customer wallet where enabled.

Ownership rules:

- Customers can only view and modify their own profile, favorites, orders, reviews, notifications, wallet records, and conversations.

## Vendor-Only Routes

Accessible to `VENDOR`:

- Vendor onboarding.
- Business profile management.
- Upload logo, cover photo, photos, and documents.
- Menu management.
- Price management.
- Vendor order management.
- Update order status for owned business orders.
- View earnings and analytics for owned businesses.
- View reviews for owned businesses.
- Manage delivery settings.
- Vendor notifications.

Ownership rules:

- Vendors can only access businesses they own or are explicitly assigned to manage.
- Vendors cannot approve themselves.
- Vendors cannot alter payment records directly.

## Admin-Only Routes

Accessible to `ADMIN` and `SUPER_ADMIN`:

- Admin dashboard.
- Vendor approval queue.
- Customer management.
- Vendor management.
- Order management.
- Payment management view.
- Fraud report review.
- Advertisement review and management.
- Security logs.
- Audit logs.
- Review moderation.
- Localization status.

Rules:

- Sensitive reads and all mutations must create audit logs.
- Admins should not access platform secret values.

## Super Admin Routes

Accessible only to `SUPER_ADMIN`:

- Manage admin users.
- Assign or remove admin roles.
- Manage platform settings.
- Manage subscription plans.
- Configure payment provider settings.
- Configure security policies.
- Force revoke sessions.
- Access high-risk operational controls.

Rules:

- Require 2FA.
- Require recent authentication for critical actions.
- Always audit.

## Future Rider Routes

Reserved for `RIDER`:

- Rider onboarding.
- Rider verification.
- Available delivery requests.
- Accept delivery.
- Update delivery status.
- Rider earnings.
- Rider notifications.

Rules:

- Riders can only access assigned deliveries.
- Rider location updates require explicit consent.

## Permission Matrix

| Capability | Public | Customer | Vendor | Admin | Super Admin | Rider |
| --- | --- | --- | --- | --- | --- | --- |
| Browse approved vendors | Yes | Yes | Yes | Yes | Yes | Yes |
| Place order | No | Yes | If customer role | No | No | No |
| Manage own vendor business | No | No | Yes | No | No | No |
| Approve vendors | No | No | No | Yes | Yes | No |
| Suspend vendors | No | No | No | Yes | Yes | No |
| Manage platform settings | No | No | No | No | Yes | No |
| View security logs | No | No | No | Yes | Yes | No |
| Manage subscription plans | No | No | No | No | Yes | No |
| Update delivery status | No | No | Future | No | No | Future |

## Middleware Strategy

Recommended middleware layers:

1. `authenticate`: verifies access token and loads user.
2. `requireRole`: verifies role.
3. `requirePermission`: optional fine-grained permission check.
4. `requireOwnership`: verifies resource ownership.
5. `requireRecentAuth`: protects critical admin/security actions.
6. `auditAction`: records sensitive changes.
