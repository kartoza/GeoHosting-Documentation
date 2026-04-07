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

Follow these quick steps to create your first GeoSight dashboard using sample data.

<br>

## Step 1: Prepare a Reference Dataset

Reference datasets define the administrative boundaries used in your analysis.

1. Navigate to <span class="ui-page-label">Reference Datasets</span> → <span class="ui-generic-label">Create New Reference Dataset</span>.

2. Enter a name (e.g. <span class="ui-filename">Somalia Districts</span>).

3. Click <span class="ui-generic-label">Add new level</span> and define your admin level (e.g. District).

4. Click <span class="ui-generic-label">Submit</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-10.png" alt="Create Reference Dataset">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

5. In the top-right corner, click <span class="ui-generic-label">Import Data</span> and upload a supported file.

6. Select the name and unique code fields, then click <span class="ui-generic-label">Submit</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-11.png" alt="Config Reference Dataset">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    You can also connect to GeoRepo instead of uploading your own boundary data.
  </div>
</div>

<br>

## Step 2: Create an Indicator

Indicators represent the data you want to visualise.

1. Go to <span class="ui-page-label">Indicators</span> → <span class="ui-generic-label">Create New Indicator</span>.

2. Enter a name (e.g. <span class="ui-filename">Sample Indicator A</span>).

3. Add a shortcode (e.g. <span class="ui-filename">SAMPLE_IND_A</span>).

4. Assign or create a category.

5. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-12.png" alt="Create Indicator">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 3: Import Indicator Data

Upload and link your data to the indicator so it can be visualised on the map.

1. Open your indicator and in the top-right corner, click <span class="ui-generic-label">Import Data</span>.

2. Under the <span class="ui-page-label">General</span> tab, set the following:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Setting</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Import Type</td>
          <td>Indicator Value</td>
        </tr>
        <tr>
          <td>Input Format</td>
          <td>Excel Long Format</td>
        </tr>
      </tbody>
    </table>

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-13.png" alt="General Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

3. Under the <span class="ui-page-label">Attributes</span> tab, click <span class="ui-generic-label">Choose File</span> and upload your Excel file.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-14.png" alt="Attributes Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

4. In the <span class="ui-page-label">Reference Layer & Time</span> tab select your reference dataset.

5. Configure the date field settings.

6. Click <span class="ui-generic-label">Submit</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-15.png" alt="Reference Layer & Time Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

7. After your data has been uploaded, click <span class="ui-generic-label">See the data</span>.

8. Click <span class="ui-generic-label">Select all 148 data</span>.

9. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-16.png" alt="Data Records">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 4: Add a Basemap

Add a basemap to provide geographic context for your data.

1. Navigate to <span class="ui-page-label">Basemaps</span> → <span class="ui-generic-label">Create New Basemap</span>.

2. Enter the following:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>OpenStreetMap</td>
        </tr>
        <tr>
          <td>URL</td>
          <td>https://a.tile.openstreetmap.org/{z}/{x}/{y}.png?noWrap=true</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>XYZ Tile</td>
        </tr>
        <tr>
          <td>Category</td>
          <td>Road Maps</td>
        </tr>
      </tbody>
    </table>

    <br>

3. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-17.png" alt="Create Basemap">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 5: Create a Dashboard

Combine your data, layers, and settings into a single interactive dashboard.

1. Go to <span class="ui-page-label">Projects</span> → <span class="ui-generic-label">Create New Project</span>.

2. On the <span class="ui-page-label">General</span> tab, enter a name (e.g. <span class="ui-filename">First Project</span>) for your project.

3. Select your View (e.g. <span class="ui-filename">Somalia Districts</span>).

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-18.png" alt="General Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

4. Navigate to <span class="ui-page-label">Indicators</span> → <span class="ui-generic-label">Add Indicator</span>.

5. Select <span class="ui-filename">Sample Indicator A</span> and click <span class="ui-generic-label">Update Selection</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-19.png" alt="Indicators Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

6. Navigate to <span class="ui-page-label">Indicator Layers</span> → <span class="ui-generic-label">Add Indicator Layer</span>.

7. Choose <span class="ui-generic-label">Single Indicator Layer</span>.

8. Select <span class="ui-filename">Sample Indicator A</span> and click <span class="ui-generic-label">Apply Selection</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-20.png" alt="Indicator Layers Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

9. Navigate to <span class="ui-page-label">Basemaps</span> → <span class="ui-generic-label">Add Basemap</span>.

10. Select <span class="ui-filename">Open Street Map</span> and click <span class="ui-generic-label">Update Selection</span>.

11. Click <span class="ui-generic-label">Save</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-21.png" alt="Indicator Layers Tab">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

## Step 6: Preview Your Dashboard

Open and explore your dashboard to see your data in action.

1. Click <span class="ui-generic-label">Preview</span> to open your dashboard.

2. Explore your data using maps, filters, and widgets.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-22.png" alt="New Project">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<div class="image-with-caption">
  <img src="../../img/geosight-img-23.png" alt="Preview Project">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to navigate and interact with the GeoSight interface for a seamless user experience.

<br>
