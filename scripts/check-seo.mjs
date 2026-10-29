import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const probe = `
  const site = await import('./src/lib/site.ts');
  console.log(JSON.stringify({
    origin: site.siteUrl.origin,
    canonical: site.absoluteUrl(),
    title: site.pageTitle,
    description: site.pageDescription,
    graph: site.structuredData['@graph']
  }));
`;

for (const [origin, expectedOrigin] of [
  ["", "https://www.legacymoto.ph"],
  ["http://localhost:3000", "http://localhost:3000"],
  ["https://example.test", "https://example.test"],
  ["https://example.test/subdirectory?preview=1", "https://example.test"],
]) {
  const result = spawnSync(
    process.execPath,
    ["--input-type=module", "-e", probe],
    {
      cwd: root,
      env: { ...process.env, NEXT_PUBLIC_SITE_URL: origin },
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const actual = JSON.parse(result.stdout);
  assert.equal(actual.origin, expectedOrigin);
  assert.equal(actual.canonical, `${expectedOrigin}/`);
  assert.deepEqual(
    actual.graph.map((entity) => entity["@type"]),
    ["WholesaleStore", "WebSite", "WebPage"],
  );
  assert.deepEqual(actual.graph[0].sameAs, [
    "https://www.facebook.com/legacymotocebu",
  ]);
  assert.ok(
    actual.graph.every((entity) =>
      entity["@id"].startsWith(`${expectedOrigin}/#`),
    ),
  );
  assert.equal(actual.graph[0].address.streetAddress, "456 Hernan Cortes");
  assert.equal(actual.graph[0].address.addressLocality, "Mandaue City");
  assert.equal(actual.graph[0].telephone, "+639260826002");
  assert.equal(actual.graph[0].email, "legacymotocebu@gmail.com");
  assert.equal(actual.graph[0].areaServed.name, "Cebu, Philippines");
  assert.equal(actual.graph[0].currenciesAccepted, "PHP");
  assert.match(actual.title, /Cebu Helmets \| Lowest-Price Guarantee/);
  assert.match(actual.description, /Retail and wholesale enquiries/);
  assert.match(actual.graph[0].description, /wholesaler and retailer/);
  assert.match(actual.graph[0].description, /suggested retail prices/);
  assert.match(actual.graph[0].description, /lowest-price guarantee/);
  assert.match(actual.description, /lowest-price guarantee/);
  assert.equal(actual.graph[0].openingHoursSpecification[0].closes, "20:00");
  assert.equal(actual.graph[0].openingHoursSpecification[1].closes, "19:00");
  assert.ok(
    !actual.graph.some((entity) =>
      ["Product", "Offer", "AggregateRating"].includes(entity["@type"]),
    ),
  );
  console.log(
    `PASS ${origin || "unset origin"}: canonical and entity references agree`,
  );
}

if (process.argv.includes("--rendered")) {
  const html = await readFile(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
  assert.equal((html.match(/<h1\b/g) || []).length, 1, "One server-rendered H1");
  assert.match(html, /<title>Cebu Helmets \| Lowest-Price Guarantee/);
  assert.match(html, /name="description" content="Shop helmets in Mandaue, Cebu/);
  assert.match(html, /id="wholesale"/);
  const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(schema, "Structured data is in the initial HTML");
  const graph = JSON.parse(schema[1])["@graph"];
  assert.equal(graph[0]["@type"], "WholesaleStore");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, "Canonical link is present");
  assert.equal(new URL(canonical[1]).href, new URL(graph[0].url).href);
  const expectedOrigin = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.legacymoto.ph",
  ).origin;
  assert.equal(new URL(canonical[1]).href, `${expectedOrigin}/`);
  const openGraphUrl = html.match(/property="og:url" content="([^"]+)"/);
  assert.ok(openGraphUrl, "Open Graph URL is present");
  assert.equal(new URL(openGraphUrl[1]).href, `${expectedOrigin}/`);
  for (const name of ["og:image", "twitter:image"]) {
    const image = html.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]+)"`));
    assert.ok(image, `${name} is present`);
    assert.equal(image[1], `${expectedOrigin}/social-preview.png`);
  }
  const sitemap = await readFile(new URL("../.next/server/app/sitemap.xml.body", import.meta.url), "utf8");
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
    [`${expectedOrigin}/`],
    "Sitemap contains the canonical homepage",
  );
  const robots = await readFile(new URL("../.next/server/app/robots.txt.body", import.meta.url), "utf8");
  assert.ok(robots.includes(`Sitemap: ${expectedOrigin}/sitemap.xml`));
  assert.match(robots, /User-Agent: \*\r?\nAllow: \//);
  const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  assert.match(text, /suggested retail prices \(SRP\)/);
  assert.match(text, /Do you accept wholesale helmet enquiries in Cebu\?/);
  assert.match(text, /What are your helmet prices in Cebu\?/);
  assert.match(text, /Does LegacyMoto offer a lowest-price guarantee on helmets in Cebu\?/);
  assert.match(text, /LOWEST-PRICE GUARANTEE/);
  assert.match(graph[0].description, /lowest-price guarantee/);
  assert.equal((html.match(/data-slot="accordion-trigger"/g) || []).length, 10);
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(html.includes(`id="${anchor}"`), `Missing section: ${anchor}`);
  }
  console.log("PASS rendered SEO: canonical, social URLs, sitemap, robots, title, description, single H1, wholesale/SRP/guarantee copy, ten FAQs, schema and section links");
}
