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

# QGIS Cloud Desktop

## What is QGIS Cloud Desktop?

**QGIS Cloud Desktop** provides a complete Linux desktop environment running in the cloud and accessible directly through your web browser.

Instead of installing and maintaining QGIS and other GIS software on every computer, users can launch their own cloud-based desktop session whenever they need it. The desktop includes QGIS and can also provide access to other applications and tools required for geospatial workflows.

Each user's desktop has a **persistent home folder**, allowing files and settings to remain available between sessions. Organisations can also connect users to PostgreSQL/PostGIS databases, making it possible to work with centrally managed spatial data directly from QGIS.

<br>

<div class="image-with-caption">
  <img src="./img/qgis-cloud-img-1.png" alt="QGIS Cloud Desktop Logo" style="width: 15%;">
</div>

<br>

## Key Capabilities

- **Full QGIS Desktop in the Browser**

    Run QGIS Desktop in the cloud without installing it locally. Access your desktop through a web browser.

- **Persistent User Storage**

    Store projects, datasets, scripts, settings, and other files in a persistent home folder that remains available between sessions.

- **Cloud-Based Computing**

    Run GIS processing and other workloads on cloud infrastructure instead of relying entirely on your local computer.

- **PostgreSQL & PostGIS Integration**

    Connect QGIS Cloud Desktop to PostgreSQL/PostGIS databases with automatically configured connection settings.

- **Multiple Users**

    Organisations can create multiple End Users and provide each person with their own QGIS Cloud Desktop environment.

- **Flexible Machine Sizes**

    Choose an appropriate machine tier for each user based on the computing resources required for their GIS workflows.

- **Browser-Based Access**

    Access your cloud desktop from a modern web browser without needing to install a remote desktop client.

- **Pre-configured GIS Environments**

    Select from available desktop images to provide users with an environment configured for specific workflows.

<br>

## How QGIS Cloud Desktop Works

QGIS Cloud Desktop separates the management of users and cloud resources from the desktop environment itself.

An **Organisation Owner** manages users and access through the GeoSpatialHosting dashboard. They can create End Users, assign QGIS Cloud Desktop access, select the machine size and storage capacity, and provide access to registered PostgreSQL databases.

An **End User** then signs in to the QGIS Cloud Desktop Portal, launches a desktop session, and opens their cloud-based Linux desktop in their browser.

<br>

<div class="image-with-caption">
  <img src="./img/qgis-cloud-img-2.png" alt="QGIS Cloud Hierarchy" style="width: 40%;">
</div>

<br>

## Typical Workflows

QGIS Cloud Desktop can support a range of GIS workflows, including:

- Creating and editing QGIS projects
- Processing and analysing spatial data
- Working with PostgreSQL/PostGIS datasets
- Running GIS scripts and other desktop applications
- Using specialised pre-configured GIS environments

<br>

The service is particularly useful when users need a consistent GIS environment that can be centrally managed and accessed from different computers.

<br>

## Getting Started & Resources

If you are an **Organisation Owner**, start by creating an End User and granting them access to QGIS Cloud Desktop.

If you are an **End User**, your organisation will provide you with an enrolment link and access to the QGIS Cloud Desktop Portal.

<br>

Use the guides and resources below to get started:

<div class="cards-grid">
  <div class="card">
    <div class="card-header">
      🚀 <a href="./guide/create_instance/">Creating Your Instance</a>
    </div>
    <div class="card-body">
      Set up a QGIS Cloud Desktop environment and configure its resources.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      🔐 <a href="./guide/first_login/">First Log In & Setting Your Password</a>
    </div>
    <div class="card-body">
      Register your access, sign in, and prepare your first cloud desktop session.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      🗺️ <a href="./guide/quickstart/">Quickstart: 5-Minute Tutorial</a>
    </div>
    <div class="card-body">
      Launch your first QGIS Cloud Desktop session and start working in QGIS.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      🎫 <a href="https://geospatialhosting.com/#/dashboard/support">Create a Support Ticket</a>
    </div>
    <div class="card-body">
      Create a support ticket from the GeoSpatialHosting dashboard.
    </div>
  </div>
</div>

<br>
