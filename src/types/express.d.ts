import type { Role } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      requestId?: string;
      user?: {
        id: string;
        roles: Role[];
        email?: string | null;
        phone?: string | null;
      };
    }
  }
}

export {};
