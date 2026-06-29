# AkaraConnect Backend

AkaraConnect is an open-source local food marketplace under ZaxeeFix Enterprise. It connects customers with Akara, Pap/Ogi/Akamu, and other local food vendors across Nigeria.

This repository currently contains the Phase 5 frontend foundation and the Phase 4 backend foundation.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, TypeScript
- Database: PostgreSQL on Neon
- ORM: Prisma
- Auth: JWT access tokens, refresh tokens, bcrypt password hashing
- Payments: Paystack-ready structure first
- Storage: Cloudinary-ready structure
- Hosting target: Render

## Quick Start

```bash
npm install
npm run test:static
npx prisma generate
npm run build
npm run dev
```

Create a local `.env` from `.env.example` before running the server. Do not commit `.env`.

## Health Check

```http
GET /api/health
```

## Main API Areas

- `/api/auth`
- `/api/customers`
- `/api/vendors`
- `/api/categories`
- `/api/orders`
- `/api/payments`
- `/api/reviews`
- `/api/notifications`
- `/api/admin`
- `/api/search`

## Documentation

- [API](docs/API.md)
- [Environment](docs/ENVIRONMENT.md)
- [Security](docs/SECURITY.md)
- [Render Deployment](docs/DEPLOYMENT_RENDER.md)
- [Frontend](docs/FRONTEND.md)
- [Localization](docs/LOCALIZATION.md)
- [PWA](docs/PWA.md)
- [SEO](docs/SEO.md)
- [Vercel Deployment](docs/VERCEL_DEPLOYMENT.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Backend](docs/BACKEND.md)
- [Database](docs/DATABASE.md)
- [Testing](docs/TESTING.md)
- [Integration](docs/INTEGRATION.md)
- [Maintenance](docs/MAINTENANCE.md)
- [Roadmap](docs/ROADMAP.md)
- [Production Launch Checklist](docs/PRODUCTION_LAUNCH_CHECKLIST.md)
- [Production Readiness Audit](docs/PRODUCTION_READINESS_AUDIT.md)
- [Backup and Recovery](docs/BACKUP_AND_RECOVERY.md)
- [Monitoring](docs/MONITORING.md)
- [Release Notes](docs/RELEASE_NOTES.md)
- [Mobile App Roadmap](docs/MOBILE_APP_ROADMAP.md)
- [AI Features](docs/AI_FEATURES.md)
- [WhatsApp Ordering](docs/WHATSAPP_ORDERING.md)
- [USSD Roadmap](docs/USSD_ROADMAP.md)
- [Rider Module](docs/RIDER_MODULE.md)
- [Vendor POS and Inventory](docs/VENDOR_POS_INVENTORY.md)
- [Business Loans and Insurance](docs/BUSINESS_LOANS_INSURANCE.md)
- [Analytics Growth](docs/ANALYTICS_GROWTH.md)
- [Scalability Expansion](docs/SCALABILITY_EXPANSION.md)
- [Localization Expansion](docs/LOCALIZATION_EXPANSION.md)
- [Privacy and Ethics](docs/PRIVACY_AND_ETHICS.md)
- [Community](docs/COMMUNITY.md)
- [Beta Release](docs/BETA_RELEASE.md)
- [Pilot Vendor Onboarding](docs/PILOT_VENDOR_ONBOARDING.md)
- [Support Operations](docs/SUPPORT_OPERATIONS.md)
- [Trust and Safety](docs/TRUST_AND_SAFETY.md)
- [Known Limitations](docs/KNOWN_LIMITATIONS.md)
- [Observability](docs/OBSERVABILITY.md)
- [Incident Response](docs/INCIDENT_RESPONSE.md)

## Security

Do not commit `.env`, `.env.local`, private keys, database URLs, payment secrets, Google Maps secrets, Cloudinary secrets, or JWT secrets. Use `.env.example` as the public template.

## CI/CD

GitHub Actions is configured in `.github/workflows/ci.yml` to install dependencies, run static checks, generate Prisma, lint, and build the frontend and backend. Production secrets must be stored in GitHub secrets.
"# akara" 
