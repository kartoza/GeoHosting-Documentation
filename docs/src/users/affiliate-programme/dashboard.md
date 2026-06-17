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

# Partner Dashboard

After sign-in you land on the Partner Dashboard at `/#/partner`. This page describes every panel — what it shows, when to look at it, and how to act on it.

<!-- TODO: screenshot of full Partner Dashboard -->

## Sidebar Navigation

| Item | Goes to |
| --- | --- |
| <span class="ui-page-label">Overview</span> | The home view (this page). |
| <span class="ui-page-label">Referrals</span> | Your referral codes + embed snippet generator. |
| <span class="ui-page-label">Pipeline</span> | Customers attributed to you, with their subscription status. |
| <span class="ui-page-label">Earnings</span> | Accrued commission per customer per month. |
| <span class="ui-page-label">Statements</span> | Monthly statements + payout history. |
| <span class="ui-page-label">Training</span> | Courses you're certified for and delivery history. _(Trainers only)_ |
| <span class="ui-page-label">Cohorts</span> | Open and historical co-marketed cohort requests. _(Trainers only)_ |
| <span class="ui-page-label">Assets</span> | Logos, screenshots, slide templates, brochure copy. |
| <span class="ui-page-label">Community ↗</span> | Opens the partner community space in a new tab. _(If enabled by Kartoza.)_ |
| <span class="ui-page-label">Profile</span> | Account, passkeys, tax / bank details. |

<br>

## Overview Cards

### Status

Top-left card: your overall programme status. One of:

- **Active** — earnings accrue normally.
- **Warning issued** — a CoC warning is on file. Earnings continue but you should review and clear.
- **Suspended** — earnings paused pending resolution.

If a status above "Active" is shown, the card links to the [Code of Conduct](code-of-conduct.md) and shows an <span class="ui-generic-label">Appeal</span> button if applicable — see [Code of Conduct & Appeals](code-of-conduct.md).

<br>

### This Month So Far

Snapshot of the current statement period:

- Accrued commission this month, by currency.
- Number of new attributed customers.
- Number of churned attributed customers.

The numbers refresh nightly.

<br>

### Last Statement

The most recent monthly statement, with:

- Total amount paid.
- Date paid.
- Link to the [Statements](#statements) page.

<br>

### Quick Actions

A small cluster of buttons for common actions:

- <span class="ui-generic-label">New referral code</span> — opens the code creation modal.
- <span class="ui-generic-label">Copy embed snippet</span> — copies the JS snippet to your clipboard.
- <span class="ui-generic-label">Download W9 / tax form</span> — only if you've set a US tax jurisdiction.

<br>

## Referrals

The Referrals page lets you create and manage referral codes, plus generate the embed widget. Covered in [Referrals & Attribution](referrals.md).

<br>

## Pipeline

A list of customers attributed to you. Columns:

- Customer name (anonymised initially — see [privacy notes](referrals.md#privacy)).
- Product they subscribed to.
- Subscription start date.
- Status — `Active`, `Past due`, `Churned`, `Disputed`.

Click a row for a detail panel — historical events, commission accruals for that customer, and any disputes.

<br>

## Earnings

A month-by-month breakdown of accrued commission per customer per product. Useful for reconciling against your own books.

You can filter by:

- Product.
- Currency.
- Status of accrual (`Accrued`, `Cleared`, `Reversed` via clawback).
- Date range.

Click any accrual for the source event (the underlying invoice, payment, or training delivery that triggered it).

<br>

## Statements

The monthly statement is generated on the **3rd of each month** for the prior month's earnings. Each statement shows:

- Per-customer per-product accruals.
- Reversals / clawbacks.
- Total payable amount in your payout currency.
- Tax / VAT line if applicable.

You'll receive an email when a new statement is published. PDF copies are kept indefinitely.

<br>

### Payouts

Once a statement is approved by Kartoza Finance you'll see the payout date and reference. Default payout cycle: **the 15th of the month** (or next business day) for the prior month's statement.

<br>

## Training _(Certified Trainers only)_

Shows the certification components you're approved for, plus your training-delivery history. Covered in [Training](training.md).

<br>

## Cohorts _(Certified Trainers only)_

Open, approved, and rejected co-marketed cohort proposals. Submit new proposals from this page. Covered in [Training](training.md).

<br>

## Assets

The marketing assets library. Browse by:

- Product (logo, screenshots, brochure copy per product).
- Asset type (slide template, social-media graphic, brochure PDF).
- Language.

Each asset has a usage licence note — most are CC-BY for partner use, some are partner-portal-only and not for republication.

<br>

## Profile

Your account settings, passkeys, tax details, and bank / payout method. Same passkey flow as End Users — see [Managing your passkeys](../../products/qgis-cloud-desktop/manual/passkeys.md).

<br>

## See Also

- [Referrals & Attribution](referrals.md) — referral codes and the embed widget.
- [Commissions](commissions.md) — accrual rules and the payout cycle.
- [Code of Conduct](code-of-conduct.md) — the rules.
