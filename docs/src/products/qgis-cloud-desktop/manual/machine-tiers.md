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

# Machine Tiers

A **machine tier** is a named compute size for QGIS sessions. Tiers differ on vCPU count, RAM, and ephemeral-disk allocation. Choosing the right tier is a trade-off between cost (you pay per active second at the tier's rate) and headroom (under-provisioned QGIS swaps and stutters).

## Tier Catalogue

The names and exact sizes are configurable per region. Typical catalogue:

| Tier | vCPU | RAM | Ephemeral disk | Suited to |
| --- | --- | --- | --- | --- |
| **Lite** | 2 | 4 GiB | 20 GiB | Training, demos, small projects, viewing data. |
| **Workstation** | 4 | 16 GiB | 80 GiB | Day-to-day analytical work, editing vector data, running plugins. |
| **Heavy** | 8 | 32 GiB | 160 GiB | Raster processing, large model runs, working with PostGIS at scale. |
| **XL** | 16 | 64 GiB | 320 GiB | Memory-bound operations, very large rasters, complex spatial models. |

> Active rates per tier are shown on the dashboard when you switch tiers and on your invoices.

<br>

## Picking a Tier

Start one tier _smaller_ than you think you need and watch how QGIS feels. You can switch up between sessions without losing work — your persistent home directory comes with you.

Indicators you should switch up:

- QGIS is sluggish on map redraw.
- The CPU bar in the dashboard is pinned near 100% for extended periods.
- You're hitting "out of memory" errors when running processing tools.
- Large rasters take noticeably long to render.

Indicators you can switch down:

- The CPU bar idles in single digits.
- RAM usage stays well under half the tier's allocation.
- You're doing mostly viewing and light editing.

<br>

## Switching Tiers

From the End User dashboard's Machine Tier card:

1. Pick a tier from the **Switch to** dropdown.
2. Click <span class="ui-generic-label">Apply</span>.

The change takes effect on the **next** session — your current active session is not migrated mid-flight.

<!-- TODO: screenshot of Machine Tier card with Switch to dropdown open -->

The dropdown shows only tiers your Organisation administrator has authorised. If a tier you want isn't there, ask the administrator to authorise it for you.

<br>

## What Stays the Same Across Tiers

- Your persistent home directory.
- Your QGIS profile, plugin choices, and settings.
- Your passkeys and account.

What changes is _only_ the size of the box your session runs on.

<br>

## Cost Optimisation

- **End sessions explicitly when done.** Don't rely on the idle timeout if you know you're finished — the idle timer still counts toward billing.
- **Use a smaller tier for routine work.** Switch up only when a job needs it.
- **Suspend during long breaks.** A suspended session isn't billed at the active rate. Close the tab when stepping out for an hour.

<br>

## See Also

- [Sessions](sessions.md) — when each tier matters.
- [Managing Users & Permissions](../guide/permissions.md) — authorising tiers per user.
