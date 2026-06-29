const supportedLocales = ["en", "ha", "yo", "ig", "tiv"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const isSupportedLocale = (locale: string): locale is SupportedLocale => {
  return supportedLocales.includes(locale as SupportedLocale);
};

export const normalizeLocale = (locale?: string | null): SupportedLocale => {
  if (locale && isSupportedLocale(locale)) {
    return locale;
  }
  return "en";
};

const messages: Record<SupportedLocale, Record<string, string>> = {
  en: {
    "common.success": "Success",
    "auth.invalidCredentials": "Invalid credentials",
    "auth.unauthorized": "Authentication is required",
    "auth.forbidden": "You do not have permission to perform this action",
    "validation.failed": "Validation failed"
  },
  ha: {},
  yo: {},
  ig: {},
  tiv: {}
};

export const t = (key: string, locale: string = "en") => {
  const normalized = normalizeLocale(locale);
  return messages[normalized][key] ?? messages.en[key] ?? key;
};
