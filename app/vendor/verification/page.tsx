import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Button } from "@/components/ui/button";

export default function VendorVerificationPage() {
  return <Card><h1 className="text-3xl font-black">Verification</h1><div className="mt-3"><StatusPill status="Under review" /></div><p className="mt-3 text-slate-600 dark:text-slate-300">Your business details are ready for admin review. You will see approval, rejection, or more-information notifications here.</p><Button className="mt-4">Submit verification</Button></Card>;
}
