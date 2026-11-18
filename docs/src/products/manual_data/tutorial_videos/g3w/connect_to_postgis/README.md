# Test data: GeoSpatial Hosting Workflow Series 10: Connect to PostGIS

Connect your PostGIS database to QGIS, import and style a world map of countries, and publish it as a web map in G3W. The map reads straight from PostGIS, so changes to the data show up on the web without uploading files again.

Download all files in one ZIP: [Tutorial_Data_G3WSUITE.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Tutorial_Data_G3WSUITE.zip). The files for this video are in the folder `Tutorial_Data_G3WSUITE/tutorial_videos/connect_to_postgis`.

## Before you start

- A G3W instance and a PostGIS instance on GeoSpatial Hosting
- QGIS on your computer

## Files

| File | What it is |
|---|---|
| `world-administrative-boundaries.shp/.shx/.dbf/.prj/.cpg` | Countries and territories of the world. Keep all five files together. |
| `check_qgis_auth_password.py` | Checks that `password.txt` matches your `qgis-auth.db` before you upload them to G3W. |

## How to use them

1. Step 1: run the check from a terminal that has PyQGIS (for example the OSGeo4W Shell on Windows):

   ```bash
   python3 check_qgis_auth_password.py qgis-auth.db password.txt
   ```

   `MATCH` means the password is correct.
2. Step 4: drag `world-administrative-boundaries.shp` into QGIS and import it with **Database > DB Manager > Import Layer/File**.
3. Step 5: style with **Categorized** on the field `English_Nam`.
4. Your own `qgis-auth.db` and `password.txt` are not part of this pack. You make them in Step 1.

## Credits

- World Administrative Boundaries, Countries and Territories, published on OpenDataSoft (<https://public.opendatasoft.com/explore/dataset/world-administrative-boundaries/>). Check the source page for the licence terms.
