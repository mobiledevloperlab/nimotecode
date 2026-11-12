---
title: "Android IDE: 로컬 Linux, SSH, Git, AI | NimoteCode"
description: "NimoteCode로 Android에서 코드를 편집하고 루팅 없이 Linux 터미널을 사용하세요. Windows·Mac·Linux SSH 연결, Git 검토와 AI 지원을 한 앱에서 제공합니다."
pageClass: android-ide-page
---

# Android IDE: 로컬 Linux부터 SSH 원격 개발까지

태블릿에서 Python 스크립트를 고치거나, 휴대폰으로 개발 PC의 명령을 실행하거나, 외출 중 저장소 변경을 검토해야 하나요? 먼저 코드와 도구를 어디에서 실행할지 선택하세요. NimoteCode는 Android 앱 하나에서 로컬 폴더, 기기 내 Linux, 원격 SSH 호스트를 사용할 수 있게 합니다.

**NimoteCode는 코드 편집기, Explorer, 터미널, Git, 직접 설정하는 AI 지원을 갖춘 모바일 IDE입니다.** 파일을 찾아 편집하고 저장한 뒤, 적합한 실행 환경에서 검증하는 흐름을 같은 프로젝트 안에서 이어갈 수 있습니다. 휴대폰과 태블릿에서 사용할 수 있으며, 파일 비교가 필요하면 편집기 분할 보기를 활용할 수 있습니다.

<div class="seo-cta">
  <p><strong>Android에서 프로젝트를 열고 작업에 맞는 개발 환경을 선택하세요.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Google Play에서 다운로드</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작 보기</a>
  </p>
</div>

<div class="android-ide-media">
  <DocScreenshot file="editor-code-selection.png" caption="Android 편집기에서 열린 benchmark.py. Python 구문 강조, 줄 번호, 파일 수정 표시를 보여 줍니다." />
</div>

## 코드와 명령을 실행할 위치 선택하기

로컬 파일 편집과 Linux 도구 실행은 별개입니다. 폴더를 열어도 언어 도구가 자동 설치되지는 않습니다. 작업 공간을 정한 뒤 프로젝트 의존성을 준비하세요.

| 작업 공간 | 파일과 도구의 위치 | 적합한 작업 |
| --- | --- | --- |
| 로컬 폴더 | 접근을 허용한 기기 폴더. 실행 환경은 별도 설정 | 소스 코드, 문서, 설정 파일 편집 |
| Local Linux | PRoot로 Android에서 실행하는 Ubuntu 사용자 공간. 루팅 불필요 | 셸 스크립트, Git, 호환되는 CLI 프로젝트 |
| 원격 SSH | Windows, Mac 또는 Linux 호스트 | 기존 프로젝트, 호스트 도구, 규모가 큰 빌드 |

## 루팅 없이 Android에서 Linux 터미널 사용하기

[Local Linux](/ko/docs/local-linux)는 **Android 8 이상 지원 기기에서 64비트 ARM64 또는 x86_64 앱**을 사용할 때 Ubuntu 사용자 공간과 Bash, Git, SSH를 제공합니다. Local Linux 메뉴에서 포함된 환경을 설치하고 시작한 뒤 작업 공간을 여세요. 별도의 개발 PC는 필요하지 않습니다.

셸 스크립트, 가벼운 유틸리티, 호환되는 언어 프로젝트에 활용할 수 있습니다. 언어 도구 체인, 언어 서버, 디버그 어댑터는 별도로 설치해야 합니다. 추가 패키지 다운로드에는 인터넷이 필요할 수 있으며, 호환성과 성능은 기기와 도구에 따라 달라집니다.

배포판 정보는 `cat /etc/os-release`로 확인하세요. `uname -a`는 공유하는 Android 커널 정보를 출력합니다. PRoot 방식이며 가상 머신은 아닙니다. iOS와 32비트 ARM 기기는 지원하지 않습니다. 작업을 정하기 전에 [호환성 안내](/ko/docs/local-linux/compatibility)를 확인하세요.

<div class="android-ide-media">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux의 Bash에서 uname -a를 실행한 화면. 공유하는 Android 커널과 aarch64 아키텍처를 표시합니다." />
</div>

## SSH로 Windows, Mac, Linux에 연결하기

[SSH 작업 공간](/ko/docs/ssh)을 사용하면 프로젝트를 기존 개발 기기에 둔 채 Android에서 파일을 탐색하고 편집하며 호스트 명령을 실행할 수 있습니다. 호스트에 설치한 도구와 계정 권한을 사용하므로 기존 의존성과 빌드 환경을 유지할 수 있습니다.

호스트, 포트, 사용자 이름, 인증 방법을 설정하고 저장소 루트를 선택하세요. 첫 연결에서는 호스트 키 지문을 확인해야 합니다. Windows는 PowerShell과 SFTP를, Mac과 Linux는 호스트에 설정된 셸을 사용합니다. 수정 전에 디렉터리와 브랜치를 확인하고 검증 전에 저장하세요.

호스트는 켜져 있고 네트워크로 접근할 수 있어야 합니다. 외부에서 접속할 때는 VPN 같은 안전한 경로를 구성하세요. SSH만으로 연결 중단 후 프로세스 실행을 보장하지는 않습니다.

