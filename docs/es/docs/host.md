---
title: "Host: tareas remotas y Agents de código abierto | NimoteCode"
description: "Mantén terminales, tareas y Agents en tu ordenador tras desconectar. Conoce NimoteHost, su código Apache-2.0, personalización, contribución y despliegue."
---

# Host: espacio abierto para tareas remotas y Agents

Gestiona terminales, tareas y Agents de tu ordenador desde el móvil. El trabajo continúa al desconectar; vuelve para revisar el progreso y responder aprobaciones.

## Descargar NimoteHost {#download-nimotehost}

<HostDownload />

[Hardware y selección de paquetes](/es/docs/host/compatibility) · [Descarga e instalación](/es/docs/host/getting-started) · [Conexiones, terminales y tareas](/es/docs/host/sessions) · [Agents y bandeja de tareas](/es/docs/host/agents) · [Gestión del servicio y actualizaciones](/es/docs/host/maintenance) · [Solución de problemas](/es/docs/host/troubleshooting)

## Capacidades y ventajas de Host

Ejecuta en tu ordenador con sus archivos y herramientas habituales y consulta el progreso desde el móvil. Vuelve cuando el trabajo necesite una decisión o revisión.

| Capacidad | Ventaja |
| --- | --- |
| Terminales y tareas gestionadas | Ejecuta compilaciones, pruebas y scripts. Los procesos gestionados continúan al desconectar; reconecta para ver la salida y seguir trabajando. |
| Agents compatibles | Revisa conversaciones, herramientas y aprobaciones de Codex, Claude Code y OpenCode; envía indicaciones adicionales cuando se admita. |
| Sesiones y bandeja de tareas | Busca, filtra y fija trabajo para encontrar aprobaciones, fallos y resultados pendientes de revisión. |
| Verificación y revisión | Comprueba pruebas ejecutadas, códigos de salida y diffs. Envía Issues de GitHub con una política de publicación cuando el Host lo admita. |
| Tu entorno habitual | Usa el proyecto y sus herramientas en Linux, macOS o Windows mediante CLI o gestor de escritorio. |
| Código abierto | Inspecciona, compila y modifica todo el código de Host, añade integraciones y contribuye mejoras. |

Inicia las pruebas antes de salir y consulta el resultado más tarde, o atiende aprobaciones de un Agent y revisa el diff al terminar. Host y el ordenador deben seguir activos; reiniciarlos no restaura los procesos originales. Las funciones dependen del Host y las herramientas instaladas.

## NimoteCode y NimoteHost

NimoteCode es el cliente; NimoteHost ejecuta las tareas en tu ordenador. Host ofrece CLI y gestor de escritorio para Linux, macOS y Windows. Su código completo se ofrece bajo Apache-2.0 en [su repositorio](https://github.com/mobiledevloperlab/nimotehost); NimoteCode sigue siendo comercial y de código cerrado. Host también puede ejecutarse de forma independiente e integrarse por RPC, el cliente Go o MCP.

La conexión es **NimoteCode → SSH → NimoteHost → herramientas del proyecto**. No requiere otra cuenta Nimote ni un puerto público de Host. Las credenciales locales permanecen en el ordenador; los comandos tienen los permisos de su cuenta del sistema. Usa cuentas separadas para aislar usuarios. SSH normal funciona sin instalar Host; Host añade tareas que continúan tras desconectar y gestión de Agents compatibles.

 El modo Host requiere NimoteCode 2.4.1 o posterior; instalar el servicio no añade esta función a una aplicación antigua.

## Código completo: revisar, personalizar y contribuir

**Todo el código de NimoteHost se ofrece bajo Apache-2.0**, incluido el servicio, la CLI, el gestor de escritorio y los SDK de integración. Puedes revisar la ejecución, autenticación y persistencia, compilarlo y desplegarlo por tu cuenta. El cliente NimoteCode sigue siendo comercial y de código cerrado.

- Haz un Fork para modificar comportamiento, interfaz o despliegue. Mantén la compatibilidad de protocolo con la aplicación.
- Desarrolla plugins con `pkg/pluginsdk`, integra Go con `pkg/hostclient` y conecta RPC o MCP. MCP es de solo lectura por defecto; las escrituras requieren activación explícita.
- Abre Issues para problemas o propuestas y pull requests para correcciones, adaptadores de Agents, traducciones y documentación. Discute primero cambios grandes y ejecuta las comprobaciones de la guía.

[Código completo](https://github.com/mobiledevloperlab/nimotehost) · [Licencia](https://github.com/mobiledevloperlab/nimotehost/blob/master/LICENSE) · [Contribuir](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md) · [SDK de plugins](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/plugin-system/plugin-sdk.md)

### Implementación transparente y acceso controlado

Host usa SSH autenticado; su API HTTP autenticada solo escucha en loopback. Las credenciales Host permanecen en el ordenador, sin otro relay Nimote ni puerto API público. Tú controlas dónde se ejecuta y puedes revisar el código.

Los comandos tienen los permisos de la cuenta del sistema de Host. Usa una cuenta adecuada, revisa permisos de Agents y plugins y actualiza dependencias. Las entradas del Agent y contexto del proyecto pueden enviarse al proveedor configurado. El código abierto permite revisión, pero no garantiza ausencia de vulnerabilidades ni una auditoría independiente completada. Consulta la [política y el reporte privado de seguridad](https://github.com/mobiledevloperlab/nimotehost/blob/master/SECURITY.md).

## Descarga e instalación {#host-install}

[Descarga e instalación](/es/docs/host/getting-started#host-install)

### Instalar desde código {#host-source}

[Descarga e instalación](/es/docs/host/getting-started#host-source)
