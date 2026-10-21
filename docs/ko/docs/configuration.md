---
title: Configuration Guide | NimoteCode
description: Configure NimoteCode for reliable mobile work with practical AI provider, SSH workspace and remote task setup checklists.
---

# 구성 가이드


실제 작업에 맞춰 NimoteCode를 설정하세요. 테스트를 거친 소규모 구성은 압박감 속에서도 인식하지 못하는 대규모 프로파일 카탈로그보다 더 안전하고 유용합니다.


## AI: 기본 프로필과 백업 프로필 유지


사용하려는 공급자 엔드포인트, 자격 증명 및 모델을 추가합니다. 그런 다음 에이전트에 의존하기 전에 AI Chat에서 확인하세요. 기본 프로필과 테스트된 폴백은 안정성과 비용의 균형을 맞추는 데 도움이 됩니다. 정확한 코드 작업을 위해 낮은 무작위성을 선택하고, 응답성이 향상되면 스트리밍을 사용하고, 컨텍스트 동작을 의도적으로 설정하십시오.


<ImagePlaceholder image-key="aiModelConfig" alt="AI model configuration on NimoteCode for phone">
  <strong>AI model configuration</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="aiEditConfig" alt="AI edit configuration on NimoteCode for phone">
  <strong>AI editing configuration</strong>
</ImagePlaceholder>

## SSH: 환경 이름을 지정한 다음 경계를 설정합니다.


식별 가능한 이름, 호스트, 포트, 사용자 및 인증 방법을 사용하여 환경당 하나의 프로필을 생성합니다. 연결 후 워크스페이스 루트를 확인하세요. 민감한 호스트에 대해서는 키 기반 액세스 및 최소 권한 계정을 선호합니다. 익숙한 프로필이 여전히 안전한 환경을 가리킨다고 가정하지 마십시오.


## 작업: 추측이 아닌 알려진 절차를 기록합니다.


빌드/테스트, 형식/린트, 상태 확인 및 로그 검사를 위한 명확한 작업을 생성합니다. 목적별로 그룹화하고 재시작, 배포 또는 데이터 변경 명령을 명확하게 만듭니다. 작업은 SSH 워크플로를 통해 실행되므로 실행하기 전에 액세스 및 현재 디렉터리를 확인하세요.


## 작업 준비 체크리스트


1. AI Chat은 의도한 프로필의 응답을 반환합니다.

2. SSH 프로필이 의도한 호스트 및 프로젝트 루트에 도달합니다.

3. 작업 공간에서는 하나의 저위험 터미널 명령이 작동합니다.

4. 잘 이해된 하나의 작업이 성공적으로 실행됩니다.

5. Pro Git 워크플로를 사용하는 경우 소스 제어는 쓰기 전에 저장소 상태를 읽을 수 있습니다.


계속 [설정](/docs/settings) · [AI 채팅 및 에이전트](/docs/ai) · [보안 및 안전](/docs/security)
