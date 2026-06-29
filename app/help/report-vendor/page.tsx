import { InfoPage } from "@/components/shared/info-page";

export default function ReportVendorPage() {
  return <InfoPage title="Report a vendor" description="How beta users can report safety or trust concerns." sections={[
    { title: "What to include", body: "Include vendor name, order number, date, and a clear description of the issue." },
    { title: "Admin review", body: "Admins review reports and may request more information before taking action." },
    { title: "Urgent safety", body: "For urgent safety concerns, use local emergency or consumer protection channels as appropriate." }
  ]} />;
}
