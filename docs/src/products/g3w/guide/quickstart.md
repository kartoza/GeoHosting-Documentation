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

# Quickstart: 5-Minute Tutorial

Ready to publish your first QGIS project with G3W‑SUITE? This short tutorial will guide you through the essential steps to get your WebGIS service online in minutes.

<br>

## Step 1: Update Project Title

This title becomes the WebGIS service ID. Without updating it, your service may be misidentified or conflict with others.

1. In QGIS, open <span class="ui-page-label">Project Properties</span>.

2. Under the <span class="ui-page-label">General</span> tab, enter a clear, unique name in the <span class="ui-filename">Project Title</span> field.

3. Click <span class="ui-generic-label">OK</span> to save.

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
     Avoid using special characters or unnecessary spaces in the title.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-5.png" alt="Change Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Upload Database

G3W‑SUITE needs access to your data sources — uploading your project database ensures layers display correctly.

1. In the top bar of the Administration Panel, click the <span class="ui-generic-label">Gear</span> icon.

2. Click <span class="ui-generic-label">Files</span> to open the <span class="ui-page-label">File Manager</span>.

3. From the left-hand panel, navigate to the <span class="ui-filename">project_data</span> folder.

4. Click <span class="ui-generic-label">New Folder</span> and name it <span class="ui-generic-label">spatialite</span>.

5. Open the new folder, click <span class="ui-generic-label">Upload</span>, and select your <span class="ui-filename">project database</span>.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Ensure the file path in your QGIS project matches the uploaded location.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-6.png" alt="File Manager">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Create Group

Groups act as containers for your published QGIS services. You’ll need to create one before uploading your project.

1. From the Administration Panel, under <span class="ui-page-label">Cartographic Groups</span>, click <span class="ui-generic-label">Add Group</span>.

2. On the <span class="ui-page-label">Group Creation</span> page, complete the following fields:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Field</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Internal identifier for the group. Must be unique.</td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Display name shown in the WebGIS interface.</td>
        </tr>
        <tr>
          <td>Srid</td>
          <td>Spatial reference system of your project (e.g. EPSG:4326).</td>
        </tr>
        <tr>
          <td>Baselayer</td>
          <td>The background map layer to use as a base (e.g. OpenStreetMap).</td>
        </tr>
      </tbody>
    </table>

    <br>

3. Once all details are complete, click <span class="ui-generic-label">Save</span> to create the group.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Not sure which CRS to use? In QGIS, go to Project → Properties → General to find the EPSG code.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-7.png" alt="Macro Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 4: Add QGIS Project

Once your group is ready, you can upload your QGIS project file to publish it as a new service within that group.

1. From the <span class="ui-page-label">Cartographic Groups</span> page, click <span class="ui-generic-label">Add New Project</span>.

2. On the <span class="ui-page-label">New QGIS Project</span> page, click <span class="ui-generic-label">Choose File</span> and upload your <span class="ui-filename">.qgz</span> or <span class="ui-filename">.qgs</span> file.

3. Fill in the <span class="ui-filename">Public Title</span> field.

4. Click the <span class="ui-generic-label">Save</span> button.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-8.png" alt="New Project">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 5: View Map

With your project published, you can now open and interact with your live WebGIS map directly from the interface.

From the <span class="ui-page-label">Projects List</span> page, click the <span class="ui-generic-label">Show Map</span> button under the **Actions** column to launch and explore your live WebGIS.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-9.png" alt="View Map">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to navigate and use the G3W Dashboard to enhance your user experience effortlessly.

<br>
