---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Integrating With Other Tools

GeoNode makes it easy to work across platforms by exposing all datasets through standard **OGC** services, including **WMS**, **WFS**, and **WCS**. This means you can load layers directly into desktop GIS tools like QGIS or embed them in web applications with minimal setup.

<br>

## Connecting GeoNode to QGIS via WMS

You can easily load GeoNode layers into QGIS using the **WMS (Web Map Service)** protocol. This allows you to view and interact with published map layers directly from your GeoNode instance. To get started, open QGIS and navigate to: <span class="ui-generic-label">Layer → Add Layer → Add WMS/WMTS Layer…</span>

<br>

Click <span class="ui-generic-label">New</span> and enter the connection details below:

<table class="my-table-style">
<thead>
   <tr>
      <th>Field</th>
      <th>Value</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td>Name</td>
      <td>GeoNode WMS</td>
   </tr>
   <tr>
      <td>URL</td>
      <td>http://<geonode_application_name>.sta.do.kartoza.com/geoserver/ows?service=WMS&version=1.3.0&request=GetCapabilities</td>
   </tr>
</tbody>
</table>

<br>

Click <span class="ui-generic-label">OK</span>, then <span class="ui-generic-label">Connect</span> to fetch the list of available layers. Select the layer you want to view (e.g., <span class="ui-filename">geonode:landuse</span>), then click <span class="ui-generic-label">Add</span>. The layer will load into your QGIS map canvas and be ready for styling, analysis, or overlaying with other datasets.

<br>

<div class="image-with-caption">
  <img src="../../img/geonode-img-23.png" alt="Connect WMS">
  <div class="caption">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Ensure that the layer is shared publicly in GeoNode or that you are authenticated to access restricted content.
  </div>
</div>

<br>

## Embedding a GeoNode Layer in Leaflet

You can display GeoNode layers on a custom web map using **Leaflet** and **WMS**. Follow these steps to embed a published layer in your HTML page:

<br>

### Step 1: Include Leaflet’s CSS and JS

In your HTML **`<head>`**, add the following:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
```

<br>

### Step 2: Add a Map Container

In your **`<body>`**, create a container for the map:

```html
<div id="map" style="height: 400px;"></div>
```

<br>

### Step 3: Initialise the Map and Add the WMS Layer

Still within the **`<body>`**, insert a script that sets up your map and loads the GeoNode WMS layer:

```html
<script>
const map = L.map('map').setView([52.51, 13.40], 12); // Berlin centre
L.tileLayer.wms('http://<geonode_application_name>.sta.do.kartoza.com/geoserver/ows', {
   layers: 'geonode:landuse',
   format: 'image/png',
   transparent: true,
   attribution: '© GeoNode'
}).addTo(map);
</script>
```

<br>

### Step 4: View the Map

Save the file and open it in your browser. The GeoNode layer will be displayed in the Leaflet map.

<br>

<div class="image-with-caption">
  <img src="../../img/geonode-img-24.png" alt="Connect WMS">
  <div class="caption">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Be sure to update the application hostname and layer name to match your GeoNode instance.
  </div>
</div>

<br>

## Accessing GeoNode WFS

To retrieve raw vector feature data such as GeoJSON or GML, use the **Web Feature Service (WFS)** endpoint exposed by GeoServer.

<br>

**Example WFS URL (GeoJSON Output):**

```bash
http://<geonode_application_name>.sta.do.kartoza.com/geoserver/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=tutorial:buildings&outputFormat=application/json
```

<br>

### How to Use

You can paste this URL into:

- **Postman** or any API testing tool to inspect feature responses
- **curl** in your terminal to retrieve data directly
- **Web mapping libraries** such as Leaflet or OpenLayers that support WFS

<br>

**Example with <span class="ui-filename">curl</span>:**

```bash
curl "http://<geonode_application_name>.sta.do.kartoza.com/geoserver/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=tutorial:buildings&outputFormat=application/json"
```

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Replace both the application name and layer name with your actual GeoNode instance and dataset.
  </div>
</div>

<br>

---

**Next up:** A quick glossary of key terms used in this guide.

<br>
