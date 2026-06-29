import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const logs = [{ event: "ADMIN_LOGIN", severity: "LOW", createdAt: "Today" }, { event: "WEBHOOK_SIGNATURE_FAILED", severity: "HIGH", createdAt: "Today" }];

export default function SecurityLogsPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Security logs</h1><Card><Table data={logs} columns={[{ key: "event", header: "Event" }, { key: "severity", header: "Severity" }, { key: "createdAt", header: "Date" }]} /></Card></div>;
}
