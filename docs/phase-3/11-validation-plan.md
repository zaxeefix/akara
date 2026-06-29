# Validation Plan

## Recommended Library

Use Zod for request validation.

Reasons:

- TypeScript-first.
- Works well with Express middleware.
- Can infer types from schemas.
- Supports nested objects.
- Supports custom refinements.
- Easy to return structured validation errors.

Alternative:

- Joi is mature and acceptable, but Zod is preferred for TypeScript consistency.

## Validation Principles

- Validate body, params, and query.
- Normalize emails and phone numbers.
- Reject unknown fields for sensitive endpoints.
- Keep validation errors localized through message keys.
- Keep money values as decimal strings or integer minor units at API boundaries.
- Re-check prices and permissions server-side.

## User Registration

Validate:

- Name required.
- Email or phone required.
- Email format if provided.
- Nigerian phone format if provided.
- Password minimum strength.
- Role must be allowed for self-registration.
- Terms acceptance where applicable.

Security:

- Prevent duplicate email/phone.
- Hash password.
- Rate-limit registration.

## Vendor Registration

Validate:

- Business name.
- Owner name.
- Phone.
- WhatsApp optional but valid if provided.
- Email optional but valid if provided.
- State.
- Local government.
- Ward.
- Community.
- Street.
- House number.
- GPS coordinates if provided.
- Google Maps location if provided.
- Opening hours.
- Closing hours.
- Business description length.
- Logo/cover image rules.

Security:

- Validate ownership.
- Prevent slug collisions.
- Queue for admin approval.

## Order Creation

Validate:

- Vendor ID exists and is approved.
- Vendor is open or order scheduling is enabled.
- Items exist and belong to vendor.
- Quantities are valid.
- Items are available.
- Fulfillment type is supported.
- Delivery address required for delivery.
- Customer note length.

Security:

- Recalculate totals server-side.
- Do not trust client prices.
- Create price snapshots.

## Payment Verification

Validate:

- Provider is supported.
- Reference format.
- Order ownership.
- Amount matches order total.
- Currency is NGN.

Security:

- Verify with provider server-side.
- Use webhook signatures.
- Enforce idempotency.

## Review Creation

Validate:

- Rating is within allowed range.
- Comment length.
- Order is completed where required.
- Customer has not reviewed same order more than allowed.
- Review image rules if uploaded.

Security:

- Sanitize comment.
- Rate-limit review creation.
- Allow moderation.

## File Upload

Validate:

- File exists.
- File size.
- MIME type.
- Extension.
- Image dimensions if needed.
- Upload purpose.
- User role and resource ownership.

Security:

- Use Cloudinary signed upload or server upload.
- Store public ID.
- Do not expose secrets.
- Separate verification documents from public media.

## Admin Actions

Validate:

- Admin role.
- Super admin role for critical settings.
- 2FA completion.
- Recent authentication for critical actions.
- Required reason for rejection, suspension, refund, or destructive actions.
- Target resource exists.

Security:

- Audit every mutation.
- Rate-limit admin login.
- Log permission denials.

## Validation Error Format

```json
{
  "code": "VALIDATION_ERROR",
  "message": "validation.failed",
  "details": [
    {
      "field": "businessName",
      "messageKey": "validation.required"
    }
  ]
}
```
