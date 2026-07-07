import { Button } from "./button";

export function SearchBar({ placeholder = "Search vendors, food, or location" }: { placeholder?: string }) {
  return (
    <form className="grid w-full gap-2 rounded-card bg-white/10 p-2 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_auto]" action="/marketplace" role="search">
      <label className="sr-only" htmlFor="food-search">Search by food name</label>
      <div className="relative">
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
          id="food-search"
          name="food"
          className="min-h-12 w-full rounded-card border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-950 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder={placeholder === "Search vendors, food, or location" ? "Food name" : placeholder}
        />
      </div>
      <label className="sr-only" htmlFor="location-search">Search by location</label>
      <input
        id="location-search"
        name="location"
        className="min-h-12 w-full rounded-card border border-slate-300 bg-white px-4 py-3 text-slate-950 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        placeholder="Location"
      />
      <label className="sr-only" htmlFor="vendor-search">Search by vendor</label>
      <input
        id="vendor-search"
        name="vendor"
        className="min-h-12 w-full rounded-card border border-slate-300 bg-white px-4 py-3 text-slate-950 shadow-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        placeholder="Vendor name"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
