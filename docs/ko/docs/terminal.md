---
title: 터미널 | NimoteCode
description: "터미널 설정, 사용 절차 및 화면 안내."
---

# 터미널

Free는 터미널 2개를 동시에 사용할 수 있습니다. Pro에는 앱에서 설정한 개수 제한이 없습니다.

<div class="doc-section">
<div class="doc-section__copy">

## 작업 공간 명령 실행

현재 SSH 또는 Local Linux 작업 공간에서 Terminal을 엽니다. `pwd`로 디렉터리를 확인한 뒤 프로젝트 명령을 실행합니다. 출력은 해당 세션에 속하며 편집기 탭을 바꿔도 셸의 작업 디렉터리는 바뀌지 않습니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="ls 출력을 표시하는 터미널." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## 출력 검색, 복사 및 분석

세션 메뉴에는 출력 검색, 클립보드 작업, **Analyze with AI**, 출력 지우기, 세션 닫기가 있습니다. Analyze with AI는 설명을 위해 터미널 컨텍스트를 전송합니다. 제공업체에 보내기 전에 선택된 내용을 확인하세요.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="Analyze with AI와 Refresh Remote Environment가 포함된 세션 메뉴." />
</div>

</div>

## tmux로 SSH 터미널 재개하기 {#persistent-ssh-terminal}

NimoteCode 2.5.0의 Pro에서 tmux가 설치된 호환 Linux 또는 macOS 호스트에 연결하세요. 터미널 메뉴에서 지속 터미널을 만들거나 원격 tmux 목록에서 같은 호스트와 SSH 계정의 세션을 선택하세요. 목록은 해당 계정의 기본 tmux 소켓을 사용합니다.

로컬 탭을 닫으면 클라이언트 연결만 끊기고 원격 세션은 계속 실행됩니다. 원격 tmux 세션 종료를 선택하고 확인하면 세션과 작업이 중지됩니다. 호스트를 재시작하거나 tmux 서버가 종료되면 기존 세션이 끝납니다.

Codex나 Claude Code 같은 프로그램이 마우스 입력을 사용한다면 Shift를 누른 채 드래그하고 오른쪽 클릭 메뉴에서 복사하세요. NimoteCode 2.5.0에서는 화면을 다시 그려도 선택 내용이 유지됩니다.

저장한 tmux 세션은 터미널 기록에서 재개하거나 같은 SSH 사용자로 연결한 다른 클라이언트의 원격 목록에서 열 수 있습니다. 가로 모드 휴대전화에서 화면 키보드가 열리고 공간이 충분하면 Esc와 Ctrl 등이 표시됩니다.

Android 로컬 Linux에 tmux를 설치했다면 실행 중인 환경 안의 세션도 같은 메뉴에서 열 수 있습니다. 환경을 중지하면 세션도 종료됩니다. Dev Containers 내부와 네이티브 Windows SSH 호스트에서는 지속 터미널 작업을 사용할 수 없습니다.

## 원격 환경 새로 고침

원격 계정의 셸 구성을 변경한 뒤 **Refresh Remote Environment**를 선택하거나 다시 연결합니다. 확인된 로그인 환경은 Tasks, Git, 언어 서버, 디버그 어댑터 및 외부 Agent 등 원격 도구가 공유합니다.

## 터미널 탭 사용자 지정

탭 사용자 지정 메뉴에서 이름이나 색상을 바꾸고 설정을 초기화할 수 있습니다. **Customize Terminal Tab**에서는 제목, 색상, 아이콘을 함께 설정합니다. 이 설정은 세션을 구분하기 위한 것으로 호스트나 명령 실행 환경을 변경하지 않습니다.

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="탭 사용자 지정 메뉴." />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="탭 제목, 색상 및 아이콘 설정." />
</div>


## 터미널 분할 및 연동

여러 창을 열고 크기를 조정할 수 있습니다. 출력의 파일 위치에서 IDE로 이동하거나 선택한 내용을 AI 분석에 보낼 수 있습니다.

## NimoteCode 2.4.0

터미널 응답성, 동기화 업데이트, 검색, 스크롤, Vim, 클립보드, Windows 붙여넣기 및 소프트 키보드를 개선했습니다.

[2.4.0 →](/ko/releases/2.4.0)
