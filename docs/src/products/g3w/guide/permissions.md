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

# Managing Users & Permissions

G3W-SUITE provides a hierarchical structure for organizing WebGIS services and managing user access with fine-grained control. This model supports flexible, role-based permissions aligned to both thematic and administrative needs.

<br>

WebGIS services are structured across two functional levels:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Level</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Macro Groups</td>
      <td>Top-level containers, managed by <strong>Editor1</strong> users.</td>
    </tr>
    <tr>
      <td>Groups</td>
      <td>Sub-level containers within Macro Groups, managed by <strong>Editor2</strong> users or <strong>Admins</strong>.</td>
    </tr>
  </tbody>
</table>

<br>

This two-tier system supports the delegation of responsibilities by assigning user roles based on administrative level and required permissions. The available user roles are:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Role</th>
      <th>Permissions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Admin1</td>
      <td>Full system access, including Django administration and core suite configuration.</td>
    </tr>
    <tr>
      <td>Admin2</td>
      <td>Comprehensive control over the suite, excluding access to the Django admin panel.</td>
    </tr>
    <tr>
      <td>Editor1</td>
      <td>Responsible for one or more MacroGroups. Can manage users and groups, publish services, define access policies, and enable modules within their domain</td>
    </tr>
    <tr>
      <td>Editor2</td>
      <td>Manages one or more Cartographic Groups. Can publish and update services, configure access rules, and activate modules within their assigned groups.</td>
    </tr>
    <tr>
      <td>Viewer</td>
      <td>Can access authenticated WebGIS services and interact with available functional modules as permitted.</td>
    </tr>
    <tr>
      <td>Anonymous</td>
      <td>Has unrestricted access to public services or modules without needing to log in.</td>
    </tr>
  </tbody>
</table>

<br>

**Admin** users have full access to all File Manager contents, while **Editor1** users have access restricted to their dedicated folder within project_data, matching their username. This ensures autonomous management of geographical data relevant to their Macro Group.

<br>

G3W-SUITE can be configured according to one of two organizational models:

1. **Single Level (No Macro Groups)**

    Admins manage Cartographic Groups directly and assign Editor2 users where necessary. Editor2 users oversee services and access controls within their specific groups.

    <br>

2. **Two Levels (With Macro Groups)**

    Admins create MacroGroups, each managed independently by an Editor1 user. These users control all aspects of their MacroGroup, including content and user management.

    <br>

## Adding Users

To create a new user, go to the <span class="ui-page-label">Users</span> tab and click the <span class="ui-generic-label">Add User</span> button. This opens the <span class="ui-page-label">System Users</span> page, where you can define the following user details:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Category</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Personal Info</td>
      <td>First name, last name, email</td>
    </tr>
    <tr>
      <td>Login Credentials</td>
      <td>Username and password</td>
    </tr>
    <tr>
      <td>Backend Access</td>
      <td>Access to the administration interface (if applicable)</td>
    </tr>
    <tr>
      <td>Roles & Permissions</td>
      <td>Admin, Editor1, Editor2, Viewer</td>
    </tr>
    <tr>
      <td>Group Memberships</td>
      <td>Editor and Viewer groups</td>
    </tr>
    <tr>
      <td>Additional Profile Data</td>
      <td>Department, profile image</td>
    </tr>
  </tbody>
</table>

<br>

Once all required fields are filled in, click <span class="ui-generic-label">Save</span> to add the user to the system.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-7-1.png" alt="Add User">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Viewing Users

To browse existing users, click the <span class="ui-generic-label">Users List</span> button under the <span class="ui-page-label">Users</span> tab. The list displays key user information, including:

- Username and assigned role(s)
- Group memberships
- Associated MacroGroups (for Editor1 users)
- Account status (active/inactive)
- Superuser or staff privileges
- Account creation details

<br>

You can edit or delete users using the <span class="ui-generic-label">Action Icons</span> located alongside each user entry.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-7-2.png" alt="View User">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Creating User Groups

User groups streamline access management by organizing users with similar roles. You can create, edit, or remove groups, and assign users accordingly.

There are two types of user groups:

- **Editor Groups:** Contain only Editor2 users.
- **Viewer Groups:** Contain only Viewer users.

<br>

To create a group, click the <span class="ui-generic-label">Add group users</span> button in the <span class="ui-page-label">Users</span> tab. You’ll be prompted to specify:

- Group name
- Group type
- Users to include

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-7-3.png" alt="User Groups">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to extend G3W functionality using integrated tools.

<br>
