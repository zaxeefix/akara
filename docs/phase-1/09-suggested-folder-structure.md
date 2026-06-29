# Suggested Folder Structure

This is a planning proposal only. Do not create the application structure until Phase 2 is approved.

## Recommended Monorepo Layout

```text
akaraconnect/
  README.md
  LICENSE
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  SECURITY.md
  .github/
    ISSUE_TEMPLATE/
      bug_report.md
      feature_request.md
      vendor_onboarding_issue.md
    workflows/
      ci.yml
    pull_request_template.md
  docs/
    phase-1/
    api/
    deployment/
    development/
    architecture/
  apps/
    web/
      app/
      components/
      features/
      hooks/
      lib/
      locales/
        en/
        ha/
        yo/
        ig/
        tiv/
      public/
      styles/
      tests/
    api/
      src/
        config/
        modules/
          auth/
          users/
          vendors/
          menus/
          orders/
          payments/
          reviews/
          notifications/
          admin/
          analytics/
          localization/
          security/
        middleware/
        services/
          storage/
          maps/
          payments/
          otp/
          notifications/
        utils/
        tests/
      prisma/
        schema.prisma
        migrations/
  packages/
    shared/
      src/
        constants/
        types/
        validation/
        i18n/
    config/
      eslint/
      typescript/
      tailwind/
  scripts/
  .env.example
```

## Frontend Organization

Suggested areas:

- `app`: Next.js routes and layouts.
- `components`: reusable interface components.
- `features`: domain-specific customer, vendor, admin, order, payment, and map features.
- `hooks`: reusable React hooks.
- `lib`: frontend utilities and API clients.
- `locales`: language files for supported languages.
- `public`: static assets.
- `styles`: global styles and Tailwind setup.
- `tests`: frontend tests.

## Backend Organization

Suggested areas:

- `config`: environment and service configuration.
- `modules`: business domains.
- `middleware`: authentication, authorization, validation, security, and error handling.
- `services`: external provider wrappers.
- `utils`: shared backend helpers.
- `tests`: backend tests.
- `prisma`: schema and migrations after Phase 2 approval.

## Shared Package

Suggested shared package responsibilities:

- Shared TypeScript types.
- Validation schemas.
- Constants.
- Role names.
- Order status names.
- Supported locales.
- Food category definitions.

## Documentation Structure

Suggested documentation areas:

- `docs/phase-1`: planning documents.
- `docs/api`: API reference and examples.
- `docs/deployment`: Vercel, Render, Neon, Cloudinary, Maps, and payment deployment instructions.
- `docs/development`: local setup, testing, coding standards, and contribution workflow.
- `docs/architecture`: system diagrams, module decisions, and data model notes.

## Open-Source Files

Recommended root-level files:

- `README.md`
- `LICENSE`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- `.env.example`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/workflows/ci.yml`
