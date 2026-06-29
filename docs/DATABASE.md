# Database

AkaraConnect uses PostgreSQL on Neon with Prisma.

## Prisma

Schema:

```text
prisma/schema.prisma
```

Datasource:

```prisma
provider = "postgresql"
url      = env("DATABASE_URL")
directUrl = env("DIRECT_URL")
```

## Main Models

- User
- CustomerProfile
- Vendor
- FoodCategory
- MenuItem
- Order
- OrderItem
- Payment
- Review
- Favorite
- Notification
- AuditLog
- SecurityLog

## Backup Notes

- Enable Neon automated backups.
- Test restore before production launch.
- Keep payment and audit records immutable where practical.
