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

# Navigating the Dashboard

## pgAdmin User Interface

Once you log in, pgAdmin opens to the main <span class="ui-generic-label">User Interface</span>.

By default, you’ll land on the <span class="ui-page-label">Dashboard</span> tab, which includes a welcome message, shortcuts to commonly used tasks, and links to helpful documentation and resources.

<br>

The pgAdmin interface is organized into three main areas:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Element</th>
      <th>Location</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Menu Bar</td>
      <td>Top</td>
      <td>Provides drop-down menus for accessing various options, commands, and utilities.</td>
    </tr>
    <tr>
      <td>Tabbed Browser</td>
      <td>Right</td>
      <td>A collection of tabs that display detailed information about the object currently selected in the Object Explorer.</td>
    </tr>
    <tr>
      <td>Object Explorer</td>
      <td>Left</td>
      <td>Displays your database structure, including servers, schemas, tables, and functions.</td>
    </tr>
  </tbody>
</table>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-17.png" alt="User Interface" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Menu Bar

The <span class="ui-page-label">Menu Bar</span> sits at the top of the pgAdmin interface and provides quick access to the tools and actions you'll use while managing your database.

The options shown in each menu depend on what is currently selected in the **Object Explorer**, some items will be unavailable (grayed out) until they are relevant.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Menu</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>File</td>
      <td>Used for adjusting your pgAdmin workspace and application settings. From here, you can configure preferences or reset the layout if you’ve rearranged the interface.</td>
    </tr>
    <tr>
      <td>Object</td>
      <td>A context-sensitive menu that changes depending on what you have selected. It’s where you connect to your server, view object properties, create new objects (like tables or databases), and refresh or delete existing ones.</td>
    </tr>
    <tr>
      <td>Tools</td>
      <td>Provides access to pgAdmin’s built-in tools for working with your database, including the Query Tool (for writing SQL), the ERD Tool, backup and restore utilities, and import/export options.</td>
    </tr>
    <tr>
      <td>Help</td>
      <td>Offers quick access to documentation, online user guides, version info, and support resources for pgAdmin and PostgreSQL.</td>
    </tr>
  </tbody>
</table>

<br>

This structure keeps essential tasks organized and easy to reach, whether you're simply connecting to your server or performing more advanced database administration.

<br>

## Tabbed Browser

The <span class="ui-page-label">Tabbed Browser</span> is the right-hand pane in pgAdmin. It displays detailed information about the object currently selected in the **Object Explorer**. Each tab provides a different view or set of tools for managing and monitoring your database.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Tab</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dashboard</td>
      <td>Provides an overview of server or database activity with graphs and tables. Includes the following sub-tabs:<br>
          • <strong>Activity</strong> – Shows usage statistics and graphs for the selected object.<br>
          • <strong>State</strong> – Provides tables of active sessions, locks, and prepared transactions.<br>
          • <strong>Configuration</strong> – Displays server configuration details.</td>
    </tr>
    <tr>
      <td>Properties</td>
      <td>Shows details about the selected object, such as its type, attributes, and configuration. You can also edit object properties directly from this tab.</td>
    </tr>
    <tr>
      <td>SQL</td>
      <td>Displays the SQL script used to create the selected object, along with optional DROP statements. Useful for reviewing or copying object definitions.</td>
    </tr>
    <tr>
      <td>Statistics</td>
      <td>Shows performance and usage statistics for the selected object, including transaction counts, tuples in/out, and block I/O. Helps monitor database performance.</td>
    </tr>
    <tr>
      <td>Dependencies</td>
      <td>Lists objects that the selected object depends on, ensuring you understand relationships before making changes.</td>
    </tr>
    <tr>
      <td>Dependents</td>
      <td>Lists objects that depend on the selected object, so you can see potential impacts before modifications.</td>
    </tr>
    <tr>
      <td>Processes</td>
      <td>Displays background tasks such as backups, restores, maintenance, or import/export operations, including status, start time, and duration.</td>
    </tr>
  </tbody>
</table>

<br>

Additional tabs may appear when using pgAdmin tools like the **Query Tool**, **Debugger**, or **ERD Tool**.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-18.png" alt="Dashboard Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Object Explorer

The left pane of pgAdmin displays the <span class="ui-page-label">Object Explorer</span>, providing access to all objects on your server. Expand nodes to explore databases, schemas, tables, and other objects.

Right-clicking a node opens a **context-sensitive menu** for common tasks. Options include creating objects, connecting or disconnecting servers, performing backups/restores, managing properties, running scripts, and viewing or modifying table data.

Table-specific options allow importing/exporting data, truncating rows, viewing data, and resetting statistics.

<br>

### Toolbar

The Object Explorer toolbar offers quick access to frequently used tools. Buttons are enabled or disabled depending on the selected object.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Button</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Filter Objects</td>
      <td>Opens the Object Filter popup to filter items in the Object Explorer tree.</td>
    </tr>
    <tr>
      <td>Query Tool</td>
      <td>Opens the Query Tool for the current database context.</td>
    </tr>
    <tr>
      <td>All Rows</td>
      <td>View or edit all rows of the selected table.</td>
    </tr>
    <tr>
      <td>Filtered Rows</td>
      <td>Access the Data Filter popup to view or edit a subset of table data.</td>
    </tr>
    <tr>
      <td>Search Objects</td>
      <td>Open the search dialog to find any database object quickly.</td>
    </tr>
  </tbody>
</table>

<br>

---

**Next up:** Learn how to manage users, assign roles, and configure permissions to control access to your database.

<br>
