---
title: "Descargar e instalar Nimote Connect"
description: "Paquetes compatibles, instalación de GUI y CLI, acceso remoto y actualizaciones de Nimote Connect."
---

# Instalar Nimote Connect

Para usar la conexión pública desde la lista de dispositivos vinculados de NimoteCode, instala Nimote Connect en el ordenador, vincúlalo a tu cuenta y activa el acceso remoto. Una dirección SSH pública que ya controlas, incluida una dirección Tailscale propia, puede usarse con SSH directo sin Connect.

Connect proporciona la ruta de red al servidor SSH del ordenador. Después de autenticarte puedes abrir espacios de trabajo remotos, archivos y terminales SSH. El modo Host es una opción independiente para tareas persistentes y sesiones de Agent; no es necesario para SSH público ni para el terminal. El paquete comercial actual también incluye el servicio Host.

Obtén el paquete comercial y el valor SHA-256 facilitado por el distribuidor en [GitHub Releases](https://github.com/mobiledevloperlab/nimote-connect/releases). **Este enlace es provisional** hasta la publicación del repositorio comercial. `0.2.0-rc.6` es un candidato validado localmente, no una versión estable disponible en todas las plataformas. Elige el tarball comercial `darwin-amd64`, `darwin-arm64`, `linux-amd64` o `linux-arm64` según tu equipo. Windows x64 y ARM64 usan un ZIP CLI si está publicado para esa versión.

En macOS o Linux, extrae todo el paquete y ejecuta `./install.sh` como el usuario de escritorio, sin `sudo`. En Windows PowerShell, ejecuta `.\install.ps1` como el usuario actual. La GUI de macOS está en `~/Applications/NimoteConn.app`; en Linux, si el paquete la incluye, usa `~/.local/bin/nimoteconn`. Windows dispone solo de CLI. Activa OpenSSH, aprueba el código de vinculación y habilita **Connect → Remote access** en la GUI, o ejecuta `nimoteconnect remote-access enable`.

Comandos CLI: `nimoteconnect status` (servicio Connect), `nimoteconnect host status` (Host), `nimoteconnect remote-access status` (acceso público), `nimoteconnect remote-access disable` (desactivar), `nimoteconnect doctor` (diagnóstico), `nimoteconnect restart` (reiniciar) y `nimoteconnect logout` (desvincular). En Windows, sustituye `nimoteconnect` por `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe`.

Para actualizar, verifica y extrae el paquete nuevo y vuelve a ejecutar el instalador como el mismo usuario, después de terminar las tareas Host activas. Para conservar la vinculación, puedes usar `./install.sh --skip-login` en macOS/Linux o `.\install.ps1 -SkipLogin` en Windows. Consulta la [guía completa en inglés](/docs/connect) para todos los pasos.
