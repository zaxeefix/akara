import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAdminDashboard = pathname.startsWith("/admin/") && pathname !== "/admin/login";
  const isVendorDashboard = pathname.startsWith("/vendor/") && pathname !== "/vendor/login" && pathname !== "/vendor/onboarding";
  const isDashboard = isAdminDashboard || isVendorDashboard;
  if (!isDashboard) return NextResponse.next();

  const hasSession = request.cookies.has("akaraconnect_session");
  if (hasSession) return NextResponse.next();

  const loginPath = pathname.startsWith("/admin") ? "/admin/login" : "/vendor/login";
  return NextResponse.redirect(new URL(loginPath, request.url));
}

export const config = {
  matcher: ["/admin/:path*", "/vendor/:path*"]
};
