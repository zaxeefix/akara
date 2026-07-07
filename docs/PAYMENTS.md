# Payments

AkaraConnect v1.0 beta keeps Paystack as the primary online payment path and prepares clean architecture for other payment methods.

## Beta Methods

| Method | Status |
| --- | --- |
| Paystack | Primary beta provider. Backend-only secret key. |
| Cash on delivery | Supported as a beta order/payment method. |
| Bank transfer | Planned structure. Requires reconciliation workflow. |
| Flutterwave | Future provider structure. |
| Wallet | Future customer/vendor balance architecture. |

## Security Rules

- Payment secret keys must stay in Render/backend environment variables.
- Frontend may only use public keys where provider SDKs require them.
- Webhooks must be verified on the backend before marking payment successful.
- Payment references should be unique and traceable.
- Refunds and disputes should be admin-reviewed in beta.

## Vendor Settlement Architecture

Future settlement should include:

- Vendor balance.
- Transaction history.
- Withdrawal requests.
- Settlement history.
- Commission engine.
- Automatic settlement only after reconciliation and fraud checks.

## Beta Limitations

- Do not enable live payments until provider keys, webhooks, and reconciliation are tested.
- Wallet balances should remain placeholders until ledger and settlement rules are complete.
