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

# PostgreSQL & PostGIS

CloudBench allows you to connect to PostgreSQL databases and work with their contents through a central interface. When PostGIS is enabled, the database can also store and work with spatial data.

Through a PostgreSQL/PostGIS connection, you can browse database schemas and tables, inspect available database content, and execute SQL queries without having to open a separate database management application.

If you have a PostgreSQL or PostGIS instance hosted through GeoSpatialHosting, its connection will generally be added to CloudBench automatically. You can also connect to an external PostgreSQL database.

<br>

## PostgreSQL Connections

A PostgreSQL connection allows CloudBench to access and interact with a specific database service, including its schemas, tables, and spatial data.

<br>

Expand the connection in the tree to browse its resources:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Resource</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Database</td>
      <td>The database selected when configuring the connection.</td>
    </tr>
    <tr>
      <td>Schemas</td>
      <td>Organise database objects, including tables and other database resources.</td>
    </tr>
    <tr>
      <td>Tables</td>
      <td>Contain records and, where applicable, spatial data.</td>
    </tr>
  </tbody>
</table>

<br>

### PostgreSQL and PostGIS

PostgreSQL is a relational database management system. PostGIS extends PostgreSQL with spatial data types and functions, allowing geographic information to be stored and queried alongside other database records.

If you intend to work with spatial tables, the PostGIS extension must be enabled in the database. A PostgreSQL database without PostGIS can still contain ordinary relational tables, but it will not provide PostGIS spatial functionality.

<br>

## Connecting to Databases

CloudBench supports connections to both GSH database instances and external PostgreSQL databases. Depending on where your database is hosted, you can use an automatically configured connection or manually add the connection details.

<br>

### GSH Database Instances

If you have a PostgreSQL instance hosted through GSH, CloudBench generally detects the instance associated with your account and automatically adds the connection, so no manual configuration is needed.

<br>

To access your instance:

1. Open CloudBench from your GeoSpatialHosting dashboard.
2. Locate <span class="ui-page-label">PostgreSQL</span> in the connection tree.
3. Expand the connection to browse the available database resources.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-1.png" alt="GSH Database Instances">
</div>

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    If your connection does not appear in the connection tree, select the Refresh icon next to CloudBench in the left-hand menu to reload the available connections.
  </div>
</div>

<br>

### External Database Instances

CloudBench can also connect to an external PostgreSQL database, provided that the database is reachable from CloudBench and you have valid credentials.

<br>

To add an external connection:

1. Locate <span class="ui-page-label">PostgreSQL</span> in the connection tree.
2. Select the <span class="ui-generic-label">+</span> icon next to the connection type.
3. Provide the database connection details.
4. Select <span class="ui-generic-label">Test Connection</span> to check that CloudBench can reach the database.
5. If the test succeeds, select <span class="ui-generic-label">Add Connection</span> to save.

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
      <td>Host</td>
      <td>The hostname or IP address of the PostgreSQL server.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>The port on which the database service is listening.</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>The name of the database you want to connect to.</td>
    </tr>
    <tr>
      <td>User</td>
      <td>The PostgreSQL username used for authentication.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>The password associated with the database user.</td>
    </tr>
  </tbody>
</table>

<br>

Make sure the database is configured to accept connections from CloudBench. A database that is only accessible from your local network may not be reachable.

Once connected, expand the PostgreSQL connection in the tree to browse the database's available schemas and tables.

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-2.png" alt="External Database Instances">
</div>

<br>

## Running SQL Queries

CloudBench provides SQL query functionality for connected PostgreSQL databases. This allows you to execute SQL statements against the selected database without switching to a separate database client.

<br>

To start running queries:

