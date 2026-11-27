---
title: "Descargar e instalar Nimote Connect"
description: "Paquetes compatibles, instalación de GUI y CLI, acceso remoto y actualizaciones de Nimote Connect."
---

# Instalar Nimote Connect

Selecciona una conexión SSH en Máquinas. Los equipos vinculados pueden usar Nimote Connect como ruta de red. NimoteHost funciona de forma independiente y ofrece funciones avanzadas a través de SSH autenticado.

Para usar la conexión pública desde la lista de dispositivos vinculados de NimoteCode, instala Nimote Connect en el ordenador, vincúlalo a tu cuenta y activa el acceso remoto. Una dirección SSH pública que ya controlas, incluida una dirección Tailscale propia, puede usarse con SSH directo sin Connect.

Connect proporciona la ruta de red al servidor SSH del ordenador. Después de autenticarte puedes abrir espacios de trabajo remotos, archivos y terminales SSH. El modo Host es una opción independiente para tareas persistentes y sesiones de Agent; no es necesario para SSH público ni para el terminal. El paquete comercial actual también incluye el servicio Host.

La [página de versiones de Nimote Connect](https://github.com/mobiledevloperlab/nimote-connect/releases) ofrece paquetes CLI estables con Connect y Host para macOS, Linux y Windows en arm64 y amd64. Usa el paquete y el archivo SHA-256 de la misma versión.

En macOS y Linux compatibles, conéctate primero por SSH en NimoteCode y elige **Máquinas → Host → Instalar Nimote Connect**. El asistente consulta las versiones en nimotecode.com y descarga y verifica el paquete de GitHub. En Windows, o si no puedes usar el asistente, instala manualmente.

En macOS o Linux, extrae todo el paquete y ejecuta `./install.sh` como el usuario de escritorio, sin `sudo`. En Windows PowerShell, ejecuta `.\install.ps1` como el usuario actual. La GUI de macOS está en `~/Applications/NimoteConn.app`; en Linux, si el paquete la incluye, usa `~/.local/bin/nimoteconn`. Windows dispone solo de CLI. Activa OpenSSH, aprueba el código de vinculación y habilita **Connect → Remote access** en la GUI, o ejecuta `nimoteconnect remote-access enable`.

Comandos CLI: `nimoteconnect status` (servicio Connect), `nimoteconnect host status` (Host), `nimoteconnect remote-access status` (acceso público), `nimoteconnect remote-access disable` (desactivar), `nimoteconnect doctor` (diagnóstico), `nimoteconnect restart` (reiniciar) y `nimoteconnect logout` (desvincular). En Windows, sustituye `nimoteconnect` por `%LOCALAPPDATA%\NimoteConnect\nimote-connect.exe`.

Para actualizar, verifica y extrae el paquete nuevo y vuelve a ejecutar el instalador como el mismo usuario, después de terminar las tareas Host activas. Para conservar la vinculación, puedes usar `./install.sh --skip-login` en macOS/Linux o `.\install.ps1 -SkipLogin` en Windows. Consulta la [guía completa en inglés](/docs/connect) para todos los pasos.
