import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ContactSupportPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-2xl px-4 py-8">
        <Card>
          <h1 className="text-3xl font-black">Contact support</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This beta support form is a safe placeholder until support ticket submission is connected to the backend.</p>
          <form className="mt-5 grid gap-4">
            <Select label="I am a" name="role" options={["Customer", "Vendor", "Admin", "Contributor"].map((item) => ({ label: item, value: item }))} />
            <Input label="Email or phone" name="contact" />
            <Input label="Order or vendor reference" name="reference" />
            <Textarea label="How can we help?" name="message" />
            <Button type="submit">Prepare support request</Button>
          </form>
        </Card>
      </section>
    </PublicLayout>
  );
}
