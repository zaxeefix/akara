# High-Fidelity Screen Descriptions

These descriptions define final visual intent in a Figma-style planning format. They are not production code.

## Shared Visual Language

### Layout

- Use a mobile-first responsive grid.
- Page backgrounds use soft neutral surfaces.
- Main content is constrained on large screens for readability.
- Cards use 8px radius, thin borders, and light shadows only when elevated.
- Primary actions use blue buttons with clear labels and icons where helpful.

### Header

- Public and customer headers include logo, search, location, cart, notifications, language, and profile.
- Vendor headers prioritize notifications, current verification state, and profile.
- Admin headers include global search, alerts, and admin profile.

### Navigation

- Customers use top header plus mobile bottom navigation.
- Vendors use desktop sidebar and mobile bottom navigation.
- Admins use desktop sidebar and mobile drawer.

### Mobile Behavior

- Content stacks in a single column.
- Filters open in bottom sheets.
- Map/list views use a toggle or draggable sheet.
- Tables become cards.
- Primary action buttons remain sticky when the task benefits from it.

## Public and Customer Screens

### Landing Page

Layout:

- Full-width top header.
- First viewport shows a strong food-marketplace search experience, not a marketing-only hero.
- Hero includes large AkaraConnect title, short value statement, search input, location action, and category chips.
- A nearby vendors preview appears before the fold where possible.

Header:

- Left logo.
- Center search on desktop.
- Right navigation: categories, become a vendor, language, login/register.
- Mobile header: logo, language icon, menu icon.

Main content:

- Hero search block.
- Popular categories.
- Nearby vendors preview.
- How it works.
- Vendor signup callout.

Cards:

- Vendor cards show cover image, logo, name, verified badge, rating, distance, open status, and top categories.

Buttons:

- Primary: Search nearby.
- Secondary: Become a vendor.
- Icon: location, search, language.

Mobile behavior:

- Search is full-width.
- Category chips scroll horizontally but page itself does not.
- Vendor cards stack.

Empty state:

- If location is unavailable, show manual location entry.

Loading state:

- Skeleton vendor cards and search placeholder.

Error state:

- Location denied message with manual search option.

### Vendor Marketplace Page

Layout:

- Two-column desktop layout: vendor results and map.
- Single-column mobile layout with map/list toggle.

Header:

- Search input, location selector, cart, notifications, profile.

Main content:

- Filter bar.
- Vendor list.
- Map panel pinned on desktop.

Cards:

- Vendor card with photo, badges, rating, distance, hours, and quick actions.

Maps section:

- Map has vendor pins, current location, zoom controls, and selected vendor preview.
- Provide list fallback if map fails.

Mobile behavior:

- Filters open in bottom sheet.
- Map uses fixed-height panel and collapsible vendor list.

### Nearby Vendors Page

Layout:

- Map-first screen with vendor list sheet.

Main content:

- Current location banner.
- Category filters.
- Map with pins.
- Vendor cards in bottom sheet.

Empty state:

- No nearby vendors: suggest expanding radius or choosing another area.

Loading state:

- Map skeleton and vendor card placeholders.

Error state:

- Location permission denied: show manual location form.

### Vendor Profile Page

Layout:

- Cover image at top.
- Vendor identity block overlaps slightly below cover.
- Tabs for Menu, Reviews, and About.
- Sticky cart bar when cart has items.

Header:

- Transparent over cover on mobile, solid after scroll.
- Back, favorite, share.

Main content:

- Vendor logo, name, verified badge, rating, open status, distance, address.
- Call, chat, and navigate buttons.
- Menu grouped by category.

Cards:

- Menu item cards include image, name, description, price, availability, and add button.

Mobile behavior:

- Action buttons become equal-width row.
- Menu items stack.

Empty state:

- No menu items available: show vendor contact options.

### Food Category Page

Layout:

- Category title and description.
- Filter chips.
- Results grid/list.

Main content:

- Top vendors for category.
- Popular items.
- Nearby availability.

Mobile behavior:

- Cards stack with compact images.

### Cart Page

Layout:

- Cart items left and order summary right on desktop.
- Single-column on mobile.

Main content:

- Vendor summary.
- Cart items with quantity controls.
- Notes field.
- Price summary.

Buttons:

- Primary checkout button.
- Secondary continue shopping.

Empty state:

- Empty cart with Browse vendors action.

### Checkout Page

Layout:

- Step-based checkout.
- Desktop shows checkout form and summary side-by-side.
- Mobile shows sections stacked with sticky pay button.

Forms:

- Fulfillment selection.
- Address or pickup details.
- Payment method.
- Order notes.

Error state:

- Payment failed, item unavailable, vendor closed, or address outside delivery area.

### Order Tracking Page

Layout:

- Status header.
- Timeline.
- Vendor contact card.
- Order summary.

Cards:

- Timeline card uses clear icons for each status.

