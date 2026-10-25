---
title: AI Chat and Agent | NimoteCode
description: Use NimoteCode AI Chat for code and error explanations, and AI Agent for controlled multi-step work with provider profiles and workspace context.
---

# Chat AI y agente


NimoteCode separa la ayuda directa de IA de la ejecución asistida por IA. **AI Chat** es para una respuesta rápida en contexto; **AI Agent** es para trabajos que necesitan varios pasos deliberados en archivos, terminales o herramientas Git.


<ImagePlaceholder image-key="aiAssistant" alt="NimoteCode AI panel">
  <strong>Image placeholder — AI assistance with workspace context</strong>
  <span>Replace with a screenshot of the AI panel explaining an active file or planning a small, reviewable change.</span>
</ImagePlaceholder>

## Usa AI Chat para la siguiente decisión


Pídale a Chat que le explique un código desconocido, interprete la salida del terminal, describa una refactorización o revise una idea antes de cambiar un archivo. Mantener activo el archivo relevante le da a la conversación un contexto de espacio de trabajo útil. Las tareas recientes y el contexto del espacio de trabajo permanecen visibles en Chat, mientras que un indicador global compacto mantiene visible el trabajo activo del agente a medida que se mueve entre los paneles.


## Utilice AI Agent para una secuencia controlada


Agent es apropiado cuando una tarea necesita inspeccionar archivos, proponer un plan, realizar una edición, ejecutar una verificación y resumir el resultado. Mientras se ejecuta, añada una instrucción de seguimiento o responda una pregunta interactiva cuando el trabajo necesite su dirección. Las vistas renovadas de contexto, historial, edición de prompts y cronología ayudan a seguir trabajos largos. Está disponible a través de Early Access Pro a medida que se amplía la disponibilidad; no utiliza una cuota de uso gratuito.

## Mantenga el control mientras el trabajo continúa

Una ejecución activa de Agent es una colaboración, no una promesa en segundo plano. Revise su plan, comandos, solicitudes de permisos, cambios de archivos y salida compactada; cuando se alcance el presupuesto de pasos configurado, revise el estado antes de decidir si continúa.


## Utilice un agente ACP externo en un espacio de trabajo SSH


Cuando un tiempo de ejecución ACP compatible esté disponible en el host SSH, selecciónelo junto con el Agente integrado. NimoteCode presenta sus capacidades, solicitudes de permiso, estado de la sesión y progreso de ejecución en la misma experiencia de conversación. Escriba `/` en el compositor para acciones y comandos de sesión integrados informados por la sesión ACP activa. El tiempo de ejecución permanece en su host SSH; asegúrese de que su comando y entorno estén configurados allí antes de comenzar.


<ImagePlaceholder image-key="agentRunLog" alt="AI Agent run log on NimoteCode for phone">
  <strong>Agent execution log</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentRunPythonBenchmark" alt="AI Agent running a Python benchmark on phone">
  <strong>Agent runs a Python benchmark</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="agentAlgorithmBenchmarkResults" alt="AI Agent benchmark results on phone">
  <strong>Agent benchmark results</strong>
</ImagePlaceholder>

## Configurar proveedores deliberadamente


Los perfiles de proveedor contienen configuraciones de conexión y modelo, como punto final, credencial API, modelo, transmisión y comportamiento de contexto. Conecta su propio proveedor de IA y clave API; NimoteCode no incluye acceso al modelo ni tokens. Mantenga un perfil principal funcional y un perfil de respaldo probado. Consulte [Configuración](/docs/configuration) para obtener una lista de verificación práctica.


Para un espacio de trabajo SSH, Terminal, agentes ACP externos, Tareas, Depuración, servidores de idiomas, Git y CLI externas comparten el entorno de inicio de sesión de la cuenta remota. Utilice **Actualizar entorno remoto** desde el menú Terminal después de cambiar la configuración del shell; la reconexión también lo actualiza. La salida de diagnóstico enmascara claves API, tokens, secretos y contraseñas.


> Revise los comandos y los cambios de archivos antes de aplicarlos, especialmente en un espacio de trabajo remoto o adyacente a la producción. Las capas de validación y bloqueo de la aplicación admiten el trabajo controlado; no transfieren la responsabilidad operativa del usuario.


Continuar con [Demostración del agente AI](/use-cases/) · [Seguridad y protección](/docs/security) · [Codificación AI móvil](/mobile-ai-coding)
