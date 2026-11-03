import { createContentLoader } from 'vitepress'

declare const data: { url: string; title: string; description: string; date: string; tags: string[] }[]
export { data }

export default createContentLoader(['blog/*.md', 'zh/blog/*.md'], {
  transform(pages) {
    return pages
      .filter(({ url }) => !/\/blog\/$/.test(url) && !/\/blog\/index(?:\.html)?$/.test(url))
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title || '',
        description: frontmatter.description || '',
        date: String(frontmatter.date || ''),
        tags: frontmatter.tags || []
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  }
})