1. Expand your database connection in the connection tree.
2. From the overview page, select <span class="ui-generic-label">SQL Query</span> to open the <span class="ui-page-label">Query Designer</span>.
3. The Query Designer opens to the <span class="ui-page-label">Visual Editor</span> by default.
4. Select the required <span class="ui-generic-label">Schema</span> and <span class="ui-generic-label">Table</span> from the dropdown menus.
5. Use <span class="ui-generic-label">+ Add</span> next to SELECT Columns, WHERE Conditions, and ORDER BY to choose columns, filter records, and sort the query results.
6. Select <span class="ui-generic-label">Execute Query</span> to run your query.

<br>

The Query Designer provides three ways to build and execute queries:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Visual Editor</td>
      <td>Build queries using dropdown menus and configurable fields without writing SQL manually.</td>
    </tr>
    <tr>
      <td>AI Natural Language</td>
      <td>Describe what data you want to retrieve in plain language and use AI to generate the query.</td>
    </tr>
    <tr>
      <td>SQL Editor</td>
      <td>Write and execute SQL queries directly for more control over database operations.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-3.png" alt="Running SQL Queries">
</div>

<br>

SQL queries can be useful for tasks such as:

- Retrieving records from a table.
- Filtering data using attribute values.
- Joining information from multiple tables.
- Working with spatial data when PostGIS is enabled.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    SQL permissions are determined by the PostgreSQL account used for the connection. CloudBench does not automatically grant additional database privileges.
  </div>
</div>

<br>

## Uploading Data

CloudBench allows you to upload supported geospatial datasets directly to your selected connection, making them available for further use and management.

<br>

To upload data:

1. Select the required connection in the connection tree.
2. From the overview page, select <span class="ui-generic-label">Import Data</span> to open the upload dialog.
3. Drag and drop your dataset files into the designated area.
4. Once your files have been added, select <span class="ui-generic-label">Upload</span>.

<br>

CloudBench supports the following file formats:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Extensions</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeoPackage</td>
      <td><code>.gpkg</code></td>
      <td>Container for storing vector and raster geospatial data.</td>
    </tr>
    <tr>
      <td>Zip Shapefile</td>
      <td><code>.zip</code></td>
      <td>Compressed collection of files containing vector data and associated attributes.</td>
    </tr>
    <tr>
      <td>GeoJSON</td>
      <td><code>.geojson</code>, <code>.json</code></td>
      <td>JSON-based format for encoding geographic features and their attributes.</td>
    </tr>
    <tr>
      <td>GeoTIFF</td>
      <td><code>.tif</code>, <code>.tiff</code></td>
      <td>Raster format used to store georeferenced imagery and other grid-based data.</td>
    </tr>
    <tr>
      <td>KML</td>
      <td><code>.kml</code></td>
      <td>XML-based format for representing geographic features and annotations.</td>
    </tr>
    <tr>
      <td>FlatGeobuf</td>
      <td><code>.fgb</code></td>
      <td>Binary format for storing and accessing vector geospatial data.</td>
    </tr>
    <tr>
      <td>CSV</td>
      <td><code>.csv</code></td>
      <td>Tabular format that can contain coordinates and associated attribute data.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/cloudbench-img-m-4.png" alt="Uploading Data">
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
      <td>Connection test fails</td>
      <td>Check the hostname, port, and database name. Confirm that the database is running and reachable from CloudBench.</td>
    </tr>
    <tr>
      <td>Authentication fails</td>
      <td>Confirm that the username and password are correct.</td>
    </tr>
    <tr>
      <td>Connection is refused or times out</td>
      <td>Check the database's network access rules and confirm that external connections are permitted where required.</td>
    </tr>
    <tr>
      <td>Spatial data functionality is unavailable</td>
      <td>Confirm that the PostGIS extension is enabled in the connected database.</td>
    </tr>
    <tr>
      <td>A schema or table is missing</td>
      <td>Check that the connected database user has permission to access the relevant schema and tables.</td>
    </tr>
    <tr>
      <td>A query fails</td>
      <td>Check the SQL syntax, table and schema names, and the permissions of the connected database user.</td>
    </tr>
  </tbody>
</table>

<br>
