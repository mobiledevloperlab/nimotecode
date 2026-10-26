---
title: AI Chat y Agent | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: AI Chat y Agent."
---

# AI Chat y Agent

<div class="doc-section">
<div class="doc-section__copy">

## Iniciar una conversación

Seleccione un modelo configurado en el panel de IA e introduzca una pregunta. Para peticiones sobre un proyecto, abra primero su espacio de trabajo. Las credenciales y el acceso al modelo se ajustan por separado en [Configuración](/es/docs/configuration).

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-chat-welcome.png" caption="Panel de IA antes de abrir un espacio de trabajo." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Elegir un agente

El selector ofrece Nimote Agent y agentes externos. Los externos se ejecutan en el host SSH y requieren un entorno ACP compatible instalado y configurado allí. Los comandos de sesión anunciados por ese entorno están disponibles mediante el autocompletado de comandos con barra.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-agent-selector.jpg" caption="Selector con Nimote Agent seleccionado y agentes externos desactivados." />
</div>

</div>

## Revisar el plan y seguir la ejecución

En modo **Confirm**, revise el plan y seleccione **Approve this run** para permitir las herramientas. La cronología muestra el paso actual, las llamadas completadas y su salida. Puede enviar instrucciones adicionales o responder preguntas durante la ejecución. Si se alcanza el límite de pasos, revise el resultado antes de continuar.

<div class="doc-screenshots">
  <DocScreenshot file="ai-plan-approval.jpg" caption="Plan de inspección del proyecto pendiente de aprobación en modo Confirm." />
  <DocScreenshot file="ai-plan-running.jpg" caption="Ejecución aprobada que lee archivos y registra los pasos de inspección completados." />
</div>

## Leer el resultado

Las capturas muestran una respuesta a «explain this project»: una descripción del proyecto, ejemplos de comandos y observaciones sobre archivos ausentes y metodología de pruebas de rendimiento. Son partes de una respuesta generada, no modos de análisis distintos. Contraste los archivos y comandos citados con el proyecto actual antes de usar el resultado.

<div class="doc-screenshots">
  <DocScreenshot file="ai-analysis-overview.jpg" caption="Descripción del proyecto y sus componentes principales en una respuesta de IA." />
  <DocScreenshot file="ai-analysis-workflow.jpg" caption="Ejemplos de comandos del proyecto en la misma respuesta." />
  <DocScreenshot file="ai-analysis-caveats.jpg" caption="Observaciones sobre la copia del repositorio inspeccionada y los resultados de rendimiento." />
</div>
