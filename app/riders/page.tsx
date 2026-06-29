import { PublicLayout } from "@/components/layout/public-layout";
import { ComingSoon } from "@/components/shared/coming-soon";

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
      </section>
    </PublicLayout>
  );
}
