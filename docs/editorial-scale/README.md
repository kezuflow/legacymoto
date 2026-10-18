# Editorial scale correction

Subsequent cleanup: the large FOR THE LOVE OF THE RIDE caption, the FOR THE / WAY YOU / RIDE callout and the small helmet beside the Your Ride paragraph were removed at the user's request. The editorial stage now ends at the portrait height. [Current cleaned-up category section](categories-clean.jpg). The earlier screenshots below record the scale comparison before this cleanup.

18 October 2026. Compared the supplied reference with the READY FOR WHAT’S AHEAD composition in the in-app browser.

The earlier responsive review checked layout integrity; the editorial artwork and typography still had smaller proportions than the supplied reference. This revision increases their visual emphasis.

| At 1440px viewport width | Previous | Revised |
| --- | --- | --- |
| Heading size | 60.5px | 71.2px |
| Central frame | 432 × 590px | 491 × 835px |
| Left helmet composition | 180 × 185px | 233 × 246px |

Headings and compositions now scale with the section content width. The bottom caption places FOR THE and LOVE on opposite sides of the rider, followed by OF THE RIDE. The rider derivative trims unused transparent margins and preserves the complete subject, boots and front wheel. The original PNG remains unchanged.

The layout follows the reference's hierarchy and proportions; it is not a pixel-identical reproduction. The full motorcycle has a taller silhouette than the reference's upper-body cyclist, and Outfit remains the user-selected font.

Checked at 320, 390, 768, 1024, 1440 and 1920px widths: no editorial text overflow or page overflow. The image remains contained without clipping. TypeScript, ESLint and the production build passed. The dev server remains running; temporary viewport overrides were reset.

- [Current desktop composition](desktop-1440.jpg), captured at 1440 × 1600 to show the full section.
- [Current mobile composition](mobile-390.jpg), captured at 390 × 1000.
- [Measurements](metrics.json).
