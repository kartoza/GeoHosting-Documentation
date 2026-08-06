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

# Navigating the Dashboard

The End User dashboard is where you launch sessions, see your home directory usage, and check your account. It is a single page, accessed at `https://<your-instance>.geospatialhosting.com/#/eu`.

<!-- TODO: screenshot of full End User dashboard -->

## Top Bar

| Element | Purpose |
| --- | --- |
| **Logo** | Returns you to the dashboard from anywhere. |
| <span class="ui-page-label">Open QGIS Desktop ↗</span> | Launches a session (or resumes a running one) in a new tab. |
| <span class="ui-page-label">Profile</span> | Account details, passkeys, sign-out. |

<br>

## Session Card

The largest card on the dashboard. Shows:

- **Status** — `Idle`, `Provisioning`, `Active`, `Suspended`, `Ended`.
- **Runtime** — how long the current session has been active.
- **Machine tier** — the tier you're running on (e.g. `Workstation`, `Heavy`).
- **End session** button — stop the current session immediately.

If no session exists yet, the card shows a single <span class="ui-generic-label">Start a session</span> button.

<br>

## Storage Card

Shows your persistent home directory usage:

- **Used** / **Quota** — used as `12.4 GiB / 50 GiB`.
- **Growth bar** — a colour-coded fill bar (orange when within budget, red when above 90%).
- <span class="ui-generic-label">Grow</span> button — request more storage in 10 GiB increments. The organisation administrator approves; once approved the new quota takes effect immediately.

<br>

## Machine Tier Card

Shows your currently assigned tier and lets you request a tier change for your next session:

- **Current** — e.g. `Workstation` (4 vCPU, 16 GiB RAM, 80 GiB ephemeral disk).
- **Switch to** — dropdown with the tiers your organisation administrator has authorised for you.
- <span class="ui-generic-label">Apply</span> button — request the change. The new tier takes effect on the **next** session start; an active session is not migrated mid-flight.

<br>

## Recent Sessions

A short list of your most recent sessions with start/end timestamps and runtime. Useful for double-checking billing or remembering when you last did something. Click a row for more detail.

<br>

## Profile and Passkeys

Under <span class="ui-page-label">Profile</span> in the top bar:

- **Name** and **contact email**.
- **Passkeys** — view, name, and revoke registered passkeys. See [Managing your passkeys](../manual/passkeys.md).
- **Sign out** — ends your portal session (not your QGIS session).

<br>

## What's Next

- [Sessions](../manual/sessions.md) — runtime limits, idle behaviour, and how the platform handles disconnects.
- [Storage](../manual/storage.md) — how the persistent home directory works.
- [Machine tiers](../manual/machine-tiers.md) — picking and switching tiers.
