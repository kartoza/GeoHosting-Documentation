---
title: Documentation
summary: GeoSpatialHosting Controller
  - Tim Sutton
date: 2026-06-17
some_url: https://github.com/kartoza/GeoHosting.git
copyright: Copyright 2024-2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: GSHDocs2026
---

# Creating Your Instance

Setting up QGIS Cloud Desktop is a one-time activity for the organisation administrator. Once the organisation has a subscription, individual End Users just sign in — they don't repeat the order step.

## Who Does This

The **organisation administrator** (the person whose name will appear on the invoice). End Users don't see this flow — they only see the sign-in page their administrator sends them.

<br>

## Checkout

1. From [geospatialhosting.com](https://geospatialhosting.com) open <span class="ui-generic-label">Products</span> and select <span class="ui-page-label">QGIS Cloud Desktop</span>.
2. Choose the deployment size that matches your largest concurrent workload, and the region (EU or Africa).
3. Click <span class="ui-generic-label">Order</span>.
4. On the <span class="ui-page-label">Checkout</span> page:
    - Give the instance a name your team will recognise (this becomes the URL slug, e.g. `acme-gis.geospatialhosting.com`).
    - Choose **Individual** or **Company / Organisation**. A Company purchase puts the organisation on the invoice and lets you assign multiple End Users.
    - Provide billing contact, VAT / tax details, and payment method.
    - Review the [Terms of Service](https://geospatialhosting.com/terms) and tick the acceptance box.
5. Submit the order.

<!-- TODO: screenshot of QGIS Cloud Desktop checkout page -->

After payment is captured the platform provisions your instance automatically — typically a few minutes. You'll receive an email with:

- The sign-in URL for your instance.
- A first-login link for the organisation administrator (single-use, expires in 7 days).
- A reference to this guide.

<br>

## First Sign-In as the Administrator

The administrator follows the first-login link in the email. You'll be asked to:

1. Confirm your name and contact details.
2. Register a passkey for sign-in — see [First Log In & Setting Your Passkey](first_login.md).
3. Land on the **End User dashboard** for your own account.

Once you're signed in you can invite teammates as End Users from <span class="ui-page-label">Organisation → Users</span> — covered in [Managing Users & Permissions](permissions.md).

<br>

## What's Next

- [First Log In & Setting Your Passkey](first_login.md) — what every user sees on first sign-in.
- [Quickstart](quickstart.md) — from "I have an account" to "I'm working in QGIS" in five minutes.
- [Managing Users & Permissions](permissions.md) — invite the rest of your team.

<br>

!!! tip "Test with a small tier first"
    You can change machine tier at any time without rebuilding the instance. If you're unsure how heavy your workload is, start with a smaller tier and switch up when you hit a limit — the persistent home directory is preserved across tier changes.
