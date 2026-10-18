import { readFile, writeFile } from 'node:fs/promises';

const subjects = {
  'spyder-corsa-plain-v2': 'the single Spyder Corsa Plain V2 shiny black full-face helmet. Keep its exact shape, black finish, tinted visor, viewing angle, CORSA lettering and SPYDER logo',
  'nhk-gp-r-tech-mandalika': 'the single NHK GP R Tech Street Mandalika helmet. Keep its exact blue, white and red livery, dark visor, shell shape, angle, NHK logos and Mandalika lettering',
  'mt-stinger-2-solid': 'the single pearl-white MT Stinger 2 Solid helmet with black and red details. Keep the exact shell, dark visor, viewing angle, all physical MT branding and STINGER lettering',
  'spyder-phantom': 'the person wearing the Spyder Phantom black jacket with red and white details. Keep the same person, face, hair, body, pose, jacket construction, seams, zippers, colors, physical Spyder markings, hands and visible jeans. Keep the existing bottom crop; do not invent missing legs. Remove only the gray studio backdrop and its shadows',
  'spyder-barrel': 'the single Spyder Barrel black and red motorcycle glove. Keep its exact silhouette, protective knuckle pieces, stitching, red panels, finger shapes and physical SPYDER lettering',
  'scs-s8-x': 'the single SCS S8-X black and silver helmet intercom device. Keep its exact housing, buttons, mounting tabs, angle, silver trim, physical SCS logo and button symbols',
};
const catalog = JSON.parse(await readFile('assets/catalog-sources.json', 'utf8'));
const assets = catalog.assets.map(asset => ({
  name: asset.name,
  editTarget: `public/images/catalog/originals/${asset.original}`,
  output: `public/images/catalog/cutouts/${asset.cutout}`,
  ...(asset.name === 'gille-circuit-racer' ? {
    promptRecord: 'Reconstructed edit brief; original tool-call wording was not retained.',
    prompt: 'Background extraction of the real white and gold Gille FF012 Circuit Racer helmet. Preserve the physical shell, visor, color scheme, angle and branding. Remove the white background, separate promotional GILLE logo and BPS badge outside the helmet. Center the complete helmet on genuine transparent alpha with clear margins. No redesigned helmet, extra text, shadows, white matte or checkerboard pixels.',
  } : {
    prompt: `Use case: background-extraction. Asset type: transparent ecommerce product cutout for LegacyMoto. Input image 1 is the EDIT TARGET, a real supplier photograph. Extract ${subjects[asset.name]}. Preserve the subject's original photographic appearance and details; do not redesign it or generate a different branded product. Remove the entire background and any floor/cast shadow ONLY. Center the complete visible subject with a little empty margin on a genuinely transparent alpha background. Keep all branding that is physically on the subject unchanged. No new text, no extra objects, no pedestal, no white matte, and no checkerboard rendered into the pixels.`,
  }),
}));
await writeFile('assets/catalog-cutout-prompts.json', JSON.stringify({ mode: 'built-in ImageGen', intent: 'background-extraction', assets }, null, 2) + '\n');
