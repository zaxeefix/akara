# WhatsApp Ordering

## Goals

- Let customers contact vendors on WhatsApp.
- Let customers send a pre-filled order summary.
- Let vendors receive customer order context.
- Prepare for future WhatsApp Business API and bot flows.

## Frontend Behavior

Buttons:

- WhatsApp vendor contact.
- WhatsApp order summary.

External links must use:

```tsx
target="_blank"
rel="noopener noreferrer"
```

## Pre-Filled Message Example

```text
Hello, I want to order from AkaraConnect:
- Akara Portion x2
- Pap Cup x1
Pickup or delivery: Pickup
```

## Future Backend Architecture

Future endpoints:

- `POST /api/whatsapp/order-message`
- `POST /api/whatsapp/webhook`
- `GET /api/admin/whatsapp/settings`

## WhatsApp Business API

Secrets must remain backend-only:

- Access token.
- Webhook verify token.
- Business account ID.

## Admin Requirements

- Configure WhatsApp support status.
- Review bot failures.
- Manage template approval.
- Monitor spam and abuse.

## Security

- Do not expose WhatsApp Business API credentials.
- Avoid sending sensitive payment information in chat.
- Keep official order/payment state in AkaraConnect backend.
