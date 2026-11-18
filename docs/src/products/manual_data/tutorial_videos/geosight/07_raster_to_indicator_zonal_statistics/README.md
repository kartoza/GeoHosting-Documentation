# Test data: GSH Workflows: From Raster to Indicator: Zonal Statistics in QGIS

Turn a raster into one number per region and use those numbers as a GeoSight indicator. In QGIS you add up the people in each region of Ghana from a population raster, save the table as an Excel file, and import the totals into GeoSight.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/07_raster_to_indicator_zonal_statistics`.

## Before you start

- QGIS on your computer
- The Ghana regions as the `ghana_regions` table in PostGIS ([video 2](https://github.com/kartoza/GeoHosting-Documentation/tree/main/docs/src/products/manual_data/tutorial_videos/geosight/02_geoserver_layers_in_geosight))
- Or, without PostGIS, the file `ghana_regions.geojson` ([video 1](https://github.com/kartoza/GeoHosting-Documentation/tree/main/docs/src/products/manual_data/tutorial_videos/geosight/01_geosight_essentials))
- The dashboard from the earlier GeoSight videos

## Files

| File | What it is |
|---|---|
| `gha_ppp_2020_1km_Aggregated_UNadj.tif` | WorldPop population raster, Ghana 2020, people per 1 km pixel. |
| `gha_ppp_2020_1km_Aggregated_UNadj.qml` | QGIS style for the raster. Keep it next to the .tif and QGIS loads it automatically. |
| `ghana_population_2020.xlsx` | The result of Step 3 (sheet `Population`: `name`, `ucode`, `pop_sum`). Use it to check your numbers or to skip ahead. |

## How to use them

1. Step 2: run **Zonal statistics** with the regions as input, prefix `pop_`, statistic **Sum**.
2. You should get about 30.9 million people in total, with Ashanti (6,365,917) and Greater Accra (5,219,254) at the top.
3. Step 4: import with **Excel Long Format**, sheet `Population`, geo code column `ucode`, value column `pop_sum`.

## Credits

- Population: WorldPop (<https://www.worldpop.org>), Ghana 2020, 1 km, UN adjusted, CC BY 4.0.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
