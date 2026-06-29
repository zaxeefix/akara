import { Card } from "@/components/ui/card";
import { vendorMetrics } from "@/lib/data";

export default function VendorEarningsPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Earnings</h1><div className="grid gap-4 md:grid-cols-3">{vendorMetrics.slice(3, 5).map((metric) => <Card key={metric.label}><p className="text-sm text-slate-600 dark:text-slate-300">{metric.label}</p><p className="mt-2 text-2xl font-black">{metric.value}</p></Card>)}</div><Card><div className="h-64 rounded-card bg-slate-100 dark:bg-slate-900" aria-label="Earnings chart placeholder" /></Card></div>;
}
