import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = (
  process.env.AKARACONNECT_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://akara-api-beta.onrender.com/api"
    : "http://localhost:4000/api")
).replace(/\/$/, "");

const hopByHopHeaders = new Set([
  "accept-encoding",
  "connection",
  "content-encoding",
  "content-length",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade"
]);

type RouteContext = {
  params: {
    path?: string[];
  };
};

async function proxyRequest(request: NextRequest, context: RouteContext) {
  const path = context.params.path?.join("/") ?? "";
  const targetUrl = new URL(`${BACKEND_API_URL}/${path}`);
  targetUrl.search = request.nextUrl.search;

  const headers = new Headers(request.headers);
  hopByHopHeaders.forEach((header) => headers.delete(header));

  const hasBody = !["GET", "HEAD"].includes(request.method);

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers,
      body: hasBody ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      redirect: "manual"
    });

    const responseHeaders = new Headers(response.headers);
    hopByHopHeaders.forEach((header) => responseHeaders.delete(header));

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "API_UNAVAILABLE",
          message: `Cannot reach AkaraConnect API at ${BACKEND_API_URL}.`
        }
      },
      { status: 502 }
    );
  }
}

export {
  proxyRequest as DELETE,
  proxyRequest as GET,
  proxyRequest as HEAD,
  proxyRequest as OPTIONS,
  proxyRequest as PATCH,
  proxyRequest as POST,
  proxyRequest as PUT
};
