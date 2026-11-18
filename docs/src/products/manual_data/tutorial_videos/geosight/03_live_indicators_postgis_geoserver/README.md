# Test data: GSH Workflows: Live Indicators from PostGIS, GeoServer and GeoSight

Turn the rows in your PostGIS database into a GeoSight indicator that keeps itself up to date. A GeoServer SQL view counts the water points that need repair in each region, GeoSight reads the result as GeoJSON on a schedule, and the map follows when the data in PostGIS changes.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/03_live_indicators_postgis_geoserver`.

## Before you start

- The tables, GeoServer store and dashboard from the previous video ([data for video 2](https://github.com/kartoza/GeoHosting-Documentation/tree/main/docs/src/products/manual_data/tutorial_videos/geosight/02_geoserver_layers_in_geosight))

## Files

| File | What it is |
|---|---|
| `water_stats.sql` | The SQL statement for the GeoServer SQL view `water_stats`: points, points needing repair and the share in percent, per region. |

## How to use them

1. Step 1: in GeoServer, **Layers > Add a new layer > water_db > Configure new SQL view**. Name it `water_stats` and paste the content of `water_stats.sql`. Set `region_ucode` as the identifier and the geometry to Point, 4326.
2. Step 2 GeoJSON URL: `<your GeoServer>/geoserver/water/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=water:water_stats&outputFormat=application/json`
3. Step 3: import with **API With Geography Long Format**. Key `features`, geo code `properties.region_ucode`, value `properties.pct_needs_repair`.
4. Step 5: in PostGIS, change one point to `Needs repair`, for example `UPDATE water_points SET status = 'Needs repair' WHERE code = 'WP-116';`, then run the import job again.

## Credits

- The water points are fictional and do not show real locations.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
