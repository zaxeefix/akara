"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ApiClientError } from "@/lib/api/client";
import { authApi } from "@/lib/api";
import { saveSession } from "@/lib/auth/session";
import type { Role } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type LoginRole = "Customer" | "Vendor" | "Admin";

type AuthResponse = {
  user: {
    roles: Role[];
  };
  accessToken: string;
  refreshToken?: string;
};

const loginTargets: Record<LoginRole, { allowedRoles: Role[]; redirectTo: string }> = {
  Customer: { allowedRoles: ["CUSTOMER"], redirectTo: "/profile" },
  Vendor: { allowedRoles: ["VENDOR"], redirectTo: "/vendor/dashboard" },
  Admin: { allowedRoles: ["ADMIN", "SUPER_ADMIN"], redirectTo: "/admin/dashboard" }
};

export function LoginForm({ role = "Customer" }: { role?: "Customer" | "Vendor" | "Admin" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const identifier = String(formData.get("identifier") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const response = await authApi.login({ identifier, password }) as AuthResponse;
      const target = loginTargets[role];
      const hasAllowedRole = response.user.roles.some((userRole) => target.allowedRoles.includes(userRole));

      if (!hasAllowedRole) {
        setError(`This account does not have ${role.toLowerCase()} access.`);
        return;
      }

      saveSession({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        roles: response.user.roles
      });
      router.push(target.redirectTo);
      router.refresh();
    } catch (loginError) {
      const message = loginError instanceof ApiClientError && loginError.status === 401
        ? "Invalid email, phone, or password."
        : loginError instanceof ApiClientError && loginError.status === 403
          ? "This account is not active."
          : "Login failed. Check that the API is running and try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <h1 className="text-2xl font-black">{role} login</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Securely access your AkaraConnect account.</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <Input label="Email or phone" name="identifier" autoComplete="username" required />
        <Input label="Password" name="password" type="password" autoComplete="current-password" required />
        {error ? <p className="rounded-card border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700" role="alert">{error}</p> : null}
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Login"}</Button>
      </form>
      <div className="mt-4 grid gap-2">
        <Button type="button" variant="secondary">Continue with Google</Button>
        <Button type="button" variant="secondary">Login with phone OTP</Button>
      </div>
      <div className="mt-4 flex flex-wrap justify-between gap-2 text-sm">
        <Link href="/forgot-password" className="text-primary">Forgot password?</Link>
        <Link href="/register" className="text-primary">Create account</Link>
      </div>
    </Card>
  );
}

export function RegisterForm({ vendor = false }: { vendor?: boolean }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const role: Role = vendor ? "VENDOR" : "CUSTOMER";

    try {
      const response = await authApi.register({
        name,
        phone: phone || undefined,
        email: email || undefined,
        password,
        role,
        language: "en"
      }) as AuthResponse;

      saveSession({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        roles: response.user.roles
      });

      router.push(vendor ? "/vendor/onboarding" : "/profile");
      router.refresh();
    } catch (registerError) {
      const message = registerError instanceof ApiClientError && registerError.status === 409
        ? "An account already exists with this email or phone."
        : registerError instanceof ApiClientError && registerError.status === 400
          ? "Enter a valid name, email or phone, and password."
          : "Account creation failed. Check that the API is running and try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <h1 className="text-2xl font-black">{vendor ? "Register vendor business" : "Create customer account"}</h1>
      <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <Input label="Full name" name="name" autoComplete="name" required />
        <Input label="Phone" name="phone" />
        <Input label="Email" name="email" type="email" autoComplete="email" />
        <Input label="Password" name="password" type="password" autoComplete="new-password" minLength={8} required />
        {vendor ? (
          <>
            <Input label="Business name" name="businessName" />
            <Input label="State" name="state" />
            <Input label="Local Government" name="localGovernment" />
            <Input label="Community" name="community" />
          </>
        ) : null}
        {error ? <p className="rounded-card border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 md:col-span-2" role="alert">{error}</p> : null}
        <Button className="md:col-span-2" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : vendor ? "Submit vendor registration" : "Create account"}
        </Button>
      </form>
    </Card>
  );
}
