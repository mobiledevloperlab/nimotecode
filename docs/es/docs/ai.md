---
title: AI Chat y Agent | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: AI Chat y Agent."
---

# AI Chat y Agent

Free permite tres tareas del Agent integrado por día UTC. Pro incluye tareas integradas ilimitadas y agentes ACP externos. Se aplican las cuotas y tarifas del proveedor del modelo.

<div class="doc-section">
<div class="doc-section__copy">

## Iniciar una conversación

Seleccione un modelo configurado en el panel de IA e introduzca una pregunta. Para peticiones sobre un proyecto, abra primero su espacio de trabajo. Las credenciales y el acceso al modelo se ajustan por separado en [Configuración](/es/docs/configuration).

</div>

## MCP y agentes ACP externos

Un agente externo se ejecuta solo cuando configura un runtime ACP compatible en el entorno objetivo y lo habilita deliberadamente. NimoteCode no aporta sus credenciales, red ni política de herramientas. MCP admite stdio —un comando en local, SSH o Local Linux elegido— o Streamable HTTP. Añada solo servidores de confianza y revise cada inicio y llamada de herramienta.

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="Espacio de IA con proyecto SSH conectado, antes de iniciar una tarea nueva." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Elegir un agente

El selector ofrece Nimote Agent y agentes externos. Los externos se ejecutan en el host SSH y requieren un entorno ACP compatible instalado y configurado allí. Los comandos de sesión anunciados por ese entorno están disponibles mediante el autocompletado de comandos con barra.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Selector de modelos con deepseek-flash seleccionado y deepseek-v4-pro disponible." />
</div>

</div>

En 2.5.0, Codex integrado responde más rápido y mejora la cancelación y las llamadas a herramientas. Agent conserva los turnos cancelados al restaurar conversaciones interrumpidas.

En 2.5.0, si falta una captura de un archivo, usa la acción Git de la tarjeta para inspeccionar el diff actual. Los archivos con capturas siguen accesibles desde la tarjeta.

## Revisar el plan y seguir la ejecución

En modo **Confirm**, revise el plan y seleccione **Approve this run** para permitir las herramientas. La cronología muestra el paso actual, las llamadas completadas y su salida. Puede enviar instrucciones adicionales o responder preguntas durante la ejecución. Si se alcanza el límite de pasos, revise el resultado antes de continuar.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Plan de inspección del proyecto pendiente de aprobación en modo Confirm." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Resultado del Agent: pruebas Python añadidas, salida correcta y diff de Git." />
</div>

## Leer el resultado

Las capturas muestran una respuesta a «explain this project»: una descripción del proyecto, ejemplos de comandos y observaciones sobre archivos ausentes y metodología de pruebas de rendimiento. Son partes de una respuesta generada, no modos de análisis distintos. Contraste los archivos y comandos citados con el proyecto actual antes de usar el resultado.

### Empezar por la estructura del proyecto

Lee el resumen para entender los componentes principales y sus relaciones, y contrasta los archivos citados con el espacio de trabajo actual.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="Descripción del proyecto y sus componentes principales en una respuesta de IA." />
</div>

### Comprobar los comandos de ejemplo

Revisa los comandos de la misma respuesta y confirma que se aplican al proyecto y al entorno actuales antes de decidir ejecutarlos.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="Ejemplos de comandos del proyecto en la misma respuesta." />
</div>

### Revisar las limitaciones

Presta atención a los archivos ausentes, al alcance de la copia de trabajo y al método de las pruebas de rendimiento. No supongas que las conclusiones se aplican a otras versiones o entornos.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="Advertencias de IA sobre la implementación Python, la cobertura y los supuestos sin verificar." />
</div>


## Instrucciones adicionales al Agent en ejecución

Los Agents ACP compatibles aceptan instrucciones durante una tarea. La disponibilidad depende del runtime del Agent.

## NimoteCode 2.4.0

**Colaboración Agent.** Sesiones compatibles de Codex, Claude y OpenCode con conversaciones estructuradas, herramientas, aprobaciones, comandos, modelos e indicaciones durante la ejecución. Las políticas dependen del Host; las acciones sensibles pueden requerir aprobación.

**Bandeja de tareas e Issues de GitHub.** Revisa estados, evidencias de verificación y diffs; continúa o archiva tareas y envía Issues según la política de publicación elegida. Depende de la versión y configuración del Host.

[2.4.0 →](/es/releases/2.4.0)

[Máquinas →](/es/docs/host) — Instalar NimoteHost, conectar por SSH y retomar terminales y tareas Agent.
