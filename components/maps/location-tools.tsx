import { Card } from "@/components/ui/card";

export function LocationTools() {
  return (
    <Card>
      <h3 className="font-bold">Location tools</h3>
      <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
        <p>Distance: 1.2 km</p>
        <p>Estimated delivery time: 18-25 minutes</p>
        <p>Location permission fallback: enter state, LGA, or community manually.</p>
      </div>
    </Card>
  );
}
