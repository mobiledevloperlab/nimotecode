---
title: NimoteCode Linux Presets | Android Local Linux
description: Learn how NimoteCode Linux Presets declares optional Ubuntu development environments for Android Local Linux with manifests and SHA-256 verification.
---

# NimoteCode Linux 사전 설정


[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets)는 선택적 로컬 Linux 개발 환경을 위한 독립적인 기술 저장소입니다. 실제 매니페스트, 설치 프로그램, 검증자, 스키마, 테스트 하네스 및 릴리스 자산을 소유합니다. 이 웹사이트는 해당 파일이나 rootfs를 복사하지 않습니다.


## 현재 범위


리포지토리는 ARM64 및 AMD64의 Ubuntu 24.04에 대한 `minimal`, `python`, `web` 및 `cpp` 사전 설정을 선언합니다. 현재 매니페스트에는 `experimental`로 표시되어 있습니다. 루트 매니페스트는 PRoot 런타임 버전, 소스 URL, SHA-256, rootfs 입력 메타데이터 및 사전 설정별 해시도 기록합니다.


## 확인 경로


1. 사전 설정 저장소에서 선언된 릴리스 또는 개정판을 선택합니다.

2. 상태, 아키텍처, Ubuntu 버전, 종속성 및 네트워크 요구 사항에 대한 루트 및 사전 설정 매니페스트를 읽어보세요.

3. `checksums.sha256`와 선택한 스크립트에 대해 선언된 SHA-256 값을 확인합니다.

4. 중요한 작업에 사전 설정을 사용하기 전에 저장소의 검증 및 테스트 지침을 따르십시오.


이는 PRoot에서 모든 도구가 동일하게 작동한다고 주장하는 것은 아닙니다. 저장소의 컨테이너 검사는 일반적인 Ubuntu 동작을 검증하는 반면 Android PRoot 보고서는 런타임 증거입니다. [아키텍처](/docs/local-linux/architecture), [호환성](/docs/local-linux/compatibility) 및 [기본 저장소의 사전 설정 게이트웨이](https://github.com/mobiledevloperlab/nimotecode/tree/main/presets)를 참조하세요.
