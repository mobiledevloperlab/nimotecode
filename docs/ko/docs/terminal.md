---
title: Mobile Terminal | NimoteCode SSH Workspace
description: Run workspace commands in NimoteCode, open project URLs in in-app preview, search terminal output, use quick commands and keep advanced multi-terminal contexts with Pro.
---

# 모바일 단말기

터미널은 NimoteCode 작업공간의 검증 레이어입니다. 편집 중인 명령을 실행하고, 출력을 검색하고, 결과를 파일 및 다음 결정에 연결해 두세요.

<ImagePlaceholder image-key="terminal" alt="NimoteCode mobile terminal">
  <strong>Image placeholder — Terminal in the active workspace</strong>
  <span>Replace with a screenshot of terminal output, search and a nearby editor tab in a real SSH project.</span>
</ImagePlaceholder>

## 핵심 터미널 작업 흐름

- 활성 로컬 또는 SSH 작업 영역에서 명령을 실행합니다.
- 스트리밍 출력을 검사하고 긴 로그에서 오류나 경고를 검색합니다.
- 알려진 루틴에 대해 빠른 명령이나 사용자 정의 명령을 사용하십시오.
- 인앱 브라우저 미리보기에서 직접 로컬 또는 원격 웹 프로젝트에서 생성된 URL을 엽니다. AI 응답과 도구 출력의 웹 링크는 동일한 작업을 사용합니다.
- 통역이 도움이 될 경우 관련 출력을 [AI 채팅 및 에이전트](/docs/ai)로 보냅니다.
- 다시 연결한 후 원격 작업을 재개한 다음 계속하기 전에 호스트와 디렉터리를 확인하세요. 터미널 입력은 모바일 작업 중에 작성 키보드 텍스트, 키 반복 및 실제 키보드 단축키를 보존하도록 설계되었습니다.

SSH 작업 영역의 경우 터미널 메뉴에서 원격 계정의 로그인 환경을 새로 고칠 수 있습니다. 그런 다음 터미널, 작업, 디버그, 언어 서버, Git, 외부 CLI 및 ACP 에이전트는 `PATH`, 로케일 및 SSH 에이전트 구성을 포함하여 동일한 확인된 셸 환경을 사용합니다.

## 둘 이상의 쉘이 중요한 경우

Pro는 하나의 터미널이 로그를 따르는 동안 다른 터미널은 테스트나 배포 명령을 실행하는 등 병렬 컨텍스트를 위한 고급 다중 터미널 워크플로를 제공합니다. 고위험 명령을 명시적으로 유지하고 복원된 터미널을 원격 상태가 변경되지 않았다는 증거로 취급하지 마십시오.

<ImagePlaceholder image-key="terminalMenu" alt="Terminal menu on NimoteCode for phone">
  <strong>Terminal actions and session controls</strong>
</ImagePlaceholder>

다음: [SSH 작업 영역](/docs/ssh) · [작업](/docs/tasks) · [터미널 진단](/docs/terminal)
