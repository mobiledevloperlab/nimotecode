---
title: "Windows 11 SSH 및 SFTP 연결 가이드 | NimoteCode"
description: "Windows 11 OpenSSH Server를 설정하고 NimoteCode 2.3.0 이상으로 원격 파일을 편집하세요. 인증, 방화벽, 연결 시간 초과와 WSL2 문제를 단계별로 확인합니다."
lang: ko
updated: 2026-11-13
---

# Windows 11에 SSH와 SFTP로 연결하기

> **버전 요구 사항: NimoteCode 2.3.0 이상.** 이 안내는 Windows 11을 기준으로 합니다. Windows 10과 Windows Server도 설정이 비슷할 수 있지만 검증하지 않은 조합의 호환성을 보장하지는 않습니다. [2.3.0 릴리스 노트](/ko/releases/2.3.0)도 확인하세요.

## 1. 연결 방식 이해하기

Windows PC에서 Microsoft OpenSSH Server(`sshd`)를 활성화합니다. 휴대폰이나 태블릿의 NimoteCode가 SSH로 연결하고, 같은 연결의 SFTP 하위 시스템으로 로그인한 Windows 계정이 접근할 수 있는 파일을 탐색하고 편집합니다. 원격 터미널에서는 Windows 셸을 사용할 수 있습니다.

```text
NimoteCode (휴대폰/태블릿) -- SSH TCP/22 --> Windows 11 OpenSSH Server
    |-- SFTP: 파일 탐색 및 편집
    `-- Shell: 설정에 따른 PowerShell/CMD
```

Windows 그래픽 데스크톱을 보여 주는 기능이 아니며 WSL2도 필요하지 않습니다. SSH 연결, SFTP, 셸 동작은 각각 검증해야 합니다. 메뉴 이름은 앱 버전에 따라 다를 수 있습니다.

## 2. 준비 사항

- **NimoteCode 2.3.0 이상**. 설치한 버전을 확인하세요.
- Windows 11 PC. 조직 관리 PC는 선택적 기능 설치나 인바운드 연결을 제한할 수 있습니다.
- 사용 가능한 암호나 SSH 키가 설정된 Windows 계정. Windows Hello PIN은 SSH 암호가 아닙니다.
- 초기 설정은 두 기기를 같은 신뢰할 수 있는 LAN에 연결하여 진행하세요.
- 별도 안내가 없으면 Windows 명령은 **관리자 권한 PowerShell**에서 실행하세요.

## 3. OpenSSH Server 설치 및 시작

선택적 구성 요소를 확인하세요.

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

`OpenSSH.Server~~~~0.0.1.0`이 `NotPresent`라면 설치하세요.

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

Windows 설정에서 선택적 기능을 검색하여 추가할 수도 있습니다. 설정 위치와 이름은 Windows 빌드에 따라 다릅니다. 설치가 실패하면 Windows Update와 조직 정책을 확인하세요.

서비스를 시작하고 자동 시작을 설정하세요.

```powershell
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
Get-Service sshd
```

`Running` 상태여야 합니다. 서비스가 없으면 서버 구성 요소가 설치되었는지 확인하세요.

수신 주소를 확인하세요.

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, OwningProcess
```

일반적인 주소는 `0.0.0.0` 또는 `::`입니다. `127.0.0.1`에서만 수신하면 다른 LAN 기기는 보통 연결할 수 없습니다. 필요하면 `C:\ProgramData\ssh\sshd_config`의 `Port`, `ListenAddress`, `Subsystem sftp`를 확인하세요. 수정 후에는 검증하고 재시작하세요.

```powershell
& "$env:WINDIR\System32\OpenSSH\sshd.exe" -t
Restart-Service sshd
```

내용을 이해하지 않은 채 설정 파일 전체를 교체하지 마세요.

## 4. Windows 방화벽 규칙 확인

OpenSSH Server 설치 시 보통 `OpenSSH-Server-In-TCP` 규칙이 만들어집니다.

```powershell
Get-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -ErrorAction SilentlyContinue |
  Select-Object Name, DisplayName, Enabled, Direction, Action, Profile
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
```

규칙이 없다면 신뢰하는 **Private** 네트워크용으로 다음 규칙을 만들 수 있습니다. 같은 이름의 사용자 지정 규칙이 이미 있으면 먼저 설정을 확인하세요.

```powershell
New-NetFirewallRule -Name 'NimoteCode-OpenSSH-Private' `
  -DisplayName 'NimoteCode OpenSSH (Private)' `
  -Enabled True -Direction Inbound -Action Allow -Protocol TCP `
  -LocalPort 22 -Profile Private
