---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2025-10-01
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2025, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# pgAdmin Basics

pgAdmin is the graphical interface for managing your PostGIS database. It allows you to view, create, and modify tables, run SQL queries, and manage spatial data directly from your browser.

<br>

On the <span class="ui-page-label">Product Details</span> page of your instance, you will see two main component:

- **PostGIS:** The core database engine used to store and manage spatial data.
- **pgAdmin:** A built-in web interface for accessing and managing your PostGIS database.

<br>

Each hosted instance automatically includes a ready-to-use database named <span class="ui-filename">kartoza_postgis</span>, where you can start creating tables and adding spatial data immediately.

<br>

## Step 1: Access pgAdmin

To access pgAdmin and log into your hosted database:

1. From the **GSH Dashboard**, navigate to the <span class="ui-page-label">Product Details</span> page of your instance.

2. Under Product Information, locate **pgAdmin**.

3. Click <span class="ui-generic-label">Get Password</span> to copy your login credentials to the clipboard.

    - **Username:** Your account email address.
    - **Password:** Copied from the product details page.

4. Click the <span class="ui-generic-label">pgAdmin</span> link to open the pgAdmin interface.

5. Paste the credentials and click <span class="ui-generic-label">Login</span> to access your workspace.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-23.png" alt="pgAdmin Login" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 2: Open the Database

After logging in, you’ll see the **Object Explorer** tree in the left-hand panel.

1. Expand the <span class="ui-filename">Geospatialhosting Databases</span> group.

2. Click the arrow next to your server name (e.g. <span class="ui-filename">my-postgis</span>).

3. Expand the <span class="ui-filename">Databases</span> folder.

4. Select <span class="ui-filename">kartoza_postgis</span>.

This is your preconfigured database for adding tables, geometry fields, and managing spatial data.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Your server will have the same name as your hosted product.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-24.png" alt="pgAdmin tree" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 3: Explore the Interface

The pgAdmin workspace is divided into three main areas:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Element</th>
      <th>Position</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object Explorer</td>
      <td>Left</td>
      <td>Displays your database structure, including servers, schemas, tables, and functions.</td>
    </tr>
    <tr>
      <td>Tabbed Browser</td>
      <td>Right</td>
      <td>A collection of tabs that display detailed information about the object currently selected in the Object Explorer.</td>
    </tr>
    <tr>
      <td>Menu Bar</td>
      <td>Top</td>
      <td>Provides drop-down menus for accessing various options, commands, and utilities.</td>
    </tr>
  </tbody>
</table>

<br>

You can right-click any object in the tree to open a context menu with common actions such as <span class="ui-generic-label">Create</span>, <span class="ui-generic-label">View/Edit Data</span>, or <span class="ui-generic-label">Query Tool</span>.

---

**Next up:** Learn how to create and manage spatial layers in your database.

<br>
