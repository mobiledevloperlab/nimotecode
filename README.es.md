<p align="center">
  <img src="docs/public/app_icon_rounded.png" alt="NimoteCode logo" width="88" height="88">
</p>

<h1 align="center">NimoteCode — IDE móvil con IA y espacio SSH</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <strong>Español</strong> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a></p>

<p align="center">
  <strong>Tus proyectos y herramientas, donde programes.</strong><br>
  Editor, terminal SSH, Git y Agents de IA para Android, iPhone y iPad.
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Install-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Install NimoteCode for Android"></a>
  <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Download-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Download NimoteCode for iPhone and iPad"></a>
</p>

<p align="center">
  <a href="https://nimotecode.com/es/releases/2.4.1"><img src="https://img.shields.io/badge/NimoteCode-2.4.1-2563EB?style=flat-square" alt="NimoteCode 2.4.1"></a>
  <a href="https://nimotecode.com/es/docs"><img src="https://img.shields.io/badge/docs-online-2563EB?style=flat-square" alt="Documentation"></a>
  <a href="https://github.com/mobiledevloperlab/nimotehost"><img src="https://img.shields.io/badge/NimoteHost-Apache--2.0-64748B?style=flat-square" alt="NimoteHost companion license: Apache-2.0"></a>
</p>

<p align="center">
  <a href="#workspace-demo">Ver demo</a> ·
  <a href="#workflow">Flujo de trabajo</a> ·
  <a href="#workspace-modes">Cuatro modos</a> ·
  <a href="#quick-start">Inicio rápido</a> ·
  <a href="#latest-release">2.5.0 · Próximamente</a> ·
  <a href="#nimotehost">NimoteHost</a> ·
  <a href="https://nimotecode.com/es/docs">Documentación</a> ·
  <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">Informar de un problema</a>
</p>

<p align="center">
  <img src="docs/public/screenshots/nimote-pro-framed.svg?v=6d554a40db88" alt="Archivos remotos y editor Python de NimoteCode 2.4.1" width="1000">
</p>

NimoteCode es un **IDE móvil para proyectos locales y remotos por SSH**. Explora archivos, edita código, ejecuta comandos y revisa diferencias Git en un mismo espacio. Conecta tu proveedor de IA o utiliza agentes instalados en tu equipo de desarrollo.

**Cuatro modos · Tu propio entorno de desarrollo · IA opcional**

<a id="workspace-demo"></a>

## Demo

Explora el espacio de trabajo en el vídeo, o [ábrelo directamente](https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4).

<div align="center">
  <video src="https://github.com/user-attachments/assets/14c8bab8-ae16-4e15-8a8a-926ef2c747f4" controls muted playsinline width="420"></video>
</div>

## Por qué NimoteCode

| Tu trabajo | Un flujo conectado |
| --- | --- |
| **Continuar desde el móvil** | Archivos SSH/SFTP, editor y terminal con las herramientas de tu equipo. |
| **Desarrollar en tablet** | Explorador, búsqueda, paneles divididos y vistas previas de Markdown y web. |
| **Verificar cada cambio** | Comandos y tareas del proyecto junto al estado, historial y diferencias Git. |
| **Colaborar con IA** | Chat, Agent integrado, herramientas MCP y agentes ACP compatibles. |
| **Retomar trabajo remoto** | Sesiones gestionadas por NimoteHost que continúan en tu ordenador tras desconectar. |
| **Trabajar localmente en Android** | Ubuntu mediante PRoot, Bash, Git y SSH sin root. |

<a id="workspace-modes"></a>

## Cuatro modos, del comando al proyecto completo

Cada tarea dispone de una vista dedicada. El proyecto sigue a mano al pasar de archivos a comandos, cambios y conversaciones.

