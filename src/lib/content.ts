import { business } from "@/lib/site";

export type CategoryId = "helmets" | "riding-gear" | "accessories";
export type FeaturedItem = {
  id: string;
  brand: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number | null;
  image: string;
  alt: string;
  source: string;
};

export const brands = [
  { name: "Spyder", label: "SPYDER", itemId: "spyder-helmet" },
  { name: "Gille", label: "GILLE", itemId: "gille-helmet" },
  { name: "MT Helmets", label: "MT HELMETS", itemId: "mt-helmet" },
  { name: "NHK Helmets", label: "NHK", itemId: "nhk-helmet" },
];

export const categories: {
  id: CategoryId;
  number: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    id: "helmets",
    number: "01",
    name: "Helmets",
    description: "Find your fit. Make it yours.",
    image: "spyder-corsa-plain-v2",
    alt: "Spyder Corsa Plain V2 full-face helmet in shiny black",
  },
  {
    id: "riding-gear",
    number: "02",
    name: "Riding gear",
    description: "The everyday kit. Reconsidered.",
    image: "spyder-phantom",
    alt: "Spyder Phantom black riding jacket with red and white details",
  },
  {
    id: "accessories",
    number: "03",
    name: "Accessories",
    description: "Small details. Better rides.",
    image: "scs-s8-x",
    alt: "SCS S8-X helmet communication device",
  },
];

export const featuredItems: FeaturedItem[] = [
  {
    id: "spyder-helmet",
    brand: "Spyder",
    name: "Corsa Plain V2",
    category: "helmets",
    description: "Spyder’s full-face Corsa in shiny black.",
    price: null,
    image: "spyder-corsa-plain-v2",
    alt: "Spyder Corsa Plain V2 shiny black full-face motorcycle helmet",
    source: "https://www.teamspyder.com/products/spyder-corsa-plain-v2",
  },
  {
    id: "gille-helmet",
    brand: "Gille",
    name: "FF012 Circuit Racer",
    category: "helmets",
    description: "Gille’s full-face Circuit Racer in white and gold.",
    price: null,
    image: "gille-circuit-racer",
    alt: "Gille FF012 Circuit Racer white and gold full-face helmet with mirrored visor",
    source: "https://shopee.ph/Gille-FF012-Circuit-Racer-Full-Face-Dual-Visor-Motorcycle-Helmet-i.505955057.27316992114",
  },
  {
    id: "mt-helmet",
    brand: "MT Helmets",
    name: "Stinger 2 Solid",
    category: "helmets",
    description: "MT Helmets’ Stinger 2 Solid in pearl white.",
    price: null,
    image: "mt-stinger-2-solid",
    alt: "MT Helmets Stinger 2 Solid pearl white full-face motorcycle helmet",
    source: "https://www.teamspyder.com/products/mt-stinger-2-solid",
  },
  {
    id: "nhk-helmet",
    brand: "NHK Helmets",
    name: "GP R Tech Street",
    category: "helmets",
    description: "NHK’s full-face street helmet with Mandalika graphics.",
    price: null,
    image: "nhk-gp-r-tech-mandalika",
    alt: "NHK GP R Tech Street Mandalika full-face helmet in blue, white and red",
    source: "https://helmnhk.com/helmets/full-face/gp-r-tech-street/",
  },
  {
    id: "riding-gear",
    brand: "Spyder",
    name: "Phantom riding jacket",
    category: "riding-gear",
    description: "A black Spyder jacket with red and white details.",
    price: null,
    image: "spyder-phantom",
    alt: "Model wearing the Spyder Phantom black riding jacket with red and white details",
    source: "https://www.teamspyder.com/products/spyder-phantom",
  },
  {
    id: "riding-gloves",
    brand: "Spyder",
    name: "Barrel riding gloves",
    category: "riding-gear",
    description: "Spyder Barrel gloves in black and red.",
    price: null,
    image: "spyder-barrel",
    alt: "Spyder Barrel black and red motorcycle glove with Spyder branding",
    source: "https://www.teamspyder.com/products/spyder-barrel",
  },
  {
    id: "accessories",
    brand: "SCS",
    name: "S8-X intercom",
    category: "accessories",
    description: "The SCS S8-X helmet communication device.",
    price: null,
    image: "scs-s8-x",
    alt: "SCS S8-X black and silver helmet communication device",
    source: "https://www.teamspyder.com/products/scs-intercom-s8x",
  },
];

export const faqs = [
  { question: "What is LegacyMoto?", answer: business.description },
  {
    question: "Where can I buy motorcycle helmets in Cebu?",
    answer:
      "Visit LegacyMoto at 456 Hernan Cortes, Mandaue City, Cebu. We carry Spyder, Gille, MT Helmets and NHK Helmets, alongside motorcycle riding gear and accessories. Message our Facebook page or call 0926 082 6002 to confirm the model, size and current availability before visiting.",
  },
  {
    question: "Do you accept wholesale helmet enquiries in Cebu?",
    answer:
      "Yes. LegacyMoto is a helmet wholesaler and retailer in Mandaue City, Cebu. Send the brands, models, sizes and quantities you need through our Facebook page or call 0926 082 6002. Our pricing policy is suggested retail prices (SRP); we will confirm current prices and availability for your enquiry.",
  },
  {
    question: "What are your helmet prices in Cebu?",
    answer:
      "LegacyMoto sells at suggested retail prices (SRP). The exact price depends on the brand, model and variant. Contact us with the helmet you want for its current SRP and availability. Individual product prices are confirmed before ordering.",
  },
  {
    question: "Does LegacyMoto offer a lowest-price guarantee on helmets in Cebu?",
    answer:
      "Yes. LegacyMoto offers a lowest-price guarantee on helmets in Cebu. Send us the exact brand, model and variant you are considering. Contact our Facebook page or call 0926 082 6002 to confirm the current price and applicable guarantee terms before ordering.",
  },
  {
    question: "Which helmet brands can I explore at LegacyMoto?",
    answer:
      "Explore Spyder, Gille, MT Helmets, and NHK Helmets. Contact LegacyMoto on Facebook for current models, sizes, colors, prices, and availability.",
  },
  {
    question: "How do I find the right helmet fit?",
    answer:
      "Start by measuring around your head just above your eyebrows. Compare that measurement with the specific manufacturer’s size chart, then try the helmet on. It should feel evenly snug without painful pressure points. Fit differs between brands and models, so follow the manufacturer’s fitting instructions rather than choosing by size label alone.",
  },
  {
    question: "Which helmet style should I choose?",
    answer:
      "Think about how and where you ride, your preferred coverage, and everyday comfort. Full-face, modular, and open-face helmets offer different designs and coverage. Check the exact model’s specifications, applicable certification information, and manufacturer guidance before making your choice.",
  },
  {
    question: "Where should I start with riding gear?",
    answer:
      "Build a coordinated kit around a correctly fitted helmet, riding jacket, motorcycle gloves, riding trousers, and suitable boots. Consider your riding conditions and climate, then compare the materials, fit, and manufacturer information for each actual product.",
  },
  {
    question: "How do I compare helmet prices in Cebu?",
    answer:
      "Compare the same brand, model and variant, then check the fit, included items and current price. LegacyMoto follows suggested retail prices (SRP). Send us the model you are comparing so we can confirm its current SRP and availability. The best choice for your budget also needs to fit you correctly.",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);
