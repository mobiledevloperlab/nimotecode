/** Astro owns production blog pages; VitePress owns its development fallback.
 * VitePress also calls this hook on initial hydration, so never reload the
 * document we are already loading. */
export function shouldReloadBlogRoute(to, currentHref, production) {
  if (!production) return false
  const current = new URL(currentHref)
  const target = new URL(to, current)
  return target.origin === current.origin &&
    /^\/(?:zh\/)?blog(?:\/|$)/.test(target.pathname) &&
    target.pathname !== current.pathname
}
