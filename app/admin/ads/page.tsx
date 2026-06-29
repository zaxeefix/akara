import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdvertisementsPage() {
  return <Card><h1 className="text-3xl font-black">Advertisements</h1><p className="mt-2 text-slate-600 dark:text-slate-300">Manage vendor promotion placements.</p><Button className="mt-4">Create ad slot</Button></Card>;
}
