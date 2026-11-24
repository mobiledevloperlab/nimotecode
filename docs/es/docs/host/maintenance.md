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

## Actualizar o desinstalar Community

Para actualizar manualmente, termina las tareas activas, verifica el nuevo paquete compatible y ejecuta `setup` desde la nueva carpeta extraída. Actualiza el Host incluido con Nimote Connect desde Connect.

`deploy uninstall` quita el servicio inactivo y el paquete instalado, y conserva las credenciales y los registros de sesiones. Ejecútalo desde un paquete Community extraído o un ejecutable de despliegue verificado fuera del directorio de instalación. Para cambiar de edición, consulta la [guía de Community](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/community.md).

[Despliegue avanzado y recuperación](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md)

[Resumen](/es/docs/host) · [Solución de problemas](/es/docs/host/troubleshooting)
