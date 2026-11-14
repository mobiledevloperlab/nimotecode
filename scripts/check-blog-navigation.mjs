import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'
import { shouldReloadBlogRoute } from '../docs/.vitepress/theme/blog-navigation.mjs'

const origin = 'https://nimotecode.com'
for (const prefix of ['', '/zh']) {
  const blog = `${prefix}/blog/`
  assert.equal(shouldReloadBlogRoute(blog, origin + `${prefix}/`, false), false, 'dev keeps its VitePress blog renderer')
  assert.equal(shouldReloadBlogRoute(blog, origin + `${prefix}/`, true), true, 'production enters the Astro document')
  assert.equal(shouldReloadBlogRoute(blog, origin + blog, true), false, 'initial hydration must not reload itself')
  assert.equal(shouldReloadBlogRoute(blog + '?test=1#archive', origin + blog, true), false, 'same-document navigation must not reload')
  assert.equal(shouldReloadBlogRoute(`${blog}best-ssh-clients`, origin + blog, true), true)
  assert.equal(shouldReloadBlogRoute(`${prefix}/features`, origin + blog, true), false)
}
assert.equal(shouldReloadBlogRoute('https://example.com/blog/', origin + '/', true), false)
const entry = readFileSync('docs/.vitepress/theme/index.ts', 'utf8')
assert.ok(entry.includes('shouldReloadBlogRoute(to, window.location.href, import.meta.env.PROD)'))

const layout = readFileSync('blog/src/layouts/Layout.astro', 'utf8')
const inlineTheme = layout.match(/<script is:inline>\s*([\s\S]*?)<\/script>/)?.[1]
assert.ok(inlineTheme, 'theme must be set synchronously before first paint')
const runtime = ts.transpile(readFileSync('blog/src/scripts/theme.ts', 'utf8'), { target: ts.ScriptTarget.ES2022 })
function harness({ saved, legacy, systemDark = false, blocked = false } = {}) {
  const values = new Map()
  if (saved) values.set('vitepress-theme-appearance', saved)
  if (legacy) values.set('theme', legacy)
  const element = () => ({
    attrs: {}, style: {}, classList: { toggle() {} },
    setAttribute(key, value) { this.attrs[key] = value },
    getAttribute(key) { return this.attrs[key] },
  })
  const root = element(), meta = element(), button = new EventTarget()
  Object.assign(button, element())
  const document = new EventTarget()
  Object.assign(document, { documentElement: root, body: {}, querySelector(selector) { return selector === '#theme-btn' ? button : meta } })
  const media = new EventTarget()
  media.matches = systemDark
  const storage = {
    getItem(key) { if (blocked) throw new Error('Storage disabled'); return values.get(key) ?? null },
    setItem(key, value) { if (blocked) throw new Error('Storage disabled'); values.set(key, value) },
  }
  const window = new EventTarget()
  Object.assign(window, { matchMedia: () => media, getComputedStyle: () => ({ backgroundColor: root.attrs['data-theme'] === 'dark' ? '#08090a' : '#f7f8f8' }) })
  const context = { document, window, localStorage: storage }
  runInNewContext(inlineTheme, context)
  const firstPaint = root.attrs['data-theme']
  runInNewContext(runtime, context)
  return { document, media, window, button, root, values, firstPaint, element }
}
for (const [options, expected] of [
  [{}, 'dark'], [{saved:'dark', systemDark:false}, 'dark'],
  [{saved:'light', legacy:'dark', systemDark:true}, 'light'],
  [{saved:'auto', systemDark:true}, 'dark'], [{saved:'auto', systemDark:false}, 'light'],
  [{legacy:'light'}, 'light'], [{blocked:true}, 'dark'],
]) {
  const h = harness(options)
  assert.equal(h.firstPaint, expected)
  assert.equal(h.root.attrs['data-theme'], expected, 'hydration must preserve first-paint appearance')
}
const h = harness({saved:'dark'})
h.document.dispatchEvent(new Event('astro:after-swap'))
h.document.dispatchEvent(new Event('astro:after-swap'))
h.button.dispatchEvent(new Event('click'))
assert.equal(h.root.attrs['data-theme'], 'light', 'theme toggle must have only one listener')
assert.equal(h.values.get('vitepress-theme-appearance'), 'light', 'main site and blog share appearance')
h.media.matches = true
h.media.dispatchEvent(new Event('change'))
assert.equal(h.root.attrs['data-theme'], 'light', 'OS changes must respect explicit preference')
const next = { documentElement: h.element(), querySelector: () => h.element() }
const swap = new Event('astro:before-swap')
swap.newDocument = next
h.document.dispatchEvent(swap)
assert.equal(next.documentElement.attrs['data-theme'], 'light', 'apply appearance before DOM swap')
const denied = harness({blocked:true})
denied.button.dispatchEvent(new Event('click'))
assert.equal(denied.root.attrs['data-theme'], 'light')
denied.document.dispatchEvent(new Event('astro:after-swap'))
assert.equal(denied.root.attrs['data-theme'], 'light', 'session appearance works without storage')
console.log('Blog navigation and appearance checks passed: hydration, dev/production boundaries, first paint, swaps, storage, and theme controls.')
