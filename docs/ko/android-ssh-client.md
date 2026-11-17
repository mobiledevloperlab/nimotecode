---
title: "Android SSH 클라이언트: 터미널, SFTP, 코드 편집기 | NimoteCode"
description: "NimoteCode로 Android에서 Linux, macOS, Windows에 연결하세요. SSH 명령 실행, SFTP 파일 탐색과 편집, Git 변경 검토를 원격 작업 공간에서 할 수 있습니다."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# 터미널, SFTP, 코드 편집기를 갖춘 Android SSH 클라이언트

NimoteCode는 Android 휴대폰이나 태블릿을 SSH로 원격 컴퓨터에 연결합니다. 같은 앱에서 터미널 명령을 실행하고, SFTP로 프로젝트 파일을 탐색하고, 코드를 편집할 수 있습니다. 저장소, 의존성, 빌드 도구는 호스트에 그대로 둡니다.

컴퓨터 앞에 없을 때 서비스를 확인하거나 설정 파일과 코드를 수정하는 데 사용할 수 있습니다. 프로젝트 전체를 다루려면 저장소를 원격 작업 공간으로 열어 터미널과 함께 파일을 탐색하고 변경 내용을 검토하세요.

## 명령 실행과 프로젝트 파일 작업

| 작업 | NimoteCode에서 사용하는 방법 |
| --- | --- |
| 명령 실행 | SSH 터미널에서 호스트의 셸과 설치된 도구를 사용합니다. |
| 원격 파일 탐색 | Remote Explorer에서 디렉터리를 선택하고 SFTP로 파일에 접근합니다. |
| 코드 및 설정 편집 | 원격 파일을 편집기로 열고 호스트에 저장합니다. 계정에 쓰기 권한이 있어야 합니다. |
| 변경 검토 | 커밋 전에 소스 제어에서 차이를 확인합니다. 호스트에 Git이 필요하며 일부 고급 Git 기능은 Pro가 필요할 수 있습니다. |

Linux와 macOS는 호스트에 설정된 셸을 사용합니다. Windows 작업 공간은 PowerShell과 SFTP를 사용합니다. 서버 설치, 방화벽, 파일 접근 설정은 [Windows OpenSSH 안내](/ko/docs/windows-ssh-sftp)를 참고하세요.

## Android에서 SSH 호스트에 연결하기

먼저 호스트에서 SSH 서버를 활성화하고 계정으로 프로젝트 디렉터리에 접근할 수 있는지 확인하세요. 호스트는 절전 상태가 아니어야 하며 Android 기기의 네트워크에서 접근할 수 있어야 합니다.

1. NimoteCode에서 **Connect Remote Workspace**, **Connect**를 차례로 선택해 연결 프로필을 만드세요.
2. 호스트 주소, SSH 포트, 사용자 이름과 서버에서 허용하는 인증 방식을 입력하세요. 같은 LAN에서는 호스트가 사용 중인 Wi-Fi 또는 Ethernet 주소를 사용합니다.
3. 첫 연결을 수락하기 전에 호스트 키 지문을 신뢰할 수 있는 경로로 받은 서버 기록과 대조하세요.
4. 연결 후 **Remote Directory**에서 프로젝트 디렉터리를 선택하세요. Git 프로젝트라면 저장소 루트를 선택합니다.
5. 편집 전에 Remote Explorer에 표시된 호스트, 계정, 루트 경로를 확인하세요.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="SSH 연결 설정: 호스트, 포트, 사용자 이름, 인증 방식, 선택 사항인 프록시." />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer에 연결된 호스트와 선택한 프로젝트 루트가 표시됩니다." />
</div>

**포트 테스트 범위:** **Ping / test SSH port**는 지정한 호스트와 포트로의 직접 TCP 연결만 확인합니다. 설정한 프록시, 계정 인증, SFTP 접근은 검사하지 않습니다. 성공하더라도 해당 네트워크 검사만 통과한 것입니다.

호스트의 LAN 밖에서 접속하려면 VPN 같은 안전한 네트워크 경로를 구성하세요. 프록시가 필요한 환경에서는 연결 화면에서 SOCKS5 또는 HTTP CONNECT를 설정할 수 있습니다. 자세한 내용은 [SSH 작업 공간 설정](/ko/docs/ssh)을 참고하세요.

## 실제 편집으로 연결 확인하기

본인 소유의 테스트 디렉터리에서 파일을 열고 조금 수정한 뒤 저장하세요. 파일을 다시 열어 내용이 반영되었는지 확인합니다. 이렇게 하면 터미널 접근과 별개로 파일 접근 및 쓰기 권한을 검증할 수 있습니다.

명령을 실행하기 전에 터미널의 작업 디렉터리와 Git 브랜치를 확인하세요. Linux 또는 macOS에서는 다음 명령을 사용할 수 있습니다.

```sh
pwd
git status --short --branch
```

호스트에서 프로젝트에 명시된 검사를 실행하고 커밋 전에 차이를 확인하세요. 터미널 명령은 호스트에 설치된 소프트웨어를 사용합니다. Git, 언어 서비스, 외부 코딩 에이전트는 각각 설치, 설정 및 권한이 필요합니다.

## SSH 연결 문제 해결

| 증상 | 확인할 항목 |
| --- | --- |
| 연결 시간 초과 | 호스트 전원과 절전 상태, 주소, VPN, 방화벽, 네트워크 격리 설정. |
| 연결 거부 | SSH 서비스가 실행 중이며 입력한 포트에서 수신하는지 확인. |
| 인증 실패 | 사용자 이름, 비밀번호 또는 키, 서버의 계정 및 인증 정책. |
| 터미널은 되지만 파일을 열 수 없음 | SFTP 하위 시스템과 선택한 디렉터리에 대한 접근 권한. |
| 파일은 열리지만 저장할 수 없음 | 파일 소유자, 쓰기 권한, 파일 시스템의 읽기 전용 설정. |
| 프로젝트 명령 실패 | 터미널 작업 디렉터리, 호스트의 의존성, 도구 실행 권한. |

전체 연결 및 검증 절차는 [원격 개발 설정 안내](/ko/remote-coding)를 참고하세요.

## 자주 묻는 질문

### 별도 컴퓨터나 서버가 필요한가요?

SSH 작업에는 필요합니다. NimoteCode는 기존 SSH 호스트에 연결하며 빌드와 실행 명령은 해당 호스트에서 처리됩니다. 지원되는 Android 기기에서만 작업하려면 [Android IDE와 로컬 Linux](/ko/android-ide)를 참고하세요.

### 터미널에 접속되면 SFTP도 사용할 수 있나요?

반드시 그렇지는 않습니다. SSH 셸과 SFTP 파일 접근은 각각의 서버 설정에 따라 달라집니다. 계정에는 프로젝트 디렉터리 읽기 권한과 수정할 파일의 쓰기 권한도 있어야 합니다.

### 무료로 사용할 수 있는 기능은 무엇인가요?

무료 플랜에는 로컬 및 SSH 작업 공간, 편집, 기본 터미널이 포함됩니다. 고급 Git 작업, 여러 터미널, 언어 서비스 등은 Pro가 필요할 수 있습니다. [무료 및 Pro](/ko/pro)와 앱에서 계정에 표시되는 사용 가능 기능을 확인하세요.

<div class="seo-cta">
  <p><strong>Android용 NimoteCode 설치</strong></p>
  <p>SSH 호스트에 연결하고 프로젝트 디렉터리를 열어 작업을 시작하세요.</p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play에서 다운로드</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
