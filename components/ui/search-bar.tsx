import { Button } from "./button";

export function SearchBar({ placeholder = "Search vendors, food, or location" }: { placeholder?: string }) {
  return (
    <form className="flex w-full flex-col gap-2 sm:flex-row" action="/marketplace">
      <label className="sr-only" htmlFor="search">Search</label>
      <input
        id="search"
        name="keyword"
        className="min-h-11 flex-1 rounded-card border border-slate-300 bg-white px-4 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        placeholder={placeholder}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
