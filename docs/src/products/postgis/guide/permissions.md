---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2025-10-01
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2025, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# Managing Users & Permissions

pgAdmin includes its own user and role system, which controls **access to the pgAdmin interface**, not the PostgreSQL database itself. This allows administrators to determine who can log in to pgAdmin and what tools or actions they are allowed to use. Roles group sets of permissions, making it simple to apply consistent access controls across multiple users.

<br>

## Accessing the User Management tab

User and permission administration is done in the <span class="ui-page-label">User Management</span> tab, opened by clicking the <span class="ui-generic-label">User</span> button in the upper-right corner of pgAdmin and selecting <span class="ui-generic-label">User Management</span> from the dropdown menu.

<br>

The panel is organized into three sub-tabs, each focused on a different aspect of access control:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Sub-Tab</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Users</td>
      <td>Manage pgAdmin accounts (create, edit, deactivate, unlock, or remove users).</td>
    </tr>
    <tr>
      <td>Roles</td>
      <td>Define and organize role groups used to control access to pgAdmin features.</td>
    </tr>
    <tr>
      <td>Permissions</td>
      <td>Assign capabilities to roles, determining what users with those roles can do.</td>
    </tr>
  </tbody>
</table>

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-19.png" alt="User Management tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Creating Roles

Roles group permissions so that access can be managed efficiently. Instead of configuring privileges for each user individually, roles make it easy to apply shared access levels, such as standard *user* or full *administrator*.

<br>

To create a new role, open the <span class="ui-page-label">Roles</span> sub-tab and select <span class="ui-generic-label">Create Role... (+)</span>. You’ll be prompted to supply the following fields:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>A unique label that identifies the role.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>A short explanation of the role’s purpose.</td>
    </tr>
  </tbody>
</table>

<br>

Once saved, the role becomes available for assignment to users and configuration in the **Permissions** tab.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-20.png" alt="Roles Sub-tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Assigning Permissions

Role permissions define what features users with that role can access, such as query tools, configuration menus, or administrative functions.

In the <span class="ui-page-label">Permissions</span> sub-tab, select a role to view and adjust its permissions. Each item can be toggled on or off to grant or revoke access. Changes take effect immediately and apply to every user assigned to that role.

This role-based approach helps maintain clarity, consistency, and security across multi-user pgAdmin environments.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-21.png" alt="Permissions Sub-tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Adding Users

Users represent individual people who log into pgAdmin. Their email address acts as their username, and each user must belong to at least one role. Users assigned the Administrator role have permission to manage pgAdmin accounts and settings.

<br>

From the <span class="ui-page-label">Users</span> sub-tab, select <span class="ui-generic-label">Create User... (+)</span> to add a new account. The key fields include:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Email</td>
      <td>The login identifier for the user (mandatory).</td>
    </tr>
    <tr>
      <td>Role</td>
      <td>Assign the user as either an <strong>Administrator</strong> or <strong>User</strong>.</td>
    </tr>
    <tr>
      <td>Active</td>
      <td>Enable or disable the account without removing it.</td>
    </tr>
    <tr>
      <td>New Password / Confirm Password</td>
      <td>Sets the login password.</td>
    </tr>
    <tr>
      <td>Locked</td>
      <td>Indicates whether the user is locked from failed login attempts; can be reset by an admin.</td>
    </tr>
  </tbody>
</table>

<br>

This interface can also be used to change a user’s role, update their password, or deactivate the account while keeping it available for later use.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-22.png" alt="User Sub-tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

---

**Next up:** A quick glossary of key terms used in this guide.

<br>
