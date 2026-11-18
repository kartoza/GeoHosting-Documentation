# Test data: GSH Workflows: GeoSight Essentials

Start with an empty GeoSight and finish with a dashboard you can share. You add the regions of Ghana as boundaries, import a sample indicator from an Excel file, colour the map by region, add a chart, a filter and a lakes layer, and give the public a link.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/01_geosight_essentials`.

## Before you start

- A GeoSight instance on GeoSpatial Hosting and an admin login

## Files

| File | What it is |
|---|---|
| `ghana_country.geojson` | Ghana outline. Level 0 (Country) of the reference dataset. Code `GHA`. |
| `ghana_regions.geojson` | The 16 regions of Ghana. Level 1 (Region). Codes `GH01` to `GH16` in the `ucode` field. |
| `sample_water_access.xlsx` | Indicator values for `SAMPLE_WATER_ACCESS`, 16 regions x 3 years (2023, 2024, 2025). Fictional numbers. |

## How to use them

1. Step 2: create the reference dataset **Ghana Regions** with two levels, `0 Country` and `1 Region`. Upload `ghana_country.geojson` to level 0 and `ghana_regions.geojson` to level 1. Use `name` as the name field and `ucode` as the code field.
2. Step 3: create the indicator **Sample Water Access** (shortcode `SAMPLE_WATER_ACCESS`, unit `%`, 0 to 100), then import `sample_water_access.xlsx` with **Excel Long Format**.
3. Step 7: the **Lakes** context layer is read straight from Natural Earth. Layer type **Geojson**, URL: `https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_lakes.geojson`

## Credits

- The water access values are fictional and made for this demo.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
- Lakes: Natural Earth (public domain).
