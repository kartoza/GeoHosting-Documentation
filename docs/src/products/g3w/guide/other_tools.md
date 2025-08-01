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

G3W-SUITE supports a range of widgets and external tools that can enhance your published QGIS projects. These integrations allow you to provide a more dynamic and interactive experience for users, from advanced search functionality to powerful data visualizations.

<br>

## Search Widget

To add a Search Widget to your project, go to the <span class="ui-page-label">Layers List</span>. Click the <span class="ui-generic-label">Widgets List</span> icon next to the desired layer, then select <span class="ui-generic-label">Add New Widget</span>. In the configuration window, choose <span class="ui-generic-label">Search</span> from the <span class="ui-filename">Type</span> dropdown.

<br>

You'll then need to fill out the following fields:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Label that appears to end users</td>
    </tr>
    <tr>
      <td>Search Title</td>
      <td>Internal name of the widget</td>
    </tr>
    <tr>
      <td>Search Field Settings</td>
      <td>Field or expression to search against</td>
    </tr>
  </tbody>
</table>

<br>

Click <span class="ui-generic-label">Ok</span> to apply the widget to your layer.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-8-1.png" alt="Search Widget">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Plots Widget

To integrate a Plots Widget, return to the <span class="ui-page-label">Layers List</span> and click the <span class="ui-generic-label">Qplotly Widgets</span> icon next to the relevant layer. Then click <span class="ui-generic-label">New Qplotly Widget</span>. Upload a preconfigured DataPlotly <span class="ui-filename">.xml</span> file for your desired chart or graph, and confirm with <span class="ui-generic-label">Ok</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-8-2.png" alt="Plots Widget">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Explore a quick-reference glossary of essential terms used throughout this guide to help you navigate the platform more confidently.

<br>
