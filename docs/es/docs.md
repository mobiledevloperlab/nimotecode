---
title: Documentación de NimoteCode
description: "Conoce los cuatro modos de NimoteCode, SSH, Linux en Android, programación con IA, Git y desarrollo remoto."
---

# Documentación de NimoteCode

Empieza con [Inicio rápido](/es/docs/quick-start) para abrir un espacio, editar un archivo y ejecutar un comando. Después elige la guía para tu tarea.

En NimoteCode 2.5.0 puedes [conectar con un equipo vinculado mediante Tailscale personal](/es/docs/ssh#paired-computers), [reanudar un terminal SSH con tmux](/es/docs/terminal#persistent-ssh-terminal) o [instalar Nimote Connect por SSH](/es/docs/host/getting-started#install-over-ssh).

## Elige dónde están los archivos y se ejecutan los comandos

| Quiero… | Empezar aquí | Qué tener en cuenta |
| --- | --- | --- |
| Editar archivos en mi dispositivo | [Espacios de trabajo locales y SSH](/es/docs/ssh) | Una carpeta local permite acceder a archivos. Ejecutar comandos del proyecto requiere SSH o Local Linux. |
| Usar un ordenador o servidor existente | [Espacios de trabajo locales y SSH](/es/docs/ssh) | Conecta por SSH para usar el proyecto y las herramientas instaladas allí. |
| Retomar tareas remotas tras desconectarme | [Máquinas](/es/docs/host) | Instala NimoteHost en el ordenador y conecta por SSH. Los procesos gestionados pueden continuar mientras Host siga activo. |
| Ejecutar herramientas Linux en Android | [Instalar y ejecutar el primer comando](/es/docs/local-linux/getting-started) | Comprueba los requisitos antes de instalar. Solo está disponible en dispositivos Android compatibles. |

Los cuatro modos de la aplicación eligen la interfaz; el espacio determina dónde están los archivos y se ejecutan los comandos. Host requiere además un servicio en el ordenador. Consulta [Inicio rápido](/es/docs/quick-start) para elegir modo.

## Buscar una guía por tarea

### Primeros pasos

| Guía | Uso |
| --- | --- |
| [Inicio rápido](/es/docs/quick-start) | Abrir un espacio de trabajo · Abrir y editar un archivo · Ejecutar un comando · Ejecutar AI Agent |
| [Preguntas frecuentes de NimoteCode](/es/docs/faq) | Consultar opciones de espacios, configuración de IA y requisitos. |

### Espacios y entornos

| Guía | Uso |
| --- | --- |
| [Espacios de trabajo locales y SSH](/es/docs/ssh) | Elegir un espacio de trabajo · Abrir una carpeta local · Configurar una conexión SSH |
| [SSH y SFTP en Windows](/es/docs/windows-ssh-sftp) | Configurar Windows OpenSSH y resolver problemas de acceso SSH/SFTP. |
| [Sincronización y caché](/es/docs/sync-cache) | Elegir la dirección de transferencia · Iniciar y verificar una transferencia |
| [Docker y Dev Containers](/es/docs/docker) | Administra recursos Docker en un host SSH y abre espacios de trabajo Dev Container configurados. |

### Editar, ejecutar y usar Git

| Guía | Uso |
| --- | --- |
| [Editor de código](/es/docs/editor) | Abrir archivos y cambiar de pestaña · Seleccionar y editar texto · Navegar por símbolos e historial |
| [Búsqueda en el espacio de trabajo](/es/docs/search) | Buscar en el contenido de archivos · Si no aparecen resultados |
| [Terminal](/es/docs/terminal) | Ejecutar comandos del espacio de trabajo · Buscar, copiar y analizar la salida · Actualizar el entorno remoto |
| [Tareas](/es/docs/tasks) | Crear un comando reutilizable · Ejecutar e inspeccionar la salida |
| [Git y GitHub](/es/docs/source-control) | Revisar cambios, commits, ramas y flujos de GitHub. |
| [Servicios de lenguaje (LSP)](/es/docs/lsp) | Comprobar la configuración del servidor de lenguaje · Usar diagnósticos y acciones de código |
| [Depuración](/es/docs/debug) | Preparar una sesión de depuración · Inspeccionar un programa en pausa |

### IA y extensiones

| Guía | Uso |
| --- | --- |
| [Proveedores y modelos de IA](/es/docs/configuration) | Configurar proveedores, probar la conexión de IA y ajustar privacidad. |
| [Chat, Agents y MCP](/es/docs/ai) | Iniciar una conversación · Elegir un agente · Revisar el plan y seguir la ejecución |
| [Plugins personalizados](/es/docs/plugins) | Crear el primer plugin · Vista previa, permisos y ejecución · Trabajos en segundo plano y programación |

### Máquinas

En **Máquinas → Añadir máquina**, elige SSH, Nimote Connect, Red local o Tailscale. Selecciona la máquina para abrir su espacio en el IDE, el terminal o la IA. Configura NimoteHost para sesiones persistentes, tareas remotas y aprobaciones. Las funciones de NimoteHost requieren herramientas compatibles y acceso Pro.

[Máquinas](/es/docs/host) · [Instalar Nimote Connect](/es/docs/host/getting-started) · [Solucionar problemas](/es/docs/host/troubleshooting)

### Local Linux en Android

[Local Linux en Android](/es/docs/local-linux) · [Instalar y ejecutar el primer comando](/es/docs/local-linux/getting-started) · [Solucionar problemas](/es/docs/local-linux/troubleshooting)

### Ajustes y referencias

| Guía | Uso |
| --- | --- |
| [Ajustes](/es/docs/settings) | Ajustar apariencia, idioma y preferencias del editor y paneles. |
| [Cuenta y suscripción](/es/docs/account-subscription) | Consultar el estado de la cuenta, restaurar compras y revisar el acceso a funciones. |
| [Notificaciones](/es/docs/notifications) | Encontrar actividad completada o pendiente y abrir su sesión. |
| [Credenciales y revisión de operaciones](/es/docs/security) | Gestionar credenciales SSH, claves del modelo y aprobaciones. |
| [Referencia de la interfaz](/es/docs/screenshot-guide) | Encuentre capturas y procedimientos por función. |

## Si tienes problemas

Según tu entorno, consulta [Preguntas frecuentes](/es/docs/faq), [SSH y SFTP en Windows](/es/docs/windows-ssh-sftp), [Solución de problemas de Host](/es/docs/host/troubleshooting) o [Solución de problemas de Local Linux](/es/docs/local-linux/troubleshooting).
