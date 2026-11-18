# Test data: GSH Workflows: GeoNode Catalogue to GeoSight

Keep your datasets in a GeoNode catalogue and show them on a GeoSight dashboard without exports or copies. You upload the main rivers of Ghana to GeoNode, describe and share them, find a hospitals dataset in the catalogue, and add both to the dashboard through GeoNode's WMS service.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/05_geonode_catalogue_to_geosight`.

## Before you start

- The dashboard from the earlier GeoSight videos
- A GeoNode instance on GeoSpatial Hosting

## Files

| File | What it is |
|---|---|
| `ghana_main_rivers.shp/.shx/.dbf/.prj/.cpg` | 16 main rivers of Ghana as lines. Upload all five files together. |
| `ghana_main_rivers.sld` | Style for the rivers (blue line). |
| `ghana_hospitals.shp/.shx/.dbf/.prj/.cpg` | 449 named hospitals in Ghana as points. |
| `ghana_hospitals.sld` | Style for the hospitals (purple square). |

## How to use them

1. Steps 1 to 3: upload both datasets to GeoNode, then add the SLD with **Edit > Upload Style**. To let GeoSight read a dataset, set **Anyone** to **Download** and click **Resource > Save**.
2. The symbols in the SLD files are twice the size that looks right in GeoNode. GeoSight draws WMS tiles at half size, so they look right on the dashboard.
3. Step 5 context layer URL: `<your GeoNode>/geoserver/wms?LAYERS=geonode:ghana_main_rivers`, type **Raster Tile**. Same for `geonode:ghana_hospitals`.

## Credits

- Rivers and hospitals: (c) OpenStreetMap contributors, Open Database License (ODbL) 1.0, <https://www.openstreetmap.org/copyright>. Extracted with the Overpass API on 12 November 2026 and simplified. This is not an official dataset and it is not complete.
