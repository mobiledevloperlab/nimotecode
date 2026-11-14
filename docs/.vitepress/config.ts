import { defineConfig, type HeadConfig, type TransformContext, type DefaultTheme } from 'vitepress'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { productCopy } from './theme/product'
import homeTranslations from './theme/i18n/home.json'
import { allCompetitors } from './theme/data/mobileDevelopmentCompetitors'
import { guideLayout } from './guide-layout'

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
const socialImage = `${siteUrl}/screenshots/nimote-pro.webp?v=8692016c`
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

type DocsSidebarLabels = {
  start: string
  quickStart: string
  workflow: string
  ssh: string
  localLinux: string
  ai: string
  plugins: string
  editor: string
  terminal: string
  search: string
  sourceControl: string
  lsp: string
  debug: string
  syncCache: string
  tasks: string
  docker: string
  overview: string
  gettingStarted: string
  architecture: string
  compatibility: string
  securityIntegrity: string
  presets: string
  troubleshooting: string
  reference: string
  account: string
  security: string
  settings: string
  notifications: string
  configuration: string
  sourceLicenses: string
  faq: string
}

function organizeDocsGroups(groups: DefaultTheme.SidebarItem[], prefix: string): DefaultTheme.SidebarItem[] {
  const locale = prefix.slice(1) || 'en'
  const names: Record<string, string[]> = {
    en: ['Getting started', 'Workspaces', 'Core development', 'AI and automation', 'Code intelligence and delivery', 'Android Local Linux', 'Settings and help'],
    zh: ['开始使用', '工作区', '核心开发', 'AI 与自动化', '代码智能与交付', 'Android 本地 Linux', '设置与帮助'],
    ja: ['はじめに', 'ワークスペース', 'コア開発', 'AI と自動化', 'コードインテリジェンスとデリバリー', 'Android Local Linux', '設定とヘルプ'],
    ko: ['시작하기', '작업 공간', '핵심 개발', 'AI 및 자동화', '코드 인텔리전스 및 배포', 'Android Local Linux', '설정 및 도움말'],
    es: ['Primeros pasos', 'Espacios de trabajo', 'Desarrollo principal', 'IA y automatización', 'Inteligencia de código y entrega', 'Android Local Linux', 'Ajustes y ayuda']
  }
  const items = groups.flatMap(group => group.items ?? [])
  const windowsLabels: Record<string, string> = {
    en: 'Windows SSH and SFTP', zh: 'Windows SSH 与 SFTP',
    ja: 'Windows SSH と SFTP', ko: 'Windows SSH 및 SFTP', es: 'SSH y SFTP en Windows'
  }
  items.push({ text: windowsLabels[locale], link: `${prefix}/docs/windows-ssh-sftp` })
  const labels: Record<string, string> = locale === 'zh' ? {
    ssh: '本地与 SSH 工作区', ai: 'AI 对话与 Agent', editor: '代码编辑器',
    terminal: '终端', search: '工作区搜索', 'source-control': '源代码管理',
    lsp: '语言服务（LSP）', debug: '调试', 'sync-cache': '同步与缓存',
    tasks: '任务', docker: 'Docker 与 Dev Containers', configuration: '模型与连接配置', plugins: '自定义插件'
  } : {}
  const group = (text: string, routes: string[], collapsed = false) => ({
    text, collapsed,
    items: routes.map(route => {
      const item = items.find(item => item.link === `${prefix}/docs/${route}`)
      if (!item) throw new Error(`Missing documentation navigation: ${prefix}/${route}`)
      return { ...item, text: labels[route] ?? item.text }
    })
  })
  return [
    group(names[locale][0], ['quick-start']),
    group(names[locale][1], ['ssh', 'windows-ssh-sftp']),
    group(names[locale][2], ['editor', 'terminal', 'search', 'source-control', 'tasks', 'docker']),
    group(names[locale][3], ['ai', 'configuration', 'plugins']),
    group(names[locale][4], ['lsp', 'debug', 'sync-cache']),
    { ...groups[2], text: names[locale][5], collapsed: false },
    group(names[locale][6], ['settings', 'account-subscription', 'security', 'notifications', 'local-linux-source', 'faq'], true)
  ]
}

