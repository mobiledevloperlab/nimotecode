---
title: Android Local Linux 설치와 첫 명령 실행 | NimoteCode
description: NimoteCode Local Linux를 설치하고 /workspace를 열어 Ubuntu와 명령 실행을 확인하세요. 도구 추가, 중지, 초기화, 삭제 방법도 안내합니다.
---

# Android Local Linux 설치

다음 단계로 기기의 Linux 터미널을 여세요. 먼저 [기기와 계정 요구 사항](/ko/docs/local-linux#local-linux-requirements)을 확인하고 환경과 도구용 저장 공간을 확보하세요. AI 설정은 필요하지 않습니다.

## 설치하고 작업 공간 열기

1. 시작 화면이나 Explorer에서 **Local Linux**를 선택하세요.
2. **Install**을 선택하고 완료될 때까지 기다리세요.
3. **Start**를 선택하고 `/workspace`를 여세요.

첫 설치에는 앱에 포함된 이미지를 사용하며 환경 파일은 앱 전용 저장소에 보관합니다. 추가 패키지 다운로드에는 네트워크가 필요합니다.

<DocScreenshot file="local-linux-deploy.jpg" caption="Local Linux 설정 화면에서 Install을 선택하세요." />

## 첫 명령 실행

같은 작업 공간에서 [터미널](/ko/docs/terminal)을 열고 다음을 실행하세요.

```sh
pwd
uname -m
cat /etc/os-release
printf 'Hello from Local Linux\n'
```

`pwd`는 작업 디렉터리, `uname -m`은 아키텍처, `cat /etc/os-release`는 Ubuntu 정보를 표시합니다. 마지막 명령은 `Hello from Local Linux`를 출력합니다.

Android 커널을 공유하므로 `uname -a` 출력은 Ubuntu 배포판 버전을 나타내지 않습니다.

<DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux 터미널이 기기에서 직접 명령을 실행합니다." />

## 프로젝트 도구 준비

`/workspace`에서 파일을 열거나 만들고 편집기와 [소스 관리](/ko/docs/source-control)를 사용하세요. Ubuntu 패키지 관리자로 필요한 도구만 추가하세요. 선택적 [Linux Presets](/ko/docs/local-linux/presets)에는 별도의 호환성과 설정 요구 사항이 있습니다.

패키지 오류나 PRoot 실행 차이는 [문제 해결](/ko/docs/local-linux/troubleshooting)을 참고하세요.

## 중지, 초기화, 삭제

중지하면 작업이 중단되고 환경은 보관됩니다. 초기화, 환경 삭제, 앱 데이터 삭제는 파일을 제거하므로 먼저 프로젝트를 백업하세요.

Android가 백그라운드에서 앱을 종료하면 Local Linux를 다시 시작하세요.
