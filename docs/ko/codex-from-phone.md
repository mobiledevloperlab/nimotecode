---
title: "Use Codex From Your Phone with SSH and Git | NimoteCode"
description: "Use Codex from your phone in a practical remote development workflow: SSH into your development host, inspect project files, run checks and review Git changes with NimoteCode."
---

# 휴대폰에서 Codex를 사용하는 방법


코딩 에이전트는 필요한 저장소, 터미널 및 테스트 환경에 가까울 때 가장 유용합니다. Codex가 원격 개발 호스트에 설정된 경우 SSH 기반 모바일 작업 공간을 사용하면 작업을 복사된 조각으로 줄이지 않고도 전화기에서 작업을 계속할 수 있습니다.


NimoteCode는 편집기, 탐색기, SSH 터미널, Git, AI Chat 및 에이전트를 결합하므로 동일한 프로젝트 컨텍스트로 원격 Codex 세션을 해결할 수 있습니다. 소스를 열고 명령을 실행하고 출력을 검사하고 실제 차이점을 검토합니다.


<ImagePlaceholder image-key="codexFromPhone" alt="Codex from phone remote workflow">
  <strong>Image placeholder — Remote Codex workflow</strong>
  <span>Replace with a redacted remote agent session, source inspection and validation output. Do not include credentials or private code.</span>
</ImagePlaceholder>

## 전화 친화적인 Codex 워크플로


1.  조직에서 요구하는 자격 증명과 제어 기능을 사용하여 원격 개발 호스트에 Codex를 설정하세요.

2.  [SSH 작업공간](/docs/ssh)을 통해 NimoteCode에서 저장소를 엽니다.

3. 호스트가 구성된 방식으로 SSH 터미널에서 Codex 세션을 시작하거나 재개합니다.

4. 탐색기 및 편집기 탭을 사용하여 논의 중이거나 변경 중인 파일을 검사합니다.

5. 터미널에서 집중 테스트 또는 확인을 실행합니다.

6. 커밋하거나 푸시하기 전에 [소스 제어](/docs/source-control)에서 스테이지된 결과와 스테이지되지 않은 결과를 검토하세요.


NimoteCode는 Codex 또는 공식 설정을 대체하는 것으로 제공되지 않습니다. 주변 개발 작업을 연결하고 검토할 수 있게 해주는 모바일 작업 공간입니다.


## 작업 공간에서 OpenAI 호환 AI 사용


NimoteCode는 인앱 AI 채팅 및 에이전트 워크플로에 대한 AI 공급자 구성도 지원합니다. 이는 SSH 세션과 함께 작업 공간 인식 설명, 계획 또는 제어된 자동화를 원할 때 유용할 수 있습니다. 제공자 구성은 [AI 채팅 및 에이전트](/docs/ai)를, 실행 제어는 [보안 및 안전](/docs/security)을 참조하세요.


## 작업 범위를 좁히고 관찰 가능하게 유지하세요


전화기에서 속도는 보호 장치를 건너뛰는 것이 아니라 컨텍스트 전환을 줄이는 데서 나옵니다. 한 번에 하나의 명확한 목표를 선호하고, 편집을 수락하기 전에 파일을 읽고, 가장 작은 적절한 확인 명령을 실행하고 Git diff를 검사하십시오. 이 패턴은 Codex가 기능, 리팩터링 또는 사고 대응을 지원하는지 여부에 관계없이 작동합니다.


## 이 워크플로의 제한 사항


Codex는 SSH를 통해 연결할 수 있는 호스트에 이미 설정되어 있어야 합니다. 전화기는 로컬에서 Codex를 실행하지 않습니다. 이는 워크플로가 네트워크, 호스트 구성 및 Codex 계정 제한을 상속한다는 것을 의미합니다. 장시간 또는 탐색적 에이전트 세션은 데스크톱에서 감독하기가 더 쉽기 때문에 전화기에서는 각 실행을 좁고 관찰 가능하게 유지하세요. NimoteCode는 독립적인 모바일 작업 공간입니다. Codex를 프록시하지 않으며 Codex의 자체 설정 및 제어 기능이 계속 적용됩니다.


## 자주 묻는 질문


### 휴대폰에서 Codex를 사용하려면 NimoteCode가 필요합니까?


아니요. NimoteCode는 원격 Codex 세션(탐색기, 편집기, SSH 터미널 및 Git 검토) 주변의 모바일 작업 공간이며 Codex는 자체 개발 호스트에 설치되고 인증됩니다.


### Codex는 NimoteCode의 공식 파트너인가요?


아니요. Codex는 외부 코딩 에이전트입니다. NimoteCode는 공식 파트너십을 주장하지 않으며 Codex를 대리한다고 주장하지 않습니다. 원격 호스트에서 Codex를 실행하고 SSH를 통해 문제를 해결합니다.


### Codex 대신 NimoteCode에서 AI 도우미를 사용할 수 있나요?


예. NimoteCode에는 원격 Codex 세션에 추가로 또는 대신 사용할 수 있는 공급자 구성이 포함된 자체 AI 채팅 및 에이전트 워크플로가 있습니다.


<div class="seo-cta">
  <p><strong>Keep the project, command output and Git review with you when you use Codex remotely.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=codex_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=codex_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 관련 페이지


- [모바일 AI 코딩 작업공간](/mobile-ai-coding)

- [전화의 클로드 코드](/claude-code-from-phone)

- [SSH 원격 개발 워크플로](/docs/ssh)

- [AI 에이전트가 실제로 전화로 코딩을 할 수 있습니까?](/blog/can-an-ai-agent-really-code-from-a-phone)
