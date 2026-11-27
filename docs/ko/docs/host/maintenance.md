---
title: "서비스 관리 및 업데이트 | NimoteHost"
description: "NimoteHost 서비스 관리 및 업데이트 안내 및 절차."
---

# 서비스 관리 및 업데이트

Host 컴퓨터에서 SSH에 사용하는 계정으로 명령을 실행하세요. 설치 명령이 PATH에 없다면 아래 전체 경로를 사용합니다.

먼저 다음 명령으로 서비스를 확인합니다. 아래 명령에서도 `nimotehost` 대신 전체 경로를 사용할 수 있습니다.

```sh
"$HOME/.local/share/nimotehost/nimotehost" deploy status
```

```powershell
& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" deploy status
```

## 상태 확인 및 시작

| 명령 | 동작 |
| --- | --- |
| `nimotehost --version` | 설치된 CLI 버전을 표시합니다. |
| `nimotehost deploy status` | 서비스 상태를 확인합니다. `"running": false`이면 중지된 상태입니다. |
| `nimotehost deploy start` | 설치된 백그라운드 서비스를 시작하고 응답을 기다립니다. |
| `nimotehost deploy stop` | 실행 중인 작업이 없을 때 서비스를 중지합니다. |
| `nimotehost agents` | 실행 중인 Host가 검색한 에이전트 도구를 확인합니다. |
| `nimotehost tools refresh` | 기존 세션을 재시작하지 않고 도구 검색을 갱신합니다. |

## Nimote Connect 업데이트

실행 중인 Host 작업을 마친 뒤 지원되는 macOS와 Linux에서 NimoteCode의 업데이트 안내를 사용하세요. 수동 업데이트나 제거는 배포 저장소의 안내에 따라 기존 설치 계정으로 진행합니다.

[Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) · [개요](/ko/docs/host)
