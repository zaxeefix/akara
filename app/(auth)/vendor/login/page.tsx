import { PublicLayout } from "@/components/layout/public-layout";
import { LoginForm } from "@/components/forms/auth-forms";

export default function VendorLoginPage() {
  return <PublicLayout><section className="px-4 py-10"><LoginForm role="Vendor" /></section></PublicLayout>;
}