```

규칙은 `Private`인데 현재 연결이 `Public`이면 불일치가 접근을 막을 수 있습니다. 모든 네트워크에서 SSH를 허용하기보다는 **신뢰할 수 있는 네트워크일 때만** 연결 프로필을 바꾸세요. 예시의 `Wi-Fi`는 실제 인터페이스 이름으로 바꿔야 합니다.

```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private
```

`Any` 프로필을 기본 설정으로 권장하지 않습니다. 차단 규칙, 원격 주소 제한, 보안 소프트웨어와 라우터도 연결에 영향을 줍니다.

### TCP 22 허용 규칙이 여러 개 있는 이유

`NimoteCode SSH LAN`, `OpenSSH SSH Server (sshd)`, `NimoteCode Windows SSH`가 같은 포트를 허용하더라도 세 개의 수신 포트가 생기는 것은 아닙니다. 중복 허용 규칙은 보통 소켓 충돌을 일으키지 않습니다. 이름만 보고 삭제하지 말고 적용 범위를 확인하세요.

```powershell
Get-NetFirewallRule -Direction Inbound -Enabled True |
  Where-Object { $_.DisplayName -match 'SSH|NimoteCode' } |
  Select-Object Name, DisplayName, Action, Profile
```

## 5. 올바른 Windows 주소와 사용자 이름 확인

```powershell
ipconfig
whoami
```

실제로 사용하는 Wi-Fi 또는 Ethernet 어댑터의 IPv4 주소(예: `192.168.1.100`)를 사용하세요. WSL, Docker, Hyper-V, VPN 가상 어댑터와 혼동하지 마세요. 로컬 계정, 도메인 계정, Microsoft 계정은 SSH 사용자 이름 형식이 다를 수 있습니다. 다른 SSH 클라이언트에서 실제 로그인을 확인하고 암호란에 Windows Hello PIN을 입력하지 마세요.

## 6. NimoteCode 설정 전에 서버 검증

PC 자체에서 TCP 포트를 확인하세요.

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

`TcpTestSucceeded : True`는 TCP 연결만 증명합니다. 로그인이나 SFTP 성공을 뜻하지는 않습니다.

같은 LAN의 다른 Windows 컴퓨터에서 확인하세요.

```powershell
Test-NetConnection 192.168.1.100 -Port 22
ssh username@192.168.1.100
sftp username@192.168.1.100
```

예시 주소와 사용자 이름을 실제 값으로 바꾸세요. 첫 연결에서는 **서버 호스트 키 지문을 확인한 후** 신뢰해야 합니다.

루프백은 성공하지만 LAN 테스트가 시간 초과라면 대상 IP, 네트워크 프로필, 방화벽 범위, 게스트 Wi-Fi의 클라이언트 격리, VPN과 보안 소프트웨어를 확인하세요.

## 7. NimoteCode에 Windows 연결 추가

1. **NimoteCode 2.3.0 이상**을 설치하세요.
2. 작업 공간 연결 화면에서 **SSH 연결 또는 원격 작업 공간**을 만드세요.
3. Host에 Windows LAN IP(예: `192.168.1.100`), Port에 `22`, Username에 SSH 로그인 계정을 입력하세요.
4. 지원되는 암호 또는 개인 키 인증을 선택하고 저장하세요. 개인 키는 안전하게 보관해야 합니다.
5. 첫 연결의 호스트 지문을 확인하고, 원격 폴더 목록 조회 및 테스트 텍스트 파일 편집과 저장을 검증하세요.
6. 터미널을 열고 해당 셸에 맞는 명령으로 현재 계정과 디렉터리를 확인하세요.

SFTP 접근 범위는 Windows 계정과 NTFS 권한에 따릅니다. 로그인 성공이 `C:\Windows`나 `Program Files`에 대한 쓰기 권한을 주지는 않습니다. SFTP 경로는 로컬 `C:\...` 형식과 다를 수 있으므로 서버가 반환하는 경로를 사용하세요.

<figure>
  <a href="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" target="_blank" rel="noopener">
    <img src="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" width="2020" height="1041" alt="NimoteCode의 Windows 연결 설정, 원격 파일, PowerShell 터미널과 Agent 세션을 나란히 보여 주는 별도 화면들입니다." loading="lazy" decoding="async">
  </a>
  <figcaption>NimoteCode의 Windows 연결 설정, 원격 파일, PowerShell 터미널과 Agent 세션을 나란히 보여 주는 별도 화면들입니다.</figcaption>
</figure>

### Windows 셸과 호스트 키 확인

Windows OpenSSH는 DefaultShell을 변경하지 않으면 처음에 CMD를 기본 셸로 사용합니다. NimoteCode Windows 작업 공간은 PowerShell과 SFTP를 사용합니다. SSH 로그인 시 CMD가 열리고 기본 셸을 PowerShell로 바꾸려면 관리자 PowerShell에서 다음을 실행하세요. 이후 SSH 세션에 적용되므로 공유 호스트에서는 변경을 협의하세요.

```powershell
New-ItemProperty -Path 'HKLM:\SOFTWARE\OpenSSH' -Name DefaultShell `
  -Value "$env:WINDIR\System32\WindowsPowerShell\v1.0\powershell.exe" `
  -PropertyType String -Force
