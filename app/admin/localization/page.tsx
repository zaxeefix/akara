import { Card } from "@/components/ui/card";
import { languageNames, locales } from "@/i18n/config";

export default function LocalizationManagementPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Localization management</h1><div className="grid gap-4 md:grid-cols-3">{locales.map((locale) => <Card key={locale}><p className="font-bold">{languageNames[locale]}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Language file ready for translation expansion.</p></Card>)}</div></div>;
}
