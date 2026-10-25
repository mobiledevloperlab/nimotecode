---
title: Mobile Terminal | NimoteCode SSH Workspace
description: Run workspace commands in NimoteCode, open project URLs in in-app preview, search terminal output, use quick commands and keep advanced multi-terminal contexts with Pro.
---

# Terminal móvil


Terminal es la capa de verificación de un espacio de trabajo de NimoteCode. Ejecute comandos donde esté editando, busque el resultado y mantenga el resultado conectado a los archivos y a la siguiente decisión.


<ImagePlaceholder image-key="terminal" alt="NimoteCode mobile terminal">
  <strong>Image placeholder — Terminal in the active workspace</strong>
  <span>Replace with a screenshot of terminal output, search and a nearby editor tab in a real SSH project.</span>
</ImagePlaceholder>

## Flujo de trabajo del terminal central


- Ejecute comandos en el espacio de trabajo local o SSH activo.

- Inspeccione la salida de streaming y busque registros largos en busca de errores o advertencias.

- Utilice comandos rápidos o personalizados para rutinas conocidas.

- Abra una URL emitida por un proyecto web local o remoto directamente en la vista previa del navegador en la aplicación; Los enlaces web en las respuestas de IA y la salida de la herramienta utilizan la misma acción.

- Envíe la salida relevante del terminal directamente a [AI Chat and Agent](/docs/ai) cuando sea útil interpretarla, sin volver a escribir ni copiar manualmente un error largo.

- Reanude el trabajo remoto después de la reconexión, luego verifique el host y el directorio antes de continuar. La entrada de terminal está diseñada para preservar el texto del teclado de composición, la repetición de teclas y los atajos de teclado físico durante el trabajo móvil.


Para espacios de trabajo SSH, el menú Terminal puede actualizar el entorno de inicio de sesión de la cuenta remota. Terminal, Tareas, Depuración, servidores de idiomas, Git, CLI externas y agentes ACP utilizan el mismo entorno de shell resuelto, incluida su configuración `PATH`, configuración regional y agente SSH. Elija también una paleta de terminal que coincida con el tema del espacio de trabajo.


## Cuando más de un caparazón importa


Pro proporciona flujos de trabajo avanzados de múltiples terminales para contextos paralelos, como un terminal que sigue registros mientras otro ejecuta pruebas o un comando de implementación. Mantenga explícitos los comandos de alto riesgo y evite tratar un terminal restaurado como prueba de que el estado remoto no ha cambiado.


<ImagePlaceholder image-key="terminalMenu" alt="Terminal menu on NimoteCode for phone">
  <strong>Terminal actions and session controls</strong>
</ImagePlaceholder>

Siguiente: [Espacio de trabajo SSH](/docs/ssh) · [Tareas](/docs/tasks) · [Diagnóstico de terminal](/docs/terminal)
