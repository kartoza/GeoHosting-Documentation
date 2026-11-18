# Test data: GSH Workflows: Cloud-Optimized Rasters on Your Dashboard

Put a raster on your GeoSight dashboard with no map server in between. You turn a population raster of Ghana into a Cloud-Optimized GeoTIFF (COG) with GDAL, upload it to an S3 bucket, and add it to GeoSight as a Raster COG context layer.

Download all files in one ZIP: [Manual_Data_GeoSight.zip](https://github.com/kartoza/GeoHosting-Documentation/raw/main/docs/src/products/manual_data/Manual_Data_GeoSight.zip). The files for this video are in the folder `Manual_Data_GeoSight/06_cloud_optimized_rasters`.

## Before you start

- GDAL on your computer
- An S3 bucket (Amazon S3, MinIO or similar)
- The dashboard from the earlier GeoSight videos

## Files

| File | What it is |
|---|---|
| `gha_ppp_2020_1km_Aggregated_UNadj.tif` | WorldPop population raster, Ghana 2020, 1 km (input for Step 1). |
| `ghana_population_2020_3857_cog.tif` | The finished COG in Web Mercator. Use it to skip Step 1. |

## How to use them

1. Step 1 command:

   ```
   gdal_translate -of COG -co TILING_SCHEME=GoogleMapsCompatible -co COMPRESS=DEFLATE -co OVERVIEW_COUNT=6 gha_ppp_2020_1km_Aggregated_UNadj.tif ghana_population_2020_3857_cog.tif
   ```
2. Step 2: the file must be readable without keys (public download), and the bucket's CORS rules must allow GET and HEAD with the `Range` header from your GeoSight address.
3. Step 3: context layer type **Raster COG**, URL of the file in your bucket, band values 0 to 500.

## Credits

- Population: WorldPop (www.worldpop.org), Ghana 2020, 1 km, UN adjusted, CC BY 4.0.
