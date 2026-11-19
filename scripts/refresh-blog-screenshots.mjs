// Compose marketing figures from real 2.4.1 captures without cropping app content.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
const root = 'docs/public';
const source = name => path.join(root, 'images/placeholders', name);
const groups = [
  { dirs: ['best-mobile-ides', 'ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide'], file: 'image-1.png', scenes: ['remote-workspace-connected.jpg', 'editor-code-selection.png', 'ai-plan-running.jpg'] },
  { dirs: ['best-mobile-ides', 'ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide'], file: 'image-2.png', scenes: ['terminal-command-output.png', 'source-control-changes.png', 'lsp-python-status.png'] },
  { dirs: ['best-mobile-ides', 'ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide'], file: 'image-3.png', scenes: ['debugger-standby.png', 'sync-cache-status.png'] },
  { dirs: ['best-mobile-ides', 'why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app'], file: 'image-4.png', scenes: ['remote-workspace-connected.jpg', 'editor-code-selection.png', 'ai-plan-running.jpg', 'terminal-command-output.png'] },
  { dirs: ['how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp'], file: 'cover.png', scenes: ['startup-light.jpg'] },
  { dirs: ['how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp'], file: 'nimotecode-win11.png', scenes: ['remote-connection-form.jpg', 'remote-directory-picker.jpg', 'remote-workspace-connected.jpg'] },
  { dirs: ['i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months'], file: 'image-1.png', scenes: ['editor-code-selection.png', 'terminal-command-output.png'] },
  { dirs: ['i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months'], file: 'image-2.png', scenes: ['source-control-changes.png', 'git-diff-view.jpg'] },
  { dirs: ['why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide'], file: 'image-1.png', scenes: ['editor-context-menu.jpg'] },
  { dirs: ['why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide'], file: 'image-2.png', scenes: ['source-control-changes.png', 'git-commit-details.jpg'] }
];
const inventory=[];
for (const group of groups) for (const dir of group.dirs) {
  const target=path.join(root,'blog',dir,group.file);
  const {width,height}=await sharp(target).metadata();
  const gap=Math.round(width*0.022), header=Math.round(height*0.075);
  const cellWidth=Math.floor((width-gap*(group.scenes.length+1))/group.scenes.length);
  const cellHeight=height-header-gap;
  const layers=[];
  for(let i=0;i<group.scenes.length;i++) {
    const bitmap=await sharp(source(group.scenes[i])).resize({width:cellWidth,height:cellHeight,fit:'inside'}).png().toBuffer();
    const meta=await sharp(bitmap).metadata();
    layers.push({input:bitmap,left:gap+i*(cellWidth+gap)+Math.floor((cellWidth-meta.width)/2),top:header+Math.floor((cellHeight-meta.height)/2)});
  }
  layers.push({input:Buffer.from(`<svg width="${width}" height="${header}"><text x="${gap}" y="${Math.round(header*0.65)}" fill="#d0d5d3" font-family="sans-serif" font-size="${Math.round(header*0.38)}">NimoteCode 2.4.1 · Android</text></svg>`),left:0,top:0});
  const bytes=await sharp({create:{width,height,channels:3,background:'#181a19'}}).composite(layers).png().toBuffer();
  fs.writeFileSync(target,bytes);
  inventory.push({file:target.replace(root+'/',''),captureVersion:'2.4.1',width,height,sha256:createHash('sha256').update(bytes).digest('hex'),sources:group.scenes});
}
// Posters identify the current UI; the linked videos retain their original footage.
for(const file of ['nimotecode-workspace-demo-poster.jpg','mobile-promot-poster.jpg','workspace-demo-poster.jpg','nimotecode-poster.jpg']){
 const target=path.join(root,'videos',file);const {width,height}=await sharp(target).metadata();
 const bytes=await sharp(path.join(root,'screenshots/nimote-pro.webp')).resize({width,height,fit:'contain',background:'#181a19'}).jpeg({quality:95,chromaSubsampling:'4:4:4'}).toBuffer();fs.writeFileSync(target,bytes);
 inventory.push({file:'videos/'+file,captureVersion:'2.4.1',width,height,sha256:createHash('sha256').update(bytes).digest('hex'),sources:['screenshots/nimote-pro.webp'],note:'Current UI poster; video footage is unchanged.'});
}
fs.writeFileSync(path.join(root,'screenshots/editorial-sources.json'),JSON.stringify({captureVersion:'2.4.1',images:inventory},null,2)+'\n');
console.log(`Refreshed ${inventory.length} editorial figures and video posters.`);
