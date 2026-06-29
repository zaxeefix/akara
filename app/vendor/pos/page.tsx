import { ComingSoon } from "@/components/shared/coming-soon";

export default function VendorPosPage() {
  return (
    <ComingSoon
      eyebrow="POS"
      title="Vendor point of sale"
      description="A simple POS module is planned for walk-in sales, daily sales summaries, and offline-friendly vendor operations."
      items={["Walk-in sales", "Daily summary", "Receipt-ready records", "Expense tracking"]}
    />
  );
}
