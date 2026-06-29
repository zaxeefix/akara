import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  return <PublicLayout><section className="mx-auto max-w-md px-4 py-10"><Card><h1 className="text-2xl font-black">Logout</h1><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">End your AkaraConnect session on this device.</p><Button className="mt-4">Logout</Button></Card></section></PublicLayout>;
}
