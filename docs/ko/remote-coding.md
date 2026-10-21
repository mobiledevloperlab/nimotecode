---
title: "Remote Coding from Your Phone or Tablet | NimoteCode"
description: "Remote coding from a phone or tablet done right: connect over SSH to your development machine, edit the real project, run terminal commands and review Git changes with NimoteCode."
---

# 휴대전화 또는 태블릿에서 원격 코딩


원격 코딩이란 다른 컴퓨터에서 상호 작용하는 동안 한 컴퓨터에서 프로젝트를 편집하고 실행하는 것을 의미합니다. 가장 일반적인 설정은 SSH를 통해 데스크톱, 노트북 또는 서버에 연결하고 복사본 대신 실제 저장소에서 작업하는 휴대폰 또는 태블릿입니다.


NimoteCode는 해당 모델을 위해 구축된 모바일 작업 공간입니다. 원격 코딩을 셸 텍스트 스트림으로 줄이는 대신 프로젝트용 탐색기, 파일용 편집기, 명령용 터미널, 검토용 Git 및 컨텍스트용 AI 지원을 모두 동일한 원격 호스트에 연결합니다.


<ImagePlaceholder image-key="sshIde" alt="Remote coding workspace over SSH">
  <strong>Image placeholder — Remote coding session</strong>
  <span>Replace with the remote project Explorer, an open file and a running command from one SSH workspace.</span>
</ImagePlaceholder>

## 원격 코딩에 실제로 필요한 것


실행 가능한 원격 설정에는 세 가지가 필요합니다. SSH를 통해 신뢰할 수 있고 연결할 수 있는 호스트, 모바일 네트워크 변경에도 유지되는 연결, 파일, 터미널 및 Git을 함께 유지하는 작업 공간입니다. 일반 SSH 클라이언트 또는 연결이 없는 편집기 중 하나만 제공하는 도구는 루프를 중단시킵니다.


## 원격 코딩이 유용한 경우


- 귀하의 코드베이스는 Mac, Linux 데스크탑 또는 서버에 상주하며, 귀하는 그곳에서 멀리 떨어져 있습니다.

- 사고를 조사하고, 작은 수정 사항을 적용하거나 원격으로 차이점을 검토해야 합니다.

- 휴대폰이나 태블릿을 가지고 여행하며 작업을 계속 진행하고 싶습니다.

- 로컬 에뮬레이션보다 원격 시스템의 전체 도구 및 컴퓨팅을 선호합니다.


## NimoteCode가 적합한 방식


[SSH 작업 공간](/docs/ssh)을 통해 연결하고 프로젝트 루트를 선택하면 저장소가 호스트에 유지됩니다. 휴대폰이나 태블릿은 실제 파일과 함께 작동합니다. 탐색기에서 찾아보고, 탭에서 편집하고, 터미널에서 검사를 실행하고, 장치에 아무것도 복사하지 않고도 Git 기록을 검사할 수 있습니다. 이미 장치에 있는 프로젝트의 경우 동일한 작업 공간에서 로컬로 열립니다.


## 일반적인 원격 코딩 세션


1. SSH 프로필을 열고 개발 호스트에 연결합니다.

2. 프로젝트 탐색기에서 관련 모듈이나 파일을 찾으세요.

3. 편집기에서 필요한 가장 작은 변경 사항을 편집합니다.

4.  [터미널](/docs/terminal)에서 집중 테스트, 빌드 또는 로그 명령을 실행합니다.

5.  [소스 제어](/docs/source-control)에서 Staged 및 Unstaged 결과를 검토합니다.

6. [AI 채팅 및 에이전트](/docs/ai)를 사용하여 오류를 설명하거나 전체 프로젝트 컨텍스트를 바탕으로 다음 단계를 계획하세요.


## 원격 대 로컬 차이


- **원격**: 프로젝트, 도구 및 컴퓨팅이 호스트에 유지됩니다. 전화기는 SSH를 통해 이를 읽고 편집합니다. 기존 기계, 서버 및 대규모 프로젝트에 가장 적합합니다.

- **로컬**: 프로젝트 파일이 장치에 있으며 네트워크 없이 열립니다. 빠른 실험과 오프라인 작업에 가장 적합하지만 휴대폰 저장 공간과 컴퓨팅에 제한이 있습니다.


## 원격 코딩의 한계


원격 코딩은 네트워크와 호스트에 따라 다릅니다. 연결이 약한 경우 키 입력 및 터미널 출력에 지연이 발생합니다. 재연결 인식 처리는 도움이 되지만 제거하지는 않습니다. 매우 큰 저장소는 검색 색인이 준비될 때까지 찾아보는 데 시간이 걸릴 수 있습니다. 그리고 호스트는 힘든 작업을 수행합니다. 전화기는 전력이 부족한 서버의 속도를 높일 수 없습니다. 길고 무거운 컴파일 루프의 경우 데스크탑이 더 편안한 장소로 남아 있습니다.


## 자주 묻는 질문


### 실제로 원격 코딩이란 무엇을 의미하나요?


원격 코딩이란 다른 컴퓨터에서 상호 작용하는 동안 한 컴퓨터에서 프로젝트를 편집하고 실행하는 것을 의미합니다. 가장 일반적인 설정은 SSH를 통해 데스크탑, 노트북 또는 서버에 연결하고 실제 저장소에서 작업하는 전화 또는 태블릿입니다.


### SSH를 통한 원격 코딩은 느린가요?

SSH를 통한 대화형 편집은 일반적으로 연결 상태가 좋을 때 반응합니다. 대규모 빌드, 전체 재인덱싱 또는 장기 실행 컴파일과 같은 무거운 작업은 네트워크와 원격 호스트에 따라 달라지며 데스크탑에 맡기는 것이 더 나은 경우가 많습니다.


### 내 휴대폰에 프로젝트 파일이 필요합니까?


아니요. SSH 작업공간을 사용하면 프로젝트가 원격 호스트에 유지됩니다. 전화기는 SSH를 통해 파일을 읽고 편집하며 저장소를 복제하는 대신 해당 시스템의 터미널 출력과 Git 데이터를 봅니다.


<div class="seo-cta">
  <p><strong>Keep your project, terminal and Git review with you wherever you are.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=remote_coding" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=remote_coding&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 관련 페이지


- [원격 개발용 SSH IDE](/ssh-ide)

- [모바일 IDE 개요](/mobile-ide)

- [SSH, Git 및 AI 코딩용 Android IDE](/android-ide)

- [전화 코드](/code-from-phone)

- [Android를 Tailscale을 갖춘 원격 IDE로 사용하는 방법](/blog/tailscale-ssh-android-mac-linux)
