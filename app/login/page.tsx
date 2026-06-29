import { PublicLayout } from "@/components/layout/public-layout";
import { LoginForm } from "@/components/forms/auth-forms";

export default function LoginPage() {
  return <PublicLayout><section className="px-4 py-10"><LoginForm /></section></PublicLayout>;
}
