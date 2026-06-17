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

# QGIS Cloud Desktop Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>My passkey prompt doesn't appear when I click "Sign in"</summary>
  <div class="faq-answer">
    Your browser may have lost the passkey association. Check that you're on the correct instance URL (the one you registered against — passkeys are per-domain).
    <br><br>
    <strong>Fix:</strong> Try a synced passkey via iCloud Keychain / Google Password Manager / 1Password if you have one. Or sign in from the device you originally registered the passkey on, then add a passkey on the new device from <span class="ui-page-label">Profile → Passkeys</span>.
  </div>
</details>

<details class="faq-item">
  <summary>Clicking "Open QGIS Desktop ↗" does nothing</summary>
  <div class="faq-answer">
    Most often a pop-up blocker. Browsers block tab opens that aren't user-initiated; the click should count but extensions can interfere.
    <br><br>
    <strong>Fix:</strong> Allow pop-ups for your instance domain in your browser, then click again. Refresh the dashboard if the button stays inert.
  </div>
</details>

<details class="faq-item">
  <summary>Session shows "Provisioning" for more than a minute</summary>
  <div class="faq-answer">
    Region capacity occasionally lags. The provisioning step typically completes in 5–20 seconds.
    <br><br>
    <strong>Fix:</strong> Wait up to 2 minutes. If still provisioning after that, refresh the dashboard. If it returns to "Idle" with no error, click <span class="ui-page-label">Open QGIS Desktop ↗</span> again. If the second attempt also stalls, log a support ticket — capacity may be saturated for your tier.
  </div>
</details>

<details class="faq-item">
  <summary>QGIS feels sluggish or runs out of memory</summary>
  <div class="faq-answer">
    You're under-provisioned for the workload.
    <br><br>
    <strong>Fix:</strong> Switch to a larger machine tier. From the dashboard Machine Tier card, pick the next tier up and click <span class="ui-generic-label">Apply</span>. End your current session and start a new one — your home directory comes with you.
  </div>
</details>

<details class="faq-item">
  <summary>"Quota exceeded" when saving a file</summary>
  <div class="faq-answer">
    Your persistent home directory has hit its storage limit.
    <br><br>
    <strong>Fix:</strong> Either free space (delete old datasets, move large files to /tmp/ for export) or request a quota increase from the dashboard Storage card. Administrators can also pre-emptively raise quotas from <span class="ui-page-label">Organisation → Users</span>.
  </div>
</details>

<details class="faq-item">
  <summary>Network drops mid-session — what happens?</summary>
  <div class="faq-answer">
    The session keeps running. kasmVNC reconnects automatically when the network returns, usually within a few seconds. Unsaved QGIS work is preserved.
    <br><br>
    <strong>If reconnect fails after a minute:</strong> close the tab and reopen the dashboard. Your active session resumes with its windows and unsaved edits intact.
  </div>
</details>

<details class="faq-item">
  <summary>I closed the tab without ending the session — am I being billed?</summary>
  <div class="faq-answer">
    Yes, until the session is suspended.
    <br><br>
    <strong>Behaviour:</strong> closing the tab is treated as <em>idle</em>. After the idle timeout (default 30 min) the session is suspended (no billing). To stop billing immediately, end the session explicitly from the dashboard.
  </div>
</details>

<details class="faq-item">
  <summary>I lost the only device with my passkey on it</summary>
  <div class="faq-answer">
    Your Organisation administrator can issue a one-time recovery link.
    <br><br>
    <strong>Fix:</strong> Contact your administrator. The link is single-use, expires in 24 hours, and lets you register a fresh passkey from a new device. Don't reuse recovery — register two passkeys after recovery so this can't happen again.
  </div>
</details>

<br>

## Still Stuck?

Log a support ticket from the [Support Center](../../users/support_center.md). Include:

- Your instance URL.
- The exact time and your timezone.
- A screenshot of the error if you have one.
- A note of anything you tried first.

Kartoza staff have read-only access to the activity log to help triage.

<br>

## Status and Maintenance

Planned maintenance windows are announced via email to the billing contact at least 7 days in advance. Unplanned incidents are posted at [status.geospatialhosting.com](https://status.geospatialhosting.com).
