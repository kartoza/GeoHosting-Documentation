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

# First Log In & Setting Your Passkey

QGIS Cloud Desktop uses **passkeys** (FIDO2 / WebAuthn) for sign-in. There are no passwords to set, choose, or forget — and there is no password fallback. The first time you sign in you'll register at least one passkey; subsequent sign-ins use it directly.

This page walks you through that one-time registration.

## What Is a Passkey?

A passkey is a credential bound to your device (or a hardware key you carry) that signs in on your behalf without sending a shared secret to the server. The private half of the credential never leaves the device. In practice you'll see one of:

- **Platform authenticator** — Touch ID, Windows Hello, Android fingerprint, or your laptop's PIN.
- **Hardware security key** — a YubiKey or similar, plugged into a USB port or held to the phone via NFC.
- **Passkey syncing** — iCloud Keychain, 1Password, Bitwarden, or Google Password Manager syncing a passkey across your devices.

You can register **more than one** passkey on the same account — and we strongly recommend you do. See [Managing your passkeys](../manual/passkeys.md).

<br>

## What You Need

- A modern browser: Chrome 109+, Safari 16+, Firefox 122+, or Edge 109+.
- A device with a platform authenticator (fingerprint reader, face camera, or PIN), or a hardware security key (USB / NFC).
- The first-login link your administrator sent you (or `https://<your-instance>.geospatialhosting.com/`).

<br>

## Walkthrough

1. Open the first-login link from your invitation email.
2. The sign-in page asks you to register your first passkey. Click <span class="ui-generic-label">Register a passkey</span>.

    <!-- TODO: screenshot of passkey register prompt -->

3. Your browser shows the OS-level prompt — touch the fingerprint reader, look at the face camera, enter the PIN, or tap your hardware key. The prompt wording depends on your OS and browser.

4. Once the OS confirms, the platform records the passkey against your account and you're signed in. You'll see your End User dashboard.

    <!-- TODO: screenshot of End User dashboard right after first sign-in -->

5. (Strongly recommended) Open <span class="ui-page-label">Profile → Passkeys</span> and register a **second** passkey on a different device. If you lose the first device, the second one keeps you out of a lockout. See [Managing your passkeys](../manual/passkeys.md).

<br>

## Subsequent Sign-Ins

Open `https://<your-instance>.geospatialhosting.com/`, click <span class="ui-generic-label">Sign in</span>, and your browser prompts you to pick a passkey. That's the whole flow.

If you signed in recently from the same browser, your browser may even auto-fill the passkey on focus — no click required.

<br>

## If Something Goes Wrong

| Symptom | Fix |
| --- | --- |
| "No passkeys available" prompt | The browser doesn't know about a passkey for this site. Use the same device the passkey was registered on, or use a synced passkey (iCloud / Google / 1Password). |
| Passkey works but you're shown the wrong instance | Each instance is bound to its own domain. Make sure the URL bar shows `<your-instance>.geospatialhosting.com`. |
| Lost the only device with your passkey | Contact your organisation administrator — they can issue a one-time recovery link from the operator dashboard. |
| The browser says "Use a different passkey" repeatedly | The platform key you're being shown is for the wrong account. Cancel and pick a different passkey from the prompt. |

If none of these match what you see, log a support ticket from [Help](../help.md) or the [Support Center](../../../users/support_center.md).

<br>

Next: [Quickstart →](quickstart.md)
