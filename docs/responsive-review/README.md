# Responsive formatting review

Reviewed on 18 October 2026 using the ChatGPT in-app browser at localhost:3000. Temporary viewport overrides were reset after testing. This is a layout and interaction review in the in-app Chromium browser, not a claim of testing every physical device or browser engine.

The editorial composition was subsequently enlarged. See [the editorial scale review](../editorial-scale/README.md) for its current measurements and screenshots.

| CSS viewport | Horizontal overflow | Text clipping | Product row alignment |
| --- | --- | --- | --- |
| 320 × 640 | None | None | Pass |
| 390 × 844 | None | None | Pass |
| 520 × 800 | None | None | Pass |
| 768 × 1024 | None | None | Pass |
| 820 × 1180 | None | None | Pass |
| 1024 × 768 | None | None | Pass |
| 1440 × 900 | None | None | Pass |
| 1920 × 1080 | None | None | Pass |
| 2560 × 1440 | None | None | Pass |

## Changes

- About and guide headings scale down on narrow phones; grid children can shrink without consuming the side gutters.
- Product cards stretch their copy areas so enquiry links align when titles wrap.
- Enquiry links, category links, footer links and the menu close button have a minimum 44px height.
- The mobile menu uses the available width up to 380px, with a clear gap between its wordmark and close button.
- The small helmet sits below the Your Ride paragraph on narrow screens, giving the paragraph its full width.
- The 1024px hero uses the tablet composition to avoid squeezing the motorcycle between desktop side columns.
- Removed duplicate anchor offsets; document scroll padding handles the sticky header.

## Verification

All section-link targets exist. No broken loaded images were found. The complete editorial rider, boots and front wheel remain visible inside the rounded portrait on mobile and desktop. Menu keyboard focus cycles inside the sheet; Escape dismisses it and restores the trigger focus. FAQ activation works with Enter and Space. Mobile About navigation closes the sheet and reaches its section. No browser console errors were observed. TypeScript, ESLint and the production build passed.

Machine-readable measurements: [metrics.json](metrics.json).

## Screenshots

- [320px phone](mobile-320.jpg), [390px phone](mobile-390.jpg), [520px phone](mobile-520.jpg)
- [768px tablet](tablet-768.jpg), [820px tablet](tablet-820.jpg), [1024px landscape](landscape-1024.jpg)
- [1440px desktop](desktop-1440.jpg), [1920px desktop](desktop-1920.jpg), [2560px display](wide-2560.jpg)
- [Tablet product rows](tablet-products.jpg)
- [Mobile portrait](mobile-editorial.jpg), [desktop portrait](desktop-editorial.jpg)
- [320px menu](menu-320.jpg), [320px About](about-320.jpg), [desktop About](desktop-about.jpg), [mobile footer](mobile-footer.jpg)

The screenshots include the development indicator. Small screens intentionally allow vertical scrolling so images and text retain readable sizes.
