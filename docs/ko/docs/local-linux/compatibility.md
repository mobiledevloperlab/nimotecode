---
title: Android Local Linux Compatibility | NimoteCode
description: Review NimoteCode Local Linux device, architecture, runtime, and workload compatibility expectations before starting development on Android.
---

# Android 로컬 Linux 호환성


로컬 Linux는 64비트 ARM64 및 x86_64 장치에서 Android 8 이상을 지원합니다. iOS에서는 사용할 수 없으며 32비트 ARM 장치를 지원하지 않습니다. 번들 환경은 이러한 아키텍처에 대한 Ubuntu 24.04 입력을 대상으로 합니다. 정확한 런타임 및 사전 설정 선언은 게시된 매니페스트에 속합니다.


## 좋은 로컬 워크로드


- 셸 스크립트, 소형 유틸리티, 학습 및 집중적인 프로젝트 작업.

- 설치 후 Git 작업 및 경량 언어 도구.

- 장치에 파일과 명령을 보관하면 도움이 되는 작업입니다.


## 다음과 같은 경우에는 원격 개발을 선호합니다.


- 빌드에는 모바일 장치가 편안하게 제공하는 것보다 더 많은 CPU, 메모리, 스토리지 또는 영구 서비스가 필요합니다.

- 이 프로젝트는 이미 데스크톱 컨테이너, 회사 네트워킹, 하드웨어 또는 기존 호스트 도구 체인에 의존하고 있습니다.

-  특히 디버깅, ptrace 또는 프로세스 제어와 관련하여 PRoot에서의 도구 동작은 확인되지 않았습니다.


별도의 [Linux 사전 설정](/docs/local-linux/presets) 프로젝트는 선택적 사전 설정 아키텍처, Ubuntu 버전 및 테스트 정책을 기록합니다. 성공적인 컨테이너 테스트만으로는 Android PRoot 호환성을 입증할 수 없습니다.
