import android from '../../public/images/placeholders/sources.json'
import ios from '../../public/images/ios/sources.json'

const revisions = new Map<string, string>()
for (const item of android.images) {
  revisions.set(`/images/placeholders/${item.file}`, item.sha256.slice(0, 12))
  revisions.set(`/images/placeholders/thumbs/${item.file.replace(/\.[^.]+$/, '')}.webp`, item.sha256.slice(0, 12))
}
for (const item of ios.images) {
  revisions.set(`/images/ios/${item.file}`, item.sha256.slice(0, 12))
}

// Keep refreshed captures visible even when a browser cached the previous URL.
export function screenshotUrl(source: string): string {
  if (source.includes('?')) return source
  const revision = revisions.get(source)
  return revision ? `${source}?v=${revision}` : source
}