function docsSidebar(prefix: string, labels: DocsSidebarLabels) {
  const docs = `${prefix}/docs`
  return {
    [`${docs}/`]: organizeDocsGroups([
      { text: labels.start, items: [{ text: labels.quickStart, link: `${docs}/quick-start` }] },
      {
        text: labels.workflow,
        collapsed: false,
        items: [
          { text: labels.ssh, link: `${docs}/ssh` },
          { text: labels.localLinux, link: `${docs}/local-linux` },
          { text: labels.ai, link: `${docs}/ai` },
          { text: labels.plugins, link: `${docs}/plugins` },
          { text: labels.editor, link: `${docs}/editor` },
          { text: labels.terminal, link: `${docs}/terminal` },
          { text: labels.search, link: `${docs}/search` },
          { text: labels.sourceControl, link: `${docs}/source-control` },
          { text: labels.lsp, link: `${docs}/lsp` },
          { text: labels.debug, link: `${docs}/debug` },
          { text: labels.syncCache, link: `${docs}/sync-cache` },
          { text: labels.tasks, link: `${docs}/tasks` },
          { text: labels.docker, link: `${docs}/docker` }
        ]
      },
      {
        text: labels.localLinux,
        collapsed: false,
        items: [
          { text: labels.overview, link: `${docs}/local-linux` },
          { text: labels.gettingStarted, link: `${docs}/local-linux/getting-started` },
          { text: labels.architecture, link: `${docs}/local-linux/architecture` },
          { text: labels.compatibility, link: `${docs}/local-linux/compatibility` },
          { text: labels.securityIntegrity, link: `${docs}/local-linux/security-integrity` },
          { text: labels.presets, link: `${docs}/local-linux/presets` },
          { text: labels.troubleshooting, link: `${docs}/local-linux/troubleshooting` }
        ]
      },
      {
        text: labels.reference,
        collapsed: false,
        items: [
          { text: labels.account, link: `${docs}/account-subscription` },
          { text: labels.security, link: `${docs}/security` },
          { text: labels.settings, link: `${docs}/settings` },
          { text: labels.notifications, link: `${docs}/notifications` },
          { text: labels.configuration, link: `${docs}/configuration` },
          { text: labels.sourceLicenses, link: `${docs}/local-linux-source` },
          { text: labels.faq, link: `${docs}/faq` }
        ]
      }
    ], prefix)
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
  const englishPath = stripped || '/'
  const englishHref = englishPath === '/' ? siteUrl : `${siteUrl}${englishPath}`
  entries.push(['link', { rel: 'alternate', hreflang: 'x-default', href: englishHref }])
  return entries
}

function pageSchemas(context: TransformContext): object[] {
  const url = pageCanonicalUrl(context)
  const title = asContent(context.pageData.title, 'NimoteCode')
  const description = pageDescription(context, title)
  const inLanguage = languageForPath(context.pageData.relativePath)
  const normalizedPath = normalizePath(context.pageData.relativePath)
  const isHome = stripLocalePrefix(normalizedPath) === '/'
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
        inLanguage
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/#application`,
        inLanguage,
        name: 'NimoteCode',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Android, iOS',
        url: siteUrl,
        image: socialImage,
        description,
        featureList: [...homeCopy.facts, ...homeCopy.capabilities.map(([name]) => name), homeCopy.capabilityNote, homeCopy.byok],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          category: 'Freemium'
        }
      }
    )
  }

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage
  })

  if (!isHome) {
    const isBlogPost = /^\/(?:zh\/)?blog\/.+/.test(normalizedPath)
    const datePublished = asContent(context.pageData.frontmatter.date, '')
    const dateModified = asContent(context.pageData.frontmatter.lastUpdated, datePublished)
    const authorName = asContent(context.pageData.frontmatter.author, 'NimoteCode Team')
    const article: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isBlogPost ? 'BlogPosting' : 'TechArticle',
      headline: title,
      description,
      url,
      author: {
        '@type': 'Organization',
        name: authorName
      },
      publisher: {
        '@type': 'Organization',
        name: 'NimoteCode',
        logo: {
          '@type': 'ImageObject',
          url: brandLogo
        }
      }
    }

    if (isBlogPost && datePublished) {
      article.datePublished = datePublished
      article.dateModified = dateModified
      article.mainEntityOfPage = {
        '@type': 'WebPage',
        '@id': url
      }
      article.image = asContent(context.pageData.frontmatter.image, socialImage)
    }

    schemas.push(article)
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
  if (!/^\/(?:zh\/)?compare\/mobile-ai-development-tools$/.test(normalized)) return null
  const isChinese = normalized.startsWith('/zh/')

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isChinese ? '移动开发工具对比' : 'Mobile development tools compared',
    inLanguage: isChinese ? 'zh-CN' : 'en-US',
    itemListElement: allCompetitors.map((competitor, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: competitor.name,
      url: competitor.website
    }))
  }
}

function breadcrumbSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const localePrefix = normalized.match(/^\/zh(?=\/|$)/)?.[0] ?? ''
  const stripped = stripLocalePrefix(normalized)
  if (stripped === '/') return null

  const segments = stripped.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
    }
  ]

  let currentUrl = localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
  segments.forEach((segment, index) => {
    currentUrl = `${currentUrl}/${segment}`
    const isLast = index === segments.length - 1
    const label = isLast ? asContent(context.pageData.title, titleCase(segment)) : titleCase(segment)

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: currentUrl
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

function faqSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  // The marked FAQ is the source of truth for both visible text and JSON-LD,
  // including translations. Fail the build rather than emit a partial FAQ.
  const sourcePath = resolve(process.cwd(), 'docs', context.pageData.relativePath)
  const source = existsSync(sourcePath) ? readFileSync(sourcePath, 'utf8') : ''
  const visibleFaq = source.match(/<!-- faq:start -->([\s\S]*?)<!-- faq:end -->/)
  if (visibleFaq) {
    const entries = [...visibleFaq[1].matchAll(/^### ([^\n]+)\n\n([^\n]+)(?=\n|$)/gm)]
    if (!entries.length || entries.length !== (visibleFaq[1].match(/^### /gm) || []).length) {
      throw new Error(`Invalid FAQ content: ${context.pageData.relativePath}`)
    }
    return {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: entries.map(([, question, answer]) => ({
        '@type': 'Question', name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    }
  }
  const faqEntries: Record<string, Array<{ question: string, answer: string }>> = {
    '/docs/faq': [
      {
        question: 'Is NimoteCode only an SSH client?',
        answer: 'No. NimoteCode can open a local project or an SSH workspace, and brings Explorer, Editor, Terminal, Git workflows, AI assistance and diagnostic panels into the same project context.'
      },
      {
        question: 'Can I use it without Pro?',
        answer: 'Yes. Free includes local and SSH workspaces, the editor, baseline terminal, AI Chat and basic Tasks. AI Agent and remote search are available through Early Access Pro as availability expands; check your store for the offer shown to your account and region.'
      },
      {
        question: 'Which AI providers can I configure?',
        answer: 'The app includes 14 built-in provider templates and supports compatible custom endpoints. Provider availability, model access and cost are determined by your own provider account and settings.'
      },
      {
        question: 'What does Source Control support?',
        answer: 'All users can inspect repository status, diffs and history. Pro is required for gated Git write workflows such as commits, pushes and stash actions.'
      },
      {
        question: 'Are Tasks local or remote?',
        answer: 'Tasks are designed for repeatable command workflows in an SSH workspace. Make the host, project root and risk of each command clear before running it.'
      },
      {
        question: 'Do LSP and Debug work for every project?',
        answer: 'They depend on a compatible language server or debug adapter being configured on the remote host and on the project setup. They are Pro workflows.'
      }
    ],
    '/zh/docs/faq': [
      {
        question: 'NimoteCode 只是 SSH Client 吗？',
        answer: '不是。NimoteCode 可打开本地项目或 SSH 工作区，并将 Explorer、编辑器、Terminal、Git 工作流、AI 协助与诊断面板放到同一项目上下文中。'
      },
      {
        question: '不购买 Pro 能使用吗？',
        answer: '可以。免费版包含本地与 SSH 工作区、编辑器、基础终端、AI Chat 和基础 Tasks。AI Agent 与远程内容搜索将通过 Early Access Pro 逐步开放；请以商店为你的账号和地区显示的内容为准。'
      },
      {
        question: '可配置哪些 AI Provider？',
        answer: '应用提供 14 个内置 Provider 模板，也支持兼容的自定义端点。具体模型访问与费用由你的 Provider 账户和配置决定。'
      },
      {
        question: 'Source Control 支持什么？',
        answer: '所有用户都可查看仓库状态、diff 与历史。提交、推送和 stash 等受限 Git 写入工作流需要 Pro。'
      },
      {
        question: 'Tasks 是本地还是远程运行？',
        answer: 'Tasks 面向 SSH 工作区中的可复用命令流程。运行前请在任务名称中明确主机、项目根目录和风险等级。'
      },
      {
        question: 'LSP 和 Debug 所有项目都能用吗？',
        answer: '这取决于远程主机是否已配置兼容的语言服务或调试适配器，以及项目本身的启动设置。两者均属于 Pro 功能。'
      }
    ],
    "/ja/android-ide": [
      {
        "question": "Linux の利用に root は必要ですか？",
        "answer": "不要です。Local Linux は Android 8 以降の対応端末で、64 ビット ARM64 または x86_64 のアプリから PRoot を使います。ツールチェーンは別途必要で、すべての Linux 処理が動くわけではありません。"
      },
      {
        "question": "リモート PC がなくても開発できますか？",
        "answer": "はい。対応 Android 端末でローカルファイルを編集し、Local Linux で互換性のあるツールを実行できます。初期設定やパッケージ取得には通信が必要な場合があります。クラウド AI と GitHub には各サービスへの接続が必要です。"
      },
      {
        "question": "Android Studio と同じものですか？",
        "answer": "いいえ。NimoteCode は編集、ターミナル、Git、AI、Local Linux、SSH プロジェクト向けのモバイル IDE です。完全な Android Studio ツールチェーンや Android エミュレーターは提供しません。必要なビルドは適切に設定したホストで実行してください。"
      },
      {
        "question": "無料でダウンロードできますか？",
        "answer": "Google Play からダウンロードできます。一部機能には Pro が必要です。利用可否はアカウント、アプリのバージョン、ストアの地域によって異なります。モデル利用料は別途発生します。"
      }
    ],
    "/ko/android-ide": [
      {
        "question": "Linux를 사용하려면 루팅이 필요한가요?",
        "answer": "아니요. Local Linux는 Android 8 이상 지원 기기의 64비트 ARM64 또는 x86_64 앱에서 PRoot를 사용합니다. 도구 체인은 별도로 설치해야 하며 모든 Linux 작업이 호환되는 것은 아닙니다."
      },
      {
        "question": "원격 컴퓨터 없이도 개발할 수 있나요?",
        "answer": "네. 지원 Android 기기에서 로컬 파일을 편집하고 Local Linux로 호환 도구를 실행할 수 있습니다. 초기 설정과 패키지 다운로드에는 인터넷이 필요할 수 있습니다. 클라우드 AI와 GitHub는 각 서비스 연결이 필요합니다."
      },
      {
        "question": "Android Studio와 같은 도구인가요?",
        "answer": "아니요. NimoteCode는 편집, 터미널, Git, AI, Local Linux 및 SSH 프로젝트용 모바일 IDE입니다. 전체 Android Studio 도구 체인이나 Android 에뮬레이터를 제공하지 않습니다. 필요한 빌드는 적절하게 구성한 호스트에서 실행하세요."
      },
      {
        "question": "무료로 다운로드할 수 있나요?",
        "answer": "Google Play에서 다운로드할 수 있으며 일부 기능은 Pro 권한이 필요합니다. 제공 여부는 계정, 앱 버전과 스토어 지역에 따라 다릅니다. 모델 제공업체 사용료는 별도입니다."
      }
    ],
    "/es/android-ide": [
      {
        "question": "¿Necesito root para ejecutar Linux?",
        "answer": "No. Local Linux utiliza PRoot en dispositivos compatibles con Android 8 o posterior y una aplicación de 64 bits ARM64 o x86_64. Las herramientas se instalan por separado y no todas las cargas Linux son compatibles."
      },
      {
        "question": "¿Puedo programar sin un ordenador remoto?",
        "answer": "Sí. Puedes editar archivos locales y ejecutar herramientas compatibles en Local Linux desde un dispositivo Android compatible. La configuración inicial y las descargas pueden requerir internet; la IA en la nube y GitHub necesitan conexión con sus servicios."
      },
      {
        "question": "¿Es lo mismo que Android Studio?",
        "answer": "No. NimoteCode es un IDE móvil para edición, terminal, Git, IA y proyectos Linux locales o SSH. No incluye todas las herramientas de Android Studio ni un emulador Android. Ejecuta las compilaciones que las necesiten en un equipo configurado para ello."
      },
      {
        "question": "¿La descarga es gratuita?",
        "answer": "NimoteCode se puede descargar desde Google Play; algunas funciones requieren acceso Pro. La disponibilidad depende de la cuenta, la versión y la región de la tienda. El proveedor del modelo factura su uso por separado."
      }
    ],
    "/android-ide": [
      {
        "question": "Do I need root to run Linux in NimoteCode?",
        "answer": "No. Local Linux uses PRoot on supported Android 8+ devices with a 64-bit ARM64 or x86_64 app. Toolchains are installed separately, and not every Linux workload is compatible."
      },
      {
        "question": "Can I code without a remote computer?",
        "answer": "Yes. You can edit local files and run compatible tools in Local Linux on supported Android devices. Initial setup and package downloads may require internet access; cloud AI and GitHub require their services."
      },
      {
        "question": "Is NimoteCode the same as Android Studio?",
        "answer": "No. NimoteCode is a mobile IDE for editing, terminal work, Git, AI, and local Linux or SSH projects. It does not provide the complete Android Studio toolchain or an Android emulator. Use a suitably configured host for builds that need those tools."
      },
      {
        "question": "Is NimoteCode free to download?",
        "answer": "NimoteCode is available on Google Play, with some capabilities requiring Pro access. Availability depends on the account, app version, and store region. Model-provider usage is billed separately."
      }
    ],
    "/zh/android-ide": [
      {
        "question": "在 NimoteCode 中运行 Linux 需要 root 吗？",
        "answer": "不需要。本地 Linux 通过 PRoot 运行，支持 Android 8 及以上设备的 64 位 ARM64 或 x86_64 应用。工具链需另外安装，并非所有 Linux 任务都兼容。"
      },
      {
        "question": "没有远程电脑，也能用手机开发吗？",
        "answer": "可以。在受支持的 Android 设备上，可以编辑本地文件，并在本地 Linux 中运行兼容的工具。首次配置和下载软件包可能需要联网；云端 AI 和 GitHub 需要连接相应服务。"
      },
      {
        "question": "NimoteCode 和 Android Studio 一样吗？",
        "answer": "不一样。NimoteCode 是面向代码编辑、终端、Git、AI、本地 Linux 和 SSH 项目的移动 IDE，不提供完整的 Android Studio 工具链或 Android 模拟器。需要这些工具的构建应在配置合适的主机上运行。"
      },
      {
        "question": "NimoteCode 可以免费下载吗？",
        "answer": "NimoteCode 可从 Google Play 下载，部分功能需要 Pro 权限。可用性取决于账号、应用版本及商店地区，模型提供商的使用费用另行计算。"
      }
    ],
  }

  const entries = faqEntries[normalized]
  if (!entries) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer
      }
    }))
  }
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
  return 'NimoteCode is a Mobile AI Development Workspace for Android: code editor, SSH terminal, Git, AI Chat and Agent, LSP, debugger, tasks and sync/cache.'
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
  srcExclude: ['**/node_modules/**', '**/dist/**', 'public/**', 'cloudflare-r2-protection.md', 'repo-growth-audit.md', 'repo-growth-result.md'],
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
      ['script', { type: 'application/ld+json' }, JSON.stringify(pageSchemas(context))],
      ...(noIndex ? [] : localeAlternates(context.pageData.relativePath))
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
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
          { text: 'Workflows', link: '/use-cases/' },
          { text: 'Docs', link: '/docs/quick-start' },
          { text: 'Resources', link: '/resources/' },
          { text: 'Compare', link: '/compare/mobile-ai-development-tools' },
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
          '/docs/': organizeDocsGroups([
            {
              text: 'Start',
              items: [
                { text: 'Quick Start', link: '/docs/quick-start' }
              ]
            },
            {
              text: 'Development Workflow',
              collapsed: false,
              items: [
                { text: 'Local and Remote Workspaces', link: '/docs/ssh' },
                { text: 'Android Local Linux', link: '/docs/local-linux' },
                { text: 'AI Chat and Agent', link: '/docs/ai' },
                { text: 'Custom Plugins', link: '/docs/plugins' },
                { text: 'Editor', link: '/docs/editor' },
                { text: 'Terminal', link: '/docs/terminal' },
                { text: 'Search', link: '/docs/search' },
                { text: 'Source Control', link: '/docs/source-control' },
                { text: 'LSP', link: '/docs/lsp' },
                { text: 'Debug', link: '/docs/debug' },
                { text: 'Sync / Cache', link: '/docs/sync-cache' },
                { text: 'Tasks', link: '/docs/tasks' },
                { text: 'Docker and Dev Containers', link: '/docs/docker' },
                { text: 'Docker and Dev Containers', link: '/docs/docker' }
              ]
            },
            {
              text: 'Android Local Linux',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/docs/local-linux' },
                { text: 'Getting Started', link: '/docs/local-linux/getting-started' },
                { text: 'Architecture', link: '/docs/local-linux/architecture' },
                { text: 'Compatibility', link: '/docs/local-linux/compatibility' },
                { text: 'Security and Integrity', link: '/docs/local-linux/security-integrity' },
                { text: 'Linux Presets', link: '/docs/local-linux/presets' },
                { text: 'Troubleshooting', link: '/docs/local-linux/troubleshooting' }
              ]
            },
            {
              text: 'Reference',
              collapsed: false,
              items: [
                { text: 'Account and Subscription', link: '/docs/account-subscription' },
                { text: 'Security and Safety', link: '/docs/security' },
                { text: 'Settings', link: '/docs/settings' },
                { text: 'Notifications', link: '/docs/notifications' },
                { text: 'Configuration', link: '/docs/configuration' },
                { text: 'Local Linux Source and Licenses', link: '/docs/local-linux-source' },
                { text: 'FAQ', link: '/docs/faq' }
              ]
            }
          ], ''),
          '/use-cases/': [
            {
              text: 'Workflows',
              collapsed: false,
              items: [
                { text: 'Workflow overview', link: '/use-cases/' },
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
          { text: '工作流', link: '/zh/use-cases/' },
          { text: '文档', link: '/zh/docs/quick-start' },
          { text: '资源', link: '/zh/resources/' },
          { text: '对比', link: '/zh/compare/mobile-ai-development-tools' },
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
          '/zh/docs/': organizeDocsGroups([
            {
              text: '开始使用',
              items: [
                { text: '快速入门', link: '/zh/docs/quick-start' }
              ]
            },
            {
              text: '开发工作流',
              collapsed: false,
              items: [
                { text: '本地与远程 SSH 工作区', link: '/zh/docs/ssh' },
                { text: 'Android 本地 Linux', link: '/zh/docs/local-linux' },
                { text: 'AI Chat 与 Agent', link: '/zh/docs/ai' },
                { text: '自定义插件', link: '/zh/docs/plugins' },
                { text: '编辑器', link: '/zh/docs/editor' },
                { text: '终端使用', link: '/zh/docs/terminal' },
                { text: '远程搜索', link: '/zh/docs/search' },
                { text: 'Source Control 工作流', link: '/zh/docs/source-control' },
                { text: 'LSP 面板', link: '/zh/docs/lsp' },
                { text: '调试面板', link: '/zh/docs/debug' },
                { text: 'Sync / Cache 面板', link: '/zh/docs/sync-cache' },
                { text: 'Tasks 面板', link: '/zh/docs/tasks' },
                { text: 'Docker 与 Dev Containers', link: '/zh/docs/docker' }
              ]
            },
            {
              text: 'Android 本地 Linux',
              collapsed: false,
              items: [
                { text: '概览', link: '/zh/docs/local-linux' },
                { text: '快速开始', link: '/zh/docs/local-linux/getting-started' },
                { text: '架构', link: '/zh/docs/local-linux/architecture' },
                { text: '兼容性', link: '/zh/docs/local-linux/compatibility' },
                { text: '安全与完整性', link: '/zh/docs/local-linux/security-integrity' },
                { text: 'Linux Presets', link: '/zh/docs/local-linux/presets' },
                { text: '故障排查', link: '/zh/docs/local-linux/troubleshooting' }
              ]
            },
            {
              text: '参考',
              collapsed: false,
              items: [
                { text: '账户与订阅', link: '/zh/docs/account-subscription' },
                { text: '安全与防护', link: '/zh/docs/security' },
                { text: '设置', link: '/zh/docs/settings' },
                { text: '通知', link: '/zh/docs/notifications' },
                { text: '配置', link: '/zh/docs/configuration' },
                { text: '本地 Linux 对应源码与许可证', link: '/zh/docs/local-linux-source' },
                { text: '常见问题', link: '/zh/docs/faq' }
              ]
            }
          ], '/zh'),
          '/zh/use-cases/': [
            {
              text: '工作流',
              collapsed: false,
              items: [
                { text: '工作流总览', link: '/zh/use-cases/' },
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
          { text: 'ワークフロー', link: '/ja/use-cases/' },
          { text: 'ドキュメント', link: '/ja/docs/quick-start' },
          { text: 'リソース', link: '/ja/resources/' },
          { text: '比較', link: '/ja/compare/mobile-ai-development-tools' },
          { text: 'ブログ (English)', link: '/blog/' },
          { text: 'アップデート', link: '/ja/releases/' },
          { text: 'ダウンロード', link: '/ja/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/ja', {
            start: 'はじめに', quickStart: 'クイックスタート', workflow: '開発ワークフロー',
            ssh: 'ローカルと SSH のワークスペース', localLinux: 'Android Local Linux', docker: 'Docker と Dev Containers', ai: 'AI Chat と Agent', plugins: 'カスタムプラグイン',
            editor: 'エディター', terminal: 'ターミナル', search: '検索', sourceControl: 'ソース管理', lsp: 'LSP', debug: 'デバッグ', syncCache: '同期 / キャッシュ', tasks: 'タスク',
            overview: '概要', gettingStarted: 'はじめる', architecture: 'アーキテクチャ', compatibility: '互換性', securityIntegrity: 'セキュリティと整合性', presets: 'Linux プリセット', troubleshooting: 'トラブルシューティング',
            reference: 'リファレンス', account: 'アカウントとサブスクリプション', security: 'セキュリティと安全性', settings: '設定', notifications: '通知', configuration: '構成', sourceLicenses: 'ローカル Linux のソースとライセンス', faq: 'よくある質問'
          }), ...useCasesSidebar('/ja', { heading: 'ワークフロー', agentDemo: 'ワークフローの概要', workspaceDemo: 'モバイルワークスペースのデモ', terminalTools: 'ターミナル AI ツール' })
        }
      }
    },
    ko: {
      label: '한국어', lang: 'ko-KR', link: '/ko/',
      themeConfig: {
        ...docsUi('ko'), nav: [
          { text: '제품', link: '/ko/features' },
          { text: '워크플로', link: '/ko/use-cases/' },
          { text: '문서', link: '/ko/docs/quick-start' },
          { text: '리소스', link: '/ko/resources/' },
          { text: '비교', link: '/ko/compare/mobile-ai-development-tools' },
          { text: '블로그 (English)', link: '/blog/' },
          { text: '업데이트', link: '/ko/releases/' },
          { text: '다운로드', link: '/ko/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/ko', {
            start: '시작하기', quickStart: '빠른 시작', workflow: '개발 워크플로',
            ssh: '로컬 및 SSH 작업 공간', localLinux: 'Android Local Linux', docker: 'Docker 및 Dev Containers', ai: 'AI Chat 및 Agent', plugins: '사용자 지정 플러그인',
            editor: '편집기', terminal: '터미널', search: '검색', sourceControl: '소스 제어', lsp: 'LSP', debug: '디버깅', syncCache: '동기화 / 캐시', tasks: '작업',
            overview: '개요', gettingStarted: '시작하기', architecture: '아키텍처', compatibility: '호환성', securityIntegrity: '보안 및 무결성', presets: 'Linux 프리셋', troubleshooting: '문제 해결',
            reference: '참조', account: '계정 및 구독', security: '보안 및 안전', settings: '설정', notifications: '알림', configuration: '구성', sourceLicenses: '로컬 Linux 소스 및 라이선스', faq: '자주 묻는 질문'
          }), ...useCasesSidebar('/ko', { heading: '워크플로', agentDemo: '워크플로 개요', workspaceDemo: '모바일 워크스페이스 데모', terminalTools: '터미널 AI 도구' })
        }
      }
    },
    es: {
      label: 'Español', lang: 'es-ES', link: '/es/',
      themeConfig: {
        ...docsUi('es'), nav: [
          { text: 'Producto', link: '/es/features' },
          { text: 'Flujos', link: '/es/use-cases/' },
          { text: 'Documentación', link: '/es/docs/quick-start' },
          { text: 'Recursos', link: '/es/resources/' },
          { text: 'Comparar', link: '/es/compare/mobile-ai-development-tools' },
          { text: 'Novedades', link: '/es/releases/' },
          { text: 'Descargar', link: '/es/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ], sidebar: {
          ...docsSidebar('/es', {
            start: 'Primeros pasos', quickStart: 'Inicio rápido', workflow: 'Flujo de desarrollo',
            ssh: 'Espacios de trabajo locales y SSH', localLinux: 'Local Linux en Android', docker: 'Docker y Dev Containers', ai: 'AI Chat y Agent', plugins: 'Plugins personalizados',
            editor: 'Editor', terminal: 'Terminal', search: 'Búsqueda', sourceControl: 'Control de código fuente', lsp: 'LSP', debug: 'Depuración', syncCache: 'Sincronización / caché', tasks: 'Tareas',
            overview: 'Descripción general', gettingStarted: 'Primeros pasos', architecture: 'Arquitectura', compatibility: 'Compatibilidad', securityIntegrity: 'Seguridad e integridad', presets: 'Preajustes de Linux', troubleshooting: 'Resolución de problemas',
            reference: 'Referencia', account: 'Cuenta y suscripción', security: 'Seguridad y protección', settings: 'Ajustes', notifications: 'Notificaciones', configuration: 'Configuración de IA y conexiones', sourceLicenses: 'Código fuente y licencias de Local Linux', faq: 'Preguntas frecuentes'
          }), ...useCasesSidebar('/es', { heading: 'Flujos de trabajo', agentDemo: 'Resumen de flujos de trabajo', workspaceDemo: 'Demo de espacio de trabajo móvil', terminalTools: 'Herramientas de IA en terminal' })
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
        cacheLocation: 'node_modules/.vite-image-optimizer',
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true
        },
        png: {
          quality: 80,
          compressionLevel: 9
        },
        jpeg: {
          quality: 80
        },
        webp: {
          quality: 80
        }
      })
    ]
  }
})
