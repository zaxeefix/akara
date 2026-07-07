# User Roles

AkaraConnect v1.0 beta uses role-based access control to keep customer, vendor, rider, staff, and admin workflows separate.

## Active Roles

| Role | Beta status | Permissions |
| --- | --- | --- |
| `CUSTOMER` | Active | Register, login, search vendors, manage profile, create orders, pay, review vendors, manage favorites, and view notifications. |
| `VENDOR` | Active | Complete onboarding, manage business profile, submit verification, manage menu, view vendor orders, and access vendor dashboard placeholders. |
| `ADMIN` | Active | Approve/reject/suspend vendors, view customers, orders, payments, security logs, audit logs, and dashboard analytics. |
| `SUPER_ADMIN` | Active | All admin actions plus future platform settings, support team, subscription plans, and security controls. |
| `RIDER` | Reserved | Future delivery profile, available orders, navigation, history, earnings, online status, and ratings. |

## Future Roles

| Role | Status | Notes |
| --- | --- | --- |
| `VENDOR_STAFF` | Future | Staff accounts for vendor teams. Do not grant in production until migrations and UI workflows are approved. |
| `SUPPORT_MODERATOR` | Future | Support and moderation team role for tickets, reports, and customer/vendor help. |

## Vendor Staff Roles

Vendor staff permissions should be scoped per vendor business.

| Staff role | Planned permissions |
| --- | --- |
| Manager | Orders, menu, staff, profile, analytics. |
| Cashier | Walk-in sales, order payments, receipts. |
| Kitchen Staff | Order queue, preparation status, item availability. |
| Delivery Assistant | Ready-for-delivery orders and local handoff status. |

## RBAC Rules

- Public registration only allows `CUSTOMER` and `VENDOR`.
- Admin and super admin access must be granted through controlled admin operations or verified database operations.
- Backend middleware remains the final permission gate.
- Frontend route guards improve experience but must not be treated as security boundaries.
- Admin moderation actions should create audit logs.
