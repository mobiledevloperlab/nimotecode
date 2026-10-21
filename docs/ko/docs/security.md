---
title: Security and Safety | NimoteCode
description: Practical security guidance for NimoteCode SSH workspaces, provider credentials, AI Agent review, terminal commands, Git changes and subscription verification.
---

# 보안 및 안전


NimoteCode는 SSH 액세스, 공급자 자격 증명, 터미널 명령 및 파일 변경과 함께 작동할 수 있습니다. 앱은 안전한 저장 및 제어된 작업 흐름 메커니즘을 제공하지만 안전한 원격 개발은 여전히 ​​각 호스트 및 작업에 대한 선택에 달려 있습니다.


## 자격증명 및 액세스


- 민감한 환경에는 별도의 최소 권한 SSH 계정을 사용합니다.

- 중요 호스트에 대해 개인 키 인증을 선호하고 모든 세션에서 호스트 및 프로젝트 루트를 확인합니다.

- AI 제공자 자격 증명을 민감한 것으로 취급합니다. 앱의 보호된 저장소 흐름에서 구성하고 필요한 경우 공급자와 함께 순환합니다.

- 원하는 계정 및 플랫폼 스토어 신원과 연결된 구독 확인을 유지하세요.


## AI 에이전트 및 쓰기 작업


AI 에이전트는 도구 실행을 일반 채팅 응답과 분리하고 파일 및 명령 작업에 대한 유효성 검사 및 잠금 레이어를 적용합니다. 그래도 제안된 모든 명령과 변경 사항을 검토하세요. 특히 작업 영역에 프로덕션 액세스 권한이 있는 경우에는 더욱 그렇습니다. 커밋하거나 푸시하기 전에 [소스 제어](/docs/source-control) diff 검토를 사용하세요.


## 더 안전한 원격 루틴


1. SSH 호스트, 사용자 및 작업 공간 루트를 확인합니다.

2. 검사나 위험도가 낮은 명령으로 시작하세요.

3. 상황에 맞게 터미널 출력과 AI 제안을 읽어보세요.

4. 필요한 최소한의 변경을 수행합니다.

5. 배송 전에 테스트하고 Git diff를 검토하세요.


관련: [SSH 작업 영역](/docs/ssh) · [AI 채팅 및 에이전트](/docs/ai) · [구성](/docs/configuration)
