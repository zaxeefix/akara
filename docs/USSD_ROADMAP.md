# USSD Roadmap

USSD support is a future feature for customers and vendors with limited internet access.

## Customer Menu Example

```text
*123#
1. Find food vendors
2. Place simple order
3. Check order status
4. Wallet balance
5. Help
```

## Vendor Menu Example

```text
*123*2#
1. View new orders
2. Accept order
3. Mark ready
4. Confirm cash payment
5. Today's sales
```

## Future Features

- Search nearby vendors by location code.
- Place simple order.
- Check order status.
- Vendor order notification.
- Wallet balance.
- Cash on delivery confirmation.

## API Endpoints Needed

- `POST /api/ussd/session`
- `POST /api/ussd/customer/order`
- `GET /api/ussd/orders/:code`
- `POST /api/ussd/vendor/order-status`
- `GET /api/ussd/wallet`

## Security Concerns

- Short sessions.
- PIN for wallet or sensitive actions.
- No full card/payment secrets through USSD.
- Rate limiting per phone number.
- Audit cash payment confirmations.

## Telco Integration Notes

- USSD aggregator required.
- Session timeout rules vary by provider.
- Menus must be short.
- Localization should support simple text in major Nigerian languages.
