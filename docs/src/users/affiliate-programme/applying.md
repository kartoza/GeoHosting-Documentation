---
title: Documentation
summary: GeoSpatialHosting Controller
  - Tim Sutton
date: 2026-06-18
some_url: https://github.com/kartoza/GeoHosting.git
copyright: Copyright 2024-2026, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: GSHDocs2026
---

# Applying to the Affiliate Programme

Application is a single short form at `https://geospatialhosting.com/#/affiliate-apply`. Two tracks share the form — **Reseller** and **Certified Trainer** — with one extra block (Components) that appears only when you pick Trainer. The form takes about ten minutes; the auto-screener replies in seconds.

This page walks each section of the form in the order it appears, then explains the decision panel you see after submission.

<div class="image-with-caption">
  <img src="../img/apply-landing.png" alt="The /affiliate-apply landing page — heading, Choose-your-track card, and the start of the Your-details form.">
</div>

## Before You Start

You'll need:

- The two-letter ISO 3166-1 alpha-2 country code for your tax jurisdiction.
- The legally-signing person's name (yourself, for individuals; the authorised signatory for organisations).
- _(Optional)_ Tax / VAT identifiers — `eu_vat`, `sars_id`, etc.
- The URLs for the channels you'll use to introduce GSH (newsletter, podcast, website, community forum, regional consulting practice, etc.) — see [Section 3](#section-3--distribution-channels).
- _(Trainer track only)_ A link per certification component to evidence of your competence — a portfolio page, an LMS completion URL, a recorded session, a published syllabus, etc.

You'll be asked to read three documents before submitting (partner agreement, code of conduct, brand-fit guidelines). They open in modals from the form — no separate downloads.

<br>

## Section 1 — Choose Your Track

The top card on the page, **Choose your track**, has two options:

| Track | Who it's for | What changes downstream |
| --- | --- | --- |
| **Reseller** | You recommend / resell GSH-hosted products. | Standard form, no extra sections. |
| **Certified Trainer** | You deliver Kartoza-certified training on GSH products. Trainers can also resell. | An extra **Components** block appears in the form. Per-component review is added to the screening flow. |

Click the card that fits. The form below adjusts immediately — you can switch tracks before submitting at no cost.

<div class="image-with-caption">
  <img src="../img/apply-tracks.png" alt="Choose-your-track card with the two options: Reseller and Certified Trainer.">
</div>

<br>

## Section 2 — Your Details

The **Your details** card holds the fields the platform needs to identify you and route payouts. Two required fields in a two-column layout:

| Field | What to enter | Notes |
| --- | --- | --- |
| **Country (ISO 3166-1 alpha-2)** | Two letters, e.g. `ZA`, `GB`, `KE`, `DE`. | Auto-uppercased. Determines tax handling and which currency catalogues apply. |
| **Signatory name** | The person legally signing on behalf of the partner. | For individuals: you. For organisations: your authorised signatory. |

Below that, one optional field:

| Field | What to enter | Notes |
| --- | --- | --- |
| **Tax identifiers** | Comma-separated `key=value` pairs, e.g. `eu_vat=GB123, sars_id=...`. | Optional at submission time — you can fill them in later from the partner portal under <span class="ui-page-label">Profile → Tax & bank</span>. Required before your first payout. |

<div class="image-with-caption">
  <img src="../img/apply-details.png" alt="Your details card with country, signatory name, and tax identifiers filled in.">
</div>

<br>

## Section 3 — Distribution Channels

The **Distribution channels** block is an add/remove list — one row per channel you'll use to introduce GSH to prospective customers. Add a row per place you intend to use a referral code.

| Field | Required? | What to enter |
| --- | --- | --- |
| **Name** | Recommended | A short identifier (e.g. "Acme Newsletter"). |
| **URL** | Recommended | The public URL of the channel (e.g. `https://acme.example/newsletter`). |
| **Audience size** | Optional | Numeric. Helps the Programme Manager calibrate the screening review. |
| **Description** | Recommended | One sentence on who the audience is and what they're interested in. |

Use <span class="ui-generic-label">+ Add channel</span> to add another row, and <span class="ui-generic-label">Remove channel</span> to drop one. The first row is empty by default — if you leave it entirely blank, the submission treats it as "no channels declared" rather than as a placeholder row.

### Why this matters

Referral-code issuance is **gated** on declared channels. When you (later) want to create a referral code targeted at a specific channel, the platform checks the channel exists in your application. Declaring channels here is the same as registering them — there is no separate step.

You can add channels later from the partner portal under <span class="ui-page-label">Profile → Channels</span>; the new ones go through a quick screening review before they unlock fresh referral codes.

<div class="image-with-caption">
  <img src="../img/apply-channels.png" alt="Distribution channels block with two channel rows: an Acme GIS Newsletter and a GeoSpatial Podcast.">
</div>

<br>

## Section 4 — Pitch

Two short free-text answers. Both are **optional** but applications without context take longer to screen.

| Field | What to write | Max |
| --- | --- | --- |
| **Why partner with Kartoza?** | Two or three sentences. What draws you to GSH; what unique value do you bring? | 4000 chars |
| **How will you introduce GSH products to your audience?** | Two or three sentences. Be concrete — a planned post, a workshop, a slot in your monthly newsletter, a launch campaign. | 4000 chars |

The text fields use `<textarea>` widgets with a 3-row default — they expand as you type.

<div class="image-with-caption">
  <img src="../img/apply-pitch.png" alt="Pitch block with both free-text answers filled in.">
