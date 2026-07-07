# Vendor Onboarding

Vendor onboarding is approval-gated in AkaraConnect v1.0 beta. A vendor must not start selling until profile, location, first menu item, payment details, and verification are reviewed.

## Required Beta Flow

1. Vendor creates an account with vendor role.
2. Vendor enters business information.
3. Vendor adds branding and description.
4. Vendor enters location and delivery settings.
5. Vendor creates at least one menu item.
6. Vendor adds settlement/payment details.
7. Vendor uploads optional verification files.
8. Vendor accepts terms and submits for review.
9. Admin approves, rejects, suspends, or requests more information.
10. Approved vendors can use the active dashboard.

## Data To Collect

Business information:
- Business name
- Owner name
- Phone
- Email
- Password during account creation

Branding:
- Logo
- Cover photo
- Business description

Location:
- Country
- State
- Local Government Area
- Full address
- GPS coordinates
- Google Maps location

Business settings:
- Opening time
- Closing time
- Pickup available
- Delivery available
- Delivery radius
- Delivery fee

First menu item:
- Food name
- Price
- Description
- Food image
- Preparation time
- Availability status

Payment:
- Bank name
- Account number
- Account name
- Mobile wallet as future feature

Verification:
- National ID optional
- Business certificate optional
- Business photos
- Location verification where possible

## Approval Rules

- New vendors should default to pending review.
- Rejected vendors should receive a reason.
- Suspended vendors should not receive new orders.
- Approval, rejection, and suspension should be auditable.

## Beta Limitations

- File upload providers are Cloudinary-ready but should remain server-side before production uploads.
- Mobile wallet settlement is future architecture.
- Full staff management is a future module.
