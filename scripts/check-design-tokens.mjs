import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const source = readFileSync('docs/.vitepress/theme/styles/tokens.css', 'utf8')
const declarations = block => Object.fromEntries([...block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]))
const light = declarations(source.match(/:root\s*\{([\s\S]*?)\n\}/)[1])
const dark = { ...light, ...declarations(source.match(/\.dark\s*\{([\s\S]*?)\n\}/)[1]) }
function color(name, palette, visited = []) {
  assert.ok(!visited.includes(name), `Color alias cycle: ${[...visited, name].join(' → ')}`)
  const value = palette[`--nimote-${name}`]
  assert.ok(value, `Missing color role: ${name}`)
  const alias = value.match(/^var\(--nimote-([\w-]+)\)$/)
  if (alias) return color(alias[1], palette, [...visited, name])
  assert.match(value, /^#[\da-f]{6}$/i, `Expected an opaque color for ${name}: ${value}`)
  return value.slice(1).match(/../g).map(channel => parseInt(channel, 16) / 255)
}
function luminance(rgb) {
  const [r, g, b] = rgb.map(channel => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4)
  return .2126 * r + .7152 * g + .0722 * b
}
function contrast(foreground, background, palette) {
  const a = luminance(color(foreground, palette)), b = luminance(color(background, palette))
  const ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
  assert.ok(ratio >= 4.5, `${foreground} on ${background}: ${ratio.toFixed(2)}:1, needs 4.5:1`)
}
for (const palette of [light, dark]) {
  for (const role of ['bg', 'bg-elevated', 'bg-subtle', 'bg-media', 'chrome-bg', 'editor-bg', 'text-primary', 'text-secondary', 'text-muted', 'border', 'border-strong']) {
    const channels = color(role, palette)
    const tolerance = role.startsWith('text-') ? 8 : 3
    assert.ok((Math.max(...channels) - Math.min(...channels)) * 255 <= tolerance + 1e-8, `${role} must stay neutral; purple is reserved for accents`)
  }
  for (const foreground of ['text-primary', 'text-secondary', 'text-muted', 'link', 'success', 'warning', 'error']) {
    for (const background of ['bg', 'bg-elevated', 'bg-subtle']) contrast(foreground, background, palette)
  }
  for (const background of ['action', 'action-hover']) contrast('on-action', background, palette)
}
const blogTheme = readFileSync('blog/src/styles/theme.css', 'utf8')
const sharedImport = blogTheme.match(/@import\s+["']([^"']*tokens\.css)["']/)
assert.ok(sharedImport, 'Blog must import the shared site palette')
assert.equal(resolve('blog/src/styles', sharedImport[1]), resolve('docs/.vitepress/theme/styles/tokens.css'))
assert.ok(!/--(?:background|foreground|accent|muted|border)\s*:\s*#/.test(blogTheme), 'Blog colors must alias the shared palette')
console.log('Shared light/dark palette verified: neutral dominant surfaces, contrast ≥ 4.5:1, and shared blog tokens.')
