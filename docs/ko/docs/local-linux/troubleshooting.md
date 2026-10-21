---
title: Android Local Linux Troubleshooting | NimoteCode
description: Diagnose common NimoteCode Local Linux installation, package, architecture, and lifecycle issues on Android.
---

# Android 로컬 Linux 문제 해결


## 로컬 Linux가 표시되지 않거나 설치되지 않습니다.


기기가 Android 8 이상을 실행하고 64비트 ARM64 또는 x86_64 앱 환경을 갖추고 있는지 확인하세요. 사용 가능한 저장소 및 네트워크 액세스를 확인한 다음 로컬 Linux 선택기에서 다시 시도하세요. 로컬 Linux는 iOS 또는 32비트 ARM 장치에서 사용할 수 없습니다.


## 패키지 설치 실패


전체 APT 오류를 먼저 읽어보세요. 일반적인 원인은 사용할 수 없는 저장소, 사용할 수 없는 패키지 인덱스, 네트워크/DNS 오류 또는 동시 패키지 트랜잭션입니다. 잠금 파일을 삭제하거나 임의의 복구 명령을 실행하지 마십시오. 활성 트랜잭션이 완료될 때까지 기다렸다가 패키지 관리자의 보고된 상태를 사용합니다.


## 도구는 컨테이너에서는 작동하지만 Android에서는 작동하지 않습니다.


PRoot는 VM이 아닙니다. ptrace, `/proc`, 프로세스 생성, 심볼릭 링크 및 실행 가능 비트에 대한 아키텍처, 패키지 가용성 및 가정을 다시 확인하세요. 도구 세트가 프리셋으로 제공되는 경우 Presets 저장소의 [런타임 호환성 및 테스트 기록](https://github.com/mobiledevloperlab/nimote-linux-presets/tree/master/docs)을 선호합니다.


## 앱이 백그라운드로 전환된 후 환경이 중지되었습니다.


Android는 백그라운드 프로세스를 일시 중지하거나 중지할 수 있습니다. 로컬 Linux 페이지로 돌아가서 환경을 다시 시작한 후 해당 작업공간에 다시 연결하세요. 수명이 더 긴 서비스나 데스크톱 수준의 리소스가 필요한 작업에는 원격 SSH 호스트를 사용하세요.


소스/라이선스 문제는 [로컬 Linux 소스 및 라이선스](/docs/local-linux-source)를 참조하세요. 보안 및 검증은 [보안 및 무결성](/docs/local-linux/security-integrity)을 참조하세요.
