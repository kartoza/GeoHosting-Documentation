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

# File Manager

## Uploading the SpatiaLite database to the File Manager

1. Open a web browser and navigate to:

      ```bash
      http://<application_name>.sta.do.kartoza.com/g3w
      ```

      <br>

2. Log in to G3W-SUITE using your **administrator credentials**.

      - **Username:** `admin`
      - **Password:** `*generate from dashboard*`

      <br>

      > **Hint:** Need help finding your credentials? See the section: [Using the Kartoza GeoSpatialHosting Dashboard](https://kartoza.github.io/GeoHosting/products/g3w/guide/#using-the-kartoza-geospatialhosting-dashboard)

      <br>

3. Once authenticated, navigate to the **Administration Panel**

      <br>

      > **Hint:** Need help navigating to the Administration Panel? Refer to the [Administration Panel](https://kartoza.github.io/GeoHosting/products/g3w/guide/#administration-panel) section.

      <br>

4. In the top-bar, click the **Gear** icon.

      <br>

5. Under **File Manager**, select **Files**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-17.png" alt="Gear Icon" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

6. From the **Home** folder (or the left-hand panel), navigate to the `project_data` folder.

      <br>

7. In the top navigation bar, click the **New Folder** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-18.png" alt="New Folder button" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

8. Name your new folder `spatialite` and click **Create Folder**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-19.png" alt="Create New Folder" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

      > **Note:** Make sure the file path matches the one specified in your QGIS project.

      <br>

9. Open your newly created folder, then in the top bar, click **Upload**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-20.png" alt="Upload Button" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

10. Click inside the file drop area to open your system file explorer.

      <br>

11. Select the `g3w_tutorial.sqlite` file from the `project_data -> spatialite` folder and click **Upload**.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-21.png" alt="Upload File" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

You’ve successfully uploaded your SpatiaLite database to the File Manager and can now proceed with publishing your QGIS project.
