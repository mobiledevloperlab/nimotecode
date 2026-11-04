---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: Android Local Linux, flexible local and SSH workspaces, split editing, live HTML and media preview, terminal, Git, AI Chat and external agents, LSP, debugging, tasks and sync/cache."
---

# NimoteCode 기능

휴대폰과 태블릿에서 프로젝트를 이어 가세요. 코드 편집, 도구가 설치된 환경에서 검사 실행, Git 변경 검토를 하나의 작업 공간에서 진행합니다. 데모나 로컬 폴더로 시작하고 AI는 필요할 때 설정하세요.

<div class="guide-actions">

[첫 작업 공간 열기](/ko/docs/quick-start) · [실용 튜토리얼과 추천 자료](/ko/resources/)

</div>

## NimoteCode로 할 수 있는 일

<div class="guide-card-grid">
<a class="guide-card" href="/ko/docs/editor"><strong>편집부터 실행과 검토까지</strong><span>앱을 바꾸지 않고 코드를 수정하고 터미널에서 검사한 뒤 Git Diff를 검토합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ko/docs/ssh"><strong>기존 개발 환경 활용</strong><span>SSH 호스트에 연결해 설치된 프로젝트와 도구를 계속 사용합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ko/docs/local-linux"><strong>Android에서 Linux 실행</strong><span>지원 기기에서 루팅 없이 Ubuntu를 사용하고 필요한 개발 도구를 추가합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ko/docs/ai"><strong>AI 활용 방식 선택</strong><span>Chat으로 코드를 이해하거나 Agent로 여러 단계의 작업을 진행하고 실행 중 지시를 추가합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ko/docs/source-control"><strong>휴대폰에서 GitHub 작업</strong><span>저장소 검색과 복제부터 Issue, Pull Request, 검사 상태 확인까지 이어집니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/ko/docs/plugins"><strong>프로젝트에 맞게 확장</strong><span>플러그인으로 사용자 패널, 양식, 스크립트 작업을 추가합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

로컬·SSH 작업 공간, 편집, 기본 터미널, Git 검토는 무료로 시작할 수 있습니다. Agent, 플러그인, GitHub 통합, Local Linux는 Early Access 기능입니다. AI에는 자체 Provider가 필요하며 모델 비용은 별도입니다. Local Linux는 호환되는 Android 8+ ARM64 / x86_64 기기만 지원합니다. 로컬 폴더만 열면 Linux 실행 환경이 제공되지 않습니다.

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
  </div>
</div>

## 모든 것을 무료로 받으세요


무료 등급은 미리보기가 아닌 전체 작업 공간입니다. 아래의 모든 기능은 **Pro**로 표시되지 않는 한 Pro 구독 없이도 작동합니다.


| Feature | What it gives you | Access |
| --- | --- | --- |
| **[로컬 및 SSH 작업 공간](/ko/docs/ssh)** | 로컬 프로젝트와 저장된 SSH 작업 공간을 엽니다. | 무료 |
| **[Code editor](/ko/docs/editor)** | Work in tabs or two independent split panes; save, use clipboard and undo/redo, follow cursor context, and inspect images or supported audio/video without leaving the app. | Free |
| **[Web & media preview](/ko/docs/editor)** | Open local or remote web projects in-app, preview the current HTML contents—including unsaved changes—with workspace CSS, JavaScript, and image assets, or open links from Terminal, AI replies, and tool output. | Free |
| **[Terminal & SSH environment](/ko/docs/terminal)** | Run commands in the active workspace, search output, use shortcuts, and reconnect reliably. SSH workspaces load the account’s normal shell environment, so PATH, locale, SSH agent, and custom variables are available consistently to remote tools. | Free |
| **[Git review](/ko/docs/source-control)** | Inspect repository status, diffs, branches, and history. In Android Local Linux, Git operates inside the Linux workspace so status and history match its files. | Free |
| **[AI Chat](/ko/docs/ai)** | Explain code, inspect error output, and plan or continue a task with current-file, workspace, recent-task, and Agent context. | Free |
| **[Tasks](/ko/docs/tasks)** | Save repeated workspace commands, organize them in groups, and run them directly where the project lives. | Free |

## 프로 기능


버전 1.1.8에서는 **Early Access Pro**가 가용성이 확장됨에 따라 아래 워크플로를 엽니다. 귀하의 계정과 지역에 대해 표시되는 혜택과 가격을 알아보려면 Google Play 또는 App Store를 확인하세요.


