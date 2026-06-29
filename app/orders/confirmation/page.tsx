import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";

export default function OrderConfirmationPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-2xl px-4 py-10">
        <Card>
          <StatusPill status="Order placed" />
          <h1 className="mt-4 text-3xl font-black">Your order has been received</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">The vendor will confirm availability. You can track status from pending to accepted, preparing, ready, and delivered.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/orders"><Button>Track order</Button></Link>
            <Link href="/reviews"><Button variant="secondary">Review after completion</Button></Link>
          </div>
        </Card>
      </section>
    </PublicLayout>
  );
}
