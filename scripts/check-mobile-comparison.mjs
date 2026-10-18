import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { promisify } from 'node:util'
import { execFile } from 'node:child_process'
import { accessNotes, competitors, featureRows, REVIEW_DATE, statusLabels } from '../docs/.vitepress/theme/data/mobileDevelopmentCompetitors.ts'

const official = {
  nimotecode: ['nimotecode.com'], termius: ['termius.com'], 'blink-shell': ['docs.blink.sh','github.com'],
  redock: ['redock.dev'], orca: ['www.onorca.dev','github.com'], servercc: ['servercc.app'], moshi: ['getmoshi.app']
}
const positive = new Set(['Native','Integrated','CLI-only','Conditional'])
const urls = new Set()
assert.equal(competitors.length, 7)
assert.equal(new Set(featureRows.map(row=>row.key)).size, featureRows.length)
for (const product of competitors) {
  assert.ok(product.version && product.platforms && product.positioning.en && product.positioning.zh, `${product.name}: metadata`)
  assert.equal(product.lastVerified, REVIEW_DATE, `${product.name}: review date`)
  assert.ok(new URL(product.website))
  assert.ok(accessNotes[product.id]?.note.en && accessNotes[product.id]?.note.zh, `${product.name}: missing access note`)
  assert.equal(accessNotes[product.id].evidence.date, REVIEW_DATE)
  assert.ok(official[product.id].includes(new URL(accessNotes[product.id].evidence.url).hostname))
  urls.add(accessNotes[product.id].evidence.url)
  let evidenceCount = 0
  for (const row of featureRows) {
    const cell = product.features[row.key]
    assert.ok(cell, `${product.name}/${row.key}: missing cell`)
    assert.ok(cell.implementation && cell.platformRestriction, `${product.name}/${row.key}: incomplete fields`)
    assert.ok(typeof cell.requiresPro === 'boolean' || cell.requiresPro === null)
    assert.ok(typeof cell.requiresHostSetup === 'boolean' || cell.requiresHostSetup === null)
    assert.ok(cell.note.en !== statusLabels.en[cell.status] && cell.note.zh !== statusLabels.zh[cell.status], `${product.name}/${row.key}: repeated status note`)
    if (positive.has(cell.status) || cell.status === 'Not supported') assert.ok(cell.evidence, `${product.name}/${row.key}: unsupported assertion without evidence`)
    if (cell.evidence) {
      evidenceCount++
      assert.equal(cell.evidence.date, REVIEW_DATE)
      assert.ok(cell.evidence.excerpt && cell.evidence.confidence, `${product.name}/${row.key}: weak record`)
      const url = new URL(cell.evidence.url)
      assert.ok(official[product.id].includes(url.hostname), `${product.name}/${row.key}: nonofficial source ${url.hostname}`)
      urls.add(url.href)
    }
  }
  assert.ok(evidenceCount > 0, `${product.name}: no official source`)
}
const en = readFileSync('docs/compare/mobile-ai-development-tools.md','utf8')
const zh = readFileSync('docs/zh/compare/mobile-ai-development-tools.md','utf8')
assert.ok(en.includes('<MobileDevToolComparison lang="en" />') && zh.includes('<MobileDevToolComparison lang="zh" />'))
assert.ok(en.includes('1.2.4') && zh.includes('1.2.4'))
for (const locale of ['','zh/']) {
  const path = `docs/.vitepress/dist/${locale}compare/mobile-ai-development-tools.html`
  assert.ok(existsSync(path), `${path}: build first`)
  const html = readFileSync(path,'utf8')
  for (const product of competitors) assert.ok(html.includes(product.name), `${path}: missing ${product.name}`)
  assert.ok(html.includes('Evidence ↗') || html.includes('官方依据 ↗'), `${path}: missing SSR evidence links`)
  assert.ok(html.includes('Git / diff interface') || html.includes('Git / Diff 图形界面'), `${path}: missing matrix`)
  assert.ok(html.includes('cmp-compare-list') && html.includes('cmp-profiles') && !html.includes('cmp-table-scroll'), `${path}: comparison must use responsive comparison rows and full profiles`)
  for (const phrase of ['Not verified Not verified','未核实 未核实','Pro · Pro','Host-centered Host-centered','Not confirmed Not confirmed']) assert.ok(!html.includes(phrase), `${path}: duplicate ${phrase}`)
  for (const tag of ['canonical','hreflang','og:title','BreadcrumbList','ItemList']) assert.ok(html.includes(tag), `${path}: missing ${tag}`)
}
for (const locale of ['','zh/']) {
  const path = `docs/.vitepress/dist/${locale}index.html`
  assert.ok(existsSync(path), `${path}: build first`)
  const html = readFileSync(path,'utf8')
  assert.ok(html.includes('home-tool-comparison-row') && !html.includes('home-tool-comparison-scroll'), `${path}: homepage comparison layout is stale`)
  assert.ok(html.includes('NimoteCode') && html.includes('Termius') && (html.includes('Evidence ↗') || html.includes('官方依据 ↗')), `${path}: homepage comparison content missing`)
  assert.ok(html.includes('2026-10-19'), `${path}: evidence date missing`)
}
console.log(`Comparison data passed: ${competitors.length} products, ${featureRows.length} features, ${urls.size} unique evidence URLs; English and Chinese SSR verified.`)

if (process.argv.includes('--links')) {
  const run = promisify(execFile)
  const failures=[]
  const pending=[...urls]
  await Promise.all(Array.from({length:Math.min(4,pending.length)},async()=>{
    while (pending.length) {
      const url=pending.shift()
      try {
        const {stdout}=await run('curl',['-L','-sS','-o','/dev/null','-w','%{http_code}','--max-time','15',url])
        if (Number(stdout.trim())>=400 || Number(stdout.trim())===0) failures.push(`${stdout.trim()} ${url}`)
      } catch (error) { failures.push(`${error.message} ${url}`) }
    }
  }))
  if (failures.length) {
    console.error('External link checks failed or were blocked:')
    for (const failure of failures) console.error(failure)
    process.exitCode=1
  } else console.log(`External links reachable: ${urls.size}`)
}
