# Mobile App Roadmap

## Recommended Stack

- React Native or Expo.
- Shared TypeScript types where practical.
- Same backend APIs.
- Same PostgreSQL/Neon database.
- Same Cloudinary storage.
- Same payment gateway structure.

## Architecture

Mobile apps should consume the existing backend through `NEXT_PUBLIC_API_URL` equivalent mobile configuration. The backend remains the source of truth for auth, orders, vendors, payments, reviews, notifications, maps, and uploads.

## Authentication Flow

- Email/password login.
- Phone OTP login.
- Google login.
- Refresh token flow.
- Role-based routing for customer, vendor, admin, and future rider.

Mobile token handling should use secure device storage, not plain async storage for sensitive tokens.

## Push Notifications

Future notification providers:

- Expo push notifications.
- Firebase Cloud Messaging.
- Apple Push Notification service.

Notification payloads should use translation keys and metadata, matching the web localization strategy.

## Deep Linking

Planned deep links:

- Vendor profile.
- Order tracking.
- Payment result.
- Review prompt.
- Vendor approval status.

## Maps and Navigation

- Use platform maps where appropriate.
- Keep Google Maps API keys restricted.
- Provide fallback address text and open-in-maps links.

## Payments on Mobile

- Paystack first.
- Support redirect or in-app browser flow.
- Verify all payments on the backend.
- Never expose secret keys in mobile apps.

## Offline Mode Strategy

Safe offline data:

- Recently viewed vendors.
- Saved language preference.
- Draft vendor profile edits.
- Draft support ticket.

Do not allow offline payment confirmation or order finalization without server verification.

## App Store Readiness Checklist

- [ ] App name and icon finalized.
- [ ] Privacy policy published.
- [ ] Terms of service published.
- [ ] Payment provider rules reviewed.
- [ ] Location permission copy reviewed.
- [ ] Push notification permission copy reviewed.
- [ ] Screenshots prepared.
- [ ] TestFlight/internal testing completed.
- [ ] Android closed testing completed.
