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

# GeoServer

CloudBench allows you to connect to GeoServer instances and manage their resources through a central interface. You can browse workspaces, data stores, layers, and styles, preview published layers, and access tools for managing cached tiles and synchronising resources between servers.

If you have a GeoServer product hosted through GeoSpatialHosting, its connection will generally be added to CloudBench automatically. You can also connect to an external GeoServer instance.

<br>

## GeoServer Connections

A GeoServer connection gives CloudBench access to one specific GeoServer instance.

The connection tree provides a hierarchical view of the resources available on that server. You can expand the connection to explore its contents and select individual resources to view the available information and operations.

<br>

The following resources are available through the GeoServer connection:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Resource</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Workspaces</td>
      <td>Organise layers and other GeoServer resources into logical groups.</td>
    </tr>
    <tr>
      <td>Data Stores</td>
      <td>Connect GeoServer to vector data sources, such as databases and files.</td>
    </tr>
    <tr>
      <td>Coverage Stores</td>
      <td>Connect GeoServer to raster data sources.</td>
    </tr>
    <tr>
      <td>Layers</td>
      <td>Represent published geospatial datasets that can be served through GeoServer.</td>
    </tr>
    <tr>
      <td>Styles</td>
      <td>Define how published layers are displayed.</td>
    </tr>
    <tr>
      <td>Layer Groups</td>
      <td>Combine multiple layers into a single published map.</td>
    </tr>
    <tr>
      <td>Tile Caches</td>
      <td>Provide cached map tiles managed through GeoWebCache.</td>
    </tr>
  </tbody>
</table>

<br>

## Connecting to GeoServer

Connect to a GeoServer instance hosted through GeoSpatialHosting or add an external GeoServer service using its base URL and credentials.

<br>

### GSH GeoServer Instances

If you have a GeoServer instance hosted through GSH, CloudBench generally detects the instance associated with your account and automatically adds the connection, so no manual configuration is needed.

<br>

To access your instance:

1. Open CloudBench from your GeoSpatialHosting dashboard.
2. Locate <span class="ui-page-label">GeoServer</span> in the connection tree.
3. Expand the connection to view your available resources.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-11.png" alt="GSH GeoServer Instances">
</div>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    If your connection does not appear in the connection tree, select the Refresh icon next to CloudBench in the left-hand menu to reload the available connections.
  </div>
</div>

<br>

### External GeoServer Instances

You can also connect CloudBench to a GeoServer instance hosted outside GeoSpatialHosting, provided that it is accessible from CloudBench and you have valid credentials.

<br>

To add an external connection:

1. Locate <span class="ui-page-label">GeoServer</span> in the connection tree.
2. Select the <span class="ui-generic-label">+</span> icon next to the connection type.
3. Provide the GeoServer site URL and credentials.
4. Select <span class="ui-generic-label">Test Connection</span> to check that CloudBench can reach the site.
5. If the test succeeds, select <span class="ui-generic-label">Add Connection</span> to save.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-12.png" alt="Ext GeoServer Instances">
</div>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The account used for the connection should have the permissions required for the resources and operations you want to access.
  </div>
</div>

<br>

## Working with Data

Once you have connected a GeoServer instance, you can use CloudBench to organise your data into workspaces, create data stores, publish layers, and preview them on a map.

<br>

### Create Workspaces

A workspace is a container that helps you organise and manage related GeoServer data.

1. In the connection tree, select the name of your GeoServer connection.
2. Click <span class="ui-generic-label">Create New Workspace</span>.
3. Enter a name for the workspace and configure its settings.
4. Click <span class="ui-generic-label">Create Workspace</span> to finish.

<br>

Your new workspace will appear as a folder in the connection tree. Click its name to open the workspace overview page.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-13.png" alt="Create a Workspace">
</div>

<br>

From the workspace overview page, you can add data in several ways:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Upload Data</td>
      <td>Upload a supported file directly to GeoServer.</td>
    </tr>
    <tr>
      <td>Connect to PostgreSQL</td>
      <td>Use an existing PostgreSQL connection in CloudBench to create a PostGIS data store.</td>
    </tr>
    <tr>
      <td>New Data Store</td>
      <td>Create a new data store by providing the connection details for an external database.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The New Coverage Store option is also displayed, but is not available yet.
  </div>
</div>

<br>

### Upload Data

To upload a supported dataset directly:

1. From the workspace overview page, click <span class="ui-generic-label">Upload Data</span>.
2. Drag and drop a file into the upload area, or click the area to browse for a file.
3. Select a supported file format.
4. Click <span class="ui-generic-label">Upload</span>.
5. Once the upload has finished, click <span class="ui-generic-label">Send to GeoServer</span>.

