# Odirico Website

This repository contains the public-facing Odirico website.

## Primary pages

- `index.html` - Odirico master brand homepage
- `expertise.html` - Odirico Consulting services page
- `products.html` - Odirico OS product page
- `capability.html` - capability statement and business model summary
- `about.html` - brand and firm structure
- `contact.html` - consulting, demo, and capability intake
- `sectors.html` - target markets and buyer focus
- `styles.css`
- `script.js`
- `assets/`

## Cloudflare Pages settings

- Framework preset: `None`
- Build command: leave blank
- Build output directory: `.`

## Branching strategy

This repo uses feature branching.

| Branch | Purpose |
|---|---|
| `main` | Stable branch and deployment source |
| `feature/*` | New site sections or UI updates |
| `fix/*` | Bug fixes and production corrections |
| `content/*` | Copy, messaging, and content updates |
| `docs/*` | Documentation-only changes |

Create short-lived branches from `main`, open a PR, and merge back into `main` for deployment.

## Before launch

Replace the remaining placeholders across the site:

- `contact@odirico.com` if a different inbox should be used
- phone number
- any final founder bio, qualifications, or procurement identifiers
