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

## 작업 공간에서 GitHub 사용하기

**NimoteCode 2.2.0**부터 Android, iPhone, iPad에서 GitHub 워크플로를 사용할 수 있습니다. **GitHub** 페이지를 열어 브라우저 기기 인증 또는 개인 액세스 토큰으로 로그인한 뒤 접근 가능한 저장소를 선택하세요. **This device**를 선택하면 로컬 저장소에, **SSH host**를 선택하면 선택한 원격 머신에 복제합니다. 프로젝트 명령과 Git 작업은 대상 호스트에서 실행되고, NimoteCode는 모바일 기기에서 저장소 탐색과 작업 공간을 함께 제공합니다.

<div class="doc-screenshots">
  <DocScreenshot file="github_entry.png" caption="로컬 기기 또는 SSH 호스트 복제 대상을 선택하는 GitHub 저장소 선택기." />
</div>

## 저장소 열기 및 협업하기

저장소를 선택하면 코드를 열기 전에 기본 브랜치, 브랜치, 이슈, 풀 리퀘스트, 리뷰, 검사를 확인할 수 있습니다. 이슈와 풀 리퀘스트를 필터링하고, 이슈를 만들거나 이슈 컨텍스트로 Agent 작업을 시작할 수 있습니다. 변경 사항이 준비되면 브랜치를 만들거나 전환하고, 계정에 부여된 저장소 권한으로 푸시한 다음 풀 리퀘스트를 만드세요. 게시 전에는 diff를 검토하고 프로젝트 검사를 실행해야 합니다. GitHub 상태는 협업 맥락을 제공하지만 저장소 검토를 대체하지는 않습니다.

<div class="doc-screenshots">
  <DocScreenshot file="github.png" caption="이슈, 풀 리퀘스트, 브랜치를 열 수 있는 GitHub 페이지의 저장소 보기." />
</div>

## 안전한 복제 대상 선택하기

복제 전에 대상 작업 공간, 대상 폴더, 브랜치를 확인하세요. SSH 호스트에서 비공개 저장소를 복제하려면 해당 호스트에 GitHub SSH 키와 known_hosts 항목을 설정해야 합니다. 앱이 보관하는 토큰은 호스트로 전송되지 않습니다. 프로젝트 워크플로에 전체 기록이 필요하지 않을 때만 얕은 복제를 사용하세요. 복제하면 선택한 작업 공간이 열리지만 프로젝트 의존성을 자동으로 구성하거나 설치하지는 않습니다.

<div class="doc-screenshots">
  <DocScreenshot file="github_conf.png" caption="대상 폴더, 브랜치, 얕은 복제, SSH 키 인증을 지정하는 SSH 작업 공간 복제 옵션." />
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
