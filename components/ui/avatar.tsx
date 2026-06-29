import Image from "next/image";

export function Avatar({ name, src }: { name: string; src?: string }) {
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className="grid size-11 place-items-center overflow-hidden rounded-full bg-primary text-sm font-black text-white" aria-label={`${name} avatar`}>
      {src ? <Image src={src} alt="" width={44} height={44} className="size-full object-cover" /> : initials}
    </div>
  );
}
