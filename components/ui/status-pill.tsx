import { Badge } from "./badge";

export function StatusPill({ status }: { status: string }) {
  const normalized = status.toLowerCase();
  const tone = normalized.includes("approved") || normalized.includes("delivered") || normalized.includes("open")
    ? "success"
    : normalized.includes("pending") || normalized.includes("preparing")
      ? "warning"
      : normalized.includes("reject") || normalized.includes("cancel")
        ? "danger"
        : "neutral";
  return <Badge tone={tone}>{status.replaceAll("_", " ")}</Badge>;
}
