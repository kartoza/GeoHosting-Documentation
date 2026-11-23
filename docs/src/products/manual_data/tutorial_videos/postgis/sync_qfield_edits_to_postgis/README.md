# Test data: GSH Workflows: Sync QField Edits to Your PostGIS Database

Save your PostGIS connection as a PostgreSQL service, send a PostGIS layer to QField through QFieldCloud, and edit it offline in the field. When the device is back online, QFieldCloud writes each change into your database. The database password stays in QFieldCloud as an encrypted secret and is never sent to field devices.

Download all files in one ZIP: [Manual_Data_PostGIS.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_PostGIS.zip). The files for this video are in the folder `Manual_Data_PostGIS/tutorial_videos/sync_qfield_edits_to_postgis`.

## Before you start

- A PostGIS database on GeoSpatial Hosting
- QGIS on your computer, with the **PG service parser** and **QFieldSync** plugins
- A QFieldCloud account on a paid plan (Pro or an organisation plan). The free Community plan cannot download PostGIS layers for offline editing.
- QField on a phone or tablet

## Files

| File | What it is |
|---|---|
| `tree_inspections.sql` | Creates the table `public.tree_inspections`: 5 trees in Gardens, Cape Town. Tree `T-04` starts with condition `Fair`. |

## How to use them

1. Run `tree_inspections.sql` in pgAdmin or psql. It drops and recreates the table, so run it again to undo your edits.
2. In QGIS, set the `condition` field to a **Value Map** widget with the values `Good`, `Fair` and `Poor` (**Layer Properties > Attributes Form**). The video does this before recording, so QField shows a dropdown list.
3. Step 1: service name `gsh-postgis`, with `sslmode` set to `require`.
4. Step 2: QGIS connection `GSH PostGIS`, using the service `gsh-postgis`. Save the project as `tree_survey.qgz`.
5. Step 3: create an empty QFieldCloud project named `tree_survey`, then add a **pg_service** secret with the same service name, `gsh-postgis`.
6. Step 4: in QField, change tree `T-04` from `Fair` to `Poor`, with the note `Broken branch over footpath`, then upload the change.

## Credits

- Tree records and locations are fictional. The basemap in the video is OpenStreetMap, (c) OpenStreetMap contributors, ODbL.
