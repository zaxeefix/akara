import { InfoPage } from "@/components/shared/info-page";

export default function CustomerSafetyPage() {
  return <InfoPage title="Customer Safety Policy" description="Safety guidance for marketplace users." sections={[
    { title: "Verified vendors", body: "Customers should prefer approved vendors with complete profiles, clear locations, and reviews." },
    { title: "Payments", body: "Use official AkaraConnect payment flows where available. Do not share payment secrets or card details in chat." },
    { title: "Reports", body: "Report suspicious vendors, unsafe behavior, or fake listings through support or reporting flows." }
  ]} />;
}
