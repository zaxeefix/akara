# UI/UX Design System

## Brand Personality

AkaraConnect should feel:

- Trusted: customers must believe vendors are real, reviewed, and reachable.
- Local: the product should respect Nigerian street food culture without looking informal or cluttered.
- Fast: nearby discovery, ordering, and vendor responses should feel immediate.
- Helpful: forms, empty states, and errors should guide users clearly.
- Professional: vendors should feel they are getting a serious business tool.
- Inclusive: language, accessibility, and low-friction mobile use should be part of the foundation.

Brand tone:

- Clear
- Warm
- Confident
- Practical
- Community-focused

## Visual Principles

- Mobile-first layouts.
- Clean blue, white, and black theme.
- Rounded cards with restrained shadows.
- Strong whitespace and clear hierarchy.
- Professional line icons.
- Friendly motion used for feedback, not decoration.
- High contrast in both light and dark modes.
- No horizontal scrolling.
- No crowded forms on mobile.

## Color Palette

### Core Colors

| Token | Light Value | Dark Value | Usage |
| --- | --- | --- | --- |
| `primary` | `#0B5FFF` | `#4D8DFF` | Primary actions, links, active navigation |
| `primary-hover` | `#0047C7` | `#78A8FF` | Hover and pressed states |
| `ink` | `#0A0A0B` | `#F7F8FA` | Main text |
| `muted-ink` | `#5F6673` | `#A9B0BD` | Secondary text |
| `surface` | `#FFFFFF` | `#101216` | Page and card surface |
| `surface-soft` | `#F5F7FA` | `#171B21` | Section background |
| `border` | `#E3E7EE` | `#2A3039` | Dividers and input borders |
| `black` | `#000000` | `#000000` | Logo, strong text, overlays |
| `white` | `#FFFFFF` | `#FFFFFF` | Text on dark backgrounds |

### Semantic Colors

| Token | Value | Usage |
| --- | --- | --- |
| `success` | `#118A4E` | Paid, approved, completed |
| `warning` | `#B76E00` | Pending, attention needed |
| `danger` | `#D92D20` | Failed, rejected, cancelled |
| `info` | `#2563EB` | Informational states |
| `verified` | `#0E9F6E` | Verified vendors |
| `favorite` | `#E11D48` | Favorite state |

### Food Accent Colors

Use sparingly for category chips and illustrations:

- Akara gold: `#F5A524`
- Pap cream: `#FFF4D6`
- Tea amber: `#C47A18`
- Moi Moi leaf green: `#2F7D32`
- Kunun millet: `#D6A85A`

The interface should not become orange or brown dominant. Food accents should support the blue, white, and black foundation.

## Light Mode

Light mode should be the default for public marketplace browsing.

- Page background: `surface-soft`
- Cards: `surface`
- Main text: `ink`
- Secondary text: `muted-ink`
- Borders: `border`
- Primary buttons: `primary`
- Map pins: `primary` with category accent variants

## Dark Mode

Dark mode should feel premium and readable, not overly saturated.

- Page background: `#0B0D10`
- Cards: `#101216`
- Elevated panels: `#171B21`
- Main text: `#F7F8FA`
- Secondary text: `#A9B0BD`
- Borders: `#2A3039`
- Primary buttons: `#4D8DFF`

## Typography

Recommended font strategy:

- Primary UI font: Inter, Geist, or system sans-serif.
- Fallback: `system-ui`, `Segoe UI`, `Roboto`, `Arial`, sans-serif.
- Use font weight for hierarchy rather than excessive size.
- Letter spacing should remain `0`.
- Avoid viewport-based font scaling.

### Type Scale

