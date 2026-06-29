import { Card } from "@/components/ui/card";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function VendorSettingsPage() {
  return <Card><h1 className="text-3xl font-black">Vendor settings</h1><div className="mt-5 flex flex-wrap gap-3"><LanguageSwitcher /><ThemeToggle /></div></Card>;
}
