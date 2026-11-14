---
title: "Linux Presets: Python, Node.js, C++ 개발 도구 | NimoteCode"
description: "Android Local Linux용 선택적 Ubuntu 도구 모음을 살펴보세요. 실험 상태, 지원 아키텍처, 종속성 및 SHA-256을 설치 전에 확인하세요."
---

# NimoteCode Linux Presets

선택적 개발 도구 모음은 [Linux Presets 저장소](https://github.com/mobiledevloperlab/nimote-linux-presets)에서 관리합니다. 프로젝트에 맞게 선택하고 설치 전에 호환성을 확인하세요.

## 도구 모음

| 도구 모음 | 용도 |
| --- | --- |
| `minimal` | 기본 명령줄 개발 도구 |
| `python` | Python 3, pip, 가상 환경 |
| `web` | Ubuntu 패키지의 Node.js와 npm |
| `cpp` | GCC, CMake, GDB, 네이티브 빌드 도구 |

선언된 환경은 ARM64 또는 AMD64의 Ubuntu 24.04입니다. 도구 모음은 **experimental(실험 단계)**로 표시되어 있습니다. 정확한 상태, 종속성, 런타임 요구 사항은 선택한 버전의 manifest를 확인하세요.

## 설치 전 확인

1. 현재 환경에 맞는 릴리스나 리비전을 선택하세요.
2. manifest를 읽고 `checksums.sha256` 및 해당 스크립트의 해시를 확인한 뒤 저장소의 설치 절차를 따르세요.
3. Android PRoot 테스트 기록을 확인하세요. Ubuntu 컨테이너 테스트 통과만으로 기기 호환성을 입증할 수 없습니다.

처음에는 [설치 시작하기](/ko/docs/local-linux/getting-started)를 참고하세요. 실행 제한은 [호환성](/ko/docs/local-linux/compatibility), 검증 방법은 [보안 및 무결성](/ko/docs/local-linux/security-integrity)을 확인하세요.
