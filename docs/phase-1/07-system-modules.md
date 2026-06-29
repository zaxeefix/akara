# System Modules

## Frontend Web App

Provides the customer, vendor, admin, and future rider interfaces using Next.js, React, TypeScript, and Tailwind CSS.

Responsibilities:

- Public pages
- Customer marketplace experience
- Vendor dashboard
- Admin dashboard
- Authentication screens
- Localization and language switching
- Theme switching
- Map UI
- Responsive mobile-first layouts

## Backend API

Provides business logic and API services using Node.js, Express.js, and TypeScript.

Responsibilities:

- Authentication support
- Authorization and role checks
- Customer APIs
- Vendor APIs
- Admin APIs
- Order APIs
- Payment APIs
- Notification APIs
- Maps and location-related server logic
- Audit logging
- Security controls

## Authentication and Authorization Module

Responsibilities:

- Email/password login
- Google OAuth through NextAuth
- JWT support
- Phone OTP foundation
- Role-based access control
- Two-factor authentication planning
- Session management
- Rate limiting for sensitive auth routes

Roles:

- Customer
- Vendor
- Admin
- Future rider

## Vendor Management Module

Responsibilities:

- Vendor registration
- Business profile management
- Address and location data
- Opening and closing hours
- Logo and cover photo
- Approval status
- Vendor suspension
- Vendor verification metadata

## Menu Management Module

Responsibilities:

- Food categories
- Menu item creation
- Price updates
- Item availability
- Picture uploads
- Menu moderation support

## Marketplace Discovery Module

Responsibilities:

- Search
- Nearby vendors
- Category browsing
- Open/closed filtering
- Rating and distance sorting
- Google Maps and Places integration
- Geolocation support

## Order Management Module

Responsibilities:

- Cart-to-order conversion
- Order status lifecycle
- Vendor accept/reject actions
- Customer order tracking
- Cancellation rules
- Refund workflow hooks
- Order timeline events

## Payment Module

Responsibilities:

- Payment provider abstraction
- Paystack initial integration candidate
- Future Flutterwave, Moniepoint, Opay, PalmPay, Visa, Mastercard, bank transfer, wallet, and cash on delivery support
- Payment initialization
- Webhook verification
- Payment reconciliation
- Payment status updates

## Communication Module

Responsibilities:

- Vendor call action
- Customer-vendor chat foundation
- Notification events
- Email, SMS, push, or in-app notification extensibility
- Localized notification messages

## Reviews and Trust Module

Responsibilities:

- Customer reviews
- Ratings
- Vendor reputation
- Review moderation
- Abuse reporting
- Fraud signal contribution

## Admin and Moderation Module

Responsibilities:

- Vendor approval
- Customer management
- Vendor management
- Fraud monitoring
- Reports
- Analytics dashboard
- Advertisements
- Subscription plans
- Security logs
- Platform moderation

## Localization Module

Responsibilities:

- i18n language files
- English, Hausa, Yoruba, Igbo, and Tiv support
- Browser language detection
- Manual switching
- Translation key conventions
- Future language expansion

## Media Storage Module

Responsibilities:

- Cloudinary upload handling
- Business logos
- Cover photos
- Menu item pictures
- Image validation
- Image transformation rules

## Analytics Module

Responsibilities:

- Vendor sales analytics
- Earnings summaries
- Admin platform analytics
- Customer behavior metrics
- Operational reports

## Security and Compliance Module

Responsibilities:

- Secure headers
- Rate limiting
- Input validation
- SQL injection protection
- XSS protection
- CSRF protection
- Encryption planning
- OWASP Top 10 alignment
- Audit logs
- Backups
- 2FA support

## Open-Source Operations Module

Responsibilities:

- README
- MIT license
- Contributing guide
- Issue templates
- Pull request templates
- GitHub Actions
- CI/CD workflows
- Developer documentation
- API documentation
- Deployment guide
