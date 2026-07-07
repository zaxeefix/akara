import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BACKEND_API_URL = (
  process.env.AKARACONNECT_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://akara-api-beta.onrender.com/api"
    : "http://localhost:4000/api")
).replace(/\/$/, "");

type RouteContext = {
  params: {
    path?: string[];
  };
};

function forwardedHeaders(request: NextRequest) {
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  const accept = request.headers.get("accept");
  const authorization = request.headers.get("authorization");

  if (contentType) headers.set("content-type", contentType);
  if (accept) headers.set("accept", accept);
  if (authorization) headers.set("authorization", authorization);

  return headers;
}

async function proxyRequest(request: NextRequest, context: RouteContext) {
  const path = context.params.path?.join("/") ?? "";
  const targetUrl = new URL(`${BACKEND_API_URL}/${path}`);
  targetUrl.search = request.nextUrl.search;

  const hasBody = !["GET", "HEAD"].includes(request.method);

  try {
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: forwardedHeaders(request),
      body: hasBody ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      redirect: "manual"
    });

    const responseHeaders = new Headers(response.headers);
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    responseHeaders.delete("transfer-encoding");

    return new NextResponse(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "API_UNAVAILABLE",
          message: `Cannot reach AkaraConnect API at ${BACKEND_API_URL}.`,
          details: error instanceof Error ? error.message : "Unknown proxy error"
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
