import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { PaymentPanel } from "@/components/forms/payment-panel";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[1fr_420px]">
        <Card>
          <h1 className="text-3xl font-black">Checkout</h1>
          <form className="mt-5 grid gap-4">
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="text-sm font-bold">Fulfillment</legend>
              <label className="rounded-card border border-slate-300 p-3"><input type="radio" name="fulfillment" defaultChecked /> Pickup</label>
              <label className="rounded-card border border-slate-300 p-3"><input type="radio" name="fulfillment" /> Delivery</label>
            </fieldset>
            <Input label="Delivery address" name="address" />
            <Textarea label="Order note" name="note" />
            <Link href="/orders/confirmation"><Button type="button">Place order</Button></Link>
          </form>
        </Card>
        <PaymentPanel />
      </section>
    </PublicLayout>
  );
}
