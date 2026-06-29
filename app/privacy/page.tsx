import { InfoPage } from "@/components/shared/info-page";

export default function PrivacyPage() {
  return <InfoPage title="Privacy Policy" description="Privacy policy placeholder pending legal review." sections={[
    { title: "Data collected", body: "The platform may collect account details, contact details, vendor business information, order information, payment references, location inputs, reviews, and support requests." },
    { title: "How data is used", body: "Data is used to operate accounts, connect customers and vendors, process orders, support payments, improve safety, and provide support." },
    { title: "Sensitive data", body: "Secrets, passwords, OTPs, and payment secret keys must never be stored or exposed in frontend code." }
  ]} />;
}
