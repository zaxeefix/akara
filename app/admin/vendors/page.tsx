import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { demoVendors } from "@/lib/data";

export default function VendorManagementPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Vendor management</h1><Card><Table data={demoVendors as unknown as Record<string, unknown>[]} columns={[{ key: "businessName", header: "Business" }, { key: "state", header: "State" }, { key: "status", header: "Status" }]} /></Card></div>;
}
