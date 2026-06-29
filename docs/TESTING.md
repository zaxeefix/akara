# Testing

Phase 6 adds a lightweight static launch-readiness check and CI structure.

## Static Check

```bash
npm run test:static
```

This verifies required files exist and common secret patterns are not present in public configuration files.

## Full Check Plan

After dependencies install successfully:

```bash
npm install
npm run test:static
npx prisma generate
npm run lint
npm run lint:api
npm run build
npm run build:api
```

## Workflow Coverage Targets

- Customer register/login/search/order/review.
- Vendor onboarding/menu/order-status/earnings.
- Admin login/vendor approval/security logs.
- Payment initialize/verify/webhook.
- Localization language switching.
- PWA manifest and offline fallback.
