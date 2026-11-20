import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { products, rows, reviewedAt, reviewedAtUtc, reviewWindowHours } from '../docs/.vitepress/theme/data/majorCompetitors.mjs'
import { sourceEvidence } from '../docs/.vitepress/theme/data/majorCompetitorEvidence.mjs'

const reviewedTime = Date.parse(reviewedAtUtc)
assert.ok(Number.isFinite(reviewedTime), 'Missing manual audit timestamp')
assert.equal(reviewedAt, reviewedAtUtc.slice(0, 10), 'Audit day and timestamp disagree')
assert.ok(reviewedTime <= Date.now(), 'Audit timestamp cannot be in the future')
assert.ok(Date.now() - reviewedTime <= reviewWindowHours * 3600000,
  `Comparison review is older than ${reviewWindowHours} hours. Recheck official sources before publishing; never advance the date merely to pass this check.`)

const officialDomains = [
  ['nimotecode.com'], ['docs.blink.sh'], ['www.termius.com'],
  ['docs.acode.app', 'acode.app', 'github.com'], ['docs.replit.com'],
  ['docs.github.com', 'code.visualstudio.com']
]
assert.equal(products.length, 6)
assert.equal(rows.length, 14)
let verified = 0
for (const [label, cells] of rows) {
  assert.equal(cells.length, products.length, `${label.en}: missing product`)
  for (const [index, cell] of cells.entries()) {
    const name = `${products[index][0]} / ${label.en}`
    assert.match(cell.text.en, /^(✅|◐|—)/u, `${name}: unknown status`)
    if (!cell.text.en.startsWith('—')) assert.ok(cell.url, `${name}: claim has no source`)
    if (!cell.url) {
      assert.ok(cell.text.en.startsWith('—'), `${name}: unverified claims must not be credited`)
      continue
    }
    const url = new URL(cell.url)
    assert.equal(url.protocol, 'https:')
    assert.ok(officialDomains[index].includes(url.hostname), `${name}: nonofficial source`)
    if (url.hostname === 'github.com') assert.ok(url.pathname.startsWith('/Acode-Foundation/'), `${name}: not Acode's official repository`)
    assert.ok(sourceEvidence[cell.url], `${name}: source was not audited`)
    assert.equal(cell.evidence.reviewedAtUtc, reviewedAtUtc, `${name}: mismatched review`)
    for (const locale of ['en', 'zh']) assert.ok(cell.evidence.summary[locale]?.length > (locale === 'zh' ? 15 : 30), `${name}: missing evidence summary`)
    verified++
  }
}

// Our own docs are versioned alongside this comparison. A content change must
// trigger a new editorial check rather than silently leaving stale claims.
const baseline = JSON.parse(readFileSync('docs/.vitepress/theme/data/majorComparisonLocalSources.json', 'utf8'))
for (const [path, hash] of Object.entries(baseline)) {
  assert.equal(createHash('sha256').update(readFileSync(path)).digest('hex'), hash,
    `${path}: product documentation changed since the comparison audit; recheck its claims`)
}
for (const [, cells] of rows) for (const cell of cells) {
  if (cell.evidence?.localPath) assert.ok(baseline[cell.evidence.localPath], `Missing reviewed document: ${cell.evidence.localPath}`)
}
console.log(`Major comparison evidence checked: ${verified} sourced entries, ${rows.length * products.length - verified} unconfirmed entries; manual review ${reviewedAtUtc}. This validates provenance and freshness, not live product behavior.`)
