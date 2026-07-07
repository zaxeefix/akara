import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { vendorAnalyticsCards, vendorBusinessHealth, vendorMetrics, vendorWalletCards } from "@/lib/data";

export function VendorDashboard() {
  return (
    <div className="grid gap-4">
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="warning">Business onboarding required</Badge>
              <StatusPill status="Draft" />
            </div>
            <h1 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">Finish onboarding your food business</h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-700 dark:text-slate-300">
              Your vendor account has its own dashboard. Complete business profile, location, menu, payment, and verification steps here before admin approval activates selling.
            </p>
          </div>
          <Link href="/vendor/onboarding">
            <Button>Start business onboarding</Button>
          </Link>
        </div>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {vendorMetrics.map((metric) => (
          <Card key={metric.label}>
            <p className="text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            <p className="mt-2 text-2xl font-black">{metric.value}</p>
            <p className="mt-1 text-xs text-slate-500">{metric.helper}</p>
          </Card>
        ))}
      </div>
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Order access</h2>
          <StatusPill status="Awaiting onboarding" />
        </div>
        <div className="mt-4 grid gap-3">
          {["Complete business profile", "Add first menu item", "Submit for admin approval"].map((step) => <div className="flex justify-between rounded-card bg-slate-100 p-3 dark:bg-slate-900" key={step}><span>{step}</span><StatusPill status="Required" /></div>)}
        </div>
      </Card>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Business health</h2>
            <Badge tone="warning">Awaiting approval</Badge>
          </div>
          <div className="mt-4 grid gap-3">
            {vendorBusinessHealth.map(([label, value, helper]) => (
              <div key={label} className="flex flex-wrap items-center justify-between gap-3 rounded-card bg-slate-100 p-3 dark:bg-slate-900">
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{helper}</p>
                </div>
                <StatusPill status={value} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold">Vendor wallet</h2>
            <Badge tone="warning">Beta ledger</Badge>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {vendorWalletCards.map(([label, value, helper]) => (
              <div key={label} className="rounded-card bg-slate-100 p-3 dark:bg-slate-900">
                <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
                <p className="mt-1 text-lg font-black">{value}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helper}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Sales analytics</h2>
          <Badge tone="info">Beta charts</Badge>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {vendorAnalyticsCards.map(([label, value, helper]) => (
            <div key={label} className="rounded-card bg-slate-100 p-3 dark:bg-slate-900">
              <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
              <p className="mt-1 text-xl font-black">{value}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{helper}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
