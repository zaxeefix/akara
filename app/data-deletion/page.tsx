import { InfoPage } from "@/components/shared/info-page";

export default function DataDeletionPage() {
  return <InfoPage title="Data Deletion Request" description="Request account or personal data review." sections={[
    { title: "How to request", body: "Contact support with your account identifier and request type. Admins should verify identity before action." },
    { title: "Records that may be retained", body: "Orders, payments, audit logs, and security records may need retention for legal, safety, or operational reasons." },
    { title: "Legal review", body: "Final data deletion procedures should be reviewed before public launch." }
  ]} />;
}
