-- GeoServer SQL view water:water_stats (store water_db). One row per region:
-- all water points inside the region, the ones that need repair, and their share in percent.
SELECT r.ucode AS region_ucode, r.name AS region,
  count(w.id) AS total_points,
  count(w.id) FILTER (WHERE w.status = 'Needs repair') AS needs_repair,
  round(100.0 * count(w.id) FILTER (WHERE w.status = 'Needs repair')
    / nullif(count(w.id), 0), 1)::float AS pct_needs_repair,
  ST_PointOnSurface(r.geom) AS geom
FROM ghana_regions r
LEFT JOIN water_points w ON ST_Contains(r.geom, w.geom)
GROUP BY r.ucode, r.name, r.geom
ORDER BY pct_needs_repair DESC
