# Localization UX

## Supported Languages

Initial supported languages:

- English
- Hausa
- Yoruba
- Igbo
- Tiv

## Core Requirement

The application must use i18n language files and must not hard-code user-facing text.

All visible labels, buttons, messages, errors, empty states, notifications, form helper text, validation messages, dashboard titles, table headers, and status names should come from translation keys.

## Language Selection Entry Points

- First visit browser language detection.
- Landing page header.
- Login and register screens.
- Customer profile settings.
- Vendor settings.
- Admin settings.
- Onboarding flows.

## Browser Language Detection

Flow:

1. System checks saved user preference.
2. If no saved preference exists, system checks browser language.
3. If browser language is supported, use that language.
4. If unsupported, default to English.
5. User can manually override at any time.

Manual selection should always win over browser detection.

## Language Switcher Design

Desktop:

- Header language button with globe icon and current language label.
- Dropdown list with supported languages.
- Current language marked with check icon.

Mobile:

- Language opens as a bottom sheet or full settings page.
- Each language appears as a radio row.
- Apply button confirms selection.

Admin:

- Language switcher in profile menu.
- Localization management area is separate from personal language preference.

## Language Names

Display language names in a clear form:

- English
- Hausa
- Yoruba
- Igbo
- Tiv

Future improvement can include native-language labels once translations are reviewed.

## Translation File Strategy

Suggested locale folders:

- `en`
- `ha`
- `yo`
- `ig`
- `tiv`

Suggested namespaces:

- `common`
- `auth`
- `customer`
- `vendor`
- `admin`
- `orders`
- `payments`
- `reviews`
- `notifications`
- `errors`
- `validation`

## Key Naming Guidance

Use stable semantic keys:

- `common.actions.save`
- `common.actions.cancel`
- `auth.login.title`
- `customer.home.nearbyVendors`
- `vendor.menu.addItem`
- `admin.vendorApproval.title`
- `orders.status.preparing`
- `validation.required`

Avoid keys based on English sentences because wording may change.

## Localization UX Rules

- Design buttons to handle longer translations.
- Avoid fixed-width text containers.
- Avoid text inside icons.
- Keep important labels visible.
- Do not rely on color alone.
- Use clear icons next to localized labels where helpful.
- Keep food category names translatable but allow known local names to remain recognizable.

## Form Validation Messages

Validation messages should be localized:

- Required field.
- Invalid phone number.
- Invalid email.
- Password too short.
- Location is required.
- Upload failed.
- Payment failed.

Messages should explain the correction, not only the problem.

## Notification Localization

Notifications should store a message key and metadata, not only a final text string.

Example metadata concept:

- Message key: order accepted.
- Metadata: vendor name, order number.

This allows the same notification to render in the user's current language.

## Admin Localization Management

Admin localization management should show:

- Supported languages.
- Missing translation count.
- Search by key.
- Completion percentage.
- Recently changed keys.
- Export/import controls in a future version.

## Fallback Behavior

- Missing key in selected language falls back to English.
- Missing English key should show a safe developer fallback in non-production and a generic user-safe message in production.
- Log missing keys for review.

## Content Review

Translations should be reviewed by fluent speakers before public launch.

Priority translation areas:

1. Authentication.
2. Vendor discovery.
3. Ordering and payment.
4. Vendor onboarding.
5. Error and validation messages.
6. Admin moderation actions.
