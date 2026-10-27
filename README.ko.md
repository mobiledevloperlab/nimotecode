<p align="center"><img src="docs/public/app_icon_round.png" alt="NimoteCode 로고" width="88" height="88"></p>

<h1 align="center">NimoteCode — Android / iOS용 모바일 IDE</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · 한국어</p>

<p align="center"><strong>휴대폰이나 태블릿에서 프로젝트를 계속 진행하세요.</strong><br>로컬 프로젝트를 열거나 SSH로 개발 호스트에 연결하세요. 하나의 모바일 작업 공간에서 코드를 편집하고, 명령을 실행하고, Git 변경 사항을 검토하고, AI와 함께 작업할 수 있습니다.</p>

<p align="center"><sub>코드 편집기&nbsp;&nbsp;•&nbsp;&nbsp;SSH 터미널&nbsp;&nbsp;•&nbsp;&nbsp;Git&nbsp;&nbsp;•&nbsp;&nbsp;AI 코딩<br>지원되는 Android 기기에서 root 없이 Ubuntu 사용</sub></p>

<p align="center"><a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-설치-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Google Play에서 Android용 NimoteCode 설치"></a> <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-다운로드-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="App Store에서 NimoteCode 다운로드"></a></p>

## 데모

<p align="center"><a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent 제품 데모 보기</a> · <a href="https://nimotecode.com/videos/ai-agent-demo-small.mp4">대체 MP4 동영상</a></p>

## 프로젝트가 있는 곳에서 개발하세요

- **로컬 프로젝트:** 시스템 선택기로 폴더를 열고 바로 편집을 시작하세요.
- **SSH 개발 호스트:** 원격 파일, 터미널, Git 변경 사항을 하나의 작업 공간에서 다룹니다.
- **Android 로컬 Linux:** 지원되는 Android에서 PRoot Ubuntu, Bash, Git, SSH를 사용하고 로컬 프로젝트를 `/mnt/local`에서 공유합니다.

## 핵심 기능

- **편집 및 탐색:** 휴대폰, 태블릿, 데스크톱에서 Nimote Editor를 사용하고, 파일 검색, 분할 편집기, Markdown 및 웹 미리 보기를 이용하세요.
- **실행 및 검증:** 터미널, 프로젝트 작업, 모바일 추가 키, 집중 모드, 색상표 및 SOCKS5 / HTTP CONNECT SSH 프록시를 사용하세요.
- **Git 검토:** 상태, diff, 기록을 검토하고 Git 헤더에서 브랜치를 검색, 생성, 전환하세요.
- **작업 공간 확장:** Early Access 플러그인 센터에서 맞춤 패널, 양식, 워크플로, 결과 보기, 로컬 또는 SSH 스크립트 작업을 만드세요.

## 원하는 방식의 AI 코딩

| 워크플로 | 사용 방법 |
| --- | --- |
| **AI Chat** | 작업 공간 문맥으로 코드와 터미널 출력을 설명합니다. 자신의 AI 공급자와 API 키를 연결하세요. |
| **내장 Agent** | 파일을 검사하고, 변경을 계획하고, 편집 및 검사를 실행합니다. 실행 중인 Agent에 후속 지시를 추가하고 대화형 질문에 답할 수 있습니다. Early Access에서 제공됩니다. |
| **MCP 도구 서버** | 로컬 또는 SSH 작업 공간에서 내장 Agent용 검증된 MCP 서버를 구성합니다. 모든 도구 호출에는 명시적 승인이 필요합니다. |
| **외부 ACP Agent** | SSH 호스트의 호환 런타임을 연결하고 앱 대화 화면에서 권한과 진행 상황을 검토합니다. |
| **SSH의 Claude Code / Codex** | 자신의 호스트에 설치한 CLI를 터미널에서 실행합니다. |

모델 액세스와 토큰은 포함되지 않습니다. AI가 생성한 변경 사항을 수락하기 전에 명령과 diff를 검토하세요.

## 모바일 개발 도구 비교

**편집 → 검사 실행 → diff 검토 → 작업 공간 확장을 하나의 모바일 IDE에서.** NimoteCode 열은 2.1.0을 반영합니다. `?`는 해당 제품의 기능이 확인되지 않았음을 뜻합니다.

