import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const customers = [{ name: "Demo Customer", phone: "+2348000000001", status: "Active" }];

export default function CustomerManagementPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Customer management</h1><Card><Table data={customers} columns={[{ key: "name", header: "Name" }, { key: "phone", header: "Phone" }, { key: "status", header: "Status" }]} /></Card></div>;
}
