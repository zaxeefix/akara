# Accessibility Guidance

## Accessibility Goal

AkaraConnect should be usable by customers, vendors, and admins with different devices, languages, visual abilities, motor abilities, and connectivity conditions. The target is a WCAG-friendly experience from the beginning.

## Keyboard Navigation

- All interactive elements must be reachable by keyboard.
- Focus order must follow visual order.
- Modals and drawers must trap focus while open.
- Escape should close modals, drawers, and menus where safe.
- Skip-to-content link should be available on major pages.
- Dropdowns and menus should support arrow key navigation where appropriate.

## Focus States

- Every interactive element needs a visible focus state.
- Focus ring should have strong contrast in light and dark mode.
- Do not remove browser focus styles unless replacing them with accessible custom styles.
- Focus should return to the triggering element after closing a modal or drawer.

## Screen Reader Labels

- Icon-only buttons require accessible labels.
- Form fields require visible labels.
- Error messages should be associated with their fields.
- Status changes should be announced when important.
- Toasts should use accessible live regions.
- Loading states should communicate progress where needed.

## Color Contrast

- Body text should meet at least 4.5:1 contrast.
- Large text should meet at least 3:1 contrast.
- Interface components and focus states should meet at least 3:1 contrast.
- Do not rely on color alone for statuses.
- Pair status colors with labels and icons.

## Form Labels and Errors

- Every input must have a visible label.
- Placeholder text must not replace labels.
- Required fields should be identified with text.
- Errors should explain how to fix the issue.
- Long forms should include an error summary at the top of the section.
- Phone OTP inputs must support paste.

## Button Sizes

- Touch targets should be at least 44px by 44px.
- Destructive actions need confirmation.
- Disabled buttons should include a clear reason nearby when the reason is not obvious.

## Maps Accessibility

Maps should not be the only way to discover vendors.

Required fallbacks:

- Vendor list view.
- Address text.
- Distance text.
- Open in Google Maps action.
- Manual location search.
- Clear selected vendor details outside the map.

Map controls:

- Keyboard accessible where possible.
- Tappable on mobile.
- Clearly labeled for screen readers.

## Images and Media

- Vendor logos should have meaningful alt text.
- Food images should describe the item when useful.
- Decorative images should use empty alt text.
- Missing images should show accessible placeholder text.

## Tables

- Tables need proper headers.
- Sort controls should be labeled.
- Mobile card versions should preserve the same essential information.
- Admin bulk actions need clear selected-count feedback.

## Motion and Animation

- Respect reduced motion preferences.
- Avoid flashing or rapid animation.
- Use animation for feedback and orientation only.

## Language Accessibility

- Language switcher must be reachable from public and authenticated areas.
- The selected language should be clearly indicated.
- Do not mix untranslated interface text with translated flows.
- Validation and payment messages must be localized.

## Error Recovery

- Errors should be specific and actionable.
- Users should not lose form progress after validation errors.
- Payment pending states should explain what happens next.
- Upload failures should allow retry.

## Admin Accessibility

- Admin tools must not depend on color-only risk indicators.
- Security logs and fraud queues need searchable, readable text.
- Dense dashboards need headings and landmarks.
- Keyboard users must be able to approve, reject, and inspect records.

## Testing Checklist

- Navigate key flows with keyboard only.
- Test screen reader labels for auth, order, vendor onboarding, and admin approval.
- Test contrast in light and dark modes.
- Test forms at 320px width.
- Test map fallback without location permission.
- Test reduced motion setting.
- Test language switching on mobile.
