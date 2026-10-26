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

# Assign a Database

QGIS Cloud Desktop can connect to PostgreSQL/PostGIS databases hosted on GeoSpatialHosting or on external servers.

An Organisation Owner must first register the database connection and then grant access to the relevant End Users. Once access has been granted, QGIS Cloud Desktop makes the required connection configuration available inside the user's persistent home folder.

<br>

## Step 1: Open the PostgreSQL Instances Section

1. Sign in to the GeoSpatialHosting Dashboard.
2. Open your organisation.
3. Select the **QGIS Cloud Desktop** tab.
4. Scroll to the **PostgreSQL instances** section.
5. Click **Register PostgreSQL**.

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/01%20-%20Go%20to%20postgresql%20section.png" alt="Open the PostgreSQL instances section">
</div>

<br>

## Step 2: Register a Database Connection

You can register a PostgreSQL/PostGIS database in one of two ways.

### Option A: Enter connection details manually

Use this option for a PostgreSQL/PostGIS server that is not available as a platform-managed PostGIS instance.

Complete the registration form with the connection details supplied by your database administrator.

| Field | Description |
|---|---|
| **Name** | A name used to identify the registered connection. This is also used as the PostgreSQL service name. |
| **Database** | The name of the PostgreSQL database to connect to. |
| **Host** | The hostname or address of the PostgreSQL server. |
| **Port** | The PostgreSQL server port, commonly `5432`. |
| **Admin user** | The database account used for the registered connection. |
| **Admin password** | The password for that database account. |
| **TLS mode** | The connection's TLS/SSL mode, as required by the server. |
| **Notes** | Optional information about the connection, where available. |

Use the actual connection details supplied for your database. Do not use `localhost` for an external database unless the platform specifically supports that connection arrangement.

### Option B: Use an existing PostGIS instance

If you already have a PostGIS instance managed through GeoSpatialHosting, you can select it from the available instances dropdown.

1. Select the existing PostGIS instance.
2. Enter a registration **Name**.
3. Add optional **Notes**, if needed.
4. Review the registration details.

When you select a deployed PostGIS instance, the form replaces the manual connection fields with the name and notes fields. The connection details are resolved server-side from the selected instance rather than being sent to your browser for you to copy.

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/02%20-%20Form.png" alt="Register PostgreSQL connection form">
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/03%20-%20postgis%20from%20deployed%20instance.png" alt="Select a deployed PostGIS instance">
</div>

<br>

## Step 3: Register the Connection

After entering the required information or selecting an existing PostGIS instance:

1. Review the connection details.
2. Click **Register**.
3. Confirm that the new connection appears in the PostgreSQL instances table.

The table displays connection information such as the endpoint, admin username, and TLS mode. The admin password itself is not displayed.

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/04%20-%20Registering%20done.png" alt="PostgreSQL instance registered successfully">
</div>

<br>

## Step 4: Grant Database Access to an End User

Registering a database does not automatically give every End User access to it. You must grant access separately.

1. Return to the organisation's **QGIS Cloud Desktop** page.
2. Open the detail page of the End User who needs database access.
3. Locate the **Database connections** section.
4. Select the registered PostgreSQL instance from the dropdown.
5. Click **Grant**.

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/05%20-%20Go%20to%20End%20User%20page%20and%20database%20section.png" alt="Open the End User database connections section">
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/02%20-%20Assign%20database/06%20-%20Granted.png" alt="Database access granted to the End User">
</div>

<br>

### How database credentials are used

Most grants use the PostgreSQL instance's own admin credentials, indicated by the message **uses PostgreSQL instance's own username**.

This means the connection uses the credentials associated with the registered PostgreSQL instance rather than a dedicated database role created for each End User.

Consider your database's permissions and security requirements before granting access, particularly if multiple users will share the same database credentials.

## Step 5: Connect from QGIS Cloud Desktop

Once the database has been granted, the platform makes a `pg_service.conf` file available in the End User's persistent home folder when their desktop starts.

The file contains the connection configuration, including the host, port, database, username, password, and TLS mode.

The End User can then create a PostgreSQL connection in QGIS using the registered database's service name, without manually entering each connection parameter.

For the complete connection workflow, see the [Quickstart: 5-Minute Tutorial](./quickstart.md).

## Troubleshooting

### The database does not appear in the End User's list

Check that the database has been registered successfully and that you are viewing the correct organisation and End User.

### The connection fails in QGIS

Check the following:

- The End User has been granted access to the correct PostgreSQL instance.
- The service name used in QGIS matches the registered database name.
- The PostgreSQL server is reachable from the cloud desktop environment.
- The database credentials and TLS requirements are valid.
- The database server allows connections from the cloud desktop infrastructure.

For externally hosted databases, confirm the server's network and access rules with the database administrator.

### I cannot register an external database

Verify that you have the correct host, port, database name, credentials, and TLS settings. An external database must be reachable from the platform; a connection that only works through `localhost` on your own computer will not work as an external server connection.

## What's Next?

Your End User can now access the assigned PostgreSQL/PostGIS database from QGIS Cloud Desktop.

- [Quickstart: 5-Minute Tutorial](./quickstart.md)
- [Creating Your Instance](./create_instance.md)
- [First Log In & Setting Your Password](./first_login.md)
