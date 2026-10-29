# Cloudflare Pages Deployment Guide — `mehfil-website`

## 1. Target Hosting Specification

- **Platform:** Cloudflare Pages (GitHub-connected static + edge functions hosting)
- **Proposed Project Name:** `mehfil-website`
- **Proposed Domain:** `mehfil-website.pages.dev` (subject to availability)
- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Node.js Version:** `20.x` (set `NODE_VERSION = 20` in Cloudflare Pages Environment Variables)

## 2. Client-Side Routing & Direct Refresh Compatibility

To ensure every route (`/dining`, `/menu`, `/reservations`, `/private-events`, `/venues`, `/venues/emerald-room`, `/plan-your-event`, `/admin`, etc.) works on direct browser refresh after deployment:
1. `public/_redirects` is included in the repository and copied automatically into `dist/_redirects` during `npm run build`:
   ```text
   /*    /index.html   200
   ```
2. In addition, the interactive application supports hash-based deep linking (`#/plan-your-event`, `#/venues/grand-mehfil-hall`) so it works identically in both static preview sandboxes and edge-hosted production environments.

## 3. Future Backend Integration with Cloudflare D1 & Pages Functions

When transitioning from the public Invenio portfolio demonstration to a live commercial venue:
1. Create a Cloudflare D1 database:
   ```bash
   npx wrangler d1 create mehfil-hospitality-db
   ```
2. Bind `MEHFIL_DB` in `wrangler.toml`:
   ```toml
   name = "mehfil-dining"
   pages_build_output_dir = "dist"

   [[d1_databases]]
   binding = "MEHFIL_DB"
   database_name = "mehfil-hospitality-db"
   database_id = "<YOUR_D1_DATABASE_ID>"
   ```
3. Protect `/admin` routes using **Cloudflare Zero Trust Access** and server-side JWT validation inside `functions/api/admin/`.
