type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
};

export function Table<T extends Record<string, unknown>>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div className="overflow-hidden rounded-card border border-slate-200 dark:border-slate-800">
      <table className="hidden w-full border-collapse text-left text-sm md:table">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
          <tr>
            {columns.map((column) => <th key={String(column.key)} className="px-4 py-3 font-semibold">{column.header}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {data.map((item, index) => (
            <tr key={index} className="bg-white dark:bg-slate-950">
              {columns.map((column) => <td key={String(column.key)} className="px-4 py-3">{column.render ? column.render(item) : String(item[column.key] ?? "")}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid gap-3 p-3 md:hidden">
        {data.map((item, index) => (
          <div key={index} className="rounded-card border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950">
            {columns.map((column) => (
              <div key={String(column.key)} className="flex justify-between gap-3 py-1 text-sm">
                <span className="font-semibold text-slate-600 dark:text-slate-300">{column.header}</span>
                <span className="text-right">{column.render ? column.render(item) : String(item[column.key] ?? "")}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
