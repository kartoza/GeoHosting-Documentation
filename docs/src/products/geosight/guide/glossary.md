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

New to GeoSight? This glossary explains the key concepts, components, and tools you’ll encounter while building dashboards and managing spatial data on the platform.

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
      <td>🗺️ Project (Dashboard)</td>
      <td>A collection of indicators, context layers, widgets, and filters used to visualize and analyse data for a specific area or theme.</td>
    </tr>
    <tr>
      <td>📊 Indicator</td>
      <td>A measurable variable (e.g. population, malnutrition rate) used to represent and analyse conditions over time and space.</td>
    </tr>
    <tr>
      <td>🧱 Indicator Layer</td>
      <td>A visual representation of an indicator on the map, styled and configured within a project</td>
    </tr>
    <tr>
      <td>🌍 Reference Dataset</td>
      <td>A boundary dataset (e.g. countries, provinces, districts) used to map and aggregate indicator data geographically.</td>
    </tr>
    <tr>
      <td>🧾 Geography Code (UCode)</td>
      <td>A unique identifier used to link indicator data to specific geographic features in a reference dataset.</td>
    </tr>
    <tr>
      <td>🗂️ Context Layer</td>
      <td>Additional spatial data (e.g. schools, hospitals, events) that provides context alongside indicators in a project.</td>
    </tr>
    <tr>
      <td>🗺️ Basemap</td>
      <td>The background map layer (e.g. OpenStreetMap) that provides geographic reference for all displayed data.</td>
    </tr>
    <tr>
      <td>🎨 Style</td>
      <td>Defines how spatial data is visually displayed, including colours, classifications, and symbology.</td>
    </tr>
    <tr>
      <td>📥 Data Import</td>
      <td>The process of uploading indicator data into GeoSight, typically via Excel, APIs, or other supported sources.</td>
    </tr>
    <tr>
      <td>📊 Excel Long Format</td>
      <td>A data structure where each row represents a single observation with columns for geography, indicator, date, and value.</td>
    </tr>
    <tr>
      <td>📈 Excel Wide Format</td>
      <td>A data structure where each column represents a different indicator, typically used for a single time period.</td>
    </tr>
    <tr>
      <td>⚙️ Admin Panel</td>
      <td>The backend interface used to manage data, create projects, configure settings, and control access.</td>
    </tr>
    <tr>
      <td>👤 User</td>
      <td>An individual account with access to GeoSight, assigned specific permissions and roles.</td>
    </tr>
    <tr>
      <td>👥 Group</td>
      <td>A collection of users used to manage permissions more efficiently across multiple resources.</td>
    </tr>
    <tr>
      <td>🔐 Permissions</td>
      <td>Access levels assigned to users or groups, typically including Read, Write, or Owner rights.</td>
    </tr>
    <tr>
      <td>🔓 Public Access</td>
      <td>A setting that allows a project or resource to be viewed without requiring user authentication.</td>
    </tr>
    <tr>
      <td>📤 Sharing</td>
      <td>The process of granting access to projects, indicators, or datasets to specific users or groups.</td>
    </tr>
    <tr>
      <td>🧩 Widget</td>
      <td>An interactive component (e.g. charts, counters, filters) used within a project to enhance data exploration.</td>
    </tr>
    <tr>
      <td>🔎 Filter</td>
      <td>A tool that allows users to refine data displayed in a project based on selected criteria.</td>
    </tr>
    <tr>
      <td>🗃️ Data Browser</td>
      <td>A tool within the admin panel used to view, inspect, and manage uploaded datasets.</td>
    </tr>
    <tr>
      <td>📦 Data Management</td>
      <td>A section that tracks data uploads, processing status, and allows users to initiate new imports.</td>
    </tr>
    <tr>
      <td>🔗 GeoRepo</td>
      <td>An external service used to manage and provide reference boundary datasets dynamically to GeoSight.</td>
    </tr>
  </tbody>
</table>

<br>
