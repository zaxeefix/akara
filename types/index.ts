export type Role = "CUSTOMER" | "VENDOR" | "ADMIN" | "SUPER_ADMIN" | "RIDER";

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
