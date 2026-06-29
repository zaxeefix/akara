import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export default function LanguageSettingsPage() {
  return <PublicLayout><section className="mx-auto max-w-md px-4 py-10"><Card><h1 className="text-2xl font-black">Language settings</h1><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Choose your preferred language.</p><div className="mt-5"><LanguageSwitcher /></div></Card></section></PublicLayout>;
}
