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

# G3W Overview

## Why Choose this Product?

G3W-SUITE is a modular, client-server application built on Django and Python that embeds QGIS Desktop and Server under the hood, so you get the full power of QGIS in a simple, fast, autonomous web publish-and-manage solution.

**Benefits at a glance**
- **Native QGIS integration:** Publish your QGIS projects directly as OGC services without any extra conversion steps.  
- **Open-source stack:** Based entirely on QGIS, Django, Python and OGC standards—no lock-in, no licensing fees.  
- **Flexible theming & access control:** Organise services into themes, manage users/groups via ACLs, and expose only the modules you need.  
- **Built-in editing & search:** Online spatial editing, custom search methods, and extensibility through functional modules.  

## What Size Should I Buy?

G3W-SUITE’s modular architecture lets you pick exactly the components you need:

1. **G3W-ADMIN** (Administration & REST API + OGC proxy + ACL)  
2. **G3W-CLIENT** (Cartographic web client for viewing & interacting with services)  
3. **Front-End Geographic Portal** (Public portal to browse thematic groups and services)  

**Sizing your install**
- **Small/simple** → just G3W-ADMIN + G3W-CLIENT  
- **Medium/managed** → add the Front-End Portal for branded public access  
- **Large/enterprise** → deploy all three modules behind a load-balancer for high-availability
