import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Tabs } from "@/components/ui/tabs";
import { VendorMap } from "@/components/maps/vendor-map";
import { demoMenu, demoVendors } from "@/lib/data";
import { WhatsappLink } from "@/components/shared/whatsapp-link";

export default function VendorProfilePage({ params }: { params: { id: string } }) {
  const vendor = demoVendors.find((item) => item.id === params.id) ?? demoVendors[0];
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6">
        <div className="h-56 rounded-card bg-gradient-to-br from-primary to-ink" role="img" aria-label={`${vendor.businessName} cover`} />
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div><h1 className="text-3xl font-black">{vendor.businessName}</h1><p className="mt-2 text-slate-600 dark:text-slate-300">{vendor.description}</p></div>
            <StatusPill status={vendor.status ?? "Open"} />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Call vendor</Button>
            <WhatsappLink phone="2348000000000" label="WhatsApp vendor" message={`Hello ${vendor.businessName}, I found you on AkaraConnect and want to order.`} />
            <Button variant="secondary">Save favorite</Button>
          </div>
        </Card>
        <Tabs tabs={["Menu", "Reviews", "About"]} active="Menu" />
        <div className="grid gap-4 lg:grid-cols-[1fr_380px]">
          <div className="grid gap-4 md:grid-cols-2">
            {demoMenu.map((item) => <Card key={item.id}><h3 className="font-bold">{item.name}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p><p className="mt-3 font-black">NGN {item.price.toLocaleString()}</p><Button className="mt-3 w-full">Add to cart</Button></Card>)}
          </div>
          <VendorMap />
        </div>
      </section>
    </PublicLayout>
  );
}
