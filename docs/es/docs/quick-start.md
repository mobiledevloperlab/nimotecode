---
title: Inicio rápido | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Inicio rápido."
---

# Inicio rápido

<figure class="quick-start-hero">
  <img src="/screenshots/nimote-pro.webp" width="1440" height="810" alt="NimoteCode en una tableta y un teléfono, con espacios locales y SSH, edición de código, Git, terminal, IA, depuración y sincronización." decoding="async" fetchpriority="high">
</figure>

## Abrir un espacio de trabajo

Elija un espacio en la pantalla de bienvenida. **Open Local Workspace** abre archivos del dispositivo; **Connect Remote Workspace** conecta con un host SSH. **Local Linux** instala Ubuntu en dispositivos Android compatibles. Para explorar la interfaz sin configurar un host, elija **Try Demo Workspace**.

<div class="doc-screenshots">
  <DocScreenshot file="startup-light.jpg" caption="Pantalla de bienvenida con tema claro." />
  <DocScreenshot file="startup-dark.jpg" caption="Pantalla de bienvenida con tema oscuro." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Abrir y editar un archivo

Seleccione el directorio del proyecto y abra un archivo en Explorer. Edítelo y guárdelo antes de ejecutar un comando que lo lea del disco. Consulte [Editor](/es/docs/editor) para las funciones de selección, navegación y vista previa.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-multiple-files.jpg" caption="Los archivos abiertos aparecen en pestañas; webapp.py está activo en este ejemplo." />
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
  <DocScreenshot file="ai-plan-running.jpg" caption="Tras la aprobación, el agente lee los archivos y registra el progreso." />
</div>

Lea la respuesta junto con las limitaciones indicadas, como archivos que no se pudieron inspeccionar. Puede enviar instrucciones adicionales durante la ejecución. Consulte [AI Chat y Agent](/es/docs/ai) para la selección y los controles del agente.

## Configurar herramientas opcionales

Los servidores de lenguaje y los adaptadores de depuración se configuran por separado; consulte [LSP](/es/docs/lsp) y [Depuración](/es/docs/debug).
