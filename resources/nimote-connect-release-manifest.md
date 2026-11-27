# Nimote Connect 发行清单

安装向导可通过 `GET https://nimotecode.com/downloads/nimote-connect/releases.json` 获取 JSON。安装包的 `downloadUrl` 指向 [Nimote Connect 官方 GitHub Releases](https://github.com/mobiledevloperlab/nimote-connect/releases)。

| 字段 | 类型与含义 |
| --- | --- |
| `schemaVersion` | 整数，当前为 `1`。 |
| `generatedAt` | UTC ISO 8601 字符串，表示清单生成时间。 |
| `packages` | 非空数组，每项对应一个发行附件。数组顺序没有约定。 |
| `packages[].tag` | GitHub 发行标签，例如 `v1.2.0`。 |
| `packages[].version` | 版本号，例如 `1.2.0`。 |
| `packages[].prerelease` | 布尔值。当前清单仅发布稳定包，此字段为 `false`。 |
| `packages[].os` | `darwin`（macOS）、`linux` 或 `windows`。 |
| `packages[].arch` | `amd64`（x86-64）或 `arm64`。 |
| `packages[].packageType` | `cli` 或 `gui`。上游使用 `nimote-connect-commercial-` 前缀标识 GUI。 |
| `packages[].fileName` | GitHub 附件文件名。 |
| `packages[].downloadUrl` | 对应 GitHub 发行附件的 HTTPS 下载地址。 |
| `packages[].sizeBytes` | 以字节计的文件大小，正整数。 |
| `packages[].sha256` | 文件 SHA-256，64 位小写十六进制字符串。 |

App 按系统、架构和包类型筛选，并按语义版本选择受支持的稳定包。App 自行判断是否支持对应平台的自动安装，下载后校验字节数和 SHA-256。

以下示例取自真实的 `v1.2.0` 发行附件，仅展示其中一个包。完整快照见 [releases.json](../docs/public/downloads/nimote-connect/releases.json)。

```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-11-27T13:21:19.557Z",
  "packages": [
    {
      "tag": "v1.2.0",
      "version": "1.2.0",
      "os": "windows",
      "arch": "amd64",
      "packageType": "cli",
      "prerelease": false,
      "fileName": "nimote-connect-1.2.0-windows-amd64.zip",
      "downloadUrl": "https://github.com/mobiledevloperlab/nimote-connect/releases/download/v1.2.0/nimote-connect-1.2.0-windows-amd64.zip",
      "sizeBytes": 13344696,
      "sha256": "58f27f6c2d685027a436e34fc9b8285df570150bcacb2bf9126c58059f4c212e"
    }
  ]
}
```

## 刷新

官网 `main` 分支的推送会触发 [Pages 发布工作流](../.github/workflows/deploy.yml)。上游发版后，也可在官网仓库的 **Actions → Deploy NimoteCode-OFFICAL SITE to Pages → Run workflow** 选择 `main` 手动刷新。CI 优先读取 GitHub 附件的 SHA-256 元数据，缺失或无效时读取对应的 `.sha256` 附件。公开 API 可匿名访问。如需认证，在官网仓库的 Actions secrets 中设置 `NIMOTE_CONNECT_RELEASES_TOKEN`，授予上游仓库 Contents 只读权限。

CI 在构建前生成清单，并在上传 Pages 产物前校验 JSON 与文件内容。API 或下载请求失败、附件地址校验失败、清单为空或产物校验失败时，工作流停止发布，线上继续提供上次成功部署的清单。仓库内的快照用于本地和 PR 的离线构建。

```sh
node scripts/nimote-connect-manifest.mjs refresh
node --test scripts/nimote-connect-manifest.test.mjs
npm run docs:build
npm run docs:check
```
