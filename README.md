# Grace Cathedral Church — Nairobi, Kenya 🇰🇪

> **Welcome Home. You Are Not Alone.**

A beautiful, warm and welcoming church website built with **Next.js 14 (App Router)** and **Tailwind CSS**, inspired by the design language of [lakewoodchurch.com](https://www.lakewoodchurch.com/) — deep royal purple `#4B0082`, gold `#FFD700` and white, with Playfair Display headings and Lato body text.

---

## ✨ Features

| Area | What's included |
| --- | --- |
| **Topbar** | Service times + phone & WhatsApp contact links |
| **Navbar** | Cross logo, 7 links, sticky with shadow on scroll, scroll-spy active states, animated mobile drawer |
| **Hero** | Full-screen parallax church interior, purple gradient overlay, word-by-word animated headline, Watch Live 🎥 + Plan Your Visit CTAs, service-times strip |
| **Welcome** | Pastor's welcome with circular portrait, signature graphic (Great Vibes script) and ministry stats |
| **Service Times** | 4 cards — Sunday 8:00 AM & 10:30 AM, Wednesday Bible Study 6:00 PM, Friday Youth 5:30 PM — each with icon, time and location |
| **Sermons** | Latest 3 sermons (title, pastor, date, series, scripture, thumbnail, Watch/Listen) fetched from `/api/sermons` with skeleton loading + static fallback |
| **Events** | Timeline layout with gold-ringed date badges and Register buttons (WhatsApp deep-links), fetched from `/api/events` |
| **Giving** | 2 Corinthians 9:7 scripture, tap-to-copy M-Pesa Paybill card, "Give Online" modal with M-Pesa steps + bank details, gold CTA |
| **Gallery** | 12-image masonry grid (photos + branded scripture tiles) with a full keyboard-navigable lightbox |
| **Ministries** | Youth, Women, Men, Children, Worship, Outreach cards with icons and WhatsApp "join" links |
| **Contact** | Validated form (Name/Email/Phone/Message + honeypot) posting to `/api/contact` (Nodemailer), info cards and a Google Maps embed of Nairobi |
| **Footer** | Quick links, service times, social icons, newsletter signup → `/api/newsletter` |
| **WhatsApp widget** | Floating gold button, purple pulse animation, "Talk to our Team 🙏" tooltip |
| **Mobile** | Hamburger drawer + sticky bottom bar: Call · WhatsApp · Directions · Give |
| **SEO** | Church-focused meta tags, Open Graph image for sermon sharing, JSON-LD `Church` schema, `sitemap.xml`, `robots.txt`, web manifest |
| **Analytics** | Google Analytics 4 (gtag) — activates when the env var is set |
| **Performance** | Lazy-loaded images, preloaded hero, optimized AVIF/WebP via `next/image`, immutable image caching |

## 🔧 API Routes (Next.js Route Handlers)

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/contact` | `POST` | Contact form handler — validates, honeypot-protects and emails via **Nodemailer** (falls back to logging when SMTP is not configured) |
| `/api/events` | `GET` | Upcoming events from [`data/events.json`](data/events.json), filtered against today's date (EAT), `?all=true` to include past |
| `/api/sermons` | `GET` | Latest sermons from [`data/sermons.json`](data/sermons.json), `?limit=N` (default 3) |
| `/api/newsletter` | `POST` | Saves subscriber emails to **Vercel KV / Upstash Redis** (REST) or a local JSON file fallback |

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## ⚙️ Environment Variables

Copy `.env.example` → `.env.local`. **Everything is optional** — the site runs without any configuration.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # canonical URL for SEO
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX     # Google Analytics 4

SMTP_HOST=smtp.example.com                     # contact form email
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=your-password
CONTACT_TO_EMAIL=office@gracecathedral.co.ke

UPSTASH_REDIS_REST_URL=                       # newsletter storage (Vercel KV)
UPSTASH_REDIS_REST_TOKEN=
```

## ▲ Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build config needed (`vercel.json` sets security headers, image caching and rewrites such as `/sermons.json → /api/sermons`; the same rewrites are mirrored in `next.config.mjs` so they also work locally).
4. Add the environment variables above (Project → Settings → Environment Variables).
5. Deploy 🎉

For serverless newsletter storage, create a free **Vercel KV** (Upstash) database and copy its `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`.

## ✏️ Editing Content

- **Sermons** — edit [`data/sermons.json`](data/sermons.json). Drop thumbnails into `public/images/sermons/`. Every sermon supports `youtube` and `audio` links.
- **Events** — edit [`data/events.json`](data/events.json). Past events are filtered out automatically by date.
- **Church details** — phone, WhatsApp number, address, M-Pesa Paybill, bank details, social links, pastor's name: all in [`lib/site.js`](lib/site.js).
- **Images** — replace files in `public/images/` (keep the same names, or update paths).
  The 7 scripture tiles in the gallery are branded placeholders — swap them for real photos anytime.
- **Colors & fonts** — the palette is defined once in [`tailwind.config.js`](tailwind.config.js) (`royal` = #4B0082 scale, `gold` = #FFD700 scale); fonts load via `next/font` in [`app/layout.jsx`](app/layout.jsx).

> **Note:** The M-Pesa Paybill (`4019876`), bank details, YouTube channel and map coordinates are **placeholders** — update them in `lib/site.js` before going live.

## 🗂 Project Structure

```
├── app/
│   ├── api/            # contact, events, sermons, newsletter route handlers
│   ├── layout.jsx      # fonts, SEO metadata, analytics
│   ├── page.jsx        # all sections + JSON-LD schema
│   ├── icon.svg        # favicon
│   ├── manifest.js     # PWA manifest
│   ├── robots.js       # robots.txt
│   └── sitemap.js      # sitemap.xml
├── components/         # Topbar, Navbar, Hero, Welcome, ServiceTimes, Sermons,
│                       # Events, Giving, Gallery, Ministries, Contact, Footer,
│                       # WhatsAppWidget, MobileBottomBar, FadeIn, Icons, …
├── data/               # sermons.json, events.json (the "CMS")
├── lib/site.js         # central site configuration
├── public/images/      # hero, pastor, sermons, gallery, og-image
├── tailwind.config.js  # purple + gold design system
└── vercel.json         # headers, rewrites, caching
```

---

Built with ❤️ and a whole lot of grace. *Soli Deo Gloria.*
