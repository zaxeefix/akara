# Responsive Design Rules

## Breakpoints

| Name | Width | Primary Behavior |
| --- | --- | --- |
| Mobile | 320px to 767px | Single-column, bottom nav, stacked cards |
| Tablet | 768px to 1023px | Two-column where useful, drawer navigation |
| Laptop | 1024px to 1439px | Sidebar layouts, split views |
| Desktop | 1440px to 1919px | Wider grids, persistent sidebars |
| Ultra-wide | 1920px and above | Constrained content, avoid stretched reading lines |

## Global Rules

- No horizontal scrolling on any page.
- No broken cards or clipped text.
- No vertical text.
- Text must wrap naturally.
- Buttons must remain at least 44px tall on touch devices.
- Images must auto-fit with defined aspect ratios.
- Maps must resize to viewport and never overflow.
- Forms must be easy to fill on phones.
- Tables must become mobile-friendly stacked cards.
- Long navigation lists must move into drawers or More menus on smaller screens.

## Mobile Rules

Width: 320px to 767px.

- Use one-column layouts.
- Use bottom navigation for customers and vendors.
- Use drawer navigation for admin.
- Use full-width forms.
- Use sticky primary action only for checkout, cart, onboarding, and active order actions.
- Convert filters to bottom sheets.
- Convert tables to cards.
- Map views should use a toggle or bottom sheet list.
- Cards should use 16px page margins.
- Avoid dense dashboards; show priority metrics first.

## Tablet Rules

Width: 768px to 1023px.

- Use two-column layouts for forms when fields are short.
- Keep admin sidebar collapsible.
- Use split map/list only when both remain readable.
- Dashboards can use two-column metric cards.
- Tables may show fewer columns with detail drawer.
- Bottom navigation may remain for customer and vendor if it improves reachability.

## Laptop Rules

Width: 1024px to 1439px.

- Use persistent vendor and admin sidebars.
- Customer marketplace can use list plus map split view.
- Dashboard metric cards can use 4-column rows.
- Tables can show core columns.
- Keep content max width for readability.

## Desktop Rules

Width: 1440px to 1919px.

- Use richer split layouts.
- Keep maps large enough for interaction.
- Vendor and admin dashboards can show side panels.
- Avoid stretching forms beyond comfortable widths.
- Keep reading content below 760px max width where possible.

## Ultra-Wide Rules

Width: 1920px and above.

- Center page content in max-width containers.
- Use additional whitespace or supporting panels.
- Do not stretch cards across the full screen.
- Dashboards may use three zones: navigation, main content, insights panel.

## Cards

- Mobile: full-width stacked cards.
- Tablet: two-column card grids where appropriate.
- Laptop and above: three or four-column grids depending on content density.
- Cards must have stable image dimensions.
- Long titles wrap to two lines before metadata.

## Tables

Desktop:

- Full table with sorting and filters.
- Important action column remains visible.

Tablet:

- Hide lower-priority columns.
- Use detail drawer for full row data.

Mobile:

- Convert each row into a card.
- Show primary identifier, status, amount, date, and action.
- Move secondary metadata into expandable details.

## Maps

- Mobile: 280px to 420px height depending on page.
- Tablet: 360px to 520px height.
- Desktop split view: map should fill available height without causing page overflow.
- Always provide list fallback.
- Map controls must be tappable.
- Selected vendor card must not cover essential map controls.

## Images

- Vendor cover photos: 16:9 or 3:1 depending on screen.
- Vendor logos: square.
- Menu item images: 4:3.
- Images must use object-fit cover.
- Missing images use neutral placeholder with category icon.

## Buttons

- Minimum touch target: 44px by 44px.
- Button text must wrap or shorten gracefully.
- Icon-only buttons require accessible labels.
- Primary checkout/order actions should remain visible at the decision point.

## Forms

- Mobile: one field per row.
- Tablet and above: two columns for related short fields.
- Address fields should be grouped by state, local government, ward, community, street, and house number.
- Use stepper for long vendor onboarding.
- Errors appear under fields and in a section summary for long forms.

## Navigation

- Customer mobile: bottom navigation.
- Vendor mobile: bottom navigation with More.
- Admin mobile: drawer only.
- Desktop: header for customer, sidebar for vendor and admin.
- Active route must be visually clear.
