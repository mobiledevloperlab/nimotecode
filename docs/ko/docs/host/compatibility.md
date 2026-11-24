---
title: "하드웨어 및 패키지 선택 | NimoteHost"
description: "휴대폰에서 다운로드하더라도 NimoteHost를 실행할 컴퓨터／서버의 운영 체제와 CPU 아키텍처에 맞춰 선택하세요. 휴대폰 CPU는 기준이 아닙니다. CLI 또는 데스크톱 패키지를 선택하고 NimoteCode와 호환되는 버전인지 확인하세요."
---

# 하드웨어 및 패키지 선택

휴대폰에서 다운로드하더라도 **NimoteHost를 실행할 컴퓨터／서버의 운영 체제와 CPU 아키텍처**에 맞춰 선택하세요. 휴대폰 CPU는 기준이 아닙니다. CLI 또는 데스크톱 패키지를 선택하고 NimoteCode와 호환되는 버전인지 확인하세요.

## 현재 배포 대상

NimoteHost Community 2.5.0 배포 대상 기준입니다. 전체 네이티브 플랫폼과 휴대폰／Agent 실기기 검증은 아직 완료되지 않았습니다. 선택한 릴리스에 실제 제공되는 파일을 확인하세요.

| Host 운영 체제／CPU | 패키지 표기 | CLI | 데스크톱 |
| --- | --- | --- | --- |
| Linux · Intel/AMD x64 | `linux-amd64` | ✓ | ✓ |
| Linux · ARM64 | `linux-arm64` | ✓ | ✓ |
| Linux · x86 (32-bit) | `linux-386` | ✓ | — |
| macOS · Apple Silicon | `darwin-arm64` | ✓ | ✓ |
| macOS · Intel | `darwin-amd64` | ✓ | ✓ |
| Windows · Intel/AMD x64 | `windows-amd64` | ✓ | ✓ |
| Windows · ARM64 | `windows-arm64` | ✓ | ✓ |
| Windows · x86 (32-bit) | `windows-386` | ✓ | — |

## Host 아키텍처 확인

Linux／macOS Host에서 `uname -m`을 실행하세요. `x86_64`는 `amd64`, `aarch64`／`arm64`는 `arm64`, `i386`／`i686`는 32비트 x86(`386`, Linux CLI 전용)입니다. Windows에서는 설정 → 시스템 → 정보 → 시스템 종류에서 CPU와 설치된 OS를 함께 확인하세요. 64비트 CPU에 32비트 OS가 설치되어 있으면 32비트 패키지를 선택합니다.

`amd64`는 Intel／AMD x64, `arm64`는 Apple Silicon을 포함한 64비트 ARM입니다. 32비트 ARM, 32비트 GUI, 32비트 macOS는 현재 배포 대상이 아닙니다. ARM64에는 호환되는 64비트 OS도 필요합니다.

## 요구 사항 및 지원 범위

화면 없는 서버는 CLI, 그래픽 관리가 필요하면 CLI가 포함된 데스크톱 패키지를 선택하세요. 해당 네이티브 데스크톱 환경이 필요합니다. Linux 데스크톱은 glibc 2.35 이상이 필요하며 Alpine／musl 호환성을 가정하면 안 됩니다. macOS 패키지는 서명 및 공증되지 않았습니다.

공통 최소 RAM, 디스크 용량, GPU 사양은 공개되지 않았습니다. 프로젝트, 동시 작업, Agent 도구 요구 사항에 따라 준비하세요. 클라우드 Agent 사용만으로 로컬 모델이나 GPU가 필요한 것은 아닙니다.

백그라운드 서비스는 Linux systemd 사용자 관리자, macOS GUI 로그인, Windows 사용자 로그온 작업을 사용합니다. 사용할 수 없으면 CLI를 포그라운드에서 실행하세요. SSH는 별도로 구성하고 Host를 깨어 있는 상태로 유지하며 네트워크 접근을 확인하세요.

[소스 및 빌드 대상](https://github.com/mobiledevloperlab/nimotehost/blob/master/README.md) · [릴리스](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) · [미완료 검증](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/pending.md)

[다운로드 및 설치](/ko/docs/host/getting-started)