<br>

The following formats are accepted:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>File Extension</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shapefile</td>
      <td><code>.zip</code></td>
      <td>A vector format for storing geographic features and attributes.</td>
    </tr>
    <tr>
      <td>GeoPackage</td>
      <td><code>.gpkg</code></td>
      <td>A container for storing vector and raster geospatial data.</td>
    </tr>
    <tr>
      <td>GeoTIFF</td>
      <td><code>.tif</code></td>
      <td>A raster format for storing georeferenced imagery and grid-based data.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-14.png" alt="Upload Data">
</div>

<br>


### Connect to PostgreSQL

If you already have a PostgreSQL connection configured in CloudBench, you can use it to create a PostGIS data store in your workspace.

1. From the workspace overview page, click <span class="ui-generic-label">Connect to PostgreSQL</span>.
2. Select the existing PostgreSQL connection you want to use.
3. Configure the data store details, including the store name, database, and schema.
4. Click <span class="ui-generic-label">Connect</span> to create the data store.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-15.png" alt="Connect to PostgreSQL">
</div>

<br>

### New Data Store

You can also connect to an external database without first adding it as a separate PostgreSQL connection in CloudBench.

1. From the workspace overview page, click <span class="ui-generic-label">New Data Store</span>.
2. Select the available store type. Currently, only **PostGIS** is supported.
3. Enter a name for the data store.
4. Provide the external database connection details and credentials.
5. Complete the connection by clicking <span class="ui-generic-label">Create Data Store</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-16.png" alt="New Data Store">
</div>

<br>

### Publish Layers

Once you have created a data store, you can publish its layers to GeoServer.

1. In the connection tree, expand your workspace and select the name of the data store.
2. This opens the data store overview page.
3. Under **Available to Publish**, select the layers you want to publish.
4. Click <span class="ui-generic-label">Publish</span>.

<br>

The selected layers will be published to GeoServer and become available under the workspace's **Layers** section.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-17.png" alt="Publish Layers">
</div>

<br>

### Preview Published Layers

To view your published layers:

1. In the connection tree, click <span class="ui-page-label">Layers</span>.
2. The overview page displays a list of the available published layers.
3. Find the layer you want to view and click <span class="ui-generic-label">Preview on Map</span>.

<br>

This opens the **Layer Preview**, where you can view the layer on an interactive map.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-18.png" alt="Preview Published Layers">
</div>

<br>

### Editing Layer Metadata

CloudBench allows you to edit the metadata of individual layers directly through its interface by selecting <span class="ui-generic-label">Edit</span> next to the relevant layer.

<br>

The supported metadata fields include:

- **Title:** The display name of the layer.
- **Abstract:** A description of the layer and its contents.
- **Keywords:** Terms associated with the layer to help describe and categorise it.
- **Attribution:** Information identifying the source or provider of the data.

<br>

These options allow you to update descriptive information without having to navigate to the GeoServer interface separately.

<br>

## Managing GeoWebCache

GeoServer connections also provide access to GeoWebCache management operations. GeoWebCache stores map tiles so that frequently requested map views can be served more efficiently.

<br>

CloudBench supports the following operations:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Seed</td>
      <td>Generate cached tiles for a layer.</td>
    </tr>
    <tr>
      <td>Reseed</td>
      <td>Regenerate cached tiles when the underlying data or display has changed.</td>
    </tr>
    <tr>
      <td>Truncate</td>
      <td>Remove cached tiles for a layer.</td>
    </tr>
  </tbody>
</table>

<br>

Progress is displayed while these operations are running.

<br>

## Synchronising GeoServer Resources

CloudBench supports synchronising resources between connected GeoServer instances. This allows you to replicate selected resources from one GeoServer to another, including:

- Workspaces
- Data stores
- Layers
- Styles

<br>

This functionality can be useful when maintaining multiple GeoServer environments or transferring resources between servers.

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
      <td>Check that the GeoServer URL is correct and that the service is running and reachable from CloudBench.</td>
    </tr>
    <tr>
      <td>Authentication fails</td>
      <td>Confirm that the username and password are correct.</td>
    </tr>
    <tr>
      <td>Resources are missing</td>
      <td>Check that the connected account has permission to access the relevant GeoServer resources.</td>
    </tr>
    <tr>
      <td>A layer cannot be previewed</td>
      <td>Confirm that the layer is published and that its WMS or WMTS service is available.</td>
    </tr>
    <tr>
      <td>A cache operation does not work</td>
      <td>Check that GeoWebCache is available and that the connected account has the required permissions.</td>
    </tr>
  </tbody>
</table>

<br>
