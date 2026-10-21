---
title: Remote Tasks | NimoteCode
description: Save, group and run repeatable SSH terminal commands in NimoteCode Tasks.
---

# Tareas remotas


Tasks convierte un procedimiento de comando remoto conocido en una acción reutilizable con nombre. Es útil para comprobaciones de compilación, pruebas, formateo, comprobaciones de estado y rutinas de registro que no deben volver a escribirse en una pantalla pequeña.


<ImagePlaceholder image-key="tasksPage" alt="Tasks page on NimoteCode for phone">
  <strong>Reusable remote task catalog</strong>
</ImagePlaceholder>

## Crear un catálogo de tareas en torno a los resultados


- Comandos **construir y probar** relacionados con el grupo.

- Mantenga las rutinas **lint y format** separadas del trabajo de implementación.

- Nombra las tareas de **reinicio, verificación de estado y registro** para que su efecto sea obvio.

- Ejecute la tarea en su contexto de terminal SSH y siga su resultado y estado.


## Usa las tareas de forma segura


Las tareas se ejecutan a través de flujos de trabajo SSH, así que deje claro el entorno activo en el nombre de la tarea y el comando. Comience con rutinas de solo lectura o de bajo riesgo, documente cualquier requisito previo y evite ocultar acciones destructivas detrás de etiquetas vagas. La creación y ejecución de tareas están disponibles sin un nivel Pro separado.


Relacionado: [Espacio de trabajo SSH](/docs/ssh) · [Terminal](/docs/terminal) · [Configuración](/docs/configuration)
