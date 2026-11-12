---
title: "How to SSH Into Windows 11 From Your Phone (and Browse Files With SFTP)"
description: "Set up Windows 11 OpenSSH Server, connect from Android or iPhone, browse files with SFTP, and troubleshoot port 22 timeouts."
date: "2026-11-12"
author: "NimoteCode Team"
tags: ["windows", "ssh", "sftp", "tutorial", "mobile development"]
image: /blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png
ogImage: https://nimotecode.com/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png
---

# How to SSH Into Windows 11 From Your Phone (and Browse Files With SFTP)

![SSH and SFTP access to Windows 11 from a phone](/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/cover.png)

**You don't need Remote Desktop to access your Windows development machine from your phone. SSH and SFTP are often enough.**

I recently worked on getting Windows 11 remote development working properly from my phone. The idea was simple: browse files, edit code, and run PowerShell commands without sitting in front of my PC.

The setup turned out to be fairly straightforward. The annoying part was debugging it when Windows said port 22 was allowed, but every connection still timed out.

Here's how to set everything up, including the problems I ran into.

## What we're setting up

The setup looks like this:

```text
Android / iPhone
       |
       | SSH (TCP 22)
       |
       v
Windows 11 PC
       |
       +-- OpenSSH Server
       +-- SFTP file access
       +-- PowerShell terminal
       +-- Local projects
```

SSH gives us a remote shell. SFTP runs over the same SSH connection and lets us browse and transfer files.

We'll use:

- A Windows 11 computer
- A phone connected to the same local network
- Windows OpenSSH Server
- An SSH/SFTP client on the phone

For the mobile client, I'll use **NimoteCode 2.3.0+**, a mobile IDE I've been building for Android and iOS. Other SSH/SFTP clients can use the same Windows configuration.

No Windows Remote Desktop, WSL, or additional Windows host application is required for the basic setup.

## 1. Enable OpenSSH Server on Windows 11

First, open **PowerShell as Administrator**.

Check whether OpenSSH Server is installed:

```powershell
Get-WindowsCapability -Online |
    Where-Object Name -like 'OpenSSH*'
```

Look for:

```text
OpenSSH.Server~~~~0.0.1.0
State : Installed
```

If the server is not installed, run:

```powershell
Add-WindowsCapability -Online `
    -Name OpenSSH.Server~~~~0.0.1.0
```

Alternatively, you can install it from Windows Settings under Optional Features.

Now start the SSH service:

```powershell
Start-Service sshd
```

Make it start automatically after reboot:

```powershell
Set-Service -Name sshd -StartupType Automatic
```

Verify the service:

```powershell
Get-Service sshd
```

You should see:

```text
Status   Name
------   ----
Running  sshd
```

That's the first part done.

## 2. Check whether Windows is listening on port 22

Installing OpenSSH doesn't help if the SSH service isn't actually listening.

Run:

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen
```

A typical result looks like:

```text
LocalAddress LocalPort State
------------ --------- -----
0.0.0.0      22        Listen
```

`0.0.0.0` means the service is listening on all IPv4 interfaces.

If there's no output, check the SSH service again. Also inspect:

```text
C:\ProgramData\ssh\sshd_config
```

Look for custom `Port` or `ListenAddress` settings that may prevent the expected connection.

After changing the SSH configuration, validate it with `sshd -t` and restart the service.

Before testing from the phone, check localhost:

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

The important line is:

```text
TcpTestSucceeded : True
```

If this fails, fix the local SSH service before troubleshooting the phone or router.

## 3. Check the Windows Firewall

This is where I spent more time than expected.

I had several rules allowing TCP port 22, including rules created during earlier SSH and WSL experiments.

At first glance, everything looked fine. But multiple firewall rules don't prove that a remote connection will work.

Check the OpenSSH rule:

```powershell
Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" |
    Select-Object DisplayName, Enabled, Action, Profile
```

You might see:

```text
DisplayName               Enabled Action Profile
-----------               ------- ------ -------
OpenSSH SSH Server (sshd) True    Allow  Private
```

Notice `Private`.

That rule applies to the Private network profile. If your active connection is classified as Public, it may not apply.

Check your network:

```powershell
Get-NetConnectionProfile |
    Select-Object InterfaceAlias, NetworkCategory
```

If this is your trusted home or office LAN, you can configure the network as Private through Windows Settings.

For a temporary diagnostic test, you can change the SSH rule to all profiles:

```powershell
Set-NetFirewallRule `
    -Name "OpenSSH-Server-In-TCP" `
    -Profile Any
```

Don't leave SSH unnecessarily exposed on untrusted networks. Once you identify the issue, restrict the rule to the intended network profile and, where practical, trusted remote IP ranges.

Also, don't keep adding duplicate firewall rules just because connections time out. Check the existing rules first.

## 4. Find your Windows IP address

Run:

```powershell
ipconfig
```

Find the IPv4 address of the network adapter you're actually using.

For example:

```text
Wireless LAN adapter Wi-Fi:

IPv4 Address . . . . . : 192.168.1.100
```

Your phone should connect to that LAN address, not `127.0.0.1`.

