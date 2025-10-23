# Postgis

![Quick Steps](img/postgis-image-1.png)

On the instance page detail, you can see 2 component:
1. PostGIS: It is postgis component and link to access it
2. PGAdmin: Link to the UI to access database


### PGAdmin

For pgadmin, you can use your email as username and get password on the instance detail page.
You will be created database **kartoza_postgis**, as you can play and add data using this database.

![Quick Steps](img/postgis-image-2.png)

### Create layer


Open the tree:
kartoza_postgis -> Schemas -> public -> Tables

And right click -> Create -> Table

You can see below

![Quick Steps](img/postgis-image-3.png)

Now we try to create simple layer with geometry

1. Create with below config

![Quick Steps](img/postgis-image-4.png)

2. Create field with id, name and geometry

![Quick Steps](img/postgis-image-5.png)

3. After created

![Quick Steps](img/postgis-image-6.png)

Now we need to make our geometry field as geometry point

Open query tools
![Quick Steps](img/postgis-image-7.png)

Then paste and execute this

```postgresql
ALTER TABLE town
ALTER COLUMN geometry TYPE geometry(Point, 4326)
USING ST_SetSRID(geometry, 4326);
```

It will change our geometry type to geometry point with SRID 4326


### How to open the database on qgis

1. Add PostgreSQL Layer

![Quick Steps](img/qgis-image-1.png)
![Quick Steps](img/qgis-image-2.png)
2. For host, you can copy the link in (1)
3. And for password, you can click "Get password" (2)
4. Then fill the connection and authenticatione like below

Make sure ssl mode is require

![Quick Steps](img/qgis-image-3.png)
![Quick Steps](img/qgis-image-4.png)

5. Click connect and it will show your layer

![Quick Steps](img/qgis-image-5.png)

6. After that just select the layer (by clicking it) (1) and click add (2)
It will being added to qgis

![Quick Steps](img/qgis-image-6.png)

### Adding feature

![Quick Steps](img/qgis-image-7.png)

To add a feature, activate Editing by clicking (1) and click "Add point feature" (2)

Then click anywhere in map and it will open the form

Just fill the form and click "OK"

![Quick Steps](img/qgis-image-8.png)

After you have add enough point, just inactive editing by clicking "Toggle Editing"

![Quick Steps](img/qgis-image-9.png)

And save

![Quick Steps](img/qgis-image-10.png)

It will save the last feature


Now we want to check on pgadmin
Go back to pgadmin
And click "All rows"

![Quick Steps](img/qgis-image-11.png)

After executed, we can see the feature that we added before

![Quick Steps](img/qgis-image-12.png)