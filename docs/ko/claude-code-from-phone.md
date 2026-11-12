---
title: "휴대폰에서 SSH로 Claude Code 사용하기 | NimoteCode"
description: "개발 호스트에서 Claude Code를 실행하고 Android 또는 iPhone의 NimoteCode로 접근하세요. 설정, 세션 복구, Git 검토와 문제 해결을 설명합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 휴대폰에서 SSH로 Claude Code 사용하기

저장소를 개발 기기에 두고 휴대폰에서 Claude Code 작업을 이어 가는 안내입니다. Linux 또는 macOS 호스트의 CLI에 SSH로 접속하고 NimoteCode에서 파일 탐색, 편집, 터미널과 Git 검토를 사용합니다.

SSH는 여러 방법 중 하나입니다. Agent 작업만 확인한다면 제공업체의 최신 웹, 모바일과 원격 기능도 확인하세요. 호스트 파일과 프로젝트 명령에 직접 접근할 때 NimoteCode가 도움이 됩니다.

## 1. 호스트와 계정 준비

켜져 있는 SSH 호스트, 접근할 수 있는 저장소와 프로젝트 의존성을 준비하세요. 먼저 공식 절차로 호스트에 Agent를 설치하고 인증하세요. Agent 계정, 사용 한도, 권한과 인증 정보는 NimoteCode와 별개입니다.

호스트에 맞는 Claude Code 공식 설치 방법을 사용하세요. 예:

```sh
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

[Claude Code quickstart](https://code.claude.com/docs/en/quickstart) · [Remote Control](https://code.claude.com/docs/en/remote-control)

## 2. 휴대폰에서 저장소 열기

[SSH 작업 공간](/ko/docs/ssh)을 만들고 호스트 키를 확인한 뒤 루트를 선택하세요. 터미널에서도 같은 경로로 이동하고 기존 변경을 확인하세요. 아래 경로는 예시이며 자동으로 생성되지 않습니다.

아래 셸 예시는 Linux 또는 macOS SSH 호스트용입니다. 프로젝트 경로를 바꾸세요. Windows는 PowerShell에 맞는 명령이 필요합니다. [Windows SSH 및 SFTP](/ko/docs/windows-ssh-sftp)를 참고하세요.

```sh
cd /path/to/project
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-terminal.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-terminal.webp" width="660" height="1433" alt="iPhone NimoteCode SSH 터미널의 셸 명령 화면. Claude Code 실행 기록은 아닙니다." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone NimoteCode SSH 터미널의 셸 명령 화면. Claude Code 실행 기록은 아닙니다. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 3. 호스트 세션에서 시작하기

Linux나 macOS 호스트에 tmux가 있으면 휴대폰 연결이 끊겨도 호스트 터미널 세션을 유지하는 데 도움이 됩니다. 이름 있는 세션을 만들거나 연결하고 그 안에서 Agent를 시작하세요. 재접속 후 Agent가 실행 중이면 중복 실행하지 말고 이어 가세요.

```sh
tmux new-session -A -s mobile-claude
claude
```

범위가 명확한 요청부터 시작하세요.

> 이 설정 값을 읽는 위치를 찾고 관련 파일과 확인 방법을 설명해 주세요. 아직 파일은 수정하지 마세요.

## 4. 재접속과 대화 재개 구분

Ctrl+B 다음 D를 누르면 tmux에서 분리됩니다. SSH로 다시 연결한 뒤 같은 세션에 접속하세요. Agent가 종료되고 대화만 저장된 경우에는 같은 저장소에서 재개 명령을 사용하세요. 저장된 대화와 실행 중인 프로세스는 다릅니다.

```sh
tmux attach-session -t mobile-claude
```

```sh
claude -r
```

[tmux](https://github.com/tmux/tmux/wiki/Getting-Started)

## 5. 대화 밖에서 결과 검증

NimoteCode로 변경 파일을 열고 저장한 뒤 프로젝트의 테스트나 빌드를 실행하고 diff를 읽으세요. 다음 명령은 패치 확인용이며 프로젝트 테스트를 대체하지 않습니다.

```sh
git diff --check
git diff --stat
git diff
```

Nimote Agent의 Confirm 모드는 내장 Agent를 제어합니다. 수동 SSH 명령이나 외부 CLI 권한은 제어하지 않습니다. CLI 자체 권한을 설정하고 모바일 입력을 줄이기 위해서만 확인을 끄지 마세요.

## 실패한 계층 확인

| 증상 | 우선 확인 |
| --- | --- |
| SSH 시간 초과 | 호스트 절전, 주소, VPN, 방화벽과 경로 |
| Agent 명령 없음 | SSH 셸의 설치 경로와 PATH |
| 로그인 실패 | Agent 계정과 공식 헤드리스 인증 안내 |
| 세션 없음 | tmux, 호스트 재시작, 프로세스 종료와 대화 재개 |
| 검증 실패 | 저장소 경로, 의존성과 실행 권한 |

## 공식 설정과 관련 안내

[Claude Code quickstart](https://code.claude.com/docs/en/quickstart) · [Remote Control](https://code.claude.com/docs/en/remote-control)

[SSH](/ko/docs/ssh) · [Git](/ko/docs/source-control) · [AI / ACP](/ko/docs/ai)

## 자주 묻는 질문

<!-- faq:start -->

### Claude Code 구독이 포함되나요?

아니요. Claude Code는 별도로 설치하고 인증해야 합니다. NimoteCode는 호스트 세션을 위한 모바일 작업 공간이며 Agent 계정이나 사용량을 포함하지 않습니다.

### 앱을 닫으면 Agent가 계속 실행되나요?

그 자체로 보장되지는 않습니다. 호스트 세션 도구는 연결 중단에 도움이 되지만 호스트와 프로세스가 실행 중이어야 합니다. 재접속 후 상태를 확인하세요.

### Claude Code 공식 모바일 클라이언트인가요?

아니요. NimoteCode를 사용하는 독립 SSH 안내입니다. 제공업체의 모바일 또는 원격 기능은 별도 선택지입니다.

<!-- faq:end -->

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
