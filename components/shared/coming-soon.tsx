import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ComingSoonProps = {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
};

export function ComingSoon({ title, eyebrow, description, items }: ComingSoonProps) {
  return (
    <section className="grid gap-4">
      <Card className="bg-gradient-to-br from-white to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <Badge tone="info">{eyebrow}</Badge>
        <h1 className="mt-4 text-3xl font-black">{title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item}>
            <h2 className="font-bold">{item}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Coming soon. This module is planned, documented, and intentionally inactive until production-ready.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
