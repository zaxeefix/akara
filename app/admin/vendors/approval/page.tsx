import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { demoVendors } from "@/lib/data";

export default function VendorApprovalPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Vendor approval</h1>{demoVendors.map((vendor) => <Card key={vendor.id}><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-bold">{vendor.businessName}</h2><p className="text-sm text-slate-600 dark:text-slate-300">{vendor.state}, {vendor.localGovernment}</p></div><StatusPill status="PENDING" /></div><div className="mt-4 flex gap-3"><Button>Approve</Button><Button variant="secondary">Request info</Button><Button variant="danger">Reject</Button></div></Card>)}</div>;
}
