import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { customerOrders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-5xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black">Orders</h1>
        {customerOrders.map((order) => <Link key={order.id} href={`/orders/${order.id}`}><Card><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-bold">{order.orderNumber}</h2><p className="text-sm text-slate-600 dark:text-slate-300">{order.vendorName} • {order.createdAt}</p></div><StatusPill status={order.status} /></div></Card></Link>)}
      </section>
    </PublicLayout>
  );
}
