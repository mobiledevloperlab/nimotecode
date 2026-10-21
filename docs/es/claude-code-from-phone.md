---
title: "Use Claude Code From Your Phone with SSH | NimoteCode"
description: "Learn a practical way to use Claude Code from your phone: connect to a development host over SSH, work in the project files, validate in terminal and review Git changes in NimoteCode."
---

# Cómo usar Claude Code desde tu teléfono


Si su máquina de desarrollo ya tiene instalado Claude Code, puede usar su teléfono para permanecer conectado a ese flujo de trabajo a través de SSH. El desafío no es solo ver el resultado de la CLI. También es necesario inspeccionar los archivos que analiza, validar sus sugerencias y revisar los cambios resultantes.


NimoteCode le brinda un espacio de trabajo móvil alrededor de esa sesión remota: Explorador para el repositorio, Editor para los archivos, Terminal SSH para comandos, Git para revisión y su propia asistencia de IA para preguntas de código y tareas controladas.


<ImagePlaceholder image-key="claudeCodeFromPhone" alt="Claude Code from phone remote workflow">
  <strong>Image placeholder — Remote Claude Code workflow</strong>
  <span>Replace with a redacted remote CLI session, changed file and Git diff. Do not use Claude branding without approval.</span>
</ImagePlaceholder>

## Una práctica configuración de host remoto


1. Instale y autentique Claude Code en el host de desarrollo remoto de acuerdo con su propia documentación.

2. En NimoteCode, conéctese a ese host con un perfil [SSH Workspace](/docs/ssh) y seleccione la raíz del proyecto.

3. Abra el proyecto en el Explorador y use la terminal SSH para iniciar o continuar su sesión de Claude Code.

4. Utilice el editor para inspeccionar los archivos y los cambios en discusión.

5. Ejecute las comprobaciones del proyecto en Terminal, luego revise la diferencia en [Control de fuente](/docs/source-control) antes de confirmar.


Este es un flujo de trabajo de terminal remota: NimoteCode no pretende ser el producto de Claude Code ni reemplazar la propia configuración de Claude Code. Hace que el proyecto circundante funcione más manejable desde un teléfono o tableta.


## Mantener al agente conectado a tierra en la verificación


Un agente puede acelerar una tarea limitada, pero no puede eliminar la necesidad de comprender el entorno. En dispositivos móviles, un buen hábito es mantener cada bucle pequeño: solicite el plan, inspeccione el archivo tocado, ejecute la verificación correspondiente y revise Git antes de enviarlo. Si la tarea es adyacente a la producción, utilice confirmaciones y siga el proceso de implementación de su equipo.


## Cuando NimoteCode es útil junto con Claude Code


- Necesitas investigar un repositorio mientras viajas o estás de guardia.

- Claude Code se está ejecutando en un host de desarrollo de Linux al que puede acceder mediante SSH.

- Quieres un explorador de proyectos y una vista de revisión de Git junto a la sesión de terminal.

- Debe convertir la sugerencia de un agente en un cambio verificable y revisable.


Para la configuración del proveedor de IA dentro de NimoteCode, consulte [Chat y agente de IA](/docs/ai). Para obtener orientación más amplia, lea [Codificación AI móvil](/mobile-ai-coding).


## Limitaciones de este flujo de trabajo


Esta configuración supone que Claude Code ya se ejecuta en un host al que puede acceder mediante SSH, por lo que un teléfono se conecta a ese host en lugar de ejecutar el agente localmente. Depende de las mismas cosas que siempre depende del desarrollo remoto: un host accesible, una conexión estable y sus propias credenciales de Claude Code. Las sesiones de agente de larga duración son aún más fáciles de supervisar en una computadora de escritorio; en un teléfono, prefiera bucles cortos y de alcance limitado. NimoteCode no es Claude Code y no puede solucionar problemas dentro de la propia configuración de Claude Code.


## Preguntas frecuentes


### ¿Necesito NimoteCode para usar Claude Code en mi teléfono?


No. NimoteCode es un espacio de trabajo móvil que mantiene el trabajo del proyecto circundante conectado a través de SSH (Explorador, editor, terminal y revisión de Git) mientras Claude Code se ejecuta y se autentica en su propio host de desarrollo.


### ¿NimoteCode ejecuta Claude Code por mí?


No. NimoteCode no es el producto de Claude Code y no reemplaza su configuración. Usted instala y autentica Claude Code en el host remoto, luego usa el terminal SSH para iniciar o continuar una sesión.


### ¿Puedo ejecutar Claude Code desde un teléfono sin una computadora remota?

No con este flujo de trabajo. Claude Code se ejecuta en un host al que se accede mediante SSH, por lo que un teléfono se conecta a ese host en lugar de ejecutar el agente localmente.


<div class="seo-cta">
  <p><strong>Bring your SSH project, terminal and review workflow to the phone.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=claude_code_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## Continuar leyendo


- [Códex del teléfono](/codex-from-phone)

- [SSH IDE para desarrollo remoto](/ssh-ide)

- [Demostración del agente AI](/use-cases/)

- [¿Puede realmente un agente de IA codificar desde un teléfono?](/blog/can-an-ai-agent-really-code-from-a-phone)
