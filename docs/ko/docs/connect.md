---
title: "Nimote Connect 다운로드 및 설치"
description: "Nimote Connect 패키지 선택, GUI와 CLI 설치, 원격 접속 활성화 및 업데이트 방법."
---

# Nimote Connect 설치

NimoteCode의 연결된 기기 목록에서 공용 네트워크로 접속하려면 컴퓨터에 Nimote Connect를 설치하고 계정에 연결한 뒤 원격 접속을 활성화해야 합니다. 이미 접속 가능한 SSH 주소나 개인 Tailscale 주소를 통한 직접 SSH에는 필요하지 않습니다.

Connect는 컴퓨터의 SSH 서버까지 연결 경로를 제공합니다. 연결 후 원격 작업 공간, 파일 및 SSH 터미널을 사용할 수 있습니다. Host 모드는 지속 작업과 Agent 세션을 위한 별도의 선택 기능이며 공용 SSH나 터미널의 필수 조건이 아닙니다. 현재 상용 패키지에는 Host도 함께 들어 있습니다.

상용 패키지와 발행자가 제공한 SHA-256 값은 [GitHub Releases](https://github.com/mobiledevloperlab/nimote-connect/releases)에서 확인하세요. 이 주소는 상용 저장소가 공개되면 교체할 임시 링크입니다. 현재 문서의 `0.2.0-rc.6`은 로컬에서 검증한 출시 후보이며 모든 플랫폼에 공개된 안정 버전을 뜻하지 않습니다. macOS / Linux에서는 CPU에 맞는 `darwin-amd64`, `darwin-arm64`, `linux-amd64`, `linux-arm64` 상용 tarball을, Windows에서는 해당 릴리스에 있을 경우 x64 / ARM64 CLI ZIP을 선택합니다.

macOS / Linux에서는 압축을 풀고 일반 데스크톱 사용자로 `./install.sh`를 실행합니다. Windows PowerShell에서는 `.\install.ps1`을 실행합니다. macOS GUI는 `~/Applications/NimoteConn.app`, Linux GUI가 패키지에 포함된 경우 `~/.local/bin/nimoteconn`입니다. Windows는 CLI만 지원합니다. 컴퓨터에서 OpenSSH를 켜고 기기 연결을 승인한 다음 GUI의 **Connect → Remote access**에서 원격 접속을 활성화하세요. CLI에서는 `nimoteconnect remote-access enable`을 실행합니다.

CLI 명령: `nimoteconnect status`(Connect 상태), `nimoteconnect host status`(Host 상태), `nimoteconnect remote-access status`(원격 접속 상태), `nimoteconnect remote-access disable`(비활성화), `nimoteconnect doctor`(진단), `nimoteconnect restart`(재시작), `nimoteconnect logout`(연결 해제). Windows에서는 `nimoteconnect` 대신 `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe`를 사용합니다.

업데이트할 때는 새 패키지의 체크섬을 확인하고 기존 설치 사용자로 설치 프로그램을 다시 실행합니다. 먼저 실행 중인 Host 작업을 마치세요. 기존 연결을 유지하려면 macOS / Linux는 `./install.sh --skip-login`, Windows는 `.\install.ps1 -SkipLogin`을 사용할 수 있습니다. [전체 영어 설치 안내](/docs/connect)를 참고하세요.
