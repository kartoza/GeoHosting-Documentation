-- PostGIS view public.report_stats: one row per region, counted live from community_reports (edited in G3W).
-- Published as a layer in the G3W project; GeoSight reads it as GeoJSON (WFS).
CREATE OR REPLACE VIEW public.report_stats AS
SELECT r.ucode AS region_ucode, r.name AS region,
  count(c.id)::int AS reports,
  (count(c.id) FILTER (WHERE c.status <> 'Resolved'))::int AS open_reports,
  max(c.report_date) AS last_report,
  ST_PointOnSurface(r.geom)::geometry(Point,4326) AS geom
FROM public.ghana_regions r
LEFT JOIN public.community_reports c ON ST_Contains(r.geom, c.geom)
GROUP BY r.ucode, r.name, r.geom
ORDER BY reports DESC, r.ucode;
