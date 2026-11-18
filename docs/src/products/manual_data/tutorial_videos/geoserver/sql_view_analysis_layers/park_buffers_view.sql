-- SQL statement for the GeoServer SQL view 'park_buffers'.
-- Paste everything below this comment into GeoServer: Layers > Add a new layer >
-- (your PostGIS store) > Configure new SQL view... > SQL statement.
-- %distance% is the view parameter (default 200, validation regex ^[\d]+$).
SELECT id, name, status,
  ROUND((ST_Area(geom::geography)
    / 10000)::numeric, 2) AS area_ha,
  %distance% AS distance_m,
  ST_Multi(ST_Buffer(geom::geography,
    %distance%)::geometry) AS geom
FROM public.community_parks
