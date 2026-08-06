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

# Glossary of Terms

Words that mean specific things in QGIS Cloud Desktop, in alphabetical order.

| Term | Meaning |
| --- | --- |
| **Active session** | A session in the `Active` state — the container is running and the user has the QGIS tab open. Active runtime is what billing meters. |
| **Customer** | The legal entity on the invoice. Distinct from **End User** — a customer can have many end users. |
| **End User** | A real person who signs in and uses QGIS in a session. Each End User has their own persistent home directory and passkeys. |
| **End User dashboard** | The single-page web app at `/#/eu` where End Users start / end sessions and manage their account. |
| **Ephemeral disk** | The session container's `/tmp` and similar scratch space. Wiped when the session ends — do not save anything important there. |
| **Idle timeout** | The amount of time a session stays warm with no browser activity before being suspended. Default 30 minutes; set per organisation. |
| **kasmVNC** | The browser-based VNC implementation that streams the QGIS desktop to your browser. Open source, no client install. |
| **Machine tier** | A named compute size — e.g. `Lite`, `Workstation`, `Heavy`. Determines vCPU, RAM, and ephemeral-disk allocation per session. |
| **Max runtime** | The hard upper limit on a single session's runtime. Default 12 hours; the session is gracefully ended at the limit. |
| **Operator** | A Kartoza staff member with admin access to the GSH platform. Not the same as **Organisation administrator** (which is on the customer side). |
| **Organisation** | The Customer entity in product terms — the team / company that subscribes. The Organisation administrator manages End Users. |
| **Organisation administrator** | The End User authorised to invite / remove other End Users and set tiers / quotas. |
| **Passkey** | A FIDO2 / WebAuthn credential used to sign in. See [First Log In](first_login.md). |
| **Persistent home directory** | The per-user storage mounted at `/home/<you>/` in every session. Survives session end and machine-tier switches. |
| **Provisioning** | The state a session is in while its container is being started. Typically a few seconds. |
| **Session** | One instance of a container running QGIS for a specific End User on a specific machine tier. |
| **Session container** | The Linux container that runs QGIS. Built from a nix flake; reproducible across regions. |
| **Storage quota** | The maximum size of an End User's persistent home directory. Set by the Organisation administrator. Growth requests are approved by the administrator. |
| **Suspended** | A session that's still warm (container retained, ready to resume) but not actively running QGIS. Not billed at the active rate. |
| **Tier change** | The act of switching the machine tier for a user's _next_ session. Active sessions are not migrated mid-flight. |
