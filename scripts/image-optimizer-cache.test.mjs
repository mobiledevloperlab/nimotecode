import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, rmSync, utimesSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { imageOptimizerCacheKey } from './image-optimizer-cache.mjs'

test('cache follows image contents, paths, settings and dependencies, not timestamps', t => {
  const directory = mkdtempSync(join(tmpdir(), 'nimote-image-cache-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  mkdirSync(join(directory, 'thumbs'))
  const image = join(directory, 'editor-multiple-files.jpg')
  const thumbnail = join(directory, 'thumbs/editor-multiple-files.webp')
  writeFileSync(image, 'old-image')
  writeFileSync(thumbnail, 'old-thumbnail')
  const key = (options = { quality: 80 }, lock = 'dependencies-v1') =>
    imageOptimizerCacheKey(directory, options, lock)
  const initial = key()
  assert.equal(key(), initial)
  utimesSync(image, 0, 0)
  assert.equal(key(), initial)

  writeFileSync(image, 'new-image')
  utimesSync(image, 0, 0)
  const replaced = key()
  assert.notEqual(replaced, initial)
  writeFileSync(thumbnail, 'new-thumbnail')
  const refreshed = key()
  assert.notEqual(refreshed, replaced)
  assert.notEqual(key({ quality: 90 }), refreshed)
  assert.notEqual(key(undefined, 'dependencies-v2'), refreshed)

  writeFileSync(join(directory, 'notes.txt'), 'not an image')
  assert.equal(key(), refreshed)
  writeFileSync(join(directory, 'added.png'), 'added-image')
  assert.notEqual(key(), refreshed)
  rmSync(join(directory, 'added.png'))
  assert.equal(key(), refreshed)
  rmSync(thumbnail)
  assert.notEqual(key(), refreshed)
})