<table>
  <tr>
    <td rowspan="5" width="180" align="center" valign="middle"><a href="docs/public/images/placeholders/host-mode.png?v=8ed6f40a441c"><img src="docs/public/screenshots/host-mode-framed.svg?v=0b26255ed795" alt="Selección de modos NimoteCode: Full IDE, Quick Terminal, AI Workspace y Host" width="160"></a></td>
    <th>Modo</th>
    <th>Cuándo utilizarlo</th>
    <th>Experiencia</th>
  </tr>
  <tr>
    <td valign="top"><strong>IDE</strong></td>
    <td valign="top">Leer, editar y revisar un proyecto.</td>
    <td valign="top">Explorador, búsqueda, editores divididos, terminal y Git en un mismo espacio.</td>
  </tr>
  <tr>
    <td valign="top"><strong>AI</strong></td>
    <td valign="top">Preguntar, delegar una tarea y seguir su ejecución.</td>
    <td valign="top">Contexto del proyecto, Chat o Agent, resultados de herramientas y solicitudes de permiso.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Terminal</strong></td>
    <td valign="top">Ejecutar comandos, compilaciones y CLI interactivas.</td>
    <td valign="top">Vista centrada en terminal, teclas adicionales, búsqueda de historial y herramientas del host.</td>
  </tr>
  <tr>
    <td valign="top"><strong>Host</strong></td>
    <td valign="top">Volver al trabajo que sigue en tu ordenador.</td>
    <td valign="top">Terminales, Agents compatibles, tareas y registros de verificación gestionados por NimoteHost.</td>
  </tr>
</table>

**IDE, Terminal y AI conservan el proyecto y el estado del explorador al cambiar de modo. Host conecta con sesiones gestionadas por NimoteHost.** Investiga en IDE, ejecuta una prueba en Terminal, pide un cambio a AI y retoma una tarea remota mediante Host.

SSH, edición, revisión Git, ejecución de Agents y recuperación de sesiones forman un flujo de desarrollo conectado. Amplíalo con Docker y Compose por SSH, Dev Containers, servicios de lenguaje, depuración y plugins personalizados.

