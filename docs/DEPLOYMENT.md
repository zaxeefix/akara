# Deployment

AkaraConnect uses separate deployment targets:

- Frontend: Vercel.
- Backend: Render.
- Database: Neon PostgreSQL.
- Media: Cloudinary.

## Frontend

Build command:

```bash
npm run build:vercel
```

Required variables:

- `NEXT_PUBLIC_APP_URL`
- `AKARACONNECT_API_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

`AKARACONNECT_API_URL` should point to the Render API base URL, for example `https://akara-api-beta.onrender.com/api`. The browser calls the same-origin Next.js `/api/*` proxy, so `NEXT_PUBLIC_API_URL` is no longer required for production.

Do not place Neon database URLs, JWT secrets, Paystack secret keys, Cloudinary secrets, or backend-only provider credentials in Vercel. Vercel should only receive public frontend keys and the server-side Render API base URL used by the Next.js proxy.

## Backend

Build command:

```bash
npm install --include=dev && npm run build:render
```

The backend TypeScript compiler and backend type definitions are production dependencies so Render can build the API even when development dependencies are omitted.

Start command:

```bash
npm run start:api
```

Health check:

```http
GET /api/health
```

Readiness check, including database connectivity:

```http
GET /api/ready
```

## Database

Use Neon pooled URL for `DATABASE_URL` and direct URL for `DIRECT_URL`.

Run production migrations only after review:

```bash
npm run prisma:migrate
```

## Production Readiness

- Vercel must not contain database URLs, API JWT secrets, or backend provider secrets.
- Render must own backend-only secrets.
- Neon database credentials must not be exposed to frontend code.
- CORS must allow the production frontend domain only.
- Health check endpoint must respond at `/api/health`.
- Readiness endpoint should respond at `/api/ready` before opening beta traffic.
- Render should run committed Prisma migrations through `npm run build:render`; avoid manual schema changes except for emergency recovery.
- Keep `main` deployable for beta and introduce a separate dev branch later for larger experimental marketplace changes.
