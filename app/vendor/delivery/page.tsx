import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DeliverySettingsPage() {
  return <Card><h1 className="text-3xl font-black">Delivery settings</h1><form className="mt-5 grid gap-4 md:grid-cols-2"><Input label="Delivery radius km" name="radius" type="number" /><Input label="Base delivery fee" name="fee" type="number" /><Button className="md:col-span-2">Save delivery settings</Button></form></Card>;
}
