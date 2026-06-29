import Link from "next/link";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { customerOrders } from "@/lib/data";

export default function VendorOrdersPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Vendor orders</h1>{customerOrders.map((order) => <Link href={`/vendor/orders/${order.id}`} key={order.id}><Card><div className="flex justify-between gap-3"><div><p className="font-bold">{order.orderNumber}</p><p className="text-sm text-slate-600 dark:text-slate-300">{order.vendorName}</p></div><StatusPill status={order.status} /></div></Card></Link>)}</div>;
}
