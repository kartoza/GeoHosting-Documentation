---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2025-10-01
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2025, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# Connecting QGIS

Once your spatial tables are created in pgAdmin, you can connect your hosted PostGIS database to QGIS. This allows you to visualize, edit, and manage your spatial layers directly from your QGIS workspace.

<br>

## Step 1: Open Data Source Manager

To begin connecting your hosted PostGIS database:

1. In **QGIS**, click the <span class="ui-generic-label">Open Data Source Manager</span> button on the toolbar.

2. In the left-hand panel, select <span class="ui-page-label">PostgreSQL</span>.

3. Click <span class="ui-generic-label">New</span> to create a new connection.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-30.png" alt="Data Source Manager" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 2: Configure Connection

Before proceeding, make sure you have your connection credentials ready. You can find the **Host** and **Password** values on your <span class="ui-page-label">Product Details</span> page:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Host</strong></td>
      <td>The same URL as your PostGIS product (e.g. <span class="ui-filename">my-postgis.sta.geospatialhosting.com</span>).</td>
    </tr>
    <tr>
      <td><strong>Password</strong></td>
      <td>Retrieved by clicking <span class="ui-generic-label">Get Password</span> next to the PostGIS URL.</td>
    </tr>
  </tbody>
</table>

<br>

You’ll now set up the connection to your hosted database.

1. Under **Connections Information**, fill in the following details:

    <br>

    <table class="my-table-style">
    <thead>
        <tr>
        <th>Property</th>
        <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>Name</td>
        <td>my-postgis</td>
        </tr>
        <tr>
        <td>Host</td>
        <td>your-product-name.sta.geospatialhosting.com</td>
        </tr>
        <tr>
        <td>Port</td>
        <td>5432</td>
        </tr>
        <tr>
        <td>Database</td>
        <td>kartoza_postgis</td>
        </tr>
        <tr>
        <td>SSL Mode</td>
        <td>Require</td>
        </tr>
    </tbody>
    </table>
    <br>

    <br>

2. Under **Authentication**, click the <span class="ui-generic-label">+</span> button.

3. Fill in the following fields:

    <br>

    <table class="my-table-style">
    <thead>
        <tr>
        <th>Property</th>
        <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>Name</td>
        <td>my-postgis</td>
        </tr>
        <tr>
        <td>Username</td>
        <td>kartoza_postgis</td>
        </tr>
        <tr>
        <td>Password</td>
        <td>Copy from the Product Details page</td>
        </tr>
    </tbody>
    </table>
    <br>

    <br>

4. Click <span class="ui-generic-label">Test Connection</span> to verify that QGIS can access your hosted database.

5. If successful, click <span class="ui-generic-label">OK</span> to save the connection.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-31.png" alt="Add Connection" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 3: Load Layers

Now that your connection is configured, you can add spatial layers from your PostGIS database into QGIS.

1. From the **Data Source Manager**, click <span class="ui-generic-label">Connect</span>.

2. Expand the <span class="ui-filename">public</span> schema to view your available spatial tables.

3. Select the <span class="ui-filename">places</span> layer and click <span class="ui-generic-label">Add</span>.

<br>

Your hosted PostGIS layer is now connected and ready for use in QGIS. You can style, query, and edit it just like any other vector layer.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-32.png" alt="Add Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to add and edit features in your PostGIS layer directly from QGIS.

<br>
