import Image from "next/image";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-mist px-4 text-ink dark:bg-ink dark:text-white">
      <div className="grid place-items-center gap-4 text-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <Image
            src="/brand/akara-logo.png"
            alt="AkaraConnect loading"
            width={80}
            height={80}
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
            priority
          />
        </div>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Loading AkaraConnect...</p>
      </div>
    </div>
  );
}
