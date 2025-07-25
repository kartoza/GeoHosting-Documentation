---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Managing Users & Permissions

GeoNode offers a flexible, **role-based permission** system that gives you fine-grained control over how each resource is shared and accessed. Resources can be shared with:

- Anyone (public access)
- Registered members (all logged-in users)
- Specific users or groups

<br>

Each resource can be assigned one of the following permission levels:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Level</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>None</td>
      <td>Only the resource owner can access or modify it.</td>
    </tr>
    <tr>
      <td>View</td>
      <td>Allows others to view metadata and preview the resource.</td>
    </tr>
    <tr>
      <td>Download</td>
      <td>Grants view access along with the ability to download files or layers.</td>
    </tr>
    <tr>
      <td>Edit</td>
      <td>Enables changes to metadata, styles, attributes (for datasets), or map settings.</td>
    </tr>
    <tr>
      <td>Manage</td>
      <td>Full administrative access, including updating, deleting, changing share settings, and publishing.</td>
    </tr>
  </tbody>
</table>

<br>

## Opening the Share Panel

To manage who can access your resource, start by clicking <span class="ui-generic-label">View</span> on the resource tile. Then, from the top navigation bar within the viewer, select <span class="ui-generic-label">Resource → Share</span> to access the sharing options.

<br>

<div class="image-with-caption">
  <img src="../../img/geonode-img-20.png" alt="Share Panel">
  <div class="caption">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

<br>

## Setting Permissions

Within the <span class="ui-page-label">Share with people and groups</span> panel, you can define access levels for:

- Anyone (public access)
- Registered members (all logged-in users)

<br>

To assign roles to specific individuals or groups, click the <span class="ui-generic-label">Add Users / Groups</span> button and choose the appropriate permission level.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Example Setting</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Public:</strong> View<br>
        <strong>Members:</strong> View
      </td>
      <td>
        Anyone can see the resource. Downloads require a direct link or higher-level access.
      </td>
    </tr>
    <tr>
      <td>
        <strong>Public:</strong> None<br>
        <strong>Members:</strong> View
      </td>
      <td>
        The resource is hidden from the public but visible to all logged-in users.
      </td>
    </tr>
    <tr>
      <td>
        <strong>Group:</strong> Manage
      </td>
      <td>
        Only users in the specified group can edit, delete, or update sharing settings.
      </td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/geonode-img-21.png" alt="Share Permissions">
  <div class="caption">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

## Saving Changes

Once you've set the appropriate permissions, click <span class="ui-generic-label">Resources → Save</span> to apply and confirm your updates.

<br>

<div class="image-with-caption">
  <img src="../../img/geonode-img-22.png" alt="Save Changes">
  <div class="caption">
    Image credit: <a href="https://geonode.org/" target="_blank">GeoNode</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to connect GeoNode with a variety of powerful tools.

<br>
