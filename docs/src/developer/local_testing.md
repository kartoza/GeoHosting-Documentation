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

# Local testing

This branch consolidates PR #770 (rename + tenant management), PR #771 (WebAuthn), and the Phase 2 work (MachineTier + PersistentHome + storage audit) into a single tree, plus the `nix run` tooling you need to actually run the Django app on your machine.

**No Docker is used for the dev infrastructure.** Postgres runs as a flake-managed process from a local cluster directory. Docker is reserved for simulating user-deployed workloads (the QGIS-in-VNC container, the legacy GeoNode/GeoServer instances) — the kind of thing production provisions via Jenkins.

## TL;DR

```bash
nix develop                # enter the dev shell (gives you psql, gh, etc.)
nix run .#init             # initialise db + venv + migrate + load fixtures + admin
nix run .#serve            # http://localhost:8000
```

Stop / inspect / wipe:

```bash
nix run .#db-stop          # stop the local Postgres
nix run .#db-status        # is it running?
nix run .#db-shell         # psql into the dev database
nix run .#db-delete -- --yes   # nuke the local cluster (destructive)
```

## The `nix run` apps

### Postgres lifecycle

All apps operate on a single local cluster at `.postgres-data/` (gitignored). No Docker, no system-level service.

| App | Effect |
| --- | --- |
| `nix run .#db-init` | `initdb`, configure listen on `127.0.0.1:5432`, create `docker` superuser, create `django` database, enable PostGIS. Idempotent — bails if cluster exists. Invoked automatically by `db-start` on first run. |
| `nix run .#db-start` | `pg_ctl start`. Calls `db-init` first if there's no cluster. |
| `nix run .#db-stop` | `pg_ctl -m fast stop`. Idempotent. |
| `nix run .#db-restart` | `pg_ctl restart`. |
| `nix run .#db-status` | `pg_ctl status` + `pg_isready`. |
| `nix run .#db-shell` | `psql` connected as `docker` to `django`. |
| `nix run .#db-delete -- --yes` | Stop + `rm -rf .postgres-data/`. Requires explicit `--yes`. |

### Django

