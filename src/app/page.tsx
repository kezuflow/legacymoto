import { Header } from "@/components/header";
import {
  Hero,
  BrandStrip,
  Categories,
  FeaturedSelection,
  Editorial,
  About,
  BuyingGuide,
  Closing,
  Footer,
  GearSelection,
  Wholesale,
} from "@/components/landing";
import { ProtectionShowcase } from "@/components/protection-showcase";
import { structuredData } from "@/lib/site";
import { TextMotion } from "@/components/text-motion";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProtectionShowcase />
        <FeaturedSelection />
        <Editorial />
        <Categories />
        <GearSelection />
        <BrandStrip />
        <Wholesale />
        <About />
        <BuyingGuide />
        <Closing />
      </main>
      <Footer />
      <TextMotion />
    </>
  );
}
