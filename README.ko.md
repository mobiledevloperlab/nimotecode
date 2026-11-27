<p align="center">
  <img src="docs/public/app_icon_rounded.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — 모바일 AI IDE 및 SSH 작업 공간</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <strong>한국어</strong></p>

<p align="center">
  <strong>내 프로젝트와 도구를 어디서나.</strong><br>
  Android, iPhone, iPad를 위한 편집기, SSH 터미널, Git과 AI Agent.
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad"></a>
</p>

<p align="center">
  <a href="https://nimotecode.com/ko/releases/2.4.1"><img src="https://img.shields.io/badge/NimoteCode-2.4.1-2563EB?style=flat-square" alt="NimoteCode 2.4.1"></a>
  <a href="https://nimotecode.com/ko/docs"><img src="https://img.shields.io/badge/docs-online-2563EB?style=flat-square" alt="Documentation"></a>
  <a href="https://github.com/mobiledevloperlab/nimotehost"><img src="https://img.shields.io/badge/NimoteHost-Apache--2.0-64748B?style=flat-square" alt="NimoteHost companion license: Apache-2.0"></a>
</p>

<p align="center">
  <a href="#workspace-demo">데모</a> ·
  <a href="#workflow">개발 흐름</a> ·
  <a href="#workspace-modes">네 가지 모드</a> ·
  <a href="#quick-start">빠른 시작</a> ·
  <a href="#latest-release">2.5.0 · 출시 예정</a> ·
  <a href="#nimotehost">NimoteHost</a> ·
  <a href="https://nimotecode.com/ko/docs">문서</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">문제 보고</a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.svg?v=6d554a40db88" alt="NimoteCode 2.4.1 원격 프로젝트 파일 및 Python 편집기" width="1000">
</p>

NimoteCode는 **로컬 및 SSH 프로젝트를 위한 모바일 IDE**입니다. 파일 탐색, 코드 편집, 프로젝트 명령 실행, Git diff 검토를 하나의 작업 공간에서 이어갑니다. 원하는 AI 제공자를 연결하거나 개발 컴퓨터에 설치한 Agent를 사용할 수 있습니다.

**네 가지 모드 · 나만의 개발 환경 · 선택형 AI**

<a id="workspace-demo"></a>

## 데모

영상에서 작업 공간을 살펴보세요. [영상 직접 열기](https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4)。

<div align="center">
  <video src="https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4" controls muted playsinline width="420"></video>
</div>

## NimoteCode를 선택하는 이유

| 하고 싶은 작업 | 연결된 개발 흐름 |
| --- | --- |
| **휴대폰에서 프로젝트 이어가기** | SSH/SFTP 파일, 코드 편집기와 호스트 도구를 사용하는 터미널. |
| **태블릿에서 개발하기** | 파일 트리, 검색, 분할 편집기, Markdown 및 웹 미리보기. |
| **변경 사항 검증하기** | 프로젝트 명령과 작업 옆에서 Git 상태, 기록과 diff 확인. |
| **AI와 협업하기** | Chat, 내장 Agent, MCP 도구와 호환 ACP Agent. |
| **원격 작업으로 돌아오기** | 연결을 끊어도 내 컴퓨터에서 유지되는 NimoteHost 관리 세션. |
| **Android에서 로컬 개발하기** | root 없이 PRoot 기반 Ubuntu, Bash, Git, SSH 사용. |

<a id="workspace-modes"></a>

## 명령 하나부터 프로젝트 전체까지, 네 가지 모드

파일, 명령, 코드 변경, Agent 작업에 맞는 전용 화면을 선택하세요.

