---
title: Docker 및 Dev Containers | NimoteCode
description: SSH 호스트에서 Docker 리소스를 관리하고 구성된 Dev Container 작업 공간을 엽니다.
---

# Docker 및 Dev Containers

Docker 도구는 연결된 SSH 호스트에서 실행됩니다. 호스트에 Docker가 설치되어 있고 SSH 계정에 daemon 접근 권한이 있어야 합니다.

## Docker 열기

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Light 테마의 Docker 이미지 목록입니다. Debian bookworm-slim이 포함되어 있습니다." />
</div>

작업 공간 도구에서 Docker 패널을 열어 컨테이너, 이미지, 볼륨, 네트워크 및 Compose 프로젝트를 확인합니다. 리소스 세부 정보, 로그, 통계, exec 터미널을 사용할 수 있으며 Docker Hub 이미지를 검색할 수 있습니다.

## Compose 서비스 관리

<div class="doc-screenshots">
  <DocScreenshot file="docker-image-detail.png" caption="Light 테마에서 본 Debian bookworm-slim 이미지 세부 정보입니다." />
</div>

Compose 프로젝트를 열어 서비스를 확인하고 개별 서비스를 제어합니다. Compose 파일과 빌드 컨텍스트는 SSH 호스트에 있습니다. 작업 전에 대상 프로젝트와 호스트를 확인하세요.

## Dev Container 작업 공간 만들기

`.devcontainer/devcontainer.json` 또는 루트 `devcontainer.json`이 있는 SSH 프로젝트를 엽니다. 구성을 검토한 뒤 컨테이너를 만들거나 다시 빌드합니다. 초기화 후 구성된 도구와 환경이 있는 격리 컨테이너에서 프로젝트를 열 수 있습니다.

Docker 접근은 앱의 현재 Pro, 체험판 또는 Early Access 상태를 따릅니다. 사용할 수 없으면 호스트의 Docker 설치, daemon 상태 및 계정 권한을 확인하세요. 시작 직후 종료되면 종료 코드와 로그를 확인하세요.
