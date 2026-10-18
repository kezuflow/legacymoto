import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Asset } from "@/components/asset";
import {
  brands,
  featuredItems,
  faqs,
  formatPrice,
  type FeaturedItem,
} from "@/lib/content";
import { business } from "@/lib/site";

function Cta({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${buttonVariants({ variant: outline ? "outline" : "default" })} pill-button`}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.7} />
    </a>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{children}</span>
      <span className="section-number">/ {number}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-stage container">
        <h1 id="hero-heading">
          <span className="hero-heading-line hero-heading-primary">
            <span>MOTO</span>
          </span>{" "}
          <span className="hero-heading-line hero-heading-secondary">
            <span>HELMETS</span>
          </span>
        </h1>
        <Asset
          name="spyder-corsa-plain-v2"
          alt="Spyder Corsa Plain V2 shiny black full-face helmet"
          className="hero-helmet hero-helmet-left"
          eager
          sizes="(max-width: 767px) 25vw, 17vw"
        />
        <Asset
          name="gille-circuit-racer"
          alt="Gille FF012 Circuit Racer white and gold full-face helmet"
          className="hero-helmet hero-helmet-right"
          eager
          sizes="(max-width: 767px) 25vw, 17vw"
        />
        <div className="hero-intro">
          <p className="uppercase-copy">
            EVERYDAY RIDES. <br />
            WEEKEND ESCAPES. <br />
            YOUR NEXT <br />
            GREAT STORY.
          </p>
        </div>
        <div className="hero-rider-frame">
          <Asset
            name="hero-rider-v2"
            alt="Motorcyclist in a navy, yellow and teal riding jacket leaning forward on a black cafe-racer motorcycle"
            className="hero-rider"
            eager
            sizes="(max-width: 1000px) 90vw, 60vw"
          />
        </div>
        <div className="hero-copy">
          <h2>CEBU HELMETS.<br />LOWEST-PRICE GUARANTEE.</h2>
          <p>
            Helmets, riding gear, and accessories at suggested retail prices in Mandaue, Cebu.
            Retail and wholesale enquiries welcome.
          </p>
          <Cta href="#helmets">Explore all helmets</Cta>
        </div>
        <div className="hero-tags">
          <div>
            <Badge variant="outline">STREET</Badge>
            <Badge variant="outline">ADVENTURE</Badge>
            <Badge variant="outline">MOTO GEAR</Badge>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-rule" />
          <div>
            <h3>YOUR COMPLETE KIT</h3>
            <p>
              Find your fit.
              <br />
              Make it your own.
            </p>
            <a href="#riding-gear">
              Discover riding gear <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandStrip() {
  return (
    <section
      id="brands"
      className="brand-section section-pad"
      aria-label="Explore helmet brands"
    >
      <Separator />
      <div className="brand-row">
        <p>
          DIFFERENT BRANDS.
          <br />
          ONE RIDING CULTURE.
        </p>
        <div className="brand-list">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={`#${brand.itemId}`}
              className={`brand-name brand-${brand.itemId}`}
              aria-label={`Explore ${brand.name}`}
            >
              {brand.label}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </div>
      <Separator />
    </section>
  );
}

