---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Data & Preparation

GeoNode makes it easy to upload, store, and prepare spatial data for sharing. This page introduces the formats, storage methods, and metadata options used in the manual.

<br>

## Geospatial Data Handling

GeoNode supports uploading **vector** and **raster** datasets through a simple web form. Vector formats include Shapefiles, GeoJSON, CSV, KML, and KMZ. Raster data like satellite imagery is stored as GeoTIFF files.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Vector Data</th>
      <th>Raster Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Formats</td>
      <td>Shapefile, GeoJSON, CSV, KML, KMZ</td>
      <td>GeoTIFF</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>Converted into geospatial DB tables</td>
      <td>Stored as GeoTIFF files</td>
    </tr>
    <tr>
      <td>Examples</td>
      <td>Roads, boundaries, facilities</td>
      <td>Satellite imagery, aerial photos</td>
    </tr>
    <tr>
      <td>Projection Handling</td>
      <td>Preserved and reprojected for map display</td>
      <td>Preserved in original projection</td>
    </tr>
    <tr>
      <td>Map Usage</td>
      <td>Searchable, combinable with other layers</td>
      <td>Searchable, used as basemaps</td>
    </tr>
  </tbody>
</table>

<br>

GeoNode supports **standardized metadata**, particularly ISO 19139 and ISO 19115. You can:

- Edit metadata manually after upload
- Auto-fill metadata by uploading XML files (ISO, FGDC, Dublin Core)
- Expose data via OGC APIs like CSW, WFS, and WMS

<br>

GeoNode also offers a built-in **style editor** to adjust layer appearance directly from the browser.

<br>

## Data Preperation

This manual uses a prepackaged dataset of central Berlin, extracted from the **BBBike OSM Extract Service**. You can download the ready-to-use package here:

- [<span class="ui-filename">Manual_Data_GeoNode.zip</span>](https://github.com/kartoza/GeoHosting-Documentation/docs/src/products/manual_data/Manual_Data_GeoNode.zip)

<br>

After unzipping, you’ll find the following folders:

- 📁 **Data** – Shapefiles of Berlin’s city center, extracted from BBBike OSM.
- 📁 **Style** – Predefined <span class="ui-filename">.sld</span> files for symbolizing each layer.
- 📁 **Doc** – Includes a README with information on the dataset and extract process.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Want to use your own area? Head to the <a href="https://extract.bbbike.org/" target="_blank">BBBike Extract Service</a> to generate a custom dataset.
  </div>
</div>

<br>

---

**Next up:** Now that your data is prepared, we’ll walk you through how to upload your datasets to GeoNode and get them ready for use on your map.

<br>
