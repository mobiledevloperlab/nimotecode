# NimoteCode SEO 与 AI 搜索运维

本目录由 VitePress 排除。采集原始 HTML 和授权数据放在本机 `.seo-cache/reports/`，或使用批准的私有存储。GitHub 为公开仓库时，CI 仅生成公开数据报告。

## 本地运行

使用项目指定的 Node 24、Python 3.12 或其他有锁定 wheel 的受支持版本、Git 和 curl。

```sh
npm ci
npm ci --prefix blog
npm run docs:build
npm run docs:check
npm --prefix blog run lint
npm exec -- tsc -p docs/.vitepress/tsconfig.json
(cd blog && npm exec -- astro check)
node --test scripts/image-optimizer-cache.test.mjs

mkdir -p .seo-cache/reports
bash scripts/seo/claude-seo.sh setup
bash scripts/seo/claude-seo.sh page --file docs/.vitepress/dist/index.html --base-url https://nimotecode.com/ > .seo-cache/reports/page-home.json
bash scripts/seo/claude-seo.sh page --url https://nimotecode.com/download > .seo-cache/reports/page-download-live.json
bash scripts/seo/claude-seo.sh geo https://nimotecode.com/ --ua-matrix --json > .seo-cache/reports/geo.json
python3 scripts/seo/live.py --weekly --output .seo-cache/reports/live.json
node scripts/seo/weekly.mjs .seo-cache/reports/weekly.json
```

安装脚本固定 Claude SEO Git tag 与 commit，在 `.seo-cache` 创建隔离环境，并用上游安全版本下限和带哈希的 wheel 依赖安装。Codex 使用仓库内的 `.agents/skills/nimote-seo/SKILL.md` 和 `.codex/agents/seo-audit.toml`。上游 Skills 用作审计参考，`page` 和 `geo` 运行上游的 Python 检查。GEO 输出含原始 HTML 可读性、robots 与 llms.txt 状态。AEO 人工复核包括可独立引用的答案、可见内容与 JSON-LD 对应和来源准确性。Claude Code 的 hooks、插件、MCP 扩展、Chromium 与付费 API 不参与此安装。

升级时先读发行说明、README、安装说明、技术、页面、内容、GEO、Schema、Hreflang、Sitemap 和 Drift Skills。检查新增的 imports、执行路径、出站请求、权限和包源。更新 shell 中的 tag 和 SHA，使用 `uv pip compile scripts/seo/requirements.in --generate-hashes --no-annotate --no-header --default-index https://pypi.org/simple -o scripts/seo/requirements.lock` 重新生成锁。测试新版本的 JSON 输出和失败退出分支，再审查差异。

## GitHub Actions

- 每日 14:17 UTC 检查五种语言的核心路由、robots、Sitemap、AI 参考文件、页面索引指令和核心页面链接。找不到页面的探针应返回 HTTP 404。
- 每周一 14:41 UTC 增加全 Sitemap 扫描、Claude SEO 页面与 GEO 检查、模拟爬虫 UA、商店与公开 GitHub 发布及品牌提及样本。保留 35 天的 JSON 工件。周报尝试用最近的周报计算变化。无人值守步骤用静态规则和 HTTP 请求，模型调用次数为零。
- 每次 PR 构建站点、Lint、类型检查、运行已有测试，并验证生产 HTML 中的元数据、双向 hreflang、JSON-LD、商店跳转与压缩资源预算。现有部署工作流亦运行 `docs:check`，以及独立的竞品证据时效门槛。现有 `compare:audit` 要求一次真实的 24 小时内人工证据核对。
- 从 **Actions → SEO and AI search checks → Run workflow** 可重跑日查或周查。经维护人员确认后可勾选 **Open a review issue**，仅在报告有异常时创建检查 Issue，已有同标题公开 Issue 时跳过。遇 HTTP 0、429、5xx 先复测并保留原结果。发现首页或核心转化页连续返回 404、错误 noindex、异常 canonical 时，人工建 Issue，写明 URL、两次证据、影响和回滚点。内容和订阅改动走人工审查的 PR。

发布负责人对照商店公开版本、`theme/data/releases.ts`、Pro 表格、账户文档和两个 AI 参考文件。核实同一账号在对应地区的真实试用状态、续订和货币价格。客户端、Host Community 和 Connect 分别跟踪。核对发布渠道和支持平台，检查英语、简体中文、日语、韩语、西语五个版本。使用真实设备打开下载以及登录/购买恢复流程。不要把 release candidate、内部验收或开发分支当作公开稳定版本。

## Google Search Console

