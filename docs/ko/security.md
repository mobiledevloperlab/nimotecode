---
title: "보안 및 호환성 | NimoteCode"
description: "SSH 인증 정보 저장, AI 코드 전송 조건, 동기화 범위, Host 요구 사항, 시스템 및 Agent 검증 범위를 확인하세요."
pageClass: trust-page compatibility-page
---

<TrustNav />

# 보안 및 호환성

프로젝트 연결 전에 데이터 전송 대상과 실행 조건을 확인하세요. 설정과 제한 사항은 각 상세 문서를 참고하세요.

<p class="compatibility-scroll-hint">작은 화면에서는 표를 가로로 스크롤할 수 있습니다.</p>

## 데이터와 실행 범위 {#boundaries}

<div class="compatibility-table" role="region" aria-label="데이터와 실행 범위" tabindex="0">

| 궁금한 점 | 답변 | 상세 문서 |
| --- | --- | --- |
| SSH 인증 정보는 어디에 저장하나요? | 연결 메타데이터는 기기에 저장됩니다. 앱이 관리하는 비밀번호, 개인 키, 암호 문구는 iOS Keychain 또는 Android Keystore 기반 암호화 저장소를 사용합니다. 저장된 SSH 프로필을 삭제하면 연결된 보안 인증 정보도 삭제됩니다. | [인증 정보 저장](/ko/privacy#storage) |
| 코드는 언제 모델에 전송되나요? | AI 요청에는 프롬프트, 선택한 내용, 관련 파일, 경로, 도구 출력이 포함될 수 있습니다. 직접 요청은 선택한 제공자로 전송되며 Agent는 작업에 필요한 파일을 읽을 수 있습니다. 외부 Agent와 MCP는 자체 수신 대상과 정책을 사용합니다. BYOK는 데이터 미보관을 뜻하지 않습니다. | [AI 연결](/ko/privacy#integrations) · [Agent 제어](/ko/docs/ai) |
| Sync / Cache는 어디에 쓰나요? | **Sync: 로컬 → 원격. Cache: 원격 → 로컬.** 프로젝트와 대상 경로를 확인하세요. 현재 가이드에는 같은 이름 덮어쓰기, 삭제 전파, 충돌 처리 규칙이 명시되어 있지 않습니다. 기준 사본을 정하고 먼저 백업하세요. 기록은 백업을 대체하지 않습니다. | [동기화와 캐시](/ko/docs/sync-cache) |
| Host에는 무엇이 필요한가요? | Host 이용 권한이 있는 NimoteCode **2.4.1 이상**, Linux / macOS / Windows 컴퓨터에 별도로 설치한 호환 NimoteHost, SSH 연결 및 프로젝트 권한이 필요합니다. 컴퓨터는 깨어 있어야 하며 Agent는 따로 설치하고 로그인해야 합니다. | [Host 설치](/ko/docs/host/getting-started) · [Pro](/ko/pro) |
| Host 작업은 어디서 실행되나요? | 컴퓨터의 Host OS 계정 권한으로 실행합니다. 인증 API는 루프백에서만 수신하고 SSH를 통해 접근하며 Host 인증 정보는 컴퓨터에 남습니다. 연결 해제 후 관리 작업은 계속될 수 있지만 Host나 OS를 재시작하면 중단됩니다. | [Host](/ko/docs/host) · [세션 제한](/ko/docs/host/sessions) |

</div>

## 호환성과 검증 범위 {#compatibility}

**배포 대상, 화면 기록, 완료된 인수 테스트는 다른 근거입니다.** 아래는 기록된 범위이며 모든 조합의 동작을 보장하지 않습니다.

<div class="compatibility-table" role="region" aria-label="호환성과 검증 범위" tabindex="0">

| 시스템 또는 Agent | 문서에 기록된 범위 | 근거와 제한 |
| --- | --- | --- |
| Android 앱 | **2.4.1 / build 66**의 검토된 ADB 화면 기록. 기기 및 OS 버전별 전체 인수 테스트 표는 아닙니다. | [화면 기록](/images/placeholders/sources.json) · [화면 안내](/ko/docs/screenshot-guide) |
| iPhone / iPad | **2.4.1+66, iOS 26.0 시뮬레이터**: iPhone 17 Pro, iPad Pro 11-inch (M5). SSH, 터미널 테스트, Git은 임시 Mac 프로젝트를 사용합니다. AI 화면은 제공자 설정 전이며 실기기 또는 모델 작업의 전체 검증은 아닙니다. | [화면 출처](/images/ios/sources.json) |
| Linux / macOS / Windows Host | **2.4.0 배포 대상**: x64 및 ARM64 CLI/데스크톱, Linux/Windows는 x86 CLI도 제공. 전체 네이티브 및 모바일/Agent 인수 테스트는 아직 미완료입니다. Linux 데스크톱은 glibc 2.35 이상이 필요하며 macOS 패키지는 미서명·미공증 상태입니다. | [Host 호환성](/ko/docs/host/compatibility) |
| Codex / Claude Code / OpenCode | 호환 설치 검색이 문서화되어 있습니다. Claude 구조화 대화에는 호환 `claude-agent-acp` 어댑터도 필요합니다. 링크된 가이드에는 Agent 버전 × OS별 전체 테스트 표가 공개되어 있지 않습니다. | [Host Agent](/ko/docs/host/agents) · [검증 범위](/ko/docs/host/compatibility) |
| 터미널 AI 도구 | 워크플로 페이지에 터미널 실행 영상이 있습니다. CLI 실행은 Host/ACP 구조화 대화 검증을 의미하지 않습니다. | [터미널 워크플로](/ko/use-cases/terminal-ai-tools) |
| Android Local Linux | Android 8 이상, 64비트 ARM64/x86_64 지원. iOS와 32비트 ARM은 미지원. 호환성은 작업에 따라 다르며 컨테이너 테스트만으로 Android PRoot 동작을 검증할 수 없습니다. | [호환성과 제한](/ko/docs/local-linux/compatibility) |

</div>

기능 이용 권한은 계정과 플랫폼에 따라 다르며 모델 사용 요금은 별도입니다. [Pro](/ko/pro), [개인정보처리방침](/ko/privacy), [지원](/ko/support)에서 자세히 확인하세요.
