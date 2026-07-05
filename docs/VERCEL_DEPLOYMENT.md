# Vercel Deployment

Deploy the frontend to Vercel.

## Build Command

```bash
npm run test:static && npx prisma generate && npm run build
```

If Prisma is not needed in the Vercel build environment, the frontend-only build command is:

```bash
npm run build
```

## Development Command

```bash
npm run dev
```

## Environment Variables

Set only safe frontend variables and auth runtime values:

```bash
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_API_URL=
AKARACONNECT_API_URL=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

`AKARACONNECT_API_URL` is the server-side backend base URL used by the Next.js API proxy, for example `https://akara-api-beta.onrender.com/api`. Keep `NEXT_PUBLIC_API_URL` only when the browser bundle also needs to know the backend URL.

Never expose:

- `DATABASE_URL`
- `DIRECT_URL`
- Backend JWT secrets
- Paystack secret key
- Cloudinary API secret
- Private keys

The backend remains targeted for Render.

## Production URL

Set `NEXT_PUBLIC_APP_URL` to the final production domain after DNS is configured.
