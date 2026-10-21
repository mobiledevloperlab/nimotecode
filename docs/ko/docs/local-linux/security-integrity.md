---
title: Android Local Linux Security and Integrity | NimoteCode
description: Verify Local Linux artifacts and use safe package, SSH, credential, and PRoot practices on Android.
---

# Android 로컬 Linux 보안 및 무결성


로컬 Linux는 Android 루트 메커니즘이 아닌 개발 환경입니다. Android, SSH 및 공급자 자격 증명을 보호하면서 자체 패키지와 파일이 있는 별도의 사용자 공간으로 취급합니다.


## 설치한 항목 확인


- 프리셋 또는 런타임 번들을 사용하기 전에 릴리스 매니페스트를 읽으십시오.

- 다운로드한 아티팩트 및 스크립트에 대해 게시된 SHA-256 값을 확인합니다.

- 문서화된 APT 소스를 사용합니다. 패키지 설치로 인해 환경이 변경되고 네트워크 액세스가 필요할 수 있습니다.

- rootfs 아카이브, `.zst` 자산 또는 릴리스 번들을 웹 사이트 저장소에 복사하지 마십시오.


## 액세스 보호


- 공급자 자격 증명을 보호된 저장소에 보관하고 로그 또는 AI 프롬프트에 비밀을 붙여넣지 마십시오.

- 원격 호스트에 대해 최소 권한 SSH 계정을 사용합니다. 로컬 Linux의 SSH 서비스는 루프백 전용입니다.

- 변경 사항을 수락하기 전에 에이전트가 제안한 명령과 Git 차이점을 검토하세요.


사전 설정별 매니페스트, 스크립트 해시 및 유효성 검사에 대해서는 [Linux 사전 설정](/docs/local-linux/presets)을 읽어보세요. 번들 환경에 대해 법적으로 요구되는 해당 소스 및 라이선스 고지 사항은 [로컬 Linux 소스 및 라이선스](/docs/local-linux-source)를 읽어보세요.
