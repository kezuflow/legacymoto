# LegacyMoto: Cebu SEO and generative search review

Updated 18 October 2026. This review describes the local scaffold, not public indexing, rankings, keyword volume or AI citations.

## Positioning

The owner confirmed that LegacyMoto is a helmet wholesaler, prices follow SRP, and the business offers a **lowest-price guarantee**. The pitch is **Cebu helmets. Lowest-price guarantee.** Retail and wholesale enquiries are welcome. The guarantee is an owner-confirmed business policy, not an independently audited comparison of every Cebu retailer. No automatic price matching, refund mechanics, discounts, reseller margins, minimum order quantities or immediate stock are invented. The guarantee FAQ directs customers to contact the store for applicable terms before ordering.

The business is described consistently as a motorcycle helmet wholesaler and retailer in Mandaue City, Cebu, offering Spyder, Gille, MT Helmets and NHK Helmets, plus riding gear and accessories, at suggested retail prices (SRP).

The address/contact/hours were read from the [official Facebook page](https://www.facebook.com/legacymotocebu) during the earlier 17 October review. They were not independently reverified during this update; the visible checked-on date stays unchanged: 456 Hernan Cortes, Mandaue City, Cebu; 0926 082 6002; legacymotocebu@gmail.com; Monday–Saturday 9 AM–8 PM; Sunday 9 AM–7 PM.

## Keyword targets

These are relevance-based targets, not measured high-volume keywords. Semrush did not return metrics because the account had insufficient API units. No monthly volumes, competition scores or Cebu-specific frequency claims are invented.

| Intent | Natural query examples | Where addressed |
| --- | --- | --- |
| Local shopping | Cebu helmets; motorcycle helmets Cebu | Title, hero, selection, About |
| Physical shop | helmet shop Cebu; helmet shop Mandaue | About, address, location FAQ |
| Pricing | helmet price Cebu; lowest price helmets Cebu; helmet lowest-price guarantee Cebu; helmets at SRP Cebu | Guarantee, SRP policy, enquiries, pricing FAQs |
| Wholesale | wholesale helmets Cebu; helmet supplier Cebu; helmet wholesaler Mandaue | Wholesale section, navigation, FAQ |
| Brands | Spyder helmets Cebu; Gille helmets Cebu; NHK helmets Cebu; MT helmets Cebu | Real models, brand links, wholesale copy, FAQ |
| Riding kit | riding gear Cebu; motorcycle accessories Cebu | Hero, gear selection, About |

The misspelling “helmest” is not inserted into copy, alt text or hidden text. Useful natural variations do not justify repetitive blocks or duplicate location pages. The actual shop is in Mandaue; no Cebu City branch is invented.

Search-result inspection found relevant local catalogue/pricing terminology in [Motology's Cebu catalogue](https://logospringph.wixsite.com/motology/helmets), [Team Graphitee's SRP-labelled catalogue](https://teamgraphitee.com/) and [Team Spyder's store locator](https://www.teamspyder.com/pages/store-locator). These provide context for intent, not evidence of search volume or LegacyMoto's comparative prices.

## Implemented foundations

- Title: **Cebu Helmets | Lowest-Price Guarantee | LegacyMoto**.
- Description: **Shop helmets in Mandaue, Cebu with LegacyMoto’s lowest-price guarantee. Spyder, Gille, MT and NHK at SRP. Retail and wholesale enquiries welcome.**
- Visible local hero, lowest-price guarantee, product enquiries, wholesale section and business description. Unknown numeric SRPs remain unknown.
- Ten mounted FAQ answers cover identity, Cebu location, wholesale, SRP pricing, the guarantee, brands, fit, styles, riding kit and comparing prices.
- Header/footer links expose the wholesale section. All important copy remains server-rendered; motion is progressive enhancement.
- Canonical, Open Graph/Twitter metadata, social preview, robots and sitemap share one configured origin.
- Connected WholesaleStore, WebSite and WebPage records use stable IDs. WholesaleStore is a Store/LocalBusiness subtype. Description, address, contacts and hours match visible copy. Cebu is the service area; currency is PHP.
- WebPage and sitemap modification dates reflect this content update, rather than changing on every build.
- One public route and H1, descriptive image alternatives and crawlable links. Section fragments are not separate sitemap pages.
- No special AI schema, unnecessary AI text file, fabricated Product/Offer pricing, reviews or rating counts.

## GEO approach

Visitors and search systems can directly identify what the business sells, where it is, the SRP policy and lowest-price guarantee, whether wholesale enquiries are accepted, its actual brands and contact methods. The business description in JSON-LD includes the same guarantee as the visible page.

Google says normal SEO foundations apply to AI Overviews and AI Mode; there are no special technical requirements or mandatory AI text files. Compliance does not guarantee indexing or inclusion. [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

Avoid keyword repetition and unsupported superlatives. Keep structured data consistent with visible facts. [Google: title links](https://developers.google.com/search/docs/appearance/title-link), [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Verification and limits

Metadata/entity tests cover development and public origins, canonical consistency, wholesale/SRP identity, the owner-confirmed guarantee, Facebook, Cebu service area, address, contacts, hours and absence of invented commerce/rating records. Production-build and in-app checks verify rendered content, wholesale navigation and responsive formatting.

Completed: production build and TypeScript, ESLint, four origin/entity checks and the rendered-HTML SEO check. In-app checks at 320, 390, 768, 1024, 1101, 1440 and 1920px found no clipped text, horizontal overflow or desktop navigation collisions. The mobile wholesale link closes the menu and reaches its section; the SRP FAQ opens and closes with keyboard input. No runtime errors were observed. [Viewport measurements](seo-review/responsive-metrics.json), [desktop preview](seo-review/wholesale-desktop.jpg), [mobile FAQ](seo-review/pricing-faq-mobile.jpg).

After adding the owner-confirmed guarantee, the production build, TypeScript, ESLint and rendered SEO checks passed again, including ten FAQ triggers and the guarantee in metadata, visible copy and JSON-LD. In-app checks at 320, 390, 768 and 1440px found no overflow or clipped guarantee text. Enter opens the guarantee FAQ and Space closes it. No browser errors were captured. [Guarantee viewport measurements](seo-review/guarantee-responsive-metrics.json), [updated desktop](seo-review/lowest-price-guarantee.jpg), [updated mobile hero](seo-review/guarantee-mobile.jpg).

Earlier Lighthouse results describe older revisions; they are not fresh scores for this update or a prediction of rankings. There is no universal authoritative 10/10 GEO score. Public-host performance, indexing and Search Console data remain unmeasured.

## Public launch and next priorities

1. Set NEXT_PUBLIC_SITE_URL to the final HTTPS origin before deployment. Localhost is the preview default. Verify deployed canonical, social, entity, robots and sitemap URLs.
2. Publish the owner's current SRPs for exact stocked models and variants. Actual prices help price comparisons. Add useful model/category pages and accurate Product/Offer records when the real catalogue is ready; avoid thin keyword variants.
3. Verify the actual business in Google Business Profile and the site in Search Console/Bing Webmaster Tools. Keep name, address, phone, category and hours consistent. No account/listing changes or deployment were performed here.
4. Validate deployed markup in the [Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/). Follow [Google's local-business guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business).
5. Submit the sitemap after launch and inspect indexing. Use real Philippines-filtered Search Console query data to prioritize demand; country-level volume is not Cebu-city volume.
6. Measure public-host Core Web Vitals. Maintain current SRPs, useful original comparisons and sizing information, and genuine local reputation. Do not invent testimonials or AI citations.
