# Text-Based Wireframes

These wireframes describe structure only. They are not production code.

## Public and Customer Screens

### Landing Page

```text
[Header: Logo | Search | Categories | Become a vendor | Language | Login]

[Hero]
  H1: AkaraConnect
  Supporting copy
  [Search food or vendor input]
  [Use my location button] [Browse vendors button]

[Category chips: Akara | Pap | Bread | Tea | Moi Moi | Masa | More]

[Nearby vendors preview]
  [Vendor card] [Vendor card] [Vendor card]

[How it works: Find | Order | Pickup/Delivery | Review]

[Vendor CTA band]

[Footer]
```

### Vendor Marketplace Page

```text
[Header with search, location, cart, profile]
[Filter row: Category | Distance | Rating | Open now | Sort]

[Main]
  [Left: Vendor list]
    [Vendor card with image, name, verified badge, rating, distance, open status]
    [Vendor card]
  [Right desktop: Map preview]

[Mobile bottom nav]
```

### Nearby Vendors Page

```text
[Header: Back | Nearby vendors | Location button]
[Map panel]
  [Vendor pins]
  [Current location marker]

[Bottom sheet / List]
  [Filter chips]
  [Vendor card]
  [Vendor card]

[Mobile bottom nav]
```

### Vendor Profile Page

```text
[Cover photo]
[Header: Back | Favorite | Share]

[Vendor info]
  Logo
  Name + verified badge
  Rating | Distance | Open status
  Address summary
  [Call] [Chat] [Navigate]

[Tabs: Menu | Reviews | About]

[Menu]
  [Category section]
    [Menu item card: image, name, description, price, add button]

[Sticky cart bar when items selected]
```

### Food Category Page

```text
[Header: Category name | Search]
[Category description]
[Filter chips: Nearby | Open now | Top rated | Price]

[Vendor/menu results grid]
  [Vendor card]
  [Food item card]

[Mobile bottom nav]
```

### Cart Page

```text
[Header: Cart]
[Vendor summary]
[Cart item row: item, quantity stepper, price, remove]
[Order notes]
[Price summary]
[Checkout button]
[Suggested items]
```

### Checkout Page

```text
[Header: Checkout]

[Section: Fulfillment]
  [Pickup option] [Delivery option]

[Section: Address or pickup details]
[Section: Payment method]
[Section: Order summary]
[Place order / Pay button]
```

### Order Tracking Page

```text
[Header: Order #]
[Status badge]
[Timeline]
  Pending
  Accepted
  Preparing
  Ready
  Completed

[Vendor contact card]
  [Call] [Chat] [Navigate]

[Order summary]
```

### Review Page

```text
[Header: Leave a review]
[Vendor summary]
[Rating selector]
[Comment field]
[Photo upload optional future]
[Submit review button]
```

### Customer Profile Page

```text
[Header: Profile]
[Avatar | Name | Phone/email]
[Quick actions: Orders | Favorites | Notifications]

[Settings list]
  Personal information
  Saved addresses
  Payment methods
  Language
  Theme
  Security
  Help
  Logout
```

### Login Page

```text
[Logo]
[Title: Welcome back]
[Email/phone field]
[Password field]
[Login button]
[Continue with Google]
[Continue with phone OTP]
[Forgot password]
[Create account link]
[Language switcher]
```

### Register Page

```text
[Logo]
[Title: Create account]
[Account type: Customer | Vendor]
[Name]
[Email]
[Phone]
[Password]
[Terms checkbox]
[Create account button]
[Continue with Google]
[Language switcher]
```

### Language Switcher Screen

```text
[Header: Language]
[Description]
[Radio list]
  English
  Hausa
  Yoruba
  Igbo
  Tiv
[Apply button]
```

## Vendor Screens

### Vendor Onboarding Page

```text
[Header: AkaraConnect Vendor]
[Progress stepper]

[Step content]
  Business identity fields
  Contact fields
  Location fields
  Hours fields
  Photos
  Description

[Save draft] [Continue]
```

### Vendor Verification Page

```text
[Header: Verification status]
[Status card: Pending / Approved / More info / Rejected]
[Checklist of submitted details]
[Admin message if any]
[Edit submission button]
```

### Vendor Dashboard

```text
[Sidebar desktop / Bottom nav mobile]
[Top bar: Notifications | Profile]

[Metric cards: Today's orders | Sales | Pending orders | Rating]
[Active orders list]
[Menu availability shortcuts]
[Recent reviews]
```

### Menu Management Page

```text
[Header: Menu]
[Add food item button]
[Search and filters]
[Category tabs]
[Menu item cards/table]
  Image | Name | Price | Availability | Edit
```

### Add Food Item Page

```text
[Header: Add food item]
[Image upload]
[Name]
[Category]
[Description]
[Price]
[Availability toggle]
[Save button]
```

### Orders Page

```text
[Header: Orders]
[Status tabs: New | Preparing | Ready | Completed | Cancelled]
[Order cards/table]
  Order ID | Customer | Items | Total | Status | Action
```

### Earnings Page

```text
[Header: Earnings]
[Balance card]
[Metrics: Today | Week | Month]
[Chart]
[Transaction list]
```

### Reviews Page

```text
[Header: Reviews]
[Rating summary]
[Filter chips]
[Review cards]
  Customer | Rating | Comment | Order | Date
```

### Vendor Settings Page

```text
[Header: Settings]
[Sections]
  Business settings
  Delivery settings
  Notifications
  Language
  Theme
  Security
  Logout
```

## Admin Screens

### Admin Login

```text
[Admin logo/title]
[Email]
[Password]
[2FA code when required]
[Login button]
[Security notice]
```

### Admin Dashboard

```text
[Sidebar]
[Top bar: Search | Alerts | Admin profile]
[Metric cards: Vendors pending | Orders | Revenue | Fraud alerts]
[Approval queue]
[Fraud alerts]
[Recent payments]
[Security events]
```

### Vendor Approval Page

```text
[Header: Vendor approvals]
[Filters: Pending | More info | Rejected | Approved]
[Vendor application table/cards]
[Detail panel]
  Business info
  Location map
  Photos
  Contact
  Risk indicators
  [Approve] [Request info] [Reject]
```

### Customer Management Page

```text
[Header: Customers]
[Search and filters]
[Customer table/cards]
[Customer detail drawer]
```

### Vendor Management Page

```text
[Header: Vendors]
[Search and filters]
[Vendor table/cards]
[Actions: View | Suspend | Verify | Message]
```

### Fraud Detection Page

```text
[Header: Fraud detection]
[Risk summary cards]
[Flagged activity queue]
[Evidence panel]
[Action buttons]
```

### Analytics Page

```text
[Header: Analytics]
[Date filter]
[Metric cards]
[Charts]
[Top categories]
[Top locations]
```

### Payment Management Page

```text
[Header: Payments]
[Provider/status filters]
[Payment table/cards]
[Transaction detail drawer]
[Reconciliation actions]
```

### Security Logs Page

```text
[Header: Security logs]
[Filters: Actor | Action | Date | Severity]
[Log table/cards]
[Detail drawer]
```

### Localization Management Page

```text
[Header: Localization]
[Language tabs]
[Translation key search]
[Missing translations list]
[Export/import controls future]
```

### Settings Page

```text
[Header: Platform settings]
[Settings groups]
  General
  Payments
  Maps
  Security
  Notifications
  Categories
  Admin roles
```
