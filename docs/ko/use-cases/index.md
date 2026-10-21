---
title: AI Agent Build Demo | NimoteCode Workflows
description: Watch NimoteCode AI Agent build, test, repair and commit a developer task board web app from a phone.
---

# AI 에이전트가 전화기에서 개발자 작업 보드를 구축합니다.


이 워크플로는 NimoteCode AI 에이전트를 따르며 하나의 제품 개요를 작동하는 개발자 작업 보드로 전환합니다. 에이전트는 DeepSeek-v4-flash 모델을 사용하여 개발자가 별도의 모바일 앱 사이를 이동할 필요 없이 작업을 계획하고, 프로젝트를 생성하고, 확인하고, 완료된 변경 사항을 기록합니다.


<figure class="agent-demo">
  <video controls playsinline preload="metadata">
    <source src="/videos/ai-agent-demo-small.mp4" type="video/mp4">
 브라우저가 삽입된 비디오를 지원하지 않습니다.

  </video>
  <figcaption>AI 에이전트는 NimoteCode 모바일 작업 공간에서 개발자 작업 보드를 구축하고 확인합니다.
</figcaption>
</figure>

## 제품 개요에서 실행 가능한 계획까지


실행은 React, TypeScript 및 Vite 작업 보드에 대한 요청으로 시작됩니다: 편집 가능한 작업, 우선 순위 정렬, 영구 로컬 데이터, 어두운 개발자 중심 인터페이스 및 자동화된 적용 범위. 에이전트는 작업 공간을 변경하기 전에 해당 브리핑을 정렬된 계획으로 전환하여 설정, 구현, 테스트 및 릴리스 확인을 명확한 단계로 분리합니다.


## 작업공간에서 애플리케이션 빌드


에이전트는 사용 가능한 Node.js 환경을 확인하고 Vite 프로젝트를 생성하며 작은 모듈에 애플리케이션을 작성합니다. 결과 구조에는 작업 상태 및 지속성, 양식 및 목록 구성 요소, 진행 피드백 및 대시보드에 필요한 시각적 시스템이 포함됩니다. 각 변경 사항은 파일, 터미널 출력 및 Git 상태와 동일한 작업 공간에 유지됩니다.


## 검증, 수리 및 배송


확인은 나중에 고려하는 것이 아니라 실행의 일부입니다. 테스트에서 가져오기 또는 예상 문제가 노출되면 에이전트는 실패를 읽고 관련 코드를 조정한 후 검사를 다시 실행합니다. 그런 다음 프로덕션 빌드를 완료하고, 프로젝트 문서를 준비하고, 지시가 있을 때 완료된 작업을 커밋합니다.


## 이 워크플로가 보여주는 내용


- **하나의 루프에서 계획, 실행 및 검사.** 에이전트는 파일 및 터미널 명령을 통해 명시된 결과에서 테스트 및 빌드의 증거로 이동할 수 있습니다.

- **완벽한 모바일 개발 표면.** 탐색기, 편집기, 터미널, 소스 제어 및 AI 패널은 동일한 프로젝트 컨텍스트에 계속 연결되어 있습니다.

- **검토 가능한 상태로 유지되는 자동화.** 명령, 변경된 파일, 테스트 출력 및 최종 차이점은 개발자가 제공 전에 검사할 수 있도록 표시됩니다.


> 에이전트는 다단계 빌드를 가속화할 수 있지만 엔지니어링 판단을 대체하지는 않습니다. 특히 작업공간에 프로덕션 액세스 권한이 있는 경우 계획, 명령, 테스트 증거 및 Git 차이점을 검토하세요.


<div class="product-card-grid">
  <div class="product-card"><strong><a href="/use-cases/mobile-workspace-demo">모바일 작업 공간 데모
</a></strong><span>로컬 및 SSH 워크플로우(검사, 편집, 확인, 검토)를 사이트에서 직접 확인하세요.
</span></div>
  <div class="product-card"><strong><a href="/use-cases/terminal-ai-tools">터미널 AI 도구
</a></strong><span>Codex, Claude, Kimi 및 기타 AI 코딩 도구를 활성 작업 공간에서 직접 실행하세요.
</span></div>
</div>

<p class="seo-cta-actions">
  <a href="/download?utm_source=workflows&utm_medium=website&utm_campaign=ai_agent_build_demo" class="home-page-btn primary">Nimote코드 사용해 보기
</a>
  <a href="/docs/ai" class="home-page-btn secondary">AI 에이전트 가이드 읽기</a>
</p>
