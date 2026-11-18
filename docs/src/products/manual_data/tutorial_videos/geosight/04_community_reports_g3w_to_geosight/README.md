# Test data: GSH Workflows: Community Reports from G3W to GeoSight

People in the field report broken pumps, dirty water and dry taps, and each report is a point on a G3W map. This video counts the open reports in each region with a PostGIS view, publishes the numbers from G3W as GeoJSON, and shows them on the GeoSight dashboard with a link back to the G3W map for the details.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/04_community_reports_g3w_to_geosight`.

## Before you start

- The `ghana_regions` table in your PostGIS database ([video 2](https://github.com/kartoza/GeoHosting-Documentation/tree/main/docs/src/products/manual_data/tutorial_videos/geosight/02_geoserver_layers_in_geosight))
- A G3W instance and GeoSight on GeoSpatial Hosting, plus QGIS on your computer

## Files

| File | What it is |
|---|---|
| `community_reports.sql` | Creates the table `public.community_reports` with 210 fictional reports. |
| `community_reports.csv` | The same reports as CSV, with `lon` and `lat` columns. |
| `report_stats.sql` | Creates the view `public.report_stats`: reports and open reports per region, counted live. |
| `popup_template.html` | The GeoSight popup with the link back to G3W. Replace `YOUR-G3W-ADDRESS`. |
| `group_logo.png` | A plain logo you can use for the G3W cartographic group. |

## How to use them

1. Run `community_reports.sql` and then `report_stats.sql` in pgAdmin or psql. `ghana_regions` must exist first.
2. In QGIS, add `community_reports`, `report_stats` and `ghana_regions` from PostGIS, style them, save the project and publish it in G3W. Allow anonymous users to view the project, because GeoSight reads the GeoJSON without logging in.
3. Step 2 GeoJSON URL: `<your G3W>/ows/<group>/qdjango/<project id>/?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=<layer name>&OUTPUTFORMAT=GeoJSON` (spaces in the layer name become underscores).
4. Step 3: import with **API With Geography Long Format**. Key `features`, geo code `properties.region_ucode`, value `properties.open_reports`.

## Credits

- The reports are fictional and generated for this demo.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
- Base map: OpenStreetMap contributors.
