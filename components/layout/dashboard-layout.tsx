import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { ThemeToggle } from "@/components/shared/theme-toggle";

type DashboardLayoutProps = {
  title: string;
  role: "vendor" | "admin";
  nav: Array<[string, string]>;
  children: ReactNode;
};

export function DashboardLayout({ title, role, nav, children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-mist text-ink dark:bg-ink dark:text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:block">
        <Link href="/" className="text-xl font-black text-primary">AkaraConnect</Link>
        <p className="mt-1 text-sm text-slate-500">{role === "admin" ? "Admin console" : "Vendor workspace"}</p>
        <nav className="mt-6 grid gap-1" aria-label={`${role} navigation`}>
          {nav.map(([label, href]) => <Link key={href} href={href} className="rounded-card px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900">{label}</Link>)}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{role}</p>
            <h1 className="text-lg font-bold">{title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </header>
        <main className="p-4 pb-20 lg:p-6">{children}</main>
        <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white text-xs font-semibold dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          {nav.slice(0, 4).map(([label, href]) => <Link className="grid min-h-14 place-items-center text-center" key={href} href={href}>{label}</Link>)}
        </nav>
      </div>
    </div>
  );
}
