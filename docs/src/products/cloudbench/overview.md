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

# CloudBench Overview

## How It Works

CloudBench is a central workbench for managing and working with geospatial data across multiple services.

Through one web interface, users can connect to GeoServer, PostgreSQL/PostGIS, GeoNode, and S3 object storage. Each connection provides access to a particular service or storage location and the resources available within it.

Users can browse existing data, upload new datasets, perform supported operations, and preview layers without constantly switching between different applications.

For S3 storage, CloudBench provides additional functionality by allowing supported datasets to be converted into cloud-native formats using CloudNativeGIS. These outputs can then be accessed directly from the storage bucket and previewed in CloudBench.

<br>

## CloudBench Architecture

CloudBench consists of several components that work together to manage connections, process geospatial data, and make the resulting datasets accessible.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CloudBench</td>
      <td>Provides the interface for managing connections, uploading datasets, initiating conversions, and previewing supported outputs.</td>
    </tr>
    <tr>
      <td>GeoServer</td>
      <td>Provides access to connected GeoServer instances through their configured connection details.</td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td>Provides access to connected databases for working with spatial data stored in PostgreSQL with PostGIS enabled.</td>
    </tr>
    <tr>
      <td>GeoNode</td>
      <td>Provides a destination for uploading supported datasets and managing their metadata through the connected account.</td>
    </tr>
    <tr>
      <td>S3 Storage</td>
      <td>Stores uploaded datasets and published cloud-native outputs in an object storage bucket.</td>
    </tr>
    <tr>
      <td>CloudNativeGIS</td>
      <td>Processes supported datasets and generates cloud-native formats for storage and visualisation.</td>
    </tr>
    <tr>
      <td>Layer Preview</td>
      <td>Displays supported outputs directly in CloudBench as maps, tables, or 3D point clouds, depending on the format.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../img/cloudbench-img-3.png" alt="CloudBench Architecture and Data Workflow" style="width: 100%;">
</div>

<br>

## Connections

Everything in CloudBench is organised around a **connection**. A connection is a saved configuration that allows CloudBench to communicate with a specific external service or storage location.

Each connection is scoped to one target. For example, a GeoServer connection points to one GeoServer instance, while an S3 connection points to one specific bucket.

Multiple connections of the same type can be configured, allowing users to switch between different services from the connection tree.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Connection</th>
      <th>What It Manages</th>
      <th>Typical Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeoServer</td>
      <td>Workspaces, data stores, coverage stores, layers, styles, and tile caches.</td>
      <td>Manage published layers, update metadata, preview maps, and manage cached tiles.</td>
    </tr>
    <tr>
      <td>PostgreSQL</td>
      <td>Database services, schemas, and tables.</td>
      <td>Browse spatial data, execute SQL queries, and work with database content.</td>
    </tr>
    <tr>
      <td>GeoNode</td>
      <td>Datasets and other supported resources on a GeoNode site.</td>
      <td>Upload geospatial datasets and manage their titles and abstracts.</td>
    </tr>
    <tr>
      <td>S3 Storage</td>
      <td>Objects and folders within a specific storage bucket.</td>
      <td>Store, browse, upload, and convert cloud-native geospatial datasets.</td>
    </tr>
  </tbody>
</table>

<br>

## General Workflow

Most CloudBench tasks follow a similar workflow:

1. **Connect** - Select an existing connection or add a new one, CloudBench tests new connections before saving them.

2. **Browse** - Expand the connection in the left-hand tree to explore its available resources, such as workspaces, layers, database tables, or bucket objects.

3. **Upload/Import** - Upload a dataset to the selected destination. Depending on the connection type, you can upload files to S3 or GeoNode, or use the GeoServer and database workflows.

4. **Process** - Perform the required operations, such as converting an S3 upload into a cloud-native format or managing a GeoServer resource.

5. **Preview** - Open and explore supported datasets visually on a map, in a table, or through an interactive 3D viewer.

6. **Use or Share** - Use the resulting data in other GIS applications, publish it through a connected service, or share access to the stored files.

<br>

### Working with GeoServer

The GeoServer connection provides a structured view of the resources available on a connected GeoServer instance. Users can navigate through:

- Workspaces
- Data stores
- Coverage stores
- Layers
- Styles

CloudBench also provides tools for editing layer metadata, previewing published layers, managing GeoWebCache tiles, and synchronising resources between GeoServer instances.

