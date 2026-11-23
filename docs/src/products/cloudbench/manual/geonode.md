---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2026-11-17
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# GeoNode

CloudBench allows you to connect to a GeoNode site and upload supported geospatial datasets and work with the sites contents through its central interface.

If you have a GeoNode instance hosted through GeoSpatialHosting, its connection will generally be added to CloudBench automatically. You can also connect to an external GeoNode site.

<br>

## GeoNode Connections

A GeoNode connection gives CloudBench access to one specific GeoNode site. Once connected, you can expand the connection in the tree to browse the available resources.

The available operations and resources are determined by the connected GeoNode site and the permissions of the account used for the connection.

<br>

## Connecting to GeoNode

CloudBench can connect to GeoNode instances hosted through GSH or to external GeoNode sites. GSH instances are generally detected and added automatically, while external sites require manual connection details and authentication.

<br>

### GSH GeoNode Instances

If you have a GeoNode instance hosted through GSH, CloudBench generally detects the instance associated with your account and automatically adds the connection, so no manual configuration is needed.

<br>

To access your instance:

1. Open CloudBench from your GeoSpatialHosting dashboard.
2. Locate <span class="ui-page-label">GeoNode</span> in the connection tree.
3. Expand the connection to browse the available resources.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-5.png" alt="GSH GeoNode Instances">
</div>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    If your connection does not appear in the connection tree, select the Refresh icon next to CloudBench in the left-hand menu to reload the available connections.
  </div>
</div>

<br>

### External GeoNode Sites

You can also connect CloudBench to an external GeoNode site, provided that it is accessible from CloudBench and you have valid credentials.

<br>

To add an external connection:

1. Locate <span class="ui-page-label">GeoNode</span> in the connection tree.
2. Select the <span class="ui-generic-label">+</span> icon next to the connection type.
3. Provide the GeoNode site URL and credentials.
4. Select <span class="ui-generic-label">Test Connection</span> to check that CloudBench can reach the site.
5. If the test succeeds, select <span class="ui-generic-label">Add Connection</span> to save.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-6.png" alt="External GeoNode Sites">
</div>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The connected account must have the permissions required for the operations you want to perform.
  </div>
</div>

<br>

## Uploading Datasets

CloudBench allows you to upload supported vector and raster datasets directly to a connected GeoNode site, where they can be stored, managed, and made available for further use.

<br>

To upload a dataset:

1. Find your **GeoNode** connection in the connection tree.
2. Next to the connection name, select <span class="ui-page-label">Upload</span>.
3. Choose detween a <span class="ui-generic-label">Dataset</span> or <span class="ui-generic-label">Document</span> upload.
4. Drag and drop your files into the designated area.
5. Provide a **Title** and **Abstract** describing the dataset.
6. Select <span class="ui-generic-label">Upload</span> and wait for the import to finish.

<br>

CloudBench supports the following file types when uploading to a connected GeoNode site:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Category</th>
      <th>Format</th>
      <th>Extensions</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dataset</td>
      <td>GeoPackage</td>
      <td><code>.gpkg</code></td>
      <td>Stores vector and raster data.</td>
    </tr>
    <tr>
      <td></td>
      <td>Shapefile</td>
      <td><code>.zip</code></td>
      <td>Compressed vector data and attributes.</td>
    </tr>
    <tr>
      <td></td>
      <td>GeoTIFF</td>
      <td><code>.tif</code>, <code>.tiff</code></td>
      <td>Georeferenced raster data.</td>
    </tr>
    <tr>
      <td></td>
      <td>GeoJSON</td>
      <td><code>.geojson</code>, <code>.json</code></td>
      <td>Geographic features and attributes.</td>
    </tr>
    <tr>
      <td></td>
      <td>KML</td>
      <td><code>.kml</code></td>
      <td>Geographic features and annotations.</td>
    </tr>
    <tr>
      <td>Document</td>
      <td>PDF</td>
      <td><code>.pdf</code></td>
      <td>Reports and reference documents.</td>
    </tr>
    <tr>
      <td></td>
      <td>Word</td>
      <td><code>.doc</code>, <code>.docx</code></td>
      <td>Text documents and reports.</td>
    </tr>
    <tr>
      <td></td>
      <td>Excel</td>
      <td><code>.xls</code>, <code>.xlsx</code></td>
      <td>Spreadsheets and tabular data.</td>
    </tr>
    <tr>
      <td></td>
      <td>Images</td>
      <td>Various</td>
      <td>Photographs and illustrations.</td>
    </tr>
  </tbody>
</table>

<br>

CloudBench accepts vector and raster formats supported by the connected GeoNode site, subject to GeoNode's own file format and upload-size restrictions. If a file is rejected, check the requirements of the connected GeoNode instance.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-7.png" alt="Uploading Datasets">
</div>

<br>

### Titles and Abstracts

When CloudBench uploads a dataset, GeoNode initially imports it using a name derived from the uploaded file. The title and abstract entered in CloudBench are applied in a second step, after the GeoNode import has completed. This means the dataset may briefly appear in GeoNode with a filename-based name before the updated metadata is displayed.

<br>

If the title or abstract does not appear immediately:

1. Allow a few seconds for the metadata update to complete.
2. Refresh the GeoNode dataset listing.
3. Open the dataset in GeoNode to check its metadata.
4. Check whether the connected account has permission to edit the dataset.

<br>

### Permissions

GeoNode uploads and metadata updates use the permissions of the account configured in the CloudBench connection. This means:

- The account must be permitted to upload datasets.
- The account must have the necessary permissions to update the dataset title and abstract.
- CloudBench does not automatically grant additional permissions in GeoNode.

<br>

If an upload succeeds but the metadata cannot be updated, check the permissions of the connected GeoNode account.

<br>

## Troubleshooting

<table class="my-table-style">
  <thead>
    <tr>
      <th>Problem</th>
      <th>What to Check</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection test fails</td>
      <td>Check that the GeoNode URL is correct and that the site is running and reachable from CloudBench.</td>
    </tr>
    <tr>
      <td>Authentication fails</td>
      <td>Confirm that the username and password are correct.</td>
    </tr>
    <tr>
      <td>Upload is rejected</td>
      <td>Check that the file format is supported and that it does not exceed the GeoNode upload-size limit.</td>
    </tr>
    <tr>
      <td>Dataset appears empty or does not load correctly</td>
      <td>Check the file format and coordinate reference system.</td>
    </tr>
    <tr>
      <td>Dataset title or abstract does not update</td>
      <td>Allow a few seconds and refresh. If the problem continues, check the connected account's permission to edit the dataset.</td>
    </tr>
    <tr>
      <td>Dataset does not appear</td>
      <td>Confirm that the import has finished and that the connected account can access the dataset.</td>
    </tr>
  </tbody>
</table>

<br>
