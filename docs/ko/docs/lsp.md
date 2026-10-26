---
title: 언어 서비스(LSP) | NimoteCode
description: "언어 서비스(LSP) 설정, 사용 절차 및 화면 안내."
---

# 언어 서비스(LSP)

<div class="doc-section">
<div class="doc-section__copy">

## 언어 서버 설정 확인

소스 파일을 연 뒤 LSP 패널을 엽니다. **LSP Setup**과 해당 언어의 서버를 확인합니다. 예시에는 Python용 pyright-langserver가 설치되어 있고 보고된 오류와 경고가 모두 0개입니다. 설치됨 상태가 모든 프로젝트 의존성이나 코드 작업의 사용 가능 여부를 보장하지는 않습니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="lsp-python-status.png" caption="Python 언어 서버 설정과 Problems 및 Code Actions 영역." />
</div>

</div>

## 진단 및 코드 작업 사용

**Problems**를 펼치고 진단 항목을 선택하면 해당 소스 위치가 열립니다. **Code Actions**에서 현재 커서 위치에 제공되는 작업을 확인합니다. 사용 가능한 작업은 언어 서버에 따라 다릅니다. 작업을 적용한 뒤 파일을 저장하고 관련 프로젝트 검사를 다시 실행하세요. LSP에는 Pro 권한이 필요합니다.
