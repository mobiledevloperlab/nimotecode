---
title: "연결, 터미널 및 작업 | NimoteHost"
description: "NimoteHost 연결, 터미널 및 작업 안내 및 절차."
---

# 연결, 터미널 및 작업

컴퓨터에 [NimoteHost를 설치하고 시작](/ko/docs/host/getting-started)한 뒤, 같은 컴퓨터와 SSH 계정으로 세션을 여세요.

**NimoteHost는 현재 로컬 네트워크(LAN) 연결만 지원합니다.** 휴대폰과 Host 컴퓨터를 같은 LAN에 연결하고 컴퓨터의 로컬 주소로 SSH에 접속하세요.

## 휴대폰에서 연결 {#_3-휴대폰에서-연결}

NimoteCode 2.5.0에서 **Host → 원격 연결**을 열고 상태를 확인하세요. 표시된 설치 또는 업데이트 작업을 이용하거나 Host 도움말에서 설치된 버전을 확인할 수 있습니다. 실행 중인 세션을 중지해야 하면 영향을 확인한 뒤 승인하세요.

모드 선택에서 Host를 열고 SSH connections를 누릅니다. Host를 설치한 컴퓨터와 계정을 고르세요. 저장된 연결이 없다면 New Remote Connection으로 추가하고, 처음 연결할 때 SSH 호스트 키를 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="시작 화면에서 IDE, Terminal, AI와 함께 Host를 선택할 수 있습니다." />
  <DocScreenshot file="host-setup.png" caption="연결 전 화면은 서비스 설치와 SSH 연결 선택을 안내합니다." />
</div>

미설치, 중지 또는 호환성 오류가 나오면 컴퓨터에서 먼저 해결하세요. 중지된 Host를 발견했다고 자동으로 시작하지는 않습니다.

## 터미널부터 열기 {#_4-터미널부터-열기}

+ → Terminal에서 이미 존재하는 원격 폴더를 입력하고 Start session을 누릅니다. pwd와 echo Host connected로 위치와 출력을 확인합니다. Windows PowerShell에서는 Get-Location으로 폴더를 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="완료된 원격 검사 출력: 세 개의 Python 테스트가 네 번 모두 통과했습니다." />
</div>

예제는 /tmp/nimote-host-guide를 사용합니다. macOS에서는 /private/tmp/nimote-host-guide로 표시될 수 있습니다. 실제 작업에는 프로젝트 폴더를 쓰고 중요한 파일은 임시 폴더에 두지 마세요. 목록으로 돌아가도 셸은 계속 실행됩니다. 끝내려면 exit나 중지 버튼을 사용합니다.

## 원래 세션으로 돌아오기 {#_5-원래-세션으로-돌아오기}

Sessions에서 이름이나 폴더를 검색하고 All, Running, History로 범위를 바꿉니다. 메뉴에서는 고정이나 이름 변경도 할 수 있습니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Host 세션 기록: 실행 중, 완료, 중지된 프로세스." />
</div>

SSH가 끊겨도 같은 Host에 다시 연결할 수 있습니다. Host와 프로세스가 계속 실행 중이면 원래 명령을 재실행하지 않고 돌아갑니다. Host나 OS를 재시작하면 프로세스가 복원되지는 않으며 미완료 세션은 중단으로 표시됩니다. 로그아웃 후 실행 여부도 각 OS의 사용자 서비스 설정에 달려 있습니다.

시작 요청이 시간 초과되면 새로 만들기 전에 목록을 새로 고쳐 기존 세션이 생성됐는지 확인하세요.

## 한 번 실행하는 작업 {#_6-한-번-실행하는-작업}

+ → Task에서 폴더와 명령을 지정합니다. echo Host connected로 확인한 뒤 프로젝트의 빌드나 테스트 명령을 실행하세요. 이름만 보고 성공으로 판단하지 말고 실제 로그와 종료 코드를 확인합니다. 계속 입력해야 하는 명령은 Terminal에서 실행합니다.

[개요](/ko/docs/host) · [Agent 및 작업 수신함](/ko/docs/host/agents)
