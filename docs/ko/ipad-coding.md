---
title: "iPad 코딩: SSH, 편집기, Git, AI 작업 공간 | NimoteCode"
description: "NimoteCode로 iPad에서 프로젝트 탐색, 분할 편집, SSH 터미널과 Git 검토를 사용하세요. 원격 실행 방식, iPadOS 제약과 설치 절차를 설명합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPad에서 기존 개발 환경 이어 가기

소스와 명령 출력을 비교할 때 태블릿의 넓은 화면이 도움이 됩니다. NimoteCode는 iPad에 프로젝트 탐색기, 분할 편집기, SSH 터미널, Git과 선택적 AI를 제공합니다. Pull Request 검토, 문서 수정과 범위가 명확한 버그 수정을 진행하고 무거운 처리는 개발 호스트에서 실행할 수 있습니다.

짧은 메모라면 간단한 편집기로 충분합니다. 프로젝트를 수정할 때는 먼저 의존성, 검증과 서비스를 실행할 위치를 정하세요.

<figure class="article-hero">
  <a href="/images/ios/ipad-workspace.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-workspace.webp" width="1200" height="899" alt="App Store에 등록된 NimoteCode iPad 화면: 프로젝트 탐색과 코드 편집." loading="lazy" decoding="async">
  </a>
  <figcaption>App Store에 등록된 NimoteCode iPad 화면: 프로젝트 탐색과 코드 편집. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 로컬 편집과 원격 프로젝트 선택

| 작업 | 실행 위치 | 필요 조건 |
| --- | --- | --- |
| 로컬 파일 편집 | 권한이 부여된 iPad 파일 제공업체 | 프로젝트 폴더 접근 |
| 명령과 빌드 | SSH 호스트 | 도구, 의존성과 네트워크 |
| Git 검토 | 현재 Git 작업 공간 | 지원 저장소와 권한 |
| AI에 질문 | 설정한 제공업체와 사용 가능한 도구 | 인증 정보와 기능 접근 |

**Android Local Linux는 iPadOS에서 사용할 수 없습니다.** 폴더를 연다고 Node.js, Python, 컴파일러나 Linux 셸이 설치되지는 않습니다. 파일 제공업체 폴더에서는 네이티브 경로가 필요한 도구도 제한될 수 있습니다. [작업 공간 설정](/ko/docs/ssh)을 확인하세요.

## iPad 작업 흐름 설정

1. App Store에서 설치하고 기기 및 OS 요구 사항을 확인하세요.
2. 켜져 있는 Windows, Mac 또는 Linux 호스트에 SSH를 설정하고 호스트 키를 확인한 뒤 저장소 루트를 선택하세요.
3. 파일을 열고 비교가 필요하면 분할 편집을 사용하세요. 터미널의 작업 폴더는 별도로 확인하세요.
4. 저장하고 호스트에서 프로젝트 검증을 실행한 뒤 커밋 전에 diff를 검토하세요.

[Windows 안내](/ko/docs/windows-ssh-sftp)는 PowerShell과 SFTP를 설명합니다. LAN 밖에서는 호스트로 이어지는 안전한 네트워크 경로가 필요합니다.

## 넓은 화면으로 변경 검토

관련 파일을 탭에 남겨 구현, 설정과 테스트를 비교하세요. [소스 제어](/ko/docs/source-control)는 변경 파일, diff와 기록을 제공합니다. GitHub 작업은 계정과 저장소 권한을 따릅니다. 프로젝트 실행 환경은 여전히 호스트가 제공합니다.

<figure class="article-hero">
  <a href="/images/ios/ipad-git.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-git.webp" width="1200" height="899" alt="App Store의 iPad 화면에 표시된 Git AI 도구와 변경 분석." loading="lazy" decoding="async">
  </a>
  <figcaption>App Store의 iPad 화면에 표시된 Git AI 도구와 변경 분석. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 필요할 때 AI 추가하기

익숙하지 않은 코드 설명이나 구체적인 오류 분석부터 요청하세요. Nimote Agent는 사용 가능한 작업 공간 도구를 사용하며 Confirm 모드에서는 계획 승인 후 실행합니다. 외부 ACP Agent에는 호환 런타임과 인증 정보가 필요합니다. [AI 안내](/ko/docs/ai)를 참고하세요.

## iPadOS 백그라운드 동작 고려

앱 전환이나 화면 잠금으로 연결이 끊길 수 있습니다. 호스트의 터미널 멀티플렉서는 세션 유지에 도움이 되지만 호스트 절전이나 재시작을 막지는 않습니다. 재접속 후 저장 내용과 작업 상태를 확인하세요. 대규모 리팩터링과 긴 디버깅은 데스크톱이 더 적합할 수 있습니다.

## 자주 묻는 질문

<!-- faq:start -->

### iPad에서 Local Linux를 실행할 수 있나요?

아니요. Local Linux는 Android 전용입니다. iPad는 SSH 호스트의 런타임, 터미널 도구와 빌드 환경을 사용합니다.

### iPad의 로컬 파일을 열 수 있나요?

네. iPadOS와 파일 제공업체가 부여한 권한에 따릅니다. 폴더를 열어도 네이티브 경로가 필요한 모든 도구가 사용 가능한 것은 아닙니다.

### Android와 모든 기능이 같나요?

핵심 편집과 SSH 흐름은 공유하지만 실행 환경은 다릅니다. Local Linux는 iPad에서 사용할 수 없으며 파일 권한과 백그라운드 실행도 플랫폼에 따라 다릅니다.

<!-- faq:end -->

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
