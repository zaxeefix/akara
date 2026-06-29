# Product Requirements Document

## Product Name

AkaraConnect

## Owner

ZaxeeFix Enterprise

## Product Summary

AkaraConnect is a digital marketplace that connects customers with trusted local food vendors across Nigeria, starting with Akara, Pap/Ogi/Akamu, and related street food categories. The platform will help customers discover nearby vendors, place orders, pay online or offline, communicate with vendors, and track order progress. It will help vendors digitize their businesses through online profiles, menu tools, order management, analytics, and customer records.

## Vision

Build Africa's largest digital marketplace for local street food vendors.

## Mission

Digitize local food businesses and connect customers with trusted vendors using modern technology.

## Goals

- Make local food vendors discoverable online.
- Help customers find nearby trusted vendors quickly.
- Enable vendors to manage menus, prices, orders, earnings, and customer relationships.
- Provide admins with tools for approval, moderation, fraud detection, reporting, and growth management.
- Build a secure, scalable, multilingual open-source foundation.
- Design the platform so future delivery riders and more local food categories can be added cleanly.

## Non-Goals for MVP

- Full delivery rider marketplace.
- Nationwide same-day logistics orchestration.
- Advanced machine learning fraud detection.
- Vendor loan/credit products.
- Restaurant-grade POS replacement.
- Offline-first mobile app.

## Primary User Groups

### Customers

People who want to find, order, review, and pay for local food from nearby vendors.

### Vendors

Local food sellers who want a digital storefront, menu management, order handling, customer visibility, and earnings records.

### Admins

Platform operators responsible for vendor approval, moderation, fraud monitoring, analytics, subscriptions, adverts, reports, and security oversight.

### Future Delivery Riders

Delivery agents who may later accept delivery tasks, update delivery status, and manage earnings.

## Core Food Categories

- Akara
- Pap
- Bread
- Tea
- Moi Moi
- Masa
- Kunun
- Waina
- Yam and Egg
- Beans
- Rice
- Local Snacks

## Future Food Categories

- Suya
- Kilishi
- Fruits
- Vegetables
- Local Restaurants

## Customer Requirements

- Register and log in with email/password.
- Log in with Google.
- Log in or verify with phone OTP.
- Search vendors and foods.
- Find nearby vendors based on location.
- View vendor profiles, menus, ratings, opening hours, and photos.
- Open Google Maps navigation to vendor location.
- Place orders.
- Pay using supported payment methods.
- Track order status.
- Chat with vendors.
- Call vendors.
- Review vendors and orders.
- Save favorite vendors.
- Receive notifications.
- Switch language manually.
- Use browser language detection.
- Use light mode and dark mode.

## Vendor Requirements

- Register as a vendor.
- Submit business information for approval.
- Manage business profile.
- Add, edit, hide, and delete menu items.
- Edit prices.
- Upload business logo, cover photo, and food pictures.
- Manage incoming orders.
- Update order status.
- Configure delivery settings.
- View customer records.
- View sales analytics and earnings.
- View and respond to reviews where allowed.
- Receive notifications.

## Vendor Registration Data

- Business name
- Owner name
- Phone
- WhatsApp
- Email
- State
- Local government
- Ward
- Community
- Street
- House number
- GPS coordinates
- Google Maps location
- Opening hours
- Closing hours
- Business logo
- Cover photo
- Business description

## Admin Requirements

- Approve, reject, suspend, and verify vendors.
- Manage customer accounts.
- Detect suspicious activity and fraud patterns.
- View analytics dashboard.
- Manage advertisements.
- Manage subscription plans.
- Generate reports.
- Review security logs.
- Moderate vendors, customers, reviews, menus, and platform content.
- Manage categories and future category expansion.

## Localization Requirements

- Support multilingual localization from day one.
- Use i18n language files, not hard-coded interface text.
- Initial languages: English, Hausa, Yoruba, Igbo, Tiv.
- Support browser language detection.
- Support manual language switching.
- Allow more Nigerian languages to be added later without core application code changes.

## Security Requirements

- JWT-based session or API authorization where appropriate.
- OAuth support for Google login.
- Role-based access control for customer, vendor, admin, and future rider roles.
- HTTPS-only production usage.
- Rate limiting for authentication, OTP, ordering, reviews, and admin actions.
- Encryption for sensitive data in transit and at rest where applicable.
- SQL injection protection through Prisma and input validation.
- XSS protection through output escaping, sanitization, secure headers, and safe rendering.
- CSRF protection for session-based flows.
- OWASP Top 10 alignment.
- Audit logs for sensitive admin and account actions.
- Backup and restore planning.
- Two-factor authentication for admins and optionally vendors.

## UI Requirements

- Modern, minimal, fast, responsive, and accessible.
- Mobile-first layout.
- Light mode and dark mode.
- Blue, white, and black theme.
- Rounded cards.
- Motion and animation used carefully for feedback and clarity.
- Interactive maps.
- Professional icon system.
- Accessible color contrast, keyboard navigation, labels, and focus states.

## Open-Source Requirements

- README
- MIT LICENSE
- Contributing guide
- Issue templates
- Pull request template
- GitHub Actions
- CI/CD plan
- Developer documentation
- API documentation
- Deployment guide

## Success Metrics

- Customer registration completion rate.
- Vendor registration completion rate.
- Vendor approval turnaround time.
- Search-to-order conversion rate.
- Repeat customer order rate.
- Average order completion time.
- Payment success rate.
- Review submission rate.
- Vendor menu completion rate.
- Admin resolution time for reports.
- Platform uptime.

## MVP Acceptance Criteria

- Customers can register, log in, discover vendors, view menus, place orders, and receive order status updates.
- Vendors can register, submit full business information, manage menus, receive and update orders.
- Admins can review and approve vendors, view basic reports, and moderate platform data.
- Localization foundation is implemented with English, Hausa, Yoruba, Igbo, and Tiv language files.
- Security foundation includes RBAC, protected routes, validation, secure auth flows, and audit logging design.
- Open-source project documentation and contribution standards are ready.
