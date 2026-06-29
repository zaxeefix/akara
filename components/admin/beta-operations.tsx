import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

const operations = [
  ["Pending vendor approvals", "314", "Under review"],
  ["New customers", "1,248", "Today"],
  ["New orders", "482", "Live"],
  ["Active vendors", "8,912", "Healthy"],
  ["Reported vendors", "11", "Needs review"],
  ["Reported reviews", "19", "Needs review"],
  ["Failed payments", "7", "Investigate"],
  ["Security alerts", "3", "High priority"],
  ["Recent audit logs", "128", "24 hours"],
  ["Platform health", "Operational", "Healthy"]
];

export function BetaOperations() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {operations.map(([label, value, status]) => (
        <Card key={label}>
          <p className="text-sm text-slate-600 dark:text-slate-300">{label}</p>
          <p className="mt-2 text-2xl font-black">{value}</p>
          <div className="mt-3"><StatusPill status={status} /></div>
        </Card>
      ))}
    </div>
  );
}
