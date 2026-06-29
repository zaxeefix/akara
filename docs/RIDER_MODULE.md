# Rider Module

## Future Rider Features

- Rider registration.
- Rider verification.
- Rider dashboard.
- Accept delivery.
- Track delivery.
- Update delivery status.
- Earnings.
- Delivery history.
- Ratings.
- Admin rider approval.

## Database Model Plan

Future models:

- `RiderProfile`
- `RiderVerification`
- `DeliveryAssignment`
- `RiderEarning`
- `RiderRating`
- `RiderLocationPing`

## API Plan

- `POST /api/riders/register`
- `GET /api/riders/me`
- `POST /api/riders/verification`
- `GET /api/riders/deliveries/available`
- `POST /api/riders/deliveries/:id/accept`
- `PATCH /api/riders/deliveries/:id/status`
- `GET /api/riders/earnings`
- `GET /api/admin/riders/pending`
- `PATCH /api/admin/riders/:id/approve`

## Safety and Privacy

- Location sharing must be explicit.
- Customers should see only delivery-relevant rider details.
- Admin approval required before rider activation.
- Delivery disputes should keep audit logs.
