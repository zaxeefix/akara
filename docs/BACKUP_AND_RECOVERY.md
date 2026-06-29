# Backup and Recovery

## Neon Backup Strategy

- Enable automated backups in Neon for the production PostgreSQL project.
- Keep `DATABASE_URL` pooled for application traffic and `DIRECT_URL` for migrations and administrative operations.
- Before major releases, create a manual restore point where available.
- Test restore into a staging database before relying on backup procedures for production.

## Database Restore Steps

1. Pause write-heavy operations if an incident is active.
2. Identify the restore point.
3. Restore to a new Neon branch or recovery database.
4. Verify schema, core tables, orders, payments, audit logs, and security logs.
5. Update Render environment variables only after validation.
6. Restart backend service.
7. Run health check: `GET /api/health`.
8. Confirm customer, vendor, admin, and payment workflows.

## Environment Variable Recovery

- Store production secrets only in Vercel, Render, Neon, Cloudinary, Paystack, and GitHub secrets.
- Keep `.env.example` as a placeholder template only.
- Rotate secrets after suspected exposure.
- Never recover secrets from Git history.

## GitHub Recovery

- Protect `main` branch.
- Require pull request review and CI checks.
- Use GitHub releases for production tags.
- Restore source from the latest verified release tag if needed.

## Render Service Recovery

1. Check Render service logs.
2. Verify environment variables.
3. Redeploy the last successful build.
4. Confirm service binds to `process.env.PORT`.
5. Confirm `GET /api/health`.
6. Confirm CORS allows only production frontend origin.

## Vercel Rollback

1. Open Vercel deployments.
2. Promote the last known-good deployment.
3. Verify custom domain and SSL.
4. Confirm frontend points to the correct backend API URL.
5. Confirm PWA manifest and core pages.

## Incident Response

1. Classify severity.
2. Preserve logs.
3. Disable affected feature if needed.
4. Rotate exposed credentials.
5. Restore database or redeploy service where needed.
6. Document timeline, impact, fix, and prevention.
7. Communicate with affected users where appropriate.
