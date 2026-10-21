---
title: Mobile Development Resources | NimoteCode
description: Practical technical resources on mobile development, Android Linux, PRoot, remote SSH development, mobile AI coding, and coding-agent workflows.
---

# 모바일 개발 리소스


작업이 실행되어야 하는 위치와 휴대폰이 실제 엔지니어링 루프에 어떻게 적합한지 평가하는 개발자를 위한 기술적인 시작점입니다. 그들은 먼저 절충점을 설명합니다. NimoteCode는 모바일 편집기, SSH 터미널, Git 검토 및 로컬 Linux 작업 공간이 해당 워크플로를 실행하는 데 도움이 되는 경우에 적합합니다.


## 개발 환경 선택


| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI 코딩 및 SSH 워크플로


- [모바일 AI 코딩](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md)은 에이전트 작업을 검사 및 테스트 가능하게 유지하는 방법을 설명합니다.

- [SSH 개발 도구](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md)는 편집기, 터미널 및 Git 검토 기능에 대한 보안 연결을 매핑합니다.

- [전화기의 Claude Code](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md)는 NimoteCode가 이를 설치하거나 프록시한다는 것을 암시하지 않고 호스트 설치 에이전트 워크플로를 설명합니다.

-  [Claude Code](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/claude-code-over-ssh) 및 [Codex](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/codex-over-ssh) 예제는 이러한 원칙을 검토 가능한 SSH 루프로 전환합니다.


## Android 로컬 Linux 및 사전 설정


Android 로컬 Linux는 지원되는 Android 장치에서 PRoot를 통해 Ubuntu를 사용합니다. [개요](/docs/local-linux)로 시작한 다음 [아키텍처](/docs/local-linux/architecture), [호환성](/docs/local-linux/compatibility), [보안 및 무결성](/docs/local-linux/security-integrity)을 읽어보세요. 선택적 개발 도구 세트, 매니페스트, 해시 및 테스트 기록은 독립적인 [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) 저장소의 소유입니다.


모든 리소스 소스 파일의 버전은 [기본 저장소](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources)에 있습니다. [NimoteCode 문제](https://github.com/mobiledevloperlab/nimote_issues/issues)를 통해 수정 사항이나 집중적인 추가 사항을 보고합니다.
