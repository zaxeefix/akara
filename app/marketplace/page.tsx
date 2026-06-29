import { PublicLayout } from "@/components/layout/public-layout";
import { VendorCard } from "@/components/customer/vendor-card";
import { CategoryChips } from "@/components/customer/category-chips";
import { VendorMap } from "@/components/maps/vendor-map";
import { demoVendors } from "@/lib/data";

export default function MarketplacePage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black">Vendor marketplace</h1>
        <CategoryChips />
        <div className="grid gap-4 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4 md:grid-cols-2">{demoVendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}</div>
          <VendorMap label="Marketplace vendor map" />
        </div>
      </section>
    </PublicLayout>
  );
}
