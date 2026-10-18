# LegacyMoto

A reference-led motorcycle gear landing page built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui (Base UI). Designed for Philippine riders with a full-width off-white canvas, oversized Outfit typography, generous editorial spacing, and original transparent ImageGen photography.

## Run locally

Use Node.js 20.9 or newer and pnpm 11.

```sh
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

```sh
pnpm typecheck
pnpm lint
pnpm test:seo
pnpm build
pnpm start
```

Typography uses Outfit throughout the page: Bold (700) for the hero, large headings, wordmark, and editorial display text; SemiBold (600) for medium headings and product titles; and Regular/Medium (400/500) for body copy, navigation, controls, and FAQ text. Hero tracking is -0.04em, large headings use -0.02em, and medium headings use normal tracking. The Google Fonts variable family is loaded and self-hosted by `next/font`. Initial development compilation and production builds need network access to download the font; visitors receive local font files.

## Content and design

- `src/lib/content.ts`: brands, categories, seven real catalog products, source links, FAQs, and optional PHP price formatting.
- `src/components/landing.tsx`: hero, brands, categories, selection, editorial, guide, closing CTA, and footer.
- `src/components/header.tsx`: sticky navigation and accessible mobile Sheet.
- `src/app/globals.css`: design tokens, editorial compositions, responsive layouts, focus states, and reduced-motion support.
- `src/app/layout.tsx`: page metadata and social sharing configuration.

Navigation and CTAs use local section anchors. The mobile menu and FAQs use shadcn components. This release has no cart, checkout, accounts, backend, email capture, or external tracking.

## Image assets

The live product catalog is based on brand and supplier photography: Spyder Corsa Plain V2, Gille FF012 Circuit Racer, NHK GP R Tech Street Mandalika, MT Stinger 2 Solid, Spyder Phantom jacket, Spyder Barrel gloves, and SCS S8-X intercom. The two hero helmets use the Spyder and Gille products. Source URLs, models, and original filenames are recorded in `assets/catalog-sources.json`; untouched supplier files remain in `public/images/catalog/originals/`.

The built-in ImageGen tool removes the product-photo backgrounds to produce actual transparent PNG assets in `public/images/catalog/cutouts/`. The edit prompts preserve the referenced product designs and physical branding, remove outside promotional artwork, and request genuine alpha transparency. These are AI-processed derivatives of the supplier photos. `assets/catalog-cutout-prompts.json` records the final prompt set, and `assets/catalog-alpha-report.json` records transparency validation. Optimized alpha-preserving WebPs live in `public/images/catalog/`. The page does not use CSS clipping or blend modes to imitate cutouts. SCS is labeled with its actual brand and sourced from Team Spyder's catalog.

Rebuild catalog derivatives with `pnpm assets:catalog`. Their separate `src/lib/catalog-manifest.json` is preserved when regenerating older ImageGen assets.

The original design exploration generated 15 assets with **built-in ImageGen**. Its helmet and gear concepts are no longer used on the page; the two lifestyle rider compositions remain illustrative generated artwork. The editorial rider now uses `editorial-rider-v3`: a downward extension showing the complete front wheel and both boots. Its `editorial-rider-v3-framed.webp` derivative trims unused transparent margins before containing the complete subject inside the rounded portrait. Section proportions scale with the editorial content width. Its original PNG and prompt are included in `public/images/originals/` and `assets/image-prompts.json`. The earlier assets and prompts remain as design history. No API key is required to use the completed site.

- Original PNGs: `public/images/originals/`.
- Optimized transparent WebPs: `public/images/`.
- Exact final prompt set and asset filenames: `assets/image-prompts.json`.
- Image dimensions and application paths: `src/lib/asset-manifest.json`.
- Locally composed social image: `public/social-preview.png`.

Original set: `hero-rider`, `helmet-spyder`, `helmet-gille`, `helmet-mt`, `helmet-nhk`, `riding-jacket`, `riding-gloves`, `intercom`, and `editorial-rider`. Reference revision: `hero-rider-v2`, `editorial-rider-v2`, `helmet-orange-v2`, `helmet-yellow-v2`, `helmet-blue-v2`, and `helmet-navy-v2`. The revision prompts are also recorded in `assets/reference-v2-prompts.json`.

To rebuild WebP derivatives, the dimension manifest, and the social preview from the included originals:

```sh
pnpm assets:prepare
```

This script uses the Sharp dependency shipped with Next.js and preserves alpha transparency. It does not generate new AI images or call an API.

The brand names are supplied business content. Product cards use real model names and AI-processed supplier photographs. The owner confirmed SRP pricing, but exact amounts and stock have not been supplied, so cards show “Ask for SRP” and link to LegacyMoto on Facebook. No supplier price or stock status is represented as LegacyMoto's own. Confirm the exact stocked variants before launch; no certification, delivery, or review claims have been added.

## Deployment preparation

The page can run on a standard Next.js host. Set `NEXT_PUBLIC_SITE_URL` to the final **HTTPS origin before building**. Canonical URLs, Open Graph metadata, JSON-LD, robots, and the sitemap use this one setting. The landing page allows crawling and indexing; the sitemap contains its single canonical homepage URL. `.env.example` shows the localhost development default, which must be replaced before public deployment. No deployment has been configured or performed.

## Search and business content

`src/lib/site.ts` contains the shared wholesale/retail description, SRP policy, lowest-price guarantee, Facebook URL, contact details and hours, origin configuration, Cebu search metadata, and WholesaleStore/WebSite/WebPage JSON-LD. The owner confirmed wholesale activity, SRP pricing and the lowest-price guarantee on 18 October 2026. `src/app/robots.ts` and `src/app/sitemap.ts` generate the crawler files. The hero, wholesale section, ten FAQs, About and Facebook links share the same business identity. All body copy is at least 16px, with supporting text and controls at least 14px. After a production build, run `node scripts/check-seo.mjs --rendered` to check actual generated HTML as well as metadata/entity consistency.

The catalog is not marked up with Product/Offer records because exact product SRPs and stock have not been supplied. Shop details were read from the official Facebook page on 17 October 2026 and appear beside the About section with that checked-on date. WholesaleStore is a Store/LocalBusiness subtype; its structured data matches the visible details. The lowest-price guarantee is owner-confirmed; its applicable terms must be confirmed with the store before ordering. No automatic price-match or refund mechanics have been invented. No reviews, ratings, Google FAQ rich results, or guaranteed AI citations are claimed.

See [the SEO/GEO audit](docs/seo-geo-audit.md) for measured Lighthouse scores, the GEO readiness checklist, completed checks, and the remaining public-launch requirements.

## Visual checks

Check at 320, 390, 768, and 1440 CSS pixels: headline wrapping, floating cutouts, horizontal overflow, image visibility, product labels, and readable layouts. Test section navigation, menu focus containment and Escape dismissal, FAQ activation with Enter/Space, and reduced-motion preferences.

The page fills the viewport width without an outer mockup frame. The desktop hero uses a grid with separate areas for the two-line MOTO / HELMETS headline, two branded helmets, full motorcycle, and supporting copy. The motorcycle uses contain sizing with no negative bottom offsets. Smaller screens use a readable stacked composition and may scroll vertically rather than crop the image. The editorial rider uses a tall rectangle with fixed rounded corners. Major sections and product columns have generous spacing. The prior responsive review and historical viewport captures are in `docs/hero-responsive/`.

Text groups reveal once as they enter the viewport: 12–22px slide-ups, 480–620ms easing and up to 165ms of stagger. The hero keeps its existing line reveal. `TextMotion` adds one small client-side observer while the page content remains server-rendered and visible without JavaScript. It also observes newly inserted menu and showcase content. Focused controls remain fully visible, and changing the reduced-motion preference cancels active reveals. There is no full-screen brand intro. Navigation underlines, link arrows and product cutouts have restrained hover transitions. The helmet showcase supports previous/next buttons and horizontal touch swipes; vertical scrolling remains available. Motion and smooth scrolling are disabled for reduced-motion preferences.