<table>
  <tr>
    <td rowspan="5" width="180" align="center" valign="middle"><a href="docs/public/images/placeholders/host-mode.png?v=8ed6f40a441c"><img src="docs/public/screenshots/host-mode-framed.svg?v=0b26255ed795" alt="NimoteCode 네 가지 모드: Full IDE, Quick Terminal, AI Workspace, Host" width="160"></a></td>
    <th>모드</th>
    <th>언제 사용하나요?</th>
    <th>작업 환경</th>
  </tr>
  <tr>
    <td valign="top"><strong>IDE</strong></td>
    <td valign="top">프로젝트 읽기, 편집, 검토.</td>
    <td valign="top">파일 트리, 검색, 분할 편집기, 터미널과 Git을 한 작업대에서 사용.</td>
  </tr>
  <tr>
    <td valign="top"><strong>AI</strong></td>
    <td valign="top">질문, 작업 위임, 실행 과정 확인.</td>
    <td valign="top">프로젝트 맥락, Chat 및 Agent, 도구 출력, 승인 요청과 결과.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Terminal</strong></td>
    <td valign="top">빌드, 셸 명령, 대화형 CLI 실행.</td>
    <td valign="top">터미널 중심 화면, 확장 키, 기록 검색과 호스트의 기존 도구.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Host</strong></td>
    <td valign="top">컴퓨터에서 실행 중인 작업으로 복귀.</td>
    <td valign="top">NimoteHost 관리 터미널, 호환 Agent, 작업과 검증 기록.</td>
  </tr>
</table>

**IDE, Terminal, AI를 전환해도 프로젝트와 파일 탐색기 상태가 유지됩니다. Host는 NimoteHost 관리 세션에 연결합니다.** IDE에서 문제를 살펴보고, Terminal에서 검사하고, AI에 변경을 맡긴 뒤 Host에서 원격 작업을 이어가세요.

SSH 접속부터 편집, Git 검토, Agent 실행과 세션 복구까지 이어지는 개발 흐름입니다. SSH의 Docker와 Compose, Dev Container, 언어 서비스, 디버깅과 맞춤 플러그인으로 확장할 수 있습니다.

