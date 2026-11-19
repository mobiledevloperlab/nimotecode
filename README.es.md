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
  <a href="#latest-release">Novedades 2.4.1</a> ·
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

## NimoteCode 2.4.1 ya disponible

- **Interfaz renovada:** mejores diseños de tablet y horizontal, controles del editor y revisión Git móvil.
- **Espacio Host:** reanuda terminales y sesiones Agent compatibles; revisa permisos, resultados y diffs.
- **Transferencias:** mueve archivos y carpetas entre dispositivo y SSH, o importa y exporta localmente.
- **Tareas de proyecto:** descubre tareas compatibles de npm, Taskfile, Makefile, justfile y VS Code.
- **Terminal y trabajo remoto:** búsqueda de historial conservado, selección y portapapeles mejorados, logs de CI y guardado remoto más fiable.

[Notas completas de 2.4.1](https://nimotecode.com/es/releases/2.4.1) · [Descargas oficiales](https://nimotecode.com/es/download)

La disponibilidad y el despliegue en tiendas pueden variar por plataforma y región.

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
