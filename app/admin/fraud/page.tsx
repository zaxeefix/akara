import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

export default function FraudDetectionPage() {
  return <div className="grid gap-4"><h1 className="text-3xl font-black">Fraud detection</h1>{["Duplicate payment reference", "Suspicious review burst", "Repeated failed admin login"].map((item) => <Card key={item}><div className="flex justify-between gap-3"><p className="font-semibold">{item}</p><StatusPill status="HIGH" /></div></Card>)}</div>;
}
