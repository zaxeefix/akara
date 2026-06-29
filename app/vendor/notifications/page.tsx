import { Card } from "@/components/ui/card";

export default function VendorNotificationsPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Vendor notifications</h1>{["New order received", "Review posted", "Verification approved"].map((item) => <Card key={item}><p className="font-semibold">{item}</p></Card>)}</div>;
}
