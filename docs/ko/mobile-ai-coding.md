---
title: "모바일 AI 코딩: Chat, Agent, ACP | NimoteCode"
description: "NimoteCode의 AI Chat, Nimote Agent와 외부 ACP를 작업별로 선택하세요. 모델 설정, 실행 환경, 계획 승인과 Git 검증을 설명합니다."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# 모바일 AI 코딩의 모드와 실행 환경

함수 설명과 파일을 읽고 검증을 실행하는 작업은 다릅니다. NimoteCode는 편집기, 터미널, Git과 함께 Chat, 내장 Nimote Agent와 호환 외부 ACP Agent를 제공합니다. 요청 전에 모드와 실행 위치를 정하세요.

## Chat과 Agent 선택

| 모드 | 용도 | 설정과 제어 |
| --- | --- | --- |
| Chat | 선택 코드 설명, 오류 분석, 계획 | 모델 제공업체. Chat 자체는 파일 변경을 실행하지 않음 |
| Nimote Agent | 파일 조사, 수정 제안, 도구 사용 | 제공업체와 접근 권한. Confirm은 계획 승인 후 실행 |
| 외부 ACP | 별도로 설치한 호환 Agent | 실행 대상의 런타임, 인증 정보와 자체 도구 정책 |

변경 방법을 이미 안다면 일반 편집기나 터미널로 충분합니다. AI는 선택 사항이며 SSH에 모델 설정은 필요하지 않습니다.

## 제공업체와 작업 공간 설정

[모델 설정](/ko/docs/configuration)에서 접근을 시험하고 작업 공간 루트를 확인하세요. 로컬 폴더만으로 명령 환경이 제공되지는 않습니다. SSH는 호스트, 지원 Android는 [Local Linux](/ko/docs/local-linux)를 사용할 수 있습니다. iPhone과 iPad에는 Local Linux가 없습니다.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-agents.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp" width="660" height="1433" alt="iPhone NimoteCode의 내장 및 외부 Agent 선택 화면." loading="lazy" decoding="async">
  </a>
  <figcaption>iPhone NimoteCode의 내장 및 외부 Agent 선택 화면. 출처: NimoteCode App Store 등록 이미지. 연속 작업 기록이 아닌 홍보 스크린샷입니다.</figcaption>
</figure>

## 읽기 전용 요청부터 시작

“진입점과 설정 로딩 방식을 설명하고 아직 수정하지 마세요”라고 요청하고 편집기에서 경로를 확인하세요. 도구가 필요하면 Nimote Agent의 Confirm 모드에서 계획을 검토하고 승인하세요. 답변은 실제 파일로 검증해야 합니다.

## 실행과 결과 확인

타임라인 출력을 읽고 필요하면 지시를 추가하거나 중지하세요. 저장 파일, 프로젝트 검증과 [Git diff](/ko/docs/source-control)를 확인하세요. 내장 Agent의 Confirm은 수동으로 실행한 외부 CLI의 권한을 제어하지 않습니다.

## 외부 런타임 연결

[AI 및 ACP 안내](/ko/docs/ai)에서 런타임과 MCP를 설정하세요. CLI를 직접 쓴다면 [Claude Code](/ko/claude-code-from-phone) 또는 [Codex](/ko/codex-from-phone) SSH 안내를 참고하세요. 키는 프롬프트 대신 설정에 보관하세요. 모델 사용량은 포함되지 않습니다.

로컬 또는 SSH 파일 편집과 기본 터미널부터 시작할 수 있습니다. 일부 기능에는 Pro가 필요합니다. [무료 및 Pro](/ko/pro)와 앱에 표시되는 접근 상태를 확인하세요. AI는 모델 제공업체를 직접 설정해야 하며 모델 사용료는 별도로 청구됩니다.

<div class="seo-cta">
  <p><strong>NimoteCode 다운로드</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/ko/docs/quick-start" class="home-page-btn secondary">빠른 시작</a>
  </p>
</div>
