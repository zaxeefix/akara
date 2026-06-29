import { PublicLayout } from "@/components/layout/public-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";

export default function ReviewsPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-2xl px-4 py-6">
        <Card>
          <h1 className="text-3xl font-black">Leave a review</h1>
          <form className="mt-5 grid gap-4">
            <label className="grid gap-2 text-sm font-semibold">Rating<input className="min-h-11 rounded-card border px-3" type="number" min="1" max="5" defaultValue="5" /></label>
            <Textarea label="Comment" name="comment" />
            <Button type="submit">Submit review</Button>
          </form>
        </Card>
      </section>
    </PublicLayout>
  );
}
