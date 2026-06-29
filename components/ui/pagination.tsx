import { Button } from "./button";

export function Pagination() {
  return (
    <nav className="flex items-center justify-between gap-3" aria-label="Pagination">
      <Button variant="secondary">Previous</Button>
      <span className="text-sm text-slate-600 dark:text-slate-300">Page 1 of 1</span>
      <Button variant="secondary">Next</Button>
    </nav>
  );
}
