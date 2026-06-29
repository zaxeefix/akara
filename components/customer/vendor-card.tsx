import Link from "next/link";
import type { Vendor } from "@/types";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <Card className="grid gap-3">
      <div className="h-32 rounded-card bg-gradient-to-br from-primary to-slate-950" role="img" aria-label={`${vendor.businessName} cover`} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold">{vendor.businessName}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{vendor.community}, {vendor.state}</p>
        </div>
        <StatusPill status={vendor.status ?? "Open"} />
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{vendor.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
        <span>{vendor.rating ?? 4.5} rating</span>
        <span>{vendor.distance ?? "Nearby"}</span>
        {vendor.categories?.slice(0, 3).map((category) => <span key={category}>{category}</span>)}
      </div>
      <Link href={`/vendors/${vendor.id}`}><Button className="w-full">View vendor</Button></Link>
    </Card>
  );
}
