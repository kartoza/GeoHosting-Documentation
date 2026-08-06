---
title: Documentation
summary: GeoSpatialHosting Controller
  - Tim Sutton
date: 2026-06-17
some_url: https://github.com/kartoza/GeoHosting.git
copyright: Copyright 2024-2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: GSHDocs2026
---

# Organisations

The administrator manual for QGIS Cloud Desktop. Covers organisation-level settings, multi-administrator setups, and the operator handoff for things the dashboard doesn't expose.

## What an Organisation Owns

When you purchase QGIS Cloud Desktop you're creating (or joining) an **organisation**. The organisation owns:

- The subscription contract and billing relationship.
- The instance URL (`<your-instance>.geospatialhosting.com`).
- All End Users that work under it.
- All persistent home directories belonging to those End Users.
- The activity log and audit trail.

An End User can belong to multiple organisations (e.g. a consultant working for two clients). Each membership is independent — separate passkeys, separate home directories.

<br>

## Multiple Administrators

A single administrator is a single point of failure. Authorise at least one more End User as administrator. From <span class="ui-page-label">Organisation → Users</span>:

1. Click the role field on an existing End User row.
2. Check **Organisation administrator**.
3. Save.

The change takes effect immediately. Administrator actions are attributed to the specific person — there's no shared "admin" account.

<br>

## Organisation Settings

Under <span class="ui-page-label">Organisation → Settings</span>:

- **Display name** — shown in the top bar to all End Users.
- **Instance subdomain** — the URL prefix. Changes are a support operation (rename redirects need configuring) — log a ticket from [Help](../help.md).
- **Default idle timeout** — applied to new End Users (default 30 min).
- **Default max session runtime** — applied to new End Users (default 12 h).
- **Concurrent sessions per user** — usually 1; raise it for users running parallel batch jobs.
- **Concurrent sessions for the organisation** — usually equals seat count.
- **Per-tier authorisation policy** — which tiers each role can self-select. Lite is usually open to all; XL is usually administrator-approved per user.

<br>

## Billing

Under <span class="ui-page-label">Organisation → Billing</span>:

- **Billing contact** — the person who receives invoices. Need not be an administrator.
- **Payment method** — credit / debit card, SEPA direct debit, or bank transfer per region.
- **Invoices** — monthly PDFs going back to subscription start.
- **Usage breakdown** — per-tier active hours for the current and prior periods, with cost.
- **Tax / VAT settings** — VAT number, tax-exempt status with supporting document upload.

Billing is monthly in arrears. Invoices are emailed and listed under the **Invoices** tab; PDF copies are kept for the life of the organisation.

<br>

## Activity Log

A chronological feed of all administrator-level events:

- Sessions started, ended, and suspended.
- Tier changes (requested and applied).
- Storage quota changes (requested and applied).
- User invitations, role changes, and removals.
- Passkey enrolments and revocations.
- Recovery link issuance and consumption.
- Settings changes.

Each entry shows the actor, the affected user (if any), the before/after state, and a hash chain (each entry's hash includes the previous entry's hash, so tampering is detectable).

The log retains **365 days** of events on-platform; older events are exported nightly to cold storage and available on request.

<br>

## Removing the Organisation

From <span class="ui-page-label">Organisation → Settings</span> click <span class="ui-generic-label">Cancel subscription</span>.

You'll be asked to confirm:

- The cancellation date (default: end of the current billing period).
- The data retention period (default: 90 days, allowing reactivation).

After the retention period all End User home directories are permanently deleted, passkeys are revoked, and the activity log is archived to cold storage. You'll receive a final invoice and a confirmation email.

This is irreversible after the retention period. Plan ahead.

<br>

## See Also

- [Managing Users & Permissions](../guide/permissions.md) — the day-to-day administrator flows.
- [Sessions](sessions.md) — session lifecycle.
- [Storage](storage.md) — quotas and persistent home directories.
