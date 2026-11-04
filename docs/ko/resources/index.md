---
title: 추천 튜토리얼과 개발 자료 | NimoteCode
description: "개발 호스트 연결, 모바일 GitHub 작업, Android Linux 평가, AI 변경 검증에 유용한 블로그와 공식 자료를 모았습니다."
---

# 추천 튜토리얼과 개발 자료

개발 호스트 연결, 모바일 GitHub 작업, Android Linux 평가, AI 변경 검증에 유용한 블로그와 공식 자료를 모았습니다.

[전체 블로그 보기](/blog/) · [앱 사용 문서 열기](/ko/docs)

## 블로그에서 배우는 실용 작업

절차, 데모, 측정 기록이 있는 NimoteCode 글을 선정했습니다. 연결된 글은 영어입니다.

<div class="guide-card-grid">
<a class="guide-card" href="/blog/github-from-android-iphone"><strong>모바일 저장소에서 Pull Request까지</strong><span>로그인, 복제, 편집, 검사, 검토를 연결하는 GitHub 작업 흐름.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/tailscale-ssh-android-mac-linux"><strong>Tailscale과 SSH로 호스트 연결</strong><span>Mac 또는 Linux의 네트워크 설정, 접속과 재연결 확인.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/android-linux-performance-benchmark"><strong>Android Linux의 개발 성능 평가</strong><span>단일 기기의 CoreMark, SQLite 컴파일, 병렬 빌드 기록을 참고해 프로젝트 테스트를 계획합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/can-an-ai-agent-really-code-from-a-phone"><strong>휴대폰에서 AI Agent 작업 따라가기</strong><span>계획, 편집, 실행, 검증을 실제 데모로 확인합니다.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
<a class="guide-card" href="/blog/best-ssh-clients"><strong>모바일 SSH·AI 개발 도구 7종 비교</strong><span>터미널, 호스트 Agent, 통합 작업 공간을 실제 작업에 맞춰 비교하세요.</span><span class="guide-card-arrow" aria-hidden="true">→</span></a>
</div>

## 외부 공식 자료

영문 자료이며 Pro Git은 한국어 등 번역도 제공합니다. 링크 확인: 2026-11-04.

- **[Tailscale · Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)** — 전용 SSH 기능의 인증과 접근 제어를 일반 SSH 연결과 구분해 이해합니다.

- **[Git · Pro Git 온라인 도서](https://git-scm.com/book/en/v2)** — 브랜치, 원격 저장소, 실행 취소를 배워 Diff와 기록을 이해합니다.

- **[GitHub Docs · Pull Request 검토](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request)** — 파일별 검토, 댓글, 리뷰 제출 방법을 익힙니다.

- **[PRoot · 원리와 예시](https://proot-me.github.io/)** — 루팅 없는 Linux 환경의 사용자 공간 파일 시스템과 경로 매핑을 이해합니다.

## 개발 환경 선택


| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](/ko/use-cases/) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## AI 코딩 및 SSH 워크플로


- [모바일 AI 코딩](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md)은 에이전트 작업을 검사 및 테스트 가능하게 유지하는 방법을 설명합니다.

- [SSH 개발 도구](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md)는 편집기, 터미널 및 Git 검토 기능에 대한 보안 연결을 매핑합니다.

- [전화기의 Claude Code](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md)는 NimoteCode가 이를 설치하거나 프록시한다는 것을 암시하지 않고 호스트 설치 에이전트 워크플로를 설명합니다.

-  [Claude Code](/ko/docs/ai) 및 [Codex](/ko/docs/ai) 예제는 이러한 원칙을 검토 가능한 SSH 루프로 전환합니다.


## Android 로컬 Linux 및 사전 설정


Android 로컬 Linux는 지원되는 Android 장치에서 PRoot를 통해 Ubuntu를 사용합니다. [개요](/docs/local-linux)로 시작한 다음 [아키텍처](/docs/local-linux/architecture), [호환성](/docs/local-linux/compatibility), [보안 및 무결성](/docs/local-linux/security-integrity)을 읽어보세요. 선택적 개발 도구 세트, 매니페스트, 해시 및 테스트 기록은 독립적인 [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) 저장소의 소유입니다.


모든 리소스 소스 파일의 버전은 [기본 저장소](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources)에 있습니다. [NimoteCode 문제](https://github.com/mobiledevloperlab/nimote_issues/issues)를 통해 수정 사항이나 집중적인 추가 사항을 보고합니다.