function ProductCard({ item, index }: { item: FeaturedItem; index: number }) {
  return (
    <article
      id={item.id}
      className={`product product-${item.category}`}
      aria-labelledby={`${item.id}-title`}
    >
      <div className="product-art organic-stage">
        <span className="product-price">
          {item.price === null ? "Ask for SRP" : formatPrice(item.price)}
        </span>
        <span className="product-number">0{index + 1}</span>
        <Asset name={item.image} alt={item.alt} />
      </div>
      <div className="product-copy">
        <span className="product-brand">{item.brand}</span>
        <h3 id={`${item.id}-title`}>{item.name}</h3>
        <p>{item.description}</p>
        <a
          className="product-disclaimer"
          href={business.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask LegacyMoto about ${item.brand} ${item.name} (opens in a new tab)`}
        >
          Get current SRP <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function FeaturedSelection() {
  const selection = ["spyder-helmet", "gille-helmet", "nhk-helmet"].map((id) =>
    featuredItems.find((item) => item.id === id)!,
  );
  return (
    <section
      id="featured"
      className="featured-section section-pad"
      aria-labelledby="featured-heading"
    >
      <h2 id="featured-heading">CHOOSE THE BEST</h2>
      <p className="selection-intro">Motorcycle helmets in Cebu. Find your brand. Confirm the SRP.</p>
      <div id="helmets" className="product-grid">
        {selection.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export function Editorial() {
  return (
    <section
      className="editorial section-pad"
      aria-labelledby="editorial-heading"
    >
      <div className="editorial-top">
        <h2 id="editorial-heading">
          READY FOR
          <br />
          WHAT’S AHEAD.
        </h2>
        <a href="#guide">
          WHICH HELMET
          <br />
          IS RIGHT FOR YOU?
          <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="editorial-stage">
        <div className="editorial-left">
          <div className="organic-stage editorial-small-art">
            <Asset
              name="nhk-gp-r-tech-mandalika"
              alt="NHK GP R Tech Street Mandalika full-face helmet"
              sizes="(max-width: 767px) 32vw, 15vw"
            />
          </div>
          <p className="uppercase-copy">
            EVERY RIDE
            <br />
            STARTS WITH
            <br />
            THE RIGHT
            <br />
            FIT.
          </p>
        </div>
        <div className="editorial-portrait">
          <Asset
            name="editorial-rider-v3"
            alt="Complete front view of a motorcyclist in navy and red gear, with both boots and the motorcycle's front wheel visible"
            sizes="(max-width: 767px) 90vw, 40vw"
          />
        </div>
        <div className="editorial-right">
          <p>Get to know the fit, style, and details before your next ride.</p>
          <div className="organic-stage editorial-small-art">
            <Asset
              name="gille-circuit-racer"
              alt="Gille FF012 Circuit Racer white and gold full-face helmet"
              sizes="(max-width: 767px) 32vw, 15vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  const helmet = featuredItems.find((item) => item.id === "mt-helmet")!;
  return (
    <section
      id="categories"
      className="ride-story section-pad"
      aria-labelledby="ride-heading"
    >
      <article
        id={helmet.id}
        className="ride-visual product"
        aria-labelledby="mt-helmet-title"
      >
        <div className="organic-stage">
          <Asset name={helmet.image} alt={helmet.alt} />
        </div>
        <div className="ride-product-caption">
          <span className="product-brand">{helmet.brand}</span>
          <h3 id="mt-helmet-title">{helmet.name}</h3>
          <span className="product-price-inline">
            {helmet.price === null ? "Ask for SRP" : formatPrice(helmet.price)}
          </span>
          <a
            className="product-disclaimer"
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask LegacyMoto about ${helmet.brand} ${helmet.name} (opens in a new tab)`}
          >
            Get current SRP <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </article>
      <div className="ride-story-copy">
        <div className="ride-topline">
          <div className="category-pills">
            <a href="#helmets">HELMETS</a>
            <a href="#riding-gear">RIDING GEAR</a>
            <a href="#accessories">ACCESSORIES</a>
          </div>
        </div>
        <h2 id="ride-heading">
          YOUR RIDE.
          <br />
          YOUR WAY.
        </h2>
        <div className="ride-story-bottom">
          <p>
            Street days. Weekend escapes. A kit that feels like you. Explore
            helmets, riding gear, and the little extras that bring it together.
          </p>
        </div>
      </div>
    </section>
  );
}

export function GearSelection() {
  const gear = featuredItems.filter((item) => item.category !== "helmets");
  return (
    <section
      id="gear"
      className="gear-section section-pad"
      aria-labelledby="gear-heading"
    >
      <div className="section-heading-row">
        <h2 id="gear-heading">COMPLETE YOUR KIT</h2>
        <span className="eyebrow">RIDING GEAR & ACCESSORIES</span>
      </div>
      <div className="product-grid">
        {gear.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index + 4} />
        ))}
      </div>
      <p className="catalog-footnote">
        Prices follow SRP. Message LegacyMoto for the current SRP, sizes, colors,
        and availability of your chosen model.
      </p>
    </section>
  );
}

