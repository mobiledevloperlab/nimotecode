---
name: nimote-seo
description: Audit and maintain NimoteCode's website SEO, GEO and answer-engine readiness using the pinned Claude SEO tools and existing VitePress and Astro checks.
---

Use [the operating runbook](../../../docs/website-optimization/seo-operations.md) for recurring audits, release verification and evidence capture.

- Run `bash scripts/seo/claude-seo.sh setup` from the repo root. Use its `page` command on public HTML and on generated pages, and its `geo` command on public production URLs. The source checkout under `.seo-cache/claude-seo` contains the upstream technical, page, geo, schema, hreflang, sitemap and drift skills as reference material. Follow the repository runbook for execution.
- Check release claims against `theme/data/releases.ts`, the store build, the account and subscription docs and the public companion-product releases. Version-specific claims require store or release evidence. Keep store identifiers and stable application IDs intact.
- Report live HTTP, built HTML, field data and AI-answer observations with their dates and access status. Simulated user agents verify HTTP responses from the test network. Verify actual crawler activity with platform tools or origin logs.
- Keep local reports and authorized metrics out of public site paths. Run `npm run docs:build` and `npm run docs:check` before proposing changes.
