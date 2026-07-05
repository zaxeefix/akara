type ApiOptions = RequestInit & {
  token?: string;
};

export const API_URL = "/api";

export class ApiClientError extends Error {
  status: number;
  payload: unknown;

  constructor(status: number, message: string, payload: unknown) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

export async function apiRequest<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (options.token) headers.set("Authorization", `Bearer ${options.token}`);

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
      cache: "no-store"
    });
  } catch (error) {
    throw new ApiClientError(
      0,
      "Cannot reach AkaraConnect API. Check the frontend deployment, API proxy, and Render service status.",
      error
    );
  }

  const payload = await response.json().catch(() => null) as { data?: T; error?: { message?: string } } | null;
  if (!response.ok) {
    throw new ApiClientError(response.status, payload?.error?.message ?? "Request failed", payload);
  }
  return payload?.data as T;
}
