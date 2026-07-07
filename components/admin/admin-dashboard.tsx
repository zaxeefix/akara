import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Badge } from "@/components/ui/badge";
import { adminManagementCards, adminMetrics } from "@/lib/data";

export function AdminDashboard() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <Card key={metric.label}>
            <p className="text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            <p className="mt-2 text-2xl font-black">{metric.value}</p>
            <p className="mt-1 text-xs text-slate-500">{metric.helper}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-xl font-bold">Recent activities</h2>
        <div className="mt-4 grid gap-3">
          {["Vendor approval requested", "Payment webhook verified", "Security alert reviewed"].map((item) => <div className="flex justify-between rounded-card bg-slate-100 p-3 dark:bg-slate-900" key={item}><span>{item}</span><StatusPill status="Open" /></div>)}
        </div>
      </Card>
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold">Super admin control areas</h2>
          <Badge tone="info">RBAC protected</Badge>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {adminManagementCards.map(([title, description]) => (
            <div key={title} className="rounded-card bg-slate-100 p-3 dark:bg-slate-900">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
