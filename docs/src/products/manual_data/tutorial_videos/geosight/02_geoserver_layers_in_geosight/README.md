# Test data: GSH Workflows: Add Your GeoServer Layers to a GeoSight Dashboard

Show a layer you already publish in GeoServer on your GeoSight dashboard, without copying any data. You add 120 water points from GeoServer as a WMS context layer with its legend, put it over the indicator map, and make a second layer that shows only the points that need repair.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/02_geoserver_layers_in_geosight`.

## Before you start

- The dashboard from **GeoSight Essentials**
- A GeoServer and a PostGIS database on GeoSpatial Hosting, with the database added to GeoServer as a store

## Files

| File | What it is |
|---|---|
| `ghana_regions.sql` | Creates the table `public.ghana_regions` (same 16 regions as video 1). |
| `water_points.sql` | Creates the table `public.water_points` (120 fictional points). |
| `water_points.geojson` | The same points as GeoJSON, if you prefer to import them with QGIS. |
| `water_points.csv` | The same points as CSV, with `lon` and `lat` columns. |
| `water_points.sld` | GeoServer style: white circles for Functional, red for Needs repair. |

## How to use them

1. Open pgAdmin (or psql) on your PostGIS database and run `ghana_regions.sql`, then `water_points.sql`. Each file drops and recreates its table, so you can run it again to start over.
2. In GeoServer, create a workspace `water` and a PostGIS store `water_db`, publish `water_points` and `ghana_regions`, and add `water_points.sld` as the style of `water_points`.
3. Step 2 context layer URL: `<your GeoServer>/geoserver/water/wms?LAYERS=water:water_points`, legend: `<your GeoServer>/geoserver/water/wms?REQUEST=GetLegendGraphic&FORMAT=image/png&LAYER=water:water_points`.
4. Step 4 filtered layer: add `&CQL_FILTER=status='Needs repair'` to the same URL.

## Credits

- The water points are fictional and do not show real locations.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
