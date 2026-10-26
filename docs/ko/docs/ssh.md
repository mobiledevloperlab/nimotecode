---
title: 로컬 및 SSH 작업 공간 | NimoteCode
description: "로컬 및 SSH 작업 공간 설정, 사용 절차 및 화면 안내."
---

# 로컬 및 SSH 작업 공간

## 작업 공간 선택

Explorer에는 로컬, 원격 SSH, Local Linux 및 데모 진입점이 있습니다. Recent History에는 이전에 연 위치가 표시됩니다. 연결된 작업 공간에 따라 사용 가능한 파일과 도구가 결정됩니다.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="작업 공간을 열기 전의 Explorer, 밝은 테마." />
  <DocScreenshot file="workspace-start-dark.jpg" caption="작업 공간을 열기 전의 Explorer, 어두운 테마." />
</div>

## 로컬 폴더 열기

**Open Local Workspace**를 선택하고 시스템 선택기에서 저장 위치를 고른 뒤 프로젝트 폴더 접근을 허용합니다. 선택한 디렉터리는 Local Explorer의 루트가 됩니다. 선택기의 모양과 사용 가능한 위치는 운영체제에 따라 다릅니다.

### 저장 위치 선택

**Open Local Workspace**를 선택한 뒤 시스템 선택기에서 프로젝트의 저장 위치를 찾습니다. 예시는 Android이며 다른 운영 체제에서는 화면이 다를 수 있습니다.

<div class="doc-screenshots">
  <DocScreenshot file="local-storage-picker.png" caption="Android 저장 위치 선택기." />
</div>

### 프로젝트 폴더 접근 허용

프로젝트 폴더를 열고 경로를 확인한 다음 **Use this folder**를 선택해 접근을 허용합니다. 개별 파일이 아닌 프로젝트 디렉터리를 선택하세요.

<div class="doc-screenshots">
  <DocScreenshot file="local-file-browser.png" caption="Use this folder 작업이 있는 Android 폴더 선택기." />
</div>

### 로컬 작업 공간 확인

Local Explorer로 돌아와 루트 디렉터리를 확인합니다. 예시 폴더는 비어 있습니다. 자신의 프로젝트를 열었다면 여기에서 프로젝트 파일을 확인하세요.

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="폴더 선택 후의 Local Explorer. 예시에는 프로젝트 파일이 나열되어 있지 않습니다." />
</div>

## SSH 연결 설정

1. **Connect Remote Workspace**를 선택한 뒤 **Connect**로 연결 프로필을 추가합니다.
2. 호스트, 포트, 사용자 이름 및 인증 방식을 입력합니다.
3. 필요하면 **Proxy Settings**에서 SOCKS5 또는 HTTP CONNECT를 선택합니다.
4. 연결한 뒤 원격 프로젝트 디렉터리를 선택합니다.

**Ping / test SSH port**는 호스트와 포트의 직접 TCP 연결을 확인합니다. 프록시를 테스트하거나 인증 정보를 검증하지 않습니다. 포트 테스트가 성공해도 SSH 작업 공간 연결이 설정되는 것은 아닙니다.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="포트 테스트, 프록시 및 인증 설정이 있는 SSH 연결 양식." />
  <DocScreenshot file="remote-connection-history.png" caption="저장된 SSH 프로필이 있는 Recent History." />
</div>

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