Maps section:

- Future delivery map area appears only when delivery tracking exists.
- For pickup, show vendor map and navigation button.

Mobile behavior:

- Sticky contact actions at bottom if order is active.

### Review Page

Layout:

- Centered form card on desktop.
- Full-width form on mobile.

Forms:

- Rating selector.
- Comment field.
- Submit button.

Empty state:

- If order is not completed, explain reviews open after completion.

### Customer Profile Page

Layout:

- Profile header card.
- Settings list.
- Quick action cards.

Navigation:

- Bottom nav remains visible.

Main content:

- Orders, favorites, notifications, language, theme, security, help.

### Login and Register Pages

Layout:

- Centered auth panel on desktop.
- Full-screen mobile form.
- Language switcher accessible at top or bottom.

Buttons:

- Primary auth action.
- Google button.
- Phone OTP button.

Error state:

- Inline validation plus top-level error summary for failed login.

### Language Switcher Screen

Layout:

- Simple list of supported languages.
- Radio selection with apply button.

Main content:

- English
- Hausa
- Yoruba
- Igbo
- Tiv

Mobile behavior:

- Can appear as a full page from settings or bottom sheet during onboarding.

## Vendor Screens

### Vendor Onboarding Page

Layout:

- Progress stepper.
- Single focused form section per step.
- Help panel on desktop.

Forms:

- Business identity.
- Contact information.
- Address and map.
- Hours.
- Photos.
- Description.
- Review and submit.

Mobile behavior:

- One-column form.
- Sticky Continue button.
- Save draft visible but secondary.

Error state:

- Section summary plus inline field errors.

### Vendor Verification Page

Layout:

- Large status card.
- Checklist of submitted details.
- Admin message area.

Cards:

- Pending review, approved, rejected, and more-information states use clear badges and next actions.

### Vendor Dashboard

Layout:

- Sidebar on desktop.
- Metrics row.
- Active orders.
- Menu availability.
- Recent reviews.

Cards:

- Today's orders.
- Sales.
- Pending orders.
- Rating.

Mobile behavior:

- Metric cards in two-column grid.
- Orders first.

### Menu Management Page

Layout:

- Header with Add item button.
- Search, category tabs, availability filters.
- Card grid on mobile and table/card hybrid on desktop.

Empty state:

- No menu items: Add first food item.

### Add Food Item Page

Layout:

- Image upload at top.
- Form fields below.
- Preview card on desktop side panel.

Forms:

- Name, category, description, price, availability, image.

### Orders Page

Layout:

- Status tabs.
- New orders highlighted.
- Order table on desktop, cards on mobile.

Status indicators:

- Pending, accepted, preparing, ready, completed, cancelled.

### Earnings Page

Layout:

- Balance card.
- Date range selector.
- Metric cards.
- Chart.
- Transaction list.

Empty state:

- No earnings yet: orders will appear after completion.

### Reviews Page

Layout:

- Rating summary.
- Review list.
- Filters by rating and date.

### Vendor Settings Page

Layout:

- Settings grouped by business, delivery, notifications, language, theme, security.

## Admin Screens

### Admin Login

Layout:

- Minimal secure login panel.
- 2FA step appears after password when enabled.
- Security notice visible.

### Admin Dashboard

Layout:

- Sidebar.
- Top bar.
- Metrics row.
- Queue panels.
- Recent events.

Cards:

- Pending vendors.
- Active orders.
- Payment volume.
- Fraud alerts.

Mobile behavior:

- Drawer nav.
- Priority queues stacked.

### Vendor Approval Page

Layout:

- Queue list left, detail panel right on desktop.
- Full-screen detail view on mobile.

Main content:

- Business details.
- Contact info.
- Map preview.
- Photos.
- Risk indicators.
- Admin action buttons.

Error state:

- If approval action fails, keep context and show retry.

### Customer Management Page

Layout:

- Search and filters.
- Table on desktop.
- Customer cards on mobile.
- Detail drawer.

### Vendor Management Page

Layout:

- Vendor table with status, location, rating, orders, and actions.
- Bulk actions on desktop.

### Fraud Detection Page

Layout:

- Risk summary cards.
- Flagged activity queue.
- Evidence panel.
- Action footer.

Status:

- Low, medium, high, critical risk.

### Analytics Page

Layout:

- Date filter.
- Metric cards.
- Charts.
- Top categories and locations.

### Payment Management Page

Layout:

- Payment filters.
- Transaction table.
- Detail drawer.
- Reconciliation status.

### Security Logs Page

Layout:

- Log filters.
- Severity indicators.
- Log table.
- Detail panel with actor, action, target, timestamp, and metadata.

### Localization Management Page

Layout:

- Language tabs.
- Translation key search.
- Missing translation queue.
- Completion metrics.

### Settings Page

Layout:

- Grouped settings sections.
- Dangerous settings require confirmation.
