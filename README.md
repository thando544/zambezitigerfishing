# Zambezi Tiger Adventures & Mwenje Guest House

Production-ready marketing site for a Victoria Falls fishing operation and guest house, built so real Supabase data can be connected without rewriting the UI.

## Stack

React, TypeScript, Vite, Tailwind CSS, React Router, Lucide, Supabase client.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

```bash
npm run build
npm run lint
```

## Environment

Copy `.env.example`. Never put a Supabase service-role key in frontend code.

- `VITE_SITE_URL` — canonical origin for SEO
- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` — public client only
- `VITE_CONTACT_EMAIL` / `VITE_CONTACT_PHONE` / `VITE_WHATSAPP_NUMBER`

Until Supabase is connected, the public site still renders from `src/data`. Enquiries will ask the guest to WhatsApp or email instead of pretending a booking was saved.

## Hero video

Place client files here when they exist. The homepage does not break if they are missing.

- `public/media/hero-desktop.mp4`
- `public/media/hero-mobile.mp4`
- `public/media/hero-poster.webp`

## Mwenje photography

Client originals live in `public/images/mwenje/`. The SVG placeholders have been removed.

## Supabase

Run `supabase/migrations/001_init.sql` in the project SQL editor. The CMS lives at `/admin` as a frontend shell: Dashboard, Bookings, Experiences, Rooms, Availability, Fishing Reports, Gallery, Reviews, Blog, FAQs, Site Settings.

## Content rules

Rates, reviews, exact distances, awards, guide names and unverified room extras are omitted until the client supplies them. The enquiry form creates an enquiry (`NEW`); it does not confirm a booking.
