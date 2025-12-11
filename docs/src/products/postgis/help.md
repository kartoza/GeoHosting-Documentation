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

# PostGIS Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>I can’t log in to pgAdmin.</summary>
  <div class="faq-answer">
    This usually happens if your password is incorrect or expired.  
    <br><br>
    <strong>Fix:</strong> Go to your product’s <strong>Product Details</strong> page and click <strong>Get Password</strong> next to the pgAdmin URL to retrieve fresh credentials.
  </div>
</details>

<details class="faq-item">
  <summary>pgAdmin connects but my database is empty.</summary>
  <div class="faq-answer">
    Sometimes users open the wrong server or database inside pgAdmin.  
    <br><br>
    <strong>Fix:</strong> Expand the correct server, then open <strong>Databases → kartoza_postgis</strong>.
  </div>
</details>

<details class="faq-item">
  <summary>My SQL query returns no results.</summary>
  <div class="faq-answer">
    This can occur if your geometry SRIDs do not match or if the spatial function used is invalid for your data type.  
    <br><br>
    <strong>Fix:</strong> Check SRIDs using <code>SELECT ST_SRID(geom)</code> and transform if needed.
  </div>
</details>

<details class="faq-item">
  <summary>My geometry looks correct but spatial joins return wrong results.</summary>
  <div class="faq-answer">
    This often happens when geometries are invalid (self-intersections, bowties, gaps).  
    <br><br>
    <strong>Fix:</strong> Validate using <code>SELECT ST_IsValid(geom)</code> and repair using <code>ST_MakeValid(geom)</code>.
  </div>
</details>

<details class="faq-item">
  <summary>My layer won't load in QGIS using the PostGIS connection.</summary>
  <div class="faq-answer">
    This can happen if SSL settings or host details are incorrect.  
    <br><br>
    <strong>Fix:</strong> Copy the exact host, port, database name, username, and password from your product details.
  </div>
</details>

<details class="faq-item">
  <summary>Spatial queries are very slow.</summary>
  <div class="faq-answer">
    Missing spatial indexes or complex geometries can slow performance.  
    <br><br>
    <strong>Fix:</strong> Create indexes using <code>CREATE INDEX ... USING GIST(geom);</code> and simplify large geometries if appropriate.
  </div>
</details>

<details class="faq-item">
  <summary>I imported a Shapefile but no geometry appears.</summary>
  <div class="faq-answer">
    This often happens when the geometry column name is not <code>geom</code> or the SRID is missing.  
    <br><br>
    <strong>Fix:</strong> Ensure your geometry column exists, then assign an SRID using <code>ST_SetSRID()</code> if required.
  </div>
</details>

<details class="faq-item">
  <summary>pgAdmin shows “server not responding.”</summary>
  <div class="faq-answer">
    Network firewalls or VPNs can block access.  
    <br><br>
    <strong>Fix:</strong> Disable VPN/proxy or try another network. If hosting restricts IP ranges, request your IP to be allowed.
  </div>
</details>

<details class="faq-item">
  <summary>My uploaded data shows incorrect coordinates.</summary>
  <div class="faq-answer">
    This is usually caused by using latitude/longitude in the wrong order.  
    <br><br>
    <strong>Fix:</strong> Ensure point creation follows <code>ST_Point(longitude, latitude)</code>.
  </div>
</details>

<details class="faq-item">
  <summary>I can’t delete a table in PostGIS.</summary>
  <div class="faq-answer">
    Active dependencies (views, foreign keys, raster overviews) may prevent deletion.  
    <br><br>
    <strong>Fix:</strong> Drop or update dependent objects using <code>DROP ... CASCADE</code> if safe to do so.
  </div>
</details>

<br>

## Frequently Asked Questions (FAQ)

<details class="faq-item">
  <summary>What software do I get with the hosted PostGIS product?</summary>
  <div class="faq-answer">
    Your subscription includes a fully managed instance of <strong>PostgreSQL</strong>, <strong>PostGIS</strong>, and a web-accessible <strong>pgAdmin</strong> interface.
  </div>
</details>

<details class="faq-item">
  <summary>Can I connect to my database from QGIS?</summary>
  <div class="faq-answer">
    Yes. Use QGIS's <strong>PostgreSQL/PostGIS</strong> connection panel and enter the host, port, database name, user, and password from your product details.
  </div>
</details>

<details class="faq-item">
  <summary>How do I upload data to PostGIS?</summary>
  <div class="faq-answer">
    You can upload data using pgAdmin’s <strong>Query Tool</strong>, import tools in QGIS, or command-line utilities like <code>shp2pgsql</code> and <code>ogr2ogr</code>.
  </div>
</details>

<details class="faq-item">
  <summary>Does PostGIS support raster data?</summary>
  <div class="faq-answer">
    Yes. PostGIS supports raster storage and analysis through <code>postgis_raster</code>. You can import rasters using <code>raster2pgsql</code>.
  </div>
</details>

<details class="faq-item">
  <summary>Can I share my database with teammates?</summary>
  <div class="faq-answer">
    Yes. Additional user accounts can be created with different permission levels.
  </div>
</details>

<details class="faq-item">
  <summary>How do I change my pgAdmin password?</summary>
  <div class="faq-answer">
    In pgAdmin, click the <strong>User</strong> menu → <strong>Change Password</strong>, then enter your current and new passwords.
  </div>
</details>

<details class="faq-item">
  <summary>Can I migrate my existing local PostgreSQL/PostGIS database to the hosted one?</summary>
  <div class="faq-answer">
    Yes. You can migrate using tools like <code>pg_dump</code> and <code>pg_restore</code>, or export/import through QGIS. Ensure extensions exist on the target before restoring.
  </div>
</details>

<details class="faq-item">
  <summary>Can I run SQL scripts directly?</summary>
  <div class="faq-answer">
    Yes. Use <strong>pgAdmin → Tools → Query Tool</strong> to run SQL scripts, create tables, or execute spatial queries.
  </div>
</details>

<details class="faq-item">
  <summary>Does PostGIS support all spatial reference systems?</summary>
  <div class="faq-answer">
    Nearly all EPSG codes are supported. You can check available SRIDs in <code>spatial_ref_sys</code>.
  </div>
</details>

<details class="faq-item">
  <summary>Can I use my PostGIS database with a web application?</summary>
  <div class="faq-answer">
    Yes. PostGIS works with frameworks such as Django, Node.js, GeoServer, QGIS Server, and Mapbox GL JS through standard PostgreSQL connections.
  </div>
</details>

<br>

## Getting Support

If you run into an issue or need assistance, the best place to start is the **[Support Center](https://kartoza.github.io/GeoHosting-Documentation/users/support_center/)** page in the **Users** section.

There, you’ll find clear instructions on how to log a support ticket, including what information to provide so the team can assist you efficiently.

By using the official support system, your request will be properly tracked and routed to the right people, helping you get a faster and more accurate response.

<br>
