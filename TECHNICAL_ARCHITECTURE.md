# MEHFIL — Technical Architecture & Design System Specification

## 1. Architectural Overview

MEHFIL is engineered with a strict separation between **Brand Configuration**, **Typed Domain Data**, **Service Abstractions**, and **Presentation Views**:

```text
mehfil-dining/
├── public/
│   ├── _redirects               # Cloudflare Pages SPA routing rule
│   ├── robots.txt               # Concept-appropriate crawler configuration
│   ├── sitemap.xml              # Clean canonical route index
│   └── assets/                  # 17 optimized WebP brand & photography assets
├── src/
│   ├── config/
│   │   └── brand.ts             # Official tokens, color hexes, asset paths, disclosures
│   ├── types/
│   │   └── models.ts            # TypeScript interfaces for Venues, Menu, Reservations, Leads
│   ├── data/                    # Centralized venue, menu (BDT), and package datasets
│   ├── services/
│   │   ├── reservationService.ts   # Table request service (Demo -> Cloudflare D1 ready)
│   │   └── eventInquiryService.ts  # 9-stage event lead qualification service
│   └── utils/
│       └── validation.ts        # BDT formatting & future-date validation helpers
└── functions/
    └── api/
        └── inquiries.ts         # Cloudflare Pages Function edge handler blueprint
```

## 2. Design Tokens — "The Modern Mehfil"

| Token Name | HEX | Role in the MEHFIL System |
| :--- | :--- | :--- |
| **Royal Garnet** | `#632640` | Brand anchor, hero overlays, navigation bar, luxury backgrounds, footer |
| **Jewel Teal** | `#08766E` | Restaurant sections, menu header, venue cards, interactive states |
| **Marigold Gold** | `#E7AD5A` | Logo detailing, primary CTA buttons, ornamental arch dividers, active indicators |
| **Royal Cobalt** | `#244C91` | Venue explorer header, contrasting editorial blocks |
| **Rose Coral** | `#E58B91` | Private celebrations, romantic storytelling accents |
| **Soft Peach** | `#F4D8C5` | High-contrast warm neutral form surfaces, secondary body copy |
| **Deep Ink** | `#211C25` | High-legibility dark surfaces and body text on light cards |
| **Warm White** | `#FFF9F3` | Primary display typography on jewel-toned backgrounds |

## 3. Performance & Accessibility Engineering

- **Zero External API Blocking on First Paint:** The homepage hero and all core data render immediately without waiting on cold-start servers or external database calls.
- **Optimized WebP Photography:** All 17 conceptual architectural, culinary, and celebration photographs are compressed to responsive WebP assets with `loading="lazy"` on below-the-fold imagery.
- **WCAG Contrast & Reduced Motion:** High-contrast Warm White (`#FFF9F3`) and Marigold Gold (`#E7AD5A`) on Deep Garnet/Teal/Ink surfaces, keyboard-navigable Lightbox (`Escape`, `ArrowLeft`, `ArrowRight`), visible focus outlines, and `@media (prefers-reduced-motion: reduce)` support.
