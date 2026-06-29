import { PublicLayout } from "@/components/layout/public-layout";
import { VendorCard } from "@/components/customer/vendor-card";
import { demoVendors } from "@/lib/data";

export default function FavoritesPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black">Favorite vendors</h1>
        <div className="grid gap-4 md:grid-cols-3">{demoVendors.slice(0, 2).map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}</div>
      </section>
    </PublicLayout>
  );
}
