export const locales = ["en", "ha", "yo", "ig", "tiv"] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  en: "English",
  ha: "Hausa",
  yo: "Yoruba",
  ig: "Igbo",
  tiv: "Tiv"
};

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
