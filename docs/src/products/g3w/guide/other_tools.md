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

# Integrating With Other Tools

Once your project is published, click the **Layers** icon to configure functional widgets for each layer:

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-42.png" alt="Functional Options" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Search Widget

1. From **QGIS Project Layers**, click the **Widgets List** icon next to the `buildings` layer.

2. Click **Add New Widget**.

3. In the **Widget Creation Form**, set:

   - **Type:** `Search`
   - **Name:** `Search Widget`
   - **Search Title:** `Tutorial Search Widget`

4. Under **Search Field Settings**, click **Add** and configure:

   - **Field:** `type`
   - **Widget:** `SelectBox`
   - **Alias:** `Building Type`
   - **Operator:** `=`

5. Click **OK**.

<br>

## Plots Widget

1. From **QGIS Project Layers**, click the **Qplotly Widgets** icon next to the `buildings` layer.

2. Click **New Qplotly Widget**.

3. In the pop-up, upload the plot definition (`.xml`) from your `plots/` folder: `Tutorial_Data_G3WSUITE/plots/qplotly_type-distribution.xml`.

4. Click **OK**.

<br>

> **Note:** Search and plot widgets update dynamically based on map extent and feature selection.
