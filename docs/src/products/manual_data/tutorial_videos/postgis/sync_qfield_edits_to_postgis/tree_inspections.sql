-- Dummy demo data for the GSH tutorial 'Sync QField edits to your PostGIS database'. Fictitious trees.

DROP TABLE IF EXISTS public.tree_inspections;

CREATE TABLE public.tree_inspections (
    id          serial PRIMARY KEY,
    tree_id     text NOT NULL UNIQUE,
    species     text NOT NULL,
    condition   text NOT NULL CHECK (condition IN ('Good','Fair','Poor')),
    last_check  date NOT NULL,
    notes       text,
    geom        geometry(Point,4326) NOT NULL
);

INSERT INTO public.tree_inspections (tree_id, species, condition, last_check, notes, geom) VALUES
    ('T-01', 'Oak (Quercus robur)',                 'Good', DATE '2026-09-14', NULL,              ST_SetSRID(ST_MakePoint(18.415755, -33.932252), 4326)),
    ('T-02', 'Plane (Platanus × acerifolia)',       'Good', DATE '2026-09-21', NULL,              ST_SetSRID(ST_MakePoint(18.416663, -33.932223), 4326)),
    ('T-03', 'Jacaranda (Jacaranda mimosifolia)',   'Fair', DATE '2026-10-02', 'Minor deadwood',  ST_SetSRID(ST_MakePoint(18.417189, -33.93105), 4326)),
    ('T-04', 'Camphor (Cinnamomum camphora)',       'Fair', DATE '2026-10-07', NULL,              ST_SetSRID(ST_MakePoint(18.41796, -33.930292), 4326)),
    ('T-05', 'Stone pine (Pinus pinea)',            'Good', DATE '2026-10-19', NULL,              ST_SetSRID(ST_MakePoint(18.417983, -33.932453), 4326));

CREATE INDEX tree_inspections_geom_idx ON public.tree_inspections USING GIST (geom);

