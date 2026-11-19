import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const captures = process.argv[2];
const bundle = process.argv[3];
if (!captures || !bundle) throw new Error('Usage: node scripts/import-ios-screenshots.mjs <reviewed-simulator-captures> <built-app-bundle>');
const version = execFileSync('/usr/libexec/PlistBuddy', ['-c', 'Print :CFBundleShortVersionString', path.join(bundle,'Info.plist')], {encoding:'utf8'}).trim();
const build = execFileSync('/usr/libexec/PlistBuddy', ['-c', 'Print :CFBundleVersion', path.join(bundle,'Info.plist')], {encoding:'utf8'}).trim();
if (version !== '2.4.1' || build !== '66') throw new Error('Expected the verified 2.4.1+66 app build');
const names=['iphone-ssh','iphone-editor','iphone-terminal','iphone-agents','ipad-workspace','ipad-git'];
for(const name of names) if(!fs.existsSync(path.join(captures,name+'.png'))) throw new Error('Missing capture: '+name);
const images=[];
for(const name of names){
 const file=name+'.webp';const ipad=name.startsWith('ipad');
 const bytes=await sharp(path.join(captures,name+'.png')).resize({width:ipad?1200:720,withoutEnlargement:true}).webp({quality:92,effort:6}).toBuffer();
 const meta=await sharp(bytes).metadata();fs.writeFileSync(path.join('docs/public/images/ios',file),bytes);
 images.push({file,source:ipad?'iPad Pro 11-inch (M5), iOS 26.0 simulator':'iPhone 17 Pro, iOS 26.0 simulator',captureVersion:'2.4.1',buildNumber:'66',captureMethod:'xcrun simctl io screenshot',width:meta.width,height:meta.height,sha256:createHash('sha256').update(bytes).digest('hex')});
}
fs.writeFileSync('docs/public/images/ios/sources.json',JSON.stringify({sourceType:'ios-simulator',source:'Local build of the clean NimoteCode application checkout',sourceCommit:'cccee920fc044c4242b257c9893e2e749414ca59',checked:'2026-11-18',appVersion:'2.4.1',buildNumber:'66',description:'Real iPhone and iPad simulator captures of 2.4.1+66. SSH, terminal tests and Git use a temporary project on the local Mac; the AI capture shows the panel before provider configuration. Full frames are preserved; delivery files are resized WebP.',images},null,2)+'\n');
console.log('Imported 6 reviewed NimoteCode 2.4.1 iOS simulator captures.');