<div class="android-ide-media">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="연결된 SSH 호스트, 계정, 포트와 sorting-demo 프로젝트 루트를 보여 주는 Remote Explorer." />
</div>

## Git 변경 검토와 GitHub 협업 연결하기

[소스 제어](/ko/docs/source-control)에서 수정 및 미추적 파일, 스테이징된 변경, diff, 커밋 기록을 확인하세요. 커밋 전에 현재 브랜치와 패치를 검토해야 합니다. Git 작업은 현재 작업 공간의 저장소와 인증 정보를 사용합니다.

GitHub 페이지에서 저장소, 이슈, Pull Request, 검사 결과, 워크플로 실행을 확인하고 기기, Local Linux 또는 SSH 호스트로 복제할 수 있습니다. 작업 범위는 계정과 저장소 권한에 따릅니다. 복제만으로 의존성이 설치되지는 않으므로 선택한 환경에서 프로젝트의 검증 명령을 실행하세요.

<div class="android-ide-media">
  <DocScreenshot file="source-control-changes.png" caption="Changes와 Staged Changes를 구분하고 브랜치 선택과 커밋 기록을 제공하는 소스 제어 화면." />
</div>

## 프로젝트와 함께 AI Chat 및 Agent 활용하기

Chat으로 선택한 코드를 설명하거나 오류를 분석하도록 요청하세요. 작업 공간 도구가 필요한 작업에는 Nimote Agent를 선택할 수 있습니다. **Confirm** 모드에서는 계획을 검토하고 실행을 승인한 후 도구가 시작됩니다. 완료 후 파일과 diff를 확인하고 프로젝트 검증을 실행하세요.

AI를 사용하려면 모델 제공업체를 직접 설정해야 하며 모델 사용료는 해당 업체가 별도로 청구합니다. 외부 ACP 에이전트에는 선택한 실행 환경의 호환 런타임과 인증 정보가 필요합니다. [AI 안내](/ko/docs/ai)에서 Chat, Agent, 외부 에이전트와 MCP 설정을 확인할 수 있습니다.

<div class="android-ide-media">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 모드의 Nimote Agent가 프로젝트 조사 계획을 표시하고 Approve this run 승인을 기다리는 화면." />
</div>

## 설치부터 첫 변경 검증까지

1. Google Play에서 설치하고 로컬 폴더를 열거나 Local Linux를 설치하거나 SSH 호스트에 연결하세요.
2. 프로젝트 루트와 브랜치를 확인하고 실행 환경에 필요한 명령을 준비하세요.
3. 파일을 편집하고 저장한 뒤 해당 환경에서 프로젝트의 테스트, lint 또는 빌드를 실행하세요.
4. 소스 제어에서 변경을 검토하고 검증 결과와 권한을 확인한 뒤 커밋하거나 공유하세요.

명령 하나를 실행할 때는 일반 SSH 클라이언트, 글만 수정할 때는 간단한 편집기로 충분할 수 있습니다. NimoteCode는 프로젝트 트리, 편집, 터미널, Git 검토와 AI를 함께 사용하려는 작업에 적합합니다. 큰 빌드와 PRoot 비호환 도구는 적절한 원격 호스트에서 실행하세요. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro 비교](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요.

## Android IDE 자주 묻는 질문

### Linux를 사용하려면 루팅이 필요한가요?

아니요. Local Linux는 Android 8 이상 지원 기기의 64비트 ARM64 또는 x86_64 앱에서 PRoot를 사용합니다. 도구 체인은 별도로 설치해야 하며 모든 Linux 작업이 호환되는 것은 아닙니다.

### 원격 컴퓨터 없이도 개발할 수 있나요?

네. 지원 Android 기기에서 로컬 파일을 편집하고 Local Linux로 호환 도구를 실행할 수 있습니다. 초기 설정과 패키지 다운로드에는 인터넷이 필요할 수 있습니다. 클라우드 AI와 GitHub는 각 서비스 연결이 필요합니다.

### Android Studio와 같은 도구인가요?

아니요. NimoteCode는 편집, 터미널, Git, AI, Local Linux 및 SSH 프로젝트용 모바일 IDE입니다. 전체 Android Studio 도구 체인이나 Android 에뮬레이터를 제공하지 않습니다. 필요한 빌드는 적절하게 구성한 호스트에서 실행하세요.

### 무료로 다운로드할 수 있나요?

Google Play에서 다운로드할 수 있으며 일부 기능은 Pro 권한이 필요합니다. 제공 여부는 계정, 앱 버전과 스토어 지역에 따라 다릅니다. 모델 제공업체 사용료는 별도입니다.

<div class="seo-cta">
  <p><strong>Android에서 프로젝트를 열고 작업에 맞는 개발 환경을 선택하세요.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Google Play에서 다운로드</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작 보기</a>
  </p>
</div>

## 기능과 설정 더 알아보기

- [편집기와 분할 보기](/ko/docs/editor)
- [Android Local Linux 설정](/ko/docs/local-linux)
- [SSH 작업 공간 설정](/ko/docs/ssh)
- [Git 및 GitHub](/ko/docs/source-control)
- [무료 및 Pro 기능](/ko/pro)

- [Windows 11 설정 및 문제 해결](/ko/docs/windows-ssh-sftp)
