# Main User Flows

## Customer Registration

1. Customer opens Register.
2. Customer selects Customer account.
3. Customer enters name, email or phone, and password where applicable.
4. Customer accepts terms.
5. System validates fields.
6. System creates account.
7. Customer verifies email or phone if required.
8. Customer selects language or accepts browser-detected language.
9. Customer lands on marketplace home.

## Customer Login

1. Customer opens Login.
2. Customer enters email or phone and password.
3. System validates credentials.
4. System checks account status.
5. System starts secure session.
6. Customer lands on previous page or marketplace home.

## Google Login

1. User selects Continue with Google.
2. Google OAuth opens.
3. User grants required profile access.
4. System receives OAuth response.
5. System creates or links user account.
6. System applies default customer role unless another approved role exists.
7. User lands on marketplace home.

## Phone OTP Login

1. User enters phone number.
2. System validates number format.
3. System sends OTP.
4. User enters OTP.
5. System verifies code and rate limits attempts.
6. System creates or resumes session.
7. User lands on marketplace home or onboarding continuation.

## Finding Nearby Vendors

1. Customer opens Nearby.
2. System asks for location permission if needed.
3. Customer grants location or enters location manually.
4. System loads nearby approved vendors.
5. Customer sees map and vendor list.
6. Customer filters by category, distance, rating, and open status.
7. Customer opens vendor details.

## Searching by Location or Category

1. Customer opens Search.
2. Customer types food, vendor name, community, state, or local government.
3. Customer selects category chip if desired.
4. System displays results with filter controls.
5. Customer sorts by distance, rating, open status, or popularity.
6. Customer opens a vendor or food category page.

## Viewing Vendor Profile

1. Customer opens vendor card.
2. Vendor profile displays name, verification, rating, distance, hours, cover photo, location, and menu.
3. Customer reviews menu, images, reviews, and contact options.
4. Customer can call, chat, navigate, favorite, or add items to cart.

## Placing an Order

1. Customer selects menu items.
2. Customer reviews quantities and notes.
3. Customer opens cart.
4. Customer confirms vendor, items, totals, and availability.
5. Customer proceeds to checkout.

## Choosing Pickup or Delivery

1. Customer reaches checkout.
2. System shows available fulfillment options.
3. Customer chooses pickup or delivery.
4. If pickup, system shows vendor address and map navigation.
5. If delivery, customer enters or selects address.
6. System updates fees, time estimates, and instructions.

## Making Payment

1. Customer selects payment method.
2. System displays total and payment summary.
3. Customer confirms payment.
4. For online payment, system initializes provider checkout.
5. Provider returns result.
6. System verifies transaction.
7. Customer sees payment success, pending, failed, or offline payment status.

## Tracking Order

1. Customer opens order tracking.
2. System shows order timeline.
3. Customer sees status: pending, accepted, preparing, ready, completed, cancelled, or refunded.
4. Customer receives notifications for updates.
5. Customer can contact vendor from tracking screen.

## Chatting with Vendor

1. Customer opens Chat from vendor profile or order.
2. System verifies customer has active or previous relationship with vendor if required.
3. Customer sends message.
4. Vendor receives notification.
5. Conversation remains linked to vendor or order.

## Calling Vendor

1. Customer taps Call.
2. System displays confirmation with vendor name and phone number.
3. Customer confirms.
4. Device starts phone call.
5. System may log call intent for analytics, not call contents.

## Leaving Review

1. Customer opens completed order.
2. Customer selects rating.
3. Customer writes optional comment.
4. System validates review.
5. Review is published or queued for moderation based on policy.
6. Vendor rating updates.

## Saving Favorite Vendor

1. Customer taps favorite icon on vendor card or profile.
2. System saves vendor to favorites.
3. Icon changes state.
4. Customer can remove favorite from profile or favorites page.

## Vendor Registration

1. Vendor opens Become a vendor.
2. Vendor creates account or logs in.
3. Vendor enters business and owner details.
4. Vendor enters phone, WhatsApp, and email.
5. Vendor enters state, local government, ward, community, street, and house number.
6. Vendor adds GPS coordinates or selects Google Maps location.
7. Vendor sets opening and closing hours.
8. Vendor uploads logo and cover photo.
9. Vendor adds business description.
10. Vendor reviews and submits.

## Vendor Verification

1. Vendor submits registration.
2. System marks profile as pending review.
3. Vendor sees verification status screen.
4. Admin reviews submission.
5. Vendor receives approval, rejection, or more-information request.
6. Vendor updates missing information if needed.

## Admin Vendor Approval

1. Admin opens vendor approval queue.
2. Admin reviews vendor profile, contact, photos, location, and risk indicators.
3. Admin opens map preview and supporting details.
4. Admin approves, rejects, suspends, or requests more information.
5. System records audit log.
6. Vendor receives notification.

## Vendor Managing Menu

1. Vendor opens Menu.
2. Vendor views active and inactive items.
3. Vendor adds or edits food item.
4. Vendor sets category, price, description, picture, and availability.
5. System validates and saves.
6. Customer-facing menu updates.

## Vendor Receiving Order

1. Customer places order.
2. Vendor receives alert.
3. Vendor opens order details.
4. Vendor accepts or rejects.
5. Customer receives update.

## Vendor Updating Order Status

1. Vendor opens active order.
2. Vendor selects next status.
3. System confirms valid transition.
4. Order timeline updates.
5. Customer receives notification.

## Admin Fraud Review

1. Admin opens Fraud Detection.
2. Admin reviews flagged user, vendor, payment, order, or review.
3. Admin checks evidence and history.
4. Admin takes action: clear, monitor, restrict, suspend, escalate, or request verification.
5. System records audit log and notifies affected users where appropriate.
