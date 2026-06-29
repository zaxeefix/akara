import { InfoPage } from "@/components/shared/info-page";

export default function CustomerFaqPage() {
  return <InfoPage title="Customer FAQ" description="Common beta questions for customers." sections={[
    { title: "How do I find vendors?", body: "Use marketplace search, category pages, or nearby vendors. If location access is denied, search by state, LGA, or community." },
    { title: "Can I pay online?", body: "The beta payment structure is Paystack-ready. Only complete live payment tests when production keys are configured on the backend." },
    { title: "How do I report a vendor?", body: "Use the report flow or contact support with the vendor name, order details, and what happened." }
  ]} />;
}
