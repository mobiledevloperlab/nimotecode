import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const domain = 'nimotecode.com'
const origin = `https://${domain}`
const phase = 'http_request_dynamic_redirect'
const retired = /^\/(?:zh\/)?use-cases\/(?:remote-hotfix|on-call-diagnostics|ai-agent)$/
const redirects = readFileSync(new URL('../../docs/public/_redirects', import.meta.url), 'utf8')
  .split('\n').map(line => line.trim().split(/\s+/))
  .filter(([source]) => retired.test(source))
assert.equal(redirects.length, 6, 'Expected exactly six legacy redirects')
assert.equal(new Set(redirects.map(([source]) => source)).size, 6, 'Duplicate legacy redirect')
for (const [source, target, status] of redirects) {
  assert.equal(status, '301', source)
  assert.equal(target, source.startsWith('/zh/') ? '/zh/use-cases/' : '/use-cases/', source)
}

const rules = ['/use-cases/', '/zh/use-cases/'].map((target, index) => {
  const suffix = index === 0 ? 'en' : 'zh'
  const paths = redirects.filter(([, to]) => to === target).map(([from]) => JSON.stringify(from))
  return {
    ref: `nimotecode_legacy_use_cases_${suffix}`,
    description: `NimoteCode retired use-case links (${suffix})`,
    expression: `(http.host eq "${domain}" and http.request.uri.path in {${paths.join(' ')}})`,
    action: 'redirect',
    action_parameters: { from_value: {
      status_code: 301, target_url: { value: origin + target }, preserve_query_string: true
    } },
    enabled: true
  }
})

async function verify() {
  const probes = redirects.flatMap(([from, to]) => [[from, to, ''], [from, to, '?seo_redirect_probe=1']])
  const responses = await Promise.all(probes.map(async ([from, to, probe]) => {
    const options = { redirect: 'manual', signal: AbortSignal.timeout(15000) }
    const response = await fetch(origin + from + probe, options)
    const location = response.headers.get('location')
    await response.body?.cancel()
    const valid = response.status === 301 && (location ? new URL(location, origin).href : '') === origin + to + probe
    console.log(`${from}${probe} → ${response.status} ${location ?? '(no Location)'}`)
    return valid
  }))
  const targets = await Promise.all(rules.map(async rule => {
    const url = rule.action_parameters.from_value.target_url.value
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) })
    await response.body?.cancel()
    console.log(`${url} → ${response.status}`)
    return response.status === 200
  }))
  if (!responses.every(Boolean) || !targets.every(Boolean)) process.exitCode = 1
}

async function apply() {
  const token = process.env.CLOUDFLARE_API_TOKEN?.trim()
  if (!token) throw new Error('CLOUDFLARE_API_TOKEN is required to apply Redirect Rules.')

  async function request(path, body, optional = false) {
    const response = await fetch('https://api.cloudflare.com/client/v4' + path, {
      method: body ? 'POST' : 'GET', redirect: 'error', signal: AbortSignal.timeout(20000),
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    })
    if (optional && response.status === 404) return null
    const payload = await response.json()
    if (!response.ok || !payload.success) {
      const codes = payload.errors?.map(error => error.code).filter(Number.isInteger) ?? []
      throw new Error(`Cloudflare API returned HTTP ${response.status} (codes: ${codes.join(', ') || 'none'}).`)
    }
    return payload.result
  }

  const zones = await request(`/zones?name=${domain}&status=active`)
  const zone = zones.find(candidate => candidate.name === domain && candidate.status === 'active')
  if (!zone) throw new Error(`No accessible active zone for ${domain}.`)
  const endpoint = `/zones/${zone.id}/rulesets`
  let current = await request(`${endpoint}/phases/${phase}/entrypoint`, undefined, true)
  if (!current) {
    await request(endpoint, { name: 'NimoteCode redirects', kind: 'zone', phase, rules })
    console.log('Created the zone redirect ruleset with both legacy rules.')
  } else {
    for (const rule of rules) {
      const existing = current.rules?.find(candidate => candidate.ref === rule.ref)
      if (existing) {
        const existingRedirect = existing.action_parameters?.from_value
        const expectedRedirect = rule.action_parameters.from_value
        assert.ok(existing.expression === rule.expression && existing.action === rule.action && existing.enabled === true
          && existingRedirect?.status_code === expectedRedirect.status_code
          && existingRedirect?.target_url?.value === expectedRedirect.target_url.value
          && existingRedirect?.preserve_query_string === true,
        `Review existing Cloudflare rule ${rule.ref} before changing it.`)
        console.log(`${rule.ref} already applied.`)
      } else {
        current = await request(`${endpoint}/${current.id}/rules`, rule)
        console.log(`Added ${rule.ref}.`)
      }
    }
  }
  await verify()
}

try {
  switch (process.argv[2] ?? '--print') {
    case '--print': console.log(JSON.stringify(rules, null, 2)); break
    case '--verify': await verify(); break
    case '--apply': await apply(); break
    default: throw new Error('Use --print, --verify, or --apply.')
  }
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}
