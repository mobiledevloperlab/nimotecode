---
title: Funciones de NimoteCode | Espacio de desarrollo móvil
description: Abre tu proyecto desde el móvil y conéctate a tu ordenador para editar, ejecutar comandos y revisar cambios de Git en un mismo espacio. Consulta cuándo usar SSH, Docker y Pro.
---

# Funciones de NimoteCode

Edita código, ejecuta herramientas, revisa cambios de Git y trabaja con IA desde el móvil o la tablet. Los modos IDE, Terminal e IA conservan el proyecto y el estado de Explorer.

<WorkspaceModes />

## NimoteCode 2.4.0 · Host, tareas de proyecto y fiabilidad remota

- **Espacio Host.** Instala e inicia NimoteHost compatible en la máquina remota y conecta por SSH para buscar, fijar y retomar sesiones de terminal y Agent. Host es opcional.
- **Colaboración Agent.** Sesiones compatibles de Codex, Claude y OpenCode con conversaciones estructuradas, herramientas, aprobaciones, comandos, modelos e indicaciones durante la ejecución. Las políticas dependen del Host; las acciones sensibles pueden requerir aprobación.
- **Bandeja de tareas e Issues de GitHub.** Revisa estados, evidencias de verificación y diffs; continúa o archiva tareas y envía Issues según la política de publicación elegida. Depende de la versión y configuración del Host.
- **Plugins Host.** Accede desde la barra lateral a formularios versionados, tablas paginadas, detalles y vistas interactivas con controles de permisos.
- **Tareas de proyecto.** Descubre tareas compatibles de package.json, Taskfile, Makefile, justfile y .vscode/tasks.json y ejecútalas en el terminal. El descubrimiento dinámico de Make/just requiere confirmación.
- **Avisos y editor.** Configura avisos de finalización, confirmación y error, sonido y vibración sujetos al sistema, números de línea y minimapa horizontal. Pro se activa por defecto en Windows.
- Configuración unificada de funciones, paneles y plugins; avisos en la configuración Agent. Mejoras para tablets, Windows, colores horizontales y movimiento reducido.
- Filtra CI de GitHub por rama y flujo; consulta logs por paso, contexto de errores y avisos de descarga incompleta.
- Mayor respuesta del terminal, actualizaciones sincronizadas, búsqueda, desplazamiento, Vim, portapapeles, pegado en Windows y teclado virtual.
- Historial más fiable con eliminación local sin conexión; guardado remoto con motivos de error, edición de archivos grandes y diffs ajustados con navegación inferior.

[2.4.0 →](/es/releases/2.4.0)



## Vista de la interfaz

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights"><div class="feature-showcase__track"><figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure></div></div>

## Espacios de trabajo

| Espacio | Uso | Límite importante |
| --- | --- | --- |
| **Local** | Abre una carpeta autorizada por el sistema y trabaja con Git en el dispositivo. | Una carpeta no aporta por sí misma shell Linux, compilador ni runtime. |
| **SSH** | Usa proyecto y herramientas que ya existen en un host remoto. | Los comandos se ejecutan con los permisos de la cuenta remota elegida. |
| **Android Local Linux** | Usa un espacio Ubuntu sin root en Android compatible. | Solo Android; herramientas y dependencias se instalan por separado. |
| **Demo** | Explora archivos e interfaz de ejemplo antes de conectar un proyecto. | No es un entorno desplegable. |

Consulta [espacios locales y SSH](/es/docs/ssh) y [Android Local Linux](/es/docs/local-linux).

## Desarrollo y revisión

- [Editor](/es/docs/editor): archivos locales o remotos, pestañas, panel dividido, edición y vista previa de Markdown o HTML estático.
- [Terminal](/es/docs/terminal): comandos SSH/Local Linux, búsqueda de salida, sesiones y actualización del entorno remoto.
- [Control de código fuente y GitHub](/es/docs/source-control): estado, staging, diffs, ramas, historial, clonación, issues, PR, revisiones, checks, flujos y artefactos.
- [Tareas](/es/docs/tasks) y [búsqueda](/es/docs/search): comandos guardados y búsqueda de contenido SSH.

El proyecto determina el resultado real de compilaciones, pruebas y Git. Confirma directorio, comando, diff y remoto antes de modificar archivos o publicar código.

## IA y extensiones

La IA es opcional y usa un proveedor que configuras. Hay plantillas para OpenAI, Anthropic, Google Gemini, xAI Grok, DeepSeek, Alibaba Qwen, OpenRouter, Groq, SiliconFlow, StepFun, Zhipu AI/GLM, Moonshot AI, Ollama y endpoints compatibles con OpenAI. La cuenta, disponibilidad y costes pertenecen al proveedor.

- [AI Chat](/es/docs/ai), Nimote Agent con revisión de plan y agentes ACP externos compatibles.
- Servidores MCP como proceso local/remoto o servidor HTTP; añade solo servidores de confianza y revisa cada llamada.
- [Plugins personalizados](/es/docs/plugins) combinan datos, formularios y acciones confirmadas. También hay [LSP](/es/docs/lsp), [depuración](/es/docs/debug) y [sincronización/caché](/es/docs/sync-cache).

La salida de IA es ayuda, no garantía de exactitud, seguridad ni éxito. Los plugins y herramientas de lenguaje/depuración no instalan dependencias en silencio ni añaden permisos del host. La disponibilidad depende de plataforma, versión, cuenta, canal y región; la app muestra el estado actual.

## Espacios de trabajo y Docker en 2.3.0

Cambia entre los modos IDE, Terminal e IA dentro del espacio de trabajo, compartiendo el mismo proyecto y el estado del Explorador.

El panel Docker del host SSH muestra contenedores, imágenes, volúmenes, redes y Compose. Las capturas de Debian bookworm-slim muestran la lista y los detalles de una imagen. Dev Containers se configura desde el devcontainer.json del proyecto.

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Docker image list in the Light theme, including Debian bookworm-slim." />
  <DocScreenshot file="docker-image-detail.png" caption="Debian bookworm-slim image details in the Light theme." />
</div>

[Modo Host →](/es/docs/host) — Instalar NimoteHost, conectar por SSH y retomar terminales y tareas Agent.