| Style | Mobile | Desktop | Weight | Usage |
| --- | --- | --- | --- | --- |
| Display | 32px | 48px | 700 | Landing headline only |
| H1 | 28px | 36px | 700 | Page title |
| H2 | 24px | 30px | 700 | Section title |
| H3 | 20px | 24px | 650 | Card group title |
| H4 | 18px | 20px | 650 | Compact panel title |
| Body | 16px | 16px | 400 | Main text |
| Small | 14px | 14px | 400 | Metadata |
| Caption | 12px | 12px | 500 | Badges, labels |

## Spacing System

Use a 4px base spacing scale:

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | 4px | Tight icon gaps |
| `space-2` | 8px | Button icon gap, small padding |
| `space-3` | 12px | Form field gap |
| `space-4` | 16px | Card padding mobile |
| `space-5` | 20px | Section inner gap |
| `space-6` | 24px | Card padding desktop |
| `space-8` | 32px | Section gaps |
| `space-10` | 40px | Page top spacing |
| `space-12` | 48px | Landing sections |

## Radius and Elevation

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | 6px | Inputs, chips |
| `radius-md` | 8px | Cards, modals, dropdowns |
| `radius-lg` | 12px | Large map panels, bottom sheets |
| `radius-full` | 999px | Pills, avatars |

Cards should usually use 8px radius. Use 12px only for larger framed tools, sheets, or map panels.

Elevation:

- `shadow-sm`: subtle card lift.
- `shadow-md`: dropdowns, floating nav.
- `shadow-lg`: modals and bottom sheets.

Avoid heavy shadows that make the platform feel decorative.

## Button Styles

Minimum tap target: 44px high.

### Primary Button

- Background: `primary`
- Text: white
- Radius: 8px
- Height: 44px mobile, 40px dense dashboard
- Use for main actions: Place order, Submit application, Approve vendor.

### Secondary Button

- Background: transparent or surface
- Border: `border`
- Text: `ink`
- Use for alternate actions: Save draft, Cancel, View details.

### Ghost Button

- Background: transparent
- Text: `primary`
- Use for low-emphasis actions in dense layouts.

### Danger Button

- Background: `danger`
- Text: white
- Use for destructive actions with confirmation.

### Icon Button

- Square 40px or 44px.
- Use professional icons for search, cart, menu, favorite, phone, chat, map, notification, settings, edit, delete.
- Always include accessible labels.

## Input Fields

Inputs should be clear, large, and mobile-friendly.

- Height: 44px minimum.
- Border: 1px solid `border`.
- Radius: 8px.
- Padding: 12px.
- Label above input, never placeholder-only.
- Helper text below when useful.
- Error message below with clear explanation.
- Required fields marked with text, not color alone.
- Phone fields should support Nigerian phone formats.
- Location fields should support typed input and map selection.

## Forms

Form structure:

- Group related fields into sections.
- Use progressive disclosure for long vendor onboarding.
- Save draft for vendor onboarding.
- Show completion progress for vendor registration.
- Keep single-column forms on mobile.
- Use two-column forms only on tablet and larger screens.
- Confirm high-impact actions.

## Cards

Cards should organize repeatable content:

- Vendor card
- Menu item card
- Order card
- Analytics metric card
- Review card
- Admin queue item

Card anatomy:

- Media or icon
- Title
- Metadata
- Status
- Primary action
- Optional secondary actions

Card rules:

- Radius: 8px.
- Border over heavy shadow.
- Fixed media aspect ratios.
- Avoid nested cards.
- Ensure titles wrap cleanly.

## Badges

Use badges for status and metadata:

- Verified
- Open
- Closed
- Pending
- Approved
- Rejected
- Paid
- Unpaid
- Preparing
- Ready
- Completed
- High risk

Badges should use both color and text.

## Modals and Sheets

Use modals for:

- Confirmation
- Payment status
- Admin action review
- Image preview

Use bottom sheets on mobile for:

- Filters
- Language switcher
- Cart summary
- Map vendor preview

Rules:

- Trap keyboard focus.
- Provide close button.
- Use clear title.
- Avoid long forms in modals when a full page is better.

## Navigation

### Public Navigation

