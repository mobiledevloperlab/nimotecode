---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: Android Local Linux, flexible local and SSH workspaces, split editing, live HTML and media preview, terminal, Git, AI Chat and external agents, LSP, debugging, tasks and sync/cache."
---

# Características de NimoteCode


NimoteCode mantiene el ciclo de desarrollo esencial en un espacio de trabajo móvil: **Explorador → Editor → Vista previa → Terminal → Git → AI**. Comience con un proyecto en su dispositivo, un host SSH o Ubuntu incluido a través de Android Local Linux. Esta página enumera lo que hace cada función y si está incluida en el nivel gratuito o requiere Pro.


> **Android Local Linux es solo para Android.** En dispositivos Android 8+ ARM64 y x86_64 compatibles, proporciona un espacio de trabajo Ubuntu sin raíz con Bash, Git y SSH. En su lugar, iPhone y iPad utilizan espacios de trabajo locales y SSH.


<div class="feature-showcase" role="region" tabindex="0" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
  </div>
</div>

## Todo lo que obtienes gratis


El nivel gratuito es un espacio de trabajo completo, no una vista previa. Todo lo siguiente funciona sin una suscripción Pro a menos que esté marcado como **Pro**.
Funciones de 

| Feature | What it gives you | Access |
| --- | --- | --- |
| **Local, [Local Linux](/docs/local-linux) & SSH workspaces** | Open local projects, saved SSH workspaces, or rootless bundled Ubuntu on supported Android devices. Switch the current directory when work moves, then return to recently used folders. Install, start, stop, reset, or delete Local Linux from the workspace flow. | Free |
| **Code editor** | Work in tabs or two independent split panes; save, use clipboard and undo/redo, follow cursor context, and inspect images or supported audio/video without leaving the app. | Free |
| **Web & media preview** | Open local or remote web projects in-app, preview the current HTML contents—including unsaved changes—with workspace CSS, JavaScript, and image assets, or open links from Terminal, AI replies, and tool output. | Free |
| **Terminal & SSH environment** | Run commands in the active workspace, search output, use shortcuts, and reconnect reliably. SSH workspaces load the account’s normal shell environment, so PATH, locale, SSH agent, and custom variables are available consistently to remote tools. | Free |
| **Git review** | Inspect repository status, diffs, branches, and history. In Android Local Linux, Git operates inside the Linux workspace so status and history match its files. | Free |
| **AI Chat** | Explain code, inspect error output, and plan or continue a task with current-file, workspace, recent-task, and Agent context. | Free |
| **Tasks** | Save repeated workspace commands, organize them in groups, and run them directly where the project lives. | Free |

## Pro


Con la versión 1.1.8, **Early Access Pro** abre los flujos de trabajo a continuación a medida que se expande la disponibilidad. Consulte Google Play o App Store para conocer la oferta y el precio que se muestran para su cuenta y región.


| Feature | What it gives you | Access |
| --- | --- | --- |
| **AI Agent & external ACP agents** | Run controlled multi-step workflows across files, Terminal, and Git tools. In an SSH workspace, choose a compatible ACP runtime—such as Claude Code or Codex CLI when configured—review permissions and progress in one timeline, and use `/` commands with touch or keyboard completion. | Early Access Pro |
| **Git write** | Commit, push and stash, plus branch/checkout/merge actions — with review before you act. | Early Access Pro |
| **Remote search** | Global content search across a remote workspace. | Early Access Pro |
| **Multi-terminal** | Keep parallel sessions for logs, tests, services and deployments. | Early Access Pro |
| **LSP** | Configured remote language-server diagnostics, code actions and navigation. | Early Access Pro |
| **Debugger** | Breakpoints and runtime inspection through a configured debug adapter. | Early Access Pro |
| **Sync / Cache** | Move project content between local and remote workspaces with explicit direction and history. | Early Access Pro |

## Agregado recientemente al espacio de trabajo

- **Un espacio de trabajo personalizable.** Plugin Center permite gestionar capacidades y crear complementos con paneles, formularios, flujos de trabajo, vistas de artefactos y trabajos de script locales o SSH. Revise los cambios de permisos antes de instalar o actualizar.
- **Colaboración continua con Agent.** Añada instrucciones de seguimiento a un Agent activo, responda preguntas interactivas y siga trabajos largos con vistas renovadas de contexto, historial, edición de prompts y cronología.
- **Git, terminal y conexiones más directos.** Busque, cree y cambie ramas desde el encabezado de Git; envíe salida de terminal a AI cuando necesite interpretarla. Los espacios SSH también admiten proxies SOCKS5 y HTTP CONNECT.


- **Directorios de espacio de trabajo flexibles.** Los proyectos locales y SSH pueden cambiar a otro directorio y conservar ubicaciones recientes para un retorno rápido.

- **Confiabilidad de Android Local Linux.** El entorno Ubuntu ahora tiene límites de acceso a archivos más claros y una configuración más confiable, Git y manejo de archivos de tareas. Estas mejoras se aplican sólo a Android.

- **Un bucle de vista previa más completo.** La edición dividida, las instantáneas HTML en vivo, la vista previa de medios integrada y la apertura de enlaces compartidos hacen que sea práctico inspeccionar un resultado antes de abandonar el espacio de trabajo.

- **Flujos de trabajo de agentes que se adaptan a su entorno.** Los tiempos de ejecución de ACP externos, la finalización de comandos de barra diagonal, el manejo del entorno de inicio de sesión SSH compartido y los diagnósticos de entornos seguros mantienen alineados Terminal, Tareas, Depuración, servidores de idiomas, Git y agentes.


## Una forma práctica de utilizar las funciones


1. Conéctese a través de [SSH Workspace](/docs/ssh), abra un proyecto local o use [Android Local Linux](/docs/local-linux) en un dispositivo compatible.

2. Localice y edite el archivo en [Editor](/docs/editor).

3. Verifíquelo en [Terminal](/docs/terminal); salida de búsqueda o contenido remoto cuando sea necesario.

4. Pídale a [AI Chat y Agente](/docs/ai) que explique un error o planifique un cambio.

5. Utilice [Control de fuente](/docs/source-control) para revisar el resultado; Se requiere Pro cuando el paso de entrega necesita una acción de escritura Git cerrada.


> Las funciones tienen en cuenta deliberadamente los permisos y el entorno. Por ejemplo, LSP y Debug dependen del servidor de idioma o del adaptador de depuración que se configure en el host remoto, y la salida de AI debe revisarse antes de usarse en sistemas sensibles.


## Explore el flujo de trabajo SSH


Si está evaluando cómo estas funciones se adaptan a una sesión SSH, consulte el flujo de trabajo [cliente SSH de Android](/android-ssh-client), lea [la guía de IDE móvil](/blog/best-ssh-clients) o abra la [descripción general de SSH IDE](/ssh-ide) para ver el ciclo completo de desarrollo remoto.
