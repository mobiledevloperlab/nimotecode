---
title: Repository Growth Audit
description: Pre-change audit of the NimoteCode website repository and the separate Linux Presets repository.
noindex: true
---

# Repository Growth Audit

## Current problems

- The main repository already contains a substantial product README and VitePress site, but it is still presented mainly as a product/site repository. It has no first-class `resources/`, `examples/`, or Presets landing areas for developers discovering generic mobile-development topics.
- The local Git remote is configured as `nimotecode/nimotecode-mobile-ide`, while the authoritative public repository address is `mobiledevloperlab/nimotecode`. Public links must consistently use the latter; the local remote configuration should be corrected separately by a maintainer if it is not intentional.
- Android Local Linux documentation exists, including source/licence material, but it is product-oriented and does not yet explain the broader Local Linux architecture, compatibility, integrity model, or the independent presets project in one navigable documentation set.
- VitePress SEO foundations are already strong (canonical URLs, descriptions, Open Graph/Twitter cards, JSON-LD, sitemap, robots, viewport, favicon, noindex 404, and a post-build internal-link/duplicate-metadata check). The missing SEO opportunity is useful, linked technical content rather than more metadata or generated landing pages.
- The Linux Presets repository has four experimental presets (`minimal`, `python`, `web`, `cpp`), JSON schemas, checksums, shell policy tests, Ubuntu-container CI and protected Android PRoot release checks. Its README is technically accurate but does not quickly expose its purpose, supported matrix, verification model, release mechanism, or upstream entry points.
- Linux Presets declares Ubuntu 24.04 rootfs inputs for ARM64 and AMD64, PRoot `5.1.107.92`, source URLs and SHA-256 values. It intentionally does not vendor a PRoot binary, rootfs, or proprietary application code. It currently has no Git remote configured, so its eventual public GitHub URL must be treated as a publishing convention until configured.

## SEO / Star opportunities

- Make the main README a developer landing page with clear Website, documentation, stores, resources, examples, presets, and Star calls to action.
- Publish a small set of durable, technical guides around Android Linux, remote development, mobile AI coding, SSH tools, Claude Code, and Codex. Each should answer a real question before describing NimoteCode's place in the workflow.
- Link resource pages to relevant product docs and examples, then link Local Linux docs to Presets. This creates crawlable paths without duplicating the presets source tree.
- Give the presets README an architecture/table-first overview and reciprocal links back to the project homepage, main repository, and Local Linux documentation.
- Use `mobiledevloperlab/nimotecode` as the authoritative main-project URL and avoid claiming a release, stability level, compatibility result, or download metric that has not been recorded.

## Keep

- The two repositories remain separate: the main project hosts product, documentation, learning content, and links; Linux Presets owns manifests, scripts, schemas, testing, compatibility records, and release assets.
- Existing VitePress SEO implementation, public Local Linux source/licence notices, bilingual documentation, redirects, sitemap filtering, and site checker.
- The Linux Presets manifest integrity model, Ubuntu/PRoot provenance, experimental status, architecture declarations, CI/release gates, GPL/source boundaries, and runtime test requirements.

## Add

- Main repository: curated `resources/`, workflow-oriented `examples/`, a small `presets/` gateway, and a coherent Local Linux documentation section covering overview, getting started, architecture, compatibility, security/integrity, presets, and troubleshooting.
- Main site: navigation and internal links for Resources and Local Linux/Presets, plus specific metadata for new indexable guides.
- Linux Presets: a concise, independent technical README with supported distro/architecture/runtime matrix, manifest and checksum workflow, testing status, release downloads, attribution, and reciprocal official links.

## Do not do

- Do not merge repositories, add a submodule, copy rootfs/PRoot/release archives into the website repository, or change preset install/runtime behaviour.
- Do not create large sets of thin SEO pages, duplicate existing Local Linux source/licence material, expose internal operations documents, or remove important existing documentation.
- Do not fabricate a GitHub remote, release availability, download number, benchmark, testimonial, or stable PRoot certification. Retain the experimental status stated by the preset manifests.
