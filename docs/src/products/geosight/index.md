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

# GeoSight

## What is GeoSight?

**GeoSight** is an open-source geospatial data visualization and analysis platform designed to help organizations explore, understand, and act on spatial data through intuitive, web-based dashboards.

Originally developed with the support of **UNICEF**, GeoSight enables both technical and non-technical users to analyse complex datasets, such as socio-economic indicators, hazard exposure, and risk metrics, at subnational levels to support informed decision-making.

<br>

<div class="image-with-caption">
  <img src="./img/geosight-img-1.png" alt="GeoSight Logo" style="width: 15%;">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

As a hosted product on GeoSpatialHosting, GeoSight comes fully managed and ready to use—removing the complexity of deployment and infrastructure setup. It provides a powerful environment for building interactive dashboards, combining multiple datasets, and visualising trends over time.

GeoSight integrates seamlessly with administrative boundary systems like GeoRepo, ensuring consistency across datasets and enabling accurate comparisons and analysis across regions and time periods.

<br>

## Key Capabilities

- **Interactive Data Visualisation**

    Build dynamic dashboards using maps, charts, and widgets to explore spatial data

- **Indicator-Based Analysis**

    Visualise datasets linked to administrative boundaries using flexible styling and classes

- **Contextual Data Layers**

    Overlay additional geospatial data such as hazard maps or environmental layers

- **Trend Analysis**

    Analyse how indicators change over time to identify patterns and emerging risks

- **Advanced Filtering**

    Focus on specific areas or conditions using threshold-based filters

- **Integrated Analysis Tools**

    Compare datasets, explore relationships, and utilise tools like 3D visualisation

- **Batch Data Management**

    Efficiently manage and update multiple datasets simultaneously

- **Interoperability & APIs**

    Connect to external systems and share data seamlessly via APIs

<br>

## How GeoSight Works

GeoSight is built around the concept of projects (dashboards), where multiple datasets and layers are combined into a single interactive environment for analysis.

<br>

Key components include:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Indicators</td>
      <td>Data linked to administrative boundaries, visualised using choropleth maps or charts.</td>
    </tr>
    <tr>
      <td>Context Layers</td>
      <td>External geospatial layers (e.g. WMS, GeoJSON, ArcGIS services) used to provide additional context.</td>
    </tr>
    <tr>
      <td>Widgets</td>
      <td>Charts, summaries, and tables that highlight key insights from datasets.</td>
    </tr>
    <tr>
      <td>GeoRepo Integration</td>
      <td>Ensures all datasets align with consistent and up-to-date administrative boundaries.</td>
    </tr>
  </tbody>
</table>

<br>

## Community & Resources

GeoSight is an open-source platform with ongoing development and contributions. You can explore more through the official documentation and resources below:

<br>

<div class="cards-grid">
  <div class="card">
    <div class="card-header">
      📚 <a href="https://unicef-drp.github.io/GeoSight-OS-Documentation/" target="_blank">Documentation</a>
    </div>
    <div class="card-body">
      Official GeoSight documentation covering setup, features, and usage.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      💻 <a href="https://github.com/unicef-drp" target="_blank">Source Code</a>
    </div>
    <div class="card-body">
      Explore repositories and contribute to GeoSight development.
    </div>
  </div>
</div>

<br>

<!-- # GeoSight: Geospatial Risk Analysis and Visualization

**GeoSight** is an open-source geospatial visualization and data analysis platform developed by **UNICEF**. It aims to support decision-making by providing both experts and non-experts with easy access to powerful tools for understanding and analyzing data. These include deprivation indicators, exposure to hazards at subnational levels, and early warnings.

[![Uniceff](./img/geosight-img-1.png)](./img/geosight-img-1.png)

**GeoSight** is linked to an administrative boundary management system called **GeoRepo**. GeoRepo enables users to reconcile differences and track changes in administrative areas over time while maintaining an up-to-date global dataset of administrative boundaries, at least down to the second administrative level. In **GeoSight**, GeoRepo ensures compatibility between all indicators, facilitating seamless analysis.

## **Key Features**

- **Indicators** – Datasets assigned to administrative boundaries, visualized using flexible pre-set color rules.
- **Context Layers** – Geospatial data that is not constrained by administrative boundaries, including point or raster layers.
- **Widgets** – Summary graphs or figures that highlight key aspects of an indicator dataset.
- **Trend Analysis** – Visualizes changes in indicators over time.
- **Filters** – Tools to isolate and display administrative areas based on defined thresholds.
- **Analysis Tools** – Advanced tools, such as 3D display and compare layers, that help users explore data relationships.
- **Batch Management Tools** – Enables classification and formatting of multiple indicators simultaneously.
- **Access Controls** – Provides granular control over data visibility, down to individual users and datasets.
- **Interoperability** – Supports data ingestion from other systems and enables seamless data sharing.
- **Low Costs** – As open-source software, GeoSight incurs zero licensing fees.

### **Communicating with External Platforms and Information Sharing**

GeoSight integrates with external platforms through **Application Programming Interfaces (APIs)**, which act as gateways for seamless data exchange.

- **Incorporating External Data** – Users can connect external datasets to GeoSight, either as **context layers** (e.g., a natural hazard early warning system) or as **indicators**, provided they align with appropriate administrative boundaries.
- **Sharing Data** – GeoSight features its own API, allowing it to share data with other geospatial platforms. Users can also easily download all indicators in widely used formats such as **Excel**.
- **Interoperability** – A key design principle of GeoSight, ensuring smooth data integration and exchange across multiple systems.

### **GeoSight and the CCRI-DRM**

GeoSight enables users to **analyse and visualise** **Child Climate Risk Index – Disaster Risk Model (CCRI-DRM)** indicators and scores through an interactive online dashboard while providing access to all of GeoSight’s advanced features.

With **subnational analysis**, users can examine sectoral deprivations and hazard exposure, as well as their combined impact, to identify high-risk areas within a country. Additionally, GeoSight can integrate real-time data, such as **cyclone or flood warnings** and **recent conflict events**, to help users assess how current or near-future conditions intersect with vulnerability.

These analytical capabilities, combined with tools like filters, help users **understand situational context** and **target areas of concern** to support children, families, and communities through **risk-informed, resilient programming** and **emergency preparedness**. By clearly identifying risks and their causes, GeoSight ensures that **no one is left behind**.

On GeoSight, **the CCRI-DRM enables cross-sector collaboration**, allowing partners with different roles to share a **common risk assessment framework** and coordinate strategic planning. It also supports **advocacy, partnership building, and resource mobilisation**.

### **Four Ways to Use GeoSight and CCRI-DRM Data**

GeoSight’s interoperability allows UNICEF country teams and partners to engage in **information sharing** through four key methods:

1. **UNICEF GeoSight Dashboard Instance**
   - A country-specific dashboard, hosted on UNICEF servers, with full access to all features.

2. **External GeoSight Dashboard Instance**
   - As an open-source platform, anyone can install and customise a GeoSight instance on local servers at no cost.

3. **Data Sharing with External Platforms**
   - GeoSight can send data via **API** to other mapping platforms already in use.

4. **Embedding GeoSight Data**
   - Users can **copy and paste a URL** to embed GeoSight visualisations in any website.

[![Geosigh analytics](./img/geosight-img-2.png)](./img/geosight-img-2.png) -->
