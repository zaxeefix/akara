import { ComingSoon } from "@/components/shared/coming-soon";

export default function AdminWhatsappBotPage() {
  return (
    <ComingSoon
      eyebrow="WhatsApp"
      title="WhatsApp Business bot"
      description="WhatsApp bot support will be introduced only after official Business API credentials, templates, and webhook security are ready."
      items={["Order summary messages", "Vendor contact", "Bot templates", "Webhook review"]}
    />
  );
}
