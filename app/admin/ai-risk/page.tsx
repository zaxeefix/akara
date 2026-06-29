import { ComingSoon } from "@/components/shared/coming-soon";

export default function AdminAiRiskPage() {
  return (
    <ComingSoon
      eyebrow="AI risk review"
      title="Admin fraud risk scoring"
      description="Future fraud scoring will support admins with explainable signals, but final moderation decisions must remain human-reviewed."
      items={["Risk scoring", "Spam detection", "Fake review signals", "Human review queue"]}
    />
  );
}
