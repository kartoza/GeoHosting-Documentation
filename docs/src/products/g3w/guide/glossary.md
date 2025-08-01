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

# Glossary of Terms

New to G3W-SUITE? This glossary defines the key concepts, tools, and components you'll encounter while managing or using the platform.

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
      <td>🔐 Access Control List (ACL)</td>
      <td>A rule-based system that controls which users or groups can access or manage specific services, modules, or data in G3W-SUITE.</td>
    </tr>
    <tr>
      <td>🗺️ Base Layer</td>
      <td>The default background map (e.g., OpenStreetMap) displayed when a WebGIS service is loaded.</td>
    </tr>
    <tr>
      <td>📁 Group</td>
      <td>A sub-unit within a Macro Group that contains one or more published WebGIS services or QGIS projects.</td>
    </tr>
    <tr>
      <td>🗃️ Macro Group</td>
      <td>A top-level organizational container used to group related WebGIS services by theme or function.</td>
    </tr>
    <tr>
      <td>🔒 Feature Locking</td>
      <td>A mechanism that prevents editing conflicts by locking visible features during multi-user editing sessions.</td>
    </tr>
    <tr>
      <td>🗂️ File Manager</td>
      <td>The section of the Admin Panel used to upload, organize, and manage supporting data files for services.</td>
    </tr>
    <tr>
      <td>🌐 Front-End Portal</td>
      <td>The public-facing interface where users browse MacroGroups, Groups, and access available WebGIS services.</td>
    </tr>
    <tr>
      <td>⚙️ G3W-ADMIN</td>
      <td>The administrative backend of G3W-SUITE, used for configuring projects, managing ACLs, OGC proxy, and accessing the REST API.</td>
    </tr>
    <tr>
      <td>🖥️ G3W-CLIENT</td>
      <td>The front-end cartographic viewer where users interact with published WebGIS projects and tools.</td>
    </tr>
    <tr>
      <td>📍 Geocoding Provider</td>
      <td>An external service integrated into G3W-SUITE to enable location searches by address or place name.</td>
    </tr>
    <tr>
      <td>🛈 GetFeatureInfo</td>
      <td>A WMS request used to return attribute data for map features based on a clicked location.</td>
    </tr>
    <tr>
      <td>☁️ Hosted Services</td>
      <td>Managed G3W-SUITE deployments provided through Kartoza’s GeoSpatialHosting platform.</td>
    </tr>
    <tr>
      <td>📋 Layer TOC</td>
      <td>The layer tree or “Table of Contents” panel in the WebGIS client showing all active layers.</td>
    </tr>
    <tr>
      <td>🔁 OGC Proxy</td>
      <td>A service that forwards OGC requests (e.g., WMS/WFS) to the underlying QGIS Server instance.</td>
    </tr>
    <tr>
      <td>🌐 OGC Services</td>
      <td>Web services based on OGC standards, such as WMS (maps) and WFS (features), supported natively by G3W-SUITE.</td>
    </tr>
    <tr>
      <td>🗺️ Overview Map</td>
      <td>A mini-map displayed in the corner of the WebGIS client, providing a broader spatial reference.</td>
    </tr>
    <tr>
      <td>🔗 REST API Server</td>
      <td>The backend interface that allows programmatic access to G3W-ADMIN functionalities and service metadata.</td>
    </tr>
    <tr>
      <td>🗃️ SpatiaLite</td>
      <td>A lightweight spatial database format extending SQLite to support geographic data in a single file.</td>
    </tr>
    <tr>
      <td>🖼️ Thumbnail (Logo)</td>
      <td>A small preview image representing a WebGIS service in the client portal or admin dashboard.</td>
    </tr>
    <tr>
      <td>🔗 URL Alias</td>
      <td>A custom, human-readable web path used to access a specific WebGIS service (e.g., <code>/g3w</code>).</td>
    </tr>
    <tr>
      <td>🗺️ WebGIS Service</td>
      <td>A QGIS project published through G3W-SUITE and made available as an interactive web map via WMS/WFS.</td>
    </tr>
    <tr>
      <td>🧩 Widgets</td>
      <td>Interactive tools that enhance the map client (e.g. Search and Plots widgets)</td>
    </tr>
  </tbody>
</table>

<br>
