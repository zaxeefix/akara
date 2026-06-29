import Link from "next/link";
import { foodCategories } from "@/lib/data";

export function CategoryChips() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2" aria-label="Food categories">
      {foodCategories.map((category) => (
        <Link key={category} href={`/categories/${category.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-950">
          {category}
        </Link>
      ))}
    </div>
  );
}
