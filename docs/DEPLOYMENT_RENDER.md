# Render Deployment

## Service Type

Use a Render Web Service for the Express backend.

## Build Command

```bash
npm install && npx prisma generate && npm run build:api
```

The backend TypeScript compiler and backend type definitions are production dependencies so Render can build the API even when development dependencies are omitted.

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
NODE_ENV=production
PORT=4000
```

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

Apply production migrations after they exist:

```bash
npx prisma migrate deploy
```

Seed development data only:

```bash
npm run seed
```

Do not seed production unless a reviewed production seed strategy exists.
