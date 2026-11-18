---
title: "Host: 오픈 소스 원격 작업과 Agent | NimoteCode"
description: "연결 해제 후 컴퓨터에서 터미널, 작업과 Agent를 유지하세요. NimoteHost 기능, Apache-2.0 전체 소스, 사용자 정의, 기여와 배포를 알아보세요."
---

# Host: 오픈 소스 원격 작업 및 Agent 작업 공간

휴대폰에서 개발 컴퓨터의 터미널, 작업과 Agent를 관리하세요. 연결 해제 후에도 작업은 계속되며 다시 연결해 진행 상황과 승인을 확인합니다.

## NimoteHost 다운로드 {#download-nimotehost}

<HostDownload />

[하드웨어 및 패키지 선택](/ko/docs/host/compatibility) · [다운로드 및 설치](/ko/docs/host/getting-started) · [연결, 터미널 및 작업](/ko/docs/host/sessions) · [Agent 및 작업 수신함](/ko/docs/host/agents) · [서비스 관리 및 업데이트](/ko/docs/host/maintenance) · [문제 해결](/ko/docs/host/troubleshooting)

## Host 기능과 사용 가치

기존 컴퓨터의 파일과 도구로 실행하고 휴대폰에서 진행 상황을 확인하세요. 검토나 판단이 필요할 때 원래 작업으로 돌아올 수 있습니다.

| 기능 | 사용 가치 |
| --- | --- |
| 터미널 및 작업 관리 | 빌드, 테스트와 스크립트를 실행하고 연결 해제 후에도 관리 프로세스를 유지합니다. 다시 연결해 출력을 보고 조작하세요. |
| 호환 Agent 협업 | Codex, Claude Code, OpenCode의 대화, 도구 결과와 승인을 확인하고 지원되는 경우 추가 지시를 보냅니다. |
| 세션 및 작업 수신함 | 검색, 필터와 고정으로 승인 대기, 실패, 검토할 결과를 찾습니다. |
| 검증 및 코드 검토 | 실제 테스트 기록, 종료 코드와 diff를 확인합니다. 지원되는 Host에 게시 정책을 지정해 GitHub Issue를 전달합니다. |
| 기존 환경 사용 | Linux, macOS, Windows의 CLI 또는 데스크톱 관리자로 기존 프로젝트와 도구를 사용합니다. |
| 오픈 소스 | Host 전체 소스를 검토, 빌드, 수정하고 연동 및 개선에 기여합니다. |

외출 전 테스트를 시작해 결과를 확인하거나 Agent 수정 중 승인을 처리하고 완료 후 diff를 검토할 수 있습니다. Host와 컴퓨터는 계속 실행되어야 하며 재시작은 원래 프로세스를 복원하지 않습니다. 기능은 Host와 설치된 도구에 따라 다릅니다.

## NimoteCode와 NimoteHost

NimoteCode는 클라이언트이고 NimoteHost는 컴퓨터에서 작업을 실행합니다. Host는 Linux, macOS, Windows용 CLI와 데스크톱 관리자를 제공하며 [전용 저장소](https://github.com/mobiledevloperlab/nimotehost)에서 전체 소스를 Apache-2.0으로 제공합니다. NimoteCode 앱은 상용 비공개 소스로 유지됩니다. Host는 독립 실행 및 RPC, Go 클라이언트, MCP 연동도 지원합니다.

연결은 **NimoteCode → SSH → NimoteHost → 프로젝트 도구** 순서입니다. 추가 Nimote 계정이나 공개 Host 포트가 필요 없으며 인증 정보는 컴퓨터에 남습니다. 명령은 Host의 OS 계정 권한으로 실행되므로 사용자 격리가 필요하면 OS 계정을 분리하세요. 일반 SSH에는 Host가 필요 없으며 Host는 연결 해제 후 작업 지속과 호환 Agent 관리를 추가합니다.

 Host 모드에는 NimoteCode 2.4.1 이상이 필요합니다. 서비스를 설치해도 이전 앱에 해당 화면이 추가되지는 않습니다.

## 전체 소스: 검토, 사용자 정의 및 기여

**NimoteHost 전체 소스는 Apache-2.0입니다.** Host 런타임, CLI, 데스크톱 관리자와 연동 SDK를 포함합니다. 실행, 인증과 기록 구현을 확인하고 직접 빌드·배포할 수 있습니다. NimoteCode 클라이언트는 상용 비공개 소스로 유지됩니다.

- 저장소를 Fork해 동작, 화면과 배포 방식을 수정할 수 있습니다. 앱 연동 시 프로토콜 호환성을 유지하세요.
- `pkg/pluginsdk`로 플러그인, `pkg/hostclient`로 Go 연동을 개발하고 RPC나 MCP를 사용할 수 있습니다. MCP는 기본 읽기 전용입니다.
- Issue로 문제나 제안을 공유하고 수정, Agent 어댑터, 번역과 문서를 Pull Request로 기여하세요. 큰 변경은 먼저 논의하고 기여 가이드의 검증을 실행하세요.

[전체 소스](https://github.com/mobiledevloperlab/nimotehost) · [라이선스](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [기여 가이드](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [플러그인 SDK](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### 투명한 구현 및 접근 관리

기존 인증 SSH를 사용하고 인증 HTTP API는 루프백에서만 수신합니다. Host 인증 정보는 컴퓨터에 남으며 추가 Nimote 중계나 공개 API 포트가 필요 없습니다. 실행 위치와 코드를 직접 관리하세요.

명령은 Host의 OS 계정 권한으로 실행됩니다. 적절한 계정을 사용하고 Agent와 플러그인 권한을 검토하며 의존성을 업데이트하세요. Agent 입력 및 프로젝트 정보는 설정된 모델 제공자에게 전송될 수 있습니다. 소스 공개는 검토를 가능하게 하지만 무결점 보안이나 독립 감사 완료를 보장하지 않습니다. [보안 정책 및 비공개 신고](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md)를 확인하세요.

## 다운로드 및 설치 {#host-install}

[다운로드 및 설치](/ko/docs/host/getting-started#host-install)

### 소스에서 설치 {#host-source}

[다운로드 및 설치](/ko/docs/host/getting-started#host-source)
