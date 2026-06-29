import { ComingSoon } from "@/components/shared/coming-soon";

export default function VendorAiInsightsPage() {
  return (
    <ComingSoon
      eyebrow="AI insights"
      title="Vendor AI business assistant"
      description="Future AI tools will help vendors understand sales, busy hours, menu performance, and growth opportunities with privacy-aware insights."
      items={["Sales insights", "Busy hour prediction", "Menu suggestions", "Business assistant"]}
    />
  );
}
