---
title: Android Local Linux Architecture | NimoteCode
description: Learn how Android, PRoot, Ubuntu, and a loopback SSH service form the NimoteCode Local Linux workspace architecture.
---

# Android 로컬 Linux 아키텍처


로컬 Linux에는 네 가지 경계가 있습니다. Android는 애플리케이션 저장소와 수명 주기를 소유합니다. PRoot는 Linux 사용자 공간을 제공합니다. Ubuntu는 루트 파일 시스템과 APT 패키지를 제공합니다. NimoteCode는 로컬 SSH 연결을 통해 작업공간을 엽니다.


## PRoot가 하는 일과 하지 않는 일


PRoot는 프로세스에 대체 루트 디렉터리를 제공하고 Android 루트를 부여하지 않고도 선택한 파일 시스템 예상을 매핑할 수 있습니다. 이는 가상 머신이 아니며 모든 커널 수준 동작을 데스크톱 Linux와 동일하게 만들지 않습니다. ptrace, 특수 마운트, 권한 있는 네트워킹 또는 정확한 `/proc` 의미 체계를 사용하는 도구에는 대상 런타임 테스트가 필요합니다.


## 로컬 SSH 경계


내장 SSH 서비스는 장치 루프백 인터페이스에서만 수신 대기합니다. NimoteCode는 로컬 Linux를 Explorer, Editor, Terminal, Git, AI, Tasks, LSP 및 Debug 워크플로와 통합하는 데 사용됩니다. 외부에 노출된 SSH 서버가 아닙니다.


## 이것이 중요한 이유


아키텍처는 이식 가능하며 Android 루트가 필요하지 않지만 Android는 백그라운드 작업을 일시 중지하거나 중지할 수 있습니다. 앱으로 돌아온 후 로컬 Linux를 다시 열거나 다시 시작하고, 지속성과 용량이 더 중요한 경우 원격 호스트에서 시간이 오래 걸리거나 프로덕션과 유사한 작업을 실행하세요. [호환성](/docs/local-linux/compatibility) 및 [문제 해결](/docs/local-linux/troubleshooting)을 참조하세요.
