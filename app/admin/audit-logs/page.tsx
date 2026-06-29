import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const logs = [{ action: "VENDOR_APPROVED", actor: "Admin", target: "Vendor" }];

export default function AuditLogsPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Audit logs</h1><Card><Table data={logs} columns={[{ key: "action", header: "Action" }, { key: "actor", header: "Actor" }, { key: "target", header: "Target" }]} /></Card></div>;
}
