# Mobile Developer Lab

This blog is based on [AstroPaper](https://github.com/satnaing/astro-paper), copyright Sat Naing and contributors, used under the MIT license in `LICENSE`.

Articles are maintained in `../docs/blog` and `../docs/zh/blog`. The build reads those files and generates Astro content; do not edit `src/content/posts` directly. Add matching translations with the same filename to preserve the language switch. Frontmatter must include `title`, `description`, and `date` (and may include `lastUpdated`, `author`, and `tags`). Images and links should use site-root paths.

Use Node 24, matching deployment. From the repository root, run `nvm install` and `nvm use` before installing dependencies or starting the blog. The root `.nvmrc` also applies when running `nvm use` inside this directory. Astro requires Node >=22.23.4; Node 20 is unsupported.

Install dependencies with `npm ci` in this directory. Run `npm run dev` after `node prepare-posts.mjs` for an English preview; set `BLOG_LANG=zh` for Chinese. From the repository root, `npm run docs:build` builds VitePress, then builds the blog for `/blog` and `/zh/blog`, combines the results and updates the root sitemap and `/feed.xml`. `npm run docs:check` validates the combined output. Node 24 is used in deployment.
