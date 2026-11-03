import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://nimotecode.com/",
    title: process.env.BLOG_LANG === "zh" ? "移动开发者实验室" : "Mobile Developer Lab",
    description: process.env.BLOG_LANG === "zh" ? "关于移动开发、远程工作与 AI 的实践笔记。" : "Notes on mobile development, remote work, and AI.",
    author: "Mobile Developer Lab",
    profile: "https://nimotecode.com",
    ogImage: "default-og.jpg",
    lang: process.env.BLOG_LANG === "zh" ? "zh" : "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/mobiledevloperlab" },
    { name: "x",        url: "https://x.com/mobiledevlab" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});