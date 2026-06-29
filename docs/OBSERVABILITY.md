# Observability

## Vercel Logs

Monitor:

- Build failures.
- Runtime errors.
- Slow pages.
- Missing environment variables.
- Metadata, sitemap, robots, or PWA issues.

## Render Logs

Monitor:

- API startup.
- Prisma connection errors.
- 5xx responses.
- Auth failures.
- Webhook failures.
- Rate-limit spikes.

## Neon Monitoring

Monitor:

- Connection count.
- Slow queries.
- Storage growth.
- Backup status.
- Failed migrations.

## Health Check

Backend:

```http
GET /api/health
```

## Recommendations

- Uptime monitor for frontend and backend.
- Error tracking such as Sentry or Highlight.
- Payment webhook alerting.
- Failed login alert thresholds.
- Fraud report review queue.
