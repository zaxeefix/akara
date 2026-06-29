export function Tabs({ tabs, active }: { tabs: string[]; active: string }) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-card bg-slate-100 p-1 dark:bg-slate-900" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`min-h-10 whitespace-nowrap rounded-md px-3 text-sm font-semibold ${tab === active ? "bg-white text-primary shadow-sm dark:bg-slate-800" : "text-slate-600 dark:text-slate-300"}`}
          role="tab"
          aria-selected={tab === active}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
