---
title: 작업 | NimoteCode
description: "작업 설정, 사용 절차 및 화면 안내."
---

# 작업

<div class="doc-section">
<div class="doc-section__copy">

## 재사용할 명령 만들기

Tasks는 명령에 이름을 붙여 저장하고 용도별로 그룹화합니다. **+**로 작업을 추가하고 명령과 구성을 입력한 뒤 필요한 경우 그룹을 지정합니다. 작업은 연결된 SSH 환경에서 실행되며, 로컬 SSH 연결을 사용하는 Android Local Linux도 포함됩니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="task-runner.png" caption="All, Test 그룹과 Run Tests 항목이 있는 Tasks. 예시 명령은 echo이며 완료된 테스트 결과가 아닙니다." />
</div>

</div>

2.5.0에서 작업과 플러그인은 현재 작업 공간과 플랫폼에서 사용할 수 있는 실행 대상을 표시합니다. 연결된 SSH 터미널이나 지원되는 Android 로컬 Linux 터미널을 사용하면 해당 계정과 환경의 도구가 실행됩니다.

## 실행 및 출력 확인

작업 옆의 실행 버튼을 누르고 터미널 출력을 확인합니다. 작업 이름은 레이블일 뿐 명령을 검증하지 않습니다. 실행 전에 명령과 작업 디렉터리를 확인하세요. 기본 작업 생성 및 실행에는 Pro가 필요하지 않습니다.

## NimoteCode 2.4.0

**프로젝트 작업.** package.json, Taskfile, Makefile, justfile 및 .vscode/tasks.json에서 지원되는 작업을 찾아 터미널에서 실행합니다. Make/just 동적 탐색은 명시적 확인이 필요합니다.

[2.4.0 →](/ko/releases/2.4.0)

[Host 모드 →](/ko/docs/host) — NimoteHost 설치, SSH 연결, 터미널 및 Agent 사용법.
