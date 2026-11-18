<p align="center"><img src="docs/public/app_icon_rounded.png" alt="Logotipo de NimoteCode" width="88" height="88"></p>

<h1 align="center">NimoteCode — IDE móvil para Android e iOS</h1>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · Español · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><strong>Tus proyectos, en tu teléfono o tableta.</strong><br>Abre proyectos locales o conéctate por SSH. Edita código, ejecuta comandos, revisa cambios de Git y trabaja con IA en un solo espacio móvil.</p>

<p align="center"><sub>Editor de código&nbsp;&nbsp;•&nbsp;&nbsp;Terminal SSH&nbsp;&nbsp;•&nbsp;&nbsp;Git&nbsp;&nbsp;•&nbsp;&nbsp;Programación con IA<br>Ubuntu sin root en dispositivos Android compatibles</sub></p>

<p align="center"><a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Google_Play-Instalar-34A853?style=for-the-badge&amp;logo=googleplay&amp;logoColor=white" alt="Instalar NimoteCode en Android desde Google Play"></a> <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253"><img src="https://img.shields.io/badge/App_Store-Descargar-0D96F6?style=for-the-badge&amp;logo=appstore&amp;logoColor=white" alt="Descargar NimoteCode para iPhone y iPad desde App Store"></a></p>

<p align="center"><sub><a href="#workspace-demo">Demo</a> · <a href="#nimotehost">NimoteHost</a> · <a href="https://nimotecode.com/es/docs/quick-start">Inicio rápido</a> · <a href="https://nimotecode.com/es/releases/2.4.1">Novedades</a></sub></p>

<p align="center"><sub>Gratis para empezar; configurar la IA es opcional. Aplicación comercial de código cerrado · Código completo de NimoteHost bajo Apache-2.0.</sub></p>

<p align="center"><img src="docs/public/screenshots/nimote-pro.webp" alt="NimoteCode mobile AI Agent and tablet SSH workspace" width="1000"></p>

<a id="workspace-demo"></a>

## Demo

