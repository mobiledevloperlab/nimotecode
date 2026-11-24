---
title: Inicio rápido | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Inicio rápido."
---

# Inicio rápido

Abre un espacio de trabajo, edita un archivo y ejecuta tu primer comando. Sigue los pasos siguientes; configura la conexión del modelo cuando vayas a usar el Agent.

- [Abrir un espacio de trabajo](#abrir-un-espacio-de-trabajo)
- [Abrir y editar un archivo](#abrir-y-editar-un-archivo)
- [Ejecutar un comando](#ejecutar-un-comando)
- [Ejecutar AI Agent](#ejecutar-ai-agent)

## Abrir un espacio de trabajo

NimoteCode 2.5.0 incorpora una barra flotante para cambiar de panel en teléfonos en vertical. Desde el editor vacío de un solo panel puedes abrir el explorador de archivos.

En NimoteCode 2.5.0 puedes [conectar con un equipo vinculado mediante Tailscale personal](/es/docs/ssh#paired-computers), [reanudar un terminal SSH con tmux](/es/docs/terminal#persistent-ssh-terminal) o [instalar NimoteHost por SSH](/es/docs/host/getting-started#install-over-ssh).

En el IDE completo puedes abrir archivos del dispositivo, conectar por SSH, abrir un proyecto de GitHub o usar Local Linux en Android compatible. También puedes explorar el proyecto de ejemplo.

La aplicación ofrece cuatro modos: **Terminal rápido** para SSH, Linux y comandos; **Espacio de trabajo de IA** para conversaciones, agentes y tareas; **IDE completo** para archivos, Git y desarrollo con IA; y **Host** para tareas remotas y sesiones de Agent persistentes con NimoteHost. Usa el selector de modo para cambiar de vista. La ubicación del proyecto se elige por separado: puedes editar archivos del dispositivo, pero ejecutar comandos requiere SSH o Local Linux.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="Pantalla de bienvenida con tema claro." />
  <DocScreenshot file="mode-switch.png" caption="Cambia de modo desde el menú del espacio en el IDE completo." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Abrir y editar un archivo

Seleccione el directorio del proyecto y abra un archivo en Explorer. Edítelo y guárdelo antes de ejecutar un comando que lo lea del disco. Consulte [Editor](/es/docs/editor) para las funciones de selección, navegación y vista previa.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="Archivos Python y Markdown abiertos en pestañas distintas." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Ejecutar un comando

En un espacio SSH o Local Linux, abra Terminal y ejecute `pwd` para comprobar el directorio de trabajo. Ejecute las pruebas o la compilación del proyecto y revise los archivos modificados en [Control de código fuente](/es/docs/source-control). Abrir una carpeta local por sí solo no proporciona un entorno Linux.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="Terminal con los archivos del proyecto enumerados por el comando ls." />
</div>

</div>

## Ejecutar AI Agent

Use AI Agent para inspeccionar el proyecto y explicar la relación entre sus archivos.

1. Añada un proveedor y configure el acceso al modelo en [Configuración](/es/docs/configuration).
2. Con el espacio del proyecto abierto, abra el panel de IA, elija un modelo configurado y seleccione **Nimote Agent**.
3. Seleccione el modo **Confirm** y envíe una petición como «Explica este proyecto». La petición de las capturas es «Explain this project».
4. Revise el plan y seleccione **Approve this run** para permitir la ejecución de herramientas. Siga la lectura de archivos y los resultados en la cronología.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Modo Confirm: revise el plan de inspección del proyecto antes de aprobar la ejecución." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Resultado del Agent: pruebas Python añadidas, salida correcta y diff de Git." />
</div>

Lea la respuesta junto con las limitaciones indicadas, como archivos que no se pudieron inspeccionar. Puede enviar instrucciones adicionales durante la ejecución. Consulte [AI Chat y Agent](/es/docs/ai) para la selección y los controles del agente.

## Configurar herramientas opcionales

Los servidores de lenguaje y los adaptadores de depuración se configuran por separado; consulte [LSP](/es/docs/lsp) y [Depuración](/es/docs/debug).
