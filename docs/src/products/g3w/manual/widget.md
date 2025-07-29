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

# Widgets & Additional Functions

Once your project has been published, you can enhance your WebGIS service by enabling a variety of widgets and additional functions.

<br>

By clicking the **Layers** icon you can access the list of **geographic layers** that make up the project. From this interface, you can configure various **functional options** that will be enabled in the cartographic client.

<br>

The **Data** tab contains several columns, including:

| Field            | Description                                                   |
|------------------|---------------------------------------------------------------|
| **Label**        | Alias set in the QGIS project                                 |
| **ID**           | Unique identifier (eye icon) used for parameterized URLs      |
| **Name**         | Layer name (file or DB table)                                 |
| **Type**         | Data source type (WMS, PostGIS, GDAL, etc.)                   |
| **WMS External** | Option to handle GetFeatureInfo responses outside QGIS Server |
| **WFS**          | Indicates if the layer is available as WFS                    |

<br>

> **Note:** WMS layers are handled directly by Django to speed up loading, bypassing QGIS Server.

<br>

Under the **Actions** column next to each layer, you’ll find a series of **icons** that allow you to manage its behavior and visibility:

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-42.png" alt="Functional Options" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

> **Hint:** Each action icon displays a number indicating how many related objects are configured.

<br>

The **Download Capabilities** column allows for the download of vector and raster data in the following formats:

| Format      | Available For                  |
|-------------|--------------------------------|
| SHP/GeoTIFF | Vector and raster layers       |
| GPKG        | All layers                     |
| XLS         | All layers                     |
| CSV         | All layers                     |
| GPX         | Geographic layers              |
| PDF         | Attribute-level export for all |

<br>

The **Visibility Capabilities** column allows you to configure general visibility options (applies to all users):

| Option                    | Effect                   |
|---------------------------|--------------------------|
| **Hide Attributes Table** | Disables attribute table |
| **Hide Legend**           | Disables legend display  |
| **Hide Layer TOC**        | Removes layer from TOC   |

<br>

> **Hint:** Try enabling these features and test them directly in your WebGIS interface.

---

## Creating a Search Widget

By default, search widgets can be configured on individual vector layers using the fields from the associated attribute table. Each search widget is saved by referencing the layer’s unique identifiers.

This design enables reusability: once a search widget is created for a specific layer, it becomes available in any other project where that same layer is used.

<br>

1. From the Project List page, click the **Layers** icon next to the `Tutorial_G3WSUITE` project.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-43.png" alt="Layers List" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

2. The **QGIS Project Layers** section will open displaying **all layers** included in the published QGIS project.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-44.png" alt="Layers List" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

3. Next to the `buildings` layer, click the **Widgets List** icon.

      <br>

4. To create a new widget, click the **Add New Widget** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-45.png" alt="Add New Widget" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

5. In the **Widget Creation Form**, configure the following:

      - **Type:** `Search`
      - **Name:** `Search Widget`
      - **Search Title:** `Tutorial Search Widget`

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-46.png" alt="Widget Creation Form" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

6. In the **Search Field Settings** section, set the following:

      - **Field:** `type`
      - **Widget:** `SelectBox`
      - **Alias:** `Building Type`
      - **Operator:** `= (equal)`

      <br>

      > **Hint:** Use the **Add** button to define multiple search conditions.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-47.png" alt="Search Field Settings" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

7. Once finished, click **OK** to save.

      <br>

The new search widget will now appear in the layer's widget list and will be automatically available in the WebGIS interface.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-48.png" alt="New Search Widget" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

---

## Creating a Plots Widget

The **QPlotly** widget enables users to view interactive plots, created using the **DataPlotly** QGIS plugin (developed by Matteo Ghetta), directly within the WebGIS cartographic client.

This module uses the **Plotly** library and supports plots saved as `.xml` files. Because each plot is linked to a specific layer in the QGIS project, it allows consistent reuse of the same plots across different WebGIS services, as long as the related layer is present.

> **Note:** The plot title, defined in the DataPlotly plugin, acts as the unique identifier.

<br>

Plots can be **filtered** by:

1. **Map Extent:** Based on visible features

2. **Feature Selection:** Based on selected features

<br>

These filters also apply to **related plots** based on **1:N relationships**. As users pan or zoom on the map, all related plots automatically update to reflect the visible extent.

If **selection-based filtering** is enabled, it is automatically applied to all linked plots associated with the same layer. Users will see clear messages on each chart indicating which filters are currently active.

<br>

When a layer has **1:N relationships** with other tables that contain active plots, users can access those plots by querying the parent layer and clicking the **Show Relation Charts** icon. This feature enhances data exploration by allowing users to interact with and analyze related datasets directly within the WebGIS client.

<br>

1. From the **QGIS Project Layers** list, next to the `buildings` layer, click the **Qplotly Widgets** icon.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-49.png" alt="QGIS Project Layers List" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

2. To create a new widget, click the **New Qplotly Widget** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-50.png" alt="New Qplotly Widget" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

3. In the **New Qplotly Widget** pop-up, click inside the upload box to open your file explorer.

      <br>

4. Navigate to `Tutorial_Data_G3WSUITE -> plots` and select: `qplotly_type-distribution`.

      <br>

5. Click **Ok**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-51.png" alt="New Qplotly Widget 2" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

The new chart widget will now appear in the layer's **Qplotly Widget List** and will be automatically available in the WebGIS interface.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-52.png" alt="New Search Widget 3" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

> **Note:** For more details, refer to the [Widgets management](https://g3w-suite.readthedocs.io/en/latest/g3wsuite_administration.html#widgets-management) section of the official G3W documentation.
