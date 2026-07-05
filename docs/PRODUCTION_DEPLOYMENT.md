# Production Deployment

AkaraConnect deploys as two services from the same repository:

- Vercel runs the Next.js frontend.
- Render runs the Express API.
- Neon stores PostgreSQL data.

## Vercel

Build command:

```bash
npm run build:vercel
```

Environment variables:

```bash
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
AKARACONNECT_API_URL=https://your-render-service.onrender.com/api
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXTAUTH_SECRET=replace-with-a-long-random-secret
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
```

Do not add `DATABASE_URL`, `DIRECT_URL`, API JWT secrets, Paystack secret keys, or Cloudinary secrets to Vercel.

## Render

Build command:

```bash
npm install --include=dev && npm run build:render
```

Start command:

```bash
npm run start:api
```

Environment variables:

```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST-pooler.REGION.aws.neon.tech/neondb?sslmode=require
DIRECT_URL=postgresql://USER:PASSWORD@HOST.REGION.aws.neon.tech/neondb?sslmode=require
JWT_SECRET=replace-with-at-least-32-random-characters
JWT_REFRESH_SECRET=replace-with-a-different-32-plus-character-secret
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
CORS_ORIGIN=https://your-vercel-domain.vercel.app
NODE_ENV=production
PORT=4000
PAYSTACK_SECRET_KEY=
PAYSTACK_PUBLIC_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_MAPS_API_KEY=
```

Render runs committed migrations during `npm run build:render`. If a deploy fails on migrations, fix the Neon URLs or database permissions before retrying.

## Checks

After deployment:

```bash
curl https://your-render-service.onrender.com/api/health
curl https://your-render-service.onrender.com/api/ready
```

`/api/health` confirms the API process is alive. `/api/ready` confirms the API can reach Neon.
