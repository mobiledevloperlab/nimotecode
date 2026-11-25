import { defineConfig, type HeadConfig, type TransformContext, type DefaultTheme } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { imageOptimizerCacheKey } from '../../scripts/image-optimizer-cache.mjs'
import { productCopy } from './theme/product'
import productLinks from './theme/data/product-links.json'
import homeTranslations from './theme/i18n/home.json'
import { products as majorCompetitors } from './theme/data/majorCompetitors.mjs'
import { guideLayout } from './guide-layout'
import { docsSidebar } from './docs-navigation'

const imageEncodingOptions = {
  svg: { multipass: true },
  png: { quality: 80, compressionLevel: 9 },
  jpeg: { quality: 80 },
  webp: { quality: 80 }
}

const imageCacheKey = imageOptimizerCacheKey(
  resolve('docs/public'),
  imageEncodingOptions,
  readFileSync(resolve('package-lock.json'))
)

function communityLinks(zh: boolean): DefaultTheme.SocialLink[] {
  return [
    { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm1 3v14h2V5H6Zm5 1v2h7V6h-7Zm0 5v2h7v-2h-7Zm0 5v2h5v-2h-5Z"/></svg>' }, link: zh ? '/zh/blog/' : '/blog/', ariaLabel: zh ? '博客：移动开发者实验室' : 'Blog: Mobile Developer Lab' },
    { icon: 'github', link: 'https://github.com/mobiledevloperlab' },
    { icon: 'twitter', link: 'https://x.com/mobiledevlab' },
    { icon: 'discord', link: 'https://discord.gg/tTxbpqYmhR' }
  ]
}

const siteUrl = 'https://nimotecode.com'
const brandLogo = `${siteUrl}/app_icon.png`
const socialImage = `${siteUrl}/screenshots/nimote-pro.webp?v=0fc5e74d`
const localeConfig = {
  root: { lang: 'en-US', path: '' },
  zh: { lang: 'zh-CN', path: '/zh' },
  ja: { lang: 'ja-JP', path: '/ja' },
  ko: { lang: 'ko-KR', path: '/ko' },
  es: { lang: 'es-ES', path: '/es' }
} as const

const localePathPattern = /^\/(?:zh|ja|ko|es)(?=\/|$)/

function docsUi(locale: 'zh' | 'ja' | 'ko' | 'es') {
  const [outline, previous, next, menu, top, languages] = {
    zh: ['本页目录', '上一页', '下一页', '文档目录', '返回顶部', '选择语言'],
    ja: ['このページの内容', '前のページ', '次のページ', 'ドキュメント一覧', 'ページ上部へ', '言語を選択'],
    ko: ['이 페이지의 내용', '이전 페이지', '다음 페이지', '문서 목록', '맨 위로', '언어 선택'],
    es: ['En esta página', 'Página anterior', 'Página siguiente', 'Documentación', 'Volver arriba', 'Seleccionar idioma']
  }[locale]
  return {
    outline: { label: outline },
    docFooter: { prev: previous, next },
    sidebarMenuLabel: menu,
    returnToTopLabel: top,
    langMenuLabel: languages
  }
}

function useCasesSidebar(prefix: string, labels: { heading: string, agentDemo: string, workspaceDemo: string, terminalTools: string }) {
  return {
    [`${prefix}/use-cases/`]: [
      {
        text: labels.heading,
        collapsed: false,
        items: [
          { text: labels.agentDemo, link: `${prefix}/use-cases/` },
          { text: labels.workspaceDemo, link: `${prefix}/use-cases/mobile-workspace-demo` },
          { text: labels.terminalTools, link: `${prefix}/use-cases/terminal-ai-tools` }
        ]
      }
    ]
  }
}

function normalizePath(path: string): string {
  if (!path || path === 'index.md' || path === '/index.md') return '/'
  let normalized = path
    .replace(/\\/g, '/')
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  normalized = normalized.replace(/\/+/g, '/')
  return normalized === '' ? '/' : normalized
}

function canonicalUrl(path: string): string {
  const normalized = normalizePath(path)
  return normalized === '/' ? siteUrl : `${siteUrl}${normalized}`
}

function pageCanonicalUrl(context: TransformContext): string {
  const explicit = asContent(context.pageData.frontmatter.canonical, '')
  return explicit || canonicalUrl(context.pageData.relativePath)
}

function asContent(value: unknown, fallback: string): string {
  if (typeof value === 'string' && value.trim()) return value
  return fallback
}

const localizedSeo = {
  ja: { title: '日本語', description: '日本語版。' },
  ko: { title: '한국어', description: '한국어 버전입니다.' },
  es: { title: 'Español', description: 'Disponible en español.' }
} as const

function localizedSeoValue(path: string, value: string, kind: 'title' | 'description'): string {
  const locale = pageLocaleKey(path)
  // Fully localized landing pages must keep their own titles and descriptions.
  if (/^(?:ja|ko|es)\/(?:index|android-ide|android-ssh-client|iphone-ssh-client|ipad-coding|termius-alternative|blink-shell-alternative|claude-code-from-phone|codex-from-phone|mobile-ai-coding|mobile-ide|ssh-ide|remote-coding|code-from-phone|docs\/windows-ssh-sftp)\.md$/.test(path)) return value
  const translation = localizedSeo[locale as keyof typeof localizedSeo]
  if (!translation || !value) return value

  const suffix = translation[kind]
  // Page data can pass through this helper more than once in dev mode. Keep
  // the operation idempotent so the locale marker never accumulates.
  if (value.endsWith(suffix)) return value
  return kind === 'title' ? `${value} | ${suffix}` : `${value} ${suffix}`
}

function pageDescription(context: TransformContext, title: string): string {
  const explicit = asContent(context.pageData.description, '')
  if (explicit) return explicit

  const normalizedTitle = title.trim()
  if (!normalizedTitle || normalizedTitle === 'NimoteCode') {
    return asContent(context.siteConfig.site.description, 'NimoteCode mobile developer workspace.')
  }

  return `${normalizedTitle} page on NimoteCode, the Mobile AI Development Workspace for SSH, terminal, Git, AI Chat and Agent, debugging, tasks, and sync/cache workflows.`
}

function stripLocalePrefix(path: string): string {
  return path.replace(localePathPattern, '') || '/'
}

function titleCase(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function languageForPath(path: string): string {
  const localeKey = pageLocaleKey(path)
  if (localeKey === 'zh') return 'zh-CN'
  if (localeKey === 'ja') return 'ja-JP'
  if (localeKey === 'ko') return 'ko-KR'
  if (localeKey === 'es') return 'es-ES'
  return 'en-US'
}

function openGraphLocale(path: string): string {
  return languageForPath(path).replace('-', '_')
}

function localeAlternates(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const suffix = normalized === '/' ? '' : normalized
  const strippedPath = suffix.replace(localePathPattern, '')
  const stripped = strippedPath === '/' ? '' : strippedPath
  const entries = Object.values(localeConfig).flatMap((locale) => {
    const localePath = `${locale.path}${stripped}` || '/'
    const sourceRelativePath = localePath.replace(/^\//, '').replace(/\/$/, '')
    // A locale root such as /zh maps to zh/index.md, whereas most routes map
    // to a sibling markdown file (for example, /zh/ssh-ide -> zh/ssh-ide.md).
    // Check both forms so homepage alternates are not accidentally omitted.
    const sourcePaths = sourceRelativePath
      ? [`${sourceRelativePath}.md`, `${sourceRelativePath}/index.md`]
      : ['index.md']

    // Do not advertise a translated URL unless the page actually exists.
    // This matters for English-only SEO landing pages and avoids hreflang 404s.
    if (!sourcePaths.some((sourcePath) => existsSync(resolve(process.cwd(), 'docs', sourcePath)))) return []
    const isDirectoryIndex = sourceRelativePath
      && existsSync(resolve(process.cwd(), 'docs', `${sourceRelativePath}/index.md`))
      && !existsSync(resolve(process.cwd(), 'docs', `${sourceRelativePath}.md`))
    const hrefPath = isDirectoryIndex ? `${localePath.replace(/\/$/, '')}/` : localePath
    const href = hrefPath === '/' ? siteUrl : `${siteUrl}${hrefPath}`
    return [['link', { rel: 'alternate', hreflang: locale.lang, href }] as HeadConfig]
  })
  const english = entries.find(([, attrs]) => attrs.hreflang === localeConfig.root.lang)
  if (english) entries.push(['link', { rel: 'alternate', hreflang: 'x-default', href: english[1].href }])
  return entries
}

function pageSchemas(context: TransformContext): object[] {
  const url = pageCanonicalUrl(context)
  const title = asContent(context.pageData.title, 'NimoteCode')
  const description = pageDescription(context, title)
  const inLanguage = languageForPath(context.pageData.relativePath)
  const normalizedPath = normalizePath(context.pageData.relativePath)
  const route = stripLocalePrefix(normalizedPath)
  const isHome = route === '/'
  const isDownload = route === '/download'
  const homeLocale = (normalizedPath.split('/')[1] || 'en') as keyof typeof homeTranslations
  const homeCopy = homeTranslations[homeLocale] || homeTranslations.en

  const schemas: object[] = []

  // Homepages describe the application; localized homepages are not articles.
  // Stable IDs identify the same organization, website and app across locales.
  if (isHome) {
    schemas.push(
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'NimoteCode',
        url: siteUrl,
        logo: brandLogo,
        sameAs: [
          'https://github.com/mobiledevloperlab',
          'https://x.com/mobiledevlab'
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'NimoteCode',
        url: siteUrl,
        description: websiteDescription(inLanguage),
        inLanguage,
        publisher: { '@id': `${siteUrl}/#organization` }
      }
    )
  }

  if (isHome || isDownload) {
    schemas.push(
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#application`,
        inLanguage,
        name: 'NimoteCode',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Android, iOS, iPadOS',
        url: siteUrl,
        image: socialImage,
        description,
        publisher: { '@id': `${siteUrl}/#organization` },
        downloadUrl: [productLinks.android, productLinks.ios],
        sameAs: [productLinks.repository, productLinks.android, productLinks.ios],
        ...(isHome ? { featureList: [...homeCopy.facts, ...homeCopy.features.map(([name]) => name), ...homeCopy.capabilities.map(([name]) => name)] } : {}),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          url: `${siteUrl}${normalizedPath.match(localePathPattern)?.[0] || ''}/download`
        }
      }
    )
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url.replace(/\/$/, '')}/#webpage`,
    name: title,
    description,
    url,
    inLanguage,
    isPartOf: { '@id': `${siteUrl}/#website` },
    ...(isHome || isDownload ? { mainEntity: { '@id': `${siteUrl}/#application` } } : {})
  })

  if (route.startsWith('/docs/') && context.pageData.frontmatter.noindex !== true) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: title,
      description,
      url,
      inLanguage,
      mainEntityOfPage: { '@id': `${url.replace(/\/$/, '')}/#webpage` },
      author: { '@id': `${siteUrl}/#organization`, '@type': 'Organization', name: 'NimoteCode' }
    })
  }

  if (context.pageData.frontmatter.noindex === true) {
    return schemas
  }

  const breadcrumb = breadcrumbSchema(context)
  if (breadcrumb) {
    schemas.push(breadcrumb)
  }

  const compareList = compareItemListSchema(context)
  if (compareList) {
    schemas.push(compareList)
  }

  const faq = faqSchema(context)
  if (faq) {
    schemas.push(faq)
  }

  const video = videoSchema(context)
  if (video) {
    schemas.push(video)
  }

  return schemas
}