| App | Effect |
| --- | --- |
| `nix run .#manage -- <args>` | Wrapper for `python manage.py <args>`. |
| `nix run .#migrate` | Apply migrations. |
| `nix run .#loaddata` | Load `initial_machine_tiers` (Small / Medium / Large). |
| `nix run .#serve` | `python manage.py runserver 0.0.0.0:8000`. |
| `nix run .#shell` | Django shell. |
| `nix run .#test` | Runs the `tenant_management` and `qgis_cloud_desktop` test suites by default; pass args to scope (`nix run .#test -- tenant_management.tests.test_passkey_self_service`). |
| `nix run .#check` | `python manage.py check`. |
| `nix run .#seed-test-data` | Idempotent seed of the affiliate programme: promotes admin to the three role groups, creates `reseller_demo` + `trainer_demo` users, accrues commission against a referred customer, runs a payout end-to-end (statement + invoice), schedules + completes a training delivery, and rebuilds the BI cube. See [Seed the affiliate programme](#seed-the-affiliate-programme) below. |
| `nix run .#seed-platform-pulse` | Idempotent seed of **mock platform data** so `/#/platform` renders with realistic numbers — 6 live-site products (GeoNode, GeoServer, G3W, PostGIS, GeoSight, FileBrowser) with three sub-SKU tiers each, 60 backdated user signups across 24 months, 220 historic SalesOrders + Subscriptions (~80% active, ~20% cancelled), 25 mock Organisations + EndUsers + PersistentHomes, 200 finished QGIS-CD sessions. Pass `-- --reset` to wipe and reseed. See [Seed the Platform pulse mocks](#seed-the-platform-pulse-mocks) below. |

### Frontend (webpack)

The legacy `/` page (React SPA) renders through `webpack_loader` — it needs `geohosting/assets/webpack_bundles_dev/webpack-stats.json`. Django admin and the new `/api/v1/` endpoints don't.

| App | Effect |
| --- | --- |
| `nix run .#frontend-build` | `yarn install` (first run) + `yarn dev` — one-shot webpack build. |
| `nix run .#frontend-watch` | `yarn dev-watch` — rebuilds bundles on file change. Run alongside `nix run .#serve` in a second terminal. |

**You don't need the frontend built to inspect the Phase 1 / Phase 2 work** — go straight to `http://localhost:8000/admin/`.

### Composite

| App | Effect |
| --- | --- |
| `nix run .#init` | One-shot: start db + create venv + `pip install` the pip-only leftovers + migrate + loaddata + create admin user. |
| `nix run .#dev` | `init` then `serve` in one call. |

## How the env vars are wired

Every app sources `scripts/local-env.sh`, which sets defaults *if not already exported* — so you can override anything for one invocation:

```bash
DATABASE_PORT=15432 nix run .#db-start
WEBAUTHN_RP_ID=acme.test nix run .#serve
```

Defaults that ship:

| Variable | Default |
| --- | --- |
| `DJANGO_SETTINGS_MODULE` | `core.settings.dev` |
| `SECRET_KEY` | `dev-secret-not-for-production` |
| `DEBUG` | `True` |
| `DATABASE_ENGINE` | `django.contrib.gis.db.backends.postgis` |
| `DATABASE_NAME` | `django` |
| `DATABASE_USERNAME` / `DATABASE_PASSWORD` | `docker` / `docker` |
| `DATABASE_HOST` / `DATABASE_PORT` | `127.0.0.1` / `5432` |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD` / `ADMIN_EMAIL` | `admin` / `admin` / `admin@example.com` |
| `WEBAUTHN_RP_ID` | `localhost` |
| `WEBAUTHN_EXPECTED_ORIGIN` | `http://localhost:8000` |

External integrations (Stripe, Paystack, ERPNext, the Jenkins proxy) are *not* defaulted — set them when you actually need them.

## Pip-only leftovers

A handful of packages aren't in `nixpkgs`: `django-rest-knox`, `paystackapi`, `markdown-pdf`, `uuid7`, the Kartoza `django-docs-crawler`. They live in `deployment/docker/requirements-pip-only.txt` and are pip-installed into `.venv/` automatically by `nix run .#init`. The `nix run` apps add the venv's `site-packages` to `PYTHONPATH` if it exists, so the wrapper python sees them without you needing to activate the venv.

## Docker — what stays, what doesn't

| Use case | Where it runs |
| --- | --- |
| Dev infrastructure (Postgres, Django, Celery worker, …) | **Flake / `nix run`** |
| User-deployed workloads (QGIS-in-VNC sessions, GeoNode / GeoServer instances) | **Docker images** on different host ports for local dev; Jenkins-orchestrated in production |
| Production deployment of the platform itself | `deployment/docker-compose.yml` (unchanged) |

The user-workload docker provisioning is not yet implemented here — for Phase 1+2 we only need the dev infrastructure. Phase 3's session lifecycle adds the per-EndUser QGIS container; that's the first thing that'll pull Docker into the runtime path on a developer machine.

## Common workflows

### First-time bring-up

```bash
nix develop
nix run .#init
nix run .#serve
```

Then in a browser hit `http://localhost:8000/admin/` and log in as `admin / admin`.

### Daily

```bash
nix run .#db-start         # if you stopped it
nix run .#serve
```

### Run the new app tests

```bash
nix run .#test
```

Default is `tenant_management qgis_cloud_desktop` — narrow it with a positional arg:

```bash
nix run .#test -- tenant_management.tests.test_passkey_self_service
nix run .#test -- qgis_cloud_desktop.tests.test_storage_allocation_event
```

### Reset the local database

```bash
nix run .#db-delete -- --yes
nix run .#init
```

### Open a psql shell

```bash
nix run .#db-shell
```

### Seed the affiliate programme

Once the DB is up and the admin user exists, drop a working dataset into the affiliate programme so the portal endpoints have something to read:

```bash
nix run .#seed-test-data
```

The command is **idempotent** — safe to re-run after schema changes, after a `db-delete`, or just to top up. Re-running won't duplicate the existing users / accruals.

It writes:

- **admin → all three role groups.** The superuser gets added to `programme_manager`, `finance_approver` and `fraud_reviewer` so you can hit every staff-only endpoint without juggling sessions.
- **CoC + Agreement v1.0** published (no-op if they exist).
- **`reseller_demo`** (pwd: `reseller-demo-pass`) — active reseller affiliate with a default referral code, a referred customer ("Acme Holdings (test)"), three accrued `CommissionEntry` rows, an `Approved` `PayoutProposal` and an immutable `PayoutStatement` + Kartoza self-billing invoice.
- **`trainer_demo`** (pwd: `trainer-demo-pass`) — active certified-trainer affiliate, public-registry opt-in, an approved QGIS `TrainerCertification`, a `TrainingCourse` ("qgis-cert"), a delivered `TrainingDelivery` with three student feedback rows (avg ~4.7/5), and a voucher code with cohort metadata.
- **BI cube rebuilt** for the current month — `ProgrammeCubeRow` rows populated so `/api/v1/affiliates/bi/programme/` returns non-zero numbers.

To target a non-default superuser:

```bash
nix run .#seed-test-data -- --admin-username my-user
```

After seeding, quick smoke calls:

```bash
# Affiliate dashboard
curl http://localhost:8000/api/v1/affiliates/me/dashboard/ \
     -u reseller_demo:reseller-demo-pass

# Public trainer registry (anonymous)
curl http://localhost:8000/api/v1/affiliates/trainers/

# Kartoza BI snapshot
curl http://localhost:8000/api/v1/affiliates/bi/programme/ \
     -u admin:admin
```

Browse the seeded rows in the admin at `http://localhost:8000/admin/affiliates/`.

### Seed the Platform pulse mocks

`nix run .#seed-test-data` covers the affiliate-programme objects. The **Platform pulse** dashboard at `/#/platform` reads from a wider slice of the platform (products, packages, subscriptions, signups, persistent homes, QGIS-CD sessions). To make those numbers non-zero on a fresh database, run:

```bash
nix run .#seed-platform-pulse
```

This is **idempotent** — every row carries a stable marker (`pulse_mock_*` usernames, `pulse-mock-org-*` slugs, `mock-<epoch>` order app-names / session container ids) so re-running tops up only what's missing. Pass `-- --reset` to wipe every previously-seeded mock before reseeding (it only touches rows it stamped — your real data is left alone):

```bash
nix run .#seed-platform-pulse -- --reset
```

It writes:

- **6 products** mirroring the live GSH catalogue: GeoNode, GeoServer, G3W, PostGIS, GeoSight and FileBrowser (add-on). Each has three sub-SKU **Packages**: Small / Medium / Large, priced from a believable EUR base with a per-tier multiplier (1.0 / 2.2 / 4.5). So 18 packages total.
- **60 backdated user signups** (`pulse_mock_NNNN` usernames) evenly spread across the last 24 months so the year-over-year **Period performance** comparison (this month / quarter / year vs same windows last year) has data to compare.
- **220 historic SalesOrders + Subscriptions** across the same 24 months. ~80% are active subscriptions (their `current_period_end` rolls forward to future); ~20% are cancelled, with `current_period_end` landing in one of the period windows so the cancellation YoY metric shows non-zero numbers.
- **25 mock Organisations** + EndUsers + PersistentHomes with a mixed GiB size distribution (3 → 150 GiB). Drives the **Storage billing** sub-tab: live total, size bands (Small / Medium / Large), top-orgs by allocated GiB, and the monthly-accrual estimate at the configured `STORAGE_RATE_PER_GIB_MONTH`.
- **3 MachineTier rows** (Small / Medium / Large @ 0.45 / 0.95 / 1.85 EUR per hour) and **200 finished QGIS-CD Sessions** across the last 35 days with `billed_seconds` + tier-price snapshots. Drives the **By-the-hour usage** sub-tab: running-now counts per tier, hours billed this month, and the rolling revenue total.

Use `--seed N` to pick the RNG seed for deterministic mock data (default `42`):

```bash
nix run .#seed-platform-pulse -- --seed 123
```

To see the result:

1. Visit `http://localhost:8000/#/platform`.
2. Confirm the reveal gate ("Reveal live platform data?") — your acknowledgement is remembered until you close the tab.
3. Walk through the secondary tabs in the left dashboard sidebar: **Overview**, **Per product** (drill into any), **Storage billing**, **By-the-hour usage**.

If a tab shows zeros, check that the underlying queryset isn't filtered out by an `available=False` flag or an `is_active=False` Subscription state — re-running with `-- --reset` gives a clean slate.

#### Wiping mock data without `--reset`

The seed leaves stable markers so you can also remove the data piecemeal from the Django shell:

```python
# nix run .#shell
from django.contrib.auth import get_user_model
from geohosting.models import Organisation
from geohosting.models.sales_order import SalesOrder
from geohosting.models.subscription import Subscription
from qgis_cloud_desktop.models import PersistentHome, Session

User = get_user_model()
Session.objects.filter(container_id__startswith='mock-').delete()
PersistentHome.objects.filter(
    end_user__email__startswith='eu',
    end_user__email__endswith='.mock.local',
).delete()
Subscription.objects.filter(subscription_id__startswith='pulse_mock_sub_').delete()
SalesOrder.objects.filter(app_name__startswith='mock-').delete()
Organisation.objects.filter(slug__startswith='pulse-mock-org-').delete()
User.objects.filter(username__startswith='pulse_mock_').delete()
```

Products + Packages stay (they're shared with the real catalogue surface) — drop them via Django admin if you need a clean catalogue.

## Things that haven't been built yet

- A frontend dev server (`yarn dev` etc.) — the React/TS work hasn't started. `nix run .#serve` only runs the Django backend.
- Celery beat / worker — they don't auto-start. If you need them, run `nix run .#manage -- celery worker` etc. from a separate terminal.
- User-workload Docker provisioning — the abstraction that, given an image and a port, brings up a per-EndUser container locally. To be added when Phase 3 session lifecycle work begins.
