---
title: Android Local Linux Getting Started | NimoteCode
description: Prepare and open NimoteCode Local Linux on a supported Android device, then choose appropriate local or remote development work.
---

# Android 로컬 Linux 시작하기


Android의 소규모 Ubuntu 기반 개발 환경에 로컬 Linux를 사용합니다. Android 8+ 64비트 ARM64 및 x86_64 장치에서 사용할 수 있으며 Android 루트가 필요하지 않으며 iPhone 또는 iPad에서는 사용할 수 없습니다.


## 설치 전


- 기본 환경과 설치하려는 프로젝트 도구에 사용할 수 있는 충분한 장치 저장 공간을 유지하세요.

- 초기 설정 및 이후 APT 패키지 설치를 위해 네트워크 연결을 사용합니다.

- 간소한 로컬 작업을 위해 로컬 Linux를 선택하세요. 프로젝트가 기존 워크스테이션, 서버, 컨테이너 또는 장기 빌드에 의존하는 경우 [SSH](/docs/ssh)를 사용하세요.


## 작업 공간 열기


1. 작업 공간 또는 탐색기 선택기에서 **로컬 Linux**를 선택합니다.

2.  **설치**를 선택하고 준비가 완료될 때까지 기다린 다음 **시작**을 선택합니다.

3. 기본 `/workspace` 디렉터리를 엽니다.

4.  [터미널](/docs/terminal)에서 환경을 검사한 후 프로젝트에 필요한 툴체인만 추가하세요.

5.  해당 작업공간에서 Explorer, Editor, [Source Control](/docs/source-control)을 사용하세요.


기본 환경은 Ubuntu, Bash, Git 및 SSH 기반을 제공합니다. 모든 데스크톱 도구나 디버거가 PRoot에서 동일하게 작동한다는 보장은 없습니다. 로컬 워크로드를 선택하기 전에 [호환성](/docs/local-linux/compatibility)을 읽고 선언된 선택적 도구 세트에 대한 [Linux 사전 설정](/docs/local-linux/presets)을 읽어보세요.
