---
title: "Use Claude Code From Your Phone with SSH | NimoteCode"
description: "Learn a practical way to use Claude Code from your phone: connect to a development host over SSH, work in the project files, validate in terminal and review Git changes in NimoteCode."
---

# 전화기에서 클로드 코드를 사용하는 방법


개발 컴퓨터에 이미 Claude Code가 설치되어 있는 경우 휴대폰을 사용하여 SSH를 통해 해당 워크플로에 계속 연결할 수 있습니다. 문제는 CLI 출력을 보는 것뿐만이 아닙니다. 또한 논의되는 파일을 검사하고, 제안 사항을 검증하고, 결과 변경 사항을 검토해야 합니다.


NimoteCode는 원격 세션 주변에 모바일 작업 공간을 제공합니다. 저장소용 탐색기, 파일용 편집기, 명령용 SSH 터미널, 검토용 Git 및 코드 질문 및 제어된 작업을 위한 자체 AI 지원이 포함됩니다.


<ImagePlaceholder image-key="claudeCodeFromPhone" alt="Claude Code from phone remote workflow">
  <strong>Image placeholder — Remote Claude Code workflow</strong>
  <span>Replace with a redacted remote CLI session, changed file and Git diff. Do not use Claude branding without approval.</span>
</ImagePlaceholder>

## 실용적인 원격 호스트 설정


1.  자체 설명서에 따라 원격 개발 호스트에 Claude Code를 설치하고 인증합니다.

2. NimoteCode에서 [SSH 작업 공간](/docs/ssh) 프로필을 사용하여 해당 호스트에 연결하고 프로젝트 루트를 선택합니다.

3. 탐색기에서 프로젝트를 열고 SSH 터미널을 사용하여 Claude Code 세션을 시작하거나 계속하세요.

4. 편집기를 사용하여 논의 중인 파일과 변경 사항을 검사합니다.

5. 터미널에서 프로젝트 검사를 실행한 다음 커밋하기 전에 [소스 제어](/docs/source-control)에서 차이점을 검토하세요.


이것은 원격 터미널 워크플로입니다. NimoteCode는 Claude Code 제품이거나 Claude Code의 자체 설정을 대체한다고 주장하지 않습니다. 주변 프로젝트 작업을 휴대폰이나 태블릿에서 더 쉽게 관리할 수 있습니다.


## 에이전트의 검증을 계속하세요.


에이전트는 좁은 작업을 가속화할 수 있지만 환경을 이해해야 할 필요성을 제거할 수는 없습니다. 모바일에서는 각 루프를 작게 유지하는 것이 좋은 습관입니다. 계획을 요청하고, 터치된 파일을 검사하고, 관련 검사를 실행하고, 배송 전에 Git을 검토하세요. 작업이 프로덕션에 인접한 경우 확인을 사용하고 팀의 배포 프로세스를 따르십시오.


## NimoteCode가 Claude Code와 함께 유용할 때


- 여행 중이나 통화 중에 저장소를 조사해야 합니다.

- Claude Code는 SSH를 통해 연결할 수 있는 Linux 개발 호스트에서 실행되고 있습니다.

- 터미널 세션 옆에 프로젝트 탐색기와 Git 검토 보기가 필요합니다.

- 상담원 제안을 확인되고 검토 가능한 변경 사항으로 전환해야 합니다.


NimoteCode 자체 내부의 AI 제공자 설정은 [AI 채팅 및 에이전트](/docs/ai)를 참조하세요. 더 폭넓은 안내를 원하시면 [모바일 AI 코딩](/mobile-ai-coding)을 읽어보세요.


## 이 워크플로의 제한 사항


이 설정에서는 SSH를 통해 연결할 수 있는 호스트에서 Claude Code가 이미 실행되고 있다고 가정하므로 에이전트를 로컬에서 실행하는 대신 전화가 해당 호스트에 연결됩니다. 이는 원격 개발이 항상 수행하는 것과 동일한 작업(연결 가능한 호스트, 안정적인 연결 및 자체 Claude Code 자격 증명)에 따라 달라집니다. 장기 실행 에이전트 세션은 여전히 ​​데스크탑에서 감독하기가 더 쉽습니다. 전화기에서는 짧고 좁은 범위의 루프를 선호합니다. NimoteCode는 Claude Code가 아니며 Claude Code 자체 구성 내부의 문제를 해결할 수 없습니다.


## 자주 묻는 질문


### 휴대폰에서 Claude Code를 사용하려면 NimoteCode가 필요합니까?


아니요. NimoteCode는 주변 프로젝트 작업을 SSH(탐색기, 편집기, 터미널 및 Git 검토)를 통해 연결된 상태로 유지하는 동시에 Claude Code 자체가 자체 개발 호스트에서 실행되고 인증되는 모바일 작업 공간입니다.


### NimoteCode가 Claude Code를 실행해 주나요?


아니요. NimoteCode는 Claude Code 제품이 아니며 해당 설정을 대체하지 않습니다. 원격 호스트에 Claude Code를 설치하고 인증한 다음 SSH 터미널을 사용하여 세션을 시작하거나 계속합니다.


### 원격 컴퓨터 없이 휴대폰에서 Claude Code를 실행할 수 있나요?

이 워크플로에는 해당되지 않습니다. Claude Code는 SSH를 통해 연결되는 호스트에서 실행되므로 에이전트를 로컬로 실행하는 대신 전화기가 해당 호스트에 연결됩니다.


<div class="seo-cta">
  <p><strong>Bring your SSH project, terminal and review workflow to the phone.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=claude_code_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## 계속 읽기


- [전화 코덱](/codex-from-phone)

- [원격 개발용 SSH IDE](/ssh-ide)

- [AI 에이전트 데모](/use-cases/)

- [AI 에이전트가 실제로 전화로 코딩을 할 수 있나요?](/blog/can-an-ai-agent-really-code-from-a-phone)
