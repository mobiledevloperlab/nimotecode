---
title: "支持中心 | NimoteCode"
description: "查找 NimoteCode 连接、AI、恢复购买、取消订阅、隐私及账户删除帮助。"
pageClass: trust-page
---

<TrustNav />

# 支持中心

<p class="trust-meta">NimoteCode · 产品帮助与私密支持</p>

从问题类型开始，快速找到操作指南。账户、购买和隐私问题请使用私密邮箱；提交前删除密码、私钥、API Key、验证码及敏感项目内容。

<div class="trust-card-grid">
<a class="trust-card" href="/zh/docs/ssh"><strong>SSH 与连接</strong><span>主机、认证、代理和连接排障 →</span></a>
<a class="trust-card" href="/zh/docs/ai"><strong>AI、Agent 与 MCP</strong><span>Provider、工具权限和运行环境 →</span></a>
<a class="trust-card" href="#purchases"><strong>购买与恢复权益</strong><span>恢复 Pro、取消续费和退款 →</span></a>
<a class="trust-card" href="/zh/account-delete"><strong>隐私与账户删除</strong><span>删除方式、范围和订阅提醒 →</span></a>
</div>

## 快速检查 {#quick-checks}

**SSH：** 检查 host、port、username、认证方式和网络可达性。优先从已保存的连接配置开始，用 `pwd` 等只读命令确认当前路径。

**AI Provider / API Key：** 核对 base URL、模型名称和 Provider 账户权限。模型访问及 API 费用由所选 Provider 决定；请勿将 API Key 发给支持人员。

## 购买、恢复与取消 {#purchases}

已购买但未解锁时，先确认 **Apple / Google 商店账户**是否为原购买账户，再检查 NimoteCode 登录账户及应用中的 **恢复购买 / Restore Purchase**。商店账户与应用账户是两种不同身份。不要为排障重复购买。

| 需要处理 | Apple App Store | Google Play |
| --- | --- | --- |
| 管理或取消订阅 | [打开订阅管理](https://apps.apple.com/account/subscriptions) | [打开订阅管理](https://play.google.com/store/account/subscriptions) |
| 申请退款 | [Apple 退款入口](https://reportaproblem.apple.com/) | [Google Play 退款说明](https://support.google.com/googleplay/answer/2479637) |

卸载应用、退出登录和删除账户不会自动取消订阅。取消通常在已付费周期结束时生效；具体以商店规则及适用法律为准。Early Access 或应用设备试用本身不自动扣费；商店订阅试用可能转为付费。详见[服务条款](/zh/terms#billing)。

## 自助指南 {#guides}

- [AI Provider 与凭据配置](/zh/docs/configuration) · [账户与订阅](/zh/docs/account-subscription)
- [Android Local Linux](/zh/docs/local-linux) · [插件工作流](/zh/docs/plugins)
- [Git Source Control](/zh/docs/source-control) · [同步与缓存](/zh/docs/sync-cache)
- [常见问题](/zh/docs/faq) · [更新日志](/zh/changelog)

## 联系支持 {#contact}

<div class="trust-summary">

**私密支持：** [support@nimotecode.com](mailto:support@nimotecode.com?subject=NimoteCode%20support)

账户、订阅、隐私、删除及安全漏洞请通过邮箱联系。紧急访问问题通常在 1–2 个工作日首次回复，常规请求通常在 2–3 个工作日首次回复；这不是解决时限或全天候服务承诺。

</div>

邮件可参考以下格式；账户邮箱和订单标识仅在相关问题需要时提供：

```text
问题类型：
平台 / 系统版本 / NimoteCode 版本：
工作区：本地 / SSH / Android Local Linux
复现步骤：
预期结果与实际结果：
已尝试的操作：
脱敏后的错误信息：
```

请勿发送完整工作区、原始日志包、付款卡号或登录验证码。我们如需补充信息，会说明用途。公开的产品问题和功能建议可提交至 [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues)；**不要在公开 Issue 中填写账户邮箱、订单、密钥或未脱敏截图**。

## AI 回复与安全问题 {#ai-report}

当前版本的 AI 回复举报入口会保存本地报告，并尝试打开邮件草稿；**保存报告或打开草稿不等于已发送给支持**。请检查并发送邮件；如果邮件客户端不可用，可将必要的脱敏内容发送至支持邮箱。报告可包含原因、Provider、模型、版本和问题回复片段，无需提供完整对话或 API Key。

## 隐私与删除 {#privacy}

[隐私政策](/zh/privacy)说明数据去向与控制方式；[账户删除](/zh/account-delete)提供应用内步骤和无需登录的网页请求方式。网站统计可随时在页脚“网站隐私设置”中调整，该选择不控制移动应用的统计。
