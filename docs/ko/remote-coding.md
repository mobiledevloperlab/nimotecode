---
title: "휴대폰 원격 개발: SSH 설정과 문제 해결 | NimoteCode"
description: "Android, iPhone, iPad의 원격 개발을 설정하세요. SSH 호스트, SFTP, 저장소 선택, 검증과 네트워크 및 인증 문제를 순서대로 확인합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 원격 개발: 휴대폰을 기존 프로젝트에 연결

저장소, 의존성과 서비스는 개발 호스트에 두고 NimoteCode로 탐색하고 편집하세요. 이 안내는 설정과 검증 절차이며 기능 설명은 [SSH IDE](/ko/ssh-ide)에 있습니다.

## 1. 호스트와 네트워크 준비

SSH 서버를 켜고 호스트 전원과 저장소 접근 권한을 확인하세요. 처음에는 실제 LAN 주소로 시험하세요. 외부에서는 VPN 같은 안전한 경로가 필요하며 방화벽 허용만으로 접근을 보장할 수는 없습니다.

## 2. 접속과 파일 접근 확인

1. 호스트, 포트, 계정과 허용 인증을 설정하고 호스트 키를 확인하세요.
2. Remote Explorer에서 루트를 선택하고 사용자 폴더에서 파일을 열고 저장해 SFTP와 쓰기를 검증하세요.
3. 터미널 디렉터리와 브랜치를 따로 확인하세요. Linux 또는 macOS에서는 다음 예시를 사용할 수 있습니다.

```sh
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone Remote Explorer의 연결된 SSH 프로젝트." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone Remote Explorer의 연결된 SSH 프로젝트. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 3. 실제 변경 검증

저장한 뒤 호스트에서 프로젝트 검증을 실행하고 Git을 확인하세요. 셸 연결만으로 의존성이 설치되거나 편집기와 같은 checkout을 사용하는 것은 아닙니다. 긴 작업은 호스트에서 세션을 관리하고 연결 중단 후 상태를 확인하세요.

## 계층별 문제 해결

| 증상 | 확인 |
| --- | --- |
| 시간 초과 | 전원, 주소, VPN, 방화벽과 클라이언트 격리 |
| 접속 거부 | SSH 서비스와 수신 포트 |
| 인증 실패 | 사용자, 정책, 암호와 키 |
| 셸만 동작 | SFTP와 디렉터리 권한 |
| 명령 실패 | 경로, 의존성과 실행 권한 |

Windows는 [OpenSSH/SFTP 절차](/ko/docs/windows-ssh-sftp), 호스트가 없다면 [휴대폰 코딩](/ko/code-from-phone), 앱 설정은 [SSH 문서](/ko/docs/ssh)를 참고하세요.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
