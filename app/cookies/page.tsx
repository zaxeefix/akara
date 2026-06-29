import { InfoPage } from "@/components/shared/info-page";

export default function CookiesPage() {
  return <InfoPage title="Cookie Notice" description="Cookie notice placeholder pending legal review." sections={[
    { title: "Essential cookies", body: "AkaraConnect may use essential cookies for session and security behavior." },
    { title: "Preferences", body: "Language and theme preferences may be stored locally to improve the experience." },
    { title: "Analytics", body: "Analytics cookies should not be enabled without appropriate notice and consent where required." }
  ]} />;
}
