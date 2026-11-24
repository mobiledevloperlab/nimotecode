---
title: "Gestión del servicio y actualizaciones | NimoteHost"
description: "NimoteHost: guía de gestión del servicio y actualizaciones."
---

# Gestión del servicio y actualizaciones

## Mantenimiento, actualización y datos

En NimoteCode 2.5.0, abre **Host → Conexiones remotas** y comprueba el estado. Usa la acción de instalación o actualización disponible, o consulta la versión instalada en la ayuda de Host. Revisa la interrupción de sesiones antes de autorizarla.

| Comando | Efecto |
| --- | --- |
| `nimotehost version` | Versión del ejecutable. |
| `nimotehost status` | Servicio disponible: `running: true`. |
| `nimotehost capabilities` | Protocolo, funciones y herramientas. |
| `nimotehost agents` | Versiones de Agents instalados. |
| `nimotehost install` | Registra e inicia el servicio desde una ruta fija. |
| `nimotehost stop` | Detiene Host y sus tareas activas. |
| `nimotehost restart` | Reinicia el servicio instalado; interrumpe tareas. |
| `nimotehost uninstall` | Elimina el servicio; conserva credenciales y registros. |

Usa el ejecutable instalado; en PowerShell puedes invocarlo con `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" status`. Para un servicio instalado detenido, usa `restart`; `start` funciona en primer plano. `setup` verifica e instala el paquete completo, mientras que `install` registra el binario ya ubicado.

En un host Unix comprueba el entorno SSH con `ssh user@host 'command -v nimotehost && nimotehost status'`, sustituyendo el destino. Si falta el comando, prueba `ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'` y corrige el PATH no interactivo. Tras cambiar rutas de herramientas, termina tareas y ejecuta `stop` seguido de `install` desde el ejecutable instalado en el entorno corregido.

Para actualizar, verifica el nuevo paquete completo y ejecuta su instalador con la misma cuenta tras terminar tareas y cerrar el GUI anterior. Conserva el paquete previo y rechaza interrumpir tareas activas. Comprueba después versión, estado y capacidades. Antes de bajar de versión, haz copia de los datos. Ejecuta `uninstall` antes de borrar los archivos instalados; los registros y credenciales permanecen.

| Sistema | Configuración y estado predeterminados |
| --- | --- |
| Linux | `~/.config/nimotehost` o `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/Library/Application Support/nimotehost` |
| Windows | `%APPDATA%\nimotehost` |

Haz copias solo con Host detenido, conserva permisos privados y no publiques credenciales ni conversaciones. Los archivos del proyecto y datos del proveedor Agent requieren copias separadas. Copiar registros no restaura procesos.

Diagnóstico: Linux `systemctl --user status nimotehost.service` y `journalctl --user -u nimotehost.service -n 50 --no-pager`; macOS `launchctl print gui/$(id -u)/com.nimotehost`; Windows `schtasks.exe /Query /TN NimoteHost /V /FO LIST`. Comprueba la sesión del usuario y, en Linux, la política de lingering para continuar tras cerrar sesión.

[Resumen](/es/docs/host) · [Solución de problemas](/es/docs/host/troubleshooting)
