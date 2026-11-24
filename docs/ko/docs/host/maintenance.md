---
title: "서비스 관리 및 업데이트 | NimoteHost"
description: "NimoteHost 서비스 관리 및 업데이트 안내 및 절차."
---

# 서비스 관리 및 업데이트

## 유지 관리, 업데이트 및 로컬 데이터

NimoteCode 2.5.0에서 **Host → 원격 연결**을 열고 상태를 확인하세요. 표시된 설치 또는 업데이트 작업을 이용하거나 Host 도움말에서 설치된 버전을 확인할 수 있습니다. 실행 중인 세션을 중지해야 하면 영향을 확인한 뒤 승인하세요.

| 명령 | 동작 |
| --- | --- |
| `nimotehost version` | 실행 파일 버전. |
| `nimotehost status` | 실행 중이면 `running: true`. |
| `nimotehost capabilities` | 프로토콜, 기능, 도구. |
| `nimotehost agents` | 설치된 Agent 버전. |
| `nimotehost install` | 고정 경로에서 사용자 서비스 등록 및 시작. |
| `nimotehost stop` | Host와 활성 작업 중지. |
| `nimotehost restart` | 설치된 서비스 재시작 및 작업 중단. |
| `nimotehost uninstall` | 서비스 제거, 인증 정보와 기록 유지. |

설치된 CLI를 사용하세요. PowerShell에서는 `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" status`로 호출할 수 있습니다. 중지된 설치 서비스는 `restart`로 시작하고 `start`는 포그라운드로 실행됩니다. `setup`은 전체 패키지를 검증·설치하고 `install`은 배치된 실행 파일을 등록합니다.

Unix SSH 환경은 대상을 바꿔 `ssh user@host 'command -v nimotehost && nimotehost status'`로 확인하세요. 없으면 `ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'`를 시도하고 비대화형 PATH를 수정하세요. 도구 경로 변경 후 작업을 마치고 설치된 CLI에서 `stop`, 수정된 환경에서 `install`을 실행합니다.

업데이트 시 새 전체 패키지를 검증하고 작업을 마친 뒤 이전 GUI를 닫고 같은 계정으로 설치하세요. 이전 패키지를 보존하며 활성 작업 중단은 거부합니다. 이후 버전, 상태, 기능을 확인하세요. 다운그레이드 전 상태를 백업하세요. 설치 파일 삭제 전에 `uninstall`을 실행하며 기록과 인증 정보는 남습니다.

| 시스템 | 기본 설정 및 상태 디렉터리 |
| --- | --- |
| Linux | `~/.config/nimotehost` 또는 `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/Library/Application Support/nimotehost` |
| Windows | `%APPDATA%\nimotehost` |

Host를 중지한 상태에서 백업하고 소유자 전용 권한을 유지하며 인증 정보와 대화를 공개하지 마세요. 프로젝트와 Agent 제공자 데이터는 별도로 백업합니다. 기록 복사로 실행 프로세스가 복원되지는 않습니다.

진단은 Linux의 `systemctl --user status nimotehost.service` 및 `journalctl --user -u nimotehost.service -n 50 --no-pager`, macOS의 `launchctl print gui/$(id -u)/com.nimotehost`, Windows의 `schtasks.exe /Query /TN NimoteHost /V /FO LIST`를 사용하세요. 사용자 로그인 상태와 Linux 로그아웃 후 lingering 정책도 확인하세요.

[개요](/ko/docs/host) · [문제 해결](/ko/docs/host/troubleshooting)
