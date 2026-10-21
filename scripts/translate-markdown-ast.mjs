/**
 * Safe locale generator. It parses Markdown into an AST and applies patches
 * only to visible text ranges. YAML, code, URLs, component attributes and
 * HTML tags are never passed to translation.
 *
 * Usage: TRANSLATE_LOCALES=ja,ko,es node scripts/translate-markdown-ast.mjs
 * Add --check to report untranslated text ranges without writing files.
 */
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, relative, dirname } from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const root = resolve('docs')
const locales = (process.env.TRANSLATE_LOCALES ?? 'ja,ko,es').split(',').filter(Boolean)
const checkOnly = process.argv.includes('--check')
const excluded = new Set(['.vitepress', 'blog', 'zh', 'ja', 'ko', 'es', 'public'])
const parse = unified().use(remarkParse).use(remarkGfm)
const run = promisify(execFile)

async function sourceFiles(dir) {
  const output = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name)
    if (entry.isDirectory()) { if (!(dir === root && excluded.has(entry.name))) output.push(...await sourceFiles(path)) }
    else if (entry.name.endsWith('.md') && relative(root, path) !== '404.md') output.push(path)
  }
  return output
}

function frontmatterEnd(value) {
  return value.startsWith('---\n') ? value.indexOf('\n---', 4) + 4 : 0
}

function collect(node, patches, bodyOffset) {
  if (node.type === 'text' && node.position && /[A-Za-z]{2}/.test(node.value)) {
    patches.push({ start: bodyOffset + node.position.start.offset, end: bodyOffset + node.position.end.offset, value: node.value })
  }
  // Markdown deliberately preserves HTML blocks. Extract only text between
  // tags from those blocks; attributes, URLs and Vue bindings are immutable.
  if (node.type === 'html' && node.position) {
    const base = bodyOffset + node.position.start.offset
    for (const match of node.value.matchAll(/(^|>)([^<>{}]+)(?=<|$)/g)) {
      const value = match[2]
      if (!/[A-Za-z]{2}/.test(value)) continue
      const start = base + match.index + match[1].length
      patches.push({ start, end: start + value.length, value })
    }
  }
  for (const child of node.children ?? []) collect(child, patches, bodyOffset)
}

async function translate(value, locale) {
  const { stdout } = await run('curl', ['--silent', '--show-error', '--retry', '4', '--retry-all-errors', '--connect-timeout', '20', '--max-time', '60', '--get', 'https://translate.googleapis.com/translate_a/single', '--data-urlencode', 'client=gtx', '--data-urlencode', 'sl=en', '--data-urlencode', `tl=${locale}`, '--data-urlencode', 'dt=t', '--data-urlencode', `q=${value}`])
  return JSON.parse(stdout)[0].map((part) => part[0]).join('')
}

async function render(source, locale) {
  const headerEnd = frontmatterEnd(source)
  const body = source.slice(headerEnd)
  const patches = []
  collect(parse.parse(body), patches, headerEnd)
  // An AST range can contain a nested range in uncommon mixed Markdown/HTML.
  // Keep only outermost non-overlapping ranges before patching backwards.
  patches.sort((a, b) => a.start - b.start || b.end - a.end)
  const clean = patches.filter((patch, index) => index === 0 || patch.start >= patches[index - 1].end)
  if (checkOnly) return { result: source, count: clean.length }
  for (const patch of clean.sort((a, b) => b.start - a.start)) {
    const translated = await translate(patch.value, locale)
    source = `${source.slice(0, patch.start)}${translated}${source.slice(patch.end)}`
  }
  return { result: source, count: clean.length }
}

for (const file of await sourceFiles(root)) {
  const source = await readFile(file, 'utf8')
  for (const locale of locales) {
    const { result, count } = await render(source, locale)
    if (!checkOnly) {
      const target = resolve(root, locale, relative(root, file))
      await mkdir(dirname(target), { recursive: true })
      await writeFile(target, result)
    }
    console.log(`${locale} ${relative(root, file)}: ${count} text nodes`)
  }
}
