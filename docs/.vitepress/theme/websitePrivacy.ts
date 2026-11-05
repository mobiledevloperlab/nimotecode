// Optional website analytics must not load or emit before an affirmative choice.
export const privacyKey = 'nimote.website.analytics.v1'
export const measurementId = 'G-JML9VGDMXJ'
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }
  & Partial<Record<`ga-disable-${typeof measurementId}`, boolean>>
let initialized = false
let lastPath = ''
let memoryChoice: 'allow' | 'deny' | null = null
export function analyticsChoice(): 'allow' | 'deny' | null {
  if (typeof window === 'undefined') return null
  try {
    const choice = localStorage.getItem(privacyKey)
    return choice === 'allow' || choice === 'deny' ? choice : memoryChoice
  } catch { return memoryChoice }
}
export function trackPage(path: string) {
  if (!initialized || analyticsChoice() !== 'allow' || lastPath === path) return
  lastPath = path
  const target = window as AnalyticsWindow
  target.gtag?.('event', 'page_view', {
    page_location: window.location.origin + path,
    page_path: path,
    page_referrer: '',
  })
}
export function startAnalytics(path: string) {
  if (!import.meta.env.PROD || analyticsChoice() !== 'allow') return
  const target = window as AnalyticsWindow
  target[`ga-disable-${measurementId}`] = false
  if (!initialized) {
    initialized = true
    target.dataLayer = target.dataLayer || []
    target.gtag = function () { target.dataLayer!.push(arguments) }
    target.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    })
    target.gtag('js', new Date())
    target.gtag('config', measurementId, {
      send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 180,
      page_location: window.location.origin + path, page_referrer: ''
    })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.id = 'nimote-optional-analytics'
    document.head.appendChild(script)
  }
  trackPage(path)
}
export function setAnalyticsChoice(choice: 'allow' | 'deny') {
  memoryChoice = choice
  try { localStorage.setItem(privacyKey, choice) } catch { /* Session choice still applies. */ }
  if (choice === 'allow') {
    startAnalytics(window.location.pathname)
    return
  }
  const target = window as AnalyticsWindow
  target[`ga-disable-${measurementId}`] = true
  target.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  // Remove first-party GA cookies for host-only and parent-domain variants.
  const parts = location.hostname.split('.')
  const domains = ['', ...parts.map((_, i) => parts.slice(i).join('.'))]
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim()
    if (!/^_ga(?:_|$)/.test(name)) continue
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax`
    }
  }
  // Reload unloads the already-authorized third-party runtime after withdrawal.
  if (initialized) {
    if (analyticsChoice() === 'deny') window.location.reload()
  }
}
