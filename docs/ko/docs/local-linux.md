---
title: Android Local Linux | NimoteCode
description: "Android Local Linux 설정, 사용 절차 및 화면 안내."
---

# Android Local Linux

## 요구 사항

Local Linux는 Android 8 이상의 ARM64 또는 x86_64 64비트 앱에서 Ubuntu, Bash, Git, SSH를 제공합니다. PRoot를 사용하며 Android 루트 권한이 필요하지 않습니다. iOS와 32비트 ARM 기기는 지원하지 않습니다. 언어 도구 모음, 언어 서버, 디버그 어댑터 및 외부 Agent CLI는 별도로 설치해야 합니다.

<div class="doc-section">
<div class="doc-section__copy">

## 설치 및 열기

1. 시작 화면 또는 Explorer에서 **Local Linux**를 선택합니다.
2. **Install**을 선택하고 설치가 완료될 때까지 기다립니다.
3. 환경을 시작하고 작업 공간을 엽니다.

최초 설치에는 앱에 포함된 이미지를 사용합니다. 추가 패키지는 인터넷 연결이 필요할 수 있습니다. 환경 파일은 앱 전용 저장소에 보관됩니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-deploy.jpg" caption="Not installed 상태와 Install 버튼이 표시된 Local Linux 설치 대화 상자." />
</div>

</div>

## 환경 확인

Terminal에서 `uname -a`를 실행해 커널과 아키텍처를 확인합니다. `cat /etc/os-release`로 배포판을 확인합니다. Local Linux는 Android 호스트 커널을 공유하므로 커널 이름만으로 Ubuntu 사용자 공간 버전을 알 수 없습니다.

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Local Linux 터미널의 uname -a 출력." />
  <DocScreenshot file="local-linux-ai-print-os-info.jpg" caption="uname 및 /etc/os-release 출력을 요약한 AI 응답." />
</div>

## 중지, 초기화 또는 삭제

Local Linux 컨트롤로 환경을 관리합니다. 중지하면 실행 중인 작업이 종료되고 다시 시작하면 기존 환경을 사용합니다. 초기화, 환경 삭제 또는 앱 데이터 삭제 시 환경 파일이 제거됩니다. 내장 SSH 서비스는 앱 연결을 위해 루프백에서 수신 대기합니다. Android가 백그라운드 프로세스를 종료할 수 있으므로 앱으로 돌아온 뒤 상태를 확인하세요.

## 참고 자료

[설정](/ko/docs/local-linux/getting-started) · [아키텍처](/ko/docs/local-linux/architecture) · [호환성](/ko/docs/local-linux/compatibility) · [보안 및 무결성](/ko/docs/local-linux/security-integrity) · [프리셋](/ko/docs/local-linux/presets) · [문제 해결](/ko/docs/local-linux/troubleshooting) · [소스 및 라이선스](/ko/docs/local-linux-source)
