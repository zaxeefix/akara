# Incident Response

## Severity Levels

- Critical: payment, security, data loss, production outage.
- High: auth failure, vendor approval failure, order flow failure.
- Medium: degraded maps, notifications, uploads, or search.
- Low: documentation, translation, or visual bug.

## Response Steps

1. Confirm incident.
2. Assign owner.
3. Preserve logs.
4. Disable affected feature if safe.
5. Communicate internally.
6. Fix or rollback.
7. Verify recovery.
8. Document root cause and prevention.

## Rollback Frontend

1. Open Vercel deployments.
2. Promote last known-good deployment.
3. Verify domain, SSL, and core pages.

## Rollback Backend

1. Open Render deploy history.
2. Redeploy last known-good backend.
3. Verify environment variables.
4. Confirm `/api/health`.

## Restore Database

1. Identify Neon restore point.
2. Restore to branch or recovery database.
3. Verify data.
4. Update backend connection only after validation.

## Escalation

Escalate payment, security, data privacy, and legal issues immediately to project leadership.
