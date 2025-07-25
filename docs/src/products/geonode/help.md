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

# Geonode Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>Why does my layer break when I upload it?</summary>
  <div class="faq-answer">
    Layer names with special or non-standard characters (e.g., em dashes, smart quotes) can cause errors.  
    <br><br>
    <strong>Fix:</strong> Use only standard ASCII characters like regular hyphens (-), letters, and numbers.
  </div>
</details>

<details class="faq-item">
  <summary>Why are duplicate layers created when pushing from QGIS?</summary>
  <div class="faq-answer">
    Pushing edits from the original QGIS layer again after pushing creates duplicates.  
    <br><br>
    <strong>Fix:</strong> Close the original QGIS layer after pushing, then fetch the layer from GeoNode and edit that to avoid duplicates.
  </div>
</details>

<details class="faq-item">
  <summary>My uploaded layer doesn’t show up in GeoNode — what’s wrong?</summary>
  <div class="faq-answer">
    It might be an import error or file format issue. Check if your file is zipped properly and in a supported format like Shapefile or GeoPackage. Also, verify upload logs for errors.
  </div>
</details>

<details class="faq-item">
  <summary>I get an error about geometry types when uploading a layer, how to fix it?</summary>
  <div class="faq-answer">
    GeoNode expects consistent geometry types. For example, a "LineString" layer should not contain "MultiLineString" features.  
    <br><br>
    <strong>Fix:</strong> Use QGIS’s "Multipart to Singleparts" tool or similar to ensure geometries are consistent before upload.
  </div>
</details>

<details class="faq-item">
  <summary>Why can’t I see certain layers or maps on the public site?</summary>
  <div class="faq-answer">
    The layer or map might be private or restricted. Check the “Sharing” permissions and ensure the "Anonymous Users" group has view rights if you want public access.
  </div>
</details>

<details class="faq-item">
  <summary>I uploaded a zipped shapefile, but it’s missing attributes — why?</summary>
  <div class="faq-answer">
    Make sure all required components of the shapefile (.shp, .shx, .dbf, .prj) are included in the ZIP file. If even one is missing, GeoNode may not import it correctly.
  </div>
</details>

<details class="faq-item">
  <summary>My layer appears blank in the map viewer — what’s wrong?</summary>
  <div class="faq-answer">
    Your layer might be outside the current map extent or missing a coordinate reference system (CRS).  
    <br><br>
    <strong>Fix:</strong> Check your layer in QGIS, reproject it to EPSG:4326 if needed, and re-upload.
  </div>
</details>

<details class="faq-item">
  <summary>Upload fails with a "timeout" or "server error"</summary>
  <div class="faq-answer">
    Large files can cause timeouts or memory issues. Try simplifying geometries or reducing file size. If the problem persists, contact your GeoNode administrator for upload limits or server logs.
  </div>
</details>

<details class="faq-item">
  <summary>Styling changes in the map viewer aren’t saving</summary>
  <div class="faq-answer">
    After applying style changes, make sure you click the **Save** button in the map composer. Also confirm you have edit permissions for the map or layer.
  </div>
</details>

<details class="faq-item">
  <summary>I can’t upload a layer due to a “duplicate name” error</summary>
  <div class="faq-answer">
    GeoNode does not allow two layers with the same name. Rename your layer in QGIS or during the upload process to ensure it’s unique.
  </div>
</details>

<br>

## Frequently Asked Questions (FAQ)

<details class="faq-item">
  <summary>Can I upgrade my product or plan?</summary>
  <div class="faq-answer">
    Not yet. At the moment, upgrading from one product tier to another is not supported. However, this feature is actively being worked on and will be available in a future release. Stay tuned!
  </div>
</details>

<details class="faq-item">
  <summary>Can I use a custom domain name for my GeoNode instance?</summary>
  <div class="faq-answer">
    Currently, custom domains are not supported. This is a frequently requested feature and is already on the roadmap. We’re working to make this available in an upcoming version.
  </div>
</details>

<details class="faq-item">
  <summary>How do I update an existing layer on GeoNode via QGIS?</summary>
  <div class="faq-answer">
    Fetch the existing layer from GeoNode using the plugin, make your edits on this fetched layer, then push your changes back to GeoNode to update without creating duplicates.
  </div>
</details>

<details class="faq-item">
  <summary>What file formats can I upload to GeoNode?</summary>
  <div class="faq-answer">
    GeoNode supports zipped Shapefiles, GeoPackages, and CSVs with geometry columns. Ensure your data matches one of these for successful uploads.
  </div>
</details>

<details class="faq-item">
  <summary>How do I set permissions for my layers and maps?</summary>
  <div class="faq-answer">
    After uploading, use the “Sharing” tab to assign view and edit permissions to users or groups. This controls who can access or modify your content.
  </div>
</details>

<details class="faq-item">
  <summary>Can I create maps combining multiple layers?</summary>
  <div class="faq-answer">
    Yes! You can create composite maps by adding multiple layers in the GeoNode map viewer. Save your map to share or publish it.
  </div>
</details>

<details class="faq-item">
  <summary>How can I delete a layer or map from GeoNode?</summary>
  <div class="faq-answer">
    Navigate to the layer or map’s detail page, click on the “Delete” button (if you have permissions), and confirm the deletion. Note this action is permanent.
  </div>
</details>

<details class="faq-item">
  <summary>How do I change the coordinate system of a layer?</summary>
  <div class="faq-answer">
    Use QGIS to reproject the layer to a standard CRS like EPSG:4326 before uploading. GeoNode relies on consistent spatial references for accurate display and analysis.
  </div>
</details>

<details class="faq-item">
  <summary>Can I collaborate with teammates on a shared map?</summary>
  <div class="faq-answer">
    Yes. Set map and layer permissions to allow viewing or editing by specific users or groups. Use the "Sharing" tab on each resource’s page to configure access.
  </div>
</details>

<details class="faq-item">
  <summary>Can I attach documents or metadata to a layer?</summary>
  <div class="faq-answer">
    Yes, you can add rich metadata including descriptions, keywords, licensing, and even external documents using the Metadata tab on the layer page.
  </div>
</details>

<br>

## Getting Support

If you run into an issue or need assistance, the best place to start is the **Support Centre** section on the  **[Users](https://kartoza.github.io/GeoHosting-Documentation/subscription/#support-center)** page.

There, you’ll find clear instructions on how to log a support ticket, including what information to provide so the team can assist you efficiently.

By using the official support system, your request will be properly tracked and routed to the right people, helping you get a faster and more accurate response.

<br>
