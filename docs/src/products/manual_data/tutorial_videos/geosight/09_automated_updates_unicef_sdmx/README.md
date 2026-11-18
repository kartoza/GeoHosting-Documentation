# Test data: GSH Workflows: Automated Updates from UNICEF SDMX

Let GeoSight fetch new numbers on a schedule instead of downloading them by hand. You connect GeoSight to the public UNICEF Data Warehouse, import the share of people with at least basic drinking water for 16 West African countries, and schedule the import every month. The dashboard shows 25 years on a time slider.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/09_automated_updates_unicef_sdmx`.

## Before you start

- A GeoSight instance on GeoSpatial Hosting and an admin login

## Files

| File | What it is |
|---|---|
| `west_africa_countries.geojson` | Outlines of 16 West African countries. Fields `name` and `ucode` (ISO 3166-1 alpha-3, for example `GHA`). |

## How to use them

1. Step 1: create the reference dataset **West Africa Countries** with one level, **Country**, and upload `west_africa_countries.geojson`. Use `ucode` as the code field.
2. Step 2: import with **SDMX Format**, mode **url**. SDMX link:

   ```
   https://sdmx.data.unicef.org/ws/public/sdmxapi/rest/data/UNICEF,WASH_HOUSEHOLDS,1.0/GHA+NGA+CIV+SEN+BFA+MLI+NER+TGO+BEN+GIN+SLE+LBR+GMB+GNB+CPV+MRT.WS_PPL_W-ALB.WAT._T._T?format=csv
   ```
3. Step 3: geo code column `REF_AREA`, value column `OBS_VALUE`, date from `TIME_PERIOD` in Year format.

## Credits

- Drinking water data (fetched live, not stored here): WHO/UNICEF Joint Monitoring Programme (JMP), via the UNICEF Data Warehouse (data.unicef.org).
- Boundaries: Natural Earth (public domain). Ghana outline: geoBoundaries gbOpen GHA ADM0 (public domain).
