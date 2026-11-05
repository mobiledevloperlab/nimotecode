import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const copy = JSON.parse(readFileSync('docs/.vitepress/theme/i18n/home.json', 'utf8'))
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
for (const [locale, content] of Object.entries(copy)) {
  assert.deepEqual(Object.keys(content).sort(), Object.keys(copy.en).sort(), `${locale}: missing translation keys`)
  for (const key of ['features', 'capabilities']) {
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
  assert.ok(!schemas.some(item => item['@type'] === 'FAQPage'), `${path}: removed homepage FAQ schema remains`)
  assert.ok(!html.includes('id="faq-title"'), `${path}: removed homepage FAQ remains`)
  for (const text of [content.title, content.accent, content.intro, content.capabilityNote, content.byokLabel, content.reviewsTitle, content.reviewsNote, ...content.features.flat()]) {
    assert.ok(body.includes(text), `${path}: content missing from static HTML: ${text}`)
  }
  assert.ok(html.indexOf('id="product-demo"') < html.indexOf('id="workflow-title"'), `${path}: demo should precede feature details`)
  assert.ok(html.indexOf('id="reviews-title"') > html.indexOf('id="workflow-title"'), `${path}: reviews should follow features`)
  const snapshot = JSON.parse(readFileSync('docs/.vitepress/theme/data/google-play-reviews.json', 'utf8'))
  for (const review of snapshot.reviews) {
    assert.ok(body.includes(review.quote) && body.includes(review.author), `${path}: full review and author missing`)
    assert.ok(html.includes(`reviewId=${review.id}`), `${path}: review source link missing`)
  }
}
console.log(`Homepage content and structured data verified for ${Object.keys(copy).length} locales.`)
