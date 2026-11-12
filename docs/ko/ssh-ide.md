---
title: "SSH IDE: 원격 파일, 터미널, Git | NimoteCode"
description: "NimoteCode SSH IDE의 SFTP 파일 탐색, 코드 편집, 호스트 터미널과 Git을 확인하세요. 연결, 파일 권한과 언어 도구의 요구 사항을 구분합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# SSH IDE로 원격 프로젝트 다루기

알고 있는 명령만 실행한다면 SSH 터미널이면 충분합니다. 저장소를 찾아 편집하고 패치를 검토해야 할 때 SSH IDE가 도움이 됩니다. NimoteCode는 Android, iPhone, iPad에 탐색기, 편집기, 터미널, Git과 선택적 AI를 제공합니다.

## 세 계층을 나눠 확인

| 계층 | 목적 | 요구 사항 |
| --- | --- | --- |
| SSH | 호스트 접근과 인증 | 접근 가능한 서버와 허용 계정 |
| SFTP | 파일 탐색과 저장 | 하위 시스템과 파일 권한 |
| 호스트 도구 | Git, 검증, 언어 서비스와 Agent | 의존성, 인증 정보와 실행 권한 |

셸 성공이 SFTP 성공을 증명하지는 않습니다. 파일을 열어도 도구가 설치되지는 않습니다.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="iPhone 편집기의 소스 탭과 키보드." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone 편집기의 소스 탭과 키보드. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 작업 공간 기능

Explorer에서 루트를 선택하고 탭과 분할 편집으로 관련 파일을 읽으세요. 명령 전에 저장하세요. 소스 제어는 변경과 기록을 제공하며 Git 쓰기와 GitHub는 접근 권한에 따릅니다. 언어 서버와 디버그 어댑터는 실행 대상에서 설정해야 합니다.

## 호스트에 맞춰 설정

Windows는 PowerShell과 SFTP를 사용합니다. [설정 안내](/ko/docs/windows-ssh-sftp)를 참고하세요. Mac과 Linux는 호스트의 셸과 도구를 사용합니다. 의존성이 준비된 호스트를 켜 둬야 하며 연결만으로 프로세스를 유지하지는 않습니다.

## 설정과 문제 해결

절차는 [원격 개발](/ko/remote-coding)과 [SSH 문서](/ko/docs/ssh), 실행 위치 선택은 [모바일 IDE](/ko/mobile-ide), AI 선택은 [모바일 AI](/ko/mobile-ai-coding)를 참고하세요.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
