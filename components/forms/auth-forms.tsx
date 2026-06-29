import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginForm({ role = "Customer" }: { role?: "Customer" | "Vendor" | "Admin" }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <h1 className="text-2xl font-black">{role} login</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Securely access your AkaraConnect account.</p>
      <form className="mt-6 grid gap-4">
        <Input label="Email or phone" name="identifier" autoComplete="username" />
        <Input label="Password" name="password" type="password" autoComplete="current-password" />
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-4 grid gap-2">
        <Button variant="secondary">Continue with Google</Button>
        <Button variant="secondary">Login with phone OTP</Button>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-2 text-sm">
        <Link href="/forgot-password" className="text-primary">Forgot password?</Link>
        <Link href="/register" className="text-primary">Create account</Link>
      </div>
    </Card>
  );
}

export function RegisterForm({ vendor = false }: { vendor?: boolean }) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <h1 className="text-2xl font-black">{vendor ? "Register vendor business" : "Create customer account"}</h1>
      <form className="mt-6 grid gap-4 md:grid-cols-2">
        <Input label="Full name" name="name" />
        <Input label="Phone" name="phone" />
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />
        {vendor ? (
          <>
            <Input label="Business name" name="businessName" />
            <Input label="State" name="state" />
            <Input label="Local Government" name="localGovernment" />
            <Input label="Community" name="community" />
          </>
        ) : null}
        <Button className="md:col-span-2" type="submit">{vendor ? "Submit vendor registration" : "Create account"}</Button>
      </form>
    </Card>
  );
}