```

클라이언트의 지문을 Windows 호스트에서 직접 얻은 신뢰할 수 있는 값과 비교하세요. 기본 Ed25519 호스트 키는 다음 명령으로 확인합니다.

```powershell
& "$env:WINDIR\System32\OpenSSH\ssh-keygen.exe" -lf "$env:ProgramData\ssh\ssh_host_ed25519_key.pub"
```

## 8. Windows와 WSL2 함께 사용하기

| 대상 | 포트 예시 | 접근 범위 |
| --- | ---: | --- |
| Windows OpenSSH | 22 | Windows 파일과 셸 |
| WSL2 Linux SSH | 2222 | WSL2 내부 Linux 파일과 셸 |

`2222`는 **직접 선택하는 예시**이며 WSL2 기본 SSH 포트가 아닙니다. Linux sshd와 Windows에서 WSL로 이어지는 전달 또는 미러링 네트워크를 설정해야 합니다. 네트워크 모드와 재시작은 연결 가능 여부에 영향을 줄 수 있습니다. Windows 방화벽에서 `2222`를 허용한 사실만으로 WSL2가 수신 중이거나 접근 가능하다고 판단할 수 없습니다.

```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 22,2222 }
```

Windows 파일을 SFTP로 관리하기 위해 WSL2를 설치할 필요는 없습니다.

## 9. 증상별 문제 해결

| 증상 | 확인할 영역 | 진단 방법 |
| --- | --- | --- |
| TCP 22 시간 초과 | IP, 방화벽, 클라이언트 격리, VPN과 경로 | 루프백과 LAN의 `Test-NetConnection` 비교 |
| 연결 거부 | sshd 중지, 잘못된 포트, 수신 없음 | `Get-Service sshd`, `Get-NetTCPConnection` |
| 인증 실패 | 계정 이름, 암호, 키, 정책 | PC SSH 클라이언트에서 `ssh -v` |
| 셸은 되지만 SFTP 실패 | SFTP 하위 시스템, 설정, 권한 | `sftp -v`, 설정과 이벤트 로그 |
| 읽기는 되지만 저장 실패 | NTFS ACL, 읽기 전용, 보호된 폴더 | 사용자 소유 디렉터리에서 테스트 |
| 22는 되지만 2222 실패 | WSL sshd, 전달, 네트워크 모드 | WSL과 Windows 수신 상태 각각 확인 |
| LAN만 연결 가능 | NAT, CGNAT, 라우터, VPN | 안전한 VPN 또는 사설 터널 사용 |

### 보고된 Windows 11 설정에서 알 수 있는 점

확인된 허용 규칙에는 `WSL2 SSH Access (Any)`, 여러 `WSL2 SSH 2222 (Any)`, `OpenSSH SSH Server (sshd) (Private)`가 있었습니다. 규칙의 존재만 확인할 수 있을 뿐, sshd 수신이나 원격 TCP 도달 여부를 증명하지는 않습니다. `Private`가 원인인지는 현재 프로필과 비교해야 합니다.

관리자 PowerShell에서 다음 진단을 실행하세요.

```powershell
Get-Service sshd
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
Get-NetFirewallRule -Name OpenSSH-Server-In-TCP -ErrorAction SilentlyContinue |
  Select-Object DisplayName, Enabled, Action, Profile
Test-NetConnection 127.0.0.1 -Port 22
ipconfig
```

사용 가능한 OpenSSH 이벤트 로그를 찾으세요.

```powershell
Get-WinEvent -ListLog '*OpenSSH*'
```

## 10. 보안 권장 사항

- 인바운드 SSH는 신뢰할 수 있는 네트워크나 필요한 출발지 주소로 제한하고 가능하면 `Private`를 사용하세요.
- 인터넷에서는 TCP 22를 직접 공개하기보다 적절히 구성한 VPN이나 사설 터널을 우선하세요.
- SSH 키를 우선 사용하고 개인 키나 암호를 문제 보고에 붙여 넣지 마세요.
- Windows 업데이트, 최소 권한 계정, 파일 권한 관리를 유지하세요.
- 호스트 지문을 확인하고 예기치 않은 변경은 조사하세요.
- 일반적인 문제 해결 방법으로 Windows 방화벽을 끄지 마세요.

## 11. 적용 범위와 릴리스 정보

이 안내는 **NimoteCode 2.3.0 이상에서 Windows OpenSSH로 연결하는 SSH/SFTP 설정**을 다룹니다. Git, 언어 서비스, Agent 등의 추가 기능은 호스트의 도구와 권한, 앱 버전에 따라 달라집니다. Linux나 macOS와 모든 동작이 같다고 보장하지는 않습니다. [릴리스 노트](/ko/releases/2.3.0)와 [작업 공간 안내](/ko/docs/ssh)에서 지원 범위를 확인하세요.

## 공식 참고 자료

- [Microsoft: Windows OpenSSH 설치](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?pivots=windows-11)
- [Microsoft: Windows OpenSSH 설정](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh-server-configuration)
- [NimoteCode 빠른 시작](/ko/docs/quick-start)
