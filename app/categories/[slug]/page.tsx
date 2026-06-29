import { PublicLayout } from "@/components/layout/public-layout";
import { VendorCard } from "@/components/customer/vendor-card";
import { CategoryChips } from "@/components/customer/category-chips";
import { demoVendors } from "@/lib/data";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replaceAll("-", " ");
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-6">
        <h1 className="text-3xl font-black capitalize">{title}</h1>
        <CategoryChips />
        <div className="grid gap-4 md:grid-cols-3">{demoVendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}</div>
      </section>
    </PublicLayout>
  );
}
