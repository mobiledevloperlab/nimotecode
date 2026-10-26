---
title: 코드 편집기 | NimoteCode
description: "코드 편집기 설정, 사용 절차 및 화면 안내."
---

# 코드 편집기

## 파일 열기 및 탭 전환

Explorer 또는 Search에서 파일을 열면 각각 탭으로 표시됩니다. 로컬 및 원격 파일을 지원하며, 분할 창으로 두 파일을 나란히 편집할 수 있습니다. 디스크의 파일을 읽는 외부 도구를 실행하기 전에 변경 사항을 저장하세요.

<div class="doc-screenshots">
  <DocScreenshot file="editor-empty-state.png" caption="열린 탭이 없을 때 Browse files로 파일을 선택할 수 있습니다." />
  <DocScreenshot file="editor-multiple-files.jpg" caption="여러 파일 탭이 열려 있고 webapp.py가 활성화되어 있습니다." />
</div>

## 텍스트 선택 및 편집

텍스트 범위를 선택해 복사, 잘라내기 또는 바꾸기를 할 수 있습니다. 선택 메뉴에는 **Ask AI**도 있습니다. 더보기 메뉴에는 실행 취소, 다시 실행 및 클립보드 작업이 있습니다. 휴대폰, 태블릿, 데스크톱에서 동일한 편집기 구현을 사용하며 키보드 및 IME 입력을 지원합니다.

### 편집할 코드 찾기

대상 파일을 열고 줄 번호와 구문 강조를 이용해 수정할 위치를 찾습니다. 휴대폰, 태블릿, 데스크톱에서 키보드와 입력기를 사용할 수 있습니다.

<div class="doc-screenshots">
  <DocScreenshot file="editor-code-selection.png" caption="줄 번호와 구문 강조가 표시된 Python 소스 편집 화면." />
</div>

### 선택 영역 메뉴 사용

텍스트를 선택하면 메뉴에서 복사, 잘라내기, 붙여넣기를 사용할 수 있습니다. 선택 영역에 대해 AI의 도움이 필요하면 **Ask AI**를 사용합니다.

<div class="doc-screenshots">
  <DocScreenshot file="editor-context-menu.jpg" caption="Copy, Cut, Paste, Select All, Ask AI가 있는 텍스트 선택 메뉴." />
</div>

### 실행 취소와 다시 실행

더 보기 메뉴에서 변경을 취소하거나 다시 적용할 수 있습니다. 이 메뉴에는 클립보드 명령도 있습니다.

<div class="doc-screenshots">
  <DocScreenshot file="editor-overflow-menu.jpg" caption="Undo, Redo 및 클립보드 명령이 있는 편집기 더보기 메뉴." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 심볼 및 기록 탐색

심볼 메뉴에는 **Go To Definition**, **References**, **Rename Symbol**, **Outline** 및 Git 기록 작업이 있습니다. 코드 탐색에는 설정된 언어 서버가 필요하며 기록 작업에는 Git 저장소가 필요합니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-symbol-menu.jpg" caption="현재 파일의 심볼 및 기록 작업." />
</div>

</div>

## Markdown 및 HTML 미리보기

Markdown 소스를 편집한 뒤 미리보기에서 렌더링된 제목, 코드 블록 및 표를 확인합니다. HTML 미리보기는 저장하지 않은 변경 사항을 포함한 현재 편집 내용의 스냅샷을 표시하고 참조 리소스를 작업 공간에서 읽습니다. 정적 HTML 미리보기에는 SSH 호스트의 웹 서버가 필요하지 않습니다. 서버 측 동작에는 프로젝트의 실행 환경이 필요합니다.

### Markdown 원본 편집

원본 보기에서 Markdown을 수정한 다음 미리보기를 열어 결과를 확인합니다. 예시는 README.md를 편집하는 화면입니다.

<div class="doc-screenshots">
  <DocScreenshot file="markdown-source-editor.jpg" caption="README.md 소스 편집 화면." />
</div>

### Markdown 렌더링 확인

미리보기에서 제목, 코드 블록, 디렉터리 트리, 표를 확인합니다. 수정이 필요하면 원본 보기로 돌아갑니다.

<div class="doc-screenshots">
  <DocScreenshot file="markdown-preview.jpg" caption="디렉터리 트리와 표가 포함된 README.md 미리보기." />
</div>

### HTML 미리보기 확인

HTML 미리보기는 저장하지 않은 변경을 포함한 현재 편집 내용의 스냅샷입니다. 예시는 보고서 페이지이며 서버 측 로직에는 프로젝트의 실행 환경이 필요합니다.

<div class="doc-screenshots">
  <DocScreenshot file="html-report-preview.jpg" caption="편집기 미리보기 탭에 표시된 HTML 벤치마크 보고서." />
</div>
