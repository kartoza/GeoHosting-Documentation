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

# Project

## Overview

Once you have updated the project title (to define a unique WebGIS service ID), and uploaded your SpatiaLite database to the correct folder in the File Manager, you’re ready to publish your QGIS project as a WebGIS service in G3W-SUITE.

<br>

Publishing a QGIS project is done through the **Dashboard**, which provides access to:

- Your assigned **Cartographic-** and **Macro Cartographic Groups**
- **Additional module menus** for managing services and settings

<br>

**To publish a project, you’ll need to:**

1. Create a **Cartographic Macro Group**

2. Create a **Cartographic Group**

3. Complete a series of **project form fields**, organized as follows:

<br>

| **Section**            | **Field**           | **Description**                                              |
|------------------------|---------------------| -------------------------------------------------------------|
| **QGIS Project**       | QGIS prioject file  | Upload the `.qgz` or `.qgs` file representing your QGIS project.                                |
| **ACL Users**          | Viewer users        | Select individual users allowed to view the WebGIS. Use `AnonymousUser` to allow public access. |
|                        | Viewer user groups  | Assign user groups that can view the WebGIS content.                                |
| **Default Base Layer** | Base layer          | Choose a default base layer to display at startup (optional, limited to those defined for the group).|
| **Description Data**   | Public title        | Title shown in the WebGIS interface. Falls back to project title or filename if left blank.              |
|                        | Description         | A short description of the project shown in the portal.                                 |
|                        | Thumbnail (Logo)    | Image/logo used to represent the project in the list view.                                   |
|                        | URL alias           | Human-readable URL path for accessing the WebGIS.                                 |

<br>

> **Note:** Fields marked with an asterisk (*) are required.

<br>

In the **Options and Actions** section, you can toggle several key features that influence how the WebGIS service behaves at runtime:

<br>

| **Option**                            | **Description**                                                          |
|---------------------------------------|------------------------------------------------------------------------|
| **Tab's TOC active as default**       | Open the TOC tab (Layers, Base Layers, etc.) by default when the client loads.          |
| **Tab's TOC layer initial status**    | Set whether the layers in the TOC start as collapsed or expanded.        |
| **Map themes list initial status**    | Set whether the map theme list starts as collapsed or expanded.          |
| **Legend position rendering**         | Choose whether the legend appears in a separate tab or within the TOC    panel.          |
| **WMS GetMap image format**           | Specify the preferred image format for WMS GetMap requests.              |
| **Max feature to get for query**      | Set the maximum number of features returned from a query.                |
| **Query control mode**                | Define whether queries allow single or multiple selections.              |
| **Query by bbox control mode**        | Set bounding box queries to single or multiple mode.                     |
| **Query by polygon control mode**     | Set polygon-based queries to single or multiple mode.                    |
| **Geocoding providers**               | Configure which geocoding services are available for address-based searches.       |

<br>

Now that you're familiar with the workflow and the publishing interface key components, let’s apply this knowledge.

---

## Adding a QGIS Project

1. In the **Cartographic Groups** tab, under `Project Group`, click the **Add New Project** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-32.png" alt="Add Project" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

2. The **New QGIS Project** page opens.

      <br>

3. Under the **QGIS Project** section, upload your `.qgz` or `.qgs` file from: `Tutorial_Data_G3WSUITE → projects`

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-33.png" alt="New QGIS Project 1" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

4. Under **Descriptive Data**, complete the following fields:

      - **Public Title:** `G3W Tutorial Project`
      - **Thumbnail:** `image_project`

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-34.png" alt="New QGIS Project 2" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

5. Under **Default Base Layer**, choose **OSM (OpenStreetMap)**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-35.png" alt="New QGIS Project 3" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

6. In the **Options and Actions** section, leave all settings at their default values.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-36.png" alt="New QGIS Project 4" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

7. Click the **Save** button.

Once successfully published, the project will appear in the **WebGIS services list** under the `G3W Tutorial Group`. You can click the **View Map** icon to launch and explore the live WebGIS.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-37.png" alt="Live WebGIS" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

> **Note:** For more details, refer to the [Publish the QGIS project as a WebGis service](https://g3w-suite.readthedocs.io/en/latest/demo.html#publish-the-qgis-project-as-a-webgis-service) section of the official G3W documentation.

<br>

## Updating the Published WebGIS Service

You can update both the **graphic** and **functional elements** of an existing WebGIS service in G3W-SUITE.

---

### Updating the Published WebGIS Service Overview

To update a published WebGIS service:

1. **Access the Project List** by navigating to the list of projects under the appropriate Cartographic Group.

2. **Edit the WebGIS Service** by clicking the **Edit** icon next to the desired WebGIS service to upload a modified QGIS file and update configuration options.

<br>

From the WebGIS services list, you can manage a wide range of functionalities using **tools** associated with each project. This allows you to view, modify, and control individual project behavior. Below is a guide to the available **tools and their functionality**:

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-38.png" alt="Functional Tools" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

---

### Updating the Published WebGIS Service Excercise

**Setting Up an Overview Map**

You can define a **panoramic overview map** (mini-map) for your WebGIS group. This map appears in a corner of the main WebGIS interface and provides spatial context.

<br>

1. In the **Cartographic Groups** tab, under the `G3W Tutorial Group`, click the **Projects** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-39.png" alt="Project Group" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

2. Locate the `Tutorial_G3WSUITE` project and check the box in the **Panoramic** column.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-40.png" alt="Panoramic Column" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

Your updates will now be applied. Use the **View Map** icon from the project list to open the WebGIS to verify the updated configuration, including the newly defined **Overview Map**.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-41.png" alt="Updated Overview Map" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

> **Note:** For more details, refer to the [Update/Manage WebGis services](https://g3w-suite.readthedocs.io/en/latest/g3wsuite_administration.html#update-manage-webgis-services) section of the official G3W documentation.
