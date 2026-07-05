# Vercel Deployment

Deploy the frontend to Vercel.

## Build Command

```bash
npm run build:vercel
```

## Development Command

```bash
npm run dev
```

## Environment Variables

Set only safe frontend variables and auth runtime values:

```bash
NEXT_PUBLIC_APP_URL=
AKARACONNECT_API_URL=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

`AKARACONNECT_API_URL` is the server-side backend base URL used by the Next.js API proxy, for example `https://akara-api-beta.onrender.com/api`. Do not set `NEXT_PUBLIC_API_URL` for production unless you intentionally want browser code to know the backend URL.

`NEXT_PUBLIC_GOOGLE_CLIENT_ID` is required for the Google login button and must match Render's `GOOGLE_CLIENT_ID`.

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
