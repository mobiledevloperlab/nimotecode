---
title: "Conexiones, terminales y tareas | NimoteHost"
description: "NimoteHost: guía de conexiones, terminales y tareas."
---

# Conexiones, terminales y tareas

Primero [instala e inicia NimoteHost](/es/docs/host/getting-started) en el ordenador y abre sesiones usando ese equipo y la misma cuenta SSH.

## Conectar desde el móvil {#_3-conectar-desde-el-movil}

En NimoteCode 2.5.0, abre **Host → Conexiones remotas** y comprueba el estado. Usa la acción de instalación o actualización disponible, o consulta la versión instalada en la ayuda de Host. Revisa la interrupción de sesiones antes de autorizarla.

Elige Host en la pantalla de modos y toca SSH connections. Selecciona la cuenta y el ordenador donde instalaste Host; usa New Remote Connection si aún no existe. Verifica la clave SSH al conectar por primera vez.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="En la bienvenida, Host aparece junto a IDE, Terminal e IA." />
  <DocScreenshot file="host-setup.png" caption="La pantalla inicial pide instalar el servicio y elegir una conexión SSH." />
</div>

Si el servicio falta, está detenido o no es compatible, corrige esa condición y reintenta. El cliente no inicia automáticamente un Host detenido.

## Abrir un terminal {#_4-abrir-un-terminal}

Toca +, elige Terminal, escribe una carpeta remota que ya exista y pulsa Start session. Prueba pwd y echo Host connected; en PowerShell usa Get-Location para ver la carpeta.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="Salida conservada de una comprobación remota completada: las tres pruebas Python pasaron en cuatro ejecuciones." />
</div>

El ejemplo usa /tmp/nimote-host-guide. macOS puede mostrar /private/tmp/nimote-host-guide. Para trabajar, utiliza tu proyecto real; no guardes archivos importantes en una carpeta temporal. Volver a la lista no termina el Shell. Para cerrarlo, escribe exit o usa Detener.

## Encontrar la sesión otra vez {#_5-encontrar-la-sesion-otra-vez}

Busca por nombre o carpeta en Sessions. Usa All, Running e History para cambiar el filtro y abre la sesión original. El menú permite fijar y cambiar el nombre.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="Historial de sesiones Host con procesos en ejecución, completados y detenidos." />
</div>

Si pierdes SSH, vuelve al mismo Host. Mientras el servicio y el proceso sigan vivos, puedes retomar la sesión sin repetir el comando. Un reinicio de Host o del sistema no revive procesos: las sesiones pendientes quedan interrumpidas. Cerrar la sesión del usuario también depende de las reglas del servicio de cada sistema.

Si el inicio tarda y acaba en timeout, revisa la lista antes de crear otra sesión.

## Ejecutar una tarea {#_6-ejecutar-una-tarea}

En + → Task, elige carpeta y comando. Prueba echo Host connected y después el comando de compilación o pruebas de tu proyecto. Mira el código de salida y el registro; el nombre de una tarea no demuestra que las pruebas hayan pasado. Para interacción continua, usa Terminal.

[Resumen](/es/docs/host) · [Agents y bandeja de tareas](/es/docs/host/agents)
