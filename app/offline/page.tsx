import { PublicLayout } from "@/components/layout/public-layout";
import { EmptyState } from "@/components/ui/states";

export default function OfflinePage() {
  return <PublicLayout><section className="mx-auto max-w-xl px-4 py-10"><EmptyState title="You are offline" description="Some AkaraConnect pages need a network connection. Saved pages and basic navigation remain available where supported." /></section></PublicLayout>;
}
