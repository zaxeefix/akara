import { PublicLayout } from "@/components/layout/public-layout";
import { VendorBusinessForm, FoodItemForm } from "@/components/forms/vendor-forms";
import { VendorOnboardingSteps } from "@/components/vendor/onboarding-steps";

export default function VendorOnboardingPage() {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10">
        <VendorOnboardingSteps />
        <VendorBusinessForm />
        <FoodItemForm mode="Add" />
      </section>
    </PublicLayout>
  );
}
