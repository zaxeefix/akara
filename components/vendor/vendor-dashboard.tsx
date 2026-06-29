import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { vendorMetrics } from "@/lib/data";

export function VendorDashboard() {
  return (
    <div className="grid gap-4">
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
          <h2 className="text-xl font-bold">Recent orders</h2>
          <StatusPill status="Verification approved" />
        </div>
        <div className="mt-4 grid gap-3">
          {["AKC-1004", "AKC-1003", "AKC-1002"].map((order) => <div className="flex justify-between rounded-card bg-slate-100 p-3 dark:bg-slate-900" key={order}><span>{order}</span><StatusPill status="PREPARING" /></div>)}
        </div>
      </Card>
    </div>
  );
}
