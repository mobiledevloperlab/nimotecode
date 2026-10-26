---
title: NimoteCode 자주 묻는 질문 | NimoteCode
description: "NimoteCode 자주 묻는 질문 설정, 사용 절차 및 화면 안내."
---

# NimoteCode 자주 묻는 질문

## NimoteCode는 SSH 클라이언트 전용인가요?

아닙니다. 로컬 프로젝트, Android Local Linux 또는 SSH 작업 공간을 열 수 있으며, 같은 프로젝트 컨텍스트에서 Explorer, Editor, Terminal, Git, AI 지원 및 진단 패널을 제공합니다.

## Pro 없이 사용할 수 있나요?

네. 무료 버전에는 로컬, Android Local Linux, SSH 작업 공간, 편집기, 기본 터미널, AI Chat 및 기본 Tasks가 포함됩니다. Local Linux에는 Android 8 이상의 64비트 ARM64 또는 x86_64 기기가 필요하며 iOS에서는 사용할 수 없습니다. AI Agent와 원격 검색은 제공 범위가 확대 중인 Early Access Pro로 이용할 수 있습니다. 해당 기능은 [Pro](/ko/pro)를 참고하세요.

## 어떤 AI 제공업체를 설정할 수 있나요?

제공업체 템플릿과 호환되는 사용자 지정 엔드포인트를 지원합니다. 제공업체 이용 가능 여부, 모델 접근 및 비용은 사용자의 제공업체 계정과 설정에 따라 결정됩니다. [설정](/ko/docs/configuration)을 참고하세요.

## 소스 제어는 무엇을 지원하나요?

모든 사용자가 저장소 상태, diff 및 기록을 확인할 수 있습니다. 커밋, 푸시, stash 등 제한된 Git 쓰기 작업에는 Pro가 필요합니다. [소스 제어](/ko/docs/source-control)를 참고하세요.

## Tasks는 로컬에서 실행되나요, 원격에서 실행되나요?

Tasks는 SSH 작업 공간에서 반복 사용할 명령을 실행합니다. 명령은 연결된 작업 공간에서 실행됩니다. 별도 디렉터리를 지정하지 않으면 작업 공간 루트가 기본 작업 디렉터리입니다.

## 모든 프로젝트에서 LSP와 디버깅을 사용할 수 있나요?

원격 호스트에 호환되는 언어 서버나 디버그 어댑터가 구성되어 있는지, 프로젝트가 어떻게 설정되어 있는지에 따라 다릅니다. Pro 기능이며 [LSP](/ko/docs/lsp)와 [디버깅](/ko/docs/debug)을 참고하세요.
