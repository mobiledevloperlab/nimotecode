---
title: NimoteCode 문서
description: "NimoteCode의 네 가지 모드, SSH, Android Local Linux, AI 코딩, Git 및 원격 개발을 알아보세요."
---

# NimoteCode 문서

[빠른 시작](/ko/docs/quick-start)에서 작업 공간 열기, 파일 편집, 명령 실행을 먼저 완료하세요. 다음으로 현재 작업에 맞는 가이드를 선택하세요.

NimoteCode 2.5.0에서는 [개인 Tailscale로 페어링된 컴퓨터에 연결](/ko/docs/ssh#paired-computers), [tmux로 SSH 터미널 재개](/ko/docs/terminal#persistent-ssh-terminal), [SSH로 NimoteHost 설정](/ko/docs/host/getting-started#install-over-ssh)을 할 수 있습니다.

## 파일과 명령을 실행할 위치 선택

| 하려는 작업 | 시작할 가이드 | 확인할 내용 |
| --- | --- | --- |
| 기기에 있는 파일 편집 | [로컬 및 SSH 작업 공간](/ko/docs/ssh) | 로컬 폴더는 파일 접근을 제공합니다. 프로젝트 명령 실행에는 SSH 또는 Local Linux가 필요합니다. |
| 기존 컴퓨터 또는 서버 사용 | [로컬 및 SSH 작업 공간](/ko/docs/ssh) | SSH로 연결해 원격 프로젝트와 설치된 도구를 사용합니다. |
| 연결이 끊긴 뒤 원격 작업으로 복귀 | [Host 모드](/ko/docs/host) | 컴퓨터에 NimoteHost를 설치한 뒤 SSH로 연결합니다. Host가 실행되는 동안 관리 중인 프로세스를 계속 실행할 수 있습니다. |
| Android에서 Linux 도구 실행 | [기기 요구 사항 및 호환성](/ko/docs/local-linux/compatibility) | 기기 요구 사항을 먼저 확인한 뒤 설치합니다. 지원되는 Android 기기에서만 사용할 수 있습니다. |

앱의 네 가지 모드는 인터페이스를 선택하며, 작업 공간은 파일 위치와 명령 실행 환경을 결정합니다. Host에는 컴퓨터의 서비스도 필요합니다. 모드 선택은 [빠른 시작](/ko/docs/quick-start)을 참고하세요.

## 작업별 가이드 찾기

### 시작하기

| 가이드 | 용도 |
| --- | --- |
| [빠른 시작](/ko/docs/quick-start) | 작업 공간 열기 · 파일 열기 및 편집 · 명령 실행 · AI Agent 실행 |
| [NimoteCode 자주 묻는 질문](/ko/docs/faq) | 작업 공간 선택, AI 설정 및 기능 요구 사항 확인. |

### 작업 공간 및 실행 환경

| 가이드 | 용도 |
| --- | --- |
| [로컬 및 SSH 작업 공간](/ko/docs/ssh) | 작업 공간 선택 · 로컬 폴더 열기 · SSH 연결 설정 |
| [Windows SSH 및 SFTP](/ko/docs/windows-ssh-sftp) | Windows OpenSSH 설정과 SSH／SFTP 연결 및 파일 접근 문제 해결. |
| [동기화 및 캐시](/ko/docs/sync-cache) | 전송 방향 선택 · 전송 시작 및 확인 |
| [Docker 및 Dev Containers](/ko/docs/docker) | SSH 호스트에서 Docker 리소스를 관리하고 구성된 Dev Container 작업 공간을 엽니다. |

### 편집, 실행 및 Git

| 가이드 | 용도 |
| --- | --- |
| [코드 편집기](/ko/docs/editor) | 파일 열기 및 탭 전환 · 텍스트 선택 및 편집 · 심볼 및 기록 탐색 |
| [작업 공간 검색](/ko/docs/search) | 파일 내용 검색 · 검색 결과가 없을 때 |
| [터미널](/ko/docs/terminal) | 작업 공간 명령 실행 · 출력 검색, 복사 및 분석 · 원격 환경 새로 고침 |
| [작업](/ko/docs/tasks) | 재사용할 명령 만들기 · 실행 및 출력 확인 |
| [Git 및 GitHub](/ko/docs/source-control) | 변경 사항, 커밋, 브랜치 및 GitHub 워크플로 확인. |
| [언어 서비스(LSP)](/ko/docs/lsp) | 언어 서버 설정 확인 · 진단 및 코드 작업 사용 |
| [디버깅](/ko/docs/debug) | 디버그 세션 준비 · 일시 중지된 프로그램 확인 |

### AI 및 확장 기능

| 가이드 | 용도 |
| --- | --- |
| [AI 제공업체 및 모델 설정](/ko/docs/configuration) | 모델 제공업체 설정, AI 연결 테스트 및 개인정보 설정. |
| [AI Chat, Agent 및 MCP](/ko/docs/ai) | 대화 시작 · Agent 선택 · 계획 승인 및 실행 확인 |
| [사용자 지정 플러그인](/ko/docs/plugins) | 첫 플러그인 만들기 · 미리보기, 권한 및 실행 · 백그라운드 작업 및 일정 |

### Host 모드

[Host 모드](/ko/docs/host)

[하드웨어 및 패키지 선택](/ko/docs/host/compatibility) · [다운로드 및 설치](/ko/docs/host/getting-started) · [연결, 터미널 및 작업](/ko/docs/host/sessions) · [Agent 및 작업 수신함](/ko/docs/host/agents) · [서비스 관리 및 업데이트](/ko/docs/host/maintenance) · [문제 해결](/ko/docs/host/troubleshooting)

### Android Local Linux

[Android Local Linux](/ko/docs/local-linux)

[기기 요구 사항 및 호환성](/ko/docs/local-linux/compatibility) · [설치 및 첫 실행](/ko/docs/local-linux/getting-started) · [문제 해결](/ko/docs/local-linux/troubleshooting)

### 설정 및 참고 자료

| 가이드 | 용도 |
| --- | --- |
| [설정](/ko/docs/settings) | 모양, 언어, 편집기 및 패널 환경 설정. |
| [계정 및 구독](/ko/docs/account-subscription) | 계정 상태, 구매 복원 및 기능 이용 권한 확인. |
| [알림](/ko/docs/notifications) | 완료되었거나 처리할 활동을 찾아 관련 세션 열기. |
| [인증 정보 및 작업 검토](/ko/docs/security) | SSH 인증 정보, 모델 API 키 및 작업 승인 확인. |
| [화면 및 작업 안내](/ko/docs/screenshot-guide) | 기능별 화면과 사용 절차를 찾아봅니다. |

## 문제가 발생했을 때

환경에 따라 [자주 묻는 질문](/ko/docs/faq), [Windows SSH 및 SFTP](/ko/docs/windows-ssh-sftp), [Host 문제 해결](/ko/docs/host/troubleshooting), [Local Linux 문제 해결](/ko/docs/local-linux/troubleshooting)을 확인하세요.
