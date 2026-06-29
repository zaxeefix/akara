import { apiRequest } from "./client";

export const authApi = {
  register: (body: unknown) => apiRequest("/auth/register", { method: "POST", body: JSON.stringify(body) }),
  login: (body: unknown) => apiRequest("/auth/login", { method: "POST", body: JSON.stringify(body) }),
  me: (token: string) => apiRequest("/auth/me", { token })
};

export const customerApi = {
  profile: (token: string) => apiRequest("/customers/me", { token }),
  favorites: (token: string) => apiRequest("/customers/favorites", { token })
};

export const vendorApi = {
  list: () => apiRequest("/vendors"),
  nearby: (query: string) => apiRequest(`/vendors/nearby?${query}`),
  details: (id: string) => apiRequest(`/vendors/${id}`),
  register: (token: string, body: unknown) => apiRequest("/vendors/register", { method: "POST", token, body: JSON.stringify(body) })
};

export const menuApi = {
  categories: () => apiRequest("/categories"),
  create: (token: string, body: unknown) => apiRequest("/vendors/menu", { method: "POST", token, body: JSON.stringify(body) })
};

export const orderApi = {
  create: (token: string, body: unknown) => apiRequest("/orders", { method: "POST", token, body: JSON.stringify(body) }),
  mine: (token: string) => apiRequest("/orders/my-orders", { token })
};

export const paymentApi = {
  initialize: (token: string, body: unknown) => apiRequest("/payments/initialize", { method: "POST", token, body: JSON.stringify(body) }),
  verify: (token: string, body: unknown) => apiRequest("/payments/verify", { method: "POST", token, body: JSON.stringify(body) })
};

export const reviewApi = {
  create: (token: string, body: unknown) => apiRequest("/reviews", { method: "POST", token, body: JSON.stringify(body) }),
  vendor: (vendorId: string) => apiRequest(`/vendors/${vendorId}/reviews`)
};

export const notificationApi = {
  list: (token: string) => apiRequest("/notifications", { token }),
  readAll: (token: string) => apiRequest("/notifications/read-all", { method: "PATCH", token })
};

export const adminApi = {
  dashboard: (token: string) => apiRequest("/admin/dashboard", { token }),
  pendingVendors: (token: string) => apiRequest("/admin/vendors/pending", { token })
};

export const searchApi = {
  vendors: (query: string) => apiRequest(`/search/vendors?${query}`)
};

export const mapsApi = {
  directionsUrl: (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
};
