# Cloudflare R2 download protection

Settings that must exist on the `nimotecode.com` zone to keep
`opensource-downloads.nimotecode.com` from being abused. They cannot be created
by the release tooling: the R2 token has no zone permissions, and rate limiting
rules are zone-scoped.

Do these once per zone. Nothing here needs repeating for a new release, because
the download path is versioned.

## What already protects you

Repeat downloads never reach R2. The archive is uploaded with
`cache-control: public, max-age=31536000, immutable`, Cloudflare caches it on the
custom domain, and later requests are served from cache:

```
$ curl -sI https://opensource-downloads.nimotecode.com/local-linux/1.1.7/nimotecode-local-linux-sources-1.1.7.tar.zst
cache-control: public, max-age=31536000, immutable
cf-cache-status: HIT
age: 1772
```

That is the main cost control: a thousand repeat requests bill as one R2 read.
The rules below only stop a single client from forcing cache misses.

## 1. Rate limiting rule

Dashboard → **nimotecode.com** (zone, not account) → **Security** → **WAF** →
**Rate limiting rules** → **Create rule**.

| Field | Value |
| -- | -- |
| Name | `Protect Local Linux source downloads` |
| Expression | `(http.host eq "opensource-downloads.nimotecode.com" and http.request.uri.path.extension eq "zst")` |
| Characteristics | **IP** |
| Threshold | **10** requests per **1 minute** |
| Action | **Managed Challenge** |
| Duration | 1 minute |

Save as **Deployed**.

`Managed Challenge` rather than `Block`: a real user who trips it passes once and
continues, while a scripted flood does not.

**If legitimate downloads start failing**, segmented download managers open
several parallel connections, and range requests count toward the same limit, so
one big file can exceed 10 requests. Raise the threshold to 60 per minute, or
drop the action to `Block` and set `Requests with a Range header: exclude`. Check
before acting: **Security** → **Events**, filter by the rule name.

## 2. Cache rule (optional)

Caching already happens, because the object sets its own `cache-control`. Add
this only if you want the policy in the dashboard instead of on the object:
**Caching** → **Cache rules** → **Create rule**.

| Field | Value |
| -- | -- |
| Name | `Cache Local Linux source downloads` |
| Expression | `(http.host eq "opensource-downloads.nimotecode.com")` |
| Cache eligibility | Eligible for cache |
| Edge TTL | Ignore cache-control, use 1 year |
| Browser TTL | Ignore cache-control, use 1 year |

Safe only because every object key contains its version
(`local-linux/<version>/…`). **Never republish different bytes under an existing
version** — the year-long TTL would keep serving the old object. Publish a new
version instead; that is what `publish-local-linux-source.sh` enforces.

## 3. Keep `r2.dev` disabled

Dashboard → **R2** → **nimotecode-opensource** → **Settings** → **Public access**.

`R2.dev public bucket access` must stay **Disabled** (it currently is). It is a
second, unrate-limited hostname for the same objects and would bypass every rule
above. The only public route should be the custom domain
`opensource-downloads.nimotecode.com`, which is what the published metadata
points at.
