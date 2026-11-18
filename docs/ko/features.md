---
title: NimoteCode 기능 | 모바일 개발 작업 공간
description: 휴대폰에서 프로젝트를 열고 개발 컴퓨터에 연결해 편집, 명령 실행, Git 변경 검토를 한 작업 공간에서 진행하세요. SSH, Docker, Pro 사용 조건도 확인할 수 있습니다.
---

# NimoteCode 기능

**IDE, 터미널, AI, Host 네 가지 모드**로 편집, 실행, Agent 협업과 컴퓨터 작업 재연결을 선택하세요. Host는 NimoteHost를 별도로 설치해야 합니다. IDE, 터미널, AI 전환은 프로젝트와 Explorer 상태를 유지합니다.

<WorkspaceModes />

**Host: 컴퓨터에서 실행하고 휴대폰에서 확인하세요.** 연결 해제 후 터미널, 작업과 호환 Agent를 유지하고 돌아와 출력, 승인, 검증과 diff를 확인합니다. NimoteHost 전체 소스는 Apache-2.0이며 검토, 빌드, 수정과 기여가 가능합니다. [기능 및 배포](/ko/docs/host) · [소스와 기여](https://github.com/mobiledevloperlab/nimotehost). Host 모드는 2.4.1 제공 예정이며 컴퓨터와 Host는 계속 실행되어야 합니다.

## NimoteCode 2.4.0 · Host, 프로젝트 작업 및 원격 안정성

- **Host 작업 공간.** 원격 컴퓨터에 호환 NimoteHost를 설치하고 시작한 뒤 SSH로 연결해 터미널 및 Agent 세션을 검색, 고정하고 다시 시작합니다. Host는 선택 기능입니다.
- **Agent 협업.** 호환 Codex, Claude, OpenCode 세션에서 구조화된 대화, 도구, 승인, 명령, 모델 설정과 실행 중 추가 지시를 지원합니다. 실행 정책은 Host에 따라 다르며 민감한 작업은 승인이 필요할 수 있습니다.
- **작업 수신함과 GitHub Issue.** 상태, 검증 증거와 diff를 확인하고 작업을 계속하거나 보관합니다. 선택한 게시 정책으로 Issue를 전달합니다. Host 버전 및 설정에 따라 다릅니다.
- **Host 플러그인.** 사이드바에서 버전이 지정된 양식, 페이지별 표, 상세 및 대화형 보기를 권한 확인과 함께 사용합니다.
- **프로젝트 작업.** package.json, Taskfile, Makefile, justfile 및 .vscode/tasks.json에서 지원되는 작업을 찾아 터미널에서 실행합니다. Make/just 동적 탐색은 명시적 확인이 필요합니다.
- **알림 및 편집기.** 완료, 확인 대기 및 실패 알림, 소리와 진동, 줄 번호와 가로 미니맵을 설정합니다. 알림은 시스템 설정을 따릅니다. Windows에서는 Pro가 기본 활성화됩니다.
- 기능, 패널 및 플러그인 설정을 통합하고 알림을 Agent 설정으로 이동했습니다. 태블릿, Windows, 가로 색상 및 동작 줄이기를 개선했습니다.
- 브랜치와 워크플로별 GitHub CI 필터, 단계 로그, 오류 문맥과 불완전한 로그 안내를 제공합니다.
- 터미널 응답성, 동기화 업데이트, 검색, 스크롤, Vim, 클립보드, Windows 붙여넣기 및 소프트 키보드를 개선했습니다.
- 기록 안정성, 로컬 기록 오프라인 삭제, 원격 저장 오류 안내, 큰 파일 편집, 줄바꿈 diff 및 하단 탐색을 개선했습니다.

[2.4.0 →](/ko/releases/2.4.0)



## 인터페이스 살펴보기

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights"><div class="feature-showcase__track"><figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure></div></div>

## 작업 공간

| 작업 공간 | 용도 | 경계 |
| --- | --- | --- |
| **로컬** | OS가 허용한 폴더와 기기의 Git 저장소를 엽니다. | 폴더만으로 Linux 셸, 컴파일러 또는 런타임이 제공되지는 않습니다. |
| **SSH** | 원격 호스트의 기존 프로젝트와 도구를 사용합니다. | 명령은 선택한 원격 계정의 권한으로 실행됩니다. |
| **Android Local Linux** | 지원 Android 기기에서 루트 없이 Ubuntu 사용자 공간을 사용합니다. | Android 전용이며 도구와 의존성은 별도 설치합니다. |
| **데모** | 연결 전에 샘플 파일과 UI를 확인합니다. | 배포 가능한 개발 환경은 아닙니다. |

[로컬 및 SSH 작업 공간](/ko/docs/ssh)과 [Android Local Linux](/ko/docs/local-linux)를 참조하세요.

## 핵심 개발 기능

- [코드 편집기](/ko/docs/editor): 로컬/원격 파일, 탭과 분할 보기, 편집, Markdown 및 정적 HTML 미리보기.
- [터미널](/ko/docs/terminal): SSH/Local Linux 명령, 출력 검색, 세션 관리, 원격 로그인 환경 새로 고침.
- [소스 제어 및 GitHub](/ko/docs/source-control): 상태, stage, diff, 브랜치, 기록, 저장소 복제, Issue, PR, 리뷰, 검사, 워크플로 및 산출물.
- [작업](/ko/docs/tasks) 및 [검색](/ko/docs/search): 연결된 환경에서 저장 명령을 실행하고 SSH 콘텐츠를 검색.

빌드, 테스트 및 Git 작업의 실제 결과는 프로젝트에 달려 있습니다. 파일을 변경하거나 코드를 게시하기 전에 작업 디렉터리, 명령, diff 및 원격을 확인하세요.

## AI 및 확장

AI는 선택 사항이며 직접 구성한 제공자를 사용합니다. OpenAI, Anthropic, Google Gemini, xAI Grok, DeepSeek, Alibaba Qwen, OpenRouter, Groq, SiliconFlow, StepFun, Zhipu AI/GLM, Moonshot AI, Ollama 및 OpenAI 호환 엔드포인트 템플릿을 제공합니다. 계정, 모델 가용성 및 비용은 제공자가 관리합니다.

- [AI Chat](/ko/docs/ai), Nimote Agent의 계획 검토 및 외부 ACP Agent를 사용할 수 있습니다.
- MCP 서버는 로컬/원격 명령 프로세스 또는 HTTP 서버로 구성합니다. 신뢰하는 서버만 추가하고 도구 호출을 검토하세요.
- [사용자 지정 플러그인](/ko/docs/plugins)은 데이터, 양식, 확인된 파일/네트워크/명령 작업을 조합합니다. [LSP](/ko/docs/lsp), [디버깅](/ko/docs/debug), [동기화 및 캐시](/ko/docs/sync-cache)도 지원합니다.

AI 출력은 보조 수단이며 정확성, 보안 또는 실행 성공을 보장하지 않습니다. 플러그인과 언어/디버그 도구는 의존성을 자동 설치하거나 호스트 권한을 추가하지 않습니다. 기능은 플랫폼, 앱 버전, 계정 권한, 배포 채널 및 지역에 따라 다르며 앱에서 현재 상태를 확인할 수 있습니다.

## 2.3.0 작업 공간 및 Docker

작업 공간에서 IDE, 터미널, AI 모드를 전환할 수 있으며 동일한 프로젝트와 Explorer 상태를 공유합니다.

SSH 호스트의 Docker 패널에서 컨테이너, 이미지, 볼륨, 네트워크 및 Compose를 확인할 수 있습니다. Debian bookworm-slim 이미지 화면은 목록과 상세 정보를 보여 줍니다. Dev Containers는 프로젝트의 devcontainer.json으로 구성합니다.

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Docker image list in the Light theme, including Debian bookworm-slim." />
  <DocScreenshot file="docker-image-detail.png" caption="Debian bookworm-slim image details in the Light theme." />
</div>

[Host 모드 →](/ko/docs/host) — NimoteHost 설치, SSH 연결, 터미널 및 Agent 사용법.