Be careful if your PC has WSL2, Docker, Hyper-V, or VPN adapters. They can introduce extra IP addresses that aren't the right destination for your phone.

From another Windows machine, you can test:

```powershell
Test-NetConnection 192.168.1.100 -Port 22
```

Replace the address with your PC's actual IP.

If localhost works but this test fails, check firewall profile matching, network isolation, security software, and whether you're connecting to the correct adapter.

## 5. Connect from Android or iPhone

Now for the phone.

I'm using [NimoteCode](https://nimotecode.com/), which supports Windows remote workspaces starting with version **2.3.0**.

![NimoteCode Windows 11 remote workspace connection settings](/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png)


Create an SSH workspace or connection with the following values:

| Setting | Example |
|---|---|
| Connection name | Windows 11 Dev PC |
| Host | 192.168.1.100 |
| Port | 22 |
| Username | Your Windows account username |
| Authentication | Password or SSH key |

Use your Windows account password, not your Windows Hello PIN. If you're using a Microsoft account, confirm the username recognized by OpenSSH.

For a new connection, verify the SSH host-key fingerprint against the Windows machine before trusting it.

Once connected, you can use the remote workspace to browse Windows files through SFTP, open and edit supported project files, and run PowerShell commands through the SSH terminal.

For example, the remote terminal can run:

```powershell
Get-Location
Get-ChildItem
git status
```

Git commands require Git to be installed and available on the Windows host.

A quick note about paths: Windows uses paths such as `C:\Users\YourName\Projects`. SFTP presents paths through the server's remote filesystem interface, so the representation may differ from a local Windows file picker.

## 6. SSH works, but SFTP doesn't?

SSH and SFTP are related, but they aren't the same operation.

An SSH terminal can work while the SFTP subsystem is incorrectly configured.

Check your SSH server configuration:

```text
C:\ProgramData\ssh\sshd_config
```

Look for the SFTP subsystem declaration.

A typical Windows OpenSSH configuration uses:

```text
Subsystem sftp sftp-server.exe
```

If your configuration uses a different valid SFTP subsystem, don't blindly replace it.

After making any changes, validate the configuration and restart SSH:

```powershell
sshd -t
Restart-Service sshd
```

You can also check SFTP independently from another machine:

```bash
sftp username@192.168.1.100
```

If this fails while normal SSH succeeds, investigate the SFTP subsystem, authentication, directory permissions, and server logs.

## 7. What if port 22 still times out?

Here's the troubleshooting order I'd recommend.

| Symptom | What to check |
|---|---|
| Localhost port 22 fails | `sshd` service and listener |
| Localhost works, phone times out | Firewall, LAN IP, client isolation |
| Connection refused | Listener, port, firewall or network rejection |
| Permission denied | Windows username and authentication |
| SSH works, SFTP fails | SFTP subsystem and permissions |
| Works on Wi-Fi but not cellular | No public route or remote-access tunnel |

The most useful diagnostic commands are:

```powershell
Get-Service sshd

Get-NetTCPConnection -LocalPort 22 -State Listen

Test-NetConnection 127.0.0.1 -Port 22

Get-NetConnectionProfile

Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" |
    Select-Object DisplayName, Enabled, Action, Profile
```

One more thing: `ping` doesn't test TCP port 22. Use an actual TCP connectivity test instead.

If you want to connect from outside your home network, a Windows Firewall rule alone isn't enough. You'll need a secure network path to the machine.

I'd recommend a VPN or trusted private networking solution rather than exposing an SSH service directly to the public internet.

## 8. What about WSL2?

If you already use WSL2, you can keep Windows and Linux SSH access separate.

For example:

```text
Windows OpenSSH: TCP 22
WSL2 SSH:        TCP 2222
```

Your phone can then use different SSH connection profiles.

But don't assume changing the WSL SSH port automatically makes it reachable through the Windows host's port 2222. Depending on your WSL networking mode, you may need additional forwarding or firewall configuration.

For basic Windows SFTP and PowerShell access, WSL2 isn't necessary at all.

## Why I wanted this working

A phone isn't going to replace my full desktop development environment.

But there are plenty of small tasks where opening a laptop feels unnecessary:

- Checking a project or configuration file
- Editing a script
- Running a quick PowerShell command
- Reviewing a Git change
- Inspecting logs while away from the desk

That's the kind of workflow I'm trying to improve with NimoteCode.

The goal isn't to squeeze a full desktop onto a six-inch screen. It's to keep the useful parts of a development environment accessible when you're away from the keyboard.

If you're using Windows 11 as your main development machine, SSH and SFTP are a good starting point.

And if you're debugging a timeout despite having opened port 22, check the actual SSH listener and network profile before adding yet another firewall rule.

---

**Useful links**

- [NimoteCode — Android & iOS mobile IDE](https://nimotecode.com/)
- [NimoteCode 2.3.0 Release Notes](https://nimotecode.com/releases/2.3.0)
- [Microsoft — Get started with OpenSSH for Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

*I'm building NimoteCode and working on making remote development from phones and tablets less awkward. If you've tried SSH/SFTP from your phone, I'd be interested to hear what still gets in your way.*
