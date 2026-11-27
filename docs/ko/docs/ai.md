---
title: AI Chat 및 Agent | NimoteCode
description: "AI Chat 및 Agent 설정, 사용 절차 및 화면 안내."
---

# AI Chat 및 Agent

무료 플랜은 UTC 기준 하루에 내장 Agent 작업 3개를 실행할 수 있습니다. Pro는 내장 작업을 무제한으로 실행하고 외부 ACP Agent를 지원합니다. 모델 제공자의 한도와 요금이 적용됩니다.

<div class="doc-section">
<div class="doc-section__copy">

## 대화 시작

AI 패널에서 설정된 모델을 선택하고 질문을 입력합니다. 프로젝트에 관한 요청은 먼저 해당 작업 공간을 여세요. 제공업체 인증 정보와 모델 접근은 [설정](/ko/docs/configuration)에서 별도로 구성합니다.

</div>

## MCP 및 외부 ACP Agent

외부 Agent는 호환 ACP 런타임을 대상 환경에 구성하고 의도적으로 활성화한 경우에만 실행됩니다. 자격 증명, 네트워크, 도구 정책은 NimoteCode가 제공하지 않습니다. MCP는 stdio(선택한 로컬/SSH/Local Linux 명령) 또는 Streamable HTTP를 사용합니다. 신뢰하는 서버만 추가하고 시작 및 각 도구 호출을 검토하세요.

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="SSH 프로젝트에 연결된 AI 작업 공간, 새 작업을 시작하기 전." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Agent 선택

선택기에서 Nimote Agent 또는 외부 Agent를 선택할 수 있습니다. 외부 Agent는 SSH 호스트에서 실행되므로 호환되는 ACP 런타임을 해당 호스트에 설치하고 설정해야 합니다. 런타임이 제공하는 세션 명령은 슬래시 명령 자동 완성으로 사용할 수 있습니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="모델 선택기: deepseek-flash 선택, deepseek-v4-pro도 표시." />
</div>

</div>

2.5.0에서 내장 Codex의 응답 속도가 빨라졌으며 취소와 도구 호출이 개선됐습니다. 중단된 Agent 기록을 복원할 때 취소된 턴이 보존됩니다.

2.5.0에서 검토 카드에 스냅샷이 없다고 표시되면 해당 카드의 Git 작업으로 현재 diff를 확인하세요. 스냅샷이 있는 파일은 카드에서 바로 열 수 있습니다.

## 계획 승인 및 실행 확인

**Confirm** 모드에서 제안된 계획을 검토하고 **Approve this run**으로 도구 실행을 허용합니다. 타임라인에는 현재 단계, 완료된 도구 호출 및 출력이 표시됩니다. 실행 중 추가 지시를 보내거나 질문에 답할 수 있습니다. 단계 한도에 도달하면 결과를 확인한 뒤 계속 진행하세요.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 모드에서 승인을 기다리는 프로젝트 분석 계획." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Agent 작업 결과: Python 테스트 추가, 통과한 테스트 출력과 Git 차이." />
</div>

## 결과 읽기

다음 화면은 “explain this project” 요청에 대한 하나의 응답을 보여 줍니다. 프로젝트 개요, 명령 예시, 누락된 파일 및 벤치마크 방법에 관한 주의 사항입니다. 별도의 분석 모드가 아니라 생성된 답변의 각 부분입니다. 사용 전에 참조된 파일과 명령을 현재 프로젝트와 대조하세요.

### 프로젝트 구조부터 읽기

개요에서 주요 구성 요소와 관계를 파악한 뒤 참조된 파일을 현재 작업 공간과 대조합니다.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="AI 응답의 프로젝트 개요와 주요 구성 요소." />
</div>

### 명령 예시 확인

같은 답변의 명령 예시를 읽고 현재 프로젝트와 실행 환경에 적합한지 확인한 뒤 실행 여부를 결정합니다.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="같은 응답에 포함된 프로젝트 명령 예시." />
</div>

### 제한 사항과 주의점 확인

누락된 파일, 체크아웃 범위, 벤치마크 방법 등의 제한을 확인합니다. 이 결론이 다른 버전이나 환경에도 적용된다고 가정하지 마세요.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="검토한 Python 구현, 테스트 범위 및 검증되지 않은 가정에 대한 AI 주의 사항." />
</div>


## 실행 중인 Agent에 추가 지시

지원되는 ACP Agent에는 작업 진행 중 추가 지시를 보낼 수 있습니다. 지원 여부는 Agent 런타임에 따라 다릅니다.

## NimoteCode 2.4.0

**Agent 협업.** 호환 Codex, Claude, OpenCode 세션에서 구조화된 대화, 도구, 승인, 명령, 모델 설정과 실행 중 추가 지시를 지원합니다. 실행 정책은 Host에 따라 다르며 민감한 작업은 승인이 필요할 수 있습니다.

**작업 수신함과 GitHub Issue.** 상태, 검증 증거와 diff를 확인하고 작업을 계속하거나 보관합니다. 선택한 게시 정책으로 Issue를 전달합니다. Host 버전 및 설정에 따라 다릅니다.

[2.4.0 →](/ko/releases/2.4.0)

[개발 머신 →](/ko/docs/host) — Nimote Connect 설치, SSH 연결, 터미널 및 Agent 사용법.
