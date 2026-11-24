---
title: "다운로드 및 설치 | NimoteHost"
description: "NimoteHost 다운로드 및 설치 안내 및 절차."
---

# 다운로드 및 설치

**NimoteHost는 현재 로컬 네트워크(LAN) 연결만 지원합니다.** 휴대폰과 Host 컴퓨터를 같은 LAN에 연결하고 컴퓨터의 로컬 주소로 SSH에 접속하세요.

## 시작하기 전에

SSH로 연결할 수 있는 Linux, macOS 또는 Windows 컴퓨터와 SSH 사용자가 열 수 있는 프로젝트 폴더를 준비하세요. 설치와 연결에는 같은 계정을 사용합니다. 휴대폰에서 연결하려면 NimoteCode 2.4.1 이상, Pro, 호환 Host가 필요합니다.

## NimoteCode에서 설치 {#install-over-ssh}

NimoteCode 2.5.0에서 **Host**를 열고 SSH로 연결한 뒤 설치 안내가 표시되면 따릅니다. 컴퓨터는 GitHub Releases에 접속할 수 있어야 합니다. Nimote Connect에 포함된 Host는 Connect 안내를 따르세요.

## 다운로드한 패키지로 설치 {#host-install}

Community 2.5.0은 CLI와 데스크톱 패키지로 제공됩니다. 앱에서 설치할 수 없거나 다운로드에 실패하면 아래에서 수동으로 설치하세요.

컴퓨터에 맞는 전체 [Community 배포 패키지](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)를 선택하세요. 서버에는 **CLI**, 그래픽 관리 화면이 필요하면 CLI가 포함된 **데스크톱 패키지**를 선택합니다. 시스템과 CPU는 [패키지 선택](/ko/docs/host/compatibility)을 참고하세요. SHA-256을 확인한 뒤 전체 압축을 풉니다. [검증 방법](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md#install-from-a-website-download) 릴리스 페이지에서 CLI 압축 파일은 `nimotehost-`, 데스크톱 압축 파일은 `nimotehost-gui-`로 시작합니다.

SSH에 사용할 계정으로 압축을 푼 폴더에서 터미널을 여세요. Linux와 macOS에서는 `sudo` 없이 실행합니다.

### Linux 또는 macOS

```sh
./nimotehost setup
./nimotehost deploy status
```

### Windows PowerShell

```powershell
.\nimotehost.exe setup
.\nimotehost.exe deploy status
```

`setup`은 패키지를 설치하고 사용자 서비스를 시작합니다. `deploy status`로 확인하세요. `"running": true`이면 NimoteCode의 **Host**에서 SSH 연결을 선택하고 컴퓨터의 프로젝트 폴더를 지정합니다.

Linux 백그라운드 서비스에는 systemd 사용자 관리자가, macOS와 Windows에는 데스크톱에 로그인한 사용자가 필요합니다. 포그라운드로 시험하려면 압축을 푼 폴더에서 `./nimotehost start`(Windows는 `.\nimotehost.exe start`)를 실행하고 창을 열어 둡니다.

### 소스에서 빌드 {#host-source}

환경과 명령은 [소스 빌드 안내](https://github.com/mobiledevloperlab/nimotehost#build-and-run)를 참고하세요.

[개요](/ko/docs/host) · [연결, 터미널 및 작업](/ko/docs/host/sessions)
