---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2026-11-02
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# First Log In & Accessing CloudBench

CloudBench is included with your GeoSpatialHosting account and gives you a central place to work with your hosted geospatial services and datasets.

Unlike some of the other GeoSpatialHosting products, CloudBench does not require you to create a separate instance or register for another account. You can access it directly through your existing GeoSpatialHosting dashboard.

<br>

## Step 1: Log In to GSH

Once logged in, you will be taken to your GeoSpatialHosting dashboard.

1. Open the [GeoSpatialHosting website](https://geospatialhosting.com/).
2. Navigate to the dashboard.
3. Log in using your existing GSH account credentials.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-4.png" alt="Log In to GSH">
</div>

<br>

## Step 2: Open CloudBench

CloudBench uses your existing GeoSpatialHosting authentication, so you do not need to enter your login credentials again.

1. Locate the <span class="ui-page-label">CloudBench</span> option in your GSH dashboard.
2. Select <span class="ui-generic-label">CloudBench</span> to open the application.
3. Wait for CloudBench to load.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-5.png" alt="Open CloudBench">
</div>

<br>

## Step 3: Accept the Disclaimer

The first time you open CloudBench, you may see a disclaimer explaining its experimental status.

Read through the information and select <span class="ui-generic-label">Continue</span> to proceed.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-6.png" alt="Accept the Disclaimer">
</div>

<div class="alert alert-note">
  <div class="alert-icon">ℹ️</div>
  <div class="alert-text">
    CloudBench is currently an early preview and is not yet covered by GeoSpatialHosting's customer Service Level Agreement (SLA). Some features may change as the platform develops.
  </div>
</div>

<br>

## Step 4: Explore Your Connections

Once CloudBench has loaded, you will see the main interface.

The left-hand panel contains a connection tree where you can browse the services and resources available to your account.

<br>

Depending on your GeoSpatialHosting setup, you may see connections for:

- **GeoServer** - Browse workspaces, data stores, layers, styles, and other GeoServer resources.
- **PostgreSQL/PostGIS** - Browse database schemas and tables and execute SQL queries.
- **GeoNode** - Access datasets available through your connected GeoNode site.
- **S3 Storage** - Browse and manage files stored in connected object storage buckets.

<br>

Expand a connection in the tree to see the available resources.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-7.png" alt="Explore Your Connections">
</div>

<br>

## Step 5: Check Your Connections

When using CloudBench through GeoSpatialHosting, connections to your hosted instances are generally configured automatically.

Before getting started, check that your expected services are visible in the connection tree. If you have additional services or external storage locations you want to use, you can add your own connections.

For more information, see [Managing Connections](connections.md).

<br>

---

**Next up:** Follow the Quickstart to get familiar with the complete workflow.

<br>
