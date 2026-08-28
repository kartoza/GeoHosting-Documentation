---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
date: 2026-08-28
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# QGIS Cloud Desktop

QGIS Cloud Desktop gives your End Users a full QGIS Desktop session running in the browser, with a persistent home folder and (optionally) a pre-configured PostgreSQL/PostGIS connection. This guide walks through the whole flow: an Organisation Owner creating an End User and granting access, registering and assigning a database, and the End User signing up and launching their first session.

## 1. Create an End User and grant QGIS access

Sign in to the GeoSpatialHosting dashboard and open your Organization.

![Organizations page](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/01%20-%20organisations%20page.png)

From the Organization detail page, open the **QGIS Cloud Desktop** tab. This page lists your End Users and their QGIS Cloud Desktop sessions.

![QGIS Cloud Desktop page](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/02%20-%20QGIS%20cloud%20page.png)

Click **Add End User** and fill in their email and display name, then click **Create End User**.

![Add End User](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/03%20-%20Add%20End%20User.png)

The new End User is created with status `INVITED`. Click the link icon in their row to **copy the enrolment link**, then send it to them (email, chat, etc.) so they can register their passkey — see [End User: enrol, sign in and launch a session](#3-end-user-enrol-sign-in-and-launch-a-session) below.

![Copy enrolment link](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/04%20-%20Copy%20enrolment.png)

Click the End User's name to open their detail page.

![Click End User](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/05%20-%20Click%20End%20User.png)

Under **QGIS Cloud Desktop access**, pick the **Machine tier** (compute size) and **Initial storage (GiB)** for their persistent home, then click **Grant QGIS Cloud Desktop**. Storage is pro-rated monthly and can be grown later, but not shrunk.

![Grant user QGIS access](./img/01%20-%20Create%20enduser%20and%20grant%20qgis/06%20-%20Grant%20user%20qgis.png)

## 2. Assign a database

Still on the Organization's **QGIS Cloud Desktop** page, scroll to **PostgreSQL instances** and click **Register PostgreSQL**.

![Go to PostgreSQL section](./img/02%20-%20Assign%20database/01%20-%20Go%20to%20postgresql%20section.png)

You have two options:

- **Type connection details in manually** — enter Name, Database, Host, Port, Admin user, Admin password and TLS mode by hand. Use this for a PostgreSQL/PostGIS server that isn't hosted on the platform.
- **Use an existing PostGIS instance** — pick one of your own platform-managed PostGIS product instances from the dropdown. This is not an autofill: the connection details (host, credentials, ...) are resolved **server-side** from the instance you picked and are never sent to your browser. You only need to give the registration a **Name**.

![Registration form](./img/02%20-%20Assign%20database/02%20-%20Form.png)

Selecting a deployed PostGIS instance from the dropdown replaces the manual connection fields with just **Name** and **Notes**.

![PostGIS instance picked from deployed instances](./img/02%20-%20Assign%20database/03%20-%20postgis%20from%20deployed%20instance.png)

Click **Register**. The new PostgreSQL instance now appears in the table with its endpoint, admin user and TLS mode — the admin password itself is never shown here.

![Registration done](./img/02%20-%20Assign%20database/04%20-%20Registering%20done.png)

To grant an End User access to this database, go back to their detail page and scroll to **Database connections**.

![Go to End User page and database section](./img/02%20-%20Assign%20database/05%20-%20Go%20to%20End%20User%20page%20and%20database%20section.png)

Pick the PostgreSQL instance from the dropdown and click **Grant**. Most grants connect using the PostgreSQL instance's own admin credentials (shown as *"uses PostgreSQL instance's own username"*) rather than a dedicated per-user role.

![Granted](./img/02%20-%20Assign%20database/06%20-%20Granted.png)

## 3. End User: enrol, sign in and launch a session

The End User opens the enrolment link they received and picks a name for this device (e.g. "Linux passkey"), then clicks **Register passkey**. They can confirm with a hardware security key, their phone (via QR code), or a software passkey provider (e.g. a password manager extension) — whichever they have on hand.

![Register Passkey](./img/03%20-%20End%20User/01%20-%20Register%20Passkey.png)

The browser waits for the chosen authenticator to respond to the passkey challenge.

![Waiting for authenticator](./img/03%20-%20End%20User/02%20-%20Waiting%20authenticator.png)

Once the authenticator confirms, the passkey is registered and the End User can sign in.

![Passkey registered](./img/03%20-%20End%20User/03%20-%20Registering%20Passkey%20Success.png)

On the **Sign in** page, the End User confirms their email and the Organization's short identifier (usually a single word matching the organisation name), then clicks **Sign in with passkey** and confirms with the same authenticator.

![Sign in](./img/03%20-%20End%20User/04%20-%20Sign%20in.png)

They land on the QGIS Cloud Desktop Portal. Under **Launch a QGIS session**, they pick an image (e.g. "Generic") and click **Launch QGIS Cloud Desktop**.

![User desktop / Portal](./img/03%20-%20End%20User/05%20-%20User%20desktop.png)

The session is provisioned in the background — this usually takes 5–10 minutes. The End User can cancel from here if needed.

![Starting](./img/03%20-%20End%20User/06%20-%20Starting.png)

Once the session is `RUNNING`, the card shows the machine size, image, start time, billing rate (any part-hour is billed in full) and the auto-close deadlines (idle timeout and maximum session length).

![Launched](./img/03%20-%20End%20User/07%20-%20Launched.png)

Clicking **Open QGIS Desktop ↗** opens the desktop in a new tab, prompting for the username (their email) and a password. The password is fetched fresh via the **Get password** link on the Portal tab rather than being stored anywhere — it's read live from the platform's credential store on every request.

![Open QGIS Desktop asking credentials](./img/03%20-%20End%20User/08%20-%20Open%20qgis%20desktop%20asking%20credential.png)

After signing in, the End User reaches their QGIS Cloud Desktop — a full Linux desktop running in the browser, with their persistent home folder mounted.

![QGIS Cloud Desktop ready](./img/03%20-%20End%20User/09%20-%20QGIS%20Cloud%20Desktop%20Ready.png)

If a PostgreSQL instance was granted to them, a `pg_service.conf` file is already waiting in their home folder by the time the desktop starts, containing the connection's host, port, database, user, password and TLS mode.

![pg_service.conf is ready](./img/03%20-%20End%20User/10%20-%20pg_service_conf%20is%20ready.png)

Inside QGIS, the End User can create a new PostgreSQL connection using that same **Service** name (matching the database's registered name) — no manual host/credential entry required, and the connection tests successfully right away.

![PG connection ready in QGIS](./img/03%20-%20End%20User/11%20-%20PG%20Connection%20is%20ready%20on%20qgis.png)

When they're done, the End User returns to the Portal tab and clicks **End session** to stop billing and tear the session down.
