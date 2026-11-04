---
title: NimoteCode 기능 | 모바일 개발 작업 공간
description: "NimoteCode는 로컬 및 SSH 작업 공간, Android Local Linux, 편집기, 터미널, Git과 GitHub, AI, 사용자 지정 플러그인, 언어 서비스, 디버깅, 검색 및 작업을 통합합니다."
---

# NimoteCode 기능

NimoteCode는 휴대폰과 태블릿에서 기존 프로젝트를 작업하기 위한 개발 작업 공간입니다. 저장소, 서버, 패키지 관리자, AI 제공자 또는 도구 체인을 대체하지 않고 파일, 편집기, 셸 환경, 버전 관리 및 선택적 AI 지원을 한곳에 모읍니다.

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

## 인터페이스 개요

아래 이미지는 위에서 설명한 작업 공간, 코드 검토, 진단 및 전송 화면을 보여 줍니다.

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights"><div class="feature-showcase__track"><figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure></div></div>
