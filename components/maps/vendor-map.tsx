import { Button } from "@/components/ui/button";

export function VendorMap({ label = "Vendor map" }: { label?: string }) {
  return (
    <section className="grid min-h-80 place-items-center rounded-card border border-slate-200 bg-slate-100 p-4 text-center dark:border-slate-800 dark:bg-slate-900" aria-label={label}>
      <div>
        <p className="font-bold">Interactive map area</p>
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">Google Maps loads here when `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is configured. Vendor list and address remain available if location permission is denied.</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"><Button className="mt-4" variant="secondary">Open in Google Maps</Button></a>
      </div>
    </section>
  );
}
