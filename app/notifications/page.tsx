import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

export default function NotificationsPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-4xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black">Notifications</h1>
        {["Order accepted", "Payment verified", "Vendor replied"].map((item) => <Card key={item}><div className="flex justify-between gap-3"><p className="font-semibold">{item}</p><StatusPill status="New" /></div></Card>)}
      </section>
    </PublicLayout>
  );
}
