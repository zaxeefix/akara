# Main User Flows

## Customer Onboarding Flow

1. User opens AkaraConnect.
2. User chooses register, Google login, or phone login.
3. User completes verification if required.
4. System creates customer profile.
5. User selects preferred language or accepts detected language.
6. User optionally grants location permission.
7. User lands on customer home with nearby vendors and categories.

## Customer Vendor Discovery Flow

1. Customer opens search or nearby vendors.
2. Customer enters food, vendor name, or location.
3. System displays list and map results.
4. Customer filters by category, distance, rating, open status, or favorites.
5. Customer opens vendor profile.
6. Customer reviews menu, photos, location, reviews, and contact options.
7. Customer starts order, calls vendor, chats vendor, saves favorite, or opens navigation.

## Customer Order Flow

1. Customer opens vendor profile.
2. Customer selects menu items.
3. Customer reviews cart.
4. Customer chooses pickup or delivery option.
5. Customer chooses payment method.
6. Customer confirms order.
7. System creates order.
8. Vendor receives notification.
9. Customer tracks order status.
10. Customer completes order.
11. Customer leaves review.

## Payment Flow

1. Customer chooses payment method.
2. System initializes transaction with selected provider.
3. Customer completes payment or selects offline payment option.
4. Provider returns payment result.
5. System verifies transaction.
6. Order payment status updates.
7. Customer and vendor receive notification.

## Vendor Registration Flow

1. Vendor opens vendor registration.
2. Vendor creates account or logs in.
3. Vendor enters business name, owner name, phone, WhatsApp, and email.
4. Vendor enters state, local government, ward, community, street, and house number.
5. Vendor provides GPS coordinates or selects Google Maps location.
6. Vendor sets opening and closing hours.
7. Vendor uploads business logo and cover photo.
8. Vendor writes business description.
9. System validates required fields.
10. Vendor submits application.
11. Admin reviews application.
12. Vendor receives approval, rejection, or request for more information.

## Vendor Daily Operations Flow

1. Vendor logs in.
2. Vendor checks dashboard for new orders and notifications.
3. Vendor updates menu availability and prices.
4. Vendor accepts or rejects incoming orders.
5. Vendor updates order status.
6. Vendor reviews earnings and sales analytics.
7. Vendor responds to customer messages where supported.

## Admin Vendor Approval Flow

1. Admin logs in with secure authentication.
2. Admin opens vendor approval queue.
3. Admin reviews business details, photos, location, and contact information.
4. Admin checks risk indicators.
5. Admin approves, rejects, suspends, or requests more information.
6. System records audit log.
7. Vendor receives notification.

## Admin Moderation Flow

1. Admin opens moderation dashboard.
2. Admin reviews flagged reviews, users, vendors, orders, or reports.
3. Admin inspects details and platform history.
4. Admin takes moderation action.
5. System records audit log and security event where required.
6. Affected parties receive appropriate notifications.

## Localization Flow

1. System detects browser language.
2. System checks supported language list.
3. If supported, system loads matching language file.
4. If unsupported, system loads English.
5. User can manually switch language.
6. System stores preference.
7. Interface updates using translation keys.

## Future Rider Delivery Flow

1. Rider receives available delivery request.
2. Rider accepts delivery.
3. Rider navigates to vendor.
4. Rider picks up order.
5. Rider navigates to customer.
6. Rider marks delivery completed.
7. System updates order and rider earnings.
