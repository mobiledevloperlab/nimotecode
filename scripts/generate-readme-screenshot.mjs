import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import sharp from 'sharp';
const source='docs/public/screenshots/nimote-pro.webp';
const bytes=readFileSync(source);
const {width,height}=await sharp(bytes).metadata();
const radius=Math.round(width*0.012);
const embedded=await sharp(bytes).png().toBuffer();
// Preserve source pixels with a lossless PNG embedded in a self-contained SVG.
// GitHub strips inline CSS, so clipping and the subtle border live in the asset.
const svg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>NimoteCode development workspace</title><defs><clipPath id="frame"><rect width="${width}" height="${height}" rx="${radius}"/></clipPath></defs><image width="${width}" height="${height}" clip-path="url(#frame)" xlink:href="data:image/png;base64,${embedded.toString('base64')}"/><rect x="0.5" y="0.5" width="${width-1}" height="${height-1}" rx="${radius}" fill="none" stroke="#808080" stroke-opacity="0.24"/></svg>\n`;
writeFileSync('docs/public/screenshots/nimote-pro-framed.svg',svg);
const hash=createHash('sha256').update(bytes).digest('hex').slice(0,8);
for(const file of ['docs/.vitepress/config.ts','docs/.vitepress/theme/image-registry.ts']){
 let s=readFileSync(file,'utf8').replace(/nimote-pro\.webp\?v=[a-f0-9]+/g,`nimote-pro.webp?v=${hash}`);
 if(file.includes('image-registry'))s=s.replace('src: NIMOTE_PRO_SCREENSHOT, width: 1440, height: 810',`src: NIMOTE_PRO_SCREENSHOT, width: ${width}, height: ${height}`);
 writeFileSync(file,s);
}
console.log({width,height,radius,hash});

// Frame the existing thumbnails without changing their screenshot content.
// Keep original-image links in the READMEs so readers can inspect full-size captures.
for (const name of ['host-mode', 'editor-code-selection', 'ai-plan-running', 'terminal-command-output', 'source-control-changes']) {
  const thumbnail = readFileSync(`docs/public/images/placeholders/thumbs/${name}.webp`);
  const { width: frameWidth, height: frameHeight } = await sharp(thumbnail).metadata();
  const frameRadius = Math.round(frameWidth * 0.04);
  const png = await sharp(thumbnail).png().toBuffer();
  const framed = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${frameWidth}" height="${frameHeight}" viewBox="0 0 ${frameWidth} ${frameHeight}"><title>NimoteCode ${name}</title><defs><clipPath id="frame"><rect width="${frameWidth}" height="${frameHeight}" rx="${frameRadius}"/></clipPath></defs><image width="${frameWidth}" height="${frameHeight}" clip-path="url(#frame)" xlink:href="data:image/png;base64,${png.toString('base64')}"/><rect x="0.5" y="0.5" width="${frameWidth - 1}" height="${frameHeight - 1}" rx="${frameRadius}" fill="none" stroke="#808080" stroke-opacity="0.24"/></svg>\n`;
  writeFileSync(`docs/public/screenshots/${name}-framed.svg`, framed);
}
