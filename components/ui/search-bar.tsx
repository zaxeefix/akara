import { Button } from "./button";

export function SearchBar({ placeholder = "Search vendors, food, or location" }: { placeholder?: string }) {
  return (
    <form className="flex w-full flex-col gap-2 sm:flex-row" action="/marketplace" role="search">
      <label className="sr-only" htmlFor="search">Search</label>
      <div className="relative flex-1">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          id="search"
          name="keyword"
          className="min-h-12 w-full rounded-card border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-950 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder={placeholder}
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
