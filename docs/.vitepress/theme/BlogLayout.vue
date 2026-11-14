<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { data as posts } from './blog.data'
import SiteAnalytics from './SiteAnalytics.vue'
import './styles/blog.css'

const { isDark } = useData()
const toggleTheme = () => { isDark.value = !isDark.value }

const route = useRoute()
const { frontmatter } = useData()
const isZh = computed(() => route.path.startsWith('/zh/'))
const home = computed(() => isZh.value ? '/zh/blog/' : '/blog/')
const isIndex = computed(() => /^\/(?:zh\/)?blog\/(?:index(?:\.html)?)?$/.test(route.path))
const localPosts = computed(() => posts.filter(post => post.url.startsWith(isZh.value ? '/zh/blog/' : '/blog/')))
const otherLanguage = computed(() => isZh.value ? route.path.replace(/^\/zh/, '') : `/zh${route.path}`)
const formatDate = (date: string) => {
  if (!date) return ''
  const parsed = new Date(`${date.slice(0, 10)}T00:00:00Z`)
  return Number.isNaN(parsed.valueOf()) ? date : new Intl.DateTimeFormat(isZh.value ? 'zh-CN' : 'en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(parsed)
}
</script>

<template>
  <SiteAnalytics />
  <div class="blog-shell" :data-blog-theme="isDark ? 'dark' : 'light'">
    <a class="blog-skip" href="#blog-content">{{ isZh ? '跳至正文' : 'Skip to content' }}</a>
    <header class="blog-header">
      <div class="blog-header-inner">
        <a class="blog-brand" :href="withBase(home)"><span class="blog-brand-mark">m<span>.</span></span><span>Mobile Developer Lab<small>{{ isZh ? '移动开发者实验室' : 'FIELD NOTES FOR BUILDERS' }}</small></span></a>
        <nav :aria-label="isZh ? '博客导航' : 'Blog navigation'">
          <a :href="withBase(home)">{{ isZh ? '文章' : 'Writing' }}</a>
          <a :href="withBase('/feed.xml')">RSS <span aria-hidden="true">↗</span></a>
          <a :href="withBase(otherLanguage)" :lang="isZh ? 'en' : 'zh'">{{ isZh ? 'EN' : '中文' }}</a>
          <button class="blog-theme-toggle" type="button" @click="toggleTheme" :aria-label="isZh ? (isDark ? '切换到浅色主题' : '切换到深色主题') : (isDark ? 'Switch to light theme' : 'Switch to dark theme')" :title="isZh ? (isDark ? '浅色主题' : '深色主题') : (isDark ? 'Light theme' : 'Dark theme')"><span aria-hidden="true">{{ isDark ? '☀' : '☾' }}</span></button>
          <a class="blog-product-link" :href="withBase(isZh ? '/zh/' : '/')">NimoteCode <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>

    <main id="blog-content" class="blog-main">
      <template v-if="isIndex">
        <section class="blog-intro">
          <div class="blog-intro-copy">
            <p class="blog-eyebrow"><span class="blog-status-dot"></span> {{ isZh ? '移动开发者实验室 / 实践笔记' : 'MOBILE DEVELOPER LAB / FIELD NOTES' }}</p>
            <h1>{{ isZh ? '在移动中，' : 'Build from' }}<br><em>{{ isZh ? '继续创造。' : 'anywhere.' }}</em></h1>
            <p>{{ isZh ? '探索移动开发、远程工作和 AI 的真实可能。这里记录构建过程中的实验、思考与经验。' : 'Exploring what happens when mobile development, remote work, and AI meet. Notes, experiments, and lessons from building in the real world.' }}</p>
            <a class="blog-intro-link" href="#archive-title">{{ isZh ? '探索文章' : 'Explore the writing' }} <span>↘</span></a>
          </div>
          <div class="lab-visual" aria-hidden="true">
            <div class="lab-orbit lab-orbit-one"></div><div class="lab-orbit lab-orbit-two"></div>
            <div class="lab-label lab-label-top">01 / EXPERIMENTS</div>
            <div class="lab-device"><div class="lab-device-bar"><span></span><span></span><span></span><b>~/workspace</b></div><div class="lab-device-code"><div><i>01</i><span><strong>const</strong> workspace = {</span></div><div><i>02</i><span>&nbsp; location: <u>'anywhere'</u>,</span></div><div><i>03</i><span>&nbsp; ideas: <u>'in progress'</u></span></div><div><i>04</i><span>};</span></div><div class="lab-command"><i>›</i> build something<span class="lab-cursor"></span></div></div></div>
            <div class="lab-label lab-label-bottom"><span class="blog-status-dot"></span> ALWAYS BUILDING</div>
          </div>
        </section>
        <section class="blog-archive" aria-labelledby="archive-title">
          <div class="blog-section-heading"><h2 id="archive-title">{{ isZh ? '实验室笔记' : 'From the lab' }}</h2><span>{{ isZh ? '文章归档' : 'THE ARCHIVE' }} / {{ String(localPosts.length).padStart(2, '0') }}</span></div>
          <div class="blog-list">
            <a v-for="(post, index) in localPosts" :key="post.url" class="blog-list-item" :href="withBase(post.url)">
              <div class="blog-list-date"><span class="blog-list-number">{{ String(index + 1).padStart(2, '0') }} /</span>{{ formatDate(post.date) }}</div>
              <div class="blog-list-body"><h3>{{ post.title.replace(/\s*\|\s*NimoteCode.*$/, '') }}</h3><p>{{ post.description }}</p><div class="blog-tags"><span v-for="tag in post.tags.slice(0, 3)" :key="tag">{{ tag }}</span></div></div>
              <span class="blog-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </template>
      <article v-else class="blog-article">
        <a class="blog-back" :href="withBase(home)">← {{ isZh ? '所有文章' : 'All writing' }}</a>
        <div class="blog-article-tags"><span v-for="tag in (frontmatter.tags || [])" :key="tag">{{ tag }}</span></div>
        <div class="vp-doc blog-prose"><Content /></div>
        <div class="blog-end"><span>{{ isZh ? '感谢阅读。' : 'Thanks for reading.' }}</span><a :href="withBase(home)">{{ isZh ? '返回文章列表' : 'Back to all writing' }} →</a></div>
      </article>
    </main>
    <aside class="blog-about" :aria-label="isZh ? '关于作者' : 'About the author'">
      <div class="blog-about-inner"><div class="blog-about-icon" aria-hidden="true">&lt;/&gt;</div><div><p class="blog-about-label">{{ isZh ? '关于作者' : 'ABOUT THE AUTHOR' }}</p><h2>{{ isZh ? '持续探索，也持续创造。' : 'Always exploring. Always building.' }}</h2><p>{{ isZh ? '这里记录我在开发与创造过程中的思考和实践。我的作品包括 NimoteCode 和 NimoteShot。' : 'A place for notes and experiments from my work as a developer and creator. My projects include NimoteCode and NimoteShot.' }}</p><div class="blog-about-projects"><a :href="withBase(isZh ? '/zh/' : '/')">NimoteCode ↗</a><span>NimoteShot</span></div></div></div>
    </aside>
    <footer class="blog-footer"><div><span>© {{ new Date().getFullYear() }} Mobile Developer Lab</span><span>{{ isZh ? '为随时随地创造的人而写。' : 'For those who build from anywhere.' }}</span><a :href="withBase('/feed.xml')">RSS ↗</a></div></footer>
  </div>
</template>
