# Test data: GSH Workflows: Disaggregated Data with Related Tables

A regional number tells you how many people are affected, but not who they are. You import a household survey as a GeoSight related table and turn it into a map layer with filters for sex, age group and urban or rural area. The map recalculates as viewers change the filters.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/08_disaggregated_data_related_tables`.

## Before you start

- The dashboard from the earlier GeoSight videos (reference dataset **Ghana Regions**)

## Files

| File | What it is |
|---|---|
| `ghana_water_survey_2025.xlsx` | Sheet `Survey`, 256 rows: 16 regions x 2 sexes x 4 age groups x urban/rural. Columns `region_code`, `region`, `survey_date`, `sex`, `age_group`, `residence`, `people_without_safe_water`. Fictional values. |

## How to use them

1. Step 1: import the file as a related table named **Ghana Water Survey 2025**.
2. Step 2: set the **Geography Code Field** to `region_code` (type `ucode`). GeoSight preselects the first column, and that gives an empty map.
3. Step 3: slicers `sex`, `age_group` and `residence`, aggregation SUM of `people_without_safe_water`. Tick **Apply when filtering** so the colour classes follow the slicers.

## Credits

- The survey values are fictional and are not real survey results.
- Ghana boundaries: geoBoundaries gbOpen (Runfola et al. 2020), derived from OpenStreetMap, CC BY-SA 2.0. Credit geoBoundaries and OpenStreetMap contributors.
