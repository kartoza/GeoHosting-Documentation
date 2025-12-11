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

# Table Relationships

As your database grows, you may want to classify your features more efficiently. Instead of typing values manually (e.g., city, town, village) each time you add a new place, you can create a **lookup table** and link it to your existing *places* table.

This improves data consistency, prevents typing mistakes, and ensures your classifications follow a standard list.

<br>

## Step 1: Create a Lookup Table

You’ll start by creating a new table called *place_types*.

1. In pgAdmin, navigate to <span class="ui-filename">kartoza_postgis → Schemas → public → Tables</span>.

2. Right-click <span class="ui-filename">Tables</span>, and select <span class="ui-generic-label">Create → Table</span>.

3. In the **General** tab, fill in:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>place_types</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>kartoza_postgis</td>
        </tr>
        <tr>
          <td>Schema</td>
          <td>public</td>
        </tr>
        <tr>
          <td>Tablespace</td>
          <td>pg_default</td>
        </tr>
      </tbody>
    </table>

    <br>

4. Open the **Columns** tab and add:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Name</th>
          <th>Data Type</th>
          <th>Length</th>
          <th>Not Null?</th>
          <th>Primary Key?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>integer</td>
          <td>—</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>label</td>
          <td>character</td>
          <td>128</td>
          <td>x</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <br>

5. Click <span class="ui-generic-label">Save</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-37.png" alt="Create Table" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 2: Add Records

Now add some categories to classify your *places*.

1. Right-click the <span class="ui-filename">place_types</span> table.

2. Select <span class="ui-generic-label">View/Edit Data → All Rows</span>.

3. Click the <span class="ui-generic-label">Add Row</span> button and add values such as:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>id</th>
          <th>label</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>City</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Town</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Village</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Settlement</td>
        </tr>
      </tbody>
    </table>

    <br>

4. Click <span class="ui-generic-label">Save Data Changes</span>.

<br>

Your lookup table is now populated.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-38.png" alt="Lookup Values" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 3: Add a Foreign Key Field

The *places* table needs a field that links each place to a type.

1. Click the <span class="ui-generic-label">Query Tool</span> from the top toolbar.

2. Run the following command into the **SQL Editor**:

    <br>

    ```sql
    ALTER TABLE places
    ADD COLUMN place_type_id integer;
    ```

    <br>

This new field will store the ID from *place_types*.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-39.png" alt="Add Field" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 4: Create the Relationship

Now enforce the relationship in the database so that *place_type_id* must match a value in your lookup table.

1. Run this SQL in Query Tool:

    <br>

    ```sql
    ALTER TABLE places
    ADD CONSTRAINT fk_place_type
    FOREIGN KEY (place_type_id)
    REFERENCES place_types (id);
    ```

    <br>

Your tables are now formally linked in PostGIS.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-40.png" alt="Create Relationship" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 5: Configure in QGIS

Now that your lookup table is in place, you can connect it to your main layer.

1. Go back to **QGIS**.

2. Right-click your PostGIS connection → <span class="ui-generic-label">Refresh</span>.

3. Load the new <span class="ui-filename">place_types</span> table.

4. Open the **Layer Properties** for the <span class="ui-filename">places</span> layer.

5. Go to the **Attribute Form** tab and select the <span class="ui-filename">place_type_id</span> field.

6. Change its **Widget Type** to <span class="ui-page-label">Value Relation</span>.

7. In the widget settings:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Setting</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Layer</td>
          <td>place_types</td>
        </tr>
        <tr>
          <td>Key</td>
          <td>id</td>
        </tr>
        <tr>
          <td>Value</td>
          <td>label</td>
        </tr>
        <tr>
          <td>Allow Null</td>
          <td>Optional ✓</td>
        </tr>
      </tbody>
    </table>

    <br>

8. Click <span class="ui-generic-label">OK</span>.

<br>

Now, whenever you add or edit a place, QGIS will show a dropdown list of place types instead of a free-text field.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-41.png" alt="Configure Widget" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

## Step 6: Test the Relationship

With the widget configured, you can now test how the relationship behaves during real editing.

1. Select the <span class="ui-filename">places</span> layer.

2. Click the <span class="ui-generic-label">Toggle Editing</span> button.

3. Select the <span class="ui-generic-label">Add Point Feature</span> tool.

4. Click on the map at the location where you’d like to place your new feature.

5. On the **Attribute Form** you should now see a dropdown menu for <span class="ui-filename">place_type_id</span>.

6. Fill in the relevant information, then click <span class="ui-generic-label">OK</span>.

7. Click <span class="ui-generic-label">Save Layer Edits</span> from the top toolbar.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-42.png" alt="Type Dropdown" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

You can now return to pgAdmin to verify the updated field.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-43.png" alt="Updated Table" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

Your *places* data is now linked to a clean, controlled classification system, an essential step toward building well-structured, professional spatial databases.

<br>

---

**Next up:** Learn the basics of SQL & Spatial Queries so you can filter, analyse, and explore your PostGIS data.

<br>
