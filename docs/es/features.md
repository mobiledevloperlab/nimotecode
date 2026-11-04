---
title: Funciones de NimoteCode | Espacio de desarrollo móvil
description: "NimoteCode reúne espacios locales y SSH, Android Local Linux, editor, terminal, Git y GitHub, IA, plugins personalizados, servicios de lenguaje, depuración, búsqueda y tareas."
---

# Funciones de NimoteCode

NimoteCode es un espacio de desarrollo móvil para trabajar con proyectos existentes desde un teléfono o tableta. No sustituye el repositorio, servidor, gestor de paquetes, proveedor de IA ni cadena de herramientas: reúne archivos, editor, entorno de shell, control de versiones y ayuda opcional de IA.

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

## La interfaz de un vistazo

Las imágenes siguientes muestran las superficies de espacio de trabajo, revisión, diagnóstico y transferencia descritas arriba.

<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights"><div class="feature-showcase__track"><figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure><figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure></div></div>
