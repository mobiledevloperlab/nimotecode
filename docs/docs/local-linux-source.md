---
title: Local Linux Source and Licenses | NimoteCode
description: Download the complete corresponding source bundle for the Ubuntu environment bundled with NimoteCode Local Linux on Android, with SHA-256, manifests, provenance and third-party license notices.
---

<script setup>
import { data } from './local-linux-source.data.js'
import { computed } from 'vue'

const release = data.release

// The landing page in the release directory formats the same number this way;
// keep the two identical so a checksum never looks like it disagrees with itself.
const size = computed(() => {
  const bytes = Number(release.size) || 0
  return `${(bytes / 1024 / 1024).toFixed(1)} MiB (${bytes.toLocaleString('en-US')} bytes)`
})

const releaseDirectory = computed(() => `${release.releaseUrl}/`)
</script>

# Local Linux Source and Licenses

NimoteCode Local Linux bundles an Ubuntu root filesystem inside the Android app. That filesystem contains GPL, LGPL and other copyleft components, so the complete corresponding source for every shipped binary is published alongside the app — in the app's license pages and here.

The complete source bundle is several hundred megabytes, so it is hosted for download outside this website. Everything that identifies and verifies it stays on this page.

## Current release

| Field | Value |
| -- | -- |
| Product | {{ release.product }} |
| Version | {{ release.version }} |
| Distribution | {{ release.distribution }} |
| Architectures | {{ release.architectures.join(', ') }} |
| File | `{{ release.filename }}` |
| Size | {{ size }} |
| SHA-256 | `{{ release.sha256 }}` |

<div class="seo-cta">
  <p v-if="release.published"><strong>Complete corresponding source for NimoteCode Local Linux {{ release.version }}.</strong></p>
  <p v-else><strong>Source bundle publication is pending for NimoteCode Local Linux {{ release.version }}.</strong></p>
  <p class="seo-cta-actions">
    <a v-if="release.published" :href="release.downloadUrl" class="home-page-btn primary">Download Complete Source Bundle</a>
    <a :href="release.checksumsUrl" class="home-page-btn secondary">SHA256SUMS</a>
    <a :href="release.manifestUrl" class="home-page-btn secondary">Source manifest</a>
  </p>
</div>

The bundle is published at a versioned URL and is never replaced in place. Verify the download before unpacking:

<pre><code>curl -O {{ release.downloadUrl }}
sha256sum {{ release.filename }}</code></pre>

The metadata this page renders from is available as machine-readable JSON: [`source-download.json`](/opensource/local-linux/source-download.json).

## What the bundle contains

The archive holds the corresponding source for the third-party components of the bundled Ubuntu root filesystem: the exact `.dsc`, `.orig.tar` and `.debian.tar` artifacts for every source package the root filesystem requires source delivery for, together with the package inventories that tie them to the binaries shipped in the app.

It does **not** contain NimoteCode proprietary application source, so it is not a build input for the app itself. The PRoot and talloc executables that ship separately are covered by their own corresponding-source delivery in the app's license files; their license texts are mirrored in <a :href="release.licensesUrl">the release's `licenses/` directory</a>.

## Build scripts, manifests and licenses

Everything used to build and verify this release is version controlled, so the whole chain can be audited or replayed. Each release is also published as a browsable directory with the same files:

- <a :href="releaseDirectory">Local Linux {{ release.version }} release directory</a> — `SHA256SUMS`, `source-manifest.json`, manifests, provenance, license notices and checksums, on this site.
- <a :href="release.metadataRepositoryUrl">The same metadata in the repository</a> — the source of record for the release.
- <a :href="release.repositoryUrl + '/tree/main/docs/public/opensource/local-linux'">All published Local Linux releases</a> — every version, and how the directory is laid out.
- <a :href="release.buildScriptUrl">Publishing script</a> — `scripts/publish-local-linux-source.sh`, which builds the bundle through the existing Local Linux build chain, validates it, uploads it to object storage and rewrites the metadata above.

The corresponding source is delivered under the licenses of the individual components, not under the NimoteCode license. Product documentation for the environment itself is in [Android Local Linux](/docs/local-linux).

Related: [Android Local Linux](/docs/local-linux) · [Terms of Service](/terms) · [Privacy Policy](/privacy)
