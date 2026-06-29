import { PublicLayout } from "@/components/layout/public-layout";
import { VendorCard } from "@/components/customer/vendor-card";
import { VendorMap } from "@/components/maps/vendor-map";
import { LocationTools } from "@/components/maps/location-tools";
import { demoVendors } from "@/lib/data";

export default function NearbyPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black">Nearby vendors</h1>
        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <VendorMap label="Nearby vendors map" />
          <LocationTools />
        </div>
        <div className="grid gap-4 md:grid-cols-3">{demoVendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}</div>
      </section>
    </PublicLayout>
  );
}
