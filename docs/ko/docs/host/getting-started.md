---
title: "다운로드 및 설치 | NimoteHost"
description: "NimoteHost 다운로드 및 설치 안내 및 절차."
---

# 다운로드 및 설치

휴대폰에서 다운로드하더라도 **NimoteHost를 실행할 컴퓨터／서버의 운영 체제와 CPU 아키텍처**에 맞춰 선택하세요. 휴대폰 CPU는 기준이 아닙니다. CLI 또는 데스크톱 패키지를 선택하고 NimoteCode와 호환되는 버전인지 확인하세요.

[하드웨어 및 패키지 선택](/ko/docs/host/compatibility)

## 준비할 것

SSH로 접속할 수 있는 Linux, macOS 또는 Windows 컴퓨터, Host 모드가 포함된 NimoteCode 빌드와 호환 Host, 원격 계정이 접근할 수 있는 프로젝트 폴더가 필요합니다. 뒤에서 입력하는 경로는 휴대폰이 아닌 컴퓨터의 경로입니다.

SSH가 처음이라면 먼저 [SSH 연결](/ko/docs/ssh)을 설정하세요. Windows는 [Windows SSH](/ko/docs/windows-ssh-sftp)도 참고하세요. Host가 SSH를 설치하거나 설정해 주지는 않습니다.

## SSH로 설치 또는 업데이트하기 {#install-over-ssh}

NimoteCode 2.5.0에서 **Host**를 열고 SSH로 연결한 뒤 Host 패널에서 상태를 확인하세요. 설치를 승인하면 패널에 표시된 NimoteHost 공식 릴리스에서 맞는 CLI 패키지를 내려받아 검증하고, SSH 계정으로 설치하고 시작합니다. 컴퓨터에서 GitHub Releases에 접속할 수 있어야 합니다. 설치된 서비스가 중지된 경우 패널에서 시작할 수 있습니다.

패널에 진행률, 오류 및 재시도 옵션이 표시됩니다. 업데이트 알림은 Host 헤더에서 다시 열 수 있습니다. 업데이트를 위해 세션을 중지해야 한다면 영향을 받는 작업을 확인한 뒤 승인하세요. 데스크톱 GUI나 소스 빌드가 필요하면 아래 수동 절차를 따르세요.

Host 패널이 에디션을 확인하면 표시된 설치 또는 업데이트 작업을 사용하세요. Community 설치에는 플랫폼에 맞는 CLI 패키지가 공개되어 있어야 합니다. 페어링된 컴퓨터에 서비스가 없으면 Nimote Connect 설정 안내를 따르세요. 에디션을 인식하지 못하면 배포처를 확인한 뒤 업데이트하세요.

## 1. 패키지 다운로드

[NimoteHost Community](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0)에서 컴퓨터에 맞는 전체 패키지를 선택합니다. 서버에서는 CLI만 있으면 됩니다. 컴퓨터에서 관리 창도 사용하려면 GUI 패키지를 선택하세요.

| 운영체제 | 표기 | CPU |
| --- | --- | --- |
| Linux | linux | 64비트 Intel/AMD는 amd64, 64비트 ARM은 arm64 |
| macOS | darwin | Apple Silicon은 arm64, Intel은 amd64 |
| Windows | windows | x64는 amd64, ARM은 arm64 |

Linux와 Windows에는 32비트 x86용 386 CLI도 있으며 GUI는 포함하지 않습니다. 함께 제공되는 SHA256 파일을 받아 Linux의 sha256sum, macOS의 shasum -a 256, PowerShell의 Get-FileHash -Algorithm SHA256으로 계산한 값과 비교합니다.

