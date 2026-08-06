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

# Persistent Storage

Every End User has a **persistent home directory** mounted at `/home/<you>/` in every session. It is the one place to put work you want to keep.

## What's Persistent — and What Isn't

| Path inside the container | Persistent? | Notes |
| --- | --- | --- |
| `/home/<you>/` | **Yes** | Your home directory. Survives session end, machine-tier switches, container rebuilds. |
| `/home/<you>/.config/QGIS/` | **Yes** | QGIS settings: profiles, plugin choices, custom toolbars, processing models. |
| `/home/<you>/Projects/` | **Yes** | Your projects, layer files, styles. Recommend storing all real work here. |
| `/tmp/` | **No** | Wiped when the session ends. Useful for scratch and large temporary downloads. |
| `/var/cache/` | **No** | Container scratch. Wiped. |
| `/data/` | **No** | Ephemeral. Wiped. |

> If in doubt, save under `~/Projects/` and you're safe.

<br>

## Quotas

Each End User has a storage quota set by the Organisation administrator. The dashboard's Storage card shows your current usage:

<!-- TODO: screenshot of Storage card -->

When usage exceeds the quota:

- New writes start to fail with a clear "Quota exceeded" message.
- You can still delete files to free space.
- The QGIS auto-save may fail — save explicitly to verify the write succeeded.

<br>

## Requesting More Storage

From the dashboard's Storage card click <span class="ui-generic-label">Grow</span>. Enter the new total size in GiB (in 10 GiB increments). The Organisation administrator reviews and approves; once approved the new quota takes effect immediately — no session restart needed.

The growth request shows on the administrator's queue and is logged in the activity log.

<!-- TODO: screenshot of Grow storage modal -->

<br>

## Shrinking a Quota

Quota _reductions_ are an administrator action. From <span class="ui-page-label">Organisation → Users</span> the administrator can lower a user's quota; if the user is over the new quota they see a banner asking them to free space, and writes continue to succeed until they fall below the new limit (so you don't lose data immediately).

<br>

## Backups

Each persistent home directory is backed up nightly. Restore is a support operation — log a ticket from [Help](../help.md) with the date you want restored from.

Backups are retained for **30 days**. For longer-term archival, export to your own off-platform storage with `rsync` or similar from inside a session.

<br>

## Best Practices

- **Store work under `~/Projects/<project-name>/`.** Don't leave files loose in `~/`.
- **Use Git for project files.** GSH home directories work well with Git; clone repositories under `~/Projects/`.
- **Keep large rasters in PostGIS or cloud-optimised formats.** Bringing TBs of imagery into the home directory will hit the quota fast — use COG/COPC formats and stream from object storage instead.
- **Use `/tmp/` for downloads.** Anything you intend to throw away should go to `/tmp/` so it doesn't count against your quota.
- **Watch the bar.** Once the orange bar turns red (>90%) you're at risk of writes failing — request growth then, not after the first failure.

<br>

## See Also

- [Sessions](sessions.md) — what survives session end.
- [Managing Users & Permissions](../guide/permissions.md) — how the administrator changes quotas.
