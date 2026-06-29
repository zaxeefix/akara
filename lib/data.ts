import type { DashboardMetric, MenuItem, Order, Vendor } from "@/types";

export const foodCategories = [
  "Akara",
  "Pap",
  "Bread",
  "Tea",
  "Moi Moi",
  "Masa",
  "Kunun",
  "Waina",
  "Yam and Egg",
  "Beans",
  "Rice",
  "Local Snacks"
];

export const demoVendors: Vendor[] = [
  {
    id: "amina-akara",
    businessName: "Amina's Akara Spot",
    ownerName: "Amina Yusuf",
    state: "Kaduna",
    localGovernment: "Kaduna North",
    community: "Central Market",
    description: "Fresh Akara, Pap, and breakfast combos served early every morning.",
    status: "Approved",
    rating: 4.8,
    distance: "1.2 km",
    categories: ["Akara", "Pap", "Bread"]
  },
  {
    id: "mama-titi",
    businessName: "Mama Titi Pap & Moi Moi",
    ownerName: "Titi Adeyemi",
    state: "Lagos",
    localGovernment: "Surulere",
    community: "Aguda",
    description: "Soft Moi Moi, hot Pap, and tea for busy morning buyers.",
    status: "Open",
    rating: 4.6,
    distance: "2.4 km",
    categories: ["Pap", "Moi Moi", "Tea"]
  },
  {
    id: "kano-masa",
    businessName: "Kano Masa Corner",
    ownerName: "Sani Musa",
    state: "Kano",
    localGovernment: "Fagge",
    community: "Sabon Gari",
    description: "Masa, Waina, Kunun, and northern breakfast favorites.",
    status: "Open",
    rating: 4.7,
    distance: "3.1 km",
    categories: ["Masa", "Waina", "Kunun"]
  }
];

export const demoMenu: MenuItem[] = [
  { id: "1", name: "Akara Portion", category: "Akara", price: 500, description: "Crisp bean cakes with pepper sauce.", isAvailable: true },
  { id: "2", name: "Pap Cup", category: "Pap", price: 300, description: "Warm Ogi/Akamu served fresh.", isAvailable: true },
  { id: "3", name: "Moi Moi Wrap", category: "Moi Moi", price: 700, description: "Steamed bean pudding with egg option.", isAvailable: true },
  { id: "4", name: "Bread and Tea", category: "Tea", price: 900, description: "Morning combo for pickup.", isAvailable: true }
];

export const customerOrders: Order[] = [
  { id: "ord-1001", orderNumber: "AKC-1001", vendorName: "Amina's Akara Spot", status: "PREPARING", total: 1800, createdAt: "Today" },
  { id: "ord-1000", orderNumber: "AKC-1000", vendorName: "Mama Titi Pap & Moi Moi", status: "DELIVERED", total: 2400, createdAt: "Yesterday" }
];

export const vendorMetrics: DashboardMetric[] = [
  { label: "Total orders", value: "1,248", helper: "+12% this month" },
  { label: "Pending orders", value: "18", helper: "Needs attention" },
  { label: "Completed orders", value: "1,103", helper: "88% completion" },
  { label: "Today's earnings", value: "NGN 84,500", helper: "From 42 orders" },
  { label: "Monthly earnings", value: "NGN 1.8M", helper: "Net estimate" },
  { label: "Menu items", value: "36", helper: "31 available" },
  { label: "Customer reviews", value: "4.7", helper: "Average rating" },
  { label: "Business status", value: "Open", helper: "Approved vendor" }
];

export const adminMetrics: DashboardMetric[] = [
  { label: "Total customers", value: "284,920", helper: "Across Nigeria" },
  { label: "Total vendors", value: "12,640", helper: "8,912 active" },
  { label: "Pending approvals", value: "314", helper: "Vendor queue" },
  { label: "Total orders", value: "1.4M", helper: "All time" },
  { label: "Revenue", value: "NGN 94.2M", helper: "Platform volume" },
  { label: "Fraud reports", value: "26", helper: "Open cases" },
  { label: "Active vendors", value: "8,912", helper: "Currently live" },
  { label: "Security alerts", value: "7", helper: "Review today" }
];
