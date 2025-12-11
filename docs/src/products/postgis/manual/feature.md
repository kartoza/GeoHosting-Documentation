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

# Adding & Editing Features

With your PostGIS layer successfully connected in QGIS, you can now start adding and editing features directly from your map. This allows you to capture new spatial data (such as points, lines, or polygons) and store it instantly in your hosted database.

Before adding new points, you may want to add a **basemap** (such as OpenStreetMap or Google Satellite) to provide visual context and help you position your features accurately on the map.

<br>

## Step 1: Enable Editing Mode

To begin adding new features to your *places* layer:

1. In the **Layers Panel**, select the <span class="ui-filename">places</span> layer.

2. Click the <span class="ui-generic-label">Toggle Editing</span> button (pencil icon) on the toolbar.

3. Once editing is enabled, the layer becomes editable, and additional editing tools become available.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-33.png" alt="Toggle Editing" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 2: Add a New Feature

With editing mode active, you can now add a new point to represent a specific place.

1. Click the <span class="ui-generic-label">Add Point Feature</span> tool (map marker icon) from the **Digitizing Toolbar**.

2. Click on the map at the location where you’d like to place your new feature.

3. An **Attribute Form** will appear, prompting you to fill in the attribute fields for the new record.

4. Enter the relevant information, then click <span class="ui-generic-label">OK</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-34.png" alt="Add Point Feature" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 3: Save Your Edits

Once you’ve added your new points:

1. Click the <span class="ui-generic-label">Toggle Editing</span> button again to exit editing mode.

2. QGIS will prompt you to save your changes, click <span class="ui-generic-label">Save</span>.

<br>

Your new features are now stored in your hosted PostGIS database.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-35.png" alt="Save Edits" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 4: Verify in pgAdmin

To confirm that your new features have been successfully added:

1. Return to pgAdmin and expand your <span class="ui-filename">kartoza_postgis</span> database.

2. Select the <span class="ui-filename">places</span> table.

3. Click the <span class="ui-generic-label">All Rows</span> button from the toolbar.

4. The new features you added in QGIS should now appear in the data view.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-36.png" alt="pgAdmin Table View" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

You’ve now learned how to create, edit, and verify spatial features directly within QGIS and pgAdmin.

<br>

---

**Next up:** Learn how to create lookup tables and define relationships between your PostGIS tables for cleaner, more structured data management.

<br>
