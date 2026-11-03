import { mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
const lang = process.env.BLOG_LANG === 'zh' ? 'zh' : 'en'
const source = resolve('..', 'docs', ...(lang === 'zh' ? ['zh', 'blog'] : ['blog']))
const target = resolve('src/content/posts')
rmSync(target, { recursive: true, force: true })
mkdirSync(target, { recursive: true })
for (const file of readdirSync(source).filter(name => name.endsWith('.md') && name !== 'index.md')) {
  let text = readFileSync(resolve(source, file), 'utf8')
  const date = text.match(/^date:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]
  const updated = text.match(/^lastUpdated:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1]
  if (!date) throw new Error(`Missing date: ${file}`)
  text = text.replace(/^---\n/, `---\npubDatetime: ${date}T00:00:00Z\n${updated ? `modDatetime: ${updated}T00:00:00Z\n` : ''}`)
  text = text.replace(/\n# [^\n]+\n/, '\n').replace(/\n<p class="article-meta">[^\n]*<\/p>\n/, '\n')
  const images = { sshIde: '/images/placeholders/local-file-browser.png', sourceControl: '/images/placeholders/source-control-changes.png' }
  text = text.replace(/<ImagePlaceholder image-key="([^"]+)" alt="([^"]+)"\s*\/>/g, (_, key, alt) => {
    if (!images[key]) throw new Error(`Unknown image key: ${key}`)
    return `<img src="${images[key]}" alt="${alt}" width="1080" height="2376" loading="lazy">`
  })
  // Preserve the original aspect ratio and identify portrait screenshots for the reading layout.
  text = text.replace(/<img\b[^>]*>/g, tag => {
    const width = Number(tag.match(/\bwidth=["'](\d+)["']/)?.[1])
    const height = Number(tag.match(/\bheight=["'](\d+)["']/)?.[1])
    return width && height && height > width * 1.2 ? tag.replace('<img', '<img data-blog-portrait="true"') : tag
  })
  writeFileSync(resolve(target, file), text)
}