1. 用持有域名权限的组织账号打开 Search Console，添加 **Domain** 属性 `nimotecode.com`。复制显示的 TXT 值，在当前权威 DNS 后台添加根域名 TXT 记录。等待 DNS 传播，在 Search Console 点 **Verify**。保留记录。已有所有者时，通过 **Settings → Users and permissions** 授予所需访问。
2. 在 **Sitemaps** 提交 `https://nimotecode.com/sitemap.xml`。确认读取成功。用 **URL Inspection** 检查首页、英语下载页、Pro、五语 Quick Start 和两篇 AI 工具入口。分别保存实时测试、已编入索引状态、Google 选择的 canonical、最近抓取时间。只对重要新增或大幅更新页面有针对性地申请重新编入索引。 [Google 属性验证](https://support.google.com/webmasters/answer/34592) · [Search Console API](https://developers.google.com/webmaster-tools/v1/api_reference_index)
3. 在 **Performance → Search results** 设 28 天对比上一 28 天，按 United States、United Kingdom、Canada、Germany、France、Spain、Netherlands 和 Mobile 查看。导出 Queries、Pages、Countries。保留点击、展现、CTR、平均位置和样本区间。**Core Web Vitals** 单独记录移动和桌面状态。
4. 如需自动读取，创建专用 Google Cloud 项目或使用已获授权的项目，启用 Search Console API。建立专用 service account，给其邮箱添加此域名属性的最低可读权限。优先在授权私有运行器使用凭据。对启用 JSON key 的账户，将完整 JSON 在本地通过环境变量 `SEO_GSC_SERVICE_ACCOUNT` 注入，或设为私有仓库同名 Actions secret。工作流请求 `webmasters.readonly` 并比较两个 28 天窗口。禁止把密钥及私有查询 CSV 写入公开仓库。 [权限前提](https://developers.google.com/webmaster-tools/v1/prereqs) · [Search Analytics 请求字段](https://developers.google.com/webmaster-tools/v1/searchanalytics/query)

## Bing Webmaster Tools

1. 用组织账号登录 Bing Webmaster Tools。已有验证过的 Search Console 属性时，可在 **Add site → Import** 授权导入。手动方式添加 `https://nimotecode.com/`，在 DNS 添加工具提供的 CNAME 或使用其提供的验证方法。 [Bing 添加及验证](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b)
2. 在 **Sitemaps** 提交相同的 XML。在 **URL Inspection** 查看抓取和索引，跟踪 **Search Performance** 与 **Backlinks**。有数据时到 **AI Performance** 记录 Citations、Cited pages、Grounding queries 和 Topics。每周以相同区间取样。 [Bing Sitemap](https://www.bing.com/webmasters/help/Sitemaps-3b5cf6ed) · [AI Performance](https://blogs.bing.com/webmaster/2026/10/introducing-topics-portfolio-beta-in-ai-performance/)
3. 如需自动读取，在 **Settings → API Access → API Key** 创建专用组织账户的密钥。将其保存在私有作业的 `SEO_BING_API_KEY`，或在本机注入环境。周报调用 Bing 的 JSON `GetQueryStats`，用于 top-query 观察。AI Performance 的引用数据走界面导出。无授权或请求失败时周报保留明确的状态。 [Microsoft API 授权](https://learn.microsoft.com/bingwebmaster/getting-access) · [Microsoft API 协议](https://learn.microsoft.com/en-us/bingwebmaster/api-protocols)

## 转化记录

在现有 GA4 属性按 `source_page`、页面语言与获客来源观察同意后的 `android_store_click`、`store_click`、`download_click` 和 `seo_download_click`。商店报表用 App Store Connect 的 App Analytics 或 Play Console 的获客报告，记录时间窗口、地区、下载入口与安装。用带标记的官网入口验证渠道，分别汇总出站点击和商店转化。

## 30、60、90 天

| 时间 | 要核实的信号与动作 |
| --- | --- |
| 30 天 | 发布后重跑线上基线，记录新旧 canonical 集合、GSC 和 Bing 覆盖、移动 CrUX、各市场品牌与非品牌展现。取第一次同区间的 App Store Connect 和 Play Console 来源/转化基线。复跑固定 AI 问题，保存服务、地区、时间、完整答案、品牌顺序和来源。 |
| 60 天 | 比较两段 28 天的 US 和欧美移动查询及下载入口。说明版本变化和商店地区差异。按真实展现和 CTR 优先改进已有 SSH、iPad、Android IDE 和两篇 Agent 指南。应用商店转化用官方后台归因数据，站内出站点击作为前置信号。 |
| 90 天 | 对比搜索与 AI 引用样本、第三方来源、搜索入口和商店安装的变化。只有同口径趋势足够稳定时才扩大内容。归档本轮优先级、实验和结果。 |

## 回滚

从部署记录找到已知正常的源码提交，通过人工审核 revert SEO 修改并按现有 Pages 流程发布。保留原 URL、已提交的 Sitemap 路径和 robots 抓取策略，发布后复跑日查及 Google/Bing URL Inspection。回退运行工具时删除本地 `.seo-cache`，按旧提交的 tag 与 lock 重新安装。可在 Actions 界面暂停 SEO 的独立工作流。撤销授权时删除私有 secret 和对应平台的访问权限或 API key。

## 历史 use-cases 入口的 Cloudflare 301

当前 Cloudflare 代理将网站请求转给 GitHub Pages。六个旧 use-cases 路径维护在 `docs/public/_redirects`，对应的真实 HTTP 301 由 Cloudflare Single Redirects 提供。

```sh
node scripts/seo/cloudflare-legacy-redirects.mjs --print
node --env-file="$HOME/.config/nimotecode/cloudflare-redirects.env" scripts/seo/cloudflare-legacy-redirects.mjs --apply
node scripts/seo/cloudflare-legacy-redirects.mjs --verify
```

使用限制在 `nimotecode.com` 区域、具有 Zone Read 和 Dynamic URL Redirects Write 的 API Token。凭据通过项目外、权限为 `600` 的文件注入 `CLOUDFLARE_API_TOKEN`。也可在 Cloudflare **Rules → Redirect Rules** 用 `--print` 生成的表达式、目标 URL 和查询参数选项录入两条规则。英语和中文入口各自指向本语言索引，状态码为 301，保留查询参数。应用程序在现有规则集追加规则，发现同名规则有差异时停下供维护人员检查。验证覆盖无参数和带参数的原 URL，以及返回 200 的两个目标页。需要撤销时在面板禁用带 `nimotecode_legacy_use_cases_` 标识的两条规则。 [Cloudflare Single Redirects](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/)
