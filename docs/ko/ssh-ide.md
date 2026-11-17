---
title: "SSH IDE: 원격 파일, 터미널, Git | NimoteCode"
description: "NimoteCode SSH IDE의 SFTP 파일 탐색, 코드 편집, 호스트 터미널과 Git을 확인하세요. 연결, 파일 권한과 언어 도구의 요구 사항을 구분합니다."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# SSH IDE로 원격 프로젝트 편집과 검증하기

NimoteCode는 Android, iPhone, iPad에서 SSH로 원격 프로젝트를 엽니다. SFTP로 파일을 탐색하고, 탭이나 분할 창에서 소스를 편집하며, 호스트에서 명령을 실행하고 같은 작업 공간에서 Git 변경을 검토할 수 있습니다. 저장소, 의존성, 실행 환경은 호스트에 유지됩니다.

## 세 계층을 나눠 확인

| 계층 | 목적 | 요구 사항 |
| --- | --- | --- |
| SSH | 호스트 접근과 인증 | 접근 가능한 서버와 허용 계정 |
| SFTP | 파일 탐색과 저장 | 하위 시스템과 파일 권한 |
| 호스트 도구 | Git, 검증, 언어 서비스와 Agent | 의존성, 인증 정보와 실행 권한 |

셸 성공이 SFTP 성공을 증명하지는 않습니다. 파일을 열어도 도구가 설치되지는 않습니다.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer에 SSH 호스트, 계정, 선택한 저장소 루트가 표시됩니다." />
</div>

## 작업 공간 기능

Explorer에서 루트를 선택하고 탭과 분할 편집으로 관련 파일을 읽으세요. 명령 전에 저장하세요. 소스 제어는 변경과 기록을 제공하며 Git 쓰기와 GitHub는 접근 권한에 따릅니다. 언어 서버와 디버그 어댑터는 실행 대상에서 설정해야 합니다.

## 호스트에 맞춰 설정

Windows는 PowerShell과 SFTP를 사용합니다. [설정 안내](/ko/docs/windows-ssh-sftp)를 참고하세요. Mac과 Linux는 호스트의 셸과 도구를 사용합니다. 의존성이 준비된 호스트를 켜 둬야 하며 연결만으로 프로세스를 유지하지는 않습니다.

## 편집 전에 저장소 확인하기

Remote Explorer에서 호스트, 계정, 루트 경로를 확인하세요. 터미널의 작업 디렉터리와 브랜치는 별도로 확인해야 합니다. 편집기에서 파일을 바꿔도 셸의 디렉터리는 바뀌지 않습니다. Linux 또는 macOS에서는 다음 명령을 사용할 수 있습니다.

```sh
pwd
git status --short --branch
```

파일을 저장한 뒤 프로젝트에 명시된 테스트나 빌드를 실행하세요. 커밋 전에 diff와 기존 변경을 확인합니다. 터미널은 되지만 파일 접근이 안 되면 SFTP와 디렉터리 권한을, 명령을 찾지 못하면 호스트의 설치 위치와 PATH를 확인하세요.

## 연결 끊김과 장시간 작업에 대비하기

장시간 작업에는 호스트의 세션 관리 도구를 사용하고 재접속 후 상태를 확인하세요. Linux 또는 macOS에서 설정된 tmux 세션은 호스트가 실행 중이면 SSH 연결이 끊겨도 유지될 수 있습니다. 화면 잠금이나 앱 전환으로 연결이 중단될 수 있으며 호스트 절전이나 재시작으로 작업이 멈출 수 있습니다.

## 설정과 문제 해결

절차는 [원격 개발](/ko/remote-coding)과 [SSH 문서](/ko/docs/ssh), 실행 위치 선택은 [모바일 IDE](/ko/mobile-ide), AI 선택은 [모바일 AI](/ko/mobile-ai-coding)를 참고하세요.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
