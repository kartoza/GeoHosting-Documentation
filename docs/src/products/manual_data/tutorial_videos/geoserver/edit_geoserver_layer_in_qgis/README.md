# Test data: GSH Workflows: Edit Your GeoServer Layer in QGIS with WFS

Publish a PostGIS table as a GeoServer layer, open it in QGIS through WFS, and edit it on your desktop. Every change you save in QGIS goes back to GeoServer and into your database, so everyone who uses the layer sees it.

Download all files in one ZIP: [Manual_Data_GeoServer.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoServer.zip). The files for this video are in the folder `Manual_Data_GeoServer/tutorial_videos/edit_geoserver_layer_in_qgis`.

## Before you start

- A GeoServer and a PostGIS database on GeoSpatial Hosting
- QGIS on your computer
- A GeoServer user with write access to the workspace (the video uses `qgis_editor`)

## Files

| File | What it is |
|---|---|
| `community_parks.sql` | Creates the table `public.community_parks`: 4 parks in Cape Town. Kloof Commons starts with status `Planned`. |

## How to use them

1. Run `community_parks.sql` in pgAdmin or psql. It drops and recreates the table, so run it again to undo your edits.
2. Step 1: workspace `demo`, PostGIS store `parks_db`, SSL mode `REQUIRE`, then publish `community_parks`.
3. Step 3: WFS address `<your GeoServer>/geoserver/wfs`, version **1.1**.
4. Step 4: enlarge **Kloof Commons** with the Vertex Tool and change its status from `Planned` to `Open`.

## Credits

- Park shapes simplified from OpenStreetMap, (c) OpenStreetMap contributors, ODbL. Park names and status are fictional.
