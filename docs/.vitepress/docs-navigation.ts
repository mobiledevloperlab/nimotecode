import type { DefaultTheme } from 'vitepress'
import navigation from './theme/i18n/docs-navigation.json'

/** One route tree for all languages. Grouping never changes public URLs. */
export function docsSidebar(prefix: string): DefaultTheme.SidebarMulti {
  const locale = (prefix.slice(1) || 'en') as keyof typeof navigation.locales
  const copy = navigation.locales[locale]
  const pages: Record<string, string> = copy.pages
  return {
    [`${prefix}/docs`]: navigation.groups.map(group => ({
      text: copy.groups[group.id],
      collapsed: group.collapsed,
      items: group.routes.map(route => ({
        text: pages[route],
        link: `${prefix}/docs${route ? `/${route}` : ''}`
      }))
    }))
  }
}
