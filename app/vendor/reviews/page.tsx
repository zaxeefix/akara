import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

export default function VendorReviewsPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Customer reviews</h1>{["Great Akara", "Fast pickup", "Fresh Pap"].map((review) => <Card key={review}><div className="flex justify-between gap-3"><p className="font-semibold">{review}</p><StatusPill status="APPROVED" /></div></Card>)}</div>;
}
