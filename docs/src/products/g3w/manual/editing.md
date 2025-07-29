---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Editing Online

Forms and editing widgets have already been configured in the tutorial project for both the `buildings` geometric layer and the related `interventions_maintenance` attribute table.

<br>

Editing settings are defined partly in the **QGIS project** (e.g. form layout), and partly through the G3W-SUITE **Administration panel** (e.g. user permissions). The editing module supports direct edits on both geometric and attribute-only layers, as well as layers in 1:N or N:M (limited) relationships.

<br>

> **Hint:** In QGIS, the form layout and widgets for each layer’s attributes are configured under: `Layer Properties` → `Attributes Form`.

<br>

G3W-SUITE supports **multi-user editing** through a **feature locking** system.

When a user activates editing in the WebGIS interface, all features visible in the current map view become **locked** to that user. Other users will be restricted from editing these features until the original user exits editing mode.

<br>

> **Note:** Multi-user editing should **only** be enabled on layers stored in a **GeoDatabase** — not on file-based layers (e.g. shapefiles).

---

## Exercise

**Activating Editing on a WebGIS Layer**

1. In the **QGIS Project Layers** list, locate the `buildings` layer and click the **Editing Layer** icon.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-53.png" alt="QGIS Project Layers List" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

2. In the **Activation layer_editing** dialog, you can:

      - Enable or disable editing capabilities
      - Set the minimum scale for editing
      - Define which user groups are permitted to edit this layer

      <br>

3. Under **Check on uncheck to active/deactive editing layer capabilities**, check the corresponding checkbox.

      <br>

4. Fill in the following fields:

      - **Scale:** `2500`
      - **User Groups Editing Data Field:** `user`

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-54.png" alt="Activation layer_editing" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

5. Click **OK**

      <br>

Once editing is enabled, a new **Editing Layers** menu becomes available in the WebGIS side panel.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-55.png" alt="Editing Layers Menu" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

---

**Editing a WebGIS**

Once activated, editing allows modifications to both geometry and attributes of the buildings layer and its related interventions.

<br>

1. In the **QGIS Project Layers** list, click **Show Map**.

      <br>

2. In the left-hand panel, click **Editing Layers**

      <br>

3. Click the **Edit Layer** icon next to the `Buildings` layer.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-56.png" alt="Edit Layer Icon" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

4. Zoom into an open area where no buildings exist.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-57.png" alt="Open Area" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

5. In the left-hand panel, click the **Add Feature** button.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-58.png" alt="Add Feature Button" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

6. Draw a continuous shape on the basemap. Once finished, the **Editing Attributes** panel will opens.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-59.png" alt="Editing Attributes Panel" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

7. Under the **General Info** tab, fill in:

      - `Name`
      - `Type`

      <br>

8. Under the **Technical Data** tab, fill in:

      - `Year of Construction`
      - `High`

      <br>

9. At the bottom of the form, click **Insert/Edit**

      <br>

10. In the left-hand panel, click the **Save** or **Checkmark** icon.

      <br>

      <div style="text-align: center;">
       <img src="../img/g3w-img-60.png" alt="Save Icon" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
       </div>
      </div>

      <br>

Your new `Buildings` feature is now saved to the WebGIS.

<br>

<div style="text-align: center;">
  <img src="../img/g3w-img-61.png" alt="New Feature" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
  Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

> **Note:** For more details, refer to the [Editing on line](https://g3w-suite.readthedocs.io/en/latest/g3wsuite_editing.html#editing-on-line) section of the official G3W documentation.
