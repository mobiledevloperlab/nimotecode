---
title: "문제 해결 | NimoteHost"
description: "NimoteHost 문제 해결 안내 및 절차."
---

# 문제 해결

먼저 일반 SSH가 되는지 확인하세요. 접근 가능한 SSH 주소를 사용하거나 개발 머신 목록에서 연결 가능한 페어링 기기를 선택합니다. Nimote Connect 인터넷 연결에는 기기 연결과 원격 접근 활성화가 필요합니다.

## 연결되지 않을 때

먼저 일반 SSH가 되는지 확인하세요. Host를 찾지 못하면 계정, 설치 경로와 SSH PATH를 확인하고, Windows에서는 같은 사용자의 discovery.json을 확인합니다. 프로토콜이 맞지 않으면 App과 Host를 호환 버전으로 맞춥니다.

보이는 출력이 저장된 기록일 수도 있습니다. 입력하기 전에 연결과 프로세스 실행 여부, 원격 폴더 접근 권한을 확인하세요. 생성 결과를 모를 때는 원래 세션부터 찾습니다. Host 중지, 재시작 및 업데이트는 진행 중인 작업을 끝낸 뒤 하세요.

설치된 서비스는 `nimotehost deploy status`로 확인하고 `nimotehost deploy start`로 시작합니다. 설치하고 로그인한 Agent가 보이지 않으면 `nimotehost tools refresh`와 `nimotehost agents`를 실행하세요.

[SSH](/ko/docs/ssh) · [Agent](/ko/docs/ai) · [작업](/ko/docs/tasks)

[개요](/ko/docs/host) · [하드웨어 및 패키지 선택](/ko/docs/host/compatibility)
