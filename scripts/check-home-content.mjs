import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const copy = JSON.parse(readFileSync('docs/.vitepress/theme/i18n/home.json', 'utf8'))
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
for (const [locale, content] of Object.entries(copy)) {
  assert.deepEqual(Object.keys(content).sort(), Object.keys(copy.en).sort(), `${locale}: missing translation keys`)
  for (const key of ['features', 'capabilities', 'faqs']) {
    assert.equal(content[key].length, copy.en[key].length, `${locale}: ${key} out of sync`)
  }
  const path = locale === 'en' ? 'index.html' : `${locale}/index.html`
  const html = readFileSync(`docs/.vitepress/dist/${path}`, 'utf8')
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap(match => JSON.parse(match[1]))
  const body = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, ''))
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one main heading`)
  const app = schemas.find(item => item['@type'] === 'SoftwareApplication')
  assert.ok(app, `${path}: app identity missing`)
  assert.deepEqual(app.featureList, [...content.facts, ...content.capabilities.map(([name]) => name), content.capabilityNote, content.byok], `${path}: app capabilities differ from localized content`)
  assert.ok(!schemas.some(item => ['TechArticle', 'BlogPosting'].includes(item['@type'])), `${path}: homepage classified as article`)
  const faq = schemas.find(item => item['@type'] === 'FAQPage')
  assert.ok(faq, `${path}: FAQ schema missing`)
  assert.deepEqual(faq.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), content.faqs, `${path}: FAQ schema differs from visible source`)
  for (const text of [content.title, content.accent, content.intro, content.capabilityNote, content.byokLabel, content.communityBlogTitle, content.communityBlogCopy, ...content.features.flat(), ...content.faqs.flat()]) {
    assert.ok(body.includes(text), `${path}: content missing from static HTML: ${text}`)
  }
  assert.ok(html.indexOf('id="product-demo"') < html.indexOf('id="workflow-title"'), `${path}: demo should precede feature details`)
  assert.ok(html.indexOf('id="compare-title"') > html.indexOf('id="faq-title"'), `${path}: comparison should follow product explanation`)
}
console.log(`Homepage content and structured data verified for ${Object.keys(copy).length} locales.`)
