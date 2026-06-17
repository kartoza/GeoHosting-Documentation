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

# Quickstart — 5-Minute Tutorial

Five minutes from sign-in to a running QGIS session with a styled layer. Assumes you've already registered a passkey ([First Log In](first_login.md)).

## 1. Sign in

Open `https://<your-instance>.geospatialhosting.com/`, click <span class="ui-generic-label">Sign in</span>, pick your passkey, and you land on the End User dashboard.

<!-- TODO: screenshot of End User dashboard -->

<br>

## 2. Launch a session

Your dashboard shows a <span class="ui-page-label">Open QGIS Desktop ↗</span> button at the top. Click it.

The platform:

1. Provisions a session container on a machine matching your assigned tier.
2. Mounts your persistent home directory at `/home/<you>/`.
3. Opens the QGIS desktop in a new browser tab via kasmVNC.

The first session of the day takes 10–20 seconds to start; later sessions resume instantly because the container is kept warm.

<!-- TODO: screenshot of session-starting / loading state -->

<br>

## 3. Open the demo project

Your home directory ships with a `~/Projects/Demo/welcome.qgs` project on first use. From the QGIS menu choose <span class="ui-generic-label">Project → Open</span>, navigate to `Projects/Demo`, and open `welcome.qgs`.

You'll see a small basemap and one demo vector layer.

<br>

## 4. Add a new layer

To prove the persistent home directory works:

1. Choose <span class="ui-generic-label">Layer → Add Layer → Add Vector Layer</span>.
2. Browse to `~/Projects/Demo/welcome-points.gpkg`.
3. Click <span class="ui-generic-label">Add</span>, then <span class="ui-generic-label">Close</span>.
4. Right-click the layer in the legend, choose <span class="ui-generic-label">Properties → Symbology</span>, and change the marker to something distinctive.
5. <span class="ui-generic-label">File → Save</span> the project.

<br>

## 5. Close the tab — and prove it persists

Close the QGIS browser tab. The session keeps running for an idle window (default 30 minutes); after that the container is suspended.

Now reopen the dashboard and click <span class="ui-page-label">Open QGIS Desktop ↗</span> again.

You should see the **same QGIS window** in the same state — your edited project open, your custom symbology applied, no re-loading. That's the persistent workspace.

<br>

## What's Next

- [Navigating the Dashboard](dashboard.md) — what each panel on the End User dashboard does.
- [Managing Users & Permissions](permissions.md) — only relevant if you're the organisation administrator.
- Manual reference:
    - [Sessions](../manual/sessions.md) — start, end, idle limits, max-runtime.
    - [Persistent storage](../manual/storage.md) — how your home directory works and how to grow the quota.
    - [Machine tiers](../manual/machine-tiers.md) — picking the right size.

<br>

!!! tip "End the session when you're done for the day"
    Sessions are billed per second of active runtime. Click <span class="ui-generic-label">End session</span> from the dashboard when you're finished — don't just close the tab. The platform also auto-ends idle sessions after the configured idle limit (default 30 minutes).
