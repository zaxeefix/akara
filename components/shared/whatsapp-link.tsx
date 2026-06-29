import { Button } from "@/components/ui/button";

type WhatsappLinkProps = {
  phone?: string;
  message: string;
  label: string;
};

export function WhatsappLink({ phone, message, label }: WhatsappLinkProps) {
  const normalizedPhone = phone?.replace(/[^0-9]/g, "") || "";
  const href = normalizedPhone
    ? `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="secondary">{label}</Button>
    </a>
  );
}
