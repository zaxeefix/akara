# Backend Folder Structure

Recommended Express + TypeScript + Prisma backend structure:

```text
apps/
  api/
    src/
      app.ts
      server.ts
      config/
        env.ts
        cors.ts
        security.ts
        logger.ts
        providers.ts
      routes/
        index.ts
        auth.routes.ts
        customer.routes.ts
        vendor.routes.ts
        admin.routes.ts
        payment.routes.ts
        location.routes.ts
        review.routes.ts
        chat.routes.ts
        notification.routes.ts
      controllers/
        auth.controller.ts
        customer.controller.ts
        vendor.controller.ts
        admin.controller.ts
        payment.controller.ts
        location.controller.ts
        review.controller.ts
        chat.controller.ts
        notification.controller.ts
      services/
        auth/
          auth.service.ts
          token.service.ts
          otp.service.ts
          password.service.ts
          two-factor.service.ts
        users/
          user.service.ts
          role.service.ts
        customers/
          customer.service.ts
          favorite.service.ts
        vendors/
          vendor.service.ts
          verification.service.ts
          menu.service.ts
          earnings.service.ts
        orders/
          order.service.ts
          order-status.service.ts
        payments/
          payment.service.ts
          providers/
            paystack.provider.ts
            flutterwave.provider.ts
            cash-on-delivery.provider.ts
          webhook.service.ts
          wallet.service.ts
        maps/
          maps.service.ts
          distance.service.ts
        media/
          cloudinary.service.ts
          upload.service.ts
        reviews/
          review.service.ts
          moderation.service.ts
        notifications/
          notification.service.ts
        chats/
          chat.service.ts
          message.service.ts
        admin/
          analytics.service.ts
          audit.service.ts
          fraud.service.ts
          settings.service.ts
        localization/
          localization.service.ts
      middleware/
        authenticate.ts
        require-role.ts
        require-ownership.ts
        require-recent-auth.ts
        validate-request.ts
        rate-limit.ts
        audit-log.ts
        error-handler.ts
        not-found.ts
        security-headers.ts
      validators/
        auth.validators.ts
        customer.validators.ts
        vendor.validators.ts
        order.validators.ts
        payment.validators.ts
        review.validators.ts
        upload.validators.ts
        admin.validators.ts
        location.validators.ts
      prisma/
        client.ts
        schema.prisma
        seed.ts
      config/
      utils/
        async-handler.ts
        api-response.ts
        pagination.ts
        money.ts
        phone.ts
        distance.ts
        slug.ts
      types/
        express.d.ts
        auth.types.ts
        api.types.ts
      docs/
        openapi.yaml
      tests/
        unit/
        integration/
        fixtures/
```

## Layer Responsibilities

### Routes

- Define URL paths.
- Attach middleware.
- Delegate to controllers.

### Controllers

- Read validated request data.
- Call services.
- Return standard API responses.
- Avoid business logic.

### Services

- Contain business rules.
- Coordinate Prisma operations.
- Call external providers.
- Enforce domain workflows.

### Middleware

- Authentication.
- Authorization.
- Ownership checks.
- Validation.
- Rate limiting.
- Audit logging.
- Error handling.
- Security headers.

### Validators

- Define request schemas.
- Normalize incoming data.
- Return translation-friendly validation errors.

### Prisma

- Prisma client.
- Schema.
- Seed scripts.
- Migration workflow in Phase 4 after approval.

### Docs

- OpenAPI or API reference.
- Webhook documentation.
- Auth and RBAC documentation.

### Tests

- Unit tests for services and utilities.
- Integration tests for route behavior.
- Fixtures for demo data.
