export type Role = "CUSTOMER" | "VENDOR" | "ADMIN" | "SUPER_ADMIN" | "RIDER";

export type FutureRole = "VENDOR_STAFF" | "SUPPORT_MODERATOR";

export type VendorStaffRole = "MANAGER" | "CASHIER" | "KITCHEN_STAFF" | "DELIVERY_ASSISTANT";

export type Permission =
  | "orders:read"
  | "orders:update"
  | "menu:manage"
  | "business:manage"
  | "analytics:read"
  | "wallet:read"
  | "reviews:moderate"
  | "vendors:approve"
  | "users:manage"
  | "settings:manage";

export type Vendor = {
  id: string;
  businessName: string;
  ownerName?: string;
  state: string;
  localGovernment: string;
  community?: string;
  description?: string;
  status?: string;
  rating?: number;
  distance?: string;
  coverPhoto?: string;
  businessLogo?: string;
  categories?: string[];
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  imageUrl?: string;
  isAvailable?: boolean;
};

export type Order = {
  id: string;
  orderNumber: string;
  vendorName: string;
  status: string;
  total: number;
  createdAt: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  helper?: string;
};
