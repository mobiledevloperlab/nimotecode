---
title: Local and Remote SSH Workspaces | NimoteCode Mobile IDE
description: Open a local project or connect to a remote project with SSH in NimoteCode, then work from one clear project root.
---

# 로컬 및 원격 SSH 작업 공간


NimoteCode는 작업 공간, 즉 장치에 저장된 로컬 프로젝트 또는 SSH를 통해 연결되는 원격 프로젝트로 시작합니다. Explorer, Editor 및 Terminal은 동일한 프로젝트 루트에 연결되어 있으므로 첫 번째 검사부터 검증까지 작업을 계속 이해할 수 있습니다. Android에 번들로 제공되는 Ubuntu에 대해서는 [Android 로컬 Linux](/docs/local-linux)를 참조하세요.


<ImagePlaceholder image-key="localWorkspace" alt="Local workspace in NimoteCode on phone">
  <strong>Local workspace</strong>
  <span>Open a project stored on the device with Local Explorer.</span>
</ImagePlaceholder>

## 로컬 작업 공간 열기


 **로컬 탐색기**를 선택하여 기기에 저장된 프로젝트를 찾아보세요. 파일을 편집하거나, 명령을 실행하거나, 소스 제어에서 변경 사항을 검토하기 전에 폴더를 확인하세요.


## SSH 작업 공간 연결


<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH workspace setup">
  <strong>SSH workspace setup</strong>
  <span>Connect to a remote host, then open its project root in Remote Explorer.</span>
</ImagePlaceholder>

4단계로 연결:


1. SSH 프로필을 생성하거나 선택합니다.

2. 호스트, 포트 및 사용자 이름을 입력합니다.

3. 비밀번호, 개인 키 파일 또는 붙여넣은 개인 키를 사용하여 인증합니다.

4. 원격 프로젝트 루트를 확인한 후 Remote Explorer에서 엽니다.


## 원격 디렉터리 선택 및 확인


Explorer는 SSH 지원 프로젝트의 시작점입니다. 연결 후 **원격 탐색기**를 선택한 후 파일을 열거나 명령을 실행하기 전에 호스트와 프로젝트 루트를 모두 확인하세요.


<ImagePlaceholder image-key="explorerPage" alt="Explorer selection page on NimoteCode for phone">
  <strong>Select a workspace explorer</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="explorerPopup" alt="Explorer selection popup on NimoteCode for phone">
  <strong>Explorer selection controls</strong>
</ImagePlaceholder>

단순히 서버 홈 디렉터리가 아닌 프로젝트 루트를 선택합니다. 이는 편집기, 터미널, 검색 및 소스 제어에 공유 경계를 제공하고 잘못된 위치에서 명령을 실행할 가능성을 줄입니다.


<ImagePlaceholder image-key="remoteDirectory" alt="Remote directory selection dialog on NimoteCode for phone">
  <strong>Select the remote project directory</strong>
</ImagePlaceholder>

## 맥락에 머무르는 것


- 원격 프로젝트를 탐색하고 [편집기](/docs/editor)에서 파일을 엽니다.

- 해당 작업공간에 대한 [터미널](/docs/terminal)에서 셸 명령을 실행합니다.

- [검색](/docs/search)으로 원격 파일 콘텐츠를 검색합니다.

- [소스 제어](/docs/source-control)에서 집중된 패치를 검토합니다. 배달에 게이트 Git 쓰기 작업이 필요한 경우에만 Pro를 사용하세요.


## 더 안전한 원격 습관


각 환경에 대해 별도의 프로필을 사용하고, 민감한 호스트에 대해 최소 권한 계정 및 키 기반 인증을 선호하고, 의도적인 프로젝트 루트를 선택합니다. 재연결 인식 동작과 연결 재사용으로 인해 원격 명령과 미리보기 터널의 복원력이 향상되지만 쓰기 명령을 실행하기 전에 항상 활성 호스트와 디렉터리를 확인해야 합니다.


다음: [터미널](/docs/terminal) · [SSH 원격 개발 워크플로](/docs/ssh) · [보안 및 안전](/docs/security)
