import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { demoMenu } from "@/lib/data";
import { WhatsappLink } from "@/components/shared/whatsapp-link";

export default function CartPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-5xl gap-4 px-4 py-6 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-3">
          <h1 className="text-3xl font-black">Cart</h1>
          {demoMenu.slice(0, 3).map((item) => <Card key={item.id}><div className="flex justify-between gap-3"><div><h2 className="font-bold">{item.name}</h2><p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p></div><p className="font-black">NGN {item.price}</p></div></Card>)}
        </div>
        <Card className="h-fit">
          <h2 className="text-xl font-bold">Order summary</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Subtotal: NGN 1,500</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Delivery: NGN 500</p>
          <p className="mt-3 text-2xl font-black">NGN 2,000</p>
          <div className="mt-4 grid gap-2">
            <Link href="/checkout"><Button className="w-full">Checkout</Button></Link>
            <WhatsappLink label="Send order on WhatsApp" message="Hello, I want to order Akara and Pap from AkaraConnect." />
          </div>
        </Card>
      </section>
    </PublicLayout>
  );
}
