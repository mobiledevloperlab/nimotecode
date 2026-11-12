---
title: "Android SSH 클라이언트: SFTP, 편집기, 터미널 | NimoteCode"
description: "NimoteCode로 Android에서 Linux, Mac, Windows에 SSH 접속하세요. 인증, SFTP 파일 탐색, 코드 편집과 원격 프로젝트 검증을 설명합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Android SSH 클라이언트로 명령과 파일 다루기

Android에서 서버 명령이나 원격 설정을 다룰 때 NimoteCode는 SSH, SFTP 탐색, 편집과 Git 검토를 제공합니다. 명령만 필요하면 전용 터미널로 충분합니다. 파일과 변경도 다룬다면 프로젝트 작업 공간을 선택할 수 있습니다.

## 연결 설정과 확인

호스트, 포트, 계정과 허용된 인증을 입력하고 첫 연결에서 호스트 키를 확인하세요. 포트 테스트는 직접 TCP 접근만 확인하며 인증이나 SFTP 성공을 뜻하지 않습니다. 연결 후 저장소 루트를 선택하세요.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Android SSH 연결 화면의 포트 테스트와 인증 설정." />
</div>

## 주소와 권한

LAN에서는 사용 중인 Wi-Fi 또는 Ethernet 주소를 사용하고 외부에서는 VPN 같은 안전한 경로를 준비하세요. 호스트는 켜져 있어야 합니다. 인증은 서버 정책을, SFTP 저장은 파일 권한도 따릅니다.

Windows는 PowerShell과 SFTP를 사용합니다. [Windows 안내](/ko/docs/windows-ssh-sftp)로 OpenSSH와 방화벽을 설정하세요. Mac과 Linux는 호스트의 셸을 사용합니다.

## 파일 작업까지 검증

사용자 폴더에서 파일을 열고 저장한 뒤 터미널 디렉터리와 프로젝트 검증을 확인하고 Git diff를 읽으세요. Git, 언어 서비스와 외부 Agent는 호스트 설치와 권한이 필요합니다.

자세한 절차는 [원격 개발 설정](/ko/remote-coding), 별도 호스트 없는 Android 작업은 [Android IDE](/ko/android-ide), 기능 설명은 [SSH IDE](/ko/ssh-ide)를 참고하세요.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
