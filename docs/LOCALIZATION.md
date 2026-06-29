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