This makes it easier to manage common GeoServer tasks without having to navigate through the GeoServer interface separately.

<br>

### Working with PostgreSQL

The PostgreSQL/PostGIS connection allows users to work directly with their connected spatial databases. Users can browse database schemas and tables, inspect available data, and execute SQL queries through CloudBench.

PostGIS provides the spatial database functionality required to store and work with geographic data, making it an important part of many GIS workflows.

<br>

### Working with GeoNode

CloudBench can connect to an existing GeoNode site and upload supported geospatial datasets.

During an upload, users can specify a dataset title and an optional abstract. CloudBench applies this information after the GeoNode import has completed.

Uploads and metadata updates use the permissions of the account configured in the GeoNode connection.

<br>

### Working with S3 Storage

S3 storage provides a place to store and manage geospatial files using object storage. CloudBench supports S3-compatible providers, including:

- Amazon Web Services (AWS) S3
- MinIO
- DigitalOcean Spaces

In addition to browsing and uploading files, CloudBench can convert supported datasets into cloud-native formats using CloudNativeGIS.

The generated outputs are stored in the connected bucket, registered in its catalogue, and prepared for browser-based preview.

<br>

### Cloud-Native Data Formats

Cloud-native formats are designed to make geospatial datasets more efficient to access over the internet. Instead of downloading an entire dataset before viewing it, compatible applications can request only the portions of data needed for the current view or operation.

<br>

CloudBench supports the following formats:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Input Data</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud Optimized GeoTIFF</td>
      <td>GeoTIFF raster files</td>
      <td>Efficient access to raster imagery and elevation datasets.</td>
    </tr>
    <tr>
      <td>PMTiles</td>
      <td>Vector datasets</td>
      <td>Serve pre-generated vector tiles from a single file.</td>
    </tr>
    <tr>
      <td>GeoParquet</td>
      <td>Vector datasets</td>
      <td>Store and query vector features and their attributes.</td>
    </tr>
    <tr>
      <td>Cloud Optimized Point Cloud</td>
      <td>LAS/LAZ point clouds</td>
      <td>Efficient streaming and visualisation of LiDAR data.</td>
    </tr>
  </tbody>
</table>

<br>

For vector uploads, CloudBench can generate both PMTiles and GeoParquet, providing an output for map visualisation as well as data analysis.

<br>

## Conversion Modes

CloudBench supports two conversion modes for processing geospatial datasets.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Mode</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fixed (Non-Demand)</td>
      <td>Conversion jobs run on an existing CloudNativeGIS server that remains available for processing.</td>
    </tr>
    <tr>
      <td>On-Demand</td>
      <td>A temporary cloud server is provisioned for each conversion job and removed once the job finishes.</td>
    </tr>
  </tbody>
</table>

<br>

In on-demand mode, users select an available server size and review the displayed cost before confirming the conversion. The server is deleted when the job completes or fails, preventing it from remaining active unnecessarily.

<br>

## Layer Preview

CloudBench provides browser-based previews for supported datasets, allowing users to inspect their data without first downloading it or opening another GIS application.

<br>

The preview depends on the output format:

- **COG**: Displayed as raster data on an interactive map.
- **PMTiles**: Displayed as vector tiles on an interactive map.
- **GeoParquet**: Available as a data table and for map visualisation.
- **COPC**: Displayed as an interactive 3D point cloud.

<br>

The generated files remain standard geospatial formats and can also be accessed by compatible applications such as QGIS and GDAL.

<br>

## Pricing & Billing

The billing considerations described here apply specifically to on-demand conversions.

Each on-demand conversion runs on a temporary cloud server provisioned for the job. The selected server is billed by the started hour, meaning even a short conversion can incur a full hour of server charges.

The price displayed in CloudBench is based on the underlying Hetzner server price plus a configured GeoHosting margin.

<br>

To manage conversion costs:

- Choose the smallest server size suitable for the dataset.
- Combine multiple raster tiles into a mosaic where appropriate.
- Review the displayed price before confirming a conversion.
- Remember that cancelled or failed jobs may still incur a charge for the started hour.

<br>

<div class="alert alert-note">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    GeoPackage conversion is currently not available in on-demand mode because its inspection step requires a processing environment. Use fixed mode or convert the relevant layers separately.
  </div>
</div>

<br>