La imagen muestra el Agente de IA en un teléfono y el espacio SSH en una tableta. [Abre el video de demostración](https://github.com/user-attachments/assets/df7de976-e743-415d-9bd1-df396a647e10).

<div align="center">
  <video src="https://github.com/user-attachments/assets/df7de976-e743-415d-9bd1-df396a647e10" controls muted playsinline width="420"></video>
</div>

## Desarrolla donde esté tu proyecto

- **Proyecto local:** abre una carpeta con el selector del sistema y empieza a editar.
- **Host de desarrollo por SSH:** trabaja con archivos remotos, terminal y cambios de Git en el mismo espacio.
- **Linux local en Android:** usa Ubuntu, Bash, Git y SSH mediante PRoot en Android compatible; los proyectos locales se comparten en `/mnt/local`.

Local Linux requiere Android 8 o posterior en dispositivos ARM64 / x86_64 compatibles; no está disponible en iPhone ni iPad. Un host SSH debe estar configurado y ser accesible.

## Capacidades principales

- **Trabajo remoto persistente:** [NimoteHost](https://nimotecode.com/es/docs/host) opcional mantiene terminales, tareas y Agents compatibles tras desconectar; previsto para 2.4.1.
- **Cambia de modo:** elige IDE, Terminal, IA o Host. IDE, Terminal e IA conservan el proyecto; Host conecta al trabajo gestionado por NimoteHost.
- **Desarrolla con contenedores:** administra Docker y Compose en un host SSH, o crea y reconstruye un Dev Container desde `devcontainer.json`.
- **Edita y navega:** usa Nimote Editor en teléfono, tableta y escritorio; busca archivos, usa paneles divididos y previsualiza Markdown y contenido web.
- **Ejecuta y verifica:** usa terminal, tareas de proyecto, teclas adicionales móviles, modo de enfoque, paletas de terminal y proxies SSH SOCKS5 o HTTP CONNECT.
- **Revisa con Git:** consulta estado, diferencias e historial; busca, crea y cambia ramas desde el encabezado de Git.
- **Amplía el espacio de trabajo:** el Centro de plugins de Early Access permite paneles, formularios, flujos, vistas de resultados y tareas de script locales o SSH.

- **Herramientas de lenguaje:** los diagnósticos, el autocompletado y la navegación LSP básicos son gratuitos. Las acciones de código avanzadas, la instalación guiada del servidor y la depuración requieren acceso Pro y servidores de lenguaje o adaptadores adecuados.
- **Carpetas externas:** las carpetas autorizadas por el sistema permiten explorar y editar; Git, LSP, depuración, tareas, vigilancia de archivos y Agent requieren una ruta nativa.
- **Disponibilidad:** las herramientas dependen del espacio de trabajo, las herramientas instaladas y el plan. Consulta la [referencia de funciones](https://nimotecode.com/es/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_features).


<a id="nimotehost"></a>

## NimoteHost: el trabajo sigue en tu ordenador

**NimoteHost** es el complemento opcional que puedes alojar en Linux, macOS o Windows, con CLI y gestor de escritorio. Inicia una tarea desde el móvil, desconecta y vuelve a los terminales, registros y conversaciones compatibles que siguen ejecutándose por SSH.

- Usa Codex, Claude Code y OpenCode compatibles, con herramientas estructuradas, aprobaciones e indicaciones durante la ejecución cuando estén disponibles.
- Busca y fija sesiones; revisa la bandeja de tareas, verificaciones y diffs; envía Issues de GitHub cuando el Host lo permita.
- Despliega paquetes CLI o GUI, compila el código o integra RPC, el cliente Go, MCP y plugins comunitarios.

**NimoteHost 2.4.0 está disponible como versión preliminar**, con todo su código bajo **Apache-2.0** en el [repositorio independiente](https://github.com/mobiledevloperlab/nimotehost) y paquetes compilados en [GitHub Releases](https://github.com/mobiledevloperlab/nimotehost/releases). NimoteCode sigue siendo una aplicación comercial de código cerrado. Su modo Host requiere NimoteCode 2.4.1 o una versión posterior compatible; la disponibilidad en las tiendas es independiente del lanzamiento de Host.

Instala el paquete completo en el ordenador, comprueba `status` y `capabilities` y elige **Host → SSH connections** con la misma cuenta del sistema. SSH normal no necesita Host. El ordenador y Host deben seguir encendidos; reiniciar Host o el sistema interrumpe los procesos. Instala y autentica los Agents por separado; el uso del modelo no está incluido. Las funciones dependen de ambas versiones.

**Elige según el ordenador Host:** aunque descargues desde el móvil, usa el SO y la CPU del Host. Linux y Windows ofrecen CLI y escritorio para `amd64` / `arm64`, además de CLI para `386`; macOS ofrece Intel (`amd64`) y Apple Silicon (`arm64`). No hay compilación ARM de 32 bits. Comprueba los [requisitos de hardware y sistema](https://nimotecode.com/es/docs/host/compatibility) antes de [instalar](https://nimotecode.com/es/docs/host/getting-started). La matriz indica destinos de compilación; la validación completa nativa y móvil/Agent sigue pendiente.

**Revisa, personaliza y contribuye:** compila todo el código del servicio, la CLI, el gestor y los SDK; haz un Fork para adaptar el despliegue o integrar herramientas. Aporta correcciones, adaptadores de Agents, traducciones y documentación mediante la [guía de contribución](https://github.com/mobiledevloperlab/nimotehost/blob/master/CONTRIBUTING.md). SSH, la API autenticada en loopback y las credenciales Host locales permiten controlar el acceso; los modelos usan sus proveedores configurados.

[**Instalación, despliegue y uso →**](https://nimotecode.com/es/docs/host) · [Código y licencia](https://github.com/mobiledevloperlab/nimotehost) · [Descargas](https://github.com/mobiledevloperlab/nimotehost/releases)

## IA para programar a tu manera

| Flujo | Uso |
| --- | --- |
| **AI Chat** | Explica código y salida de terminal con contexto del espacio de trabajo; conecta tu propio proveedor y clave API. |
| **Agente integrado** | Inspecciona archivos, planifica cambios, edita y ejecuta verificaciones; añade instrucciones a una ejecución activa y responde preguntas interactivas. Disponible en Early Access. |
| **Servidores MCP** | Configura servidores MCP verificados para el Agente integrado en un espacio local o SSH; cada llamada requiere aprobación explícita. |
| **Agente ACP externo** | Conecta un entorno compatible en tu host SSH y revisa permisos y progreso en la conversación de la aplicación. |
| **Claude Code / Codex por SSH** | Ejecuta la CLI instalada en tu propio host desde el terminal. |

El acceso a modelos y los tokens no están incluidos. Los agentes externos y las CLI requieren instalación, autenticación y acceso propios; Claude Code y Codex no están incluidos. Revisa comandos y diferencias antes de aceptar cambios generados por IA.

## Empezar

1. Instala NimoteCode desde [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) o la [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).
2. Abre un proyecto local, conecta un host SSH o explora el espacio Demo.
3. Haz un cambio pequeño, ejecuta una comprobación disponible y revisa la diferencia de Git.

> [Guía de inicio rápido →](https://nimotecode.com/es/docs/quick-start?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_quick_start)

**Empieza gratis:** espacios locales y SSH, editor, terminal básico, revisión Git, AI Chat, LSP básico y Tasks basadas en terminal son gratuitos. AI Agent, escritura Git e integración GitHub, Local Linux en Android, múltiples terminales, Host, Docker, herramientas de lenguaje avanzadas y flujos de archivos SSH requieren acceso Pro. Consulta [Gratis y Pro](https://nimotecode.com/es/pro?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_plans) y la aplicación para conocer tus permisos de prueba, suscripción o Early Access. El proveedor cobra el uso del modelo por separado.

La disponibilidad en tiendas y el momento de lanzamiento pueden variar por plataforma y región. Consulta [descargas y requisitos de plataforma](https://nimotecode.com/es/download?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_download).

## Descargas

Descarga para Android en [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode) o para iPhone y iPad en la [App Store](https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253).

[Modo Host: Instalar NimoteHost, conectar por SSH y retomar terminales y tareas Agent.](https://nimotecode.com/es/docs/host)

**NimoteCode 2.4.1 llegará pronto**, con las funciones no publicadas de 2.4.0 y NimoteCode para Windows, macOS y Linux. NimoteHost ya está disponible por separado como versión preliminar; eso no determina cuándo llegará la aplicación compatible a tu tienda.

## NimoteCode 2.4.1 · Próximamente

- **Flujos más pulidos.** Busca en el historial conservado del terminal y consulta colores de estado Git en el explorador; mejoran la selección, el diseño horizontal, el guardado remoto y los procesos simultáneos en Windows. La conexión a sesiones nativas de Agent en Host es experimental y requiere una opción de compilación explícita y un Host compatible.

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

[2.4.1 →](https://nimotecode.com/es/releases/2.4.1)

## Documentación

Elige una guía según tu tarea. El [resumen de documentación](https://nimotecode.com/es/docs) explica los espacios y enlaza configuración, uso y solución de problemas.

- **Primeros pasos:** [Resumen de documentación](https://nimotecode.com/es/docs) · [Inicio rápido](https://nimotecode.com/es/docs/quick-start) · [Preguntas frecuentes de NimoteCode](https://nimotecode.com/es/docs/faq)
- **Espacios y entornos:** [Espacios de trabajo locales y SSH](https://nimotecode.com/es/docs/ssh) · [SSH y SFTP en Windows](https://nimotecode.com/es/docs/windows-ssh-sftp) · [Sincronización y caché](https://nimotecode.com/es/docs/sync-cache) · [Docker y Dev Containers](https://nimotecode.com/es/docs/docker)
- **Editar, ejecutar y usar Git:** [Editor de código](https://nimotecode.com/es/docs/editor) · [Búsqueda en el espacio de trabajo](https://nimotecode.com/es/docs/search) · [Terminal](https://nimotecode.com/es/docs/terminal) · [Tareas](https://nimotecode.com/es/docs/tasks) · [Git y GitHub](https://nimotecode.com/es/docs/source-control) · [Servicios de lenguaje (LSP)](https://nimotecode.com/es/docs/lsp) · [Depuración](https://nimotecode.com/es/docs/debug)
- **IA y extensiones:** [Proveedores y modelos de IA](https://nimotecode.com/es/docs/configuration) · [Chat, Agents y MCP](https://nimotecode.com/es/docs/ai) · [Plugins personalizados](https://nimotecode.com/es/docs/plugins)
- **Modo Host:** [Resumen](https://nimotecode.com/es/docs/host) · [Hardware y selección de paquetes](https://nimotecode.com/es/docs/host/compatibility) · [Descarga e instalación](https://nimotecode.com/es/docs/host/getting-started) · [Solución de problemas](https://nimotecode.com/es/docs/host/troubleshooting)
- **Local Linux en Android:** [Resumen](https://nimotecode.com/es/docs/local-linux) · [Requisitos y compatibilidad](https://nimotecode.com/es/docs/local-linux/compatibility) · [Instalación y primer uso](https://nimotecode.com/es/docs/local-linux/getting-started) · [Solución de problemas](https://nimotecode.com/es/docs/local-linux/troubleshooting)
- **Ajustes y referencias:** [Ajustes](https://nimotecode.com/es/docs/settings) · [Cuenta y suscripción](https://nimotecode.com/es/docs/account-subscription) · [Notificaciones](https://nimotecode.com/es/docs/notifications) · [Credenciales y revisión de operaciones](https://nimotecode.com/es/docs/security)

### Guías y recursos

- [Sitio oficial](https://nimotecode.com/es/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_website)
- [Funciones](https://nimotecode.com/es/features?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_features)
- [Documentación de Linux local](https://nimotecode.com/es/docs/local-linux)
- [Guías de desarrollo móvil](resources/README.md) — edición local, desarrollo remoto, Git y flujos de IA (en inglés).
- [Preajustes de Linux](https://github.com/mobiledevloperlab/nimote-linux-presets) — entornos opcionales con manifiestos versionados y scripts de verificación.

## Preguntas frecuentes

**¿En qué se diferencia de Termux, Acode y code-server?** NimoteCode reúne editor táctil, cliente SSH, terminal, Git e IA en una aplicación móvil, con Local Linux opcional en Android. Termux se centra en la terminal y los paquetes de Android; Acode es un editor móvil; code-server ejecuta VS Code en el navegador.

**¿Necesito un servidor SSH?** No. Puedes abrir una carpeta local o el espacio Demo. Para usar SSH necesitas un host configurado y accesible.

**¿Puedo ejecutar código en el teléfono?** Los dispositivos Android compatibles pueden usar Local Linux. En iPhone y iPad puedes usar un host remoto por SSH. La ejecución depende de las herramientas instaladas.

**¿Está incluida la IA?** La configuración es opcional. Debes aportar tu proveedor y clave API; el uso del modelo puede tener costes adicionales. El Agente integrado requiere Early Access.

**¿Es de código abierto?** La aplicación es comercial y de código cerrado. Este repositorio contiene documentación y recursos. El [complemento NimoteHost](https://github.com/mobiledevloperlab/nimotehost) ofrece todo su código bajo Apache-2.0; esa licencia se aplica a Host, no a la aplicación.

[Más preguntas frecuentes](https://nimotecode.com/es/docs/faq).

## Compara herramientas móviles

**Editar → ejecutar verificaciones → revisar diferencias → ampliar el espacio de trabajo, en un solo IDE móvil.** La columna de NimoteCode refleja la compilación no publicada de 2.4.0, incluida en 2.4.1; `?` significa que la capacidad no se ha verificado para ese producto.

| Capacidad | **NimoteCode** | Termius | Blink Shell | ServerCC |
| --- | :---: | :---: | :---: | :---: |
| Conexión SSH | ✅ | ✅ | ✅ | ✅ |
| Editor de código | ✅ | ? | ✅ | ? |
| Plugins / paneles personalizados | ✅ ¹ | ? | ? | ? |
| Git / interfaz de diferencias | ✅ ¹ | ? | ◐ | ✅ |
| Ramas de Git | ✅ ¹ | ? | ? | ? |
| Agente de IA integrado | ✅ ¹ | ? | ? | ? |
| Continuar un Agente de IA activo | ✅ ¹ | ? | ? | ? |
| Servidores MCP integrados | ✅ ¹ | ? | ? | ? |
| Diagnósticos LSP | ✅ ¹ | ? | ◐ | ? |
| Vista previa web / de aplicación | ✅ | ? | ? | ✅ |
| Proxy SSH SOCKS5 / HTTP CONNECT | ✅ | ? | ? | ? |
| Linux local de Android | ✅ ² | ? | ? | ? |
| Transporte Mosh | ? | ✅ | ✅ | ? |

<details><summary>Comparar Redock, Orca y Moshi</summary>

| Capacidad | **NimoteCode** | Redock | Orca | Moshi |
| --- | :---: | :---: | :---: | :---: |
| Conexión SSH | ✅ | ✅ | ◐ | ✅ |
| Editor de código | ✅ | ? | — | ? |
| Plugins / paneles personalizados | ✅ ¹ | ? | ? | ? |
| Git / interfaz de diferencias | ✅ ¹ | ? | ✅ | ✅ |
| Ramas de Git | ✅ ¹ | ? | ? | ? |
| Agente de IA integrado | ✅ ¹ | ? | ? | ? |
| Continuar un Agente de IA activo | ✅ ¹ | ? | ? | ? |
| Servidores MCP integrados | ✅ ¹ | ? | ? | ? |
| Diagnósticos LSP | ✅ ¹ | ? | ? | ? |
| Vista previa web / de aplicación | ✅ | ✅ | ✅ | ✅ |
| Proxy SSH SOCKS5 / HTTP CONNECT | ✅ | ? | ? | ? |
| Linux local de Android | ✅ ² | ? | ? | ? |
| Transporte Mosh | ? | ✅ | ? | ✅ |

Orca móvil requiere su aplicación complementaria de escritorio. Las diferencias y vistas previas de Moshi requieren Pro y un hook del host. La vista previa de Redock utiliza un servidor de desarrollo del host.

</details>

¹ Centro de plugins, Agente —incluidas instrucciones durante la ejecución y servidores MCP configurados—, operaciones de escritura Git y herramientas LSP avanzadas forman parte de Early Access; estado, diferencias e historial de Git y LSP básico son gratuitos. ² Requiere Android 8+ ARM64 / x86_64 compatible; el Agente integrado necesita tu proveedor de IA y LSP necesita un servidor de lenguaje configurado en el host.

Una marca no significa que la función sea gratuita, no requiera configuración ni esté disponible en todas las plataformas. La edición de Blink se integra mediante Blink Code; Git y LSP dependen de la configuración del repositorio o del IDE remoto. Mosh de Termius se verificó aquí solo en Android.

> [Comparación completa con fuentes oficiales →](https://nimotecode.com/es/compare/mobile-ai-development-tools?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=es_comparison)

## Contribuir

Se agradecen las mejoras a la documentación y los ejemplos mediante pull requests. Para informar de problemas de la aplicación o proponer funciones, usa el [rastreador de incidencias](https://github.com/mobiledevloperlab/nimote_issues/issues); incluye los pasos para reproducir el problema y las versiones del dispositivo y de la aplicación. El código de la aplicación no está en este repositorio.

## Comunidad

Comparte un error, pregunta o flujo de trabajo que te gustaría ver compatible.

<p align="center"><a href="https://discord.gg/tTxbpqYmhR">Discord</a> · <a href="https://github.com/mobiledevloperlab/nimote_issues/issues">Informar de un problema</a> · <a href="https://x.com/mobiledevlab">X</a></p>

## Acerca de este repositorio

El [complemento NimoteHost](https://github.com/mobiledevloperlab/nimotehost) ofrece todo su código bajo Apache-2.0; esa licencia se aplica a Host, no a la aplicación.

NimoteCode es una aplicación comercial de código cerrado. Este repositorio contiene documentación oficial, tutoriales, ejemplos de flujo de trabajo y notas de versión; el código fuente de la aplicación no se publica. Los preajustes de Linux se mantienen en un repositorio separado y los informes de errores usan el rastreador enlazado arriba.

Los [paquetes de código fuente y avisos de licencia de Local Linux](https://nimotecode.com/es/docs/local-linux-source) cubren componentes de terceros; no hacen que NimoteCode sea de código abierto.


La [licencia MIT de Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets/blob/master/LICENSE) se aplica a ese repositorio, no a la aplicación ni a todo este contenido.

<details>
<summary>Mantener el sitio y la documentación</summary>

```bash
nvm install
nvm use
npm ci
npm ci --prefix blog
npm run docs:build
npm run docs:check
```

Node 24 (`.nvmrc`); `npm run docs:dev`.

</details>