function videoSchema(context: TransformContext): object | null {
  const value = context.pageData.frontmatter.video
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const video = value as Record<string, unknown>
  const name = asContent(video.name, '')
  const description = asContent(video.description, '')
  const thumbnailUrl = asContent(video.thumbnailUrl, '')
  const uploadDate = asContent(video.uploadDate, '')
  const contentUrl = asContent(video.contentUrl, '')

  if (!name || !description || !thumbnailUrl || !uploadDate || !contentUrl) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl: asContent(video.embedUrl, contentUrl),
    url: pageCanonicalUrl(context),
    publisher: {
      '@type': 'Organization',
      name: 'NimoteCode',
      logo: {
        '@type': 'ImageObject',
        url: brandLogo
      }
    }
  }
}

function compareItemListSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  if (!/^\/(?:(?:zh|ja|ko|es)\/)?compare\/mobile-ai-development-tools$/.test(normalized)) return null
  const locale = normalized.match(/^\/(zh|ja|ko|es)\//)?.[1] || 'en'
  const labels: Record<string, [string, string]> = {
    en: ['Mobile development tools compared', 'en-US'],
    zh: ['移动开发工具对比', 'zh-CN'],
    ja: ['モバイル開発ツールの比較', 'ja-JP'],
    ko: ['모바일 개발 도구 비교', 'ko-KR'],
    es: ['Comparativa de herramientas de desarrollo móvil', 'es-ES']
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: labels[locale][0],
    inLanguage: labels[locale][1],
    itemListElement: majorCompetitors.map(([name, url], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url
    }))
  }
}

function breadcrumbSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const localePrefix = normalized.match(localePathPattern)?.[0] || ''
  const stripped = stripLocalePrefix(normalized)
  if (stripped === '/') return null

  const locale = pageLocaleKey(context.pageData.relativePath)
  const homeLabels = { root: 'Home', zh: '首页', ja: 'ホーム', ko: '홈', es: 'Inicio' }
  const items = [{
    '@type': 'ListItem',
    position: 1,
    name: homeLabels[locale as keyof typeof homeLabels] || homeLabels.root,
    item: localePrefix ? `${siteUrl}${localePrefix}/` : `${siteUrl}/`
  }]

  const segments = stripped.split('/').filter(Boolean)
  let parentPath = localePrefix
  segments.slice(0, -1).forEach((segment) => {
    parentPath += `/${segment}`
    const source = resolve('docs', parentPath.slice(1))
    const file = [`${source}.md`, `${source}/index.md`].find((candidate) => existsSync(candidate))
    if (!file) return
    const frontmatter = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || ''
    if (/^noindex:\s*true\s*$/m.test(frontmatter)) return
    const label = frontmatter.match(/^title:\s*(.+)$/m)?.[1].trim().replace(/^["']|["']$/g, '')
    items.push({
      '@type': 'ListItem',
      position: items.length + 1,
      name: label || titleCase(segment),
      item: `${siteUrl}${parentPath}${file.endsWith('/index.md') ? '/' : ''}`
    })
  })

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: asContent(context.pageData.title, titleCase(segments.at(-1) || '')),
    item: pageCanonicalUrl(context)
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

const faqMarkdown = unified().use(remarkParse)

interface FaqNode {
  type: string
  value?: string
  children?: FaqNode[]
}
function faqText(node: FaqNode): string {
  return node.value ?? node.children?.map(faqText).join('') ?? ''
}

function faqSchema(context: TransformContext): object | null {
  const page = context.pageData.relativePath
  const sourcePath = resolve('docs', page)
  const source = existsSync(sourcePath) ? readFileSync(sourcePath, 'utf8') : ''
  const visible = source.match(/<!-- faq:start -->([\s\S]*?)<!-- faq:end -->/)?.[1]
  if (!visible) return null

  const depth = stripLocalePrefix(normalizePath(page)) === '/docs/faq' ? 2 : 3
  const blocks = faqMarkdown.parse(visible).children
  const mainEntity = blocks.flatMap((block, index) => {
    if (block.type !== 'heading' || block.depth !== depth) return []
    const answer = blocks[index + 1]
    if (answer?.type !== 'paragraph') throw new Error(`Missing FAQ answer: ${page}`)
    const text = faqText(answer).replace(/\s+/g, ' ').trim()
    return [{ '@type': 'Question', name: faqText(block), acceptedAnswer: { '@type': 'Answer', text } }]
  })
  if (!mainEntity.length) throw new Error(`Empty FAQ section: ${page}`)
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity }
}

// Load the primary UI font asynchronously so it never blocks first paint.
// The fallback stack in tokens.css renders immediately, and the web font
// swaps in once the stylesheet finishes loading.
const FONT_LATIN = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap'
const FONT_ZH = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap'
const FONT_JA = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap'
const FONT_KO = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap'

function fontByLocale(lang: string): string {
  if (lang.startsWith('zh')) return FONT_ZH
  if (lang.startsWith('ja')) return FONT_JA
  if (lang.startsWith('ko')) return FONT_KO
  return FONT_LATIN
}

function fontLinks(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const stripped = suffixToLocaleKey(normalized)
  const lang = stripped === 'zh' ? 'zh-CN' : stripped === 'ja' ? 'ja-JP' : stripped === 'ko' ? 'ko-KR' : stripped === 'es' ? 'es-ES' : 'en-US'
  const href = fontByLocale(lang)
  return [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Async pattern: stylesheet is print-only until the browser swaps it to all.
    // This keeps the font off the critical render path.
    ['link', { rel: 'preload', as: 'style', href }],
    ['link', { rel: 'stylesheet', href, media: 'print', onload: "this.media='all'" }],
    // noscript fallback so the font still works without JS.
    ['noscript', {}, `<link rel="stylesheet" href="${href}">`]
  ]
}

function suffixToLocaleKey(normalized: string): string {
  const m = normalized.match(/^\/(zh|ja|ko|es)(?:\/|$)/)
  return m ? m[1] : ''
}

function pageLocaleKey(path: string): string {
  const normalized = normalizePath(path)
  return suffixToLocaleKey(normalized)
}

function websiteDescription(inLanguage: string): string {
  if (inLanguage === 'zh-CN') {
    return 'NimoteCode 是面向移动场景的 AI 开发工作区：集代码编辑器、SSH 终端、Git、AI Chat 与 Agent、LSP、调试器、任务与同步/缓存于一体。'
  }
  if (inLanguage === 'ja-JP') return 'NimoteCode は、コードエディタ、SSH ターミナル、Git、AI Chat と Agent を備えたモバイル AI 開発ワークスペースです。'
  if (inLanguage === 'ko-KR') return 'NimoteCode는 코드 편집기, SSH 터미널, Git, AI Chat 및 Agent를 제공하는 모바일 AI 개발 워크스페이스입니다.'
  if (inLanguage === 'es-ES') return 'NimoteCode es un espacio de trabajo de desarrollo con IA móvil con editor de código, terminal SSH, Git, AI Chat y Agent.'
  return 'NimoteCode is a mobile IDE and SSH workspace for Android, iPhone and iPad, with a code editor, terminal, Git and optional AI.'
}

export default defineConfig({
  // Policy pages expose a server-rendered, keyboard-accessible contents list.
  markdown: {
    headers: { level: [2] },
    config(md) { guideLayout(md) }
  },
  // Start with the product's dark canvas; keep the visitor's saved preference.
  appearance: 'dark',
  title: 'NimoteCode',
  titleTemplate: false,
  description: 'NimoteCode is a mobile AI development workspace: an SSH-enabled code editor with terminal, Git, AI Agent, LSP, debugger, tasks and sync/cache.',
  base: '/',
  lang: 'en-US',
  cleanUrls: true,
  // Everything under public/ is copied verbatim to the site root. Its markdown
  // files are published source metadata, not pages: rendering them would
  // duplicate them under /public/ with their own titles and canonical URLs.
  // The Cloudflare runbook is internal operations documentation, so it stays in
  // the repository without becoming a route on the public site.
  srcExclude: ['**/node_modules/**', '**/dist/**', 'public/**', 'cloudflare-r2-protection.md', 'repo-growth-audit.md', 'repo-growth-result.md', 'website-optimization/**'],
  // These retired workflow URLs are retained as 301 redirects in public/_redirects
  // so existing articles and external links continue to resolve to the single demo.
  ignoreDeadLinks: [/^\/(?:zh\/)?use-cases\/(?:remote-hotfix|on-call-diagnostics|ai-agent)\/?$/],
  sitemap: {
    hostname: siteUrl
  },
  // Locale copies share the English source frontmatter. Scope their rendered
  // metadata to the locale at build time, so localized URLs do not compete
  // with their canonical English counterparts in search results.
  transformPageData(pageData) {
    const title = localizedSeoValue(pageData.relativePath, pageData.title, 'title')
    const description = localizedSeoValue(pageData.relativePath, pageData.description, 'description')
    return { title, description }
  },
  transformHead(context) {
    const url = pageCanonicalUrl(context)
    const title = asContent(context.pageData.title, 'NimoteCode')
    const description = pageDescription(context, title)
    const image = asContent(context.pageData.frontmatter.image, socialImage)
    const isPageNotFound = normalizePath(context.pageData.relativePath) === '/404'
    const noIndex = isPageNotFound || context.pageData.frontmatter.noindex === true
    const robotsContent = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    return [
      ['link', { rel: 'canonical', href: url }],
      ...fontLinks(context.pageData.relativePath),
      ['meta', { property: 'og:site_name', content: 'NimoteCode' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: `${title} — NimoteCode` }],
      ['meta', { property: 'og:locale', content: openGraphLocale(context.pageData.relativePath) }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:site', content: '@nimotecode' }],
      ['meta', { name: 'robots', content: robotsContent }],
      ['meta', { name: 'author', content: 'NimoteCode' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'NimoteCode' }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(pageSchemas(context)).replace(/</g, '\\u003c')],
      ...(noIndex ? [] : localeAlternates(context.pageData.relativePath))
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/app_icon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/app_icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#4f46e5' }],
    ['meta', { name: 'theme-color', content: '#4338ca', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ],

  themeConfig: {
    sidebarMenuLabel: 'Docs menu',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: { translations: { button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' }, modal: { displayDetails: '显示详情', resetButtonTitle: '清除搜索', backButtonTitle: '返回', noResultsText: '没有找到相关结果', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } } } },
          ja: { translations: { button: { buttonText: 'ドキュメントを検索', buttonAriaLabel: 'ドキュメントを検索' } } },
          ko: { translations: { button: { buttonText: '문서 검색', buttonAriaLabel: '문서 검색' } } },
          es: { translations: { button: { buttonText: 'Buscar documentación', buttonAriaLabel: 'Buscar documentación' } } }
        }
      }
    },
    siteTitle: 'NimoteCode',
    logo: {
      light: '/app_icon.png',
      dark: '/app_icon.png'
    },
    socialLinks: communityLinks(false),
    editLink: {
      pattern: 'https://github.com/mobiledevloperlab/nimote_issues/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Product', link: '/features' },
          { text: 'Pro', link: '/pro' },
          { text: 'Explore', link: '/resources/', activeMatch: '^/(?:resources|use-cases|compare)(?:/|$)' },
          { text: 'Docs', link: '/docs/quick-start' },
          { text: 'Updates', link: '/releases/' },
          { text: 'Download', link: '/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/blog/': [
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'All Guides', link: '/blog/' },
                { text: 'Mobile SSH & AI Tools Compared', link: '/blog/best-ssh-clients' },
                { text: 'How to Use Android as a Remote IDE with Tailscale and NimoteCode: Free SSH Access to Mac and Linux', link: '/blog/tailscale-ssh-android-mac-linux' }
              ]
            },
            {
              text: 'Build Log',
              collapsed: false,
              items: [
                { text: 'Why I Built a Mobile IDE', link: '/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + Mobile Coding Is Still Broken', link: '/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter Code Editors Broke Down', link: '/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: '~90% AI-Generated Code, 6 Months', link: '/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'Can an AI Agent Code From a Phone?', link: '/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          ...docsSidebar(''),
          '/use-cases/': [
            {
              text: 'Workflows',
              collapsed: false,
              items: [
                { text: 'Agent build demo', link: '/use-cases/' },
                { text: 'Mobile Workspace Demo', link: '/use-cases/mobile-workspace-demo' },
                { text: 'Terminal AI Tools', link: '/use-cases/terminal-ai-tools' }
              ]
            }
          ],
          '/resources/': [
            {
              text: 'Resources',
              items: [
                { text: 'Mobile Development Resources', link: '/resources/' },
                { text: 'Android Local Linux', link: '/docs/local-linux' },
                { text: 'Remote SSH Workspaces', link: '/docs/ssh' },
                { text: 'Linux Presets', link: '/docs/local-linux/presets' }
              ]
            }
          ]
        }
      }
    },

    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        ...docsUi('zh'),
        socialLinks: communityLinks(true),
        nav: [
          { text: '产品', link: '/zh/features' },
          { text: 'Pro', link: '/zh/pro' },
          { text: '探索', link: '/zh/resources/', activeMatch: '^/zh/(?:resources|use-cases|compare)(?:/|$)' },
          { text: '文档', link: '/zh/docs/quick-start' },
          { text: '更新日志', link: '/zh/releases/' },
          { text: '下载', link: '/zh/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/zh/blog/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '全部指南', link: '/zh/blog/' },
                { text: '手机 SSH 与 AI 开发工具怎么选', link: '/zh/blog/best-ssh-clients' },
                { text: '如何使用 Android 作为远程 IDE：借助 Tailscale 和 NimoteCode 免费 SSH 访问 Mac 与 Linux', link: '/zh/blog/tailscale-ssh-android-mac-linux' }
              ]
            },
            {
              text: '构建日志',
              collapsed: false,
              items: [
                { text: '为什么我选择做移动 IDE', link: '/zh/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + 移动编程仍然破碎', link: '/zh/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter 编辑器为何崩坏', link: '/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: '约 90% AI 代码仍花 6 个月', link: '/zh/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'AI Agent 能在手机编程吗', link: '/zh/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          ...docsSidebar('/zh'),
          '/zh/use-cases/': [
            {
              text: '工作流',
              collapsed: false,
              items: [
                { text: 'Agent 构建演示', link: '/zh/use-cases/' },
                { text: '移动工作区演示', link: '/zh/use-cases/mobile-workspace-demo' },
                { text: '终端 AI 工具', link: '/zh/use-cases/terminal-ai-tools' }
              ]
            }
          ],
          '/zh/resources/': [
            {
              text: '技术资源',
              items: [
                { text: '移动开发技术资源', link: '/zh/resources/' },
                { text: 'Android 本地 Linux', link: '/zh/docs/local-linux' },
                { text: '远程 SSH 工作区', link: '/zh/docs/ssh' },
                { text: 'Linux Presets', link: '/zh/docs/local-linux/presets' }
              ]
            }
          ]
        }
      }
    },

    ja: {
      label: '日本語', lang: 'ja-JP', link: '/ja/',
      themeConfig: {
        ...docsUi('ja'), nav: [
          { text: '製品', link: '/ja/features' },
          { text: 'Pro', link: '/ja/pro' },
          { text: '探索', link: '/ja/resources/', activeMatch: '^/ja/(?:resources|use-cases|compare)(?:/|$)' },
          { text: 'ドキュメント', link: '/ja/docs/quick-start' },
          { text: 'アップデート', link: '/ja/releases/' },
          { text: 'ダウンロード', link: '/ja/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/ja'), ...useCasesSidebar('/ja', { heading: 'ワークフロー', agentDemo: 'Agent の構築デモ', workspaceDemo: 'モバイルワークスペースのデモ', terminalTools: 'ターミナル AI ツール' })
        }
      }
    },
    ko: {
      label: '한국어', lang: 'ko-KR', link: '/ko/',
      themeConfig: {
        ...docsUi('ko'), nav: [
          { text: '제품', link: '/ko/features' },
          { text: 'Pro', link: '/ko/pro' },
          { text: '둘러보기', link: '/ko/resources/', activeMatch: '^/ko/(?:resources|use-cases|compare)(?:/|$)' },
          { text: '문서', link: '/ko/docs/quick-start' },
          { text: '업데이트', link: '/ko/releases/' },
          { text: '다운로드', link: '/ko/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/ko'), ...useCasesSidebar('/ko', { heading: '워크플로', agentDemo: 'Agent 빌드 데모', workspaceDemo: '모바일 워크스페이스 데모', terminalTools: '터미널 AI 도구' })
        }
      }
    },
    es: {
      label: 'Español', lang: 'es-ES', link: '/es/',
      themeConfig: {
        ...docsUi('es'), nav: [
          { text: 'Producto', link: '/es/features' },
          { text: 'Pro', link: '/es/pro' },
          { text: 'Explorar', link: '/es/resources/', activeMatch: '^/es/(?:resources|use-cases|compare)(?:/|$)' },
          { text: 'Documentación', link: '/es/docs/quick-start' },
          { text: 'Novedades', link: '/es/releases/' },
          { text: 'Descargar', link: '/es/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/es'), ...useCasesSidebar('/es', { heading: 'Flujos de trabajo', agentDemo: 'Demo de un Agent', workspaceDemo: 'Demo de espacio de trabajo móvil', terminalTools: 'Herramientas de IA en terminal' })
        }
      }
    }
  },

  outDir: './.vitepress/dist',
  assetsDir: './assets',

  vite: {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|webp|avif)$/i,
        exclude: [
          'app_icon.png',
          'favicon.ico'
        ],
        includePublic: true,
        cache: true,
        cacheLocation: `node_modules/.vite-image-optimizer/${imageCacheKey}`,
        logStats: true,
        ansiColors: true,
        ...imageEncodingOptions
      })
    ]
  }
})
