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

## Community 업데이트 또는 제거

수동 업데이트는 실행 중인 작업을 마치고 새 패키지를 검증한 뒤 압축을 푼 폴더에서 `setup`을 실행합니다. Connect에 포함된 Host는 Connect에서 업데이트하세요.

`deploy uninstall`은 유휴 서비스와 설치 패키지를 제거하며 자격 증명과 세션 기록은 보존합니다. 압축을 푼 Community 패키지나 설치 폴더 외부의 검증된 배포 실행 파일을 사용하세요. 에디션 변경은 [Community 가이드](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md)를 참고하세요.

[고급 배포 및 복구](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md)

[개요](/ko/docs/host) · [문제 해결](/ko/docs/host/troubleshooting)
