import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { business, pageDescription, pageTitle, siteUrl } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: pageTitle,
  description: pageDescription,
  applicationName: business.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: business.name,
    url: "/",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "LegacyMoto — Motorcycle helmets, riding gear and accessories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/social-preview.png"],
  },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PH" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
