# Use Cases

## UC-001: Customer Registration

**Actor:** Customer

**Goal:** Create an account.

**Preconditions:** Customer is not logged in.

**Main Flow:**

1. Customer opens registration page.
2. Customer enters required details.
3. System validates inputs.
4. System creates customer account.
5. System sends verification where required.
6. Customer lands on customer home page.

**Alternative Flows:**

- Invalid input: system shows localized validation messages.
- Existing account: system prompts customer to log in.

**Postconditions:** Customer account exists.

## UC-002: Customer Login

**Actor:** Customer

**Goal:** Access customer account.

**Preconditions:** Customer has an account or valid Google/phone identity.

**Main Flow:**

1. Customer chooses email, Google, or phone login.
2. System verifies credentials or OAuth response.
3. System creates secure session.
4. Customer lands on customer dashboard.

**Alternative Flows:**

- Wrong credentials: system blocks login and may rate limit repeated attempts.
- OTP expired: system allows requesting a new OTP after cooldown.

**Postconditions:** Customer is authenticated.

## UC-003: Find Nearby Vendors

**Actor:** Customer

**Goal:** Discover nearby vendors.

**Preconditions:** Customer grants location permission or enters location manually.

**Main Flow:**

1. Customer opens nearby vendors page.
2. System requests geolocation or uses saved location.
3. System queries approved vendors within radius.
4. System displays vendors on a list and map.
5. Customer filters by food category, rating, open status, or distance.

**Alternative Flows:**

- Location denied: customer enters state, local government, or community manually.
- No vendors nearby: system expands search radius or suggests popular categories.

**Postconditions:** Customer sees relevant vendor options.

## UC-004: Place Order

**Actor:** Customer

**Goal:** Order food from a vendor.

**Preconditions:** Customer is logged in and vendor is approved and open for orders.

**Main Flow:**

1. Customer selects menu items.
2. Customer reviews cart.
3. Customer selects pickup or delivery option.
4. Customer selects payment method.
5. System validates order.
6. System creates order with pending status.
7. Vendor receives order notification.

**Alternative Flows:**

- Item unavailable: system asks customer to update cart.
- Vendor closed: system blocks immediate order or allows scheduled order if supported.
- Payment failed: order remains unpaid or cancelled according to payment policy.

**Postconditions:** Order exists and vendor can act on it.

## UC-005: Online Payment

**Actor:** Customer

**Goal:** Pay for an order.

**Preconditions:** Order exists and payment method is available.

**Main Flow:**

1. Customer selects payment provider or method.
2. System initializes payment.
3. Customer completes payment.
4. Payment provider sends callback or webhook.
5. System verifies payment.
6. System marks order as paid.

**Alternative Flows:**

- Payment cancelled: system returns customer to checkout.
- Payment webhook delayed: system keeps payment pending and retries verification.
- Payment mismatch: system flags transaction for review.

**Postconditions:** Payment status is recorded.

## UC-006: Vendor Registration and Approval

**Actor:** Vendor, Admin

**Goal:** Vendor joins marketplace.

**Preconditions:** Vendor is not yet approved.

**Main Flow:**

1. Vendor creates account.
2. Vendor submits business details, location data, hours, photos, and description.
3. System validates required information.
4. System marks vendor profile as pending approval.
5. Admin reviews submitted details.
6. Admin approves vendor.
7. Vendor profile becomes visible to customers.

**Alternative Flows:**

- Missing data: vendor is asked to complete profile.
- Suspicious data: admin requests more verification.
- Rejected vendor: vendor receives reason and may resubmit if allowed.

**Postconditions:** Vendor is approved, rejected, or pending more information.

## UC-007: Vendor Menu Management

**Actor:** Vendor

**Goal:** Manage available food items.

**Preconditions:** Vendor is authenticated and has vendor role.

**Main Flow:**

1. Vendor opens menu dashboard.
2. Vendor adds or edits food item details.
3. Vendor uploads food picture if available.
4. Vendor sets price and availability.
5. System saves menu item.
6. Customers see updated menu.

**Alternative Flows:**

- Upload fails: system keeps item draft and asks vendor to retry.
- Invalid price: system shows validation message.

**Postconditions:** Vendor menu is updated.

## UC-008: Vendor Order Management

**Actor:** Vendor

**Goal:** Process customer orders.

**Preconditions:** Vendor has received an order.

**Main Flow:**

1. Vendor receives notification.
2. Vendor views order details.
3. Vendor accepts or rejects order.
4. Vendor updates status as preparing, ready, completed, or cancelled.
5. Customer receives updates.

**Alternative Flows:**

- Vendor does not respond: system may auto-expire order based on policy.
- Vendor cancels after payment: refund workflow is triggered.

**Postconditions:** Order status is updated.

## UC-009: Admin Moderation

**Actor:** Admin

**Goal:** Keep platform safe and trustworthy.

**Preconditions:** Admin is authenticated with required permission.

**Main Flow:**

1. Admin opens moderation dashboard.
2. Admin reviews flagged vendor, review, order, or customer activity.
3. Admin takes action such as approve, reject, suspend, hide, or escalate.
4. System records audit log.
5. Affected user receives notification where appropriate.

**Alternative Flows:**

- Insufficient permission: system blocks action.
- Case needs investigation: admin marks it pending.

**Postconditions:** Moderation action is recorded.

## UC-010: Language Switching

**Actor:** Any user

**Goal:** Use preferred language.

**Preconditions:** Platform supports selected language.

**Main Flow:**

1. System detects browser language.
2. User may manually choose another language.
3. System stores preference.
4. Interface text updates using language files.

**Alternative Flows:**

- Unsupported browser language: system defaults to English.

**Postconditions:** User sees localized interface text.
