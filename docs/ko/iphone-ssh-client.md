---
title: "iPhone SSH 클라이언트: SFTP, 편집기, Git | NimoteCode"
description: "NimoteCode iPhone에서 SSH로 연결하고 SFTP 파일 탐색, 코드 편집, 호스트 명령과 Git 검토를 이어 가세요. 설정 절차, 사용 조건과 App Store 다운로드 안내."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# iPhone SSH 클라이언트로 프로젝트 편집하기

외출 중 서버 파일을 확인하거나 스크립트를 수정하고 저장소를 검토해야 하나요? NimoteCode는 iPhone 작업 공간에 SSH 터미널, 원격 파일 탐색, 코드 편집기, Git 검토와 선택적 AI를 제공합니다. 프로젝트는 호스트에 두고 휴대폰에서 조작합니다.

명령만 실행한다면 전용 터미널로 충분할 수 있습니다. 파일을 찾아 편집하고 검증한 뒤 diff까지 확인하는 작업에 NimoteCode가 유용합니다.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="iPhone의 NimoteCode Remote Explorer에 표시된 SSH 연결과 프로젝트." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone의 NimoteCode Remote Explorer에 표시된 SSH 연결과 프로젝트. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 개발 호스트에 연결하기

1. Windows, Mac 또는 Linux 호스트에서 SSH 서버를 활성화하고 전원과 네트워크 접근을 확인하세요. Windows는 [OpenSSH 및 SFTP 안내](/ko/docs/windows-ssh-sftp)를 참고하세요.
2. **Connect Remote Workspace**에서 호스트, 포트, 사용자 이름과 인증 방법을 입력하세요.
3. 첫 연결에서는 호스트에서 직접 얻은 신뢰할 수 있는 값과 호스트 키 지문을 비교하세요.
4. 저장소 루트를 선택하고 Remote Explorer의 연결과 경로를 확인하세요.
5. 쓰기 가능한 디렉터리에서 테스트 파일을 편집하고 저장한 뒤 호스트에서도 결과를 확인하세요.

프로필과 폴더 선택은 [SSH 안내](/ko/docs/ssh)에 설명되어 있습니다. LAN 밖에서는 VPN 같은 안전한 경로가 필요합니다. 클라이언트 설치만으로 호스트가 접근 가능해지지는 않습니다.

## SFTP 파일 탐색과 코드 편집

프로젝트 트리에서 소스, 문서와 설정을 찾아 편집기 탭으로 여세요. 외부 도구를 실행하기 전에 저장해야 합니다. SFTP는 호스트 계정 권한을 따르며 로그인 성공이 모든 폴더의 쓰기 권한을 주지는 않습니다.

Windows SFTP 경로는 로컬 표기와 다를 수 있으므로 서버가 반환한 경로를 사용하세요. [편집기 안내](/ko/docs/editor)에서 탭, 텍스트 선택과 분할 보기를 확인할 수 있습니다.

## 명령 실행과 Git 검토

터미널 명령은 원격 호스트에서 실행됩니다. 컴파일러, Git, 언어 서버와 프로젝트 의존성은 호스트에 준비해야 합니다. 편집 전에 작업 폴더와 브랜치를 확인하고 커밋 전에 diff와 프로젝트 검증 결과를 살펴보세요.

iOS는 백그라운드 앱을 일시 중지할 수 있습니다. 긴 작업에는 호스트 세션 유지 방식을 준비하고 재접속 후 상태를 확인하세요.

## iPhone과 호스트가 담당하는 작업

로컬 폴더에서는 iOS 권한에 따라 파일을 편집할 수 있지만 컴파일러나 Linux 런타임이 자동으로 제공되지는 않습니다. **Local Linux는 Android 전용**입니다. 이 iPhone 작업 흐름에서는 프로젝트 명령을 SSH 호스트에서 실행합니다. AI는 선택 사항이며 제공업체 설정이 필요합니다. [AI 안내](/ko/docs/ai)와 [iPad 개발](/ko/ipad-coding)도 참고하세요.

## 자주 묻는 질문

<!-- faq:start -->

### iPhone에서 SFTP를 지원하나요?

네. SSH 작업 공간은 SFTP로 원격 파일에 접근하며 서버 설정과 계정 권한을 따릅니다. 연결 후 목록 조회, 파일 열기와 저장을 각각 확인하세요.

### iPhone에서 Ubuntu를 직접 실행할 수 있나요?

아니요. NimoteCode Local Linux는 지원 Android 기기 전용입니다. iPhone에서는 SSH 호스트가 Linux 셸과 프로젝트 도구를 제공합니다.

### SSH를 사용하기 전에 AI 설정이 필요한가요?

아니요. 모델 설정 없이 연결, 파일 탐색, 편집과 기본 터미널을 사용할 수 있습니다. AI는 별도의 제공업체 설정과 접근 조건이 있습니다.

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
