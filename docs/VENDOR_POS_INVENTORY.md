# Vendor POS and Inventory

## Goals

- Simple POS sales.
- Walk-in customer sales.
- Inventory tracking.
- Low stock alerts.
- Daily sales summary.
- Menu item stock status.
- Expense tracking.
- Profit estimate.

## Frontend Placeholders

Coming soon pages may exist for:

- Vendor POS.
- Inventory.
- Expenses.

They must not pretend to process real sales until backend support exists.

## Database Model Plan

Future models:

- `PosSale`
- `PosSaleItem`
- `InventoryItem`
- `InventoryAdjustment`
- `VendorExpense`
- `StockAlert`

## API Plan

- `POST /api/vendors/pos/sales`
- `GET /api/vendors/pos/sales`
- `POST /api/vendors/inventory/items`
- `PATCH /api/vendors/inventory/items/:id`
- `POST /api/vendors/expenses`
- `GET /api/vendors/reports/daily-summary`

## Risk Notes

- POS sales should not inflate online order metrics.
- Inventory changes need audit events.
- Profit estimates must be labeled as estimates.
