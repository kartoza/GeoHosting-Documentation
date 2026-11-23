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

# S3 Storage

CloudBench supports connections to S3-compatible object storage, allowing you to browse, upload, and manage geospatial files stored in a bucket.

Unlike the GeoServer, PostgreSQL/PostGIS, and GeoNode connections, S3 storage can also be used to convert supported datasets into **cloud-native formats** using CloudNativeGIS.

These formats are designed to make geospatial data more efficient to access over the internet. Once converted, supported datasets can be previewed directly in CloudBench as interactive maps, tables, or 3D point clouds.

<br>

## S3 Storage Overview

S3 object storage provides a way to store files in buckets rather than in a traditional file system. CloudBench connects to one specific bucket at a time. You can browse the objects and folders within that bucket and upload additional datasets.

<br>

CloudBench supports S3-compatible storage providers, including:

- Amazon Web Services (AWS) S3
- MinIO
- DigitalOcean Spaces

<br>

Other S3-compatible storage services may also be supported, provided they expose a compatible endpoint and the required access credentials are configured correctly to allow CloudBench to establish a connection.

<br>

## Connecting to S3 Storage

S3 connections are configured separately from your GeoSpatialHosting product instances and must be added manually using the connection details and credentials provided by your S3 storage provider.

<br>

To connect an external bucket:

1. Locate <span class="ui-page-label">S3 Storage</span> in the connection tree.
2. Select the <span class="ui-generic-label">+</span> icon next to the connection type.
3. Provide the S3 connection details.
5. Select <span class="ui-generic-label">Test Connection</span> to check that CloudBench can access the bucket.
6. If the test succeeds, select <span class="ui-generic-label">Add Connection</span> to save.

<br>

You will need the following information:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Endpoint</td>
      <td>The endpoint URL provided by your S3 storage provider.</td>
    </tr>
    <tr>
      <td>Region</td>
      <td>The region in which the bucket is hosted.</td>
    </tr>
    <tr>
      <td>Bucket</td>
      <td>The name of the bucket you want to connect to.</td>
    </tr>
    <tr>
      <td>Access Key</td>
      <td>The access key used to authenticate with the storage service.</td>
    </tr>
    <tr>
      <td>Secret Key</td>
      <td>The secret key associated with the access key.</td>
    </tr>
  </tbody>
</table>

<br>

The exact endpoint and region values depend on your storage provider.

Your credentials must have the permissions required to access and list the bucket. If you intend to upload files, the credentials must also allow the required write operations.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-8.png" alt="Connecting to S3 Storage">
</div>

<br>

## Uploading Files

Once connected, expand the S3 connection in the connection tree to browse the contents of the selected bucket, including its folders and stored objects.

<br>

To upload a dataset:

1. Select the relevant **S3 Storage** connection.
2. From the overview page, select <span class="ui-generic-label">Upload</span>.
3. Choose the file or files you want to upload.
4. Select an available <span class="ui-generic-label">Server type</span>.
5. Review the server specifications and hourly price.
6. Click <span class="ui-generic-label">Upload</span>.

<br>

For supported geospatial formats, CloudBench can also offer the option to convert the uploaded data into cloud-native formats.

Once the job starts, CloudBench displays its progress. You can close the upload dialog while the conversion continues. When processing finishes, the generated files are published to your S3 bucket and the bucket listing is refreshed.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-9.png" alt="Uploading Files">
</div>

<br>

## Previewing Data

Once a conversion / upload has completed, you can browse the generated files in your S3 connection and open supported outputs in CloudBench.

<br>

The available preview depends on the output format:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Preview</th>
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

The generated outputs are standard geospatial files. They can also be used with compatible applications and tools, including QGIS and GDAL.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-10.png" alt="Previewing Cloud-Native Data">
</div>

<br>

## Cloud-Native Formats

Cloud-native formats are designed to make large geospatial datasets more efficient to access over the internet by allowing compatible applications to request only the data needed for a particular view or operation, rather than downloading the entire dataset first.

<br>

