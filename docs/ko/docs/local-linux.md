---
title: Android에서 루트 없이 Ubuntu 사용 | NimoteCode Local Linux
description: Android에서 루트 권한 없이 Ubuntu, Bash, Git, SSH를 사용하세요. 지원 기기와 로컬 작업의 용도를 확인하고 SSH 원격 개발과 비교하세요.
---

# Android Local Linux

Android의 Ubuntu 환경에서 간단한 스크립트를 실행하고 Git과 가벼운 개발 도구를 사용하세요. Android 루트 권한은 필요하지 않습니다.

[설치하고 첫 명령 실행하기](/ko/docs/local-linux/getting-started)

Docker나 오래 실행되는 서비스, 기존 컴퓨터 도구가 필요하면 [SSH 작업 공간](/ko/docs/ssh)을 사용하세요. [Local Linux 제한](/ko/docs/local-linux/compatibility)

<div id="local-linux-requirements"></div>

## 요구 사항

- **기기**: Android 8 이상, ARM64 또는 x86_64 64비트 앱. iPhone, iPad, 32비트 ARM은 지원하지 않습니다.
- **이용 권한**: Early Access Pro가 필요합니다. 앱의 [계정 상태](/ko/docs/account-subscription)에서 이용 가능 여부를 확인하세요.
- **도구**: Ubuntu, Bash, Git, SSH 포함. 언어 도구 모음, 언어 서버, 디버거, 외부 Agent CLI는 별도 설정이 필요합니다.

PRoot를 통해 Android 커널을 공유하며 가상 머신이나 Android 루트 권한을 제공하지 않습니다. 백그라운드 실행은 Android의 프로세스 관리에 영향을 받습니다.

## 다음 단계

- **[문제 해결](/ko/docs/local-linux/troubleshooting)**: 설치, 패키지, 백그라운드 종료 문제 처리.
- **[작동 원리](/ko/docs/local-linux/architecture)** · **[보안과 검증](/ko/docs/local-linux/security-integrity)** · **[소스와 라이선스](/ko/docs/local-linux-source)**
