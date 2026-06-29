"use client";

import { languageNames, locales, type Locale } from "@/i18n/config";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function LanguageSwitcher() {
  const [locale, setLocale] = useLocalStorage<Locale>("akaraconnect-locale", "en");
  return (
    <label className="inline-flex items-center gap-2 text-sm font-semibold" htmlFor="language">
      <span className="sr-only">Language</span>
      <select
        id="language"
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="min-h-10 rounded-card border border-slate-300 bg-white px-3 dark:border-slate-700 dark:bg-slate-900"
      >
        {locales.map((item) => <option key={item} value={item}>{languageNames[item]}</option>)}
      </select>
    </label>
  );
}