- Logo
- Search
- Food categories
- Nearby vendors
- Become a vendor
- Language
- Login/Register

### Customer Navigation

Desktop:

- Header with logo, search, location, notifications, cart, profile.

Mobile bottom navigation:

- Home
- Search
- Nearby
- Orders
- Profile

### Vendor Navigation

Desktop:

- Sidebar: Dashboard, Business Profile, Menu, Orders, Analytics, Earnings, Reviews, Notifications, Verification, Settings.

Mobile:

- Bottom navigation for Dashboard, Orders, Menu, Earnings, Profile.
- More menu for secondary tools.

### Admin Navigation

Desktop:

- Sidebar: Dashboard, Vendor Approval, Customers, Vendors, Orders, Payments, Fraud, Reports, Ads, Subscriptions, Security Logs, Localization, Settings.

Mobile/tablet:

- Collapsible drawer.
- Priority top tabs for dashboard queues.

## Tables

Tables should be used for admin and vendor dense data.

Desktop:

- Full table with sortable columns.
- Sticky header where useful.
- Bulk actions for admin management.

Mobile:

- Convert rows into stacked cards.
- Show top 3 to 5 important fields.
- Put secondary fields inside details drawer.

## Status Indicators

Order status:

- Pending: warning
- Accepted: info
- Preparing: info
- Ready: success
- Completed: success
- Cancelled: danger
- Refunded: muted

Vendor approval:

- Draft
- Pending review
- More information needed
- Approved
- Rejected
- Suspended

Payment:

- Unpaid
- Pending
- Paid
- Failed
- Refunded

## Empty States

Empty states should include:

- Useful title.
- Short guidance.
- One primary action.
- Optional illustration or icon.

Examples:

- No nearby vendors: ask user to change location or expand radius.
- Empty cart: guide user back to marketplace.
- No orders: suggest browsing vendors.
- No menu items: vendor should add first food item.
- No approval requests: admin can view all vendors.

## Loading States

Use:

- Skeleton cards for vendor lists.
- Skeleton rows for tables.
- Inline spinners only for button actions.
- Map loading shimmer with clear fallback.
- Optimistic feedback where safe.

Avoid blank pages during loading.

## Error States

Error states should explain:

- What happened.
- Whether the user can retry.
- What to do next.

Examples:

- Location permission denied.
- Payment verification pending.
- Vendor unavailable.
- Upload failed.
- Network error.
- Unauthorized admin action.

## Toast Notifications

Toast types:

- Success
- Error
- Warning
- Info

Rules:

- Keep messages short.
- Do not use toasts for critical information only.
- Provide action when useful, such as View order.
- Auto-dismiss non-critical messages.
- Keep accessible live-region announcements.

## Mobile Bottom Navigation

Customer bottom navigation:

- Home
- Search
- Nearby
- Orders
- Profile

Vendor bottom navigation:

- Dashboard
- Orders
- Menu
- Earnings
- More

Admin bottom navigation should be avoided for full admin tools. Use a top bar and drawer instead.

## Dashboard Layouts

### Customer Marketplace Layout

- Sticky header with search and location.
- Category chips.
- Nearby vendor cards.
- Map preview for nearby results.
- Bottom navigation on mobile.
- Cart shortcut always reachable.

### Vendor Dashboard Layout

- Sidebar on desktop.
- Order summary at top.
- Today's orders.
- Revenue and earnings metrics.
- Menu availability shortcuts.
- Notifications and verification status.

### Admin Dashboard Layout

- Sidebar on desktop.
- Top bar with search, alerts, admin profile.
- Key metrics row.
- Approval queue.
- Fraud alerts.
- Recent orders and payments.
- Security log highlights.

## Motion

Motion should be smooth and restrained:

- 150ms for hover and active states.
- 200ms for drawers and dropdowns.
- 250ms for modal entry.
- Respect reduced motion settings.
- Use motion for state changes, not decoration.
