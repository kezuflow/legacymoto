# Hero responsive visual review

Reviewed in the in-app browser on 17 October 2026.

## What was wrong

- At 1366 × 768, the motorcycle image extended 205px below the hero; at 1920 × 948, it extended 160px below it. The hero clipped that content.
- The absolutely positioned rider overlapped the heading at both desktop sizes.
- The former breakpoint rules changed the rider height and negative bottom offset independently of the heading and captions. A lack of horizontal overflow did not mean the composition was visually correct.

## What worked

- Outfit, the black/off-white palette, and the real branded helmet photos provide a consistent visual identity.
- The former stacked phone layout kept the motorcycle intact.
- The primary CTA and large section type are readable.

## Changes and results

- Three separate headline lines: HELMETS, &, ACCESSORIES.
- Desktop CSS grid reserves independent areas for heading, helmet photos, rider, and copy. No negative rider offsets or fixed oversized rider heights remain.
- Contain sizing keeps both motorcycle wheels visible. Shorter/smaller layouts can scroll without clipping the subject at the section boundary.
- Phone content follows a clear sequence: heading, helmet pair, motorcycle, supporting copy/CTA, category chips, riding-gear link. Tablets place the pair beside the heading and limit motorcycle width to bring the CTA into the opening screen. At 768 × 1024, the CTA bottom moved from 1111px to 882px. Decorative side copy and the third miniature helmet were removed from this layout.
- Seven viewport captures cover 320 × 740, 390 × 844, 768 × 1024, 1024 × 768, 1366 × 768, 1440 × 900, and 1920 × 948. See `measurements.json` for actual CSS viewport sizes (browser scaling can round by one pixel).
- All checked sizes show zero rider overflow below the hero, no rider/heading overlap, no clipped headline, and no page horizontal overflow.

The `before/` folder preserves the user's original full-viewport screenshot; `after/` contains seven separately reviewed screenshots. Mobile and tablet heroes allow natural vertical height rather than cropping the subject to a fixed screen. The smallest phone may require a little scrolling to reveal the full CTA. TypeScript, ESLint, and a production build passed.
