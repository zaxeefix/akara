# Contributing to AkaraConnect

Thank you for helping build AkaraConnect.

## Workflow

1. Create or pick an issue.
2. Fork or branch from the active development branch.
3. Keep changes focused.
4. Run available checks.
5. Open a pull request with a clear summary and testing notes.

## Local Checks

```bash
npm install
npm run test:static
npx prisma generate
npm run lint
npm run lint:api
npm run build
npm run build:api
```

## Standards

- Do not commit secrets.
- Use environment variables for configuration.
- Keep user-facing text localizable.
- Protect role-specific routes.
- Add documentation for new modules.

## Phase 8 Contribution Areas

- Mobile app planning and shared API contracts.
- AI feature design without fake automation.
- WhatsApp and USSD planning.
- Rider delivery workflows.
- Vendor POS and inventory tools.
- Localization expansion.
- Privacy and ethics review.
