# Localization

AkaraConnect supports localization from the frontend foundation.

Initial locales:

- `en`: English
- `ha`: Hausa
- `yo`: Yoruba
- `ig`: Igbo
- `tiv`: Tiv

Language utilities live in `i18n/`. The language switcher stores manual preference in local storage. Future backend sync can save the preference through the customer profile API.

User-facing text should use translation keys where practical. New Nigerian languages should be added by extending locale config and dictionaries, not by changing core page logic.

## Beta UX Rules

- Show the beta notice through a translation key so every supported language can explain the pilot status clearly.
- Ask for or infer language during signup where possible, then persist the selected language in the user profile when backend profile sync is available.
- Keep menus, buttons, empty states, validation messages, notifications, and system alerts behind dictionary keys as they are expanded.
- Do not hard-code new customer, vendor, rider, or admin interface text when adding production-facing screens.
- Add future Nigerian languages by extending `i18n/config.ts` and `i18n/dictionaries.ts`; core application code should not need role-specific language branches.
