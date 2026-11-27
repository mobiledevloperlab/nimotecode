---
title: 빠른 시작 | NimoteCode
description: "빠른 시작 설정, 사용 절차 및 화면 안내."
---

# 빠른 시작

**개발 머신 → 개발 머신 추가**에서 SSH, Nimote Connect, 로컬 네트워크 또는 Tailscale을 선택합니다. 머신을 선택해 IDE, 터미널 또는 AI에서 작업 공간을 엽니다. 영구 세션, 원격 작업 또는 승인이 필요하면 NimoteHost를 설정합니다. NimoteHost 기능에는 호환 도구와 Pro 이용 권한이 필요합니다.

[Free 및 Pro](/ko/pro)

작업 공간을 열고 파일을 편집한 다음 첫 명령을 실행해 보세요. 아래 순서대로 진행하고, AI Agent가 필요할 때 모델 연결을 설정하세요.

- [작업 공간 열기](#작업-공간-열기)
- [파일 열기 및 편집](#파일-열기-및-편집)
- [명령 실행](#명령-실행)
- [AI Agent 실행](#ai-agent-실행)

## 작업 공간 열기

NimoteCode 2.5.0에서는 세로 모드 휴대전화의 플로팅 탐색 메뉴로 작업 패널을 전환할 수 있습니다. 단일 창 편집기가 비어 있으면 파일 탐색을 바로 열 수 있습니다.

NimoteCode 2.5.0에서는 [개인 Tailscale로 페어링된 컴퓨터에 연결](/ko/docs/ssh#paired-computers), [tmux로 SSH 터미널 재개](/ko/docs/terminal#persistent-ssh-terminal), [SSH로 NimoteHost 설정](/ko/docs/host/getting-started#install-over-ssh)을 할 수 있습니다.

전체 IDE에서 기기 파일, SSH 호스트, GitHub 프로젝트 또는 지원되는 Android 기기의 Local Linux를 선택할 수 있습니다. 데모 프로젝트로 화면을 살펴볼 수도 있습니다.

앱에는 네 가지 모드가 있습니다. **빠른 터미널**은 SSH, Linux와 명령어에, **AI 작업 공간**은 AI 대화, 에이전트와 작업에, **전체 IDE**는 파일, Git과 AI 개발에 사용합니다. **Host**는 NimoteHost를 사용해 지속되는 원격 작업과 Agent 세션을 관리합니다. 모드 전환에서 선택하세요. 프로젝트 위치는 별도로 선택하며, 기기 파일은 편집할 수 있지만 명령 실행에는 SSH 또는 Local Linux가 필요합니다.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="밝은 테마의 시작 화면." />
  <DocScreenshot file="mode-switch.png" caption="전체 IDE의 작업 공간 메뉴에서 모드를 전환합니다." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 파일 열기 및 편집

프로젝트 디렉터리를 선택하고 Explorer에서 파일을 엽니다. 편집한 뒤 디스크의 파일을 읽는 명령을 실행하기 전에 저장하세요. 선택, 탐색 및 미리보기 조작은 [편집기](/ko/docs/editor)를 참고하세요.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="별도 편집기 탭에 열린 Python 및 Markdown 파일." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 명령 실행

SSH 또는 Local Linux 작업 공간에서 Terminal을 열고 `pwd`로 작업 디렉터리를 확인합니다. 프로젝트의 테스트나 빌드 명령을 실행한 뒤 [소스 제어](/ko/docs/source-control)에서 변경된 파일을 확인합니다. 로컬 폴더만 열면 Linux 실행 환경은 제공되지 않습니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="ls 명령으로 나열한 프로젝트 파일을 표시하는 터미널." />
</div>

</div>

## AI Agent 실행

AI Agent로 프로젝트를 살펴보고 파일 간의 관계를 확인할 수 있습니다.

1. [설정](/ko/docs/configuration)에서 제공업체를 추가하고 모델 접근을 설정합니다.
2. 프로젝트 작업 공간을 연 상태에서 AI 패널을 열고, 설정된 모델과 **Nimote Agent**를 선택합니다.
3. **Confirm** 모드를 선택하고 “이 프로젝트를 설명해 줘”와 같은 요청을 보냅니다. 화면 예시의 요청은 “Explain this project”입니다.
4. 제안된 계획을 확인한 뒤 **Approve this run**을 선택해 도구 실행을 허용합니다. 타임라인에서 파일 읽기와 도구 결과를 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 모드에서 프로젝트 분석 계획을 검토한 뒤 실행을 승인합니다." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent 작업 결과: Python 테스트 추가, 통과한 테스트 출력과 Git 차이." />
</div>

응답을 읽을 때 확인하지 못한 파일 등 명시된 한계도 함께 검토하세요. 실행 중 추가 지시를 보낼 수 있습니다. Agent 선택과 실행 제어는 [AI Chat 및 Agent](/ko/docs/ai)를 참고하세요.

## 보조 도구 설정

언어 서버와 디버그 어댑터는 별도로 설정해야 합니다. [LSP](/ko/docs/lsp)와 [디버깅](/ko/docs/debug)을 참고하세요.
