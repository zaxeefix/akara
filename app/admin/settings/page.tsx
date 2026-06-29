import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  return <Card><h1 className="text-3xl font-black">Admin settings</h1><form className="mt-5 grid gap-4 md:grid-cols-2"><Input label="Platform name" name="name" defaultValue="AkaraConnect" /><Input label="Support email" name="support" /><Button className="md:col-span-2">Save settings</Button></form></Card>;
}
