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

# Data & Preparation

## Overview

This tutorial is centered around a QGIS project designed to manage a layer representing a collection of buildings within a specific geographic area.

Beyond **spatial data**, the project also handles a wide range of **attribute information**, including maintenance records, using a 1:n relational structure to allow each building to be associated with multiple maintenance entries.

<br>

Throughout the tutorial, you will gain **practical skills** in:

1. **Customizing** the graphic and functional elements of the base QGIS project.
2. **Publishing** the project as a WebGIS service using G3W-SUITE.
3. **Creating** custom search tools for efficient data exploration.
4. **Integrating** interactive charts using the DataPlotly plugin.
5. **Enabling** online editing, including:

      - Custom form layouts
      - Specialized widgets for improved user interaction

     <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-14.png" alt="Gained Practical Skills" width="175">
      </div>

<br>

> **Note:** This tutorial aims to demonstrate how a real-world GIS project can be fully managed through G3W-SUITE and QGIS.

---

## Data Preperation

This tutorial is based on a modified dataset and QGIS 3.34.x LTR project from the official [G3W-SUITE](https://g3w-suite.readthedocs.io/en/latest/index.html) documentation website. Download the **Tutorial Data** using the link below:

- [`Tutorial_Data_G3WSUITE.zip` Download](https://github.com/kartoza/GeoHosting/tree/main/docs/src/products/tutorial_data/Tutorial_Data_G3WSUITE.zip)

<br>

> **Note:** You can download the original data from the [Download Demo Data](https://g3w-suite.readthedocs.io/en/latest/demo.html#download-demo-data) section of the G3W-SUITE Documentation

<br>

### Data Preperation Overview

The `Tutorial_Data_G3WSUITE` folder contains images and the following **three subdirectories**:

<br>

📁 **`projects/`**

- Contains the QGIS project file: `g3w_tutorial.qgs`
- The project is fully optimized for this tutorial.

 <br>

📁 **`plots/`**

- Contains plot definitions created using the DataPlotly plugin, saved in `.xml` format.

 <br>

📁 **`project_data/spatialite/`**

- Contains the SpatiaLite database: `g3w_tutorial.sqlite`
- This database stores the core data used in the project.

 <br>

Inside the **`g3w_tutorial.sqlite`** file, you’ll find the following layers:

 <br>

 | Layer Name          | Type    | Description                                                      |
 | ------------------- | ------- | ---------------------------------------------------------------- |
 | `buildings`         | Polygon | Main reference layer for editing building features               |
 | `maintenance_works` | Table   | Records of maintenance activities linked to individual buildings |
 | `buildings_rating`  | Table   | Annual ratings or assessments of buildings                       |
 | `roads`             | Line    | Road network used to assign addresses to buildings               |
 | `work_areas`        | Polygon | Work zone boundaries used to define geo-constraints              |
 | `type_subtype`      | Table   | Lookup table for building type and subtype values                |

 <br>

The QGIS project (based on QGIS 3.34.x LTR) is pre-configured with the following **features**:

1. **Categorized symbology** for the:

       - `buildings` layer based on the `type` field.

       <br>

2. **1:n relationships defined between:**

       - `buildings` ↔ `maintenance_works`
       - `buildings` ↔ `buildings_rating`

       <br>

3. **Pre-built query forms for:**

       - `buildings` layer
       - `maintenance_works` table

       <br>

4. **Predefined editing widgets for:**

     - `buildings`, `maintenance_works`, and `buildings_rating` attributes

     <br>

5. **Four print layouts:**

     - Two standard layout templates
     - Two atlas layout templates using features from the buildings layer

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-15.png" alt="Tutorial QGIS Project" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

---

### Data Preperation Exercise

Before you can publish your QGIS project to the WebGIS platform, there are **two essential steps** you **MUST** complete:

1. **Update the Project Title**

       This title will be used as the WebGIS service ID. If not updated, your service may be misidentified or conflict with existing services.

       <br>

2. **Upload the SpatiaLite database to the File Manager**

       This ensures that G3W-SUITE can access the data sources used in your QGIS project. Without it, layers may not display correctly.

       <br>

---

**Steps to update the project title:**

1. Open your QGIS project.

2. Go to the **Project** menu.

3. Select **Properties...**

4. Under the **General tab**, locate the **Project Title** field.

5. Enter a unique and descriptive title for your project.

6. Click **OK** to apply the changes.

      <br>

      **Make sure the title:**

      - Reflects the content or purpose of your project.
      - Does not contain special characters or excessive spacing.
      - Is short but specific enough to identify the service in the WebGIS environment.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-16.png" alt="Updating Project Title" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

> **Note:** For more details, refer to the [QGIS: project settings](https://g3w-suite.readthedocs.io/en/latest/projectsettings.html#qgis-project-settings) section of the official G3W documentation.