| 주요 기능 | **NimoteCode** | Termius | Blink Shell | ServerCC |
| --- | :---: | :---: | :---: | :---: |
| SSH 연결 | ✅ | ✅ | ✅ | ✅ |
| 코드 편집기 | ✅ | ? | ✅ | ? |
| 맞춤 플러그인 / 패널 | ✅ ¹ | ? | ? | ? |
| Git / diff UI | ✅ ¹ | ? | ◐ | ✅ |
| Git 브랜치 작업 | ✅ ¹ | ? | ? | ? |
| 내장 AI Agent | ✅ ¹ | ? | ? | ? |
| 실행 중인 AI Agent 계속 진행 | ✅ ¹ | ? | ? | ? |
| 내장 MCP 도구 서버 | ✅ ¹ | ? | ? | ? |
| LSP 진단 | ✅ ¹ | ? | ◐ | ? |
| 웹 / 앱 미리 보기 | ✅ | ? | ? | ✅ |
| SOCKS5 / HTTP CONNECT SSH 프록시 | ✅ | ? | ? | ? |
| Android 로컬 Linux | ✅ ² | ? | ? | ? |
| Mosh 전송 | ? | ✅ | ✅ | ? |

<details><summary>Redock, Orca, Moshi와 비교</summary>

| 주요 기능 | **NimoteCode** | Redock | Orca | Moshi |
| --- | :---: | :---: | :---: | :---: |
| SSH 연결 | ✅ | ✅ | ◐ | ✅ |
| 코드 편집기 | ✅ | ? | — | ? |
| 맞춤 플러그인 / 패널 | ✅ ¹ | ? | ? | ? |
| Git / diff UI | ✅ ¹ | ? | ✅ | ✅ |
| Git 브랜치 작업 | ✅ ¹ | ? | ? | ? |
| 내장 AI Agent | ✅ ¹ | ? | ? | ? |
| 내장 MCP 도구 서버 | ✅ ¹ | ? | ? | ? |
| LSP 진단 | ✅ ¹ | ? | ? | ? |
| 웹 / 앱 미리 보기 | ✅ | ✅ | ✅ | ✅ |
| SOCKS5 / HTTP CONNECT SSH 프록시 | ✅ | ? | ? | ? |
| Android 로컬 Linux | ✅ ² | ? | ? | ? |
| Mosh 전송 | ? | ✅ | ? | ✅ |

Orca 모바일에는 데스크톱 Companion이 필요합니다. Moshi의 diff와 웹 미리 보기에는 Pro 및 호스트 hook이 필요합니다. Redock의 미리 보기는 호스트 개발 서버를 사용합니다.

</details>

¹ 플러그인 센터, Agent(실행 중 후속 지시 및 구성된 MCP 도구 서버 포함), Git 쓰기 및 LSP는 Early Access 대상이며 Git 상태, diff 및 기록은 무료입니다. ² 지원되는 Android 8+ ARM64 / x86_64가 필요합니다. 내장 Agent에는 자신의 AI 공급자가, LSP에는 구성된 호스트 언어 서버가 필요합니다.

체크 표시는 무료, 설정 불필요 또는 모든 플랫폼에서 사용 가능함을 뜻하지 않습니다. Blink 편집은 Blink Code를 통해 통합되며 Git / LSP는 리포지토리나 원격 IDE 구성에 따라 달라집니다. Termius Mosh는 여기서 Android만 확인했습니다.

