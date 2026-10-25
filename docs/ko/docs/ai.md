---
title: AI Chat and Agent | NimoteCode
description: Use NimoteCode AI Chat for code and error explanations, and AI Agent for controlled multi-step work with provider profiles and workspace context.
---

# AI 채팅 및 에이전트


NimoteCode는 직접적인 AI 도움말과 AI 지원 실행을 분리합니다. **AI Chat**은 상황에 맞는 빠른 답변을 제공합니다. **AI 에이전트**는 파일, 터미널 또는 Git 도구 전반에 걸쳐 몇 가지 의도적인 단계가 필요한 작업을 위한 것입니다.


<ImagePlaceholder image-key="aiAssistant" alt="NimoteCode AI panel">
  <strong>Image placeholder — AI assistance with workspace context</strong>
  <span>Replace with a screenshot of the AI panel explaining an active file or planning a small, reviewable change.</span>
</ImagePlaceholder>

## 다음 결정은 AI 채팅을 사용하세요


파일을 변경하기 전에 Chat에 익숙하지 않은 코드 설명, 터미널 출력 해석, 리팩터링 개요 또는 아이디어 검토를 요청하세요. 관련 파일을 활성 상태로 유지하면 대화에 유용한 작업 공간 컨텍스트가 제공됩니다. 최근 작업과 작업 영역 컨텍스트는 Chat에 계속 표시되며, 컴팩트한 글로벌 표시기는 패널 사이를 이동할 때 활성 에이전트 작업을 계속 표시합니다.


## 제어된 시퀀스를 위해 AI 에이전트 사용


에이전트는 파일 검사, 계획 제안, 편집, 검사 실행 및 결과 요약 등의 작업이 필요할 때 적합합니다. 실행 중에는 작업에 방향이 필요할 때 후속 지시를 추가하거나 대화형 질문에 답변할 수 있습니다. 새로 구성된 컨텍스트, 기록, 프롬프트 편집, 타임라인 보기는 긴 작업을 더 쉽게 추적하게 합니다. 가용성이 확대됨에 따라 Early Access Pro를 통해 사용할 수 있습니다. 무료 사용 할당량을 사용하지 않습니다.

## 작업이 계속되는 동안 제어 유지

실행 중인 Agent는 백그라운드 약속이 아니라 협업입니다. 계획, 명령, 권한 요청, 파일 변경 및 압축 출력을 검토하고, 설정된 단계 예산에 도달하면 상태를 확인한 뒤 계속할지 결정하세요.


## SSH 작업 공간에서 외부 ACP 에이전트 사용


SSH 호스트에서 호환 가능한 ACP 런타임을 사용할 수 있는 경우 내장 에이전트와 함께 이를 선택합니다. NimoteCode는 동일한 대화 환경에서 기능, 권한 요청, 세션 상태 및 실행 진행 상황을 제공합니다. 활성 ACP 세션에서 보고된 내장 세션 작업 및 명령에 대한 작성기에서 `/`를 입력합니다. 런타임은 SSH 호스트에 유지됩니다. 시작하기 전에 명령과 환경이 구성되어 있는지 확인하세요.


<ImagePlaceholder image-key="agentRunLog" alt="AI Agent run log on NimoteCode for phone">
  <strong>Agent execution log</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentRunPythonBenchmark" alt="AI Agent running a Python benchmark on phone">
  <strong>Agent runs a Python benchmark</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentAlgorithmBenchmarkResults" alt="AI Agent benchmark results on phone">
  <strong>Agent benchmark results</strong>
</ImagePlaceholder>

## 의도적으로 공급자 구성


공급자 프로필은 엔드포인트, API 자격 증명, 모델, 스트리밍 및 컨텍스트 동작과 같은 연결 및 모델 설정을 유지합니다. 자신의 AI 공급자와 API 키를 연결합니다. NimoteCode는 모델 액세스 또는 토큰을 번들로 묶지 않습니다. 작동하는 기본 프로필과 테스트된 백업 프로필을 유지하세요. 실제 체크리스트는 [구성](/docs/configuration)을 참조하세요.


SSH 작업 공간의 경우 터미널, 외부 ACP 에이전트, 작업, 디버그, 언어 서버, Git 및 외부 CLI는 원격 계정의 로그인 환경을 공유합니다. 셸 구성을 변경한 후 터미널 메뉴에서 **원격 환경 새로 고침**을 사용하세요. 다시 연결하면 새로 고쳐집니다. 진단 출력은 API 키, 토큰, 비밀 및 비밀번호를 마스킹합니다.


> 특히 원격 또는 프로덕션에 인접한 작업 공간에서 명령 및 파일 변경 사항을 적용하기 전에 검토하세요. 앱의 유효성 검사 및 잠금 레이어는 제어된 작업을 지원합니다. 운영 책임을 사용자에게 이전하지 않습니다.


[AI 에이전트 데모](/use-cases/) · [보안 및 안전](/docs/security) · [모바일 AI 코딩](/mobile-ai-coding) 계속하기
