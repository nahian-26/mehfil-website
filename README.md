# MEHFIL — Dining & Occasions | The Art of Gathering

**An Invenio Original Hospitality Portfolio Experience (Gulshan, Dhaka, Bangladesh)**

> **Concept Disclosure:** MEHFIL is a fictional luxury dining and private events destination conceptualized by Invenio. Venue information, menu items, imagery, pricing in Bangladeshi Taka (৳), and booking journeys are designed strictly for demonstration and portfolio showcase purposes. No real reservations are placed and no payment processors are connected.

---

## 1. Executive Summary

MEHFIL (`Meh-fil` · মাহফিল) is a contemporary luxury restaurant and private events destination conceived for Gulshan, Dhaka. Conceived and engineered by Invenio, the project demonstrates how bespoke design and architecture elevate a digital hospitality experience:

- **Architectural Color Storytelling ("The Modern Mehfil"):** Deep Garnet (`#351522`), Royal Garnet (`#632640`), Midnight Garnet (`#241219`), Deep Jewel Teal (`#07544F`), Antique Gold (`#C69B60`), Porcelain (`#F3ECE3`), and Warm White (`#FFF9F4`).
- **Two Distinct Yet Unified Customer Journeys:**
  1. **MEHFIL Dining:** Contemporary international cuisine shaped by South Asian fire, digital menu in BDT (`৳`) with live category/dietary/search filtering, and a 6-step Table Reservation request experience.
  2. **MEHFIL Occasions:** Private events landing experience, Interactive Venue Explorer across 4 distinct spaces, and the signature **9-Stage "Plan Your Occasion" Interactive Event Planner**.
- **Invenio Case Study Admin Dashboard (`/admin`):** Development-ready operational lead management interface demonstrating how table requests and BDT-qualified event leads progress through pipeline stages (`New`, `Contacted`, `Proposal Sent`, `Tentative`, `Confirmed`, `Closed`), with client-side session persistence.

---

## 2. Complete Route Map & Feature Inventory

| Route | View Name | Classification | Core Capabilities |
| :--- | :--- | :--- | :--- |
| `/` | Homepage | Fully functional | 12-section layout, hero reservation/planner CTAs, brand story, split dining/occasions bridge, signature dishes, venue highlights, interactive occasion teaser, filterable gallery with lightbox, and luxury footer. |
| `/dining` | Dining Philosophy | Fully functional | Culinary philosophy, 7 curated dining occasions, botanical bar & Kashmiri kahwa presentation. |
| `/menu` | Full Digital Menu | Fully functional | 6 categories, live search, vegetarian toggle filter, price display in BDT (`৳`), interactive dish details modal. |
| `/reservations` | Dining Concierge | Frontend Simulation (Persistent) | 6-step request journey (Date, Party size 1–12, Service & demo slot, Seating preference, Guest details, Prepared summary with Reference ID & clipboard copy). |
| `/private-events` | Private Celebrations | Fully functional | 5 celebration categories, 3 package tiers, and direct integration into the 9-stage planner. |
| `/venues` | Venue Explorer | Fully functional | Guest capacity slider, occasion filter, seating setup switcher (`Banquet`, `Imperial`, `Cocktail`, `Presentation`), and venue comparison matrix. |
| `/venues/main-dining-room` | The Main Dining Room | Fully functional | 80-guest capacity, arched alcoves, banquette seating, floor plan specifications, and booking link. |
| `/venues/emerald-room` | The Emerald Room | Fully functional | 35-guest capacity, acoustic boiserie, 4K screen presentation support, and bespoke dining layout. |
| `/venues/grand-mehfil-hall` | The Grand Mehfil Hall | Fully functional | 180-guest capacity, ceremonial stage alcove, bridal suite, architectural lighting presets. |
| `/venues/the-terrace` | The Terrace | Fully functional | 60-guest capacity, open-air pergola, twilight lounge, botanical mocktail bar. |
| `/plan-your-event` | 9-Stage Occasion Planner | Frontend Simulation (Persistent) | Guided celebration planner (Occasion, Date & Time, Guests, Venue matching, Dining format, Add-on services, Budget range, Review dossier, Host details & simulated submission). |
| `/event-packages` | Celebration Packages | Fully functional | `The Intimate Gathering`, `The Signature Occasion`, `The Grand Mehfil` package breakdowns with direct pre-selection into planner. |
| `/gallery` | Visual Archive | Fully functional | Filterable masonry gallery (`Spaces`, `Dining`, `Occasions`, `Craft`) with keyboard-accessible Lightbox (`Escape`, `ArrowLeft`, `ArrowRight`). |
| `/our-story` | Brand & Heritage | Fully functional | Narrative of a *mehfil*, design system palette swatches with hex tokens, architectural M monogram & logo variations. |
| `/contact` | Enclave Location | Fully functional | Gulshan, Dhaka context, demonstration hours, interactive demo message form with instant feedback toast. |
| `/privacy` | Concept Disclosure | Fully functional | Invenio portfolio concept statement and zero-external-transmission data policy. |
| `/admin` | Case Study Dashboard | Frontend Simulation (Persistent) | Operational KPI cards, event inquiries tab, restaurant requests tab, status dropdown updates, and "Reset Demo Data" capability. |
| `/*` | 404 Fallback | Fully functional | Architectural branded 404 screen with recovery navigation links. |

---

## 3. Technical Architecture

- **Build System:** Vite 5.4 + TypeScript 5.6
- **CSS Architecture:** Tailwind CSS 3.4 compiled statically via PostCSS into `public/assets/style.css` (34 KB minified, ~7 KB gzip). No runtime Play CDN overhead.
- **Routing Engine:** Dual HTML5 History API (`pushState` + `popstate`) and Hash fallback (`#/route`) ensuring flawless deep linking, browser back/forward navigation, and instant direct refresh compatibility.
- **SPA Fallback:** Cloudflare Pages `public/_redirects` (`/*  /index.html  200`).
- **Data & State Management:** In-memory `APP_STATE` synchronized with `localStorage` for cross-refresh persistence of demo reservations, occasion dossiers, and lead status updates.
- **Cloudflare Isolation:** Fully decoupled from Invenio's existing production Workers, D1 databases, R2 buckets, and domains.

---

## 4. Local Development & Production Build

### Prerequisites
- Node.js 18+ (tested on Node v20 / v24)
- npm 9+

### Commands
```bash
# Install dependencies
npm install

# Compile Tailwind and start local development server
npm run dev

# Production build (compiles CSS, typechecks TS, and bundles static assets to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Deployment Guide (Cloudflare Pages)

MEHFIL is designed for zero-cost ($0/month), zero-configuration static edge deployment on Cloudflare Pages.

1. **Project Name:** `mehfil-website`
2. **Build Command:** `npm run build`
3. **Build Output Directory:** `dist`
4. **Environment Variables:** `NODE_VERSION = 20`
5. **Direct Refresh Configuration:** Handled automatically via `dist/_redirects`.

---

## 6. Future Expansion Roadmap

When transitioning from an Invenio demonstration showcase to a live commercial hospitality property:
1. **Cloudflare D1 Database:** Bind `MEHFIL_DB` to `functions/api/` for persistent reservation and inquiry records.
2. **Authentication:** Protect `/admin` via Cloudflare Zero Trust Access or OAuth2 edge session tokens.
3. **Transactional Email:** Integrate Cloudflare Workers with Resend or SendGrid for real-time guest booking receipts and manager alerts.
4. **Custom Domain:** Connect custom domain (e.g. `mehfil.com.bd`) with Cloudflare SSL and edge DDoS caching.
