# Test data: GSH Workflows: Dynamic Analysis Layers from PostGIS in GeoServer

Turn a PostGIS query into a GeoServer layer that runs the query every time a map asks for data. You draw a buffer around each park and pass the buffer distance in the map request, so one layer can show 200, 600 or 1000 metres without touching the database.

Download all files in one ZIP: [Manual_Data_GeoServer.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoServer.zip). The files for this video are in the folder `Manual_Data_GeoServer/tutorial_videos/sql_view_analysis_layers`.

## Before you start

- A GeoServer and a PostGIS database on GeoSpatial Hosting, with the database added to GeoServer as a store (see [Edit Your GeoServer Layer in QGIS](https://github.com/kartoza/GeoHosting-Documentation/tree/main/docs/src/products/manual_data/tutorial_videos/geoserver/edit_geoserver_layer_in_qgis))

## Files

| File | What it is |
|---|---|
| `community_parks.sql` | Creates the table `public.community_parks`: 4 parks in Cape Town. |
| `park_buffers_view.sql` | The SQL statement for the view `park_buffers`, with the `%distance%` parameter. |

## How to use them

1. Run `community_parks.sql` in pgAdmin or psql.
2. Step 1: **Layers > Add a new layer >** your store **> Configure new SQL view**. Name it `park_buffers` and paste the SQL from `park_buffers_view.sql` (without the comment lines).
3. Step 2: default value `200`, validation regular expression `^[\d]+$`, keep **Escape special SQL characters** ticked.
4. Step 4: add `&viewparams=distance:600` to the Layer Preview address.

## Credits

- Park shapes simplified from OpenStreetMap, (c) OpenStreetMap contributors, ODbL. Park names and status are fictional.
