# Environment Variables

Create `.env` locally from `.env.example`. Do not commit `.env` or real secrets.

Required for production:

```bash
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
CORS_ORIGIN=
NODE_ENV=production
PORT=4000
```

Provider placeholders:

```bash
PAYSTACK_SECRET_KEY=
PAYSTACK_PUBLIC_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
GOOGLE_MAPS_API_KEY=
```

`JWT_SECRET` and `JWT_REFRESH_SECRET` must be long random values and must not be reused across environments.
Use at least 32 characters for each value. In Render, do not leave these variables set to short placeholder text.

Generate safe values locally with Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Run it twice, once for `JWT_SECRET` and once for `JWT_REFRESH_SECRET`.
