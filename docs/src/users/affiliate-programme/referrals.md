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

# Referrals & Attribution

The platform attributes a new customer to a partner through three signals, in this order of precedence:

1. An **active referral code** entered at signup.
2. A **referral cookie** set by an earlier click on a referral link, valid for **90 days**.
3. A signup that comes from a partner-owned **embedded widget**.

If none of these match, the customer is unattributed and no partner commission accrues.

## Referral Codes

A referral code is a short string (typically 6–12 characters, your initials + a memorable suffix). It's the single most reliable attribution signal.

### Creating a Code

From <span class="ui-page-label">Referrals → Codes</span> click <span class="ui-generic-label">New code</span>:

- **Code text** — what the customer types. Letters and digits only; case-insensitive.
- **Channel** — which of your registered channels this code is for. Helps you measure which channel produces sign-ups.
- **Notes** _(optional)_ — for your reference; not shown to customers.

<div class="image-with-caption">
  <img src="../img/referrals-new-code.png" alt="New referral code modal opened from the Referrals page.">
</div>

Codes are issued **per channel**. A new code requires an active channel to be selected — see the [issuance gate](#per-channel-issuance-gate).

<br>

### Customer-Facing URL

When you create a code the dashboard shows a ready-to-share URL of the form:

```
https://geospatialhosting.com/r/<your-code>
```

The customer clicks the link, the platform records the click, sets the 90-day cookie, and forwards to the standard product / checkout flow. At checkout the code is pre-filled — the customer can change or remove it but rarely does.

<br>

### Per-Channel Issuance Gate

Codes are only issued for channels you registered during application (or added later via <span class="ui-page-label">Profile → Channels</span>). This is to prevent attribution-leakage through ad-hoc codes that bypass your declared distribution.

If you want a code for a new channel, add the channel first.

<br>

### Revoking a Code

From the codes list click <span class="ui-generic-label">Revoke</span> on the row. Revocation:

- Disables future redemptions of the code.
- Does **not** affect already-attributed customers — they remain on your pipeline.
- Cannot be undone — create a new code if you change your mind.

<br>

## Click-Capture Cookie

When a customer clicks a referral link the platform sets a first-party cookie on `geospatialhosting.com` with:

- The referral code that brought them.
- A timestamp.

The cookie is valid for **90 days**. Any signup within that window from the same browser is attributed to the partner.

Some customers don't sign up immediately — they sign up days or weeks later after talking to colleagues, doing a procurement review, or shopping around. The cookie covers that gap. If the customer signs up after the 90-day window, attribution falls back to whatever signal is present at signup (code or widget) or none.

<br>

## Embedded Widget

The widget is a small JavaScript snippet you embed on your own website (or blog post / landing page) that:

- Shows the GSH product offering in your site's chrome.
- Carries your referral code automatically — so clicks into the checkout are tagged without the customer needing to enter anything.

### Generating the Snippet

From <span class="ui-page-label">Referrals → Embed</span>:

1. Choose a code from the dropdown (only your active codes appear).
2. Choose a product to feature (or "All products").
3. Copy the JS snippet to your clipboard.

Paste it into your site's HTML. The snippet renders a Kartoza-branded card with a call-to-action button.

<!-- TODO: screenshot of Embed snippet generator -->

The snippet is a single `<script>` tag plus a `<div data-gsh-widget>` placeholder. No tracking pixels, no third-party iframes — the widget renders client-side from a CDN bundle.

<br>

## Privacy

Customers see a privacy disclosure during checkout explaining:

- That their purchase will be attributed to the partner named on the referral code.
- That you (the partner) will see the customer name and product in your Pipeline.
- That you will **not** see their address, billing details, or usage data.

Customers can opt out of attribution from their account settings. If they do, you keep the commission that has already accrued, but no new accruals are recorded.

<br>

## Attribution Disputes

If a customer claims they signed up because of you but isn't showing on your Pipeline:

1. Check whether they used your code (most common cause: forgot, or it was suggested without a click-through).
2. Check the timestamp on their signup — if it was after the 90-day cookie window, attribution can't be applied retroactively.
3. If you believe attribution was incorrectly missed, raise a **Pipeline dispute** from the Pipeline page → row → <span class="ui-generic-label">Dispute attribution</span>. Programme Manager reviews within 5 business days; outcome is recorded against the customer.

<br>

## See Also

- [Partner Dashboard](dashboard.md) — where the codes and widget live.
- [Commissions](commissions.md) — what accrues from each attributed customer.
