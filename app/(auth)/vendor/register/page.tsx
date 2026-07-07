import { PublicLayout } from "@/components/layout/public-layout";
import { RegisterForm } from "@/components/forms/auth-forms";

export default function VendorRegisterPage() {
  return (
    <PublicLayout>
      <section className="px-4 py-10">
        <RegisterForm vendor />
      </section>
    </PublicLayout>
  );
}
