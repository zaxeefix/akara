import { InfoPage } from "@/components/shared/info-page";

export default function SafetyTrustPage() {
  return <InfoPage title="Safety and Trust" description="How AkaraConnect protects marketplace trust during beta." sections={[
    { title: "Vendor review", body: "Pilot vendors go through admin approval before appearing as approved businesses." },
    { title: "Audit logs", body: "Sensitive admin actions should be auditable, including approvals, rejections, suspensions, and moderation." },
    { title: "Human review", body: "Fraud, finance, and suspension decisions should involve human review, especially where AI signals are used in the future." }
  ]} />;
}
