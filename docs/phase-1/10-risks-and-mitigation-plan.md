# Risks and Mitigation Plan

## Product Risks

### Low Vendor Adoption

Risk: Local vendors may not trust or understand the digital marketplace.

Mitigation:

- Keep vendor onboarding simple and mobile-friendly.
- Support phone-first registration.
- Use clear approval status and guidance.
- Provide local language support.
- Plan offline field onboarding in future phases.

### Incomplete Vendor Data

Risk: Vendors may submit poor location, hours, or menu data.

Mitigation:

- Make required fields clear.
- Validate address and contact fields.
- Encourage GPS and Google Maps selection.
- Let admins request more information.
- Add profile completion score in later phases.

### Customer Trust Issues

Risk: Customers may hesitate to order from unknown vendors.

Mitigation:

- Vendor approval workflow.
- Ratings and reviews.
- Business photos and location visibility.
- Report and moderation tools.
- Clear order status and contact options.

### Food Availability Changes

Risk: Street food availability and pricing may change frequently.

Mitigation:

- Make price and availability editing fast.
- Show open/closed status.
- Allow vendors to mark items unavailable.
- Notify customers when order items change.

## Technical Risks

### Payment Provider Complexity

Risk: Supporting many payment providers at once can delay MVP.

Mitigation:

- Create a payment abstraction.
- Launch MVP with one primary provider plus cash on delivery.
- Add other providers in Version 2.
- Use server-side payment verification and webhook logs.

### Location Accuracy

Risk: Vendor locations may be inaccurate or hard to map.

Mitigation:

- Collect structured address fields and GPS coordinates.
- Support Google Maps location selection.
- Allow admin review of location data.
- Let customers report incorrect locations.

### Security Vulnerabilities

Risk: Marketplace platforms handle sensitive identity, payment, and account data.

Mitigation:

- Follow OWASP Top 10.
- Use RBAC.
- Add rate limiting.
- Validate and sanitize input.
- Use secure auth and session handling.
- Keep audit logs.
- Require 2FA for admin users.
- Maintain dependency scanning in CI.

### Data Model Growth

Risk: New categories, riders, subscriptions, adverts, and payments can make the data model complex.

Mitigation:

- Use modular schema design.
- Keep future rider logic separate from MVP order logic.
- Use extensible enums carefully.
- Document data decisions.

### Third-Party Service Outages

Risk: Maps, payments, storage, OTP, or hosting providers may fail.

Mitigation:

- Wrap integrations behind service modules.
- Log provider errors.
- Show user-friendly fallback messages.
- Support retry workflows where safe.
- Avoid coupling core order records to provider availability.

## Operational Risks

### Fraudulent Vendors

Risk: Fake or unsafe vendors may attempt to join.

Mitigation:

- Admin approval before public listing.
- Capture contact and location information.
- Add fraud signals and reports.
- Maintain suspension tools.
- Keep audit logs for approval actions.

### Fraudulent Orders or Reviews

Risk: Fake orders and review abuse can damage trust.

Mitigation:

- Require authenticated users for orders and reviews.
- Link reviews to completed orders where possible.
- Rate limit review actions.
- Add moderation queue.
- Track suspicious patterns.

### Admin Misuse

Risk: Admin users may accidentally or intentionally misuse powerful tools.

Mitigation:

- Role-based permissions.
- Audit logs.
- 2FA for admins.
- Principle of least privilege.
- Clear confirmation on high-impact actions.

### Localization Quality

Risk: Poor translations can reduce trust and usability.

Mitigation:

- Use translation files from day one.
- Keep keys organized.
- Review translations with native speakers.
- Fall back to English for missing keys.

## Open-Source Risks

### Inconsistent Contributions

Risk: Contributors may submit unclear or low-quality changes.

Mitigation:

- Provide contribution guidelines.
- Add issue and pull request templates.
- Use CI checks.
- Document coding standards.
- Require review before merge.

### Secret Leakage

Risk: API keys or credentials may be committed by mistake.

Mitigation:

- Provide `.env.example`.
- Add secret scanning guidance.
- Use GitHub Actions safely.
- Document environment variable handling.
- Avoid committing real credentials.

## Business Risks

### Monetization Timing

Risk: Ads and subscriptions too early may discourage vendors.

Mitigation:

- Launch core marketplace first.
- Add subscriptions and adverts after vendor value is proven.
- Keep free vendor onboarding for early adoption.

### Market Expansion Complexity

Risk: Expanding beyond initial categories and locations may introduce operational complexity.

Mitigation:

- Start with clear food categories.
- Design categories to be extensible.
- Add future categories after core workflows are stable.
- Track city/state performance before expansion.
