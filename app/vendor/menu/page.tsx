import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import { StatusPill } from "@/components/ui/status-pill";
import { demoMenu } from "@/lib/data";

export default function VendorMenuPage() {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3"><h1 className="text-3xl font-black">Menu management</h1><Link href="/vendor/menu/add"><Button>Add food item</Button></Link></div>
      <Card>
        <Table data={demoMenu as unknown as Record<string, unknown>[]} columns={[
          { key: "name", header: "Item" },
          { key: "category", header: "Category" },
          { key: "price", header: "Price", render: (item) => `NGN ${Number(item.price).toLocaleString()}` },
          { key: "isAvailable", header: "Status", render: () => <StatusPill status="Available" /> }
        ]} />
      </Card>
    </div>
  );
}
