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

- **ACL (Access Control List)**
  A mechanism for defining which users or groups have permission to view or manage specific services, modules, or data within G3W-SUITE.

- **Base Layer**
  The default map layer (e.g., OSM) that loads when a WebGIS service is opened.

- **Cartographic Group**
  A subcategory within a MacroGroup that holds individual WebGIS services or projects.

- **Cartographic MacroGroup**
  A top-level thematic container in G3W-SUITE used to organize collections of related WebGIS services.

- **Feature Locking**
  A multi-user editing mechanism that locks visible features to the active editor to prevent conflicts.

- **File Manager**
  The interface in the Administration Panel for uploading and organizing service data files.

- **Front-End Geographic Portal**
  The public-facing portal in G3W-SUITE for browsing thematic macrogroups, groups, and services.

- **G3W-ADMIN**
  The administration module of G3W-SUITE, providing project management, ACL, OGC proxy, and REST API functionality.

- **G3W-CLIENT**
  The cartographic web client module of G3W-SUITE, enabling visualization and interaction with published OGC services.

- **Geocoding Provider**
  An external service configured in G3W-SUITE for address-based searches.

- **GetFeatureInfo**
  A WMS operation to retrieve attribute information for features at a clicked map location.

- **Hosted Services**
  Instances of G3W-SUITE provisioned via the Kartoza GeoSpatialHosting Dashboard.

- **Layer TOC**
  The table of contents panel listing all layers in a WebGIS service.

- **OGC Proxy**
  A component in G3W-ADMIN that forwards OGC service requests to QGIS Server.

- **OGC Services**
  Web services conforming to Open Geospatial Consortium standards, such as WMS (Web Map Service) and WFS (Web Feature Service).

- **Panoramic Overview Map**
  A mini-map view displayed in the corner of the WebGIS interface for spatial context.

- **REST API Server**
  The backend API provided by G3W-ADMIN for programmatic access and integrations.

- **SpatiaLite**
  An extension of SQLite that adds support for spatial/geographic data storage in a single file.

- **Thumbnail (Logo)**
  A small image representing a WebGIS project in list views.

- **URL Alias**
  A human-readable path segment used to access a WebGIS service (e.g., `/g3w`).

- **WebGIS Service**
  A QGIS project published as an OGC service (e.g., WMS/WFS) through G3W-SUITE.

- **Widgets**
  Client-side tools configurable per layer in the cartographic client, such as:
  - **Search Widget**: Enables attribute-based queries.
  - **Plots (QPlotly) Widget**: Embeds interactive Plotly charts based on DataPlotly definitions.
