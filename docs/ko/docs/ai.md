---
title: AI Chat 및 Agent | NimoteCode
description: "AI Chat 및 Agent 설정, 사용 절차 및 화면 안내."
---

# AI Chat 및 Agent

<div class="doc-section">
<div class="doc-section__copy">

## 대화 시작

AI 패널에서 설정된 모델을 선택하고 질문을 입력합니다. 프로젝트에 관한 요청은 먼저 해당 작업 공간을 여세요. 제공업체 인증 정보와 모델 접근은 [설정](/ko/docs/configuration)에서 별도로 구성합니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="작업 공간을 열기 전의 AI 패널." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Agent 선택

선택기에서 Nimote Agent 또는 외부 Agent를 선택할 수 있습니다. 외부 Agent는 SSH 호스트에서 실행되므로 호환되는 ACP 런타임을 해당 호스트에 설치하고 설정해야 합니다. 런타임이 제공하는 세션 명령은 슬래시 명령 자동 완성으로 사용할 수 있습니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Nimote Agent가 선택되고 외부 Agent가 비활성화된 선택기." />
</div>

</div>

## 계획 승인 및 실행 확인

**Confirm** 모드에서 제안된 계획을 검토하고 **Approve this run**으로 도구 실행을 허용합니다. 타임라인에는 현재 단계, 완료된 도구 호출 및 출력이 표시됩니다. 실행 중 추가 지시를 보내거나 질문에 답할 수 있습니다. 단계 한도에 도달하면 결과를 확인한 뒤 계속 진행하세요.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Confirm 모드에서 승인을 기다리는 프로젝트 분석 계획." />
  <DocScreenshot file="ai-plan-running.jpg" caption="승인 후 파일을 읽고 완료된 분석 단계를 기록하는 실행 화면." />
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
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="확인한 체크아웃과 벤치마크 결과에 관한 주의 사항." />
</div>
