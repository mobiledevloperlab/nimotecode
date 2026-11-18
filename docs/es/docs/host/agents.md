---
title: "Agents y bandeja de tareas | NimoteHost"
description: "NimoteHost: guía de agents y bandeja de tareas."
---

# Agents y bandeja de tareas

Después de [conectar al Host](/es/docs/host/sessions), inicia conversaciones con los Agents instalados en ese ordenador y revisa los resultados.

## Crear una conversación Agent {#_7-crear-una-conversacion-agent}

Instala y autentica Codex, Claude Code u OpenCode en el ordenador. Claude estructurado necesita además un adaptador claude-agent-acp compatible. Host no descarga esas herramientas ni incluye acceso a modelos.

En + → Agent, revisa la carpeta y elige Installed agent. Si falta la pestaña Agent, comprueba instalación, autenticación y PATH del servicio. Empieza con confirmación de cada permiso, o con Smart execution: automatiza lecturas, búsquedas y ediciones estructuradas verificables, pero pregunta ante operaciones sensibles o desconocidas.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Formulario de Agent con carpeta y política. Esta captura solo muestra la configuración; no se inició una tarea de modelo." />
</div>

Pide primero algo pequeño: encontrar los comandos de prueba sin editar archivos. Revisa herramientas y aprobaciones antes de seguir. Las aprobaciones automáticas siguen el sandbox del Agent y no habilitan publicación automática. Un worktree independiente parte del HEAD confirmado y deja los archivos sin confirmar en la carpeta original. Los controles de modelos, comandos, historial e indicaciones en curso dependen del proveedor.

## Revisar la bandeja de tareas {#_8-revisar-la-bandeja-de-tareas}

Si aparece Task inbox, úsalo para encontrar aprobaciones, fallos, tareas en ejecución y resultados pendientes de revisión. Comprueba el comando de prueba real, su salida, código y revisión. Un mensaje del Agent no sustituye esas pruebas.

Tras revisar puedes marcar como tratado o archivar; no puedes ocultar aprobaciones pendientes. Para corregir, vuelve a la sesión original. Antes de abrir Git, confirma ordenador y carpeta.

El envío de Issues requiere la capacidad correspondiente, un proyecto y gh instalado y autorizado en el Host. La sesión GitHub del teléfono no se copia al ordenador. Empieza con publicación manual y revisa diff y verificaciones antes de crear un PR. La publicación automática se elige expresamente al enviar; Host no fusiona PR automáticamente.

## Abrir plugins del Host {#_9-abrir-plugins-del-host}

Busca los plugins del Host conectado en la configuración de la aplicación y abre los disponibles desde la barra lateral. Los formularios dependen del plugin; resuelve avisos de permisos o compatibilidad antes de repetir una operación. Consulta [plugins](/es/docs/plugins).

[Resumen](/es/docs/host) · [Gestión del servicio y actualizaciones](/es/docs/host/maintenance)
