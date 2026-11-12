---
title: "휴대폰 코딩 입문: 로컬 파일, Linux, SSH | NimoteCode"
description: "Android 또는 iPhone에서 코딩을 시작하세요. 로컬 편집, Android Local Linux와 SSH를 선택하고 Python 예제를 실행해 결과를 확인합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 휴대폰 코딩: 실행할 위치부터 선택

휴대폰으로 코드를 편집할 수 있지만 실행에는 언어와 의존성을 지원하는 환경이 필요합니다. NimoteCode는 로컬 편집, SSH와 지원 Android의 Local Linux를 제공합니다. 도구를 모두 설치하기 전에 만들 프로젝트를 정하세요.

## 시작할 환경 선택

| 목적 | 시작 위치 | 실행 조건 |
| --- | --- | --- |
| 문서, HTML, 설정 편집 | 권한을 부여한 로컬 폴더 | 편집만으로 런타임을 제공하지 않음 |
| Android에서 스크립트 실행 | Android 8+ ARM64/x86_64 Local Linux | Ubuntu 사용자 공간과 별도 언어 도구 |
| PC 프로젝트 계속 작업 | Windows, Mac, Linux SSH | 호스트 의존성 |

Local Linux는 루팅 없는 PRoot를 사용하고 iPhone과 iPad에서는 사용할 수 없습니다. 텍스트만 고친다면 간단한 편집기로 충분하며 AI 설정도 필수는 아닙니다.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="iPhone 코드 편집. 실행 환경은 별도로 설정해야 합니다." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone 코드 편집. 실행 환경은 별도로 설정해야 합니다. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 첫 Python 스크립트

쓰기 가능한 폴더에서 `hello.py`를 만드세요.

```python
print("Hello from NimoteCode")
```

저장한 뒤 Python 3가 설치된 Local Linux 또는 Linux/macOS SSH 호스트의 같은 폴더에서 실행하세요.

```sh
python3 hello.py
```

`Hello from NimoteCode`가 출력됩니다. 명령이 없다면 실행 환경에 Python을 설치하세요. 파일을 열어도 설치되지는 않습니다. Windows는 호스트의 Python 명령을 사용하세요. [Local Linux](/ko/docs/local-linux) 또는 [원격 개발](/ko/remote-coding)에서 준비하세요.

## 실제 프로젝트로 진행

루트를 열고 설정 지침과 기존 변경을 확인한 뒤 선택한 환경에 의존성을 준비하세요. 저장 후 검증하고 Git을 확인하세요. [편집기](/ko/docs/editor)와 [소스 제어](/ko/docs/source-control)도 참고하세요.

## 환경을 바꿀 때

PRoot 비호환 도구와 무거운 빌드는 SSH 호스트로 옮기세요. 큰 변경과 복잡한 디버깅은 충분히 검토할 수 있는 화면과 입력 수단을 선택하세요. [모바일 IDE](/ko/mobile-ide)가 환경 선택을 설명합니다.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
