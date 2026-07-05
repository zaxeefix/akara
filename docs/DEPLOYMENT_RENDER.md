# Render Deployment

## Service Type

Use a Render Web Service for the Express backend.

## Build Command

```bash
npm install --include=dev && npm run build:render
```

This generates Prisma Client, applies committed Prisma migrations, and compiles the Express API.

## Start Command

```bash
npm run start:api
```

## Environment Variables

Set these in Render:

```bash
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
CORS_ORIGIN=https://your-frontend-domain.example
PAYSTACK_SECRET_KEY=
PAYSTACK_PUBLIC_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_MAPS_API_KEY=
GOOGLE_CLIENT_ID=
OTP_WEBHOOK_URL=
OTP_SENDER_NAME=AkaraConnect
NODE_ENV=production
PORT=4000
```

Use the Neon pooled connection string for `DATABASE_URL` and the Neon direct connection string for `DIRECT_URL`. Both URLs should include `sslmode=require`.

`GOOGLE_CLIENT_ID` must match Vercel's `NEXT_PUBLIC_GOOGLE_CLIENT_ID`. `OTP_WEBHOOK_URL` must accept a JSON `POST` containing `phone`, `code`, `sender`, and `message`.

`JWT_SECRET` and `JWT_REFRESH_SECRET` must each be at least 32 characters. If Render has these variables set to empty strings, remove them or replace them with generated secrets. Generate safe values locally with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Run it twice and use different values for access and refresh tokens.

## Neon Database

1. Create a Neon PostgreSQL project.
2. Copy pooled connection string to `DATABASE_URL`.
3. Copy direct connection string to `DIRECT_URL`.
4. Run migrations only after approval.

## Prisma Commands

Generate Prisma client:

```bash
npx prisma generate
```

Apply committed production migrations:

```bash
npm run prisma:migrate
```

Check API liveness and database readiness:

```bash
curl https://your-render-service.onrender.com/api/health
curl https://your-render-service.onrender.com/api/ready
```

Seed development data only:

```bash
npm run seed
```

Do not seed production unless a reviewed production seed strategy exists.
