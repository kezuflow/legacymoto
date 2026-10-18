import type { MetadataRoute } from "next";
import { absoluteUrl, contentUpdatedAt } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // A single page has one canonical entry. Section anchors are not separate pages.
  return [{ url: absoluteUrl(), lastModified: contentUpdatedAt }];
}
