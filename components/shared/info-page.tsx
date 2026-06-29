import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";

type InfoPageProps = {
  title: string;
  description: string;
  sections: Array<{ title: string; body: string }>;
};

export function InfoPage({ title, description, sections }: InfoPageProps) {
  return (
    <PublicLayout>
      <section className="mx-auto grid max-w-4xl gap-4 px-4 py-8">
        <Card>
          <p className="text-sm font-semibold text-primary">AkaraConnect Beta</p>
          <h1 className="mt-2 text-3xl font-black">{title}</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
        </Card>
        {sections.map((section) => (
          <Card key={section.title}>
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.body}</p>
          </Card>
        ))}
      </section>
    </PublicLayout>
  );
}