export function Wholesale() {
  return (
    <section id="wholesale" className="wholesale-section section-pad" aria-labelledby="wholesale-heading">
      <div className="wholesale-grid">
        <div>
          <p className="eyebrow">FOR RIDERS. FOR RESELLERS.</p>
          <h2 id="wholesale-heading">WHOLESALE<br />HELMETS IN CEBU.</h2>
          <p className="wholesale-tagline">Your brand. Your fit. Our lowest-price guarantee.</p>
        </div>
        <div className="wholesale-copy">
          <p>
            Looking for a helmet supplier in Cebu? LegacyMoto welcomes retail
            and wholesale enquiries at our Mandaue City store. Explore Spyder,
            Gille, MT Helmets and NHK Helmets with one clear pricing policy:
            suggested retail prices (SRP).
          </p>
          <dl className="wholesale-facts">
            <div><dt>Pricing</dt><dd>{business.pricingPolicy}</dd></div>
            <div><dt>Guarantee</dt><dd>{business.priceGuarantee}</dd></div>
            <div><dt>Enquiries</dt><dd>Retail and wholesale</dd></div>
            <div><dt>Visit</dt><dd>{business.streetAddress}, Mandaue City, Cebu</dd></div>
          </dl>
          <p>
            Send the brands, models, sizes and quantities you need. We’ll confirm
            current SRP prices and availability before you order.
          </p>
          <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className={`${buttonVariants()} pill-button`}>
            Enquire about wholesale <ArrowUpRight size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`tel:${business.telephone}`} className="wholesale-phone">Call {business.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="about-section section-pad"
      aria-labelledby="about-heading"
    >
      <Separator />
      <div className="about-grid">
        <div>
          <SectionLabel number="04">THE BRAND BEHIND THE RIDE</SectionLabel>
          <h2 id="about-heading">
            ABOUT
            <br />
            LEGACYMOTO.
          </h2>
          <p className="about-tagline">Your Cebu helmet supplier. Lowest-price guarantee.</p>
          <div className="shop-details">
            <h3>VISIT LEGACYMOTO</h3>
            <address>
              <span>
                {business.streetAddress}
                <br />
                {business.city}, {business.region}, Philippines
              </span>
              <a href={`tel:${business.telephone}`}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </address>
            <dl className="shop-hours">
              {business.hours.map((hours) => (
                <div key={hours.label}>
                  <dt>{hours.label}</dt>
                  <dd>{hours.display}</dd>
                </div>
              ))}
            </dl>
            <span className="shop-source">
              Philippine time. Details checked on{" "}
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                our Facebook page
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              , 17 October 2026. Check for holiday updates before visiting.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">{business.description}</p>
          <p>
            We bring Spyder, Gille, MT Helmets, and NHK Helmets into one place,
            alongside riding jackets, gloves, and motorcycle accessories, so you
            can explore a kit that suits your kind of ride.
          </p>
          <p>
            From the everyday commute to the weekend road trip, our focus is
            straightforward: helping you get to know your options. Start with
            your helmet, learn about fit, and bring the rest of your riding kit
            together.
          </p>
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Get to know LegacyMoto on Facebook <ArrowUpRight size={18} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function BuyingGuide() {
  return (
    <section
      id="guide"
      className="guide-section section-pad"
      aria-labelledby="guide-heading"
    >
      <Separator />
      <div className="guide-grid">
        <div>
          <SectionLabel number="05">A GOOD PLACE TO START</SectionLabel>
          <h2 id="guide-heading">
            THE RIGHT
            <br />
            GEAR STARTS
            <br />
            WITH YOU.
          </h2>
          <p>A little know-how for your next ride.</p>
          <ArrowDownRight className="guide-arrow" size={42} strokeWidth={1} />
        </div>
        <Accordion className="faq" defaultValue={[]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent keepMounted>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="closing section-pad" aria-labelledby="closing-heading">
      <span className="eyebrow">WHEREVER YOU’RE HEADED, MAKE IT YOURS.</span>
      <h2 id="closing-heading">
        YOUR NEXT RIDE
        <br />
        STARTS HERE.
      </h2>
      <div className="closing-bottom">
        <p>
          Helmets. Gear. Accessories.
          <br />A whole lot of possibility.
        </p>
        <Cta href="#featured">Explore gear</Cta>
        <MoveUpRight size={53} strokeWidth={1.2} />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer section-pad">
      <Separator />
      <div className="footer-main">
        <a href="#" className="wordmark">
          LEGACYMOTO.
        </a>
        <nav aria-label="Footer navigation">
          <a href="#helmets">Helmets</a>
          <a href="#riding-gear">Riding gear</a>
          <a href="#accessories">Accessories</a>
          <a href="#brands">Brands</a>
          <a href="#wholesale">Wholesale</a>
          <a href="#about">About us</a>
          <a href="#guide">Rider guide</a>
        </nav>
        <a
          href={business.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-facebook"
          aria-label="LegacyMoto on Facebook (opens in a new tab)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14 22v-8h3l1-4h-4V7c0-1 .5-1 1-1h3V2h-3c-3.3 0-5 2-5 5v3H7v4h3v8h4Z" />
          </svg>
          <span>Facebook</span>
        </a>
        <a href="#" className="back-top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} LegacyMoto. For the love of the ride.
        </span>
        <span>SPYDER · GILLE · MT HELMETS · NHK HELMETS</span>
        <span>
          PHILIPPINES <ArrowRight size={12} />
        </span>
      </div>
    </footer>
  );
}
