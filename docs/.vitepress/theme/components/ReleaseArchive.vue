<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { latestRelease } from '../data/releases'

type Release = {
  version: string
  date: { en: string; zh: string; es?: string; ja?: string; ko?: string }
  build?: string
  level?: { en: string; zh: string; es?: string; ja?: string; ko?: string }
  summary?: { en: string; zh: string; es?: string; ja?: string; ko?: string }
}

const releases: Release[] = [
  { version: '2.3.0', date: { en: 'November 7, 2026', zh: '2026 年 11 月 7 日', es: '7 de noviembre de 2026', ja: '2026 年 11 月 7 日', ko: '2026년 11월 7일' }, build: '62', level: { en: 'Latest', zh: '最新版本', es: 'Actual', ja: '最新', ko: '최신' }, summary: { en: 'Switchable IDE, Terminal, and AI workspaces, Windows SSH, Docker management, and Dev Containers.', zh: 'IDE、终端与 AI 工作区切换、Windows SSH、Docker 管理和 Dev Containers。', es: 'Modos IDE, Terminal e IA, Windows SSH, administración Docker y Dev Containers.', ja: 'IDE、ターミナル、AI の切替、Windows SSH、Docker 管理、Dev Containers。', ko: 'IDE, 터미널, AI 모드 전환, Windows SSH, Docker 관리 및 Dev Containers.' } },
  { version: '2.2.0', date: { en: 'November 2, 2026', zh: '2026 年 11 月 2 日', es: '2 de noviembre de 2026', ja: '2026 年 11 月 2 日', ko: '2026년 11월 2일' }, build: '60', level: { en: 'Update', zh: '更新', es: 'Actualización', ja: 'アップデート', ko: '업데이트' }, summary: { en: 'Native GitHub workflows, more reliable search, and experimental Android Local Linux toolkits.', zh: '原生 GitHub 工作流、更可靠的搜索与实验性 Android Local Linux 工具包。', es: 'Flujos nativos de GitHub, búsqueda más fiable y herramientas experimentales de Android Local Linux.', ja: 'ネイティブ GitHub ワークフロー、より安定した検索、実験的な Android Local Linux ツールキット。', ko: '네이티브 GitHub 워크플로, 더 안정적인 검색, 실험적인 Android Local Linux 도구 키트.' } },
  { version: '2.1.0', date: { en: 'October 27, 2026', zh: '2026 年 10 月 27 日', es: '27 de octubre de 2026', ja: '2026 年 10 月 27 日', ko: '2026년 10월 27일' }, build: '59', level: { en: 'Update', zh: '更新', es: 'Actualización', ja: 'アップデート', ko: '업데이트' }, summary: { en: 'A more consistent workspace and a more efficient Agent for large codebases.', zh: '更统一的工作区，以及更高效处理大型代码库的 Agent。', es: 'Un espacio de trabajo más coherente y un Agente más eficiente para grandes bases de código.', ja: 'より一貫したワークスペースと、大規模コードベース向けに効率化された Agent。', ko: '더 일관된 작업 공간과 대규모 코드베이스에 더 효율적인 Agent.' } },
  { version: '2.0.0', date: { en: 'October 25, 2026', zh: '2026 年 10 月 25 日', es: '25 de octubre de 2026', ja: '2026 年 10 月 25 日', ko: '2026년 10월 25일' }, build: '58', level: { en: 'Major', zh: '重大更新', es: 'Principal', ja: '大型', ko: '대규모' }, summary: { en: 'Major release: custom plugins, continuous AI work, and a more cohesive IDE.', zh: '重大版本更新：自定义插件、连续的 AI 工作流与更统一的 IDE。', es: 'Actualización principal: plugins personalizados, trabajo de IA continuo y un IDE más coherente.', ja: '大型アップデート：カスタムプラグイン、継続的な AI 作業、より一貫した IDE。', ko: '대규모 업데이트: 맞춤 플러그인, 연속적인 AI 작업, 더 일관된 IDE.' } },
  { version: '1.2.5', date: { en: 'October 20, 2026', zh: '2026 年 10 月 20 日' }, build: '56', summary: { en: 'Batch Explorer actions and a more consistent IDE.', zh: '资源管理器批量操作与更一致的 IDE。' } },
  { version: '1.2.4', date: { en: 'October 18, 2026', zh: '2026 年 10 月 18 日' }, summary: { en: 'Start faster, resume recent work, and update with confidence.', zh: '更快开始、继续最近工作，并安心更新。' } },
  { version: '1.2.3', date: { en: 'October 15, 2026', zh: '2026 年 10 月 15 日' }, summary: { en: 'Shared Local Linux projects and more resilient SSH sessions.', zh: '共享 Local Linux 项目与更稳定的 SSH 会话。' } },
  { version: '1.2.2', date: { en: 'October 9, 2026', zh: '2026 年 10 月 9 日' }, build: '52' },
  { version: '1.2.1', date: { en: 'October 6, 2026', zh: '2026 年 10 月 6 日' }, build: '51' },
  { version: '1.2.0', date: { en: 'October 5, 2026', zh: '2026 年 10 月 5 日' } },
  { version: '1.1.9', date: { en: 'September 27, 2026', zh: '2026 年 9 月 27 日' }, build: '48' },
  { version: '1.1.8', date: { en: 'September 14, 2026', zh: '2026 年 9 月 14 日' }, build: '45' },
  { version: '1.1.7', date: { en: 'September 12, 2026', zh: '2026 年 9 月 12 日' } },
  { version: '1.1.6', date: { en: 'September 9, 2026', zh: '2026 年 9 月 9 日' } },
  { version: '1.1.5', date: { en: 'September 6, 2026', zh: '2026 年 9 月 6 日' } },
  { version: '1.1.4', date: { en: 'September 6, 2026', zh: '2026 年 9 月 6 日' } },
  { version: '1.1.3', date: { en: 'September 2, 2026', zh: '2026 年 9 月 2 日' } },
  { version: '1.1.2', date: { en: 'August 30, 2026', zh: '2026 年 8 月 30 日' } },
  { version: '1.1.1', date: { en: 'August 29, 2026', zh: '2026 年 8 月 29 日' } },
  { version: '1.1.0', date: { en: 'August 28, 2026', zh: '2026 年 8 月 28 日' } },
  { version: '1.0.9', date: { en: 'August 5, 2026', zh: '2026 年 8 月 5 日' } },
  { version: '1.0.8', date: { en: 'August 1, 2026', zh: '2026 年 8 月 1 日' } },
  { version: '1.0.7', date: { en: 'August 1, 2026', zh: '2026 年 8 月 1 日' } },
  { version: '1.0.6', date: { en: 'August 1, 2026', zh: '2026 年 8 月 1 日' } },
  { version: '1.0.5', date: { en: 'June 30, 2026', zh: '2026 年 6 月 30 日' } },
  { version: '1.0.4', date: { en: 'June 27, 2026', zh: '2026 年 6 月 27 日' } }
]

