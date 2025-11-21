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

# SQL & Spatial Queries

SQL (Structured Query Language) allows you to interact directly with your PostGIS database.
With just a few simple commands, you can filter data, calculate values, and run basic spatial checks. This page introduces the essential SQL and spatial functions you’ll use most often in pgAdmin.

<br>

You can download the full dataset used on this page by running the SQL script included here:

- [<span class="ui-filename">Manual_Data_PostGIS.zip</span>](https://github.com/kartoza/GeoHosting-Documentation/docs/src/products/manual_data/Manual_Data_PostGIS.zip)

<br>

This dataset adds:

- <span class="ui-filename">places</span> (10 Western Cape towns/cities with point geometry)
- <span class="ui-filename">place_types</span> (City, Town, Village, Settlement)
- <span class="ui-filename">admin_boundaries</span> (3 Western Cape municipal polygons)
- All constraints, foreign keys, indexes, and geometry types

<br>

## Step 1: Open the Query Tool

You’ll run your SQL statements inside pgAdmin’s built-in editor.

1. In pgAdmin, expand <span class="ui-filename">kartoza_postgis → Schemas → public → Tables</span>.

2. Select any table (e.g., <span class="ui-filename">places</span>).

3. Click the <span class="ui-generic-label">Query Tool</span> button in the top toolbar.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-44.png" alt="Query Tool" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 2: Select Records

Begin by exploring your data using simple <span class="ui-filename">SELECT</span> statements.

1. **Show all rows**

    ```sql
    SELECT * FROM places;
    ```

    <br>

2. **Show specific fields**

    ```sql
    SELECT name, population, place_type_id
    FROM places;
    ```

    <br>

3. **Filter rows (WHERE)**

    ```sql
    SELECT *
    FROM places
    WHERE population > 50000;
    ```

    <br>

These simple <span class="ui-filename">SELECT</span> queries let you preview and inspect the attribute data stored in your PostGIS tables.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-45.png" alt="SELECT Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 3: Sort and Limit Results

Sorting and limiting output helps you quickly find useful information.

1. **Sort by population (descending)**

    ```sql
    SELECT name, population
    FROM places
    ORDER BY population DESC;
    ```

    <br>

2. **Show only the first 5 rows**

    ```sql
    SELECT *
    FROM places
    LIMIT 5;
    ```

    <br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-46.png" alt="Sort Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 4: Basic Calculations

You can use SQL to calculate values on the fly.

1. **Calculate population density**

    ```sql
    SELECT
      name,
      population,
      area_km2,
      population / area_km2 AS population_density
    FROM places;
    ```

    <br>

2. **Count all records**

    ```sql
    SELECT COUNT(*) FROM places;
    ```

    <br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-47.png" alt="Calculation Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 5: Basic Spatial Queries

PostGIS extends SQL with geometry functions to allow spatial filtering and analysis.

1. **Find features within a bounding box**

    ```sql
    SELECT *
    FROM places
    WHERE geom && ST_MakeEnvelope(18, -35, 20, -33, 4326);
    ```

    <br>

2. **Select features within a radius**

    (Example: 50 km around a specific coordinate)

    ```sql
    SELECT *
    FROM places
    WHERE ST_DWithin(
      ST_Transform(geom, 3857),
      ST_Transform(ST_SetSRID(ST_Point(18.5, -34.0), 4326), 3857),
      50000
    );
    ```

    <br>

3. **Measure distance between two features**

    ```sql
    SELECT
      a.name AS place_a,
      b.name AS place_b,
      ST_Distance(a.geom, b.geom) AS distance_m
    FROM places a, places b
    WHERE a.id = 1 AND b.id = 2;
    ```

    <br>

Each spatial function returns a true/false result, distance, or filtered rows, perfect for building powerful GIS logic directly in the database.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-48.png" alt="Spatial Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 6: Update Data with SQL

SQL can also modify records. Make sure you understand what you’re updating before running these.

1. **Update a field value**

    ```sql
    UPDATE places
    SET population = 120000
    WHERE id = 3;
    ```

    <br>

2. **Assign a place type (City, Town, Village, etc.)**

    ```sql
    UPDATE places
    SET place_type_id = 2
    WHERE name = 'Stellenbosch';
    ```

    <br>

3. **Delete a record**

    ```sql
    DELETE FROM places
    WHERE id = 10;
    ```

    <br>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-49.png" alt="Update Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 7: Run Spatial Summaries

PostGIS makes it easy to summarise spatial relationships.

1. **Count how many features fall inside a polygon**

    ```sql
    SELECT COUNT(*)
    FROM places
    WHERE ST_Within(
      geom,
      (SELECT geom 
      FROM admin_boundaries 
      WHERE name = 'Drakenstein')
    );
    ```

    <br>

2. **Calculate total area of polygons**

    ```sql
    SELECT SUM(ST_Area(ST_Transform(geom, 3857))) AS total_area_m2
    FROM admin_boundaries;
    ```

    <br>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-50.png" alt="Sort Query" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

Your database is now ready for real analysis. Even these basic SQL and spatial functions give you powerful control over your data.

<br>
