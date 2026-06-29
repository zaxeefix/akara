import { PublicLayout } from "@/components/layout/public-layout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return <PublicLayout><section className="mx-auto max-w-md px-4 py-10"><Card><h1 className="text-2xl font-black">Forgot password</h1><form className="mt-5 grid gap-4"><Input label="Email or phone" name="identifier" /><Button>Send reset link</Button></form></Card></section></PublicLayout>;
}
