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

# UML diagram set — GSH QGIS Cloud Desktop

A complete UML view of the GSH QGIS Cloud Desktop offering. Every diagram is
a standalone, hand-rolled SVG (no CSS classes, no external fonts, explicit
colours) so it opens cleanly in **Inkscape** for tweaking and can be
exported to PNG/PDF for inclusion in the system architecture document.

The diagrams are intentionally numbered `01_` … `10_` so they sort in the
intended reading order for the document.

| # | File | UML kind | What it covers | Primary audience |
| --- | --- | --- | --- | --- |
| 01 | [`01_use_case.svg`](01_use_case.svg) | Use case | Actors (Customer, Org Owner, End User, Operator) and the primary use cases drawn from SPECIFICATION §2–§3 | Product, stakeholders |
| 02 | [`02_class_domain.svg`](02_class_domain.svg) | Class / domain model | Every domain entity across `geohosting`, `tenant_management`, `qgis_cloud_desktop` with fields and relationships (composition, aggregation, snapshot refs) | Engineering |
| 03 | [`03_component_architecture.svg`](03_component_architecture.svg) | Component | The 4-layer trust architecture from SRS §7: Browser → App services → Sandbox → Infra/data | Engineering, security review |
| 04 | [`04_deployment.svg`](04_deployment.svg) | Deployment | Physical nodes (end-user device, edge, app cluster, session cluster, data plane, external systems) with deployed artefacts | Ops, SRE |
| 05 | [`05_sequence_session_launch.svg`](05_sequence_session_launch.svg) | Sequence | End-to-end "Launch session" flow — Portal → Provisioning → Orchestrator → DB → Audit, plus heartbeat loop and end-session path (FR-040..047, FR-071, FR-073) | Engineering |
| 06 | [`06_sequence_passkey_auth.svg`](06_sequence_passkey_auth.svg) | Sequence | WebAuthn passkey authentication ceremony — begin/complete, AuthChallenge, EndUserSession (FR-011 / NFR-001) | Engineering, security review |
| 07 | [`07_sequence_enrolment.svg`](07_sequence_enrolment.svg) | Sequence | Org Owner invites an End User → enrolment email → first-passkey registration (FR-010, FR-012, FR-013) | Engineering, support |
| 08 | [`08_state_session.svg`](08_state_session.svg) | State machine | `qgis_cloud_desktop.Session.status` lifecycle (Requested → Provisioning → Running → Ending → Ended; Error; PlatformFault) with the actual Python method triggers and the audit/billing invariants (FR-040..047, FR-073/074, FR-090) | Engineering, billing |
| 09 | [`09_activity_billing.svg`](09_activity_billing.svg) | Activity | Per-hour metering during a session + monthly reconciliation against the audit log (FR-070..074, FR-090, FR-096) | Engineering, billing |
| 10 | [`10_package_django.svg`](10_package_django.svg) | Package | Django app structure under `django_project/` and inter-app dependencies (which apps know about which models) | Engineering |

## Brand palette

All diagrams use the Kartoza brand palette:

| Token | Hex | Role in diagrams |
| --- | --- | --- |
| `highlight1` | `#DF9E2F` | Application services band, `qgis_cloud_desktop` |
| `highlight2` | `#569FC6` | Browser layer, `tenant_management`, blue arrows |
| `highlight3` | `#8A8B8B` | Existing `geohosting`/`geohosting_*` apps, muted text |
| `highlight4` | `#06969A` | Infrastructure / data layer, terminal states, green/success arrows |
| `alert` | `#CC0403` | Fault states, error transitions |

Box fills are light tints of these brand colours so labels stay legible
when printed at A4.

## Re-generating

The SVGs are generated from a single script. Re-run after model or
architecture changes:

```bash
python3 scripts/generate_uml_diagrams.py
```

The script lives at [`scripts/generate_uml_diagrams.py`](../../scripts/generate_uml_diagrams.py).
It writes all 10 files into this directory. There are no runtime
dependencies beyond the Python standard library.

## Editing in Inkscape

Every shape and connector is grouped (`<g>`) where it logically belongs
(title block, legend, individual classes, swimlanes). Use Inkscape's
**Object → Objects…** panel to navigate the structure. Colours are set
as explicit attributes, not CSS classes, so the colour pickers in
Inkscape work as expected.

## Suggested collation order for the system architecture document

The numbering already matches the recommended reading order. A typical
collation:

1. **Executive context** — §1: drop in `01_use_case.svg`.
2. **Architecture overview** — §2: drop in `03_component_architecture.svg`,
   then `04_deployment.svg`.
3. **Domain model** — §3: drop in `02_class_domain.svg` and
   `10_package_django.svg`.
4. **End-to-end flows** — §4: in this order —
   `07_sequence_enrolment.svg`, `06_sequence_passkey_auth.svg`,
   `05_sequence_session_launch.svg`.
5. **Lifecycle & billing** — §5: `08_state_session.svg` first, then
   `09_activity_billing.svg`.

Each diagram cross-references the SRS section(s) and `specification.md`
FR/NFR IDs it implements, so the document can quote those identifiers
inline next to each figure.
