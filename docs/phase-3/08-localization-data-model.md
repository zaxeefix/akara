# Localization Data Model

## Supported Languages

- English: `en`
- Hausa: `ha`
- Yoruba: `yo`
- Igbo: `ig`
- Tiv: `tiv`

## Core Rule

Application UI text must use i18n language files and must not be hard-coded in components, controllers, validation messages, emails, notifications, or admin screens.

## What Lives in Language Files

- Navigation labels.
- Buttons.
- Form labels.
- Form helper text.
- Validation messages.
- Error messages.
- Empty states.
- Loading states.
- Toast messages.
- Notification templates.
- Order status labels.
- Payment status labels.
- Admin dashboard labels.
- Accessibility labels.

## What Lives in the Database

### User Language Preference

Table/model: `UserLanguagePreference`

Purpose:

- Store each user's preferred locale.
- Override browser language detection.

Fields:

- `userId`
- `locale`
- `createdAt`
- `updatedAt`

### Vendor Language Preference

Table/model: `VendorLanguagePreference`

Purpose:

- Store languages a vendor can support if needed for customer communication.

Fields:

- `vendorBusinessId`
- `locale`
- `createdAt`

### Notifications

Notifications should store translation keys and metadata:

- `titleKey`
- `bodyKey`
- `metadata`

This lets the same notification render in the user's current language.

## Locale File Structure

Suggested frontend structure:

```text
locales/
  en/
    common.json
    auth.json
    customer.json
    vendor.json
    admin.json
    orders.json
    payments.json
    reviews.json
    notifications.json
    validation.json
    errors.json
  ha/
  yo/
  ig/
  tiv/
```

Suggested backend structure:

```text
src/locales/
  en/
    validation.json
    errors.json
    notifications.json
  ha/
  yo/
  ig/
  tiv/
```

## Key Naming

Use semantic keys:

- `auth.login.title`
- `auth.login.invalidCredentials`
- `vendor.registration.businessName`
- `orders.status.preparing`
- `payments.status.paid`
- `validation.required`
- `errors.unauthorized`

Avoid sentence-based keys because English wording may change.

## Language Detection Flow

1. Check logged-in user's saved preference.
2. Check anonymous session preference.
3. Check browser language.
4. If supported, use matched locale.
5. If unsupported, fall back to English.

Manual selection always overrides browser detection.

## Adding New Nigerian Languages

To add a new language:

1. Add locale code to supported locale config.
2. Add language files for required namespaces.
3. Add language label in language switcher config.
4. Review translations.
5. No core application logic should change.

## Admin Localization Management

Phase 3 recommendation:

- Use language files as source of truth for MVP.
- Admin localization page can report missing translations later.
- Avoid editing production translations in the database until a translation workflow is designed.

## Validation and Errors

Backend validation should return error codes and translation keys, not only English strings.

Example:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "validation.failed",
  "details": [
    {
      "field": "phone",
      "messageKey": "validation.phone.invalid"
    }
  ]
}
```
