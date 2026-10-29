export const business = {
  name: "LegacyMoto",
  facebookUrl: "https://www.facebook.com/legacymotocebu",
  streetAddress: "456 Hernan Cortes",
  city: "Mandaue City",
  region: "Cebu",
  phone: "0926 082 6002",
  telephone: "+639260826002",
  email: "legacymotocebu@gmail.com",
  hours: [
    {
      label: "Monday–Saturday",
      display: "9 AM–8 PM",
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    {
      label: "Sunday",
      display: "9 AM–7 PM",
      days: ["Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  description:
    "LegacyMoto is a motorcycle helmet wholesaler and retailer in Mandaue City, Cebu, Philippines. We offer Spyder, Gille, MT Helmets and NHK Helmets with a lowest-price guarantee, plus riding gear and accessories. Our pricing follows suggested retail prices (SRP).",
  pricingPolicy: "Suggested retail prices (SRP)",
  priceGuarantee: "Lowest-price guarantee",
};

// Keep public metadata on the canonical domain unless explicitly overridden.
export const siteUrl = new URL(
  new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacymoto.ph").origin,
);
export const pageTitle =
  "Cebu Helmets | Lowest-Price Guarantee | LegacyMoto";
export const pageDescription =
  "Shop helmets in Mandaue, Cebu with LegacyMoto’s lowest-price guarantee. Spyder, Gille, MT and NHK at SRP. Retail and wholesale enquiries welcome.";
export const contentUpdatedAt = "2026-10-18";

export const absoluteUrl = (path = "/") => new URL(path, siteUrl).href;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WholesaleStore",
      "@id": absoluteUrl("/#organization"),
      name: business.name,
      url: absoluteUrl(),
      description: business.description,
      sameAs: [business.facebookUrl],
      telephone: business.telephone,
      email: business.email,
      image: absoluteUrl("/social-preview.png"),
      currenciesAccepted: "PHP",
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        addressLocality: business.city,
        addressRegion: business.region,
        addressCountry: "PH",
      },
      openingHoursSpecification: business.hours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.days,
        opens: hours.opens,
        closes: hours.closes,
      })),
      areaServed: { "@type": "AdministrativeArea", name: "Cebu, Philippines" },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: business.name,
      url: absoluteUrl(),
      inLanguage: "en-PH",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/#webpage"),
      url: absoluteUrl(),
      name: pageTitle,
      description: pageDescription,
      dateModified: contentUpdatedAt,
      inLanguage: "en-PH",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#organization") },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/social-preview.png"),
        width: 1200,
        height: 630,
      },
    },
  ],
};
