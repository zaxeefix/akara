# AI Features

Do not implement fake AI. AI features should be optional, reviewed, privacy-aware, and explainable where they affect users, vendors, payments, fraud, or financial access.

## Feature Plan

| Feature | Data Needed | Approach | Privacy/Security Notes |
| --- | --- | --- | --- |
| Nearby vendor recommendations | Location, vendor status, ratings, order trends | Rules first, ML later | Minimize precise location retention |
| Popular food recommendations | Category orders, search trends | Aggregated analytics | Avoid exposing individual behavior |
| Personalized suggestions | Favorites, orders, searches | Consent-based ranking | Provide opt-out |
| Fraud detection | Orders, payments, reviews, login signals | Risk scoring plus review queue | Human review required |
| Spam detection | Reviews, messages, reports | Classifier or rules | Avoid over-blocking local language |
| Auto translation | UI/content strings, messages | Provider-backed translation | Protect private messages |
| Voice search | Audio query | Speech-to-text provider | Do not store raw audio by default |
| Image recognition | Food/vendor photos | Moderation/classification model | Avoid biometric use |
| Busy hour prediction | Order timestamps | Time-series insights | Aggregate vendor data |
| Vendor sales insights | Sales, menu, orders | Analytics assistant | Keep financial data private |
| Customer behavior insights | Search/order trends | Aggregated cohorts | Avoid invasive profiling |
| AI business assistant | Vendor FAQs, analytics | Retrieval plus templates | No financial/legal guarantees |
| Admin fraud risk scoring | Platform risk events | Explainable risk signals | Human decision required |

## API Endpoint Plan

Future endpoints:

- `GET /api/ai/recommendations/vendors`
- `GET /api/ai/recommendations/foods`
- `GET /api/ai/vendor-insights`
- `GET /api/ai/admin-risk/:targetId`
- `POST /api/ai/translate`
- `POST /api/ai/voice-search`
- `POST /api/ai/image-check`

## Future Model Plan

1. Start with deterministic rules and analytics.
2. Add feature flags.
3. Add offline model evaluation.
4. Add human review for fraud/finance decisions.
5. Monitor bias, false positives, and appeals.

## Human Review Requirement

AI must not automatically reject vendors, deny loans, suspend accounts, or accuse users of fraud without human review.