[전체 기능](https://nimotecode.com/ko/features) · [모바일 개발 도구 비교](https://nimotecode.com/ko/compare/mobile-ai-development-tools)

<a id="workflow"></a>

## 하나의 프로젝트, 코드에서 검토까지

SSH 프로젝트를 열고, 코드를 살펴보고, Agent와 협업한 뒤 호스트에서 명령을 실행하고 변경 사항을 검토하세요. 모바일에서도 개발 흐름을 이어갈 수 있습니다.

<table>
  <tr>
    <th width="25%" align="center">1 · 코드 살펴보기</th>
    <th width="25%" align="center">2 · Agent와 협업</th>
    <th width="25%" align="center">3 · 명령 실행</th>
    <th width="25%" align="center">4 · 변경 검토</th>
  </tr>
  <tr>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/editor-code-selection.png?v=3bc86359abb3"><img src="docs/public/screenshots/editor-code-selection-framed.svg?v=5419f1211a45" alt="1 · 코드 살펴보기" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/ai-plan-running.jpg?v=7cdbc72fe334"><img src="docs/public/screenshots/ai-plan-running-framed.svg?v=50b2a9e2632d" alt="2 · Agent와 협업" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/terminal-command-output.png?v=8a8c20322c4e"><img src="docs/public/screenshots/terminal-command-output-framed.svg?v=62963867fed1" alt="3 · 명령 실행" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/source-control-changes.png?v=f08e4471badb"><img src="docs/public/screenshots/source-control-changes-framed.svg?v=15712f667c09" alt="4 · 변경 검토" width="220"></a></td>
  </tr>
  <tr>
    <td valign="top">구문 강조와 줄 번호로 프로젝트 파일을 읽고 편집합니다.</td>
    <td valign="top">실행 타임라인에서 Agent의 계획, 파일 읽기와 도구 활동을 확인합니다.</td>
    <td valign="top">호스트 셸과 설치된 도구로 프로젝트 검사를 실행합니다.</td>
    <td valign="top">Source Control에서 변경 파일을 확인하고 커밋 전에 diff를 검토합니다.</td>
  </tr>
</table>

<sub>ADB로 캡처한 NimoteCode 2.4.1 Android 실제 화면입니다. 클릭하면 원본을 볼 수 있습니다.</sub>

잠시 자리를 비워야 하나요? [Host 모드](#nimotehost)에서 컴퓨터의 NimoteHost 관리 호환 세션으로 돌아올 수 있습니다.

<a id="quick-start"></a>

## 작은 변경부터 시작하세요

1. **설치:** [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) 또는 [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253)에서 설치합니다.
2. **프로젝트 열기:** 로컬 폴더, 설정된 SSH 호스트 또는 Demo를 선택하세요. AI 설정 없이 시작할 수 있습니다.
3. **편집 → 실행 → 검토:** 파일을 바꾸고 환경에서 지원하는 검사를 실행한 뒤 Git 저장소에서 diff를 확인하세요.

[빠른 시작 →](https://nimotecode.com/ko/docs/quick-start)

### 코드가 실행되는 위치

| 작업 공간 | 파일과 도구의 위치 | 필요한 것 |
| --- | --- | --- |
| **로컬** | 기기에서 파일 탐색 및 편집. | 열 수 있는 폴더. 시스템이 허용한 외부 폴더는 도구 사용에 제한이 있습니다. |
| **SSH** | Linux, macOS 또는 Windows 호스트. | 접근 가능한 SSH 서버, 프로젝트와 설치된 개발 도구. |
| **Android Local Linux** | Android의 Ubuntu. 앱 로컬 프로젝트를 `/mnt/local`로 공유. | 지원되는 Android 8+ ARM64 / x86_64 기기. |
| **Host** | NimoteHost가 관리하는 내 컴퓨터. | SSH와 실행 중인 호환 NimoteHost. |

iPhone과 iPad에서는 Local Linux를 사용할 수 없으며 SSH 호스트에서 개발 명령을 실행할 수 있습니다. Git, LSP, 디버깅, Tasks, 파일 감시와 Agent에는 네이티브 파일 경로가 필요합니다. 기능은 환경, 설치된 도구와 앱 이용 권한에 따라 달라집니다.

<a id="latest-release"></a>

## NimoteCode 2.5.0 · 출시 예정

- 개인 Tailscale을 통해 페어링된 컴퓨터에 SSH로 연결하세요.
- Pro에서 지속 tmux 세션을 재개하고, SSH로 NimoteHost를 설치하거나 업데이트할 수 있습니다.
- SSH 재연결과 터미널 입력, 스크롤, 복사를 개선했습니다.
- 휴대전화 탐색 메뉴를 개편하고 작업 공간 검색 결과를 강조합니다.
- 내장 Codex가 빨라졌으며 Android 로컬 Linux 개발 도구 모음을 지원합니다.
- Free에서는 Git 상태와 차이 확인, 스테이징, 스테이징 취소 및 커밋을 지원합니다. GUI 푸시·풀·브랜치·스태시, Git AI 및 고급 GitHub 통합에는 Pro가 필요합니다. Docker 및 Dev Container에는 Pro와 호환 호스트가 필요합니다. 디버깅에는 Pro 및 구성된 디버그 어댑터가 필요합니다.

[2.5.0 전체 릴리스 노트 읽기](https://nimotecode.com/ko/releases/2.5.0) · [현재 출시 버전 2.4.1](https://nimotecode.com/ko/releases/2.4.1)

<a id="nimotehost"></a>

## NimoteHost: 앱을 떠나도 작업은 계속

Linux, macOS, Windows용 선택형 자체 호스팅 서비스입니다. 휴대폰 연결을 끊은 뒤 SSH로 컴퓨터의 터미널이나 호환 **Codex, Claude Code, OpenCode** 대화에 돌아갈 수 있습니다.

Host 기능에 따라 도구 출력, 승인, 작업과 검증 결과를 확인하세요. CLI나 데스크톱 관리자를 선택하거나 전체 **Apache-2.0 소스**를 직접 빌드하고 확장할 수 있습니다.

컴퓨터의 OS와 CPU에 맞는 호환 패키지를 실행하고 NimoteCode 2.4.1 이상의 **Host → SSH connections**로 연결하세요. Host 또는 OS를 재시작하면 프로세스가 중단됩니다. Agent 설치와 인증은 별도로 필요하며 일반 SSH 작업 공간은 Host 없이 사용할 수 있습니다.

[설치 가이드](https://nimotecode.com/ko/docs/host/getting-started) · [소스](https://github.com/mobiledevloperlab/nimotehost) · [Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases)

## 원하는 도구와 제공자로 AI 사용하기

| 방식 | 용도 |
| --- | --- |
| **AI Chat** | 프로젝트 맥락에 따라 코드와 터미널 출력 설명. |
| **내장 Agent** | 지원 작업 공간에서 조사, 계획, 파일 편집과 검사 실행. |
| **MCP** | 설정된 도구를 연결하고 도구 호출 승인. |
| **ACP Agent** | 별도로 설치한 호환 런타임을 대화 화면에서 사용. |
| **SSH CLI** | 호스트에 설치한 Claude Code, Codex 등을 직접 실행. |

**모델 크레딧과 제공자 구독은 NimoteCode와 별개입니다.** 자신의 인증 정보를 설정하고 커밋 전에 변경 사항과 검사 결과를 검토하세요.

[AI 설정](https://nimotecode.com/ko/docs/configuration) · [Agent와 MCP](https://nimotecode.com/ko/docs/ai)

<!-- major-comparison:start -->
## NimoteCode와 주요 경쟁 제품 5종 비교

자료 확인 시각: **2026-11-25 13:50:25 (UTC)** · 공식 문서, 웹사이트와 공개 릴리스 자료 기준

**개발 작업은 내 컴퓨터에서 실행하고, 휴대전화에서 코드를 살펴보고 터미널을 관리하며 호환 AI 세션을 복원하고 승인에 응답하세요.**

NimoteCode 팀이 공개 문서로 정리한 위 UTC 시각 기준의 자료이며 실시간 데이터나 성능 측정 결과가 아닙니다. 모든 앱을 동일 기기와 동일 조건의 스토어 버전으로 실측하지 않았고, 문서가 정식 출시보다 앞설 수 있습니다. ✅는 공식 자료에서 명시한 지원(명시된 통합 포함), ◐는 부분 지원 또는 플러그인·원격 환경·설정에 대한 의존, —는 해당 기본 기능을 확인하지 못했음을 뜻합니다. 상태를 누르면 공식 출처가 열립니다. —가 외부 도구로도 구현할 수 없다는 뜻은 아니며, ◐도 동일한 사용 경험을 보장하지 않습니다.

### 핵심 기능 비교

| 기능 | [NimoteCode](https://nimotecode.com/ko/docs/host) | [Blink Shell](https://docs.blink.sh/advanced/code) | [Termius](https://www.termius.com/) | [Acode](https://docs.acode.app/user-guide/) | [Replit](https://docs.replit.com/features/platforms/mobile-app) | [Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) |
| --- | --- | --- | --- | --- | --- | --- |
| Android | [✅](https://nimotecode.com/ko/download) | — | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ 브라우저](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| iOS / iPadOS | [✅](https://nimotecode.com/ko/download) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-iphone) | [— 출시 예정](https://acode.app/ai-coding-ios) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ 브라우저](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| SSH 터미널 | [✅](https://nimotecode.com/ko/docs/ssh) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://github.com/Acode-Foundation/Acode#readme) | — | — |
| Mosh | — | [✅](https://docs.blink.sh/advanced/advanced-mosh) | [✅](https://www.termius.com/free-ssh-client-for-android) | — | — | — |
| 그래픽 코드 편집기 | [✅](https://nimotecode.com/ko/docs/editor) | [✅](https://docs.blink.sh/advanced/code) | — | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace) |
| 기기 내 Linux 환경 | [✅ Android · 기본 기능 무료](https://nimotecode.com/ko/docs/local-linux) | — | — | [✅ Android](https://docs.acode.app/user-guide/terminal) | — | — |
| Git 그래픽 작업 | [✅ 기본 커밋 무료](https://nimotecode.com/ko/docs/source-control) | [◐](https://docs.blink.sh/advanced/code) | — | — | [✅ 프로젝트 편집기](https://docs.replit.com/features/workspace-tools/git-interface) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) |
| LSP 코드 지원 | [✅ 기본 기능 무료](https://nimotecode.com/ko/docs/lsp) | — | — | [✅](https://docs.acode.app/user-guide/language-servers) | — | [◐ 언어 확장](https://code.visualstudio.com/docs/remote/codespaces) |
| AI 코딩 | [✅ 무료 Agent 횟수 제한](https://nimotecode.com/ko/docs/ai) | — | [◐ 명령 자동 완성](https://www.termius.com/pricing) | [◐ 공식 플러그인](https://docs.acode.app/tutorials/ai-agent) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Copilot 확장](https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces) |
| VS Code 확장 | — | [◐](https://docs.blink.sh/advanced/code) | — | — | — | [✅](https://code.visualstudio.com/docs/remote/codespaces) |
| 내 컴퓨터에서 원격 개발 | [✅](https://nimotecode.com/ko/docs/ssh) | [✅](https://docs.blink.sh/advanced/code) | [◐ SSH 터미널](https://www.termius.com/free-ssh-client-for-android) | [◐](https://docs.acode.app/user-guide/remote-access) | — | — |
| 지속 터미널 세션 | [✅ Host · Pro](https://nimotecode.com/ko/docs/host) | [◐ Mosh](https://docs.blink.sh/advanced/advanced-mosh) | [◐ Mosh](https://www.termius.com/free-ssh-client-for-android) | [◐ Android 서비스](https://docs.acode.app/user-guide/terminal) | — | [◐ 실행 중 작업 공간](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle) |
| Agent 세션 복원 및 승인 | [✅ Host · Pro](https://nimotecode.com/ko/docs/host) | — | — | [◐ 공식 플러그인](https://docs.acode.app/tutorials/ai-agent) | — | — |
| 프로젝트 작업 수신함 | [✅ Host · Pro](https://nimotecode.com/ko/docs/host) | — | — | — | [✅ 클라우드 작업 보드](https://docs.replit.com/features/agent/task-board) | — |

### 사용 조건과 비교 해석

NimoteCode 권한은 출시 예정인 2.5.0 요금제 비교와 Host 문서를 기준으로 하며 실제 계정 권한은 설치된 버전에서 확인하세요. NimoteHost Community의 복원, 승인, Task Inbox는 Host 버전·설정과 Agent 호환성에 의존합니다. 컴퓨터, Host 및 관리 프로세스가 계속 실행되어야 하며 Host나 OS 재시작은 원래 프로세스를 복원하지 않습니다. NimoteHost, 지속 원격 터미널 및 기기 간 AI 세션 인계에는 체험판 또는 Early Access를 포함한 유효한 Pro 권한이 필요합니다. 지원되는 Android 기기에서 기본 로컬 Linux를 무료로 실행할 수 있습니다. 개발 도구 관리와 공유 폴더 가져오기에는 Pro가 필요합니다. Free에서는 Git 상태와 차이 확인, 스테이징, 스테이징 취소 및 커밋을 지원합니다. GUI 푸시·풀·브랜치·스태시, Git AI 및 고급 GitHub 통합에는 Pro가 필요합니다. 설정된 언어 도구를 사용하는 기본 LSP 완성·진단·탐색은 무료이고 코드 작업, 서버 설치 안내와 디버깅은 Pro가 필요합니다. 권한 범위는 무료·Pro 안내를 확인하세요.

Blink Code는 VS Code 서비스를 통합합니다. 문서에 명시된 저장소 편집과 확장은 연결된 환경에 의존합니다. Blink의 LSP와 AI Agent 작업 흐름은 개별 확인되지 않아 원격 IDE를 열 수 있다는 이유만으로 지원으로 계산하지 않습니다. 로컬 Unix 명령 도구는 완전한 Linux 환경이 아닙니다. Mosh 로밍, tmux 재접속, 구조화된 Agent 세션 복원은 각각 조건이 다릅니다.

Acode는 Android Alpine Linux와 기본 LSP 통합을 문서화했습니다. 각 언어 서버는 별도로 활성화하거나 설치해야 합니다. 공식 AI Agent에는 version code 1002 이상, 별도 플러그인과 제공자 설정이 필요하며 대화 저장과 승인을 지원합니다. iPhone/iPad는 계속 Coming soon으로 표시되어 정식 출시된 iOS 기능으로 계산하지 않습니다. Android 터미널의 백그라운드 실행은 포그라운드 서비스와 OS 프로세스 관리에 의존합니다. Git 그래픽 작업은 미확인이며 Git CLI만 사용할 수 있다는 사실은 충분한 근거가 아닙니다.

Replit은 모바일 프로젝트 편집, Git 패널과 Agent 작업 검토를 문서화했습니다. SSH 문서는 내 컴퓨터에 연결하는 모바일 SSH 클라이언트가 아니라 Replit 클라우드 앱에 접속하는 방법입니다. 모바일 LSP, 지속 터미널 프로세스, 승인을 포함한 구조화된 Agent 복원은 확인되지 않았습니다. 작업 보드는 명확히 문서화되었고 모바일 Tasks 패널로 접근할 수 있습니다. Codespaces는 브라우저나 VS Code로 접속하는 클라우드 개발 환경이며 휴대전화 브라우저 접속이 기본 앱이나 동일한 편의성을 뜻하지는 않습니다. Copilot에는 별도 확장과 이용 권한이 필요합니다. 프로세스 유지는 실행 중인 codespace에 한하며 유휴 시간 초과나 문서에 정해진 최대 실행 시간에 도달하면 중지됩니다. 클라우드 Shell은 기본 SSH 클라이언트가 아니고 Copilot 작업 관리도 Codespaces 기본 수신함이나 Agent 복원으로 계산하지 않습니다.

[NimoteCode 무료·Pro 권한](https://nimotecode.com/ko/pro) · [Host 사용 조건](https://nimotecode.com/ko/docs/host) · [Acode iOS 출시 상태](https://acode.app/ai-coding-ios) · [Replit SSH 연결 방향](https://docs.replit.com/features/workspace-tools/ssh)

### 휴대전화에서 개발 이어가기

| 작업 | 일반적인 SSH 구성 | NimoteCode + Host |
| --- | --- | --- |
| 휴대전화와 컴퓨터 연결 | SSH | SSH + Host 작업 공간 |
| 프로젝트 코드 읽기 | 주로 터미널 도구나 별도 편집기 | 내장 그래픽 편집기 |
| 편집 및 변경 검토 | Git CLI 또는 다른 도구 | 편집기 + Git Diff |
| 앱을 떠난 뒤에도 실행 | tmux·Mosh 등의 호스트 설정 | Host가 관리하는 작업과 세션 |
| AI 결과 다시 확인 | CLI를 다시 열거나 세션 재접속 | 호환 Agent의 구조화된 대화 복원 |
| Agent 승인 처리 | 사용하는 CLI에 의존 | Host에서 호환 승인 통합 표시 |
| 처리가 필요한 작업 찾기 | 로그나 세션 수동 확인 | Task Inbox |

SSH 표는 일반적인 터미널 중심 구성이며 Blink Shell이나 Termius의 모든 기능을 나타내지 않습니다. 원격 개발과 AI 코딩은 NimoteCode만의 기능이 아닙니다. 평가할 조합은 내 컴퓨터에서 개발 작업을 실행하고 휴대전화에서 코드, 터미널, 호환 Agent 세션 복원과 승인을 관리하는 경험입니다.

### 경쟁 제품의 강점과 개선 우선순위

우선순위는 NimoteCode 팀의 제품 판단이며 시장 점유율이나 성능 측정 순위가 아닙니다. 기능 근거는 공식 자료에서 확인할 수 있습니다.

| 제품 | 주요 강점 | NimoteCode 개선 방향 | 우선순위 |
| --- | --- | --- | --- |
| Acode | Android 편집기, Linux, 플러그인, AI와 오픈 소스 생태계 | 모바일 IDE 완성도를 높이고 Host와 원격 Agent 승인을 시연 | 매우 높음 |
| Blink Shell | Mosh, 터미널·키보드 작업 흐름과 Blink Code | 터미널 편의성을 개선하고 Host·Git 통합을 보여주기 | 매우 높음 |
| Termius | 호스트 관리, 동기화, SFTP, Mosh와 팀 접근 | 연결과 기존 프로젝트 작업 재개를 단순화 | 높음 |
| GitHub Codespaces | 호스팅 개발 환경과 VS Code 생태계 | 내 컴퓨터와 기존 도구 체인에서 개발하는 흐름 강조 | 중간 |
| Replit | AI 앱 생성, 호스팅과 배포 | 기존 프로젝트의 지속 개발, 검토와 승인에 집중 | 중간 |
<!-- major-comparison:end -->

## 문서와 가이드

| 시작하기 | 더 알아보기 |
| --- | --- |
| [편집기](https://nimotecode.com/ko/docs/editor) | [Git과 GitHub](https://nimotecode.com/ko/docs/source-control) |
| [SSH와 SFTP](https://nimotecode.com/ko/docs/ssh) | [프로젝트 작업](https://nimotecode.com/ko/docs/tasks) |
| [터미널](https://nimotecode.com/ko/docs/terminal) | [Docker](https://nimotecode.com/ko/docs/docker) |
| [Local Linux](https://nimotecode.com/ko/docs/local-linux) | [플러그인](https://nimotecode.com/ko/docs/plugins) |

[전체 문서](https://nimotecode.com/ko/docs) · [FAQ](https://nimotecode.com/ko/docs/faq) · [실전 가이드·영문](resources/README.md) · [Linux 프리셋](presets/README.md)

## 커뮤니티와 기여

[버그 및 기능 요청](https://github.com/mobiledevloperlab/nimote_issues/issues) · [Discord](https://discord.gg/tTxbpqYmhR) · [X](https://x.com/mobiledevlab) · [공식 웹사이트](https://nimotecode.com/ko/)

앱 버전, 기기와 OS, 작업 공간 유형, 재현 단계, 인증 정보를 제거한 로그를 함께 알려주세요. 문서 수정, 번역과 예제는 Pull Request로 기여할 수 있습니다. Host 코드 기여는 [NimoteHost](https://github.com/mobiledevloperlab/nimotehost)로 보내주세요.

## 이 저장소에 대하여

**NimoteCode는 상용 비공개 소스 앱입니다.** 이 저장소에는 공식 웹사이트, 문서, 가이드와 릴리스 노트가 있으며 앱 소스는 포함되지 않습니다.

[NimoteHost](https://github.com/mobiledevloperlab/nimotehost)는 Apache-2.0, [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE)는 MIT입니다. [Local Linux 소스와 라이선스 고지](https://nimotecode.com/ko/docs/local-linux-source)는 타사 구성 요소에 적용됩니다. 각 라이선스는 해당 구성 요소에 적용되며 앱이나 저장소 전체에 적용되지 않습니다.

<details>
<summary>웹사이트와 문서 유지 관리</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
node scripts/generate-readme-screenshot.mjs
npm run docs:build
npm run docs:check
```

Node 24 (`.nvmrc`); `npm run docs:dev`.

</details>

---

## 함께 더 나은 NimoteCode 만들기

NimoteCode가 도움이 되었다면 [⭐ Star](https://github.com/mobiledevloperlab/nimotecode)로 다른 개발자에게도 알려주세요.

개선 아이디어, 기능 요청 또는 버그가 있나요? 앱 내 피드백이나 [GitHub Issues](https://github.com/mobiledevloperlab/nimote_issues/issues)로 알려주세요. 실제 사용 경험이 앞으로의 개선에 도움이 됩니다.
