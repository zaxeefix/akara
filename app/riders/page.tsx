import { PublicLayout } from "@/components/layout/public-layout";
import { ComingSoon } from "@/components/shared/coming-soon";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { riderBetaCards } from "@/lib/data";

export default function RidersPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <ComingSoon
          eyebrow="Delivery expansion"
          title="Rider module"
          description="AkaraConnect is preparing a future rider experience for verified delivery partners, delivery tracking, and rider earnings."
          items={["Rider registration", "Delivery assignment", "Live delivery status", "Rider earnings"]}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {riderBetaCards.map(([title, description]) => (
            <Card key={title}>
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-bold">{title}</h2>
                <Badge tone="warning">Future</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
