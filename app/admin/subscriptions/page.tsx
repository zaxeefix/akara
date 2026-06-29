import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SubscriptionPlansPage() {
  return <Card><h1 className="text-3xl font-black">Subscription plans</h1><p className="mt-2 text-slate-600 dark:text-slate-300">Manage premium vendor plans.</p><Button className="mt-4">Add plan</Button></Card>;
}
