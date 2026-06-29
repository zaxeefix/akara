# Security Policy

Please do not report sensitive vulnerabilities in public issues.

## Reporting

Send a private report to the project maintainers with:

- Summary.
- Affected area.
- Impact.
- Safe reproduction notes.

Do not include real secrets, production credentials, private keys, or personal user data.

## Security Expectations

- No `.env` files committed.
- No API secrets in frontend code.
- Use GitHub secrets for CI/CD.
- Verify payment webhooks server-side.
- Keep admin and vendor routes role-protected.

## Phase 8 Sensitive Areas

- AI fraud scoring must require human review.
- Loan and insurance modules require compliance review.
- Location data must be minimized and protected.
- Cloudinary upload credentials remain backend-only.
- WhatsApp Business and USSD provider credentials must never be exposed in frontend code.
