import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/utils/password";

const prisma = new PrismaClient();

const categories = [
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

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

async function main() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Refusing to seed production data.");
  }

  const passwordHash = await hashPassword(process.env.SEED_PASSWORD ?? "ChangeMe123!");

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.test" },
    update: {},
    create: {
      name: "Demo Admin",
      email: "admin@example.test",
      passwordHash,
      roles: ["ADMIN", "SUPER_ADMIN"],
      language: "en"
    }
  });

  const customer = await prisma.user.upsert({
    where: { email: "customer@example.test" },
    update: {},
    create: {
      name: "Demo Customer",
      email: "customer@example.test",
      phone: "+2348000000001",
      passwordHash,
      roles: ["CUSTOMER"],
      language: "en",
      customerProfile: { create: { firstName: "Demo", lastName: "Customer" } }
    }
  });

  const vendorUser = await prisma.user.upsert({
    where: { email: "vendor@example.test" },
    update: {},
    create: {
      name: "Demo Vendor Owner",
      email: "vendor@example.test",
      phone: "+2348000000002",
      passwordHash,
      roles: ["VENDOR"],
      language: "en"
    }
  });

  const createdCategories = await Promise.all(
    categories.map((name) =>
      prisma.foodCategory.upsert({
        where: { slug: slugify(name) },
        update: {},
        create: { name, slug: slugify(name), description: `${name} vendors and menu items` }
      })
    )
  );

  const vendor = await prisma.vendor.upsert({
    where: { userId: vendorUser.id },
    update: {},
    create: {
      userId: vendorUser.id,
      businessName: "Amina's Akara Spot",
      ownerName: "Amina Demo",
      phone: "+2348000000002",
      whatsapp: "+2348000000002",
      email: "vendor@example.test",
      state: "Kaduna",
      localGovernment: "Kaduna North",
      community: "Central Market",
      street: "Demo Street",
      houseNumber: "12",
      latitude: 10.5105,
      longitude: 7.4165,
      googleMapsLocation: "https://maps.google.com",
      openingHours: "06:00",
      closingHours: "12:00",
      description: "Demo vendor for Akara and Pap.",
      status: "APPROVED",
      approvedAt: new Date()
    }
  });

  const akara = createdCategories.find((category) => category.slug === "akara")!;
  const pap = createdCategories.find((category) => category.slug === "pap")!;

  const akaraItem = await prisma.menuItem.create({
    data: {
        vendorId: vendor.id,
        categoryId: akara.id,
        name: "Akara Portion",
        description: "Freshly fried bean cakes.",
        price: 500
      }
  });

  await prisma.menuItem.createMany({
    data: [
      {
        vendorId: vendor.id,
        categoryId: pap.id,
        name: "Pap Cup",
        description: "Warm pap for breakfast.",
        price: 300
      }
    ],
    skipDuplicates: true
  });

  const order = await prisma.order.create({
    data: {
      orderNumber: `DEMO-AKC-${Date.now()}`,
      customerId: customer.id,
      vendorId: vendor.id,
      status: "DELIVERED",
      deliveryType: "PICKUP",
      subtotal: 1000,
      deliveryFee: 0,
      total: 1000,
      customerNote: "Demo beta order.",
      items: {
        create: [
          {
            menuItemId: akaraItem.id,
            name: akaraItem.name,
            quantity: 2,
            unitPrice: akaraItem.price,
            total: 1000
          }
        ]
      }
    }
  });

  await prisma.payment.create({
    data: {
      userId: customer.id,
      orderId: order.id,
      method: "CASH_ON_DELIVERY",
      status: "SUCCESSFUL",
      amount: 1000,
      providerReference: `DEMO-PAY-${Date.now()}`
    }
  });

  await prisma.review.create({
    data: {
      userId: customer.id,
      vendorId: vendor.id,
      orderId: order.id,
      rating: 5,
      comment: "Demo review for beta testing.",
      status: "APPROVED"
    }
  });

  await prisma.notification.create({
    data: {
      userId: customer.id,
      type: "ORDER",
      titleKey: "notifications.orderDelivered.title",
      bodyKey: "notifications.orderDelivered.body",
      metadata: { orderNumber: order.orderNumber, demo: true }
    }
  });

  console.log(`Seed complete. Demo admin: ${admin.email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