압축을 푼 뒤 실행 파일, 스크립트, 라이선스, BUILD.json, MODULES.json과 SHA256SUMS를 함께 보관하세요. 서비스가 참조하는 파일을 지우지 마세요. 맞는 패키지가 없다면 [저장소 안내](https://github.com/mobiledevloperlab/nimotehost)에 따라 빌드할 수 있습니다. 소스 설치에는 Go 1.26.5 이상이 필요하며 사전 빌드 패키지에는 필요 없습니다.

## 2. 컴퓨터에서 설치 {#host-install}

나중에 SSH로 사용할 계정으로 실행합니다. Linux/macOS에서는 압축을 푼 폴더의 터미널에서 sudo 없이 실행하세요.

```sh
sh scripts/install.sh
./nimotehost status
./nimotehost capabilities
```

Windows에서는 같은 폴더의 PowerShell에서 실행합니다.

```powershell
.\scripts\install.ps1
.\nimotehost.exe status
.\nimotehost.exe capabilities
```

설치 프로그램은 패키지를 확인하고 고정 사용자 폴더로 복사한 뒤 사용자 서비스를 등록합니다. status에 running: true가 나오면 연결할 수 있습니다. Unix에서는 비대화형 SSH의 PATH에서도 명령을 찾을 수 있어야 합니다. Windows의 호환 클라이언트는 같은 사용자의 discovery.json, 고정 설치 경로 및 SSH PATH를 확인합니다.

설치 전 잠깐 써 보려면 ./nimotehost start, Windows는 .\nimotehost.exe start를 실행하고 창을 열어 두세요. 서비스가 실행 중이면 두 번째 프로세스를 시작할 필요는 없습니다. Host는 SSH나 Agent를 설치하지 않습니다. 휴대폰은 SSH를 통하므로 Host의 로컬 HTTP 포트를 인터넷에 열지 않아도 됩니다.

### 패키지와 소스 설치 {#host-source}

CLI 이름은 `nimotehost-<version>-<os>-<arch>`, 데스크톱은 `nimotehost-gui-<version>-<os>-<arch>`입니다. Linux/macOS는 `.tar.gz`, Windows는 `.zip`입니다. GitHub Source code 대신 전체 바이너리 배포본을 선택하고 첨부 `.sha256`과 대조한 뒤 전체를 압축 해제하세요. Linux 데스크톱은 glibc 2.35 이상이 필요하며 macOS 패키지는 서명·공증되지 않았습니다.

Git과 Go 1.26.5 이상을 준비하고 일반 계정으로 실행하세요.

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

전체 소스를 제공받았다면 루트에서 마지막 줄을 실행하세요. PowerShell도 지원하며 CLI를 빌드, 검증, 설치하고 시작합니다. 설치 없이 패키지만 만들려면 `go run ./tools/build`, 데스크톱은 `go run ./tools/build -gui`를 사용하며 후자는 네이티브 SDK와 C 컴파일러가 필요합니다.

### 서비스 및 데스크톱 관리자

Linux에는 systemd 사용자 관리자, macOS에는 사용자의 GUI 로그인 세션이 필요하며 Windows는 사용자 로그인 예약 작업을 사용합니다. 해당 환경이 없으면 포그라운드로 실행하세요. 컴퓨터를 깨어 있는 상태로 유지하고 직접 또는 VPN으로 SSH에 접근할 수 있어야 합니다.

설치 위치는 Linux/macOS에서 `~/.local/share/nimotehost`, Windows에서 `%LOCALAPPDATA%\NimoteHost`입니다. PATH에 추가하거나 전체 경로로 실행하세요. GUI는 `NimoteHost.app`, `nimotehost-gui.exe`, `nimotehost-gui`를 엽니다. Overview는 서비스, Sessions는 세션, Devices는 제한된 기기, Settings는 설정, Help & diagnostics는 로그를 제공합니다. 창을 닫아도 작업은 계속되며 명시적인 중지로 종료됩니다. 기기 접근 제한에는 등록 외에 SSH 키 설정도 필요합니다.

[개요](/ko/docs/host) · [연결, 터미널 및 작업](/ko/docs/host/sessions)
