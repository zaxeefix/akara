import Link from "next/link";
import Image from "next/image";
import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SearchBar } from "@/components/ui/search-bar";
import { VendorCard } from "@/components/customer/vendor-card";
import { CategoryChips } from "@/components/customer/category-chips";
import { demoVendors } from "@/lib/data";

export default function LandingPage() {
  return (
    <PublicLayout>
      <section className="bg-ink text-white">
        <div className="mx-auto grid min-h-[72vh] max-w-7xl content-center gap-8 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-sky-200">Africa&apos;s local food marketplace</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">Find trusted local food vendors near you</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">Order Akara, Pap/Ogi/Akamu, Moi Moi, Masa, Kunun, and everyday Nigerian street food from verified vendors.</p>
            <div className="mt-6 max-w-2xl"><SearchBar /></div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/nearby"><Button>Use my location</Button></Link>
              <Link href="/vendor/onboarding"><Button variant="secondary">Become a vendor</Button></Link>
            </div>
          </div>
          <Card className="overflow-hidden bg-white/95 p-0 text-ink">
            <div className="relative aspect-square w-full bg-white">
              <Image
                src="/brand/akara-logo.png"
                alt="AkaraConnect marketplace logo showing akara, pap, local vendors, maps, orders, delivery, and trusted reviews"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="border-t border-slate-200 p-5">
              <h2 className="text-xl font-black">Nearby breakfast picks</h2>
            <div className="mt-4 grid gap-3">
              {demoVendors.slice(0, 2).map((vendor) => (
                <div className="rounded-card bg-slate-100 p-3" key={vendor.id}>
                  <p className="font-bold">{vendor.businessName}</p>
                  <p className="text-sm text-slate-600">{vendor.distance} - {vendor.categories?.join(", ")}</p>
                </div>
              ))}
            </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10">
        <CategoryChips />
        <div>
          <h2 className="text-2xl font-black">Featured vendors</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">{demoVendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)}</div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Search vendors", "Place your order", "Pickup or delivery"].map((step) => <Card key={step}><h3 className="font-bold">{step}</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Fast, clear, and mobile-first from discovery to review.</p></Card>)}
        </div>
        <Card className="grid gap-4 bg-primary text-white md:grid-cols-[1fr_auto] md:items-center">
          <div><h2 className="text-2xl font-black">Grow your food business online</h2><p className="mt-2 text-sky-100">Register, manage menus, receive orders, and track earnings.</p></div>
          <Link href="/vendor/onboarding"><Button variant="secondary">Start vendor onboarding</Button></Link>
        </Card>
      </section>
    </PublicLayout>
  );
}
