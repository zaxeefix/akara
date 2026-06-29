# Maintenance

## Routine Tasks

- Review dependency updates.
- Rotate secrets according to security policy.
- Review audit and security logs.
- Test Neon backups and restore.
- Verify payment webhook health.
- Check PWA installability after frontend changes.
- Review translations before adding new languages.

## Updating Dependencies

1. Review changelogs for Next.js, Prisma, Express, and security-related packages.
2. Update packages in a feature branch.
3. Run `npm install`.
4. Run `npm run test:static`.
5. Run frontend and backend lint/build checks.
6. Deploy to staging before production.

## Deploying Updates

1. Merge only after CI passes.
2. Deploy frontend to Vercel.
3. Deploy backend to Render.
4. Run backend health check.
5. Smoke test auth, search, vendor profile, order, and payment flow.

## Rotating Secrets

1. Generate new secret in the provider dashboard.
2. Update Render, Vercel, or GitHub secrets.
3. Redeploy affected services.
4. Revoke old secret.
5. Review logs for failures.

## Prisma Migrations

1. Create and review migration locally or in staging.
2. Back up production database.
3. Run `npx prisma migrate deploy`.
4. Run `npx prisma generate`.
5. Verify API health and core workflows.

## Adding New Languages

1. Add locale code to `i18n/config.ts`.
2. Add dictionary entries.
3. Review translations with fluent speakers.
4. Test language switcher and layouts.

## Adding Food Categories

1. Add category to seed/admin data.
2. Confirm slug.
3. Test category page and search filters.
4. Confirm vendor menu assignment.

## Onboarding Admins

1. Create user account.
2. Assign `ADMIN` or `SUPER_ADMIN` role.
3. Require 2FA before production access.
4. Confirm audit logging.

## Vendor Disputes and Fraud Reports

1. Review order, payment, review, and message context.
2. Record admin decision in audit log.
3. Suspend only when evidence supports action.
4. Communicate outcome where appropriate.

## Checking Logs

- Render service logs for backend incidents.
- Vercel logs for frontend incidents.
- Database logs for connection and query issues.
- Security logs for suspicious access.
- Audit logs for admin actions.

## Release Checklist

- Run CI checks.
- Review environment variables.
- Confirm no secrets in commits.
- Confirm backend health endpoint.
- Confirm frontend points to production backend.
- Confirm admin account and 2FA policy.
