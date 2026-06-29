# Deployment

AkaraConnect uses separate deployment targets:

- Frontend: Vercel.
- Backend: Render.
- Database: Neon PostgreSQL.
- Media: Cloudinary.

## Frontend

Build command:

```bash
npm run build
```

Required variables:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

## Backend

Build command:

```bash
npm install && npx prisma generate && npm run build:api
```

Start command:

```bash
npm run start:api
```

Health check:

```http
GET /api/health
```

## Database

Use Neon pooled URL for `DATABASE_URL` and direct URL for `DIRECT_URL`.

Run production migrations only after review:

```bash
npx prisma migrate deploy
```

## Production Readiness

- Vercel must use only `NEXT_PUBLIC_*` values that are safe for browsers.
- Render must own backend-only secrets.
- Neon database credentials must not be exposed to frontend code.
- CORS must allow the production frontend domain only.
- Health check endpoint must respond at `/api/health`.
