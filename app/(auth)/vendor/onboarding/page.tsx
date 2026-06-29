import { PublicLayout } from "@/components/layout/public-layout";
import { RegisterForm } from "@/components/forms/auth-forms";
import { VendorOnboardingSteps } from "@/components/vendor/onboarding-steps";

export default function VendorOnboardingPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <VendorOnboardingSteps />
        <RegisterForm vendor />
      </section>
    </PublicLayout>
  );
}
