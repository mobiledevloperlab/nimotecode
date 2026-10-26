---
title: AI 및 연결 설정 | NimoteCode
description: "AI 및 연결 설정 설정, 사용 절차 및 화면 안내."
---

# AI 및 연결 설정

## 모델 설정 추가

**AI Configuration**을 열고 **Add Model**을 선택한 다음 제공업체를 선택합니다. 표시 이름, API 키, Base URL, 모델 이름을 입력하고 저장합니다. 해당 모델을 제공업체 계정에서 사용할 수 있어야 합니다. NimoteCode에는 제공업체의 토큰 사용량이 포함되지 않습니다.

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="저장된 모델과 일반 설정을 표시하는 AI Configuration." />
  <DocScreenshot file="ai-provider-settings.jpg" caption="API 키가 마스킹되어 있고 연결 테스트를 제공하는 모델 설정 양식." />
</div>

## 채팅 연결 테스트

**Test chat connection**을 선택하면 짧은 테스트 프롬프트를 전송합니다. 작업 공간 파일이나 설정된 시스템 프롬프트는 보내지 않으며 출력은 최대 1024 토큰입니다. 제공업체 요금이 발생할 수 있습니다. 성공은 텍스트 응답만 확인하며, Agent 도구 지원이나 모델의 컨텍스트 용량을 검증하지 않습니다.

## 일반 설정

AI Configuration에는 MCP 도구 서버, 채팅 기록 자동 저장, AI 개인정보 설정이 있습니다. 모델의 샘플링 및 출력 설정과 별도로 확인하세요. SSH 호스트 설정은 [로컬 및 SSH 작업 공간](/ko/docs/ssh)을 참고하세요.
