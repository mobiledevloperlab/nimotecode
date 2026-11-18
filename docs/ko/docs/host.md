---
title: "Host: 오픈 소스 원격 작업과 Agent | NimoteCode"
description: "연결 해제 후 컴퓨터에서 터미널, 작업과 Agent를 유지하세요. NimoteHost 기능, Apache-2.0 전체 소스, 사용자 정의, 기여와 배포를 알아보세요."
---

# Host: 오픈 소스 원격 작업 및 Agent 작업 공간

휴대폰에서 개발 컴퓨터의 터미널, 작업과 Agent를 관리하세요. 연결 해제 후에도 작업은 계속되며 다시 연결해 진행 상황과 승인을 확인합니다.

## NimoteHost 다운로드 {#download-nimotehost}

<HostDownload />

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

## 준비할 것

SSH로 접속할 수 있는 Linux, macOS 또는 Windows 컴퓨터, Host 모드가 포함된 NimoteCode 빌드와 호환 Host, 원격 계정이 접근할 수 있는 프로젝트 폴더가 필요합니다. 뒤에서 입력하는 경로는 휴대폰이 아닌 컴퓨터의 경로입니다.

SSH가 처음이라면 먼저 [SSH 연결](/ko/docs/ssh)을 설정하세요. Windows는 [Windows SSH](/ko/docs/windows-ssh-sftp)도 참고하세요. Host가 SSH를 설치하거나 설정해 주지는 않습니다.

## 1. 패키지 다운로드

