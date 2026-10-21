---
title: Android Local Linux Overview | NimoteCode
description: Understand NimoteCode's bundled Ubuntu development environment on supported Android devices, its PRoot architecture, compatibility, integrity, presets, and troubleshooting resources.
---

# Android 로컬 Linux 개요


로컬 Linux는 지원되는 Android 장치에 번들 Ubuntu 개발 환경을 제공합니다. 이는 장치 및 원격 SSH 호스트에 저장된 프로젝트와 함께 세 번째 작업 공간 선택입니다. 일단 열리면 로컬 SSH 연결을 통해 익숙한 Explorer, Editor, Terminal, Git, AI, Tasks, LSP 및 Debug 워크플로우를 사용합니다.


## 가용성 및 요구 사항


로컬 Linux는 64비트 ARM64 또는 x86_64 앱이 설치된 Android 8 이상에서만 사용할 수 있습니다. iPhone이나 iPad에서는 사용할 수 없으며, 32비트 ARM 장치는 지원되지 않습니다. 루트 액세스 및 별도의 터미널 앱이 필요하지 않습니다.


번들 환경에는 Ubuntu, Bash, Git 및 SSH가 포함됩니다. 기본적으로 언어 도구 체인, 언어 서버, 디버그 어댑터 또는 외부 에이전트 CLI는 포함되지 않습니다. 환경을 연 후 프로젝트에 필요한 도구를 설치하세요. Android 루트 액세스 권한을 부여하지 않고 Linux 사용자 공간을 제공하는 PRoot를 사용합니다.


## 환경 설치 및 열기


1. 작업 공간 또는 탐색기 선택기에서 **로컬 Linux**를 선택합니다.

2.  **설치**를 선택하고 번들 환경이 준비될 때까지 기다립니다.

3.  **시작**을 선택한 다음 **열기**를 선택하여 기본 `/workspace` 디렉터리에서 작업합니다.

4. 탐색기에서 파일을 열고, [터미널](/docs/terminal)에서 명령을 실행하고, [소스 제어](/docs/source-control)에서 Git 변경 사항을 검사합니다.


초기 설치에서는 번들 Ubuntu 이미지를 사용합니다. 나중에 추가 패키지를 설치하려면 인터넷 액세스가 필요할 수 있습니다.


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux.jpg" width="930" height="2048" alt="NimoteCode Local Linux panel showing the environment status and Open, Start, Reset, and Delete Environment controls" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">The Local Linux panel shows the environment status, storage use, and its workspace and lifecycle controls.</figcaption>
</figure>

## 수명주기 관리


로컬 Linux 페이지에서는 환경을 시작, 중지, 재설정 또는 삭제할 수 있습니다. 중지하면 활성 작업공간이 닫힙니다. 다시 시작하면 동일한 환경에 다시 연결됩니다. 재설정 및 삭제는 파괴적인 작업입니다. 둘 중 하나를 사용하기 전에 확인을 검토하세요. 로컬 Linux를 삭제하면 다른 장치나 SSH 작업 영역을 삭제하지 않고 환경 데이터가 제거됩니다.


## 로컬 환경에서 AI 활용


환경이 열리면 [AI 채팅 및 에이전트](/docs/ai)는 탐색기 및 터미널과 동일한 로컬 Linux 작업 공간에서 작동할 수 있습니다. OS 버전 확인과 같은 작은 읽기 전용 요청으로 시작한 다음 변경을 허용하기 전에 계획된 명령과 출력을 검토하세요.


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux_AI_Agent.jpg" width="930" height="2048" alt="NimoteCode AI Agent reporting the Ubuntu version and ARM64 architecture from a Local Linux workspace" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">An AI Agent can inspect the Local Linux environment and present the result alongside its command plan.</figcaption>
</figure>

## 스토리지, 네트워크 및 프로세스 동작


환경 파일은 NimoteCode의 앱 전용 저장소에 보관됩니다. 내장된 SSH 서비스는 장치의 루프백 주소에서만 수신 대기하므로 네트워크 SSH 서버로 노출되지 않고 NimoteCode에서 사용됩니다. Android는 백그라운드 프로세스를 일시중지하거나 중지할 수 있습니다. 앱으로 돌아온 후 로컬 Linux가 중지된 경우 다시 시작하세요.


## 로컬 Linux 문서


- [시작하기](/docs/local-linux/getting-started) — 작업 공간을 준비, 설치 및 선택합니다.

- [아키텍처](/docs/local-linux/architecture) — Android, PRoot, Ubuntu 및 로컬 SSH 경계입니다.

- [호환성](/docs/local-linux/compatibility) — 장치, 아키텍처 및 워크로드 기대치입니다.

- [보안 및 무결성](/docs/local-linux/security-integrity) — 체크섬, 패키지 및 자격 증명 지침.

- [Linux 사전 설정](/docs/local-linux/presets) — 매니페스트, 설치 프로그램 확인 및 별도의 기술 저장소.

- [문제 해결](/docs/local-linux/troubleshooting) — 설치, 패키지 및 수명 주기 문제에 대한 실제 검사입니다.


## 라이센스 및 해당 소스


번들 환경은 Ubuntu이므로 GPL 및 LGPL 구성 요소를 앱과 함께 게시하려면 해당 소스가 필요합니다. 전체 소스 번들, 해당 체크섬, 매니페스트, 출처 및 라이선스 공지는 [로컬 Linux 소스 및 라이선스](/docs/local-linux-source)에 나열되어 있습니다. 앱 내 라이선스 페이지에서도 동일한 알림을 확인할 수 있습니다.

다음: [시작하기](/docs/local-linux/getting-started) · [Linux 사전 설정](/docs/local-linux/presets) · [로컬 및 원격 SSH 작업 영역](/docs/ssh) · [로컬 Linux 소스 및 라이선스](/docs/local-linux-source)
