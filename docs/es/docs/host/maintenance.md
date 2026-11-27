---
title: "Gestión del servicio y actualizaciones | NimoteHost"
description: "NimoteHost: guía de gestión del servicio y actualizaciones."
---

# Gestión del servicio y actualizaciones

Ejecuta los comandos en el equipo que aloja Host con la misma cuenta que usas para SSH. Si el ejecutable instalado no está en PATH, usa la ruta completa indicada abajo.

Primero comprueba el servicio con un comando. Puedes reemplazar `nimotehost` por la ruta completa en los ejemplos.

```sh
"$HOME/.local/share/nimotehost/nimotehost" deploy status
```

```powershell
& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" deploy status
```

## Consultar e iniciar Host

| Comando | Efecto |
| --- | --- |
| `nimotehost --version` | Muestra la versión de la CLI instalada. |
| `nimotehost deploy status` | Consulta el estado del servicio. `"running": false` indica que está detenido. |
| `nimotehost deploy start` | Inicia el servicio instalado y espera a que responda. |
| `nimotehost deploy stop` | Detiene el servicio si no hay tareas activas. |
| `nimotehost agents` | Consulta las herramientas de agentes que detecta el Host en ejecución. |
| `nimotehost tools refresh` | Actualiza la detección de herramientas sin reiniciar las sesiones existentes. |

## Actualizar Nimote Connect

Termina las tareas activas de Host y usa el aviso de actualización de NimoteCode en macOS o Linux compatibles. Para actualizar o desinstalar manualmente, sigue las instrucciones del repositorio de distribución con la cuenta de instalación original.

[Nimote Connect Releases](https://github.com/mobiledevloperlab/nimote-connect/releases) · [Descripción general](/es/docs/host)
