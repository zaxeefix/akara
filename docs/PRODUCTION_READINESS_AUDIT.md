# Production Readiness Audit

## Environment Variables

### Frontend on Vercel

Required:

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

Rules:

- Only browser-safe values may use `NEXT_PUBLIC_`.
- No database URLs, JWT secrets, Paystack secret keys, Cloudinary secrets, or OTP credentials in frontend variables.

### Backend on Render

Required:

- `DATABASE_URL`
- `DIRECT_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `ACCESS_TOKEN_EXPIRES_IN`
- `REFRESH_TOKEN_EXPIRES_IN`
- `CORS_ORIGIN`
- `PAYSTACK_SECRET_KEY`
- `PAYSTACK_PUBLIC_KEY`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `GOOGLE_MAPS_API_KEY`
- `NODE_ENV`
- `PORT`

Rules:

- `CORS_ORIGIN` should be the production Vercel domain.
- Logs must not print secrets.
- Backend must bind to `process.env.PORT`.

## Vercel Readiness

- Build command: `npm run build`.
- Optional prebuild check: `npm run test:static`.
- PWA manifest is implemented.
- Robots and sitemap routes are implemented.
- Open Graph and Twitter metadata are implemented.
- Custom domain and SSL must be configured in Vercel.

## Render Readiness

- Build command: `npm install && npx prisma generate && npm run build:api`.
- Start command: `npm run start:api`.
- Health check: `/api/health`.
- Prisma generation verified locally.
- Migrations should run with `npx prisma migrate deploy` after review.

## Neon Readiness

- Prisma datasource uses PostgreSQL.
- `DATABASE_URL` should use pooled connection for application traffic.
- `DIRECT_URL` should use direct connection for migrations.
- Automated backups must be enabled.
- Restore should be tested before public launch.

## Security Audit

Implemented:

- Helmet.
- CORS allowlist.
- Rate limiting.
- Zod validation.
- bcrypt password hashing.
- JWT verification.
- Role middleware.
- Safe production error handling.
- File upload validation structure.
- Paystack webhook signature structure.
- Audit/security log helpers.

Needs live verification:

- Admin pages are admin-only with real session.
- Vendor pages are vendor-only with real session.
- Customer private pages are customer-only with real session.
- Paystack webhook signatures with live/test provider event.
- Cloudinary upload signing with real provider.
- 2FA provider integration.

## Performance Audit

Implemented:

- Next.js app routing.
- Server-rendered page shell.
- Mobile-first layouts.
- Responsive cards and tables.
- Map fallback instead of blocking page render.
- No unnecessary client-side map script loading yet.

Recommended before public launch:

- Run Lighthouse on mobile.
- Review bundle analyzer if first load is high.
- Replace placeholder media with optimized images.
- Add pagination or infinite loading for large vendor lists.
- Add database query indexes as usage patterns mature.

## SEO and PWA Audit

Implemented:

- Root metadata.
- Open Graph.
- Twitter cards.
- Schema.org website JSON-LD.
- `robots.ts`.
- `sitemap.ts`.
- `manifest.ts`.
- App icon.
- Offline fallback page.

Needs live verification:

- Production canonical URL.
- Social preview cards.
- PWA install prompt.
- Mobile browser theme color.

## Payments

Implemented:

- Frontend payment method UI.
- Paystack-ready public key structure.
- Backend initialize/verify/webhook structure.
- Cash on delivery method structure.

Needs live verification:

- Paystack test transaction.
- Webhook signature.
- Failed, pending, and successful payment states.
- Cash on delivery confirmation workflow.

## Maps

Implemented:

- Nearby vendor UI.
- Directions link.
- Distance and delivery estimate display placeholders.
- Location permission fallback copy.

Needs live verification:

- Google Maps browser key restrictions.
- Geolocation permission.
- Nearby vendor search with real coordinates.
- Delivery estimate accuracy.

## Cloudinary and Uploads

Implemented:

- Upload validation structure.
- Vendor/menu/review/document upload surfaces.

Needs implementation/verification:

- Server-side signed upload flow.
- File type/size validation with actual upload middleware.
- Private handling for verification documents.

## Go-Live Status

Current status: beta launch preparation.

Public launch should wait until:

- Frontend and backend builds pass.
- Real staging environment exists.
- Payment test passes.
- Maps test passes.
- Upload test passes.
- Admin/vendor/customer protected routes are verified with real auth sessions.
