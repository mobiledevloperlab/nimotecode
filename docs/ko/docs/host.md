---
title: Host 사용법：NimoteHost 설치부터 세션 연결까지 | NimoteCode
description: Linux, macOS, Windows에 NimoteHost를 설치하고 SSH로 연결해 터미널, 작업과 Agent를 사용하는 방법.
---

# Host로 원격 작업 이어가기

휴대폰에서 작업을 시작한 뒤 나중에 결과를 보고 싶다면 Host를 사용하세요. 개발 컴퓨터의 NimoteHost가 작업과 터미널을 관리하고, 휴대폰은 SSH로 출력과 입력, Agent 승인을 처리합니다.

이 문서는 2.4.0 구현을 기준으로 작성했습니다. Host는 개발 미리보기이며 제공되는 기능은 연결된 Host에 따라 다릅니다. 사진은 실제 Android 휴대폰의 영어 화면과 라이트 테마입니다. 촬영 당시 앱 패키지는 2.3.1(Build 64), Host는 로컬 2.4.0 빌드였습니다.

## 준비할 것

SSH로 접속할 수 있는 Linux, macOS 또는 Windows 컴퓨터, NimoteCode 2.4.0과 호환 Host, 원격 계정이 접근할 수 있는 프로젝트 폴더가 필요합니다. 뒤에서 입력하는 경로는 휴대폰이 아닌 컴퓨터의 경로입니다.

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

## 2. 컴퓨터에서 설치

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

## 연결되지 않을 때

먼저 일반 SSH가 되는지 확인하세요. Host를 찾지 못하면 계정, 설치 경로와 SSH PATH를 확인하고, Windows에서는 같은 사용자의 discovery.json을 확인합니다. 중지 상태라면 컴퓨터에서 nimotehost status를 확인하고 설치 방식에 맞게 시작합니다. 프로토콜이 맞지 않으면 App과 Host를 호환 버전으로 맞춥니다.

보이는 출력이 저장된 기록일 수도 있습니다. 입력하기 전에 연결과 프로세스 실행 여부, 원격 폴더 접근 권한을 확인하세요. 생성 결과를 모를 때는 원래 세션부터 찾습니다. Host 중지, 재시작 및 업데이트는 진행 중인 작업을 끝낸 뒤 하세요.

[SSH](/ko/docs/ssh) · [Agent](/ko/docs/ai) · [작업](/ko/docs/tasks)
