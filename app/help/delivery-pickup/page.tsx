import { InfoPage } from "@/components/shared/info-page";

export default function DeliveryPickupPage() {
  return <InfoPage title="Delivery and pickup" description="Pickup and delivery guidance." sections={[
    { title: "Pickup", body: "Use the vendor address and Google Maps directions link to reach the vendor." },
    { title: "Delivery", body: "Delivery availability depends on vendor settings and future rider expansion." },
    { title: "Location fallback", body: "If geolocation is denied, enter your state, LGA, or community manually." }
  ]} />;
}
