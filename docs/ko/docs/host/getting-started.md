---
title: "Host 세션을 위한 Nimote Connect 설치 | NimoteCode"
description: "Nimote Connect에는 터미널, 작업, 호환 Agent 세션을 관리하는 NimoteHost 서비스가 포함됩니다. 프로젝트에 접근할 수 있는 SSH 계정을 사용하고 컴퓨터와 Host 서비스를 계속 실행하세요. 앱에서 Host 세션을 사용하려면 Pro가 필요합니다."
---

# Host 세션을 위한 Nimote Connect 설치

Nimote Connect에는 터미널, 작업, 호환 Agent 세션을 관리하는 NimoteHost 서비스가 포함됩니다. 프로젝트에 접근할 수 있는 SSH 계정을 사용하고 컴퓨터와 Host 서비스를 계속 실행하세요. 앱에서 Host 세션을 사용하려면 Pro가 필요합니다.

## NimoteCode에서 설치 {#install-over-ssh}

NimoteCode의 **개발 머신**에서 컴퓨터의 SSH 연결을 선택하고 **Host**를 여세요. Host가 없으면 **Nimote Connect 설치**를 선택합니다. 마법사에서 SSH 호스트를 선택하고, 맞는 패키지를 다운로드한 뒤 설치 결과를 확인합니다. 요청이 표시되면 기기를 승인하세요. 지원되는 64비트 macOS와 Linux에서는 앱에서 자동 설치와 업데이트를 할 수 있습니다.

## 수동 설치 {#host-install}

마법사가 패키지를 불러오지 못하거나 컴퓨터가 Windows라면 해당 컴퓨터에서 직접 설치하세요. [공식 릴리스](https://github.com/mobiledevloperlab/nimote-connect/releases)에서 맞는 압축 파일과 SHA-256 파일을 받아 검증하고 압축을 풉니다. SSH와 같은 계정으로 macOS 또는 Linux에서는 `./install.sh`, Windows PowerShell에서는 `.\install.ps1`을 실행하세요. 다시 연결해 **Host**를 엽니다.

## NimoteHost 소스 {#host-source}

[NimoteHost 저장소](https://github.com/mobiledevloperlab/nimotehost)는 소스와 독립 Community 빌드를 제공합니다. NimoteCode 내 설치에는 Nimote Connect를 사용합니다.

[개요](/ko/docs/host) · [패키지 호환성](/ko/docs/host/compatibility)
