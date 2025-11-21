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

# Working with Spatial Layers

Once you’ve accessed your hosted database in pgAdmin, you can start creating spatial tables, often referred to as *layers*. Layers are the building blocks of geospatial analysis, allowing you to store geographic features (points, lines, or polygons) along with their attributes.

These layers can then be visualized, edited, and analyzed in QGIS or other GIS tools connected to your hosted PostGIS database.

<br>

## Step 1: Create a New Table

To begin, create a new table within your default database:

1. In the **Object Explorer**, expand the <span class="ui-filename">kartoza_postgis</span> database.

2. Navigate to <span class="ui-filename">Schemas → public</span>.

3. Right-click the <span class="ui-filename">Tables</span> folder.

4. Select <span class="ui-generic-label">Create → Table</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-25.png" alt="Expanded Tree" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 2: Define Table Properties

Before adding any columns, you’ll first configure the basic details of your new table.

1. The **Create Table** dialog opens with the <span class="ui-page-label">General</span> tab already selected.

2. Fill in the following configuration:

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
      <td>places</td>
    </tr>
    <tr>
      <td>Owner</td>
      <td>kartoza_postgis</td>
    </tr>
    <tr>
      <td>Schema</td>
      <td>public</td>
    </tr>
    <tr>
      <td>Tablespace</td>
      <td>pg_default</td>
    </tr>
  </tbody>
</table>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-26.png" alt="Table General Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 3: Add Columns

Next, define the table’s attributes (fields) that will store your data.

1. At the top of the **Create Table** dialog, click the <span class="ui-page-label">Columns</span> tab.

2. Use the <span class="ui-generic-label">Add Row (+)</span> button to add attributes.

3. Add the following fields:

    <br>

    <table class="my-table-style">
    <thead>
        <tr>
        <th>Name</th>
        <th>Data Type</th>
        <th>Length</th>
        <th>Not Null?</th>
        <th>Primary Key?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>id</td>
        <td>integer</td>
        <td>—</td>
        <td>x</td>
        <td>x</td>
        </tr>
        <tr>
        <td>name</td>
        <td>character</td>
        <td>256</td>
        <td>x</td>
        <td></td>
        </tr>
        <tr>
        <td>geometry</td>
        <td>geometry</td>
        <td>—</td>
        <td>x</td>
        <td></td>
        </tr>
    </tbody>
    </table>

    <br>

3. Click <span class="ui-generic-label">Save</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-27.png" alt="Table Column Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 4: Define Geometry Type & SRID

By default, the geometry column does not yet have a defined geometry type or spatial reference system (SRID). You’ll use an SQL query to configure this.

1. With the <span class="ui-filename">places</span> table selected, click the <span class="ui-generic-label">Query Tool</span> from the toolbar.

    <br>

    <div style="text-align: center;">
    <img src="../../img/postgis-img-28.png" alt="Query Tool" width="auto">
    <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
        Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
    </div>
    </div>

    <br>

2. Paste the following command into the **SQL Editor**:

    ```sql
    ALTER TABLE places
    ALTER COLUMN geometry TYPE geometry(Point, 4326)
    USING ST_SetSRID(geometry, 4326);
    ```

    <br>

3. Click <span class="ui-generic-label">Execute Query</span> in the top toolbar, then <span class="ui-generic-label">Continue</span>.

<br>

This command converts the geometry column to a **Point** geometry type using the **EPSG:4326 (WGS 84)** coordinate reference system.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-29.png" alt="SQL Editor" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

You’ve now created a spatial table in your hosted PostGIS database that can store point-based geographic features.

<br>

---

**Next up:** Learn how to connect your PostGIS database to QGIS and visualize the spatial layer you’ve just created.

<br>
