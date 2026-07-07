"use client";

import { translate } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { useLocalStorage } from "@/hooks/use-local-storage";

export function BetaNotice() {
  const [locale] = useLocalStorage<Locale>("akaraconnect-locale", "en");

  return (
    <div className="border-b border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-950 dark:border-sky-900 dark:bg-slate-900 dark:text-sky-100">
      <div className="mx-auto max-w-7xl">
        {translate(locale, "beta.notice")}
      </div>
    </div>
  );
}
