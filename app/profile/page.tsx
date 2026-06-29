import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CustomerProfilePage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-3xl px-4 py-6">
        <Card>
          <h1 className="text-3xl font-black">Customer profile</h1>
          <form className="mt-5 grid gap-4 md:grid-cols-2">
            <Input label="Full name" name="name" />
            <Input label="Phone" name="phone" />
            <Input label="Email" name="email" type="email" />
            <Input label="Saved address" name="address" />
            <Button className="md:col-span-2">Save profile</Button>
          </form>
        </Card>
      </section>
    </PublicLayout>
  );
}
