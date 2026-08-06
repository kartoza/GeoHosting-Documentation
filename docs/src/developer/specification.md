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

# GSH QGIS Cloud Desktop — Specification

This document is the **living specification** for the GSH QGIS Cloud Desktop
offering on geospatialhosting.com. It is the code-tracked distillation of the
canonical SRS at [`srs/v0.3/`](srs/v0.3/index.md).

> **Rule of precedence**: the SRS PDF wins on *intent* (what we agreed to
> build); this document wins on *current state* (what is actually built and
> what is still outstanding). When requirements change, update both in the
> same commit.

- **Source SRS**: `srs/v0.3/GSH_QGIS_Cloud_Desktop_SRS_v0.3.pdf` (v0.3 — Draft, May 2026)
- **Author**: Tim Sutton, Kartoza
- **Last spec sync**: 2026-06-06
- **Tracking epic**: [kartoza/GeoHosting#763](https://github.com/kartoza/GeoHosting/issues/763)
- **Active development branch**: `feature/qgis-cloud-desktop-integration` — every
  slice since the original Phase 1/2 PRs lands here as a discrete commit. The
  branch is what the demo / local-test workflow expects (`./dev`); individual
  PRs will be cut from it once functionality stabilises.
- **Open PRs**:
  - [#770](https://github.com/kartoza/GeoHosting/pull/770) — tenant_management foundation + Company→Organisation rename (Phase 1 partial)
  - [#771](https://github.com/kartoza/GeoHosting/pull/771) — WebAuthn passkey registration + authentication (stacked on #770)
  - [#772](https://github.com/kartoza/GeoHosting/pull/772) — local-testing integration branch (Draft; not a merge target)
  - [#773](https://github.com/kartoza/GeoHosting/pull/773) — Phase 2: MachineTier + PersistentHome + storage audit (stacked on #770)

## Terminology and naming variances from the SRS

Two intentional divergences between this living spec / implementation and the
canonical SRS PDF. The SRS PDF is not retroactively updated; these notes
record the reconciliation.

1. **Spelling — UK "Organisation" vs. US "Organization".** The SRS uses
   the US spelling. The implementation, this document, code identifiers,
   DB tables, API paths and UI strings all use the UK spelling
   ("Organisation") to match Kartoza's South African English convention.
2. **Customer / Organisation collapse.** The SRS describes a three-tier
   tenancy: `Customer → Organization → End User` (US spelling). The
   implementation collapses Customer and Organisation: the existing
   `geohosting.Company` model was renamed to `geohosting.Organisation`
   (it already had multi-user, billing-bearing tenant semantics via
   `OrganisationContact`), and the SRS notion of "Customer" maps directly
   to the existing Django `auth.User`. No separate Customer entity is
   created.

Where this document uses "Organisation" it refers to the same entity the
SRS calls "Organization". Where it uses "User" (or "platform user") it
refers to what the SRS calls "Customer".

---

## 1. Product summary

GSH QGIS Cloud Desktop is a per-hour-billed, containerised QGIS desktop
delivered to End Users in the browser via kasmVNC. It introduces two
cross-cutting capabilities that GSH does not yet have:

1. **Organisation-scoped end-user management** — Customers manage their own
   passkey-authenticated End Users inside Organisations they own.
2. **Hybrid billing** — per-hour metered compute (Machine Tiers) combined
   with per-month pro-rated Persistent Home storage, with a defensible
   append-only audit log behind every billable event.

See SRS §1–§2 for full purpose and scope.

## 2. Personas

| Persona | Source | Role |
| --- | --- | --- |
| **Customer** | Existing GSH account holder | Owns the billing relationship; owns one or more Organisations. |
| **Organisation Owner** | New | Administers an Organisation: creates End Users, assigns roles, sets tiers, allocates storage, links Postgres, consumes billing. |
| **End User** | New | Org-scoped passkey identity. Launches and uses a single QGIS Cloud Desktop session at a time. |
| **GSH Platform Operator** | Existing (Kartoza staff) | Operates the platform, reconciles disputed bills, intervenes in stuck sessions. |

See SRS §2.3.

## 3. Architecture summary

Four layers (SRS §7):

1. **Browser layer (untrusted)** — End User Portal + kasmVNC client + existing GSH Web.
2. **Application services** — Identity (passkey/WebAuthn), Provisioning, Storage, Billing & Audit, PG Linkage Writer; integrates with existing Keycloak.
3. **Per-session sandbox** — ephemeral QGIS+kasmVNC container with Persistent Home bind-mounted at `/home/<user>`.
4. **Infrastructure & data layer** — container runtime, block storage, secrets store, operational DB, append-only Audit Store, Postgres instances.

Trust boundaries (SRS §7.2): End Users only ever talk to the End User Portal and their own session; cross-organization isolation is enforced at the data layer; the container has no credentials for any GSH back-end.

## 4. Phase plan and Django app layout

The implementation follows the six-phase plan in SRS §10.1, mapped onto two
new Django apps in `django_project/`:

- **`tenant_management/`** — cross-cutting: `Organisation`, `OrganisationOwner`, `EndUser`, `Passkey`, `RoleGrant`.
- **`qgis_cloud_desktop/`** — offering-specific: `MachineTier`, `PersistentHome`, `StorageAllocationEvent`, `Session`, `SessionHeartbeat`, `PostgresLinkage`.

The existing `geohosting/` app is **not** modified by Phases 1–5 except for
explicit integration touch-points (e.g. linking an `Organisation` to the
existing `Company`/`User`, and routing QGIS Cloud Desktop billing lines into
the existing ERPNext invoice). Phase 6 may touch `geohosting/` for hardening
and shared utilities.

| Phase | Scope | App(s) | Status | Issue |
| --- | --- | --- | --- | --- |
| 1 | Organisations + End Users + Passkeys + Roles (no compute) | `tenant_management` | 🟢 Org CRUD, EndUser CRUD, passkey enrolment + sign-in + self-service multi-device, Owner + Portal UIs all in place. Email delivery of enrolment links and WebAuthn step-up UI gate outstanding. | [#764](https://github.com/kartoza/GeoHosting/issues/764) |
| 2 | Machine Tier catalogue + PersistentHome + audit/billing scaffolding | `qgis_cloud_desktop` | 🟢 Catalogue + grant flow + persistent home grow + append-only `StorageAllocationEvent` chain + Owner UI all in place. | [#765](https://github.com/kartoza/GeoHosting/issues/765) |
| 3 | QGIS Cloud Desktop session lifecycle (single user, end-to-end) | `qgis_cloud_desktop` | 🟢 State machine + provisioner package (stub + Docker, selected by `QCD_PROVISIONER`) + Launch flow + FR-044 sweepers + FR-091 heartbeat + production celery beat all landed. Running sessions expose a `kasm_url` the EndUser opens in a new browser tab (no iframe). | [#766](https://github.com/kartoza/GeoHosting/issues/766) |
| 4 | Per-hour metering, reconciliation reports, itemized billing UI | `qgis_cloud_desktop` + `geohosting` integration | 🟢 Compute + storage monthly rollup (Owner card + per-EndUser personal usage), session + storage audit chain viewers with re-derived tamper detection. ERPNext invoice line push, CSV/PDF export, daily Merkle aggregation outstanding. | [#767](https://github.com/kartoza/GeoHosting/issues/767) |
| 5 | Postgres linkage + `pg_service.conf` injection | `qgis_cloud_desktop` | 🟢 Step 1 (PostgresInstance registry + Owner UI) + step 2 (PostgresGrant per EndUser with autogen credentials + Owner UI + EndUser visibility) + step 3 (FR-091 apply_grant + revoke_grant_db services, Vault adapter, pg_service.conf renderer, celery tasks, mgmt cmd) + container-side injection (Docker provisioner builds the tarball and `container.put_archive`s `~/.pg_service.conf` at 0o600 into the kasm container before flipping the session into Running) all landed. | [#768](https://github.com/kartoza/GeoHosting/issues/768) |
| 6 | Reassignment, destructive ops, budgets, hardening | both | 🟢 Destroy + reassign PersistentHome with grant migration, FR-005 cross-Customer Org transfer (+ rollback audit), FR-060 EndUser delete wizard, FR-061 cascading Organisation archive fan-out, and FR-103 soft per-user budgets all landed. | [#769](https://github.com/kartoza/GeoHosting/issues/769) |

---

## 5. Functional requirements — traceability

Status legend: `🔴 Not started` · `🟡 In progress` · `🟢 Done` · `⚪ Out of scope (v1)`

### 5.1 Organisations (SRS §3.1)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-001 | Customer can create one or more Organisations (unique slug, display name, owner ref) | MUST | 1 | 🟢 (Owner UI + slug auto-derive + duplicate-name 400) | #764 |
| FR-002 | Customer can rename an Organisation without affecting its identifier | MUST | 1 | 🟢 (slug derived once on save, immutable thereafter) | #764 |
| FR-003 | Customer can archive (soft-delete) an Organisation | MUST | 1 | 🟢 (model + Owner action; cascading session/grant teardown still TBD per FR-061) | #764 |
| FR-004 | Each Organisation rolls up into the parent Customer's GSH invoice | MUST | 4 | 🟢 (FR-004 `qgis_cloud_desktop.services.erp_billing.push_organisation_invoice` projects the dashboard summary into ERPNext Sales Invoice line items, POSTs via the existing `post_to_erpnext`, records in `ErpInvoicePush` with (org, period) unique constraint. Celery beat `qcd.erp_push_previous_month` on the 1st of each month at 02:00 + `erp_push_invoice` mgmt cmd for back-fills) | #767 |
| FR-005 | Customer can transfer an Organisation to another Customer (with audit) | SHOULD | 6 | 🟢 (FR-005 `transfer_organisation` swaps OrganisationOwner rows in a single tx + writes an `OrganisationTransfer` ledger row with full `owner_snapshot`; rollback walks the snapshot to restore prior owners and emits a separate ROLLED_BACK row pointing back at the original; survives user deletion via nullable FKs. Operator endpoints + `transfer_organisation` mgmt cmd + 8 tests) | #769 |

### 5.2 End Users within an Organisation (SRS §3.2)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-010 | Organisation Owner can create End Users (one Org per End User) | MUST | 1 | 🟢 (Owner UI on Org Detail page; CRUD + disable + re-enable) | #764 |
| FR-011 | End Users authenticate using WebAuthn passkeys; no passwords | MUST | 1 | 🟢 (full ceremony end-to-end; supports hardware key + phone hybrid + software CTAP2 providers) | #764 |
| FR-012 | Org Owner can issue single-use, time-limited enrolment link | MUST | 1 | 🟢 (mint via API + `/#/enrol/<token>` landing page; Django 302 rescue for fragment-stripped URLs; Owner can either copy-to-clipboard or **email** the link via `/enrolment-email/` with HTML+text templates rendered through the project's existing email backend — console in dev, Resend in prod) | #764 |
| FR-013 | Org Owner can register additional passkeys / revoke individual passkeys | MUST | 1 | 🟢 (Owner-side PasskeysCard with revoke; EndUser self-service Add via MyPasskeysCard) | #764 |
| FR-014 | Org Owner can disable/delete an End User; disabling invalidates active sessions (§3.5) | MUST | 1 (disable) / 3 (session kill) | 🟢 (disable + re-enable + delete work; sweep_once now closes any Running session whose EndUser status is DISABLED/DELETED with end_reason=user_disabled, and fails Provisioning/Requested rows for the same EndUser. The minute-cadence celery beat delivers the FR-045 60-second SLA) | #764, #766 |
| FR-015 | End Users can self-register additional passkeys on new devices (re-auth gated) | SHOULD | 1 | 🟢 (Portal MyPasskeysCard → `/api/v1/passkey-self-service-registrations/{begin,complete}/`; gated by `WEBAUTHN_STEP_UP_TTL_SECONDS`) | #764 |
| FR-016 | End User identifiers unique within Org; same email may exist across Orgs | MUST | 1 | 🟢 (UniqueConstraint on `(organisation, email)`) | #764 |

### 5.3 Roles (SRS §3.3)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-020 | Roles defined per offering (initially only `qgis-desktop`); granted by Org Owner | MUST | 1 | 🟢 (RoleGrant + Owner UI on EndUser detail) | #764 |
| FR-021 | End User without `qgis-desktop` role cannot launch a session and is not billable for compute | MUST | 1 (gate) / 3 (enforce) | 🟢 (`SessionLaunchView` returns 403 with no active grant) | #764, #766 |
| FR-022 | Role model must extend to future offerings without schema changes beyond seed data | MUST | 1 | 🟢 (free-text `role_code`) | #764 |
| FR-023 | Roles support per-role attributes (e.g. machine tier for `qgis-desktop`) | SHOULD | 2 | 🟢 (`machine_tier_code` carried per grant) | #765 |

### 5.4 Machine Tiers and Storage Allocation (SRS §3.4)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-030 | Platform maintains a catalogue of Machine Tiers (vCPU, RAM, disk, per-hour price) | MUST | 2 | 🟢 (`MachineTier` + initial fixture + Owner-facing dropdown) | #765 |
| FR-031 | Granting `qgis-desktop` requires picking exactly one active Machine Tier | MUST | 2 | 🟢 (`QgisDesktopGrantView` POST enforces) | #765 |
| FR-032 | Org Owner can change a user's tier; takes effect on next session start | MUST | 2 | 🟢 (PATCH revokes + re-issues grant; running sessions keep their tier snapshot per FR-073) | #765 |
| FR-033 | Org Owner allocates Persistent Home size; default configurable per Org | MUST | 2 | 🟢 (atomic with grant; UI default 100 GiB) | #765 |
| FR-034 | Org Owner can grow a user's Persistent Home at any time | MUST | 2 | 🟢 (PATCH `/persistent-home/`; shrink rejected per FR-034a) | #765 |
| FR-034a | Shrinking allocations is explicitly out of scope for v1 | NOTE | — | ⚪ | — |
| FR-035 | Org Owner can reassign a user's Persistent Home to themselves for forensics/handover; audit-logged | MUST | 6 | 🟢 (POST `/persistent-home/reassign/` with REASSIGN audit event + grant migration) | #769 |
| FR-036 | Org Owner can destroy a user's Persistent Home (confirmation + audit + pro-rated billing stop) | MUST | 6 | 🟢 (DELETE `/persistent-home/` with DESTROY audit event + active-session guard) | #769 |

### 5.5 QGIS Cloud Desktop Session Lifecycle (SRS §3.5)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-040 | Authenticated End User with `qgis-desktop` can request a session; container provisioned at user's tier with home bind-mounted at `/home/<user>` | MUST | 3 | 🟢 (Launch flow end-to-end; `qgis_cloud_desktop.provisioners` package — `stub` for dev, `docker` for real kasmVNC, selected by `QCD_PROVISIONER`. Docker path mounts PersistentHome at `/home/kasm-user` via docker volume) | #766 |
| FR-041 | At most one active session per End User; subsequent requests return existing or are rejected | MUST | 3 | 🟢 (partial-unique DB constraint + `SessionLaunchView` returns the existing active session rather than 400) | #766 |
| FR-042 | Session exposed via in-browser kasmVNC; no client install beyond a modern browser | MUST | 3 | 🟢 (Docker provisioner publishes the kasmVNC port and stores the URL on `Session.kasm_url`; EndUserPortal renders an "Open QGIS Desktop ↗" button that opens the session in a new browser tab via `target="_blank" rel="noopener noreferrer"` — no iframe) | #766 |
| FR-043 | End User can explicitly end session; container destroyed; volume detached cleanly | MUST | 3 | 🟢 (state machine + POST `/sessions/{id}/end/`; real container teardown rides the real provisioner) | #766 |
| FR-044 | Sessions auto-end on idle timeout (default 30 min) and max duration (default 12 h), both configurable | MUST | 3 | 🟢 (`sweep_sessions` cmd + auto-starting background thread via `SESSION_SWEEPER_AUTOSTART=1`; 6 unit tests; production celery beat replacement is the prod gap) | #766 |
| FR-045 | Disabling user or revoking `qgis-desktop` terminates any active session within 60 s | MUST | 3 | 🟢 (sweep_once gained two passes: disabled-EndUser closes the session with USER_DISABLED, and any Running session whose EndUser no longer holds an active qgis-desktop RoleGrant closes with OWNER_REVOKED. With celery beat at `*` cadence, every disable / revoke is reflected on the session within 60 s without needing a dedicated signal hook) | #766 |
| FR-046 | Container destruction idempotent and survives process/node failure; orphans reaped on restart with audit-logged closure | MUST | 3 | 🟢 (provisioning-timeout sweep + FR-046 `reap_orphan_containers` scans every `qcd-s*` container, kills any whose Session is gone or already Ended/Error, leaves active-status containers alone, ignores foreign names. Wired as `qcd.reap_orphan_containers` celery beat job at `*/5` minutes) | #766 |
| FR-047 | Platform exposes real-time session status to End User with accrued cost estimate | SHOULD | 3 | 🟢 (Portal polls `/api/v1/sessions/current/` with 2 s cadence during transitional states; live cost_so_far shown) | #766 |

### 5.6 PostgreSQL Linkage / PG Service File (SRS §3.6)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-050 | Org Owner can tick "Provision PG service" per Postgres instance per user | MUST | 5 | 🟢 (PostgresGrantsCard on EndUser detail; POST `/api/v1/end-users/{id}/postgres-grants/`) | #768 |
| FR-051 | Short form for service alias, db name, user, password (or generated), SSL mode | MUST | 5 | 🟢 (auto-generated `db_user = gsh_eu{N}_pi{M}` + 32-char CSPRNG password returned once on issue) | #768 |
| FR-052 | On session start, write/refresh `~/.pg_service.conf` (owner=user, mode 0600) | MUST | 5 | 🟢 (FR-092 `render_pg_service_conf` builds the ini block from the EndUser's applied + non-revoked grants; the Docker provisioner wraps it in a single-file tarball owned by uid 1000 with mode 0o600 and `container.put_archive`s it into `/home/kasm-user/.pg_service.conf` before flipping the Session into Running) | #768 |
| FR-053 | Unticking removes entry on next session start; does not drop DB account (manual op) | MUST | 5 | 🟢 (revoke flips `revoked_at`; the renderer skips revoked grants so the next session's pg_service.conf omits them) | #768 |
| FR-054 | One-click creation of Postgres role/account via existing GSH Postgres APIs | SHOULD | 5 | 🟢 (FR-091 `qgis_cloud_desktop.services.postgres_provisioner.apply_grant` runs CREATE ROLE + GRANT CONNECT/USAGE/SELECT/INSERT/UPDATE/DELETE + ALTER DEFAULT PRIVILEGES against the registered admin connection, stashes credentials in the Vault adapter, exposed via `qcd.apply_postgres_grant` celery task + `apply_postgres_grant` mgmt cmd) | #768 |

### 5.7 Archival, Deletion and Data Retention (SRS §3.7)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-060 | Deleting an End User offers three Persistent Home choices: keep (reassign to owner) / destroy now / destroy after N days | MUST | 6 | 🟢 (FR-060 `DeleteEndUserDialog` Chakra modal with three radios + day picker; `EndUserViewSet.delete_with_retention` action wires the choice into `PersistentHome.destroy_scheduled_at`; sweeper pass picks up scheduled rows on each tick) | #769 |
| FR-061 | Archiving an Organisation terminates sessions, freezes role grants, prompts retention choice per Persistent Home | MUST | 6 | 🟢 (FR-061 `ArchiveOrganisationDialog` with type-the-name confirmation + retention radios; `OrganisationViewSet.archive` does the full cascading fan-out — sessions ended, PostgresGrants revoked, PersistentHomes scheduled per choice, EndUsers flipped to deleted, Organisation archived) | #769 |
| FR-062 | All destructions logged with actor, target volume, size at destruction, timestamp | MUST | 6 | 🟢 (DESTROY/REASSIGN `StorageAllocationEvent` rows on the per-home hash chain) | #769 |

### 5.8 Compute Billing (SRS §4.1)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-070 | Compute billed per hour or part thereof at tier price in effect at session start | MUST | 4 | 🟢 (`Session._close_billing` uses `math.ceil(seconds/3600)`; covered by 19 state-machine tests) | #767 |
| FR-071 | Hour measured from container Running → Ended; provisioning and post-disconnect not billed | MUST | 4 | 🟢 (billing clock starts at `mark_running`; provisioning time excluded) | #767 |
| FR-072 | Sessions crossing hour boundaries accrue an additional whole-hour charge per wall-clock-hour-since-start | MUST | 4 | 🟢 (3601 s → 2 h test) | #767 |
| FR-073 | Tier price locked at session start; mid-session catalogue changes don't apply to running session | MUST | 4 | 🟢 (`tier_price_per_hour_snapshot` + `currency_snapshot` captured at `Session.request_for`; survives later catalogue edits) | #767 |
| FR-074 | Platform-fault session ends: billed duration capped at last confirmed user activity timestamp; flagged for Operator | MUST | 4 | 🟢 (`mark_platform_fault` caps at `last_input_at`) | #767 |

### 5.9 Storage Billing (SRS §4.2)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-080 | Persistent Home billed monthly per GiB-allocated, configurable per Org (default platform tariff) | MUST | 4 | 🟢 (`STORAGE_RATE_PER_GIB_MONTH` env-overridable, default `0.10` EUR; per-Org override via Operator is the v2 hook) | #767 |
| FR-081 | Allocation changes billed pro-rata to the calendar day they take effect | MUST | 4 | 🟢 (walks `StorageAllocationEvent.effective_from` chain; 7 unit tests including mid-month create/grow/destroy) | #767 |
| FR-082 | Unit of measurement is allocated size, not actual used bytes | MUST | 4 | 🟢 (`new_size_gib` from event chain, not block-device usage) | #767 |
| FR-083 | Monthly storage invoice line itemised per End User with GiB-days at each tier and resulting amount | MUST | 4 | 🟢 (Owner BillingCard storage section + by_end_user breakdown) | #767 |

### 5.10 Audit Logging (SRS §4.3)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-090 | Every session writes a structured audit record (session_id, org_id, user_id, tier, price snapshot, container_id, timestamps, end_reason, billed_hours, final amount) | MUST | 2 (schema) / 3 (write) | 🟢 (Session row itself is the audit record; sha256 hash chain per EndUser written on close; Owner-side SessionAuditCard verifies the chain in-place; Decimal-roundtrip canonical_payload bug fixed) | #765, #766 |
| FR-091 | During running session, heartbeat record at least once per minute capturing state, last input, CPU/mem samples | MUST | 3 | 🟢 (POST `/api/v1/sessions/{id}/heartbeat/`; browser tab pings every 30 s while visible, append-only `SessionHeartbeat` rows; 7 API tests) | #766 |
| FR-092 | Every allocation change writes audit record (actor identity + IP + user-agent, target user, old/new GiB, effective_from, reason) | MUST | 2 | 🟢 (`StorageAllocationEvent` row per CREATE/GROW/REASSIGN/DESTROY with actor + IP + UA + reason) | #765 |
| FR-093 | Audit records are append-only; corrections via compensating records that reference the original | MUST | 2 | 🟢 (`save()` rejects existing-pk; `delete()` rejects unconditionally; admin disables Add/Delete) | #765 |
| FR-094 | Audit records retained ≥ 7 years (configurable); storage independent of operational DB | MUST | 2 | 🟢 (append-only enforced at model layer; `qgis_cloud_desktop.db_router.AuditDatabaseRouter` sends `AuditDailyRoot` rows to whatever `DATABASES` alias `QCD_AUDIT_DATABASE` names — default 'default' is a no-op so existing installs don't migrate, production sets `QCD_AUDIT_DATABASE=audit`) | #765 |
| FR-095 | Each daily audit batch hash-chained to the previous (Merkle-style) so tampering is detectable | SHOULD | 4 | 🟢 (FR-095 `AuditDailyRoot.aggregate_for(date)` computes per-day SHA256 over StorageAllocationEvent + Session audit_hash chains, persists prior_root for forward verification; celery beat `qcd.aggregate_audit_daily_root` runs at 01:00 UTC; `aggregate_audit_daily_root` mgmt cmd supports `--date` + `--catch-up` for back-fills; `verify_chain()` walks prior_root forward to detect tampering) | #767 |
| FR-096 | Operator can run reconciliation report for any billing period; recomputes invoice from audit log; flags drift | MUST | 4 | 🟢 (FR-096 `ErpInvoicePush.reconcile()` re-pulls the remote Sales Invoice, compares `grand_total` to `local_total_amount`, flips status to `reconciled_drift` past the 0.01 threshold and emits a structured `erp.reconcile.drift` log line for FR-097) | #767 |

### 5.11 Itemized Billing Presentation (SRS §4.4)

| ID | Requirement (summary) | Level | Phase | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| FR-100 | Org Owner can view itemised monthly statement: per-user compute hours per tier, storage GiB-days, amounts | MUST | 4 | 🟢 (Owner BillingCard with by-EndUser + by-Tier breakdowns + month picker) | #767 |
| FR-101 | Each line expandable to underlying sessions / allocation changes with audit IDs | MUST | 4 | 🟢 (FR-101 each per-user row on the BillingCard surfaces an "Audit ▸" link; OrganisationDetail hoists the filter, scrolls to the audit anchor, and passes it as `?end_user=<pk>` to both `OrganisationStorageAuditView` and `OrganisationSessionAuditView`; cards show a "Filtered to X" chip with a Clear button) | #767 |
| FR-102 | Statements exportable to CSV and PDF | MUST | 4 | 🟢 (CSV via `OrganisationBillingCsvView` at `/api/v1/organisations/<id>/billing.csv`; PDF via `OrganisationBillingPdfView` using weasyprint + `templates/qgis_cloud_desktop/billing/statement.html`; Owner BillingCard exposes both as separate "CSV" / "PDF" download buttons) | #767 |
| FR-103 | Org Owner can set soft per-user monthly budget; notifications at 80% / 100%; does not block sessions in v1 | SHOULD | 6 | 🟢 (FR-103 `EndUser.monthly_budget` + `monthly_budget_currency`; `BudgetCard` Progress strip with 80% warning + 100% error bands; helper messaging that v1 still allows sessions and asks the Owner to disable or extend the cap; backend `EndUserViewSet.budget` action) | #769 |

---

## 6. Non-functional requirements — traceability

### 6.1 Security (SRS §8.1)

| ID | Requirement (summary) | Phase | Status | Issue |
| --- | --- | --- | --- | --- |
| NFR-001 | End User auth is passkey-only; no password fallback | 1 | 🟢 (no password field on EndUser; sign-in only via WebAuthn ceremony) | #764 |
| NFR-002 | All browser↔container traffic over TLS; VNC over WebSocket wrapped in TLS | 3 | 🔴 (waits on real container + production deployment) | #766 |
| NFR-003 | Persistent Home volumes encrypted at rest | 2 | 🔴 (waits on real provisioner + production storage choice) | #765 |
| NFR-004 | Secrets in secrets store; only per-session writer pulls them; never logged | 5 | 🟢 (FR-091 `services.vault.get_vault()` returns FileVaultAdapter (0o600 per-secret files, path-escape rejected) by default; `HvacVaultAdapter` swaps in when `VAULT_BACKEND=hvac` + `VAULT_ADDR` + `VAULT_TOKEN` are set; `apply_grant` writes the secret under `qcd/postgres-grants/...` and `revoke_grant_db` deletes it. PostgresInstance.admin_password is still plaintext — its move to Vault is its own follow-up issue) | #768 |
| NFR-005 | Cross-organization data isolation enforced at the data layer (RLS or scoped queries), not only UI | 1 | 🟢 (every Owner endpoint walks `OrganisationOwner` → cross-org returns 404; every EndUser endpoint scopes on `request.user`) | #764 |
| NFR-006 | Container escape mitigations: non-root user, restricted caps, per-session ephemeral host namespace | 3 | 🔴 (waits on real container) | #766 |

### 6.2 Performance and Capacity (SRS §8.2)

| ID | Requirement (summary) | Phase | Status | Issue |
| --- | --- | --- | --- | --- |
| NFR-010 | Click "Launch" → running session ≤ 60 s @ p95 (smallest tier, warm cluster) | 3 | 🔴 | #766 |
| NFR-011 | Design target 200 concurrent sessions in v1, horizontally scalable | 3 | 🔴 | #766 |
| NFR-012 | Audit ingestion sustains ≥ 10× peak session rate without back-pressure on user path | 4 | 🔴 | #767 |

### 6.3 Reliability (SRS §8.3)

| ID | Requirement (summary) | Phase | Status | Issue |
| --- | --- | --- | --- | --- |
| NFR-020 | Loss of compute node does not lose Persistent Home data | 2 | 🔴 | #765 |
| NFR-021 | Mid-session node loss reported within 30 s; session closed with `end_reason=platform_fault` | 3 | 🔴 | #766 |
| NFR-022 | Audit Store replicated; single-node loss does not lose audit data | 4 | 🔴 | #767 |

### 6.4 Observability (SRS §8.4)

| ID | Requirement (summary) | Phase | Status | Issue |
| --- | --- | --- | --- | --- |
| NFR-030 | Structured logs with session_id, organization_id, end_user_id where applicable | 2+ | 🟢 (FR-098 `qgis_cloud_desktop.logging.JsonLogFormatter` emits one JSON record per line with `extra={...}` keys preserved; gated by `QCD_JSON_LOGS=1` in prod settings) | #765, #766, #767 |
| NFR-031 | Metrics: active sessions, provisioning latency, session duration distribution, GiB allocated, failed sessions by end_reason | 3 | 🟢 (FR-097 `/api/v1/metrics/` Prometheus exposition: sessions by status / active gauge, EndUser by status, persistent homes total + alive + scheduled-destroy, storage GiB, postgres grants, audit daily roots + last-root age) | #766 |
| NFR-032 | Operator dashboard exposes the above per Organisation | 3 | 🟢 (FR-097 `/dashboard/operator` consumes `/api/v1/operator/dashboard/`; admin-only StatCards + status-distribution tables) | #766 |

### 6.5 Compliance and Retention (SRS §8.5)

| ID | Requirement (summary) | Phase | Status | Issue |
| --- | --- | --- | --- | --- |
| NFR-040 | Audit records retained ≥ 7 years | 2 | 🔴 | #765 |
| NFR-041 | Personal data deletable on request; billing-relevant identifiers retained pseudonymised in audit log | 6 | 🔴 | #769 |

---

---

## 6a. Open gaps between dev-demoable and production-ready

The dev-sandbox build at the current spec sync date supports the
full Owner + EndUser click-through path end-to-end (enrol → sign-in
→ launch a session → see live cost + monthly rollup → revoke a
passkey → audit-verify a hash chain → destroy / reassign a
PersistentHome → grant + revoke a PostgreSQL role). The gaps below
sit between that demoable state and a production deployment.

| Area | Gap | Phase | Why dev still works |
| --- | --- | --- | --- |
| Compute | Real Docker / kasm container provisioner — currently a daemon-thread `time.sleep(3)` stub that advances state machine | 3 | Portal renders a placeholder "kasmVNC viewport" card; the surrounding billing, audit and lifecycle code is real |
| Compute | kasmVNC URL exposure to the browser (new tab, not iframe) — 🟢 | 3 | Docker provisioner stores Session.kasm_url; EndUserPortal renders "Open QGIS Desktop ↗" button that opens it in a new tab via target="_blank" |
| Compute | Production cron — replace dev's `SESSION_SWEEPER_AUTOSTART` thread with celery beat | 3 | dev thread runs every 30 s |
| Billing | ERPNext invoice line push (FR-004 / FR-096 reconciliation against a real invoice) — 🟢 | 4 | Push + reconcile service + dedicated `ErpInvoicePush` ledger + monthly + daily celery beat jobs + Operator endpoints + 13 tests landed |
| Billing | CSV / PDF export (FR-102) | 4 | Card renders the table |
| Billing | Daily Merkle-style aggregation (FR-095) | 4 | Per-event chain is already tamper-detected |
| Postgres | Step 3 — actual CREATE ROLE / GRANT against the registered instance, pg_service.conf injection at container launch, Vault-backed secret storage, FR-061 N-hour revoke SLA — 🟢 | 5 | apply_grant + revoke_grant_db services + Vault adapter (file + hvac) + pg_service.conf renderer + tracking fields (applied_at, vault_path, apply_error) + celery tasks + mgmt cmd + 13 tests landed |
| Identity | Email delivery of **sign-in** links — currently copy/paste from the Owner's clipboard. Enrolment email shipped 2026-06-07. | 1 | URL is shown in a toast; Django 302 rescues fragment-stripped URLs |
| Identity | WebAuthn step-up UI gate on sensitive Owner actions | 1 | Server enforces step-up TTL on EndUser self-service; Owner-side prompt is the missing UX |
| Lifecycle | Org-archive cascading session/grant/home fan-out (FR-061) | 6 | Org archive flag exists; the fan-out is the gap |
| Lifecycle | Cross-Customer Organisation transfer (FR-005) — 🟢 | 6 | Transfer + rollback service + audit ledger + mgmt cmd + Operator endpoints + 8 tests |
| Lifecycle | EndUser delete wizard wrapping the three retention choices (FR-060) | 6 | Each choice works individually |
| Ops | Per-Operator dashboard (NFR-032), Prometheus metrics (NFR-031), structured JSON log formatter (NFR-030) — all 🟢 (FR-097, FR-098) | 3 | Three landed together; UI under /dashboard/operator, scrape at /api/v1/metrics/, JSON logs on QCD_JSON_LOGS=1 |
| Quality | Cross-org passkey-listing test failure in `tenant_management.tests.test_nested_passkeys` (one pre-existing case) | 1 | All other 80 backend tests green |
| Quality | Frontend tests — no Jest / RTL coverage on the new cards | 1+ | Manual click-through is the current safety net |
| Quality | React top-level error boundary so one bad card degrades gracefully instead of blanking the dashboard | 1+ | Bit us once; mitigated by being careful with `<FormHelperText>` nesting |

---

## 7. Open questions (must be resolved before later phases)

The following items are quoted verbatim from SRS §10.3 — they need product
decisions before the affected phase commits.

| # | Question | Blocks phase |
| --- | --- | --- |
| 1 | Default idle timeout (proposed 30 min) and max session length (proposed 12 h) — confirm or change | 3 |
| 2 | Currency model — single currency per Customer or per Organisation? | 4 |
| 3 | Require credit check / payment-method-on-file at Organisation level before any End User can launch a session? | 3 |
| 4 | Whether End Users may see their own past sessions and accumulated time (informational), or whether all visibility sits with the Org Owner | 3 |
| 5 | Pricing tariff for storage — flat per-GiB-month, or tiered by size? | 4 |
| 6 | Network access from the QGIS container — open egress, allow-list, or per-organization egress proxy? | 3 |

## 8. Cross-cutting acceptance criteria (SRS §10.2)

These must hold once all MUST items in §5 are implemented. The implementation
is not "done" until each of these is automated:

1. All MUST FRs implemented and covered by automated tests.
2. Reconciliation report for any past day matches what was actually billed, to the cent.
3. 100-session simulated soak test: zero billing drift, zero orphaned containers, zero orphaned volumes.
4. Disabled user cannot start a session; active session for a disabled user terminates within 60 s.
5. Persistent Home reassigned away from a user cannot be remounted on that user's next session.
6. `pg_service.conf` entry appears in the user's home within 5 s of session start when linkage is active, with correct ownership and mode 0600.

---

## 9. Living-document policy

- Every PR that implements a requirement must flip the relevant Status cell in §5/§6 from 🔴 to 🟡 (in progress) or 🟢 (done) and update the **Issue** column if a more specific sub-issue applies.
- Every PR that changes a requirement must update both this file and the canonical SRS at `srs/v0.3/` in the same commit (or open a new SRS version directory if the change is significant).
- The traceability table is the source of truth for what is built; the SRS is the source of truth for what was agreed.

---

## 10. Affiliate Programme (in development)

The GSH Affiliate Programme is a separate product module delivered inside this
same Django project. Authoritative requirements live in
`GSH_Affiliate_Programme_SRS_v0_1.docx`; this section grows as work packages
land. Tracking lives in the **Affiliate Programme v1** milestone with issues
`#780`–`#817`.

### 10.1 Module scope

Partner referrals, resale and certified-training delivery across GSH services
(QGIS Cloud Desktop, hosted PostgreSQL / GeoServer / GeoNode / G3W) and
Kartoza training (asynchronous, blended, hands-on). Two partner tracks —
click-and-go resellers and fully-vetted certified trainers — with lifetime
tiered commissions, embeddable sales packs, partner + Kartoza dashboards,
monthly payouts and a dedicated support channel. See SRS §1–§3 for full
detail.

### 10.2 App layout

The module lives in `django_project/affiliates/`, mounted at
`/api/v1/affiliates/`. It mirrors the layout of `qgis_cloud_desktop` and
`tenant_management`: `models/`, `api/`, `admin/`, `serializer/`, `tests/`,
`migrations/`, plus an `urls.py` and `apps.py`. Cross-app FKs flow from
`affiliates` outward to `geohosting`, `tenant_management` and
`qgis_cloud_desktop`; those apps stay free of affiliate concepts beyond
recording the source marker on referred customer accounts.

### 10.3 Delivery plan

Five phases follow the SRS §10.1 work-package decomposition:

| Phase | Milestone | Tickets | Goal |
| --- | --- | --- | --- |
| P1 — Foundations | M1 Attribution live | `#780`–`#794` | App + Affiliate lifecycle + referral codes + click capture + last-click attribution + commission ledger + clawback |
| P2 — Portal | M2 Portal beta | `#795`–`#800` | Embed widget + asset library + affiliate portal SPA module + personal dashboard |
| P3 — Money | M3 Payout dry-run | `#801`–`#808` | Payout worker + multi-currency / tax + statements + dispute flow + Kartoza BI dashboard + support queue |
| P4 — Trainer | M4 Trainer track opens | `#809`–`#812` | Trainer certification course + public registry + delivery fees + training referrals |
| P5 — Launch polish | M5 Public launch | `#813`–`#817` | CoC enforcement + RBAC / admin config + GDPR/POPIA erasure + i18n + performance |

### 10.4 Delivery state (as of 2026-06-16)

All MUST- and SHOULD-tier requirements from
`GSH_Affiliate_Programme_SRS_v0_1.docx` have shipped on the
`affiliates` branch; FR-085 / FR-104 / FR-105 (MAY-tier) are
backend-complete with minimum-viable UI surfaces. Full punch
list:

| FR | Surface | Status |
| --- | --- | --- |
| FR-001..009 | Affiliate lifecycle (apply → screening → active → enforcement ladder) | ✅ Backend + portal + operator screens |
| FR-008 | Trainer certification renewal request | ✅ `MeCertificationRenewView` + trainer card |
| FR-010..016 | Training course catalogue + completion + cert discount + fast-track | ✅ Public catalogue, voucher enquiry, completion endpoint |
| FR-020..025 | Referral codes (default/channel/voucher) + CoC-acceptance gating | ✅ Per-channel issuance, voucher cohort metadata |
| FR-030..037 | Click capture, attribution, cookie consent, voucher redemption | ✅ Anonymous `/clicks/`, consent banner, training voucher path |
| FR-040..047 | Sales-pack assets, partner portal, operator admin | ✅ List, download tracking, operator CRUD with multipart upload |
| FR-050..055 | Partner KPIs + funnel + notifications | ✅ Dashboard + auto-emit (`first_conversion`, `payout_issued`, `clawback_applied`, `document_expiring`); celery beat daily at 06:00 UTC |
| FR-060..066 | Operator BI (programme + product + leaderboard + geography + retention + activation) | ✅ Programme cube, time-windowed BI, geography window, retention cohort matrix, partner-activation distribution |
| FR-064 | Drill-down CSVs | ✅ `bi/programme.csv` + `bi/ledger.csv` exposed via Export buttons |
| FR-070..076 | Payouts, tax engine, withholding disclosure | ✅ Proposals/approve/hold/cancel, multi-currency settlement, withholding banner |
| FR-080..085 | Support tickets, KB, partner community link | ✅ Tickets API + UI, KB articles, `AFFILIATE_COMMUNITY_URL` surfaced in sidebar |
| FR-090..097 | CoC + Agreement + Brand-fit docs, re-acceptance, enforcement | ✅ Public-read endpoint, modal viewer, re-acceptance banner, three starter drafts seeded |
| FR-094 | Appeals workflow + distinct reviewer | ✅ `Appeal` model + portal raise/withdraw + operator queue + `IsAppealsReviewer` permission + 30-day SLA |
| FR-100..105 | Cross-product attribution, statements, co-marketed cohorts, bundles | ✅ Statements (PDF/JSON), `CoMarketedCohortRequest` model + endpoints, `TrainingCourse.bundle_credit_amount` |
| FR-110..113 | RBAC, screening checklist, role admin, audit trail | ✅ Group-based permissions, per-application checklist with reviewer trail, `/operator/roles` admin, hash-chained `ProgrammeAuditLog` |

### 10.5 Endpoint surface

Routes mounted under `/api/v1/affiliates/` (public + partner +
operator) plus the cross-cutting `/api/v1/platform/pulse/*` admin
surface in `tenant_management.urls`. The full route list lives
in `affiliates/urls.py`; highlights:

- **Public** — `/clicks/`, `/codes/<code>/validate/`,
  `/applications/{reseller,trainer}/`,
  `/coc-documents/current/`, `/trainers/`, `/courses/`,
  `/courses/<slug>/voucher-enquiry/`.
- **Partner self-service** — `/me/*` (profile, dashboard,
  payouts, statements, snippets, referral codes, deliveries,
  voucher codes, certifications + renewal request, notifications,
  CoC status + accept, appeals, co-marketed cohort requests).
- **Operator** — `/affiliates/<pk>/{warn,clear-warning,suspend,
  reinstate,terminate,erase,screening,screening/<kind>/decide,
  screening/approve}/`,
  `/payouts/<pk>/{approve,hold,cancel}/`,
  `/disputes/<pk>/{assign,resolve}/`,
  `/quarantined-attributions/<pk>/{release,reject}/`,
  `/coc-documents/`, `/rate-schedules/`, `/kb-articles/`,
  `/training-courses/`, `/sales-pack/assets/`, `/config/`,
  `/operator/{roles,appeals,summary,co-marketed-cohorts}/`,
  `/bi/{programme,timeseries,geography,quality,fraud,retention,
  activation}/`, `/audit-log/`.

### 10.6 Settings

- `AFFILIATE_COMMUNITY_URL` — optional. When set, the partner
  portal sidebar surfaces a "Partner community ↗" link. Blank in
  prod hides the link entirely.
- `AFFILIATE_COOKIE_NAME` / `AFFILIATE_COOKIE_TTL_DAYS` — first-
  party attribution cookie (default `gsh_ref`, 90 days).
- `AFFILIATE_FX_PROVIDER` — dotted-path callable for settlement
  FX. Defaults to a "must be configured" stub so missing config
  is loud, not silent.
- `STORAGE_RATE_PER_GIB_MONTH`, `STORAGE_CURRENCY` — drive the
  Platform-pulse storage-revenue accrual estimate.

### 10.7 Celery beat schedule

- `affiliates.notify_expiring` — daily at 06:00 UTC. Sweeps
  TrainerCertification.valid_until and CoC re-acceptance gaps;
  emits FR-055 DOCUMENT_EXPIRING notifications. Dedupes via
  metadata.dedupe_key over a 90-day window so re-runs are
  idempotent.

### 10.8 Mock-data tooling

`nix run .#seed-test-data` stands up the affiliate-programme test
world (programme manager / finance / fraud groups, demo
reseller, demo trainer with cert + delivery, accrued + paid
commission, dispute, statement, BI cube).

`nix run .#seed-platform-pulse` stands up the cross-app demo
world (6 live-site products with three size sub-SKUs, 220
backdated sales orders, 120 mock orgs + persistent homes, 200
finished QGIS-CD sessions, 14 days of clicks + conversions).
