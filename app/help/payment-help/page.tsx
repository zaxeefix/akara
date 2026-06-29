import { InfoPage } from "@/components/shared/info-page";

export default function PaymentHelpPage() {
  return <InfoPage title="Payment help" description="Payment guidance for beta users." sections={[
    { title: "Online payments", body: "Paystack is the first planned provider. Backend verification is required before an order is marked paid." },
    { title: "Cash on delivery", body: "Cash on delivery may be available where vendors support it. Confirmation must be recorded safely." },
    { title: "Failed payments", body: "If payment fails, retry only from the official checkout flow or contact support." }
  ]} />;
}