[NimoteHost 릴리스](https://github.com/mobiledevloperlab/nimotehost/releases)에서 컴퓨터에 맞는 전체 패키지를 선택합니다. 서버에서는 CLI만 있으면 됩니다. 컴퓨터에서 관리 창도 사용하려면 GUI 패키지를 선택하세요.

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

## 3. 휴대폰에서 연결

모드 선택에서 Host를 열고 SSH connections를 누릅니다. Host를 설치한 컴퓨터와 계정을 고르세요. 저장된 연결이 없다면 New Remote Connection으로 추가하고, 처음 연결할 때 SSH 호스트 키를 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="시작 화면에서 IDE, Terminal, AI와 함께 Host를 선택할 수 있습니다." />
  <DocScreenshot file="host-setup.png" caption="연결 전 화면은 서비스 설치와 SSH 연결 선택을 안내합니다." />
</div>

미설치, 중지 또는 호환성 오류가 나오면 컴퓨터에서 먼저 해결하세요. 중지된 Host를 발견했다고 자동으로 시작하지는 않습니다.

## 4. 터미널부터 열기

+ → Terminal에서 이미 존재하는 원격 폴더를 입력하고 Start session을 누릅니다. pwd와 echo Host connected로 위치와 출력을 확인합니다. Windows PowerShell에서는 Get-Location으로 폴더를 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="pwd와 echo Host connected 출력입니다. 목록에서 다시 열어도 남아 있습니다." />
</div>

예제는 /tmp/nimote-host-guide를 사용합니다. macOS에서는 /private/tmp/nimote-host-guide로 표시될 수 있습니다. 실제 작업에는 프로젝트 폴더를 쓰고 중요한 파일은 임시 폴더에 두지 마세요. 목록으로 돌아가도 셸은 계속 실행됩니다. 끝내려면 exit나 중지 버튼을 사용합니다.

## 5. 원래 세션으로 돌아오기

Sessions에서 이름이나 폴더를 검색하고 All, Running, History로 범위를 바꿉니다. 메뉴에서는 고정이나 이름 변경도 할 수 있습니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="예제 폴더와 Running으로 필터링해 실행 중인 터미널만 표시했습니다." />
</div>

SSH가 끊겨도 같은 Host에 다시 연결할 수 있습니다. Host와 프로세스가 계속 실행 중이면 원래 명령을 재실행하지 않고 돌아갑니다. Host나 OS를 재시작하면 프로세스가 복원되지는 않으며 미완료 세션은 중단으로 표시됩니다. 로그아웃 후 실행 여부도 각 OS의 사용자 서비스 설정에 달려 있습니다.

시작 요청이 시간 초과되면 새로 만들기 전에 목록을 새로 고쳐 기존 세션이 생성됐는지 확인하세요.

## 6. 한 번 실행하는 작업

+ → Task에서 폴더와 명령을 지정합니다. echo Host connected로 확인한 뒤 프로젝트의 빌드나 테스트 명령을 실행하세요. 이름만 보고 성공으로 판단하지 말고 실제 로그와 종료 코드를 확인합니다. 계속 입력해야 하는 명령은 Terminal에서 실행합니다.

## 7. Agent 대화 만들기

컴퓨터에 Codex, Claude Code 또는 OpenCode를 설치하고 인증합니다. Claude의 구조화된 대화에는 호환 claude-agent-acp도 필요합니다. Host가 도구를 다운로드하거나 모델 계정과 사용량을 제공하지는 않습니다.

+ → Agent에서 폴더와 Installed agent를 확인합니다. Agent 탭이 없다면 CLI 설치, 인증과 서비스의 PATH를 확인하세요. 처음에는 각 권한 요청을 확인하는 정책으로 시작할 수 있습니다. Smart execution은 검증 가능한 읽기, 검색과 구조화된 편집을 자동 처리하지만 민감하거나 알 수 없는 작업은 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="폴더와 실행 정책을 고르는 Agent 생성 화면입니다. 설정만 촬영했으며 모델 작업은 시작하지 않았습니다." />
</div>

먼저 “테스트 명령을 찾아 줘. 파일은 아직 수정하지 마”처럼 작은 요청으로 시작하고 도구 출력과 승인을 살펴보세요. 자동 승인도 Agent 샌드박스 안에서 작동하며 코드 자동 게시와는 별개입니다. 독립 worktree는 커밋된 HEAD에서 만들며 원래 폴더의 미커밋 파일은 가져오지 않습니다. 모델, 명령, 기록 재개와 실행 중 추가 지시는 제공자의 지원 여부에 따라 다릅니다.

## 8. 작업 수신함에서 검토

Task inbox가 표시되면 승인 대기, 실패, 실행 중 작업과 검토할 결과를 찾아볼 수 있습니다. 원래 대화와 diff, 실제 테스트 명령, 종료 코드와 검증 대상 버전을 확인하세요. Agent의 성공 메시지만으로 테스트 통과를 판단하지 마세요.

검토한 작업은 처리 완료나 보관으로 옮길 수 있지만 승인 대기 항목은 숨길 수 없습니다. 수정하려면 원래 세션으로 돌아갑니다. Git을 열기 전 컴퓨터와 폴더도 확인하세요.

GitHub Issue 전달에는 해당 기능을 지원하는 Host와 설치 및 인증된 gh가 필요합니다. 휴대폰의 GitHub 로그인은 Host에 복사되지 않습니다. 처음에는 수동 게시를 선택하고 diff와 검증을 본 뒤 PR을 만드세요. 자동 게시는 전달할 때 명시적으로 선택해야 하며 PR을 자동 병합하지 않습니다.

## 9. Host 플러그인 열기

앱 설정의 플러그인에서 연결된 Host가 제공하는 항목을 확인하고 사이드바에서 엽니다. 폼은 플러그인마다 다릅니다. 권한이나 호환성 문제를 해결한 뒤 다시 실행하세요. [플러그인 안내](/ko/docs/plugins)도 참고할 수 있습니다.

## 유지 관리, 업데이트 및 로컬 데이터

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

## 연결되지 않을 때

먼저 일반 SSH가 되는지 확인하세요. Host를 찾지 못하면 계정, 설치 경로와 SSH PATH를 확인하고, Windows에서는 같은 사용자의 discovery.json을 확인합니다. 중지 상태라면 컴퓨터에서 nimotehost status를 확인하고 설치 방식에 맞게 시작합니다. 프로토콜이 맞지 않으면 App과 Host를 호환 버전으로 맞춥니다.

보이는 출력이 저장된 기록일 수도 있습니다. 입력하기 전에 연결과 프로세스 실행 여부, 원격 폴더 접근 권한을 확인하세요. 생성 결과를 모를 때는 원래 세션부터 찾습니다. Host 중지, 재시작 및 업데이트는 진행 중인 작업을 끝낸 뒤 하세요.

[SSH](/ko/docs/ssh) · [Agent](/ko/docs/ai) · [작업](/ko/docs/tasks)
