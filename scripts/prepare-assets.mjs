import { createRequire } from "node:module";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Use the image processor already shipped with Next.js; no image-generation API.
const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve("next/package.json"));
const sharp = nextRequire("sharp");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const definitions = JSON.parse(
  await readFile(path.join(root, "assets/image-prompts.json"), "utf8"),
);
const imageDir = path.join(root, "public/images");
await mkdir(path.join(imageDir, "originals"), { recursive: true });
const assets = {};

for (const asset of definitions.assets) {
  const original = path.join(imageDir, "originals", `${asset.name}.png`);
  if (asset.sourcePath) await copyFile(asset.sourcePath, original);
  const [width, height] = asset.name.startsWith("hero-rider")
    ? [1600, 1050]
    : asset.name.startsWith("editorial-rider")
      ? [900, 1400]
      : [1200, 1200];
  const tightPortrait = asset.name === "editorial-rider-v3";
  const filename = `${asset.name}${tightPortrait ? "-framed" : ""}.webp`;
  const output = path.join(imageDir, filename);
  const image = sharp(original).trim({ background: "#00000000", threshold: 8 });
  if (tightPortrait) {
    // Remove unused transparent margins without cropping the rider or motorcycle.
    image.resize({ height: 1600, withoutEnlargement: true });
  } else {
    image.resize(width, height, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }
  await image.webp({ quality: 87, alphaQuality: 100, effort: 5 }).toFile(output);
  const metadata = await sharp(output).metadata();
  if (!metadata.hasAlpha || (await sharp(output).stats()).isOpaque)
    throw new Error(`${asset.name} must preserve transparency`);
  assets[asset.name] = {
    src: `/images/${filename}`,
    original: `/images/originals/${asset.name}.png`,
    width: metadata.width,
    height: metadata.height,
  };
  console.log(`${asset.name}: ${metadata.width}×${metadata.height}, transparent WebP`);
}

await writeFile(
  path.join(root, "src/lib/asset-manifest.json"),
  JSON.stringify({ mode: "built-in ImageGen", assets }, null, 2) + "\n",
);

const socialBase = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f8f8f7"/><g fill="#0c0c0c" font-family="Arial,Helvetica,sans-serif"><text x="55" y="65" font-size="24" font-weight="700" letter-spacing="-1">LEGACYMOTO.</text><text x="1145" y="60" text-anchor="end" font-size="14">CEBU · LOWEST-PRICE GUARANTEE</text><text x="600" y="232" text-anchor="middle" font-size="180" font-weight="700" letter-spacing="-7">MOTO</text><text x="600" y="325" text-anchor="middle" font-size="76" font-weight="700" letter-spacing="-4">HELMETS</text><text x="55" y="590" font-size="14">RETAIL &amp; WHOLESALE ENQUIRIES</text><text x="1145" y="590" text-anchor="end" font-size="14">MANDAUE CITY, CEBU</text></g></svg>`,
);
const rider = await sharp(path.join(imageDir, "hero-rider-v2.webp"))
  .resize(620, 270, { fit: "contain", background: "#00000000" })
  .png()
  .toBuffer();
await sharp(socialBase)
  .composite([{ input: rider, left: 290, top: 338 }])
  .png()
  .toFile(path.join(root, "public/social-preview.png"));
