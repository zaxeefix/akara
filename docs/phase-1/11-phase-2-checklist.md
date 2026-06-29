# Phase 2 Checklist

Begin Phase 2 only after Phase 1 planning documents are approved.

## Project Foundation

- Confirm repository name and branding.
- Initialize Git repository if not already initialized.
- Create root README.
- Add MIT LICENSE.
- Add contributing guide.
- Add code of conduct.
- Add security policy.
- Add issue templates.
- Add pull request template.
- Add `.env.example`.
- Add GitHub Actions CI workflow.

## Technical Setup

- Create Next.js frontend app.
- Create Express.js backend app.
- Configure TypeScript.
- Configure Tailwind CSS.
- Configure shared linting and formatting.
- Set up monorepo structure if approved.
- Configure environment variable loading.
- Add base testing tools.

## Localization Foundation

- Select i18n library.
- Create language file structure.
- Add English language file.
- Add Hausa language file.
- Add Yoruba language file.
- Add Igbo language file.
- Add Tiv language file.
- Add browser language detection.
- Add manual language switcher.
- Confirm no hard-coded interface text in core screens.

## Authentication Foundation

- Configure NextAuth.
- Add Google login.
- Add JWT/session strategy.
- Plan phone OTP provider integration.
- Add role model for customer, vendor, admin, and future rider.
- Add route protection strategy.
- Add admin 2FA plan.

## Database and Prisma

- Confirm Neon database setup.
- Design first Prisma schema.
- Create initial migrations only after approval.
- Add seed strategy for food categories and languages.
- Add backup and restore plan.

## Core MVP Modules

- Customer account module.
- Vendor registration module.
- Vendor profile module.
- Admin vendor approval module.
- Food category module.
- Menu management module.
- Search and nearby vendor module.
- Order management module.
- Payment abstraction module.
- Review module.
- Notification foundation.
- Audit log module.

## Integrations

- Cloudinary setup.
- Google Maps API setup.
- Google Places API setup.
- Geolocation integration.
- Initial payment provider selection.
- Payment webhook verification plan.
- OTP provider selection.

## Security

- Add secure headers.
- Add API rate limiting.
- Add request validation strategy.
- Add CSRF strategy for session-based flows.
- Add XSS protection guidelines.
- Add RBAC middleware.
- Add audit logging.
- Add dependency scanning.
- Add secret handling documentation.

## UI Foundation

- Define design tokens.
- Configure light and dark themes.
- Create responsive layout shell.
- Create public navigation.
- Create customer navigation.
- Create vendor navigation.
- Create admin navigation.
- Select professional icon library.
- Define accessibility checklist.

## Documentation

- Draft developer setup guide.
- Draft API documentation structure.
- Draft deployment guide for Vercel, Render, Neon, and Cloudinary.
- Draft environment variable guide.
- Draft testing guide.
- Draft contribution workflow.

## Approval Gate

- Review Phase 1 planning pack.
- Confirm MVP scope.
- Confirm first payment provider.
- Confirm OTP provider.
- Confirm monorepo layout.
- Confirm initial launch geography if any.
- Approve Phase 2 implementation start.
