# Production Launch Checklist

## Domain and SSL

- [ ] Frontend domain configured.
- [ ] Backend domain configured.
- [ ] SSL certificates active.
- [ ] HTTP redirects to HTTPS.
- [ ] Custom domain points to Vercel frontend.
- [ ] Backend domain points to Render service.

## Environment Variables

- [ ] Vercel frontend variables configured.
- [ ] Render backend variables configured.
- [ ] Neon database URLs configured.
- [ ] No secrets exposed in frontend.
- [ ] No `.env` files committed.

## Database

- [ ] Prisma schema reviewed.
- [ ] Production migrations reviewed.
- [ ] `npx prisma migrate deploy` tested.
- [ ] Neon backups enabled.
- [ ] Restore process tested.

## Accounts and Auth

- [ ] Admin account created.
- [ ] Admin 2FA policy confirmed.
- [ ] Customer register/login tested.
- [ ] Vendor register/login tested.
- [ ] Admin login tested.
- [ ] Logout tested.
- [ ] Protected route redirects tested.

## Marketplace Workflows

- [ ] Vendor approval tested.
- [ ] Vendor profile update tested.
- [ ] Menu item creation tested.
- [ ] Customer search tested.
- [ ] Nearby vendors tested.
- [ ] Customer order tested.
- [ ] Order tracking tested.
- [ ] Review submission tested.
- [ ] Favorite vendor tested.
- [ ] Notifications tested.
- [ ] Vendor search tested.
- [ ] Nearby search tested.

## Payments

- [ ] Paystack public key configured in frontend.
- [ ] Paystack secret key configured in backend.
- [ ] Payment initialize tested.
- [ ] Payment verify tested.
- [ ] Webhook signature tested.
- [ ] Cash on delivery tested.

## Maps and Uploads

- [ ] Google Maps public key configured.
- [ ] Nearby search tested with coordinates.
- [ ] Directions link tested.
- [ ] Cloudinary credentials configured on backend.
- [ ] Vendor logo upload tested.
- [ ] Menu image upload tested.
- [ ] File size/type validation tested.

## Frontend Quality

- [ ] Mobile responsiveness checked.
- [ ] Tablet layout checked.
- [ ] Desktop layout checked.
- [ ] No horizontal scrolling.
- [ ] PWA install checked.
- [ ] Offline fallback checked.
- [ ] SEO metadata checked.
- [ ] Sitemap and robots checked.
- [ ] Open Graph preview checked.
- [ ] Mobile browser standalone mode checked.

## Security

- [ ] Helmet headers verified.
- [ ] CORS origin locked to production frontend.
- [ ] Rate limiting enabled.
- [ ] Role protection verified.
- [ ] Admin pages admin-only.
- [ ] Vendor pages vendor-only.
- [ ] Customer private pages customer-only.
- [ ] Sensitive errors hidden.
- [ ] Audit logs reviewed.
- [ ] Security logs reviewed.

## Monitoring

- [ ] Render health check configured.
- [ ] Error logging reviewed.
- [ ] Payment webhook monitoring planned.
- [ ] Backup monitoring planned.
- [ ] Uptime monitor configured.
- [ ] Failed login monitoring reviewed.
- [ ] Fraud report review process assigned.

## Final Go/No-Go

- [ ] Frontend deployment complete.
- [ ] Backend deployment complete.
- [ ] Database migration complete.
- [ ] Payment test complete.
- [ ] Google Maps test complete.
- [ ] Cloudinary upload test complete.
- [ ] Security review complete.
- [ ] Backup and restore review complete.
- [ ] Launch owner approved release.
