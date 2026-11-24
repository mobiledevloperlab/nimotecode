---
title: "Agent 및 작업 수신함 | NimoteHost"
description: "NimoteHost Agent 및 작업 수신함 안내 및 절차."
---

# Agent 및 작업 수신함

[Host에 연결](/ko/docs/host/sessions)한 뒤 컴퓨터에 설치된 Agent로 대화를 시작하고 결과를 검토하세요.

## Agent 대화 만들기 {#_7-agent-대화-만들기}

컴퓨터에 Codex, Claude Code 또는 OpenCode를 설치하고 인증합니다. Claude의 구조화된 대화에는 호환 claude-agent-acp도 필요합니다. Host가 도구를 다운로드하거나 모델 계정과 사용량을 제공하지는 않습니다.

+ → Agent에서 폴더와 Installed agent를 확인합니다. Agent 탭이 없다면 CLI 설치, 인증과 서비스의 PATH를 확인하세요. 처음에는 각 권한 요청을 확인하는 정책으로 시작할 수 있습니다. Smart execution은 검증 가능한 읽기, 검색과 구조화된 편집을 자동 처리하지만 민감하거나 알 수 없는 작업은 확인합니다.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="폴더와 실행 정책을 고르는 Agent 생성 화면입니다. 설정만 촬영했으며 모델 작업은 시작하지 않았습니다." />
</div>

먼저 “테스트 명령을 찾아 줘. 파일은 아직 수정하지 마”처럼 작은 요청으로 시작하고 도구 출력과 승인을 살펴보세요. 자동 승인도 Agent 샌드박스 안에서 작동하며 코드 자동 게시와는 별개입니다. 독립 worktree는 커밋된 HEAD에서 만들며 원래 폴더의 미커밋 파일은 가져오지 않습니다. 모델, 명령, 기록 재개와 실행 중 추가 지시는 제공자의 지원 여부에 따라 다릅니다.

## 작업 수신함에서 검토 {#_8-작업-수신함에서-검토}

Task inbox가 표시되면 승인 대기, 실패, 실행 중 작업과 검토할 결과를 찾아볼 수 있습니다. 원래 대화와 diff, 실제 테스트 명령, 종료 코드와 검증 대상 버전을 확인하세요. Agent의 성공 메시지만으로 테스트 통과를 판단하지 마세요.

검토한 작업은 처리 완료나 보관으로 옮길 수 있지만 승인 대기 항목은 숨길 수 없습니다. 수정하려면 원래 세션으로 돌아갑니다. Git을 열기 전 컴퓨터와 폴더도 확인하세요.

GitHub Issue 전달에는 Nimote Connect에 포함된 Host가 필요합니다. NimoteHost Community는 에이전트 세션, 승인 및 검증을 지원합니다.

GitHub Issue 전달에는 해당 기능을 지원하는 Host와 설치 및 인증된 gh가 필요합니다. 휴대폰의 GitHub 로그인은 Host에 복사되지 않습니다. 처음에는 수동 게시를 선택하고 diff와 검증을 본 뒤 PR을 만드세요. 자동 게시는 전달할 때 명시적으로 선택해야 하며 PR을 자동 병합하지 않습니다.

## Host 플러그인 열기 {#_9-host-플러그인-열기}

앱 설정의 플러그인에서 연결된 Host가 제공하는 항목을 확인하고 사이드바에서 엽니다. 폼은 플러그인마다 다릅니다. 권한이나 호환성 문제를 해결한 뒤 다시 실행하세요. [플러그인 안내](/ko/docs/plugins)도 참고할 수 있습니다.

[개요](/ko/docs/host) · [서비스 관리 및 업데이트](/ko/docs/host/maintenance)
