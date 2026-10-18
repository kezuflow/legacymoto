import { createRequire } from "node:module";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(await readFile(path.join(root, "assets/catalog-sources.json"), "utf8"));
const assets = {};
const alphaReport = [];
for (const asset of catalog.assets) {
  const original = path.join(root, "public/images/catalog/originals", asset.original);
  const source = asset.cutout
    ? path.join(root, "public/images/catalog/cutouts", asset.cutout)
    : original;
  const filename = `${asset.name}${asset.cutout ? "-cutout-v1" : ""}.webp`;
  const output = path.join(root, "public/images/catalog", filename);
  if (asset.cutout) {
    const metadata = await sharp(source).metadata();
    if (!metadata.hasAlpha || (await sharp(source).stats()).isOpaque)
      throw new Error(`${asset.name}: ImageGen cutout must have real transparency`);
    // Optimize the supplied alpha; background extraction is done by ImageGen.
    await sharp(source)
      .trim({ background: "#00000000", threshold: 1 })
      .resize(1080, 1080, { fit: "contain", background: "#00000000" })
      .extend({ top: 60, bottom: 60, left: 60, right: 60, background: "#00000000" })
      .webp({ quality: 90, alphaQuality: 100, effort: 5 })
      .toFile(output);
    const alpha = await sharp(output).extractChannel("alpha").raw().toBuffer();
    const clearPixels = alpha.reduce((count, value) => count + (value === 0 ? 1 : 0), 0);
    alphaReport.push({ name: asset.name, hasAlpha: true, transparentPixels: clearPixels, totalPixels: alpha.length });
  } else {
    await sharp(source).resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true }).webp({ quality: 90 }).toFile(output);
  }
  const { width, height } = await sharp(output).metadata();
  assets[asset.name] = {
    src: `/images/catalog/${filename}`,
    original: `/images/catalog/originals/${asset.original}`,
    width, height, source: asset.sourcePage,
    ...(asset.cutout ? { cutout: `/images/catalog/cutouts/${asset.cutout}`, processing: "ImageGen background extraction" } : {}),
  };
}
await writeFile(path.join(root, "src/lib/catalog-manifest.json"), JSON.stringify({ assets }, null, 2) + "\n");
console.log(`Prepared ${catalog.assets.length} authentic catalog photos.`);
await writeFile(path.join(root, "assets/catalog-alpha-report.json"), JSON.stringify(alphaReport, null, 2) + "\n");
