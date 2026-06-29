# Seed Data Plan

Seed data is for development and testing only. Do not include real passwords, real API keys, real phone OTP secrets, payment keys, Google Maps keys, or Cloudinary secrets.

## Seed Data Goals

- Allow developers to test customer, vendor, and admin flows quickly.
- Provide realistic Nigerian marketplace examples.
- Support API testing and UI development.
- Keep data safe, fake, and clearly marked as demo.

## Demo Users

Create demo users with hashed placeholder passwords generated locally during seeding:

- Demo customer.
- Demo vendor owner.
- Demo admin.
- Demo super admin.
- Future demo rider placeholder only if needed.

Rules:

- Never commit real passwords.
- Use `.env` value for local demo password if needed.
- Mark accounts as demo/test records.

## Demo Vendors

Sample vendor businesses:

- Amina's Akara Spot.
- Mama Titi Pap and Moi Moi.
- Kano Masa Corner.
- Lagos Bread and Tea Stand.
- Tiv Local Snacks Kitchen.

Include:

- Business name.
- Owner name.
- Phone placeholder.
- WhatsApp placeholder.
- Email placeholder.
- State.
- Local government.
- Ward/community.
- Street.
- GPS coordinates sample.
- Opening and closing hours.
- Logo/cover placeholder URLs.
- Description.
- Verification status.

## Demo Categories

Core categories:

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

Future inactive categories:

- Suya
- Kilishi
- Fruits
- Vegetables
- Local Restaurants

## Demo Menu Items

Examples:

- Akara portion.
- Pap cup.
- Akara and Pap combo.
- Moi Moi wrap.
- Bread and Tea combo.
- Masa plate.
- Kunun bottle.
- Waina plate.
- Yam and Egg.
- Beans and Bread.

Each item should include:

- Category.
- Vendor.
- Price in NGN.
- Description.
- Availability.
- Placeholder image.

## Demo Orders

Create orders across statuses:

- Pending.
- Accepted.
- Preparing.
- Ready.
- Completed.
- Cancelled.

Include:

- Order items.
- Price snapshots.
- Payment status.
- Fulfillment type.
- Timeline events.

## Demo Reviews

Create reviews for completed demo orders:

- Ratings from 3 to 5.
- Comments in English for seed simplicity.
- Moderation status published.
- Optional placeholder review image.

## Demo Admin

Create:

- Admin user with ADMIN role.
- Super admin user with SUPER_ADMIN role.
- 2FA disabled in local seed unless explicitly enabled by developer.

## Demo States and LGAs Sample

Sample states and local government areas for testing:

- Lagos: Ikeja, Surulere, Alimosho.
- Kano: Kano Municipal, Fagge, Nasarawa.
- Oyo: Ibadan North, Ibadan South-West, Ogbomosho North.
- Rivers: Port Harcourt, Obio-Akpor.
- Benue: Makurdi, Gboko.
- FCT: Abuja Municipal Area Council.

This is not a full official state/LGA dataset. Use a verified dataset before production.

## Seed Safety Rules

- Do not seed production database accidentally.
- Require explicit environment check before seeding.
- Use fake emails such as `example.test`.
- Use fake Nigerian-format phone numbers reserved for testing.
- Do not store real payment references.
- Do not store real Cloudinary public IDs.
