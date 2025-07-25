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

# GeoNode Overview

## Why Choose this Product?

GeoNode is a ready-to-use Spatial Data Infrastructure (SDI) platform designed to help organizations effortlessly share, visualize, and collaborate on geospatial data—eliminating the need to build complex systems from scratch. Here’s what makes GeoNode stand out:

- **Effortless Data Publishing**

    Upload vector and raster datasets such as Shapefiles, GeoJSON, or GeoTIFF directly through your web browser. GeoNode instantly publishes them as standard OGC services (WMS, WFS, WCS), making your data accessible across platforms.

    <br>

- **Comprehensive Metadata Management**

    Each dataset is automatically documented with ISO-compliant metadata—title, abstract, tags, bounding box, and more—ensuring your content is easily discoverable, interoperable, and well-organized.

    <br>

- **Dynamic Interactive Map Builder**

    Create customized maps by combining uploaded layers. Style maps on the fly, configure symbology, and generate embeddable map viewers—all within the browser, no client software needed.

    <br>

- **Granular Access Control & Security**

    Set precise permissions at the user or group level to control who can view, edit, download, or publish datasets and maps, helping you maintain data integrity and compliance.

    <br>

- **Powerful Search & Discovery Tools**

    Utilize full-text and faceted search to quickly find datasets, maps, documents, and users. Search results include live map previews for easy visual context.

    <br>

- **Flexible, Extensible Architecture**

    Built on robust open-source components like Django, GeoServer, PostGIS, Celery, and optionally Elasticsearch, GeoNode’s modular design allows you to extend functionality and integrate additional services as your needs evolve.

<div class="image-with-caption">
  <img src="../img/geonode-img-4.png" alt="Why" style="width: 70%;">
</div>

## What Size Should I Buy?

GeoNode is fully open-source with no licensing fees, giving you the flexibility to tailor your deployment to fit your organization’s scale and performance needs. Here’s a quick guide to help you decide:

1. **Small / Development Deployment**

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
          <td>All-in-One: Django, GeoServer, PostGIS, and Celery run together on a single (VM) or container</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Proof-of-concept projects, small teams or individual users, and local testing environments</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Simple setup, minimal resource requirements, quick deployment.</td>
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
          <td>Two-Tier: Separate database and GeoServer from web application. Includes a dedicated Celery worker and optional Elasticsearch for faceted search.</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>Departmental portals and moderate user traffic and data volume.</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Improved performance, scalability, and search functionality.</td>
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
          <td>High-Availability Cluster: Multiple web servers behind a load balancer, clustered GeoServer instances, redundant databases, and Celery autoscaling. Supports integration with CDN, authentication federation (LDAP/SAML), and monitoring tools.</td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td>National-scale Spatial Data Infrastructures (SDIs) and mission-critical applications demanding high reliability and uptime.</td>
        </tr>
        <tr>
          <td>Benefits</td>
          <td>Maximum scalability, fault tolerance, security, and operational monitoring.</td>
        </tr>
      </tbody>
    </table>

    <br>

Choose the deployment size that best aligns with your organization’s number of users and teams, data volume and complexity, as well as the required performance and reliability levels. All options leverage the **free, community-driven GeoNode ecosystem**, offering flexibility without any licensing costs.

<br>
