---
title: Documentation
summary: GeoHosting Controller
author: Lindie Strijdom
date: 2026-10-21
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Quickstart: 5-Minute Tutorial

Ready to get started with QGIS Cloud Desktop? This guide walks you through launching your cloud desktop, opening QGIS, accessing your files, and connecting to PostgreSQL/PostGIS if a database has been assigned to you.

If you have not signed in before, first follow [First Log In & Setting Your Password](./first_login.md).

<br>

## Before You Begin

Make sure that:

- Your Organisation Owner has granted you *QGIS Cloud Desktop access*.
- You have registered your *passkey* and can sign in to the Portal.
- You know which *desktop image* to use for your workflow.
- If you need a *PostgreSQL/PostGIS connection*, your Organisation Owner has assigned a database to you.

<br>

## Step 1: Sign In and Launch

Sign in to the portal to start your QGIS Cloud Desktop session.

1. Open the <span class="ui-page-label">QGIS Cloud Desktop Portal</span>.
2. Sign in using your email address, organisation identifier, and registered passkey.
3. Under **Launch a QGIS session**, select an available desktop image, such as *Generic*.
4. Click <span class="ui-generic-label">Launch QGIS Cloud Desktop</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-15.png" alt="Sign In and Launch">
</div>

<br>

## Step 2: Open QGIS Cloud Desktop

The platform will provision your desktop session. This usually takes approximately **5-10 minutes**.

1. Wait until the session status changes to `RUNNING`.
2. Click <span class="ui-generic-label">Open QGIS Desktop ↗</span> in the Portal.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-16.png" alt="Open QGIS Cloud Desktop">
</div>

<br>

## Step 3: Start Working in QGIS

Open QGIS from the desktop environment.

1. From the top nav-bar, select the <span class="ui-generic-label">QGIS</span> icon.
2. Go to the top menu and select <span class="ui-generic-label">Project > New</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-17.png" alt="Start Working in QGIS">
</div>

<br>

You can use QGIS Cloud Desktop to:

- Create and edit QGIS projects.
- Open spatial datasets and add layers to a map.
- Run geoprocessing tools and spatial analysis.
- Work with files and scripts stored in your home folder.
- Connect to PostgreSQL/PostGIS databases when access has been granted.

<br>

### Your Persistent Home Folder

Your home folder is retained between desktop sessions. The desktop session itself is temporary, so save your work in your persistent home folder rather than relying on temporary locations.

Use it to store your working files, including:

- QGIS projects (`.qgz` and `.qgs`)
- Spatial datasets and exported results
- Scripts and configuration files
- Documents and other project resources

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-18.png" alt="Persistent Home Folder">
</div>

<br>

## Step 4: Connect to PostgreSQL

If your Organisation Owner has assigned a PostgreSQL/PostGIS connection, the required service configuration should already be available in your home folder.

The configuration is stored in a file named `pg_service.conf`. It contains the connection settings needed by PostgreSQL clients, including QGIS.

<br>

To connect from QGIS:

1. Open the <span class="ui-page-label">Data Source Manager</span>.
2. Select <span class="ui-generic-label">PostgreSQL</span>.
3. Create a **New Connection**.
4. Enter a connection name that matches the database's registered service name.
5. Test the connection and save it.

You should not need to manually enter the database host, port, username, password, or TLS settings when using the supplied service configuration.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-19.png" alt="Connect to PostgreSQL">
</div>

<br>

For more information about registering a database and granting access, see [Assign a Database](./other_tools.md).

<br>

## Step 5: End Your Session

When you have finished working:

1. Save your QGIS project and any other files in your persistent home folder.
2. Return to the <span class="ui-page-label">QGIS Cloud Desktop Portal</span>.
3. Click <span class="ui-generic-label">End session</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-20.png" alt="End Your Session">
</div>

<br>

Ending your session stops the cloud desktop host and prevents further host charges. Your persistent home folder remains available, but storage charges continue while the storage volume is allocated.

Remember that desktop usage is billed according to the selected machine tier, with a minimum charge of one hour per session. Check the current pricing information before starting longer sessions.

<br>

---

**Next up:** You have now completed the basic QGIS Cloud Desktop workflow. Next, we'll show you how to assign a database.

<br>