CloudBench supports four main cloud-native output formats:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>File Extension</th>
      <th>Input Data</th>
      <th>Typical Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud Optimized GeoTIFF</td>
      <td><code>.tif</code></td>
      <td>Raster data, such as GeoTIFF imagery and elevation models.</td>
      <td>Display raster data efficiently on an interactive map.</td>
    </tr>
    <tr>
      <td>PMTiles</td>
      <td><code>.pmtiles</code></td>
      <td>Vector datasets.</td>
      <td>Serve pre-generated vector tiles from a single file.</td>
    </tr>
    <tr>
      <td>GeoParquet</td>
      <td><code>.parquet</code></td>
      <td>Vector features and their attributes.</td>
      <td>Explore, query, and analyse vector data in a columnar format.</td>
    </tr>
    <tr>
      <td>Cloud Optimized Point Cloud</td>
      <td><code>.copc.laz</code></td>
      <td>LAS/LAZ point clouds.</td>
      <td>Stream and visualise LiDAR data in a 3D viewer.</td>
    </tr>
  </tbody>
</table>

<br>

### Cloud Optimized GeoTIFFs

A Cloud Optimized GeoTIFF is a GeoTIFF arranged so that compatible applications can request only the parts of the raster they need. COGs use internal tiling and overviews to make it more efficient to display raster data at different zoom levels.

A COG remains a GeoTIFF that can be opened in compatible GIS applications, while CloudBench generates a Web Mercator version for displaying the dataset in its map preview.

They are useful for satellite and aerial imagery, digital elevation models (DEMs) and other large raster datasets.

<br>

### PMTiles

PMTiles stores pre-generated vector tiles in a single file. Instead of requiring a separate tile server to serve the tiles, compatible applications can read the file directly using HTTP range requests.

PMTiles is useful when you want to display large vector datasets on an interactive web map without serving every feature individually.

<br>

### GeoParquet

GeoParquet is a columnar file format for storing vector features, their geometries, and their attributes. It is particularly useful when you want to explore or analyse the data rather than only display it on a map.

For vector uploads, CloudBench can generate both PMTiles and GeoParquet. **PMTiles** provides an output for map visualisation, while **GeoParquet** provides an output for working with the feature data and attributes.

<br>

### Cloud Optimized Point Clouds

COPC is a cloud-optimised format for storing LiDAR point clouds. It organises point cloud data so that compatible viewers can stream the points needed for a particular view instead of downloading the entire dataset.

CloudBench can generate COPC from LAS and LAZ point cloud uploads and display the result in an interactive 3D viewer.

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

## On-Demand Conversions

CloudBench can convert supported uploads into cloud-native formats using CloudNativeGIS. When using on-demand conversion mode, each conversion job receives its own temporary processing server.

GSH provisions the server for the job and removes it once processing is finished. This means you do not need to maintain a dedicated processing server for each conversion.

<br>

The available conversion depends on the input data:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Input Data</th>
      <th>Output</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeoTIFF</td>
      <td>COG</td>
      <td>Converts a raster dataset into a Cloud Optimized GeoTIFF.</td>
    </tr>
    <tr>
      <td>Multiple GeoTIFFs</td>
      <td>COG mosaic, VRT, and STAC catalogue</td>
      <td>Combines multiple raster tiles into a mosaic and generates supporting files.</td>
    </tr>
    <tr>
      <td>Vector data</td>
      <td>PMTiles and GeoParquet</td>
      <td>Generates vector tiles for map display and a columnar dataset for data exploration.</td>
    </tr>
    <tr>
      <td>LAS/LAZ point cloud</td>
      <td>COPC</td>
      <td>Converts point cloud data into a cloud-optimised format for 3D viewing.</td>
    </tr>
  </tbody>
</table>

<br>

Each conversion publishes its output into its own folder in the bucket. CloudBench also registers the generated layer in the bucket catalogue and creates a thumbnail for preview.

<br>

