---
title: Tareas | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Tareas."
---

# Tareas

Free permite ejecutar tareas individuales. Ejecutar flujos con dependencias entre tareas requiere Pro.

<div class="doc-section">
<div class="doc-section__copy">

## Crear un comando reutilizable

Tasks guarda comandos con nombre y los agrupa por finalidad. Añada una tarea con **+**, introduzca el comando y su configuración, y asígnele un grupo si procede. Se ejecuta en el entorno SSH conectado, incluido Android Local Linux mediante su conexión SSH local.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="task-runner.png" caption="Tasks con los grupos All y Test y una entrada Run Tests; el comando del ejemplo es echo, no el resultado de una prueba terminada." />
</div>

</div>

En 2.5.0, las tareas y los plugins muestran los destinos disponibles según el espacio y la plataforma. Usa un terminal SSH conectado o Linux local compatible en Android. Las herramientas proceden de la cuenta remota o del entorno Linux.

## Ejecutar e inspeccionar la salida

Pulse el control de ejecución junto a la tarea y revise la salida del terminal. El nombre es una etiqueta, no una validación del comando: compruebe el comando y el directorio de trabajo antes de usarlo. La creación y ejecución básicas de tareas no requieren Pro.

## NimoteCode 2.4.0

**Tareas de proyecto.** Descubre tareas compatibles de package.json, Taskfile, Makefile, justfile y .vscode/tasks.json y ejecútalas en el terminal. El descubrimiento dinámico de Make/just requiere confirmación.

[2.4.0 →](/es/releases/2.4.0)

[Modo Host →](/es/docs/host) — Instalar NimoteHost, conectar por SSH y retomar terminales y tareas Agent.
