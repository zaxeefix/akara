import { z } from "zod";

export const vendorRegisterSchema = z.object({
  businessName: z.string().min(2).max(160),
  ownerName: z.string().min(2).max(120),
  phone: z.string().min(7).max(20),
  whatsapp: z.string().min(7).max(20).optional(),
  email: z.string().email().optional(),
  state: z.string().min(2).max(80),
  localGovernment: z.string().min(2).max(120),
  ward: z.string().max(120).optional(),
  community: z.string().max(120).optional(),
  street: z.string().max(160).optional(),
  houseNumber: z.string().max(80).optional(),
  latitude: z.coerce.number().min(-90).max(90).optional(),
  longitude: z.coerce.number().min(-180).max(180).optional(),
  googleMapsLocation: z.string().url().optional(),
  openingHours: z.string().max(40).optional(),
  closingHours: z.string().max(40).optional(),
  businessLogo: z.string().url().optional(),
  coverPhoto: z.string().url().optional(),
  description: z.string().max(1000).optional()
});

export const vendorUpdateSchema = vendorRegisterSchema.partial();

export const vendorVerificationSchema = z.object({
  documentType: z.string().max(80).optional(),
  documentUrl: z.string().url().optional(),
  notes: z.string().max(500).optional()
});

export const nearbyVendorQuerySchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  radius: z.coerce.number().positive().max(100).default(10)
});