[Funciones](https://nimotecode.com/es/features) · [Comparación de herramientas móviles](https://nimotecode.com/es/compare/mobile-ai-development-tools)

<a id="workflow"></a>

## Un proyecto, del código a la revisión

Sigue un flujo móvil completo: abre el proyecto SSH, inspecciona el código, colabora con un Agent, ejecuta comandos en el host y revisa los cambios.

<table>
  <tr>
    <th width="25%" align="center">1 · Explora el código</th>
    <th width="25%" align="center">2 · Colabora con un Agent</th>
    <th width="25%" align="center">3 · Ejecuta comandos</th>
    <th width="25%" align="center">4 · Revisa los cambios</th>
  </tr>
  <tr>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/editor-code-selection.png?v=3bc86359abb3"><img src="docs/public/screenshots/editor-code-selection-framed.svg?v=5419f1211a45" alt="1 · Explora el código" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/ai-plan-running.jpg?v=7cdbc72fe334"><img src="docs/public/screenshots/ai-plan-running-framed.svg?v=50b2a9e2632d" alt="2 · Colabora con un Agent" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/terminal-command-output.png?v=8a8c20322c4e"><img src="docs/public/screenshots/terminal-command-output-framed.svg?v=62963867fed1" alt="3 · Ejecuta comandos" width="220"></a></td>
    <td width="25%" align="center" valign="top"><a href="docs/public/images/placeholders/source-control-changes.png?v=f08e4471badb"><img src="docs/public/screenshots/source-control-changes-framed.svg?v=15712f667c09" alt="4 · Revisa los cambios" width="220"></a></td>
  </tr>
  <tr>
    <td valign="top">Lee y edita archivos con resaltado de sintaxis y números de línea.</td>
    <td valign="top">Sigue el plan, las lecturas de archivos y las herramientas del Agent.</td>
    <td valign="top">Utiliza el shell y las herramientas del host para ejecutar las comprobaciones del proyecto.</td>
    <td valign="top">Consulta los archivos modificados y abre los diffs antes de confirmar cambios.</td>
  </tr>
</table>

<sub>Capturas reales de NimoteCode 2.4.1 para Android mediante ADB. Haz clic para ver el tamaño original.</sub>

¿Necesitas salir? El [modo Host](#nimotehost) permite volver a sesiones compatibles gestionadas por NimoteHost en tu ordenador.

<a id="quick-start"></a>

## Empieza con un pequeño cambio

1. **Instala** desde [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) o la [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).
2. **Abre un proyecto:** una carpeta local, un host SSH configurado o el espacio Demo. No necesitas configurar IA.
3. **Edita → ejecuta → revisa:** cambia un archivo, ejecuta una comprobación disponible y revisa el diff en un repositorio Git.

[Inicio rápido →](https://nimotecode.com/es/docs/quick-start)

### Dónde se ejecuta tu código

| Espacio | Archivos y herramientas | Requisitos |
| --- | --- | --- |
| **Local** | En tu dispositivo, para explorar y editar. | Una carpeta accesible; las carpetas externas autorizadas tienen limitaciones de herramientas. |
| **SSH** | En un host Linux, macOS o Windows. | Servidor SSH accesible, proyecto y herramientas instaladas. |
| **Android Local Linux** | Ubuntu en Android; proyectos locales compartidos en `/mnt/local`. | Android 8+ ARM64 / x86_64 compatible. |
| **Host** | En tu ordenador, bajo NimoteHost. | SSH y un NimoteHost compatible en ejecución. |

Local Linux no está disponible en iPhone o iPad; utiliza un host SSH para ejecutar comandos de desarrollo. Git, LSP, depuración, Tasks, vigilancia de archivos y Agent necesitan una ruta nativa. Las funciones dependen del entorno, las herramientas instaladas y los permisos de acceso de la aplicación.

<a id="latest-release"></a>

## NimoteCode 2.5.0 · Próximamente

- Conecta por SSH a equipos vinculados mediante Tailscale personal.
- Retoma sesiones tmux con Pro. Instala o actualiza NimoteHost por SSH.
- Mejoras en la reconexión SSH, la entrada, el desplazamiento y la copia en la terminal.
- Nueva navegación móvil y resultados de búsqueda resaltados.
- Codex integrado más rápido y kits de Linux local en Android.
- Free permite ver el estado y las diferencias de Git, preparar y retirar cambios y crear commits. Las operaciones gráficas de push, pull, ramas y stash, Git AI y la integración avanzada de GitHub requieren Pro. Docker y los Dev Containers requieren Pro y un host compatible. La depuración requiere Pro y un adaptador configurado.

[Leer las notas completas de 2.5.0](https://nimotecode.com/es/releases/2.5.0) · [Versión publicada 2.4.1](https://nimotecode.com/es/releases/2.4.1)

<a id="nimotehost"></a>

## NimoteHost: sal de la app y vuelve a tu trabajo

El complemento opcional y autoalojado para Linux, macOS y Windows mantiene sesiones en tu ordenador. Desconecta el móvil y vuelve por SSH a terminales o conversaciones compatibles de **Codex, Claude Code y OpenCode**.

Revisa herramientas, permisos, tareas y verificaciones según las capacidades del Host. Elige CLI o gestor de escritorio, o compila y amplía el código completo **Apache-2.0**.

Instala un paquete compatible con el sistema y CPU del ordenador, mantenlo en ejecución y conecta mediante **Host → SSH connections** en NimoteCode 2.4.1 o posterior. Reiniciar Host o el sistema interrumpe procesos. Los Agents requieren instalación y autenticación propias; los espacios SSH normales funcionan sin Host.

[Instalación](https://nimotecode.com/es/docs/host/getting-started) · [Código fuente](https://github.com/mobiledevloperlab/nimotehost) · [Paquetes Host](https://github.com/mobiledevloperlab/nimotehost/releases)

## IA con tus herramientas y proveedores

| Opción | Para qué sirve |
| --- | --- |
| **AI Chat** | Explicar código y salida del terminal con contexto. |
| **Agent integrado** | Inspeccionar, planificar, editar y ejecutar comprobaciones en espacios compatibles. |
| **MCP** | Conectar herramientas configuradas, con aprobación de sus llamadas. |
| **Agents ACP** | Utilizar un runtime compatible instalado por separado desde la conversación. |
| **CLI por SSH** | Ejecutar Claude Code, Codex y otras herramientas instaladas en el host. |

**Los créditos de modelos y las suscripciones del proveedor son independientes de NimoteCode.** Configura tus credenciales y revisa cambios y pruebas antes de confirmar código.

[Configurar IA](https://nimotecode.com/es/docs/configuration) · [Agents y MCP](https://nimotecode.com/es/docs/ai)

<!-- major-comparison:start -->
## NimoteCode frente a cinco alternativas principales

Fuentes verificadas: **2026-11-24 07:16:24 (UTC)** · Según documentación, sitios web y publicaciones oficiales

**Ejecuta el trabajo en tu ordenador; usa el móvil para revisar código, gestionar terminales, recuperar sesiones de IA compatibles y responder a las aprobaciones.**

Esta es una instantánea documental del equipo de NimoteCode, verificada en la fecha UTC indicada; no es un flujo de datos en directo ni una prueba de rendimiento. No se han probado todas las aplicaciones en dispositivos y versiones de tienda equivalentes, y la documentación puede preceder a una publicación general. ✅ indica soporte documentado oficialmente, incluidas las integraciones indicadas; ◐ significa soporte parcial o dependencia de un plugin, entorno remoto o configuración; — significa que no se confirmó la función nativa correspondiente. Pulsa un estado para consultar su fuente oficial. Un guion no descarta soluciones externas y el soporte parcial no implica la misma experiencia.

### Funciones principales

| Función | [NimoteCode](https://nimotecode.com/es/docs/host) | [Blink Shell](https://docs.blink.sh/advanced/code) | [Termius](https://www.termius.com/) | [Acode](https://docs.acode.app/user-guide/) | [Replit](https://docs.replit.com/features/platforms/mobile-app) | [Codespaces](https://docs.github.com/en/codespaces/about-codespaces/what-are-codespaces) |
| --- | --- | --- | --- | --- | --- | --- |
| Android | [✅](https://nimotecode.com/es/download) | — | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Navegador](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| iOS / iPadOS | [✅](https://nimotecode.com/es/download) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-iphone) | [— Próximamente](https://acode.app/ai-coding-ios) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Navegador](https://docs.github.com/en/codespaces/about-codespaces/codespaces-features) |
| Terminal SSH | [✅](https://nimotecode.com/es/docs/ssh) | [✅](https://docs.blink.sh/) | [✅](https://www.termius.com/free-ssh-client-for-android) | [✅](https://github.com/Acode-Foundation/Acode#readme) | — | — |
| Mosh | — | [✅](https://docs.blink.sh/advanced/advanced-mosh) | [✅](https://www.termius.com/free-ssh-client-for-android) | — | — | — |
| Editor gráfico de código | [✅](https://nimotecode.com/es/docs/editor) | [✅](https://docs.blink.sh/advanced/code) | — | [✅](https://docs.acode.app/user-guide/) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace) |
| Linux en el dispositivo | [✅ Android · Pro](https://nimotecode.com/es/docs/local-linux) | — | — | [✅ Android](https://docs.acode.app/user-guide/terminal) | — | — |
| Operaciones gráficas de Git | [✅ Escritura con Pro](https://nimotecode.com/es/docs/source-control) | [◐](https://docs.blink.sh/advanced/code) | — | — | [✅ Editor del proyecto](https://docs.replit.com/features/workspace-tools/git-interface) | [✅](https://docs.github.com/en/codespaces/developing-in-a-codespace/using-source-control-in-your-codespace) |
| Asistencia de código con LSP | [✅ Funciones básicas gratis](https://nimotecode.com/es/docs/lsp) | — | — | [✅](https://docs.acode.app/user-guide/language-servers) | — | [◐ Extensión de lenguaje](https://code.visualstudio.com/docs/remote/codespaces) |
| Programación con IA | [✅ Agent · Pro](https://nimotecode.com/es/docs/ai) | — | [◐ Autocompletado de comandos](https://www.termius.com/pricing) | [◐ Plugin oficial](https://docs.acode.app/tutorials/ai-agent) | [✅](https://docs.replit.com/features/platforms/mobile-app) | [◐ Extensión Copilot](https://docs.github.com/en/codespaces/reference/using-github-copilot-in-github-codespaces) |
| Extensiones de VS Code | — | [◐](https://docs.blink.sh/advanced/code) | — | — | — | [✅](https://code.visualstudio.com/docs/remote/codespaces) |
| Desarrollo remoto en tu ordenador | [✅](https://nimotecode.com/es/docs/ssh) | [✅](https://docs.blink.sh/advanced/code) | [◐ Terminal SSH](https://www.termius.com/free-ssh-client-for-android) | [◐](https://docs.acode.app/user-guide/remote-access) | — | — |
| Sesiones de terminal persistentes | [✅ Host · Pro](https://nimotecode.com/es/docs/host) | [◐ Mosh](https://docs.blink.sh/advanced/advanced-mosh) | [◐ Mosh](https://www.termius.com/free-ssh-client-for-android) | [◐ Servicio Android](https://docs.acode.app/user-guide/terminal) | — | [◐ Entorno activo](https://docs.github.com/en/codespaces/about-codespaces/understanding-the-codespace-lifecycle) |
| Recuperación y aprobaciones de Agent | [✅ Host · Pro](https://nimotecode.com/es/docs/host) | — | — | [◐ Plugin oficial](https://docs.acode.app/tutorials/ai-agent) | — | — |
| Bandeja de tareas del proyecto | [✅ Host · Pro](https://nimotecode.com/es/docs/host) | — | — | — | [✅ Tablero de tareas en la nube](https://docs.replit.com/features/agent/task-board) | — |

### Condiciones e interpretación

Los datos de NimoteCode se basan en las funciones Free y Pro y en la documentación de Host. Con NimoteHost Community, la recuperación, las aprobaciones y Task Inbox dependen de la versión de Host, su configuración y el Agent compatible. El ordenador, Host y el proceso gestionado deben seguir ejecutándose; reiniciar Host o el sistema no restaura los procesos originales. NimoteHost, los terminales remotos persistentes y la continuación de sesiones de IA desde otro dispositivo requieren Pro, incluido un acceso de prueba o Early Access válido. Linux local básico es gratuito en dispositivos Android compatibles. La gestión de herramientas y la importación de carpetas compartidas requieren Pro. Free permite ver el estado y las diferencias de Git, preparar y retirar cambios y crear commits. Las operaciones gráficas de push, pull, ramas y stash, Git AI y la integración avanzada de GitHub requieren Pro. La compleción, los diagnósticos y la navegación LSP básicos son gratuitos con las herramientas configuradas; las acciones de código, la instalación guiada de servidores y la depuración requieren Pro. Consulta los permisos de Gratis y Pro.

Blink Code integra servicios de VS Code; la edición de repositorios y las extensiones documentadas dependen del entorno conectado. No se han confirmado por separado los flujos LSP y AI Agent de Blink y no se les atribuye soporte solo porque pueda abrir un IDE remoto. Sus comandos Unix locales no constituyen un entorno Linux completo. La movilidad de Mosh, la reconexión de tmux y la recuperación estructurada de Agent tienen requisitos distintos.

Acode documenta Alpine Linux en Android y una integración LSP nativa; los servidores de cada lenguaje deben activarse o instalarse. Su AI Agent oficial requiere version code 1002 o superior, un plugin adicional y un proveedor configurado; documenta conversaciones guardadas y aprobaciones. iPhone/iPad sigue marcado Coming soon y no se cuenta como una aplicación iOS publicada de forma general. La ejecución del terminal Android en segundo plano depende de un servicio en primer plano y de la gestión de procesos del sistema. No se confirmaron operaciones gráficas de Git: disponer de Git CLI no es evidencia suficiente.

Replit documenta la edición móvil de proyectos, un panel Git y la revisión de tareas de Agent. Su documentación SSH explica el acceso a una aplicación Replit en la nube, no un cliente SSH móvil para tu ordenador. No se confirmaron la cobertura LSP móvil, los procesos persistentes de terminal ni la recuperación estructurada de Agent con aprobaciones. El tablero de tareas sí está documentado, incluido el acceso móvil mediante Tasks. Codespaces es un entorno de desarrollo en la nube accesible con un navegador o VS Code; poder abrirlo desde un móvil no garantiza una aplicación nativa ni la misma facilidad de uso. Copilot requiere una extensión y acceso independientes. La persistencia solo se aplica a un entorno activo: el tiempo de inactividad y el límite de ejecución documentado detienen los procesos. Un Shell en la nube no es un cliente SSH nativo, y la gestión de tareas de Copilot no se atribuye a Codespaces como bandeja nativa ni recuperación de Agent.

[Permisos Gratis y Pro de NimoteCode](https://nimotecode.com/es/pro) · [Requisitos de Host](https://nimotecode.com/es/docs/host) · [Disponibilidad de Acode para iOS](https://acode.app/ai-coding-ios) · [Dirección de conexión SSH en Replit](https://docs.replit.com/features/workspace-tools/ssh)

### Continuar el desarrollo desde el móvil

| Tarea | Configuración SSH habitual | NimoteCode + Host |
| --- | --- | --- |
| Conectar el móvil al ordenador | SSH | SSH + espacio Host |
| Leer el código del proyecto | Normalmente herramientas de terminal u otro editor | Editor gráfico integrado |
| Editar y revisar cambios | Git CLI u otras herramientas | Editor + Git Diff |
| Continuar al salir de la aplicación | Configuración del host con tmux, Mosh u otros mecanismos | Tareas y sesiones gestionadas por Host |
| Volver a los resultados de IA | Abrir la CLI o reconectar una sesión | Recuperar conversaciones estructuradas de Agent compatibles |
| Responder a aprobaciones de Agent | Depende de la CLI utilizada | Aprobaciones compatibles centralizadas en Host |
| Encontrar trabajo pendiente | Revisar registros o sesiones manualmente | Task Inbox |

La tabla SSH representa una configuración habitual basada en terminal, no todas las funciones de Blink Shell o Termius. El desarrollo remoto y la programación con IA no son exclusivos de NimoteCode. La combinación que conviene evaluar es ejecutar el trabajo en tu ordenador y usar el móvil para revisar código, gestionar terminales, recuperar sesiones de Agent compatibles y responder a las aprobaciones.

### Ventajas de las alternativas y prioridades de mejora

Las prioridades son valoraciones de producto del equipo de NimoteCode, no cuotas de mercado ni clasificaciones de rendimiento medido. Las funciones pueden contrastarse con las fuentes oficiales.

| Alternativa | Ventaja principal | Enfoque de NimoteCode | Prioridad |
| --- | --- | --- | --- |
| Acode | Editor Android, Linux, plugins, IA y ecosistema de código abierto | Mejorar la integridad del IDE móvil y mostrar Host con aprobaciones remotas de Agent | Muy alta |
| Blink Shell | Mosh, terminal, teclado y Blink Code | Mejorar el terminal y mostrar la integración de Host y Git | Muy alta |
| Termius | Gestión de hosts, sincronización, SFTP, Mosh y acceso de equipos | Simplificar la conexión y la continuación de proyectos reales | Alta |
| GitHub Codespaces | Entorno alojado y ecosistema de VS Code | Mostrar el desarrollo en el ordenador y las herramientas existentes del usuario | Media |
| Replit | Creación de aplicaciones con IA, alojamiento y publicación | Centrarse en continuar proyectos existentes con revisión y aprobaciones | Media |
<!-- major-comparison:end -->

## Guías y documentación

| Primeros pasos | Más herramientas |
| --- | --- |
| [Editor](https://nimotecode.com/es/docs/editor) | [Git y GitHub](https://nimotecode.com/es/docs/source-control) |
| [SSH y SFTP](https://nimotecode.com/es/docs/ssh) | [Tareas](https://nimotecode.com/es/docs/tasks) |
| [Terminal](https://nimotecode.com/es/docs/terminal) | [Docker](https://nimotecode.com/es/docs/docker) |
| [Local Linux](https://nimotecode.com/es/docs/local-linux) | [Plugins](https://nimotecode.com/es/docs/plugins) |

[Toda la documentación](https://nimotecode.com/es/docs) · [Preguntas frecuentes](https://nimotecode.com/es/docs/faq) · [Guías prácticas en inglés](resources/README.md) · [Presets Linux](presets/README.md)

## Comunidad y contribuciones

[Informar de un problema](https://github.com/mobiledevloperlab/nimote_issues/issues) · [Discord](https://discord.gg/tTxbpqYmhR) · [X](https://x.com/mobiledevlab) · [Web](https://nimotecode.com/es/)

Incluye versión, dispositivo y sistema, tipo de espacio, pasos de reproducción y logs sin credenciales. Las correcciones de documentación, traducciones y ejemplos son bienvenidas mediante pull requests. Para código Host, visita [NimoteHost](https://github.com/mobiledevloperlab/nimotehost).

## Acerca de este repositorio

**NimoteCode es una aplicación comercial de código cerrado.** Este repositorio contiene la web oficial, documentación, guías y notas de versión; no contiene el código de la aplicación.

[NimoteHost](https://github.com/mobiledevloperlab/nimotehost) utiliza Apache-2.0; [Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE), MIT. Los [paquetes de código y avisos de Local Linux](https://nimotecode.com/es/docs/local-linux-source) cubren componentes de terceros. Estas licencias se aplican a sus componentes respectivos, no a la aplicación ni a todo este repositorio.

<details>
<summary>Mantener el sitio y la documentación</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
node scripts/generate-readme-screenshot.mjs
npm run docs:build
npm run docs:check
```

Node 24 (`.nvmrc`); `npm run docs:dev`.

</details>

---

## Ayúdanos a mejorar NimoteCode

Si NimoteCode te ayuda a programar desde el móvil, dale una [⭐ estrella](https://github.com/mobiledevloperlab/nimotecode) para que otros desarrolladores lo descubran.

¿Tienes una idea, una petición de función o un problema? Envía tus comentarios desde la aplicación o abre un [Issue en GitHub](https://github.com/mobiledevloperlab/nimote_issues/issues). Tu experiencia ayuda a orientar las próximas mejoras.