</div>

<br>

## Section 5 — Components _(Trainer track only)_

This section only appears if you picked **Certified Trainer** in Section 1.

The **Components you're applying to certify in** block lists each certification component the platform currently offers. For each component:

1. Tick the checkbox if you want to be certified for that component.
2. An evidence text input appears below the ticked component.
3. Paste a link to your evidence — portfolio page, LMS completion URL, recorded session, course syllabus, etc.

You can tick as many components as apply. Components are reviewed **independently** — being approved for one doesn't depend on being approved for another. See [Training Delivery](training.md) for the per-component lifecycle.

> **Fast-track note.** If you've completed Kartoza's "QGIS for trainers" course, your evidence can simply be the LMS completion URL — that triggers the fast-track path and waives the verification interview for the QGIS-related components.

<div class="image-with-caption">
  <img src="../img/apply-components.png" alt="Trainer-only Components block with QGIS and PostGIS ticked, plus an evidence URL entered for the QGIS row.">
</div>

<br>

## Section 6 — Read & Accept

Three required checkboxes at the bottom of the form. All three must be ticked before the **Submit application** button enables:

| Acceptance | What you're agreeing to | How to read it |
| --- | --- | --- |
| **Partner agreement** | The commercial terms — commission rates, payout cycle, termination clauses. The current published version is shown in the link label, e.g. `(v2.1)`. | Click the link; opens in a modal over the form. |
| **Code of conduct** | Programme-wide behavioural rules. See [Code of Conduct & Appeals](code-of-conduct.md). | Click the link; opens in a modal. |
| **Brand-fit declaration** | A self-declaration that your channels do not violate the GSH brand-fit guidelines (no adult content, no hate speech, no fly-by-night marketing, etc.). | Click the link to read the full guidelines. |

> **If a document is missing**, you'll see a warning banner above the checkboxes and the relevant checkbox is disabled. The team is auto-notified — check back shortly.

<br>

## Section 7 — Submit

Click <span class="ui-generic-label">Submit application</span> in the bottom-right of the card. The platform:

1. Validates your form input.
2. Strips empty channel rows from the channels list (so a placeholder row doesn't pollute the data).
3. Records a **CoCAcceptance** entry for the version of the documents you accepted.
4. Runs the auto-screener:
    - Checks your country against the restricted-jurisdiction list.
    - Cross-references against any prior-terminated partner records.
    - For trainers, parses each component evidence link for an LMS fast-track marker.
5. Creates your `Affiliate` row with the resulting screening status, persisting your channels, partner_motivation, and intro_plan onto it.
6. (On clean auto-screening) Generates your default `ReferralCode` and returns it in the response.

The form is replaced in-place by a **decision panel** with the outcome.

<br>

## The Decision Panel

The decision panel shows one of three outcomes:

### Approved

You're in. The panel shows:

- A success banner with your `Affiliate.status = active`.
- Your **default referral code** with a copy-to-clipboard button — usable immediately.
- A "Go to partner dashboard" button taking you to `/#/partner`.

A welcome email arrives within a few minutes with a first-login link to the partner portal.

### Flagged for Manual Review

Auto-screening hit something a human needs to look at — not a rejection, just a queue. The panel shows:

- The list of flag reasons (e.g. _"Country not on auto-approve list"_, _"Trainer evidence link could not be parsed"_).
- An indicative SLA: 1–3 business days for Reseller, 3–10 for Trainer (per-component review).
- A note that you'll receive an email when the decision is made.

Your `Affiliate.status` is `screening`. You can sign in to the partner portal but earnings don't accrue yet.

### Rejected

Auto-screening hit a blocking signal (e.g. restricted jurisdiction, a prior termination on file). The panel shows:

- The reason for rejection.
- The cooling-off period before you can re-apply (per policy; 12 months by default).
- A "Contact Programme Manager" link if you believe the rejection is in error.

<div class="image-with-caption">
  <img src="../img/apply-decision-approved.png" alt="Decision panel in the Approved state, showing the auto-issued referral code and a Go-to-partner-dashboard button.">
</div>

<br>

## After Approval — First Sign-In

The welcome email links to `https://geospatialhosting.com/partner/first-login?token=…` (single-use, expires in 7 days). First sign-in walks you through:

1. **Passkey registration** — same flow as End User passkey enrolment (see [First Log In](../../products/qgis-cloud-desktop/guide/first_login.md)).
2. **Re-acceptance** if a newer version of the partner agreement or CoC has been published since your application was submitted.
3. **Profile completion** — payout method and bank/payment details. Required before your first payout but you can defer them on first sign-in.

Then you land on the [Partner Dashboard](dashboard.md).

<br>

## Adding the Trainer Tier Later

If you applied as a **Reseller** and want to add Trainer certification afterwards, from the partner portal go to <span class="ui-page-label">Profile → Tiers</span> and click <span class="ui-generic-label">Add Trainer tier</span>. You'll complete only the Trainer-specific sections (components + evidence) — you don't redo the country / signatory / acceptances.

Per-component review applies the same as for first-time Trainer applicants.

<br>

## See Also

- [Partner Dashboard](dashboard.md) — what you'll see after sign-in.
- [Referrals & Attribution](referrals.md) — how channels declared here drive referral-code issuance.
- [Training Delivery](training.md) — per-component certification lifecycle.
- [Code of Conduct](code-of-conduct.md) — the rules you accepted.
- [Commissions](commissions.md) — what you'll earn.
