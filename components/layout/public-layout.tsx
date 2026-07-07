import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { BetaNotice } from "@/components/shared/beta-notice";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { SearchBar } from "@/components/ui/search-bar";

const nav = [
  ["Marketplace", "/marketplace"],
  ["Nearby", "/nearby"],
  ["Categories", "/categories/akara"],
  ["Vendor", "/vendor/onboarding"]
];

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-mist text-ink dark:bg-ink dark:text-white">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <BetaNotice />
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2" aria-label="AkaraConnect home">
              <Image
                src="/brand/akara-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/15"
                priority
              />
              <span className="text-xl font-black text-primary">AkaraConnect</span>
            </Link>
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="flex-1"><SearchBar /></div>
          <nav className="hidden items-center gap-4 text-sm font-semibold lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-primary">{label}</Link>)}
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/login" className="rounded-card px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-900">Login</Link>
          </nav>
        </div>
      </header>
      <main className="pb-20 lg:pb-0">{children}</main>
      <MobileBottomNav />
      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>AkaraConnect by ZaxeeFix Enterprise.</p>
          <p>Digital marketplace for Nigerian local food vendors.</p>
        </div>
      </footer>
    </div>
  );
}

function MobileBottomNav() {
  const items = [["Home", "/"], ["Search", "/marketplace"], ["Nearby", "/nearby"], ["Orders", "/orders"], ["Profile", "/profile"]];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-slate-200 bg-white text-xs font-semibold dark:border-slate-800 dark:bg-slate-950 lg:hidden" aria-label="Mobile navigation">
      {items.map(([label, href]) => <Link className="grid min-h-14 place-items-center text-center hover:text-primary" key={href} href={href}>{label}</Link>)}
    </nav>
  );
}
