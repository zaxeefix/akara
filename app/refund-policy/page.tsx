import { InfoPage } from "@/components/shared/info-page";

export default function RefundPolicyPage() {
  return <InfoPage title="Refund Policy" description="Refund policy placeholder pending payment and legal review." sections={[
    { title: "Failed payments", body: "Failed or duplicate payments should be verified through the backend payment provider flow." },
    { title: "Cancelled orders", body: "Refund eligibility depends on order status, vendor acceptance, preparation state, and payment provider rules." },
    { title: "Review required", body: "This policy must be finalized before live payment launch." }
  ]} />;
}
