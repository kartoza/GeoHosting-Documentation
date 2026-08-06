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

# Managing Your Passkeys

QGIS Cloud Desktop uses passkeys (FIDO2 / WebAuthn) for sign-in — see [First Log In](../guide/first_login.md) for the introduction. This page covers managing passkeys after enrolment.

## Open the Passkey List

From the dashboard's top bar choose <span class="ui-page-label">Profile → Passkeys</span>.

You'll see each registered passkey with:

- **Name** — a label you can edit (defaults to "MacBook fingerprint" or similar based on the OS).
- **Registered** — the date it was added.
- **Last used** — the date it most recently signed you in.
- **Type** — Platform (Touch ID, Windows Hello…) or Cross-platform (hardware key).

<!-- TODO: screenshot of Passkeys list -->

<br>

## Adding a Second Passkey

Always have at least two. If you lose your only device with a passkey on it you can be locked out — recovery requires the Organisation administrator.

To add another:

1. From <span class="ui-page-label">Profile → Passkeys</span> click <span class="ui-generic-label">Add passkey</span>.
2. Pick a name that tells future-you what device it's on (e.g. "Yubikey desk drawer").
3. Your browser shows the OS-level prompt — touch the new device's authenticator.

Common combinations:

- **Daily laptop** (platform authenticator: Touch ID, Windows Hello) + **hardware key** kept in a safe place.
- **Daily laptop** + **synced passkey** via iCloud Keychain / Google Password Manager / 1Password (recovers automatically if you replace the device).
- **Two hardware keys** for the highest-security setups: primary on a keyring, backup in a safe.

<br>

## Renaming a Passkey

Click the name field on the passkey row and enter a new label. Saved as you tab away. Useful when adding a second device of the same model.

<br>

## Revoking a Passkey

If a device is lost, stolen, or sold — revoke its passkey immediately.

1. From <span class="ui-page-label">Profile → Passkeys</span> click <span class="ui-generic-label">Revoke</span> on the affected row.
2. Confirm.

Revocation is **immediate** and cannot be undone — if you re-acquire the device you'll need to register a fresh passkey on it.

> You cannot revoke your **last remaining passkey**. The UI blocks this — register a second passkey first, then revoke the old one.

<br>

## Lost Access

If you lose access to every registered passkey:

1. Contact your Organisation administrator.
2. The administrator issues a one-time recovery link from their operator dashboard. The link is single-use and expires in 24 hours.
3. Open the link from a browser you trust, register a new passkey, sign in.

The administrator's recovery action is **logged in the activity log** and visible to all administrators in the organisation — there is no covert recovery.

If you _are_ the Organisation administrator and you have no remaining passkey, log a Kartoza support ticket. Recovery requires identity verification through the billing contact on file.

<br>

## Security Notes

- Each passkey is bound to your specific instance URL — a passkey for `acme-gis.geospatialhosting.com` does not authenticate to `beta-gis.geospatialhosting.com`. This is by FIDO2 design.
- The platform never sees your biometric data — fingerprints and face scans stay on the device.
- Passkey usage is recorded in the activity log: timestamp, browser fingerprint, IP, and which key signed in. Reviewable by you under <span class="ui-page-label">Profile → Sign-in history</span>.

<br>

## See Also

- [First Log In](../guide/first_login.md) — initial enrolment.
- [Managing Users & Permissions](../guide/permissions.md) — administrator-side recovery.
