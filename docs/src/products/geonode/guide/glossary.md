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

# Glossary of Terms

Not sure what a *layer*, *dashboard*, or *GeoStory* is? This quick glossary breaks down key GeoNode terms to help you get oriented.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Term</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📦 Bounding Box</td>
      <td>The smallest rectangle (<code>min X</code>, <code>min Y</code>, <code>max X</code>, <code>max Y</code>) that fully contains the spatial extent of a dataset.</td>
    </tr>
    <tr>
      <td>📊 Dashboard</td>
      <td>A MapStore workspace combining widgets—charts, tables, counters, text, and maps—for interactive data analysis.</td>
    </tr>
    <tr>
      <td>🗂️ Dataset</td>
      <td>A spatial layer (vector or raster) uploaded to GeoNode. Datasets are served via OGC services (WMS, WFS, WCS) and described with metadata.</td>
    </tr>
    <tr>
      <td>📎 Document</td>
      <td>Any non-spatial file (e.g., PDF, image, spreadsheet, SLD) uploaded to GeoNode. Can be associated with datasets or projects.</td>
    </tr>
    <tr>
      <td>📖 GeoStory</td>
      <td>A storytelling tool using MapStore. Combines text, images, and interactive maps into scrollable narratives.</td>
    </tr>
    <tr>
      <td>👥 Group</td>
      <td>A collection of users with shared permissions. Groups can be granted rights to view, edit, or manage GeoNode resources.</td>
    </tr>
    <tr>
      <td>🗺️ Layer</td>
      <td>The renderable representation of a dataset in GeoServer. Often used interchangeably with "dataset" in GeoNode.</td>
    </tr>
    <tr>
      <td>🧭 Map</td>
      <td>A saved composition of one or more layers shown in the Map Viewer. Includes metadata, sharing settings, and embed options.</td>
    </tr>
    <tr>
      <td>🖥️ Map Viewer</td>
      <td>The interactive interface for building maps: add datasets, configure styles, and save compositions.</td>
    </tr>
    <tr>
      <td>🌐 OGC Services</td>
      <td>Standards for web-based geospatial services: <strong>WMS</strong> (maps), <strong>WFS</strong> (features), <strong>WCS</strong> (rasters), and <strong>CSW</strong> (metadata).</td>
    </tr>
    <tr>
      <td>🛡️ Permission Levels</td>
      <td>Define allowed actions on a resource: <code>View</code>, <code>Download</code>, <code>Edit</code>, and <code>Manage</code>.</td>
    </tr>
    <tr>
      <td>📚 Resource</td>
      <td>A generic term for any item managed in GeoNode: datasets, maps, documents, dashboards, geostories, etc.</td>
    </tr>
    <tr>
      <td>🎨 SLD (Styled Layer Descriptor)</td>
      <td>XML format for defining how layers appear. Used by GeoServer and editable from within GeoNode.</td>
    </tr>
    <tr>
      <td>🖌️ Style</td>
      <td>SLD or CSS rules defining visual properties of layers—colors, symbols, stroke width, fill, opacity, and more.</td>
    </tr>
  </tbody>
</table>

<br>
