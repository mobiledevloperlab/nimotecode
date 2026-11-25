import { createSign } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const destination = process.argv[2]
if (!destination) throw new Error('Pass an output JSON path')
const daysAgo = days => new Date(Date.now() - days * 86400000).toISOString().slice(0, 10)
const site = 'https://nimotecode.com/'
const workflowToken = process.env.GITHUB_TOKEN
const windows = [[31, 4], [59, 32]].map(([start, end]) => [daysAgo(start), daysAgo(end)])
const googleCredentials = process.env.SEO_GSC_SERVICE_ACCOUNT
const bingKey = process.env.SEO_BING_API_KEY

async function api(url, options = {}) {
  const response = await fetch(url, { ...options, redirect: 'error', signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(String(response.status))
  return response.json()
}

async function observe(fn) {
  if (!fn) return { status: 'not configured' }
  try {
    return { status: 'observed', data: await fn() }
  } catch (error) {
    // Request URLs, response bodies and credentials must stay out of logs.
    return { status: /^\d{3}$/.test(error.message) ? `HTTP ${error.message}` : 'unavailable' }
  }
}

const github = suffix => api(`https://api.github.com/${suffix}`, {
  headers: { Accept: 'application/vnd.github+json', ...(workflowToken ? { Authorization: `Bearer ${workflowToken}` } : {}) }
})
const githubRepos = ['mobiledevloperlab/NimoteCode', 'mobiledevloperlab/nimotehost',
  'mobiledevloperlab/nimote-connect', 'Acode-Foundation/Acode', 'blinksh/blink']
const releases = Object.fromEntries(await Promise.all(githubRepos.map(async repo => [
  repo,
  await observe(async () => {
    const [release] = await github(`repos/${repo}/releases?per_page=1`)
    return release ? { tag: release.tag_name, preview: release.prerelease, time: release.published_at, url: release.html_url } : null
  })
])))

const apple = await observe(async () => {
  const { results } = await api('https://itunes.apple.com/lookup?id=6776158253&country=us')
  if (results.length === 0) return null
  const { trackName, version, minimumOsVersion, formattedPrice } = results[0]
  return { trackName, version, minimumOsVersion, formattedPrice }
})

const mentions = await observe(async () => {
  const result = await github(`search/issues?per_page=20&q=${encodeURIComponent('"NimoteCode" in:title,body is:public -user:mobiledevloperlab')}`)
  if (result.incomplete_results) throw new Error('incomplete')
  return { total: result.total_count, items: result.items.map(({ html_url, created_at }) => ({ url: html_url, time: created_at })) }
})

const google = await observe(googleCredentials && (async () => {
  const credentials = JSON.parse(googleCredentials)
  const now = Math.floor(Date.now() / 1000)
  const url = 'https://oauth2.googleapis.com/token'
  const encode = value => Buffer.from(JSON.stringify(value)).toString('base64url')
  const claim = encode({ alg: 'RS256', typ: 'JWT' }) + '.' + encode({
    iss: credentials.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: url, iat: now, exp: now + 600
  })
  const assertion = claim + '.' + createSign('RSA-SHA256').update(claim).sign(credentials.private_key, 'base64url')
  const auth = await api(url, {
    method: 'POST',
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion })
  })
  const endpoint = 'https://www.googleapis.com/webmasters/v3/sites/sc-domain%3Animotecode.com/searchAnalytics/query'
  return Promise.all(windows.map(async ([startDate, endDate]) => {
    const result = await api(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${auth.access_token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate, endDate, dimensions: ['query', 'page', 'country'], rowLimit: 250,
        dimensionFilterGroups: [{ filters: [{ dimension: 'country', operator: 'includingRegex',
          expression: '^(usa|gbr|can|deu|fra|esp|nld)$' }] }] })
    })
    return { startDate, endDate, rows: result.rows || [] }
  }))
}))

const bing = await observe(bingKey && (async () => {
  const endpoint = 'https://ssl.bing.com/webmaster/api.svc/json/GetQueryStats'
  const query = new URLSearchParams({ apikey: bingKey, siteUrl: site })
  const result = await api(`${endpoint}?${query}`)
  if (!Array.isArray(result.d)) throw new Error('unexpected payload')
  return result.d.slice(0, 250)
}))

const opportunities = []
if (google.status === 'observed') {
  const [current, prior] = google.data
  const previousRows = new Map(prior.rows.map(row => [JSON.stringify(row.keys), row]))
  for (const row of current.rows) {
    const earlier = previousRows.get(JSON.stringify(row.keys))
    if (!earlier || !row.impressions || row.impressions < earlier.impressions || row.ctr >= earlier.ctr) continue
    opportunities.push({
      query: row.keys[0], page: row.keys[1], country: row.keys[2],
      impressions: row.impressions, ctr: row.ctr, previousCtr: earlier.ctr,
      review: 'Check the live result title and description against this query and the content on the landing page.'
    })
  }
  opportunities.sort((a, b) => b.impressions - a.impressions)
}
const evidence = { apple, mentions, releases, google, bing, opportunities: opportunities.slice(0, 10) }
const notes = []
const releaseSource = await readFile('docs/.vitepress/theme/data/releases.ts', 'utf8')
const currentMobile = releaseSource.match(/latestRelease\s*=\s*\{\s*"version":\s*"([^"]+)"/)?.[1]
if (apple.data?.version && currentMobile !== apple.data.version) notes.push('Reconcile the public mobile release label with the US App Store.')
const connect = releases['mobiledevloperlab/nimote-connect'].data
if (connect?.tag && !(await readFile('docs/docs/connect.md', 'utf8')).includes(connect.tag)) {
  notes.push('Verify the new Connect release and its package/platform availability before editing the guides.')
}
if (google.status !== 'observed' && bing.status !== 'observed') {
  notes.push('Record authorized search query and citation data using the operating runbook.')
}
const loadLive = path => readFile(join(dirname(path), 'live.json'), 'utf8').then(JSON.parse).catch(() => null)
const live = await loadLive(destination)
if (live) {
  notes.push(`Public scan: ${live.sitemapCount} sitemap URLs and ${live.failures.length} findings.`)
}
const previousPath = process.argv[3]
if (previousPath) {
  const previous = JSON.parse(await readFile(previousPath, 'utf8'))
  const earlierLive = await loadLive(previousPath)
  if (live && earlierLive) {
    const added = live.failures.filter(item => !earlierLive.failures.includes(item))
    const cleared = earlierLive.failures.filter(item => !live.failures.includes(item))
    notes.push(`Weekly crawl change: ${added.length} new findings, ${cleared.length} cleared, ${live.sitemapCount - earlierLive.sitemapCount} sitemap URL difference.`)
  }
  for (const [repo, release] of Object.entries(releases)) {
    const earlier = previous.releases?.[repo]?.data
    if (release.data?.tag && earlier?.tag && release.data.tag !== earlier.tag) notes.push(`Review changed release: ${repo}`)
  }
  if (mentions.data && previous.mentions?.data && mentions.data.total !== previous.mentions.data.total) {
    notes.push('Review new or removed results in the third-party GitHub mentions sample.')
  }
}
notes.push('Repeat the fixed AI search questions where authorized and record citations and recommendation positions.')
await writeFile(destination, JSON.stringify({ timestamp: new Date().toISOString(), ...evidence, notes }, null, 2) + '\n')
console.log(`Weekly evidence: Google ${google.status}; Bing ${bing.status}; GitHub mentions ${mentions.status}.`)
for (const note of notes) console.log(note)
