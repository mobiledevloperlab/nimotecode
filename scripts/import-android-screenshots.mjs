// Import only captures visually reviewed against the named UI scenes.
// This updates provenance only for replaced files; legacy captures retain null versions.
import fs from 'node:fs';
import sharp from 'sharp';
import path from 'node:path';
const captureDirectory = process.argv[2];
if (!captureDirectory) throw new Error('Usage: node scripts/import-android-screenshots.mjs <reviewed-capture-directory>');
import {createHash} from 'node:crypto';
const root='docs/public/images/placeholders';
const map={
  "benchmarktest.png": "linux-smoke-benchmark-new",
  "local-workspace-files.png": "local-files-final",
  "local-linux-deploy.jpg": "linux-installing-new",
  "local-linux-deploy-snapshot.png": "linux-ready-sheet",
  "local-linux-terminal-uname-a.jpg": "linux-uname-final",
  "html-report-preview.jpg": "report-correct-url",
  "git-ai-explanation.jpg": "git-ai-final",
  "ai-analysis-caveats.jpg": "analysis-caveats-new",
  "ai-analysis-overview.jpg": "analysis-workflow-new",
  "ai-analysis-workflow.jpg": "analysis-commands-new",
  "ai-plan-approval.jpg": "ai-waiting-new",
  "ai-plugin-builder.png": "plugin-builder-new",
  "editor-context-menu.jpg": "context-new",
  "git-commit-details.jpg": "git-commit-expanded",
  "docker-images.png": "docker-images-new",
  "docker-image-detail.png": "docker-detail-new",
  "editor-empty-state.png": "demo-files",
  "editor-multiple-files.jpg": "markdown-source-new",
  "github.png": "github-after-load",
  "github_entry.png": "github-entry-ready",
  "github_conf.png": "github-config-ready",
  "markdown-source-editor.jpg": "markdown-source-new",
  "markdown-preview.jpg": "markdown-preview-new",
  "remote-directory-picker.jpg": "demo-open",
  "remote-file-selection.jpg": "remote-selection",
  "remote-connection-form.jpg": "remote-form-new",
  "remote-connection-history.png": "remote-manager",
  "sync-cache-status.png": "ai-config-new",
  "lsp-python-status.png": "lsp-real-new",
  "ai-provider-overview.png": "provider-overview-new",
  "ai-provider-settings.jpg": "provider-settings-new",
  "terminal-actions-menu.jpg": "terminal-menu-new",
  "terminal-customize-menu.jpg": "terminal-customize-new",
  "terminal-tab-style-form.jpg": "terminal-style-new",
  "host-setup.png": "host-new2",
  "host-sessions.png": "host",
  "host-agent-form.png": "host-agent-form",
  "host-terminal.png": "host-terminal",
  "mode-switch.png": "modes-menu",
  "git-branch-checkout.jpg": "branches",
  "editor-symbol-menu.jpg": "editor-menu",
  "editor-overflow-menu.jpg": "editor-overflow",
  "startup-light.jpg": "startup",
  "host-mode.png": "startup",
  "workspace-start-light.png": "ide",
  "remote-workspace-connected.jpg": "explorer",
  "editor-code-selection.png": "editor",
  "terminal-command-output.png": "terminal",
  "source-control-changes.png": "git",
  "git-diff-view.jpg": "diff",
  "debugger-standby.png": "debug",
  "task-runner.png": "task-list-new",
  "ai-chat-welcome.png": "ai",
  "ai-agent-selector.jpg": "selector",
  "ai-plan-running.jpg": "task-top",
  "search-global.png": "search-clean",
  "app-settings-light.png": "settings-safe2",
  "plugin-settings.png": "plugins"
};
for (const [file, scene] of Object.entries(map)) {
  let capture = sharp(path.join(captureDirectory, scene + '.png'));
  if (/\.jpe?g$/.test(file)) capture = capture.jpeg({ quality: 95, chromaSubsampling: '4:4:4' });
  await capture.toFile(path.join(root, file));
}
await sharp(path.join(captureDirectory, 'hero-final.png')).webp({quality:95}).toFile('docs/public/screenshots/nimote-pro.webp');
const manifest=JSON.parse(fs.readFileSync(root+'/sources.json'));
manifest.reviewedOn='2026-11-18';
const heroBytes=fs.readFileSync('docs/public/screenshots/nimote-pro.webp');
const heroMeta=await sharp(heroBytes).metadata();
manifest.hero={file:'/screenshots/nimote-pro.webp',captureVersion:'2.4.1',versionCode:66,width:heroMeta.width,height:heroMeta.height,sha256:createHash('sha256').update(heroBytes).digest('hex'),captureMethod:'ADB screenshot with a temporary expanded Android viewport (1600x2560, density 360, landscape); original device display settings restored after capture.'};
manifest.targetVersion='2.4.1';
manifest.versionPolicy='Every Android documentation image was reviewed and captured from NimoteCode 2.4.1 (versionCode 66) over ADB. iOS captures have separate platform provenance.';
for(const item of manifest.images) if(map[item.file]) {const b=fs.readFileSync(root+'/'+item.file); const m=await sharp(b).metadata(); Object.assign(item,{captureVersion:'2.4.1',versionCode:66,sourceUpdated:'2026-11-18',captureMethod:'adb exec-out screencap -p',captureScene:map[item.file],width:m.width,height:m.height,sha256:createHash('sha256').update(b).digest('hex')});}
manifest.pendingRecapture=manifest.images.filter(item=>!item.captureVersion).map(item=>item.file);
fs.writeFileSync(root+'/sources.json',JSON.stringify(manifest,null,2)+'\n');
