import { ComingSoon } from "@/components/shared/coming-soon";

export default function VendorFinancePage() {
  return (
    <ComingSoon
      eyebrow="Financial inclusion"
      title="Business loans and micro-insurance"
      description="Future finance modules will require partner integrations, consent, human review, and compliance checks before launch."
      items={["Business score", "Loan eligibility", "Micro-insurance", "Repayment tracking"]}
    />
  );
}
