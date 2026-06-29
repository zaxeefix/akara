import type { Request } from "express";
import { prisma } from "../prisma/client";

export const auditLog = async (req: Request, action: string, targetType: string, targetId?: string, metadata?: unknown) => {
  await prisma.auditLog.create({
    data: {
      actorUserId: req.user?.id,
      action,
      targetType,
      targetId,
      metadata: metadata === undefined ? undefined : JSON.parse(JSON.stringify(metadata)),
      ipAddress: req.ip,
      userAgent: req.header("user-agent")
    }
  });
};

export const securityLog = async (req: Request, event: string, severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" = "LOW", metadata?: unknown) => {
  await prisma.securityLog.create({
    data: {
      userId: req.user?.id,
      event,
      severity,
      metadata: metadata === undefined ? undefined : JSON.parse(JSON.stringify(metadata)),
      ipAddress: req.ip,
      userAgent: req.header("user-agent")
    }
  });
};
