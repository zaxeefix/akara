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
import { Select } from "@/components/ui/select";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (options: { client_id: string; callback: (response: { credential?: string }) => void }) => void;
          prompt: () => void;
        };
      };
    };
  }
}

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
  const [notice, setNotice] = useState("");
  const [otpPhone, setOtpPhone] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isOtpSubmitting, setIsOtpSubmitting] = useState(false);

  function completeLogin(response: AuthResponse) {
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
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const identifier = String(formData.get("identifier") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      const response = await authApi.login({ identifier, password }) as AuthResponse;
      completeLogin(response);
    } catch (loginError) {
      const message = loginError instanceof ApiClientError && loginError.status === 0
        ? loginError.message
        : loginError instanceof ApiClientError && loginError.status === 401
          ? "Invalid email, phone, or password."
          : loginError instanceof ApiClientError && loginError.status === 403
            ? "This account is not active."
            : loginError instanceof ApiClientError && loginError.status >= 500
              ? "The API returned a server error. Confirm the Neon tables exist and Render environment variables are set."
              : "Login failed. Check the details and try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setNotice("");
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    if (!clientId) {
      setError("Google login is not configured yet. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID in Vercel and GOOGLE_CLIENT_ID in Render.");
      return;
    }

    setIsGoogleLoading(true);
    try {
      await new Promise<void>((resolve, reject) => {
        if (window.google?.accounts?.id) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Google sign-in script failed to load."));
        document.head.appendChild(script);
      });

      window.google?.accounts.id.initialize({
        client_id: clientId,
        callback: async ({ credential }) => {
          if (!credential) {
            setError("Google login failed. Try again.");
            setIsGoogleLoading(false);
            return;
          }

          try {
            const response = await authApi.google({
              idToken: credential,
              role: role === "Vendor" ? "VENDOR" : "CUSTOMER",
              language: "en"
            }) as AuthResponse;
            completeLogin(response);
          } catch (googleError) {
            setError(googleError instanceof ApiClientError ? googleError.message : "Google login failed. Try again.");
          } finally {
            setIsGoogleLoading(false);
          }
        }
      });
      window.google?.accounts.id.prompt();
    } catch (googleError) {
      setError(googleError instanceof Error ? googleError.message : "Google login failed. Try again.");
      setIsGoogleLoading(false);
    }
  }

  async function handleOtpRequest() {
    setError("");
    setNotice("");
    const phone = otpPhone.trim();
    if (phone.length < 7) {
      setError("Enter a valid phone number before requesting OTP.");
      return;
    }

    setIsOtpSubmitting(true);
    try {
      const response = await authApi.requestOtp({ phone, purpose: "LOGIN" }) as { expiresIn: number; maskedPhone: string; devCode?: string };
      setOtpRequested(true);
      setNotice(response.devCode
        ? `Development OTP for ${response.maskedPhone}: ${response.devCode}`
        : `OTP sent to ${response.maskedPhone}. It expires in ${Math.floor(response.expiresIn / 60)} minutes.`);
    } catch (otpError) {
      setError(otpError instanceof ApiClientError ? otpError.message : "Could not send OTP. Try again.");
    } finally {
      setIsOtpSubmitting(false);
    }
  }

  async function handleOtpVerify() {
    setError("");
    setNotice("");
    setIsOtpSubmitting(true);
    try {
      const response = await authApi.verifyOtp({
        phone: otpPhone.trim(),
        code: otpCode.trim(),
        purpose: "LOGIN",
        role: role === "Vendor" ? "VENDOR" : "CUSTOMER",
        language: "en"
      }) as AuthResponse;
      completeLogin(response);
    } catch (otpError) {
      setError(otpError instanceof ApiClientError ? otpError.message : "OTP login failed. Try again.");
    } finally {
      setIsOtpSubmitting(false);
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
        <Button type="button" variant="secondary" disabled={isGoogleLoading} onClick={handleGoogleLogin}>
          {isGoogleLoading ? "Opening Google..." : "Continue with Google"}
        </Button>
        <div className="grid gap-2 rounded-card border border-slate-200 p-3 dark:border-slate-700">
          <Input label="Phone for OTP" name="otpPhone" value={otpPhone} onChange={(event) => setOtpPhone(event.target.value)} />
          {otpRequested ? (
            <Input label="OTP code" name="otpCode" inputMode="numeric" value={otpCode} onChange={(event) => setOtpCode(event.target.value)} />
          ) : null}
          <Button type="button" variant="secondary" disabled={isOtpSubmitting} onClick={otpRequested ? handleOtpVerify : handleOtpRequest}>
            {isOtpSubmitting ? "Please wait..." : otpRequested ? "Verify OTP" : "Login with phone OTP"}
          </Button>
        </div>
      </div>
      {notice ? <p className="mt-3 rounded-card border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-700" role="status">{notice}</p> : null}
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
    const language = String(formData.get("language") ?? "en");
    const role: Role = vendor ? "VENDOR" : "CUSTOMER";

    try {
      const response = await authApi.register({
        name,
        phone: phone || undefined,
        email: email || undefined,
        password,
        role,
        language
      }) as AuthResponse;

      saveSession({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        roles: response.user.roles
      });

      router.push(vendor ? "/vendor/dashboard" : "/profile");
      router.refresh();
    } catch (registerError) {
      const message = registerError instanceof ApiClientError && registerError.status === 0
        ? registerError.message
        : registerError instanceof ApiClientError && registerError.status === 409
          ? "An account already exists with this email or phone."
          : registerError instanceof ApiClientError && registerError.status === 400
            ? "Enter a valid name, email or phone, and password."
            : registerError instanceof ApiClientError && registerError.status >= 500
              ? "The API returned a server error. Confirm the Neon tables exist and Render environment variables are set."
              : "Account creation failed. Check the details and try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-2xl">
      <h1 className="text-2xl font-black">{vendor ? "Create vendor account" : "Create customer account"}</h1>
      {vendor ? (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          After creating your account, you will enter your private vendor dashboard and continue business onboarding from there.
        </p>
      ) : null}
      <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <Input label="Full name" name="name" autoComplete="name" required />
        <Input label="Phone" name="phone" />
        <Input label="Email" name="email" type="email" autoComplete="email" />
        <Input label="Password" name="password" type="password" autoComplete="new-password" minLength={8} required />
        <Select
          label="Preferred language"
          name="language"
          defaultValue="en"
          options={[
            { label: "English", value: "en" },
            { label: "Hausa", value: "ha" },
            { label: "Yoruba", value: "yo" },
            { label: "Igbo", value: "ig" },
            { label: "Tiv", value: "tiv" }
          ]}
        />
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
          {isSubmitting ? "Creating account..." : vendor ? "Create vendor account" : "Create account"}
        </Button>
      </form>
    </Card>
  );
}