const { page } = useData()
const locale = computed(() => page.value.relativePath.match(/^(zh|es|ja|ko)\//)?.[1] ?? 'en')
const localePath = computed(() => locale.value === 'en' ? '' : `/${locale.value}`)
const copy = computed(() => ({ zh: {
  eyebrow: '最新版本', archive: '历史版本', latest: '当前版本', view: '查看发布说明', build: 'Build', more: '查看更早版本', count: '个版本'
}, es: {
  eyebrow: 'Última versión', archive: 'Archivo de versiones', latest: 'Actual', view: 'Ver notas de la versión', build: 'Build', more: 'Ver versiones anteriores', count: 'versiones'
}, ja: {
  eyebrow: '最新リリース', archive: 'リリース履歴', latest: '現在', view: 'リリースノートを見る', build: 'Build', more: '以前のリリースを見る', count: '件のリリース'
}, ko: {
  eyebrow: '최신 릴리스', archive: '릴리스 아카이브', latest: '현재', view: '릴리스 노트 보기', build: 'Build', more: '이전 릴리스 보기', count: '개 릴리스'
}, en: {
  eyebrow: 'Latest release', archive: 'Release archive', latest: 'Current', view: 'View release notes', build: 'Build', more: 'View earlier releases', count: 'releases'
} }[locale.value]))
const latest = { ...releases[0], version: latestRelease.version, build: latestRelease.build, date: latestRelease.date, summary: latestRelease.homeSummary }
const releaseHighlights = computed(() => latestRelease.highlights[locale.value as keyof typeof latestRelease.highlights])
const archived = releases.slice(1)
const urlFor = (release: Release) => `${localePath.value}/releases/${release.version}`
const localized = (values: Record<string, string | undefined>) => values[locale.value] ?? values.en
</script>

<template>
  <section class="release-hero" aria-labelledby="latest-release-title">
    <p class="release-eyebrow">{{ copy.eyebrow }}</p>
    <div class="release-hero-card">
      <div class="release-hero-copy">
        <div class="release-version-row">
          <h2 id="latest-release-title">NimoteCode {{ latest.version }}</h2>
          <span class="release-status">{{ copy.latest }}</span>
        </div>
        <p class="release-date">{{ localized(latest.date) }}</p>
        <p class="release-summary">{{ latest.summary && localized(latest.summary) }}</p>
        <a class="release-primary-link" :href="urlFor(latest)">{{ copy.view }} <span aria-hidden="true">→</span></a>
      </div>
      <ul class="release-highlights">
        <li v-for="highlight in releaseHighlights" :key="highlight">{{ highlight }}</li>
      </ul>
    </div>
  </section>

  <section class="release-archive" aria-labelledby="release-archive-title">
    <div class="release-archive-heading">
      <div>
        <p class="release-eyebrow">{{ copy.archive }}</p>
        <h2 id="release-archive-title">2026</h2>
      </div>
      <span>{{ archived.length }} {{ copy.count }}</span>
    </div>
    <ul class="release-list">
      <li v-for="release in archived" :key="release.version">
        <a :href="urlFor(release)">
          <strong>{{ release.version }}</strong>
          <span>{{ localized(release.date) }}<template v-if="release.build"> · {{ copy.build }} {{ release.build }}</template><template v-if="release.level"> · <mark class="release-level">{{ localized(release.level) }}</mark></template></span>
          <em v-if="release.summary" class="release-list-summary">{{ localized(release.summary) }}</em>
          <b aria-hidden="true">→</b>
        </a>
      </li>
    </ul>
    <details class="release-earlier">
      <summary>{{ copy.more }}</summary>
      <div>
        <a :href="`${localePath}/releases/1.0.3/build-27`">1.0.3 · Build 27</a>
        <a :href="`${localePath}/releases/1.0.3/build-26`">1.0.3 · Build 26</a>
        <a :href="`${localePath}/releases/1.0.3/build-25`">1.0.3 · Build 25</a>
        <a :href="`${localePath}/releases/1.0.3/build-24`">1.0.3 · Build 24</a>
        <a :href="`${localePath}/releases/1.0.3/build-23`">1.0.3 · Build 23</a>
      </div>
    </details>
  </section>
</template>
