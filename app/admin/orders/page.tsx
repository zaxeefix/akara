import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";
import { customerOrders } from "@/lib/data";

export default function OrdersManagementPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Orders management</h1><Card><Table data={customerOrders as unknown as Record<string, unknown>[]} columns={[{ key: "orderNumber", header: "Order" }, { key: "vendorName", header: "Vendor" }, { key: "status", header: "Status" }, { key: "total", header: "Total" }]} /></Card></div>;
}
