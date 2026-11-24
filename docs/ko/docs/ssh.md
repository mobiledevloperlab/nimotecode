---
title: 로컬 및 SSH 작업 공간 | NimoteCode
description: "로컬 및 SSH 작업 공간 설정, 사용 절차 및 화면 안내."
---

# 로컬 및 SSH 작업 공간

## 작업 공간 선택

Explorer에는 로컬, 원격 SSH, Local Linux 및 데모 진입점이 있습니다. Recent History에는 이전에 연 위치가 표시됩니다. 연결된 작업 공간에 따라 사용 가능한 파일과 도구가 결정됩니다.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="프로젝트를 열기 전 작업 공간 선택 화면, 어두운 테마." />
</div>

## 로컬 폴더 열기

**Open Local Workspace**를 선택하고 시스템 선택기에서 저장 위치를 고른 뒤 프로젝트 폴더 접근을 허용합니다. 선택한 디렉터리는 Local Explorer의 루트가 됩니다. 선택기의 모양과 사용 가능한 위치는 운영체제에 따라 다릅니다.

### 저장 위치 선택

**Open Local Workspace**를 선택한 뒤 시스템 선택기에서 프로젝트의 저장 위치를 찾습니다. 예시는 Android이며 다른 운영 체제에서는 화면이 다를 수 있습니다.

### 프로젝트 폴더 접근 허용

프로젝트 폴더를 열고 경로를 확인한 다음 **Use this folder**를 선택해 접근을 허용합니다. 개별 파일이 아닌 프로젝트 디렉터리를 선택하세요.

### 로컬 작업 공간 확인

Local Explorer로 돌아와 루트 디렉터리를 확인합니다. 예시 폴더는 비어 있습니다. 자신의 프로젝트를 열었다면 여기에서 프로젝트 파일을 확인하세요.

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="Android Local Explorer에 표시된 임시 Python 데모 프로젝트." />
</div>

## SSH 연결 설정

1. **Connect Remote Workspace**를 선택한 뒤 **Connect**로 연결 프로필을 추가합니다.
2. 호스트, 포트, 사용자 이름 및 인증 방식을 입력합니다.
3. 필요하면 **Proxy Settings**에서 SOCKS5 또는 HTTP CONNECT를 선택합니다.
4. 연결한 뒤 원격 프로젝트 디렉터리를 선택합니다.

**Ping / test SSH port**는 호스트와 포트의 직접 TCP 연결을 확인합니다. 프록시를 테스트하거나 인증 정보를 검증하지 않습니다. 포트 테스트가 성공해도 SSH 작업 공간 연결이 설정되는 것은 아닙니다.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="호스트, 사용자 이름, 포트와 프록시를 설정하는 새 SSH 연결 양식." />
  <DocScreenshot file="remote-connection-history.png" caption="Connection environments 패널에 저장된 SSH 연결." />
</div>

## 페어링된 컴퓨터에 연결하기 {#paired-computers}

NimoteCode 2.5.0에 로그인하고 연결 선택 화면에서 **Connect / Tailscale**을 선택하세요. 컴퓨터를 추가하려면 **연결 코드 입력**을 누르고 해당 컴퓨터의 Nimote Connect에 표시된 일회용 코드를 입력하세요. 기기 목록에서 페어링을 해제할 수도 있습니다.

개인 Tailscale을 사용하려면 두 기기를 같은 tailnet에 연결하고 컴퓨터에서 SSH를 활성화하세요. 컴퓨터를 고르고 Tailscale을 통한 연결을 선택하면 동기화된 IP 또는 MagicDNS 이름이 사용됩니다. 컴퓨터의 SSH 사용자 이름과 비밀번호 또는 키로 로그인하세요. 연결이 실패하면 주소와 SSH 포트를 확인하고 호스트 이름을 쓸 때는 MagicDNS도 확인하세요.

원격 액세스를 활성화한 호환 컴퓨터는 Nimote Relay로도 연결할 수 있습니다. 네트워크 간 직접 연결 및 경로 전환을 포함한 인터넷 접속은 출시를 위해 검증 중입니다.

Relay는 승인부터 SSH 로그인까지 단계별 상태를 표시합니다. 컴퓨터는 온라인 상태이며 원격 액세스가 켜져 있어야 합니다. 페어링을 해제하면 Relay 접근이 취소됩니다. Host 서비스를 쓸 수 있으면 같은 컴퓨터와 SSH 계정의 확인된 경로에서 동일한 작업 공간을 열 수 있습니다.

## 프로젝트 루트 선택

원격 디렉터리 선택기에서 프로젝트 경로를 입력하거나 폴더를 탐색합니다. 연 뒤 Explorer에 표시된 서버, 사용자, 포트 및 루트를 확인합니다. **Select**로 파일 선택 모드에 들어갑니다. 디렉터리를 변경하면 프로젝트 도구가 사용하는 작업 공간도 바뀝니다.

### 원격 디렉터리 찾기

**Remote Directory**에 프로젝트 경로를 입력하거나 폴더를 차례로 탐색한 뒤 원하는 프로젝트 루트를 선택합니다.

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="작업 공간 루트를 선택하는 Remote Directory 대화 상자." />
</div>

### 연결 정보와 경로 확인

Remote Explorer에 표시된 호스트, 사용자, 포트, 루트 경로를 확인해 의도한 원격 프로젝트에서 작업하고 있는지 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="현재 호스트와 루트 경로가 표시된 연결 상태의 Remote Explorer." />
</div>

### 파일 선택 모드 열기

파일을 선택하려면 **Select**를 클릭합니다. 현재 작업 공간을 확인한 뒤 대상 파일을 선택하세요.

<div class="doc-screenshots">
  <DocScreenshot file="remote-file-selection.jpg" caption="파일 선택 모드의 Remote Explorer." />
</div>


## Windows SSH 작업 공간

Windows 호스트에서는 PowerShell과 SFTP를 사용해 원격 프로젝트를 다룹니다. 파일 검색, Git, 터미널 등의 사용에는 호스트에 필요한 도구가 있어야 합니다.

[Windows 11 설정 및 문제 해결](/ko/docs/windows-ssh-sftp)

## NimoteCode 2.4.0

**Host 작업 공간.** 원격 컴퓨터에 호환 NimoteHost를 설치하고 시작한 뒤 SSH로 연결해 터미널 및 Agent 세션을 검색, 고정하고 다시 시작합니다. Host는 선택 기능입니다.

SSH 호스트 키 검증, Windows known_hosts 동시 접근과 최신 macOS SSH 서버 연결을 개선했습니다.

[2.4.0 →](/ko/releases/2.4.0)

[Host 모드 →](/ko/docs/host) — NimoteHost 설치, SSH 연결, 터미널 및 Agent 사용법.
