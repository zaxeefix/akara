import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { VendorMap } from "@/components/maps/vendor-map";

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-4">
          <Card><h1 className="text-3xl font-black">Order {params.id}</h1><div className="mt-3"><StatusPill status="PREPARING" /></div></Card>
          <Card><h2 className="font-bold">Tracking timeline</h2><ol className="mt-4 grid gap-3 text-sm"><li>Pending</li><li>Accepted</li><li>Preparing</li><li>Ready for pickup</li><li>Delivered</li></ol></Card>
          <Card><h2 className="font-bold">Vendor contact</h2><div className="mt-3 flex gap-3"><Button>Call</Button><Button variant="secondary">Chat</Button></div></Card>
        </div>
        <VendorMap label="Order tracking map" />
      </section>
    </PublicLayout>
  );
}
