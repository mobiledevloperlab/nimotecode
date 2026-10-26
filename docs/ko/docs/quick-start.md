---
title: 빠른 시작 | NimoteCode
description: "빠른 시작 설정, 사용 절차 및 화면 안내."
---

# 빠른 시작

<figure class="quick-start-hero">
  <img src="/screenshots/nimote-pro.webp" width="1440" height="810" alt="태블릿과 휴대폰의 NimoteCode. 로컬 및 SSH 작업 공간, 코드 편집, Git, 터미널, AI, 디버깅, 동기화 기능을 보여 줍니다." decoding="async" fetchpriority="high">
</figure>

## 작업 공간 열기

시작 화면에서 작업 공간을 선택합니다. **Open Local Workspace**는 기기의 파일을 열고, **Connect Remote Workspace**는 SSH 호스트에 연결합니다. **Local Linux**는 지원되는 Android 기기에 Ubuntu를 설치합니다. 호스트 설정 없이 둘러보려면 **Try Demo Workspace**를 선택합니다.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="밝은 테마의 시작 화면." />
  <DocScreenshot file="startup-dark.jpg" caption="어두운 테마의 시작 화면." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 파일 열기 및 편집

프로젝트 디렉터리를 선택하고 Explorer에서 파일을 엽니다. 편집한 뒤 디스크의 파일을 읽는 명령을 실행하기 전에 저장하세요. 선택, 탐색 및 미리보기 조작은 [편집기](/ko/docs/editor)를 참고하세요.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="열린 파일은 탭으로 표시됩니다. 예시에서는 webapp.py가 활성화되어 있습니다." />
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
  <DocScreenshot file="ai-plan-running.jpg" caption="승인 후 Agent가 프로젝트 파일을 읽고 진행 상황을 기록합니다." />
</div>

응답을 읽을 때 확인하지 못한 파일 등 명시된 한계도 함께 검토하세요. 실행 중 추가 지시를 보낼 수 있습니다. Agent 선택과 실행 제어는 [AI Chat 및 Agent](/ko/docs/ai)를 참고하세요.

## 보조 도구 설정

언어 서버와 디버그 어댑터는 별도로 설정해야 합니다. [LSP](/ko/docs/lsp)와 [디버깅](/ko/docs/debug)을 참고하세요.
