import { Card } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const payments = [{ reference: "AKC-PAY-1001", method: "PAYSTACK", status: "SUCCESSFUL", amount: "NGN 2,000" }];

export default function PaymentsManagementPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Payments management</h1><Card><Table data={payments} columns={[{ key: "reference", header: "Reference" }, { key: "method", header: "Method" }, { key: "status", header: "Status" }, { key: "amount", header: "Amount" }]} /></Card></div>;
}
