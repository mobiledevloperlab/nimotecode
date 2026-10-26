---
title: 소스 제어 | NimoteCode
description: "소스 제어 설정, 사용 절차 및 화면 안내."
---

# 소스 제어

<div class="doc-section">
<div class="doc-section__copy">

## 저장소 상태 확인

Git 작업 공간에서 Source Control을 엽니다. **Changes**에는 수정, 삭제 및 추적되지 않는 파일이 표시되고, **Staged Changes**에는 커밋을 위해 스테이징한 파일이 표시됩니다. 앱 외부에서 작업한 뒤에는 새로 고침하세요.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="변경 및 미추적 파일과 별도의 스테이징 변경 및 기록 영역." />
</div>

</div>

## 차이 및 커밋 검토

변경된 파일을 열어 이전 내용과 새 내용을 비교합니다. **Commit History**에서 커밋을 열면 파일별 변경 사항을 확인할 수 있습니다. 화면의 diff에는 임시 텍스트 수정이 포함되어 있으며, 검토 화면의 예시이지 권장 코드 변경이 아닙니다.

<div class="doc-screenshots">
  <DocScreenshot file="git-diff-view.jpg" caption="추가와 삭제를 강조한 변경 전후의 파일 내용." />
  <DocScreenshot file="git-commit-details.jpg" caption="파일별 패치가 포함된 커밋 상세 화면." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## 브랜치 전환

상단의 브랜치 이름을 눌러 검색, 생성 또는 기존 브랜치 체크아웃을 수행합니다. 전환 전에 커밋하지 않은 변경을 확인하세요. Git 쓰기 작업에는 해당 Pro 권한과 저장소 권한이 필요합니다.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-branch-checkout.jpg" caption="검색과 Create New Branch가 있는 Checkout Branch 대화 상자." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Git AI 도구 사용

**AI Tools**에서 제공업체와 파일을 선택한 뒤 **Commit Message**, **Explanation** 또는 **Risk Analysis**를 선택합니다. 변경 설명은 **Explain Changes**를 사용합니다. 생성된 텍스트는 diff 검토를 돕는 자료이므로 커밋이나 리뷰에 사용하기 전에 확인하세요.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-ai-explanation.jpg" caption="선택한 변경 사항의 AI 요약을 표시하는 Explanation 탭." />
</div>

</div>
