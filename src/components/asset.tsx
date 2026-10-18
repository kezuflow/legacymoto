import Image from "next/image";
import assetManifest from "@/lib/asset-manifest.json";
import catalogManifest from "@/lib/catalog-manifest.json";

export function Asset({
  name,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 767px) 85vw, 33vw",
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  const assets = { ...assetManifest.assets, ...catalogManifest.assets };
  const asset = assets[name as keyof typeof assets];
  if (!asset) throw new Error(`Missing image: ${name}`);
  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      className={`asset ${className}`}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
