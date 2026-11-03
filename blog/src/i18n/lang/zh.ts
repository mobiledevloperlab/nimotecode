import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "标签",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享文章：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "标签",
    backToTop: "回到顶部",
    goBack: "返回",
    editPage: "编辑页面",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选文章",
    recentPosts: "最近文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "此标签下的文章",

    tagsTitle: "标签",
    tagsDesc: "文章使用的所有标签。",

    postsTitle: "文章",
    postsDesc: "所有已发布的文章。",

    archivesTitle: "归档",
    archivesDesc: "文章归档。",

    searchTitle: "搜索",
    searchDesc: "搜索文章……",
  },
  a11y: {
    skipToContent: "跳至正文",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换主题",
    searchPlaceholder: "搜索文章……",
    noResults: "没有找到结果",
    goToPreviousPage: "前往上一页",
    goToNextPage: "前往下一页",
  },
  notFound: {
    title: "404 页面未找到",
    message: "页面未找到",
    goHome: "返回首页",
  },
} satisfies UIStrings;
