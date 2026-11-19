import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const assets = new Map();
for (const folder of ['images/placeholders', 'images/ios', 'screenshots', 'blog', 'videos']) {
  async function scan(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) await scan(file);
      else if (/\.(png|jpe?g|webp|svg)$/.test(file) && !file.includes('/thumbs/')) {
        const bytes = fs.readFileSync(file);
        const meta = await sharp(bytes).metadata();
        assets.set('/' + path.relative('docs/public', file), { width: meta.width, height: meta.height, revision: createHash('sha256').update(bytes).digest('hex').slice(0,12) });
      }
    }
  }
  await scan(path.join('docs/public', folder));
}
function update(file) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  text = text.replace(/<img\b[^>]*>/g, tag => {
    const src = tag.match(/src="([^"?#]+)(?:\?[^"#]*)?"/)?.[1];
    const asset = assets.get(src?.replace(/^docs\/public/, ''));
    if (!asset) return tag;
    return tag.replace(/width="\d+"/, `width="${asset.width}"`).replace(/height="\d+"/, `height="${asset.height}"`);
  });
  // Keep README presentation widths intentional; only URL revisions change there.
  if (path.basename(file).startsWith('README')) text = before;
  text = text.replace(/(?:docs\/public)?\/(?:images\/(?:placeholders|ios)|screenshots|blog|videos)\/[^\s"'<>()[\]]+?\.(?:png|jpe?g|webp|svg)(?:\?v=[a-f0-9]+)?/g, reference => {
    const base = reference.replace(/\?v=[a-f0-9]+$/, '');
    const asset = assets.get(base.replace(/^docs\/public/, ''));
    return asset ? `${base}?v=${asset.revision}` : reference;
  });
  if (text !== before) fs.writeFileSync(file, text);
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['public', '.vitepress'].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (file.endsWith('.md')) update(file);
  }
}
walk('docs');
for (const file of fs.readdirSync('.').filter(file => /^README.*\.md$/.test(file))) update(file);
console.log('Screenshot dimensions and content revisions synchronized.');
