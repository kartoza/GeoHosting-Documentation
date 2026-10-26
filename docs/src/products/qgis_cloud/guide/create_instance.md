---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Creating Your Instance

This page explains how an **Organisation Owner** can create an End User and grant them access to QGIS Cloud Desktop.

Once access has been granted, the End User can register their passkey, sign in to the QGIS Cloud Desktop Portal, and launch their own cloud desktop session.

<br>

## Step 1: Create Your Organisation

Your organisation will serve as the central space for managing End Users, desktop access, and resource usage.

1. Sign in to the [GeoSpatialHosting Dashboard](https://geospatialhosting.com/#/dashboard).
2. Open the <span class="ui-page-label">Organizations</span> tab.
3. Select <span class="ui-generic-label">Add another organization</span> and enter your details.
4. Click <span class="ui-generic-label">Create</span> when you're done.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-4.png" alt="Create Your Organisation">
</div>

<br>

## Step 2: Open QGIS Cloud Desktop

Select the new <span class="ui-page-label">QGIS Cloud Desktop</span> tab.

On this page, you can manage QGIS Desktop session timeouts and view a breakdown of compute and storage costs for your organisation.

You can review monthly billing totals by End User and compute tier, track running and closed session charges, monitor storage usage and costs, and archive or restore the organisation.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-5.png" alt="QGIS Cloud Desktop Tab">
</div>

<br>

## Step 3: Create an End User

Each End User gets their own account to access QGIS Cloud Desktop.

1. Select the <span class="ui-page-label">End Users</span> tab.
2. Click <span class="ui-generic-label">Add End User</span>.
3. Enter the user's email address and display name.
4. Click <span class="ui-generic-label">Create End User</span>.

The new End User will appear in the list with the status `INVITED`.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-6.png" alt="Create an End User">
</div>

<br>

## Step 4: Send the enrolment link

The End User must register a passkey before they can sign in.

1. From the users profile, click the <span class="ui-generic-label">Email Icon</span> to email the enrolment link to the user.
2. Alternatively, click the <span class="ui-generic-label">Link Icon</span> to copy the enrolment link and share it via your preferred communication method.

The End User will use this link to register their passkey. For the complete process, see [First Log In & Setting Your Password](./first_login.md).

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-7.png" alt="Enrolment Link" style="width: 45%;">
</div>

<br>

## Step 5: Grant Access

After creating the End User, configure their desktop resources.

1. Locate the <span class="ui-page-label">QGIS Cloud Desktop access</span> section.
2. Select the appropriate **Machine tier** for the user's computing requirements.
3. Specify the **Initial storage (GiB)** for their persistent home folder.
4. Click <span class="ui-generic-label">Grant QGIS Cloud Desktop</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/qgis-cloud-img-8.png" alt="Grant QGIS Cloud Desktop Access">
</div>

<br>

## Choosing machine size and storage

Consider the user's expected workload when selecting resources:

- **Machine tier:** Determines the computing resources available to the desktop session.
- **Initial storage (GiB):** Determines the initial capacity of the user's persistent home folder.

The persistent home folder stores files and settings between sessions. Storage can be increased later but cannot be reduced, so choose an initial allocation carefully.

Host and storage charges are calculated separately. Refer to the [QGIS Cloud Desktop Overview](../overview.md) for more information about billing.

<br>

---

**Next up:** We’ll walk you through registering your passkey as an End User and launching QGIS Cloud Desktop for the first time.

<br>
