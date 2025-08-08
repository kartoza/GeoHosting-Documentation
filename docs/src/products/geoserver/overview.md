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

# GeoServer Overview

## Why Choose this Product?

**GeoServer** is a powerful and widely adopted open-source server platform for sharing geospatial data. It enables you to publish vector and raster data using open standards, making it easy to integrate with existing systems and web mapping frameworks.

Whether you're building a lightweight internal service or a robust, public-facing map platform, GeoServer gives you full control over how your spatial data is served and styled. Here’s why GeoServer stands out:

- **OGC-Compliant Data Publishing**

    GeoServer supports key Open Geospatial Consortium (OGC) standards such as WMS, WFS, WCS, WMTS, and WPS — allowing you to share, edit, and process spatial data across interoperable platforms with ease.

    <br>

- **Flexible Styling With SLD and CSS**

    Control the appearance of your maps down to the finest detail using Styled Layer Descriptor (SLD) or CSS-like styling. GeoServer gives you full control over symbology, labels, scale-dependent rendering, and more.

    <br>

- **Scalable Raster and Vector Delivery**

    Serve everything from high-resolution satellite imagery and elevation models to shapefiles and PostGIS layers. GeoServer is optimized for handling both tiled and dynamic map requests, even in high-demand environments.

    <br>

- **Built for Interoperability**

    GeoServer integrates well with open-source tools like QGIS, OpenLayers, and Leaflet, as well as proprietary platforms like ArcGIS and Google Earth. You can also connect to backend databases such as PostGIS, Oracle Spatial, and SQL Server.

    <br>

- **Extendable and Customizable**

    Add new capabilities via GeoServer’s plugin architecture, whether you need Web Processing Service (WPS), security extensions, or custom formats. It’s a developer-friendly platform designed for long-term adaptability.

    <br>

<div class="image-with-caption">
  <img src="../img/geoserver-img-3-1.png" alt="Why">
</div>

<br>

## What Size Should I Buy?

GeoServer is designed to scale with your needs. Whether you're managing a simple departmental map service or running a national Spatial Data Infrastructure (SDI), our hosted GeoServer environments can be tailored to fit.

<br>

1. **Small / Basic Deployment**

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Architecture</td>
          <td>Single-host setup with GeoServer and internal PostGIS (optional). Ideal for small teams or test environments.</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Prototypes, academic use, single-user map publication, or non-critical internal tools.</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Fast to deploy, minimal overhead, and budget-friendly.</td>
        </tr>
      </tbody>
    </table>

    <br>

2. **Medium / Production Deployment**

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Architecture</td>
          <td>Two-tier setup with dedicated PostGIS database, separate GeoServer instance, and optional external data stores or extensions.</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Government departments, NGOs, consultancies, or organizations publishing several datasets and maps publicly.</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Improved stability, isolated services, support for security extensions, better performance under moderate load.</td>
        </tr>
      </tbody>
    </table>

    <br>

3. **Large / Enterprise Deployment**

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Architecture</td>
          <td>High-availability setup with load-balanced GeoServer instances, clustered databases, tile caching, and optional CDN and security integrations (OAuth2, LDAP, SAML).</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Enterprise SDIs, national portals, and high-traffic applications that require robust performance, redundancy, and uptime guarantees.</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Scalability, fault tolerance, secure access control, disaster recovery support, and full integration with external systems.</td>
        </tr>
      </tbody>
    </table>

<br>

No matter the size or scope of your deployment, GeoServer provides a rock-solid foundation for open geospatial data services. With Kartoza’s hosted offering, you also get expert configuration, monitoring, and support — so you can focus on using your data, not managing infrastructure.

<br>
