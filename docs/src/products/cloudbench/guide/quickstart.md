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

# Quickstart: 5-Minute Tutorial

Now that you have accessed CloudBench, let's explore some of its basic features!

This quickstart will walk you through a typical workflow: selecting a connection, browsing your data, uploading a dataset to S3 storage, and previewing the resulting layer.

By the end of this guide, you should have a better understanding of how CloudBench brings different geospatial workflows together in one place.

<br>

## Before You Begin

To get started with this tutorial, there are a few prerequisites to keep in mind to ensure you can follow along with each step successfully. Before proceeding, make sure you have:

- Logged in to your GeoSpatialHosting account.
- Opened CloudBench from your dashboard.
- At least one available connection in the connection tree.

<br>

For the upload and conversion part of this guide, you will also need:

- Access to an S3 storage connection.
- A supported geospatial dataset to upload.

If you do not have an S3 connection available, you can still follow the connection browsing steps to explore your existing services.

<br>

## Step 1: Select a Connection

When CloudBench opens, you will see the connection tree on the left-hand side of the interface. This is where you can access your connected services and their resources.

1. Locate the connection tree.
2. Find an available connections, such as **GeoServer**, **PostgreSQL**, **GeoNode**, or **S3 Storage**.
3. Click the connection to expand it.
4. Browse the available resources.

<br>

For example:

- Expand **GeoServer** to explore its workspaces and layers.
- Expand **PostgreSQL** to browse available databases and schemas.
- Expand **GeoNode** to access available datasets.
- Expand **S3 Storage** to browse bucket folders and files.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-8.png" alt="Select a Connection">
</div>

<br>

## Step 2: Explore Your Data

Select a resource from the connection tree to explore its available information and operations. Depending on the connection type, you may be able to:

- Browse workspaces, data stores, and published layers.
- View database schemas and tables.
- Browse folders and objects in an S3 bucket.
- Preview supported geospatial layers.

CloudBench provides different tools depending on the selected resource.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-9.png" alt="Explore Your Data">
</div>

<br>

## Step 3: Upload a Dataset to S3

For this example, we will upload a geospatial dataset to an S3 storage connection.

1. Select an <span class="ui-page-label">S3 Storage</span> connection from the tree.
2. Click the <span class="ui-generic-label">Upload</span> button.
3. Choose a supported geospatial file from your computer.
4. Select an available <span class="ui-generic-label">Server type</span>.
5. Click <span class="ui-generic-label">Upload</span>.

<br>

Supported input formats include:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Input Data</th>
      <th>Possible Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeoTIFF (<code>.tif</code>)</td>
      <td>Cloud Optimized GeoTIFF (COG)</td>
    </tr>
    <tr>
      <td>Multiple GeoTIFF tiles</td>
      <td>COG mosaic</td>
    </tr>
    <tr>
      <td>Vector files (<code>.shp</code>, <code>.geojson</code>, <code>.gpkg</code>, <code>.kml</code>, etc.)</td>
      <td>PMTiles and GeoParquet</td>
    </tr>
    <tr>
      <td>Point cloud (<code>.las</code>, <code>.laz</code>)</td>
      <td>COPC</td>
    </tr>
  </tbody>
</table>

<br>

CloudBench will display the progress of the conversion while the processing job runs. Once the conversion finishes, the generated files are published to your S3 bucket.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-10.png" alt="Upload a Dataset to S3">
</div>

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    On-demand conversions are billed per started server hour. Even a short conversion may incur a full hour of charges. Review the displayed price before continuing.
  </div>
</div>

<br>

## Step 4: Preview Your Dataset

Once your dataset has been uploaded and, where applicable, converted, you can explore the resulting files in CloudBench.

1. Return to your S3 connection in the tree.
2. Locate the uploaded dataset or its generated output folder.
3. Select a supported layer or file.
4. Open the available preview.

<br>

Depending on the format, CloudBench can display your data in different ways:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Available Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>COG</td>
      <td>View raster data on an interactive map.</td>
    </tr>
    <tr>
      <td>PMTiles</td>
      <td>View vector data on an interactive map.</td>
    </tr>
    <tr>
      <td>GeoParquet</td>
      <td>Explore feature attributes in a table and view the data on a map.</td>
    </tr>
    <tr>
      <td>COPC</td>
      <td>Explore LiDAR point cloud data in a 3D viewer.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-11.png" alt="Preview Your Dataset">
</div>

<br>

---

**Next up:** To be added...

<br>
