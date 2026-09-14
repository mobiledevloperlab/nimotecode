import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * The Local Linux source release of record, as written by
 * scripts/publish-local-linux-source.sh. Documentation pages read it instead of
 * restating a version, size or checksum that could drift from the release.
 */
const RELEASE_FILE = 'docs/public/opensource/local-linux/source-download.json'

export function loadLocalLinuxSourceRelease() {
  return JSON.parse(readFileSync(resolve(process.cwd(), RELEASE_FILE), 'utf8'))
}
