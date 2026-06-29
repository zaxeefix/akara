import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";

export default function VendorOrderDetailsPage({ params }: { params: { id: string } }) {
  return <Card><h1 className="text-3xl font-black">Order {params.id}</h1><div className="mt-3"><StatusPill status="PREPARING" /></div><div className="mt-5 flex flex-wrap gap-3"><Button>Accept</Button><Button variant="secondary">Mark ready</Button><Button variant="danger">Reject</Button></div></Card>;
}