| Feature | What it gives you | Access |
| --- | --- | --- |
| **[AI Agent & external ACP agents](/ko/docs/ai)** | Run controlled multi-step workflows across files, Terminal, and Git tools. In an SSH workspace, choose a compatible ACP runtime—such as Claude Code or Codex CLI when configured—review permissions and progress in one timeline, and use `/` commands with touch or keyboard completion. | Early Access Pro |
| **[GitHub 연동](/ko/docs/source-control)** | 저장소 탐색 및 복제, 이슈와 풀 리퀘스트 협업. | Early Access Pro |
| **[Android Local Linux](/ko/docs/local-linux)** | 지원되는 Android 기기에서 루트 없이 Ubuntu 사용. | Early Access Pro |
| **[Git write](/ko/docs/source-control)** | Commit, push and stash, plus branch/checkout/merge actions — with review before you act. | Early Access Pro |
| **[Remote search](/ko/docs/search)** | Global content search across a remote workspace. | Early Access Pro |
| **[Multi-terminal](/ko/docs/terminal)** | Keep parallel sessions for logs, tests, services and deployments. | Early Access Pro |
| **[LSP](/ko/docs/lsp)** | Configured remote language-server diagnostics, code actions and navigation. | Early Access Pro |
| **[Debugger](/ko/docs/debug)** | Breakpoints and runtime inspection through a configured debug adapter. | Early Access Pro |
| **[Sync / Cache](/ko/docs/sync-cache)** | Move project content between local and remote workspaces with explicit direction and history. | Early Access Pro |

## 최근 작업공간에 추가됨

- **[사용자 지정 가능한 작업 공간.](/ko/docs/plugins)** Plugin Center에서 기능을 관리하고 패널, 양식, 워크플로, 아티팩트 보기, 로컬 또는 SSH 스크립트 작업용 사용자 지정 플러그인을 만들 수 있습니다. 설치나 업데이트 전에 권한 변경을 검토합니다.
- **[지속적인 Agent 협업.](/ko/docs/ai)** 실행 중인 Agent에 후속 지시를 추가하고 대화형 질문에 답변할 수 있습니다. 새로 구성된 컨텍스트, 기록, 프롬프트 편집, 타임라인 보기는 긴 작업을 더 쉽게 추적하게 합니다.
- **[더 직접적인 Git, 터미널, 연결.](/ko/docs/source-control)** Git 헤더에서 분기를 검색, 만들고 체크아웃합니다. 해석이 필요하면 터미널 출력을 AI로 보내고, SSH 작업 공간은 SOCKS5 및 HTTP CONNECT 프록시를 지원합니다.


- **[유연한 작업 공간 디렉터리.](/ko/docs/ssh)** 로컬 및 SSH 프로젝트는 다른 디렉터리로 전환하고 빠른 복귀를 위해 최근 위치를 유지할 수 있습니다.

- **[Android 로컬 Linux 안정성.](/ko/docs/local-linux)** 이제 Ubuntu 환경에는 더 명확한 파일 액세스 경계와 더 안정적인 설정, Git 및 작업 파일 처리 기능이 있습니다. 이러한 개선 사항은 Android에만 적용됩니다.

- **[더 완벽한 미리보기 루프.](/ko/docs/editor)** 분할 편집, 라이브 HTML 스냅샷, 내장된 미디어 미리보기 및 공유 링크 열기를 통해 작업 공간을 떠나기 전에 결과를 검사하는 것이 실용적입니다.

- **[귀하의 환경에 맞는 에이전트 워크플로.](/ko/docs/ai)** 외부 ACP 런타임, 슬래시 명령 완성, 공유 SSH 로그인 환경 처리 및 안전한 환경 진단을 통해 터미널, 작업, 디버그, 언어 서버, Git 및 에이전트가 정렬된 상태로 유지됩니다.


## 기능을 활용하는 실용적인 방법


1.  [SSH 작업 공간](/docs/ssh)을 통해 연결하거나, 로컬 프로젝트를 열거나, 지원되는 기기에서 [Android 로컬 Linux](/docs/local-linux)를 사용하세요.

2. [편집기](/docs/editor)에서 파일을 찾아 편집하세요.

3. [터미널](/docs/terminal)에서 확인하세요. 필요할 때 출력이나 원격 콘텐츠를 검색하세요.

4. [AI 채팅 및 에이전트](/docs/ai)에게 오류에 대한 설명을 요청하거나 변경 계획을 세우세요.

5. [소스 제어](/docs/source-control)를 사용하여 결과를 검토합니다. Pro는 제공 단계에 게이트 Git 쓰기 작업이 필요한 경우 필요합니다.


> 기능은 의도적으로 권한과 환경을 인식합니다. 예를 들어 LSP 및 디버그는 원격 호스트에 설정되는 언어 서버 또는 디버그 어댑터에 따라 달라지므로 민감한 시스템에서 사용하기 전에 AI 출력을 검토해야 합니다.


## SSH 워크플로 살펴보기


 이러한 기능이 SSH 세션에 어떻게 적합한지 평가하는 경우 [Android SSH 클라이언트](/android-ssh-client) 워크플로를 참조하거나, [모바일 IDE 가이드](/blog/best-ssh-clients)를 읽거나, 전체 원격 개발 루프에 대한 [SSH IDE 개요](/ssh-ide)를 엽니다.

화면과 사용 절차는 [화면 및 작업 안내](/ko/docs/screenshot-guide)를 참고하세요.
