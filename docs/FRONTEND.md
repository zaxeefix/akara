# Frontend

Phase 5 implements the AkaraConnect frontend foundation with Next.js, React, TypeScript, and Tailwind CSS.

## Structure

- `app`: routes, layouts, metadata, PWA, SEO routes.
- `components/ui`: reusable design system primitives.
- `components/layout`: public, vendor, and admin layouts.
- `components/customer`: customer marketplace components.
- `components/vendor`: vendor dashboard components.
- `components/admin`: admin dashboard components.
- `components/forms`: auth, vendor, and payment forms.
- `components/maps`: map fallbacks and location tools.
- `lib/api`: safe API client using `NEXT_PUBLIC_API_URL`.
- `i18n`: locale config and translation dictionaries.
- `hooks`: client-side helpers.
- `types`: shared frontend types.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Backend commands remain available as `dev:api`, `build:api`, and `start:api`.
