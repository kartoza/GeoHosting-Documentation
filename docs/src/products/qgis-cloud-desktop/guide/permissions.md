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

# Managing Users & Permissions

QGIS Cloud Desktop is sold to an **organisation**. The organisation administrator invites teammates as End Users, assigns each user a machine tier and storage quota, and removes leavers. End Users only see their own dashboard — they don't see each other's sessions.

This page is for organisation administrators. If you're an End User there's nothing for you to do here.

## Roles

| Role | What they can do |
| --- | --- |
| **Organisation administrator** | Invite / remove End Users. Set per-user machine tier and storage quota. View organisation-level billing. End any user's running session. |
| **End User** | Sign in. Launch / end their own session. Use the persistent home directory. Request storage growth. Cannot see other users. |
| **Billing contact** | View invoices, update payment method, change billing address. No End User access. |

A single person can hold multiple roles — the organisation administrator is usually also a billing contact and is always an End User.

<br>

## Inviting an End User

1. From the dashboard click <span class="ui-page-label">Organisation → Users</span>.
2. Click <span class="ui-generic-label">Invite user</span>.
3. Provide:
    - **Email** — the invitation goes here.
    - **Name** — pre-fills their profile.
    - **Machine tier** — the tier they're authorised to launch. They can switch between tiers _at or below_ this level.
    - **Storage quota** — initial home directory quota in GiB.
4. Click <span class="ui-generic-label">Send invitation</span>.

The invitee receives an email with a first-login link (single-use, expires in 7 days). The first sign-in walks them through passkey registration — see [First Log In](first_login.md).

<!-- TODO: screenshot of Invite user form -->

<br>

## Changing Quotas and Tiers

From the user's row in <span class="ui-page-label">Organisation → Users</span>:

- **Storage quota** — click the storage cell, enter the new GiB value. Increases take effect immediately; decreases take effect once usage drops below the new value (the user is shown an over-quota warning until then).
- **Machine tier** — click the tier cell, pick a new authorised tier. The change takes effect on the user's **next** session — an active session is not interrupted.

<br>

## Removing an End User

When a teammate leaves the organisation:

1. From their row click <span class="ui-generic-label">Remove</span>.
2. Confirm the offboarding dialog. You'll be asked whether to:
    - **Archive the home directory** — kept read-only for 90 days then permanently deleted. Useful for handover.
    - **Delete immediately** — irreversible.
3. The user is signed out (their session, if running, is ended immediately) and their passkeys are revoked.

<!-- TODO: screenshot of Remove user confirmation dialog -->

<br>

## Auditing What's Happening

Two views matter:

- **Sessions** — all active and recent sessions across the organisation. Shows who is using which tier, how long they've been running, and an <span class="ui-generic-label">End session</span> button per row.
- **Activity log** — a chronological feed of provisioning events, tier changes, and quota changes. Useful for incident review.

<br>

## What's Next

- [Storage](../manual/storage.md) — how the persistent home directory works and how growth requests flow.
- [Machine tiers](../manual/machine-tiers.md) — what each tier ships and when to authorise it.
- [Organisations](../manual/organizations.md) — the full administrator manual.