An on-demand conversion moves through several stages:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Stage</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Provisioning</td>
      <td>GeoHosting starts a temporary processing server and waits for it to become available.</td>
    </tr>
    <tr>
      <td>Pushing</td>
      <td>CloudBench hands the input file or its location to the processing service.</td>
    </tr>
    <tr>
      <td>Polling</td>
      <td>CloudBench checks the conversion job until processing is complete.</td>
    </tr>
    <tr>
      <td>Verifying</td>
      <td>The generated outputs are checked.</td>
    </tr>
    <tr>
      <td>Publishing</td>
      <td>The outputs are written to the S3 bucket and the layer is registered in the bucket catalogue.</td>
    </tr>
    <tr>
      <td>Deprovisioning</td>
      <td>The temporary processing server is deleted.</td>
    </tr>
    <tr>
      <td>Completed</td>
      <td>The conversion has finished successfully.</td>
    </tr>
  </tbody>
</table>

<br>

The temporary server is removed whether the conversion succeeds or fails. If a job fails, it records an error and does not publish incomplete output files.

<br>

### Conversion Costs

On-demand conversions use temporary cloud servers that are billed by the started hour. This means that even a conversion that takes only a few minutes may incur a full hour of server charges.

The price displayed in CloudBench is based on the underlying Hetzner server price plus a configured GeoHosting margin. The server is deleted when the job finishes, so you are not paying for an idle processing server after the conversion.

<br>

Consider the following when selecting a server and preparing your data:

- **Server size**: Select the smallest available server that can comfortably handle your dataset.

- **Hourly pricing**: Check the displayed hourly rate before confirming the job.

- **Failed / cancelled jobs**: These may still incur charges for the server time already used.

- **Raster tiles**: If you have several GeoTIFF tiles that belong together, consider processing them as a single mosaic rather than running separate conversions.

<br>

### Cancelling Conversions

You can cancel an on-demand conversion while it is still in the pending, pushing, or polling stages.  Once a job reaches the verifying or publishing stages, it can no longer be cancelled.

When a job is cancelled, CloudBench stops it at the next available step, removes the temporary processing server, and marks the job as cancelled.

If a GeoPackage upload creates paired conversion jobs, cancelling one also cancels the other.

<br>

### Conversion Limitations

**GeoPackage** conversion is currently not available in **On-Demand** mode. A GeoPackage may contain vector layers and raster tables, which are handled as separate conversion jobs. 

CloudBench needs to inspect the GeoPackage before presenting the available conversion options. That inspection step requires a processing environment, which is not currently available in the on-demand workflow.

<br>

In **Fixed (non-demand)** mode, the vector and raster conversion jobs use separate processing jobs, one after the other. If you need to convert a GeoPackage:

- Use fixed conversion mode, where available.
- Alternatively, convert the relevant layers separately using supported input formats.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Each on-demand conversion job uses its own temporary server. If a dataset produces multiple conversion jobs, each job is processed separately rather than sharing one server.
  </div>
</div>

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
      <td>S3 connection test fails</td>
      <td>Check the endpoint, region, bucket name, and access credentials. Confirm that the credentials have permission to list the bucket.</td>
    </tr>
    <tr>
      <td>Authentication or signature error</td>
      <td>Check that the access key and secret key are correct and that the configured region matches your storage provider.</td>
    </tr>
    <tr>
      <td>Cannot browse bucket contents</td>
      <td>Confirm that the credentials have permission to list objects in the bucket.</td>
    </tr>
    <tr>
      <td>Upload fails</td>
      <td>Check the connection and the permissions associated with the S3 credentials.</td>
    </tr>
    <tr>
      <td>Conversion option is unavailable</td>
      <td>Check whether the uploaded file type is supported and whether conversion is configured for the connection.</td>
    </tr>
    <tr>
      <td>A server size is unavailable</td>
      <td>The selected server type may currently be out of stock. Choose another available size.</td>
    </tr>
    <tr>
      <td>Conversion fails</td>
      <td>Review the job status and error information. Failed jobs do not publish incomplete outputs, and the temporary server is removed.</td>
    </tr>
    <tr>
      <td>GeoPackage conversion fails in on-demand mode</td>
      <td>GeoPackage conversion is currently unsupported in on-demand mode. Use fixed mode or convert the relevant layers separately.</td>
    </tr>
  </tbody>
</table>

<br>
