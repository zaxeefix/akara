import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { customerDashboardCards } from "@/lib/data";

export default function CustomerProfilePage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl font-black">Customer dashboard</h1>
            <Badge tone="info">Beta profile</Badge>
          </div>
          <form className="mt-5 grid gap-4 md:grid-cols-2">
            <Input label="Full name" name="name" />
            <Input label="Phone" name="phone" />
            <Input label="Email" name="email" type="email" />
            <Input label="Saved address" name="address" />
            <Input label="Preferred language" name="language" placeholder="English, Hausa, Yoruba, Igbo, or Tiv" />
            <Input label="Delivery note" name="deliveryNote" placeholder="Nearest landmark or pickup note" />
            <Button className="md:col-span-2">Save profile</Button>
          </form>
        </Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {customerDashboardCards.map(([title, description]) => (
            <Card key={title}>
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
