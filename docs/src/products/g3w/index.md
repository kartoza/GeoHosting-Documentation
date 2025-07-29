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

# G3W-SUITE

## What is G3W?

**G3W-SUITE** is a comprehensive and modular WebGIS platform designed to simplify the management and publication of interactive geographic data. It provides a streamlined, fast, and autonomous solution for organizations and individuals who need to share their [QGIS](https://qgis.org/)-based cartographic projects with others via the web.

Built using the **Django** web framework and developed in **Python**, G3W-SUITE seamlessly integrates with QGIS Server to bring desktop GIS capabilities into a web environment. It supports full interactivity, including data viewing, querying, editing, and analysis, all within a user-friendly interface accessible through any modern browser.

<br>

<div class="image-with-caption">
  <img src="./img/g3w-img-1.png" alt="G3W Logo" style="width: 50%;">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Core Technologies

G3W-SUITE relies on proven, open-source software to deliver a reliable and scalable WebGIS solution. At the heart of the system is **QGIS**, which provides powerful tools for data management, editing, and map

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Role in G3W-SUITE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>QGIS Desktop</td>
      <td>Manage cartographic data, perform edits, and design high-quality map projects.</td>
    </tr>
    <tr>
      <td>QGIS Server</td>
      <td>Publish QGIS projects as web services following <a href="http://www.opengeospatial.org/" target="_blank">OGC standards</a>.</td>
    </tr>
  </tbody>
</table>

<br>

## G3W-SUITE Architecture

G3W-SUITE is built on a modular architecture consisting of **three core components**, each serving a distinct role in the platform’s functionality:

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Module</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>G3W-ADMIN</td>
      <td>
        - Central administrative interface for project and service management<br>
        - Manages Access Control Lists (ACL)<br>
        - Integrates an OGC proxy server<br>
        - Exposes a RESTful API for external integrations
      </td>
    </tr>
    <tr>
      <td>G3W-CLIENT</td>
      <td>
        - Interactive web cartographic client<br>
        - Enables users to view and interact with published OGC services
      </td>
    </tr>
    <tr>
      <td>Front-End Portal</td>
      <td>
        - Public-facing access point<br>
        - Facilitates discovery of WebGIS services and thematic content
      </td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="./img/g3w-img-2.png" alt="G3W Modules" style="width: 50%;">
</div>

<br>

## Key Features & Capabilities

Using the G3W-SUITE web interface, users can:

- **Publish** QGIS projects seamlessly to the WebGIS environment with structured organization.
- **Organize** WebGIS services into hierarchical thematic and functional containers.
- **Manage** users and groups with customizable roles tailored to functional needs.
- **Edit** spatial data directly within the browser for quick updates.
- **Extent** functionality by enabling additional modular features.
- **Define** granular access permissions for services and modules on a per-user basis.

<br>

<div class="image-with-caption">
  <img src="./img/g3w-img-3.png" alt="Key" style="width: 55%;">
</div>

<br>

## Community & Development

G3W-SUITE is a **collaborative open-source project**, actively maintained and supported by a growing community of developers, organizations, and GIS professionals. Below are key resources to get involved, contribute, or learn more:

<br>

<div class="cards-grid">
  <div class="card">
    <div class="card-header">
      🌐 <a href="https://g3wsuite.it/en/" target="_blank">Homepage</a>
    </div>
    <div class="card-body">
      Visit the official G3W-SUITE site for product overviews, news, and use cases.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      💻 <a href="https://github.com/g3w-suite/g3w-suite" target="_blank">Source Code</a>
    </div>
    <div class="card-body">
      Explore the full codebase and contribute via GitHub.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      📚 <a href="https://docs.g3wsuite.it/en/" target="_blank">Documentation</a>
    </div>
    <div class="card-body">
      Official user and developer documentation for setup, use, and extensions.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      🐞 <a href="https://github.com/g3w-suite/g3w-suite/issues" target="_blank">Issue Tracker</a>
    </div>
    <div class="card-body">
      Report bugs, request features, or track development progress.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      🔧 <a href="https://github.com/g3w-suite/g3w-suite/blob/master/CONTRIBUTING.md" target="_blank">Contribute</a>
    </div>
    <div class="card-body">
      Guidelines and tips for contributing to the G3W-SUITE project.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      📢 <a href="https://g3wsuite.it/en/contacts/" target="_blank">Contact & Support</a>
    </div>
    <div class="card-body">
      Reach out for support, collaboration, or commercial services.
    </div>
  </div>
</div>

<br>
