---
title: "IDE para Android con Linux local, SSH, Git e IA | NimoteCode"
description: "Programa en Android con NimoteCode: edita código, usa Linux sin root, conecta por SSH a Windows, Mac o Linux y revisa cambios con Git y asistencia de IA."
pageClass: android-ide-page
---

# IDE para Android: Linux local y desarrollo remoto por SSH

¿Necesitas editar un script de Python en la tablet, ejecutar un comando en tu PC de desarrollo o revisar cambios desde el móvil? Empieza por decidir dónde estarán el proyecto y sus herramientas. NimoteCode permite trabajar con carpetas locales, Linux en el dispositivo o un equipo remoto por SSH desde una sola aplicación Android.

**NimoteCode es un IDE móvil con editor de código, explorador de proyectos, terminal, Git y asistencia de IA configurable.** Busca el archivo, edítalo y guárdalo; después comprueba el resultado en el entorno adecuado. Puedes usarlo en móviles y tablets y dividir el editor cuando necesites comparar archivos.

<div class="seo-cta">
  <p><strong>Abre un proyecto en Android y elige el entorno que necesita tu trabajo.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Descargar en Google Play</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Leer la guía de inicio</a>
  </p>
</div>

<div class="android-ide-media">
  <DocScreenshot file="editor-code-selection.png" caption="Editor Android con benchmark.py abierto: resaltado de sintaxis Python, números de línea e indicador de archivo modificado." />
</div>

## Elige dónde se ejecutan el código y los comandos

Editar archivos locales y ejecutar herramientas Linux son funciones distintas. Abrir una carpeta no instala las herramientas del lenguaje. Elige el espacio de trabajo antes de preparar las dependencias.

| Espacio de trabajo | Ubicación de archivos y herramientas | Uso recomendado |
| --- | --- | --- |
| Carpeta local | Carpeta autorizada del dispositivo; la ejecución requiere un entorno configurado | Editar código, documentación o configuración |
| Local Linux | Espacio de usuario Ubuntu en Android mediante PRoot, sin root | Scripts de shell, Git y proyectos CLI compatibles |
| SSH remoto | Equipo Windows, Mac o Linux | Proyectos existentes, herramientas del equipo y compilaciones grandes |

## Usa una terminal Linux en Android sin root

[Local Linux](/es/docs/local-linux) proporciona un espacio de usuario Ubuntu con Bash, Git y SSH en **dispositivos compatibles con Android 8 o posterior y una aplicación de 64 bits ARM64 o x86_64**. Instala el entorno incluido desde Local Linux, inícialo y abre su espacio de trabajo. No necesitas otro ordenador de desarrollo.

Puedes ejecutar scripts, utilidades ligeras y proyectos de lenguajes compatibles. Las herramientas del lenguaje, los servidores de lenguaje y los adaptadores de depuración se instalan por separado. Descargar paquetes adicionales puede requerir internet; el rendimiento y la compatibilidad dependen del dispositivo y las herramientas.

Identifica la distribución con `cat /etc/os-release`. La salida de `uname -a` corresponde al kernel Android compartido. Local Linux utiliza PRoot, no una máquina virtual, y no está disponible en iOS ni en ARM de 32 bits. Consulta la [guía de compatibilidad](/es/docs/local-linux/compatibility).

<div class="android-ide-media">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Bash en Local Linux ejecutando uname -a: muestra el kernel Android compartido y la arquitectura aarch64." />
</div>

## Conecta por SSH a Windows, Mac o Linux

Con un [espacio de trabajo SSH](/es/docs/ssh), el proyecto permanece en tu equipo de desarrollo mientras exploras y editas archivos o ejecutas comandos desde Android. Se utilizan las herramientas instaladas y los permisos del equipo, conservando sus dependencias y entorno de compilación.

Configura el servidor, puerto, usuario y autenticación; después selecciona la raíz del repositorio. Verifica la huella de la clave del servidor en la primera conexión. Windows utiliza PowerShell y SFTP; Mac y Linux utilizan la shell configurada en el equipo. Comprueba la carpeta y la rama antes de editar y guarda antes de ejecutar las comprobaciones.

El equipo debe estar encendido y ser accesible. Fuera de la red local, prepara una ruta segura, por ejemplo una VPN. SSH por sí solo no garantiza que un proceso continúe tras una desconexión.

<div class="android-ide-media">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer muestra la conexión SSH activa, el servidor, usuario, puerto y la raíz del proyecto sorting-demo." />
</div>

