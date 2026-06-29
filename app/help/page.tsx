import Link from "next/link";
import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const helpLinks = [
  ["Customer FAQ", "/help/customer-faq"],
  ["Vendor FAQ", "/help/vendor-faq"],
  ["How to order", "/help/how-to-order"],
  ["Become a vendor", "/help/become-a-vendor"],
  ["Payment help", "/help/payment-help"],
  ["Delivery and pickup", "/help/delivery-pickup"],
  ["Report a vendor", "/help/report-vendor"],
  ["Safety and trust", "/safety"]
];

export default function HelpCenterPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-8">
        <Card>
          <h1 className="text-3xl font-black">Help Center</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Find answers for ordering, vendor onboarding, payments, pickup, delivery, and safety during the AkaraConnect beta.</p>
        </Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {helpLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              <Card className="h-full transition hover:border-primary">
                <h2 className="font-bold">{label}</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Open guide</p>
              </Card>
            </Link>
          ))}
        </div>
        <Card>
          <h2 className="text-xl font-bold">Contact support</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">For beta support, describe the issue, order number if available, and your role as customer, vendor, or admin.</p>
          <Link href="/support/contact"><Button className="mt-4">Contact support</Button></Link>
        </Card>
      </section>
    </PublicLayout>
  );
}
