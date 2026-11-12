import type { MarkdownRenderer } from 'vitepress'

/** Group product-guide prose and its matching capture during SSR. Keeping this
 * in the Markdown renderer gives every translation the same responsive layout
 * without moving elements after hydration or duplicating article content. */
export function guideLayout(md: MarkdownRenderer) {
  md.core.ruler.after('block', 'product-guide-layout', state => {
    const classes = String(state.env.frontmatter?.pageClass ?? '').split(/\s+/)
    if (!classes.some(name => ['android-ide-page', 'seo-product-guide', 'mobile-ide-article'].includes(name))) return

    type Token = typeof state.tokens[number]
    const groups: Token[][] = [[]]
    for (const token of state.tokens) {
      if (token.type === 'heading_open' && token.tag === 'h2' && token.level === 0) groups.push([])
      groups[groups.length - 1].push(token)
    }

    const markup = (content: string): Token => {
      const token = new state.Token('html_block', '', 0)
      token.content = `${content}\n`
      token.block = true
      return token
    }
    const isCapture = (token: Token) => token.type === 'html_block'
      && /^<(?:div|figure)\b[^>]*class="(?:android-ide-media|seo-phone-capture|mobile-ide-screenshot|doc-screenshots)"/.test(token.content)
      && (token.content.match(/<(?:img\b|DocScreenshot\b)/g) ?? []).length === 1

    state.tokens = groups.flatMap((tokens, index) => {
      if (!tokens.length) return []
      const captures = tokens.filter(isCapture)
      // An individual phone capture can sit beside its copy. Galleries and
      // wide screenshots retain their original order inside the reading column.
      const paired = captures.length === 1
      const sectionClass = `product-guide-section${index === 0 ? ' product-guide-intro' : ''}${paired ? ' has-capture' : ''}`
      return [
        markup(`<section class="${sectionClass}"><div class="product-guide-copy">`),
        ...(paired ? tokens.filter(token => !isCapture(token)) : tokens),
        markup('</div>'),
        ...(paired ? [markup('<div class="product-guide-capture">'), ...captures, markup('</div>')] : []),
        markup('</section>')
      ]
    })
  })
}
