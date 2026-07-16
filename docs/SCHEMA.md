# Supabase Schema (planned)

This document is a planning reference for the Supabase schema. No migrations have been created yet — this describes the intended shape of each table before `supabase migration new` is run.

## `enquiries`

Captures leads from the website contact form, WhatsApp click-throughs, and referrals.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `name` | `text` | |
| `phone` | `text` | |
| `email` | `text` | Nullable |
| `event_date` | `date` | Nullable |
| `venue` | `text` | Nullable |
| `event_type` | `text` | `wedding` / `corporate` / `temple` / `reception` |
| `message` | `text` | Nullable |
| `source` | `text` | `website` / `whatsapp` / `referral` |
| `created_at` | `timestamptz` | |

## `gallery_items`

Bilingual gallery entries shown on `/gallery`.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `title` | `text` | |
| `title_ta` | `text` | |
| `description` | `text` | Nullable |
| `description_ta` | `text` | Nullable |
| `event_type` | `text` | |
| `year` | `int` | |
| `image_url` | `text` | |
| `sort_order` | `int` | |
| `is_featured` | `boolean` | |
| `created_at` | `timestamptz` | |

## `case_studies`

Detailed write-ups shown on `/case-studies` and `/case-studies/[slug]`.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `slug` | `text` | Unique |
| `title` | `text` | |
| `title_ta` | `text` | |
| `client_type` | `text` | `B2C` / `B2B` / `B2G` |
| `location` | `text` | |
| `guest_count` | `int` | Nullable |
| `timeline_days` | `int` | Nullable |
| `brief` | `text` | |
| `brief_ta` | `text` | |
| `what_we_did` | `text` | |
| `what_we_did_ta` | `text` | |
| `result` | `text` | |
| `result_ta` | `text` | |
| `hero_image_url` | `text` | |
| `gallery_urls` | `text[]` | |
| `published` | `boolean` | |
| `created_at` | `timestamptz` | |

## `clients` (future — Anniversary System)

Stores past couples for the planned anniversary reminder/outreach feature.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `couple_name` | `text` | |
| `whatsapp_number` | `text` | |
| `wedding_date` | `date` | |
| `event_id` | `text` | Nullable |
| `photo_url` | `text` | Nullable |
| `anniversary_opt_in` | `boolean` | Default `true` |
| `created_at` | `timestamptz` | |
