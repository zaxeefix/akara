# Backend

The backend foundation uses Express, TypeScript, Prisma, and PostgreSQL.

## Modules

- Auth
- Customers
- Vendors
- Menu
- Orders
- Payments
- Reviews
- Notifications
- Admin
- Search
- Security logging
- Audit logging

## Commands

```bash
npm run dev:api
npm run lint:api
npm run build:api
npx prisma generate
```

## Security

- Helmet headers.
- CORS allowlist.
- Rate limiting.
- JWT access token validation.
- bcrypt password hashing.
- Role middleware.
- Zod validation.
- Payment webhook signature structure.