## Revisa cambios con Git y continúa en GitHub

En [Control de código fuente](/es/docs/source-control) puedes consultar archivos modificados y sin seguimiento, cambios preparados, diferencias e historial de commits. Comprueba la rama y lee el parche antes de confirmar. Las operaciones utilizan el repositorio y las credenciales del espacio de trabajo activo.

La página GitHub permite explorar repositorios, issues, pull requests, comprobaciones y ejecuciones de workflows, y clonar en el dispositivo, Local Linux o un equipo SSH. Las acciones dependen de tus permisos de cuenta y repositorio. Clonar no instala las dependencias: ejecuta las comprobaciones del proyecto en el entorno elegido.

<div class="android-ide-media">
  <DocScreenshot file="source-control-changes.png" caption="Control de código fuente separa Changes y Staged Changes y ofrece selección de rama e historial de commits." />
</div>

## Trabaja con AI Chat y Agent en tu proyecto

Pide a Chat que explique código seleccionado o ayude a interpretar un error. Elige Nimote Agent para tareas que requieren herramientas del espacio de trabajo. En modo **Confirm**, revisa el plan y aprueba la ejecución antes de que empiecen las herramientas. Después, comprueba los archivos guardados, el diff y las verificaciones del proyecto.

Configura tu proveedor de modelos antes de utilizar la IA. El proveedor factura el uso del modelo por separado. Los agentes ACP externos necesitan su propio entorno de ejecución compatible y credenciales en el destino elegido. La [guía de IA](/es/docs/ai) explica Chat, Agent, agentes externos y MCP.

<div class="android-ide-media">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Nimote Agent en modo Confirm muestra un plan de inspección del proyecto y espera la aprobación mediante Approve this run." />
</div>

## De la instalación al primer cambio verificado

1. Instala NimoteCode desde Google Play y abre una carpeta local, instala Local Linux o conecta un equipo SSH.
2. Confirma la raíz del proyecto y la rama. Prepara los comandos necesarios en el entorno de ejecución.
3. Edita un archivo, guarda y ejecuta las pruebas, el lint o la compilación que indica el proyecto.
4. Lee los cambios en Control de código fuente y confirma o comparte cuando las comprobaciones y los permisos lo permitan.

Para un solo comando puede bastar un cliente SSH; para corregir texto, un editor básico. NimoteCode resulta útil cuando necesitas el árbol del proyecto, edición, terminal, revisión Git e IA en una misma aplicación. Las compilaciones grandes y las herramientas incompatibles con PRoot necesitan un equipo remoto adecuado. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso que muestra la aplicación.

## Preguntas sobre el IDE para Android

### ¿Necesito root para ejecutar Linux?

No. Local Linux utiliza PRoot en dispositivos compatibles con Android 8 o posterior y una aplicación de 64 bits ARM64 o x86_64. Las herramientas se instalan por separado y no todas las cargas Linux son compatibles.

### ¿Puedo programar sin un ordenador remoto?

Sí. Puedes editar archivos locales y ejecutar herramientas compatibles en Local Linux desde un dispositivo Android compatible. La configuración inicial y las descargas pueden requerir internet; la IA en la nube y GitHub necesitan conexión con sus servicios.

### ¿Es lo mismo que Android Studio?

No. NimoteCode es un IDE móvil para edición, terminal, Git, IA y proyectos Linux locales o SSH. No incluye todas las herramientas de Android Studio ni un emulador Android. Ejecuta las compilaciones que las necesiten en un equipo configurado para ello.

### ¿La descarga es gratuita?

NimoteCode se puede descargar desde Google Play; algunas funciones requieren acceso Pro. La disponibilidad depende de la cuenta, la versión y la región de la tienda. El proveedor del modelo factura su uso por separado.

<div class="seo-cta">
  <p><strong>Abre un proyecto en Android y elige el entorno que necesita tu trabajo.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&amp;utm_source=nimotecode&amp;utm_medium=organic&amp;utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">Descargar en Google Play</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Leer la guía de inicio</a>
  </p>
</div>

## Consulta las funciones y su configuración

- [Editor y paneles divididos](/es/docs/editor)
- [Configurar Local Linux en Android](/es/docs/local-linux)
- [Configurar SSH](/es/docs/ssh)
- [Git y GitHub](/es/docs/source-control)
- [Funciones Gratis y Pro](/es/pro)

- [Configuración y diagnóstico de Windows 11](/es/docs/windows-ssh-sftp)