> [공식 근거가 포함된 전체 비교 보기 →](https://nimotecode.com/ko/compare/mobile-ai-development-tools?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_comparison)

## NimoteCode를 사용해 볼 이유

- **언어 도구:** 지원되는 언어 서버로 편집기 진단을 보고 구성된 원격 디버그 어댑터로 디버깅할 수 있습니다. LSP와 디버깅은 Early Access 워크플로이며 적절한 환경 도구가 필요합니다.
- **외부 폴더:** 시스템에서 권한을 부여한 외부 폴더는 탐색과 편집을 지원하지만 Git, LSP, 디버깅, Tasks, 파일 감시 및 Agent에는 네이티브 파일 시스템 경로가 필요합니다.
- **가용성:** 도구는 작업 공간, 설치된 도구 및 플랜에 따라 달라집니다. [기능 참조](https://nimotecode.com/ko/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_features)를 확인하세요.

## NimoteCode 2.1.0 · 작업 공간 및 Agent 개선

| Build | 출시일 | 플랫폼 |
| --- | --- | --- |
| 59 | 2026년 10월 27일 | Android · iPhone · iPad · 데스크톱 |

**기기 전반에서 더 일관된 작업 공간과 대규모 코드베이스에 더 효율적인 Agent.**

- 내장 Agent는 검색 결과 컨텍스트를 제한하고 긴 파일이나 압축 파일에서 가장 관련성 높은 코드를 유지하여 검색과 요약을 더 효율적으로 처리합니다.
- 외관 모드와 강조 색상을 따로 선택할 수 있으며 휴대폰, 태블릿, 데스크톱에서 레이아웃, 컨트롤, 타이포그래피가 더 일관됩니다.
- 가로 방향 작업 공간 페이지와 Git 기록을 편집기 탭으로 열 수 있습니다. 전체 화면 터미널 후에도 헤더가 유지되고 렌더링, 구문 강조, Git diff가 개선되었습니다.
- 파일 검색을 바로 열고 디렉터리 옆에서 원격 상태를 확인할 수 있습니다. 모바일 Agent와 터미널의 드래그, 키보드 선택, 복사도 더 부드러워졌습니다.

> [2.1.0 전체 릴리스 노트 읽기 →](https://nimotecode.com/ko/releases/2.1.0?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_release) · [이전 릴리스](https://nimotecode.com/ko/releases/)

## 시작하기

1. [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) 또는 [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253)에서 NimoteCode를 설치하세요.
2. 로컬 프로젝트를 열고, SSH 호스트에 연결하거나, Demo 작업 공간을 살펴보세요.
3. 작은 변경을 수행하고 사용 가능한 검사를 실행한 뒤 Git diff를 검토하세요.

> [빠른 시작 →](https://nimotecode.com/ko/docs/quick-start?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_quick_start)

**무료로 시작하고 Early Access에서 고급 워크플로를 사용하세요:** 무료에는 로컬, SSH, Android 로컬 Linux 작업 공간, 편집기, 기본 터미널, Git 검토, AI Chat 및 기본 Tasks가 포함됩니다. AI Agent, 원격 콘텐츠 검색, 다중 터미널, Git 쓰기, LSP 및 디버깅은 Early Access로 제공됩니다. 현재 제공 여부와 조건은 [Early Access 세부 정보](https://nimotecode.com/ko/pro?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_plans) 및 앱에서 확인하세요.

스토어 제공 여부와 출시 시점은 플랫폼과 지역에 따라 다를 수 있습니다. [다운로드 및 플랫폼 요구 사항](https://nimotecode.com/ko/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_download)을 확인하세요.

## 리소스

- [공식 웹사이트](https://nimotecode.com/ko/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_website)
- [기능](https://nimotecode.com/ko/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=ko_features)
- [모바일 개발 가이드](resources/README.md) — 로컬 편집, 원격 개발, Git 및 AI 워크플로(영어).
- [워크플로 예제](examples/README.md) — SSH, Claude Code, Codex 및 Android 로컬 Linux(영어).
- [Linux 프리셋](https://github.com/mobiledevloperlab/nimote-linux-presets) — 버전이 지정된 매니페스트와 검증 스크립트를 포함하는 선택적 환경.

## 커뮤니티

버그를 공유하거나 질문하거나 지원되었으면 하는 워크플로를 제안하세요.

<p align="center"><a href="https://discord.gg/tTxbpqYmhR">Discord</a> · <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">문제 신고</a> · <a href="https://x.com/mobiledevlab">X</a></p>

## 이 리포지토리 정보

NimoteCode는 상용 비공개 소스 애플리케이션입니다. 이 리포지토리에는 공식 문서, 튜토리얼, 워크플로 예제 및 릴리스 노트가 포함되며 애플리케이션 소스 코드는 공개되지 않습니다. Linux 프리셋은 별도 리포지토리에서 관리되고 버그 보고에는 위의 이슈 트래커를 사용합니다.

[Local Linux 소스 번들 및 라이선스 고지](https://nimotecode.com/ko/docs/local-linux-source)는 타사 구성 요소를 다루며 NimoteCode 애플리케이션을 오픈 소스로 만들지 않습니다.
