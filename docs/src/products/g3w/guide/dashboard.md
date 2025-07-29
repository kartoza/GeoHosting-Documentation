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

# Navigating the Dashboard

The **home page** serves as the main entry point to the platform. It includes a customizable welcome message and intuitive navigation menus that provide access to various functionalities.

<br>

**Right-Side Panel Menu**

This panel contains quick-access links:

- **About It** – view service-related information
- **Maps** – explore available WebGIS services
- **Login** – access additional services

<br>

## About It

This section can display a short description and key contact details relevant to your organization or project.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-7.png" alt="About It Section" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Maps

G3W-SUITE organizes WebGIS services in hierarchical containers:

- **Cartographic Macrogroups** – top-level thematic categories
- **Cartographic Groups** – subcategories containing specific services

<br>

**Browsing Maps:**

1. Click **Maps** in the panel.
2. Available macrogroups appear under **Thematic Groups**.
3. Select a macrogroup to view its associated **Groups**.
4. Click a group to list individual **WebGIS services**.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-8.png" alt="Maps Section" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Administration Panel

The **Administration Panel** is the control center for managing user accounts, groups, and access policies.

<br>

Once logged in, click the **Backend** button in the top-right corner, or use the **Gear** icon → **Django Administration**.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-13.png" alt="Administration panel" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

### Top Bar Controls

- **Frontend:** Return to the public-facing portal
- **Username:** Access your profile or log out
- **Language:** Change interface language
- **Gear icon:**
  - Edit General Data
  - Django Administration
  - Files (File Manager)

<br>

### Left-Side Navigation Menu

Use the sidebar to navigate administration functions:

- **Dashboard:** Overview & quick links
- **Macro Cartographic Groups:** Create/manage thematic containers
- **Cartographic Groups:** Create/manage service groups
- **Users:** Create, edit, and delete user accounts; assign users to groups

<br>

### Central Dashboard Area

The central panel displays:

- **Dashboard Widget:** High-level overview
- **Quick Links:** Direct access to Cartographic Groups, Macro Cartographic Groups, Users
- **Status Panels:** Counts of existing groups, users, and services
