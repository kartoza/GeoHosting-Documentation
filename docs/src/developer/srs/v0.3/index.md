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

# SRS v0.3 — GSH QGIS Cloud Desktop

This directory holds the **canonical source** of the Software Requirements
Specification for the GSH QGIS Cloud Desktop offering.

| File | Purpose |
| --- | --- |
| `GSH_QGIS_Cloud_Desktop_SRS_v0.3.docx` | Editable source (LibreOffice / Word) |
| `GSH_QGIS_Cloud_Desktop_SRS_v0.3.pdf`  | Rendered PDF — read this first |

## Relationship to `specification.md`

The PDF/DOCX in this directory is the **prose specification** — it is what we
agreed with stakeholders and what the requirement IDs (FR-NNN, NFR-NNN) refer
back to.

[`specification.md`](../specification.md) at the repo root is the
**living, code-tracked** distillation of the SRS. It restates the same
requirements in markdown, adds a traceability table linking each requirement
to its implementation status and GitHub issue, and is updated as the
implementation evolves.

If the two ever disagree, the rule is:

- **SRS PDF wins on intent** — what we promised to build.
- **`specification.md` wins on current state** — what is actually built.

When a requirement changes during implementation, both this directory's source
and `specification.md` must be updated in the same commit.

## Versions

Each major revision of the spec lives in its own `vN.M/` directory so we can
diff between versions. Do not edit historical versions; create a new one.
