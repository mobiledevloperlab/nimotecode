---
title: "IA móvil para programar: Chat, Agent y ACP | NimoteCode"
description: "Elige AI Chat, Nimote Agent o ACP externo en NimoteCode. Configura proveedor y entorno, revisa planes y verifica archivos y Git después de ejecutar herramientas."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# IA móvil: elige el modo y el entorno

Explicar una función no es lo mismo que inspeccionar archivos y ejecutar pruebas. NimoteCode ofrece Chat, Nimote Agent integrado y agentes ACP compatibles junto al editor, terminal y Git. Decide el modo y el destino antes de enviar la tarea.

## Elige Chat o Agent

| Modo | Uso | Configuración y control |
| --- | --- | --- |
| Chat | Explicar código, interpretar errores, planificar | Proveedor de modelos; Chat no ejecuta cambios por sí mismo |
| Nimote Agent | Inspeccionar, proponer cambios y utilizar herramientas | Proveedor y acceso; Confirm espera la aprobación del plan |
| ACP externo | Un agente compatible instalado por separado | Entorno, credenciales y política propia en el destino |

Si ya sabes qué cambiar, un editor o terminal puede bastar. La IA es opcional; SSH no necesita configurar un modelo.

## Configura proveedor y espacio

Prueba el acceso en [configuración](/es/docs/configuration) y confirma la raíz del proyecto. Una carpeta local no proporciona automáticamente ejecución de comandos. SSH utiliza el equipo remoto; Android compatible puede usar [Local Linux](/es/docs/local-linux). iPhone y iPad no tienen Local Linux.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-agents.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-agents.webp" width="660" height="1433" alt="Selección de agentes integrados y externos en iPhone." loading="lazy" decoding="async">
  </a>
  <figcaption>Selección de agentes integrados y externos en iPhone. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Empieza por una tarea de lectura

Pide localizar el punto de entrada y explicar cómo se carga una configuración, sin cambiar archivos. Verifica las rutas en el editor. Para herramientas, elige Nimote Agent y revisa el plan en Confirm antes de aprobar. Contrasta la respuesta con los archivos reales.

## Revisa ejecución y resultado

Lee la cronología y las salidas; añade instrucciones o detén la ejecución si cambia el alcance. Comprueba archivos guardados, verificaciones y [diff de Git](/es/docs/source-control). Confirm del agente integrado no controla los permisos de una CLI externa iniciada manualmente.

## Conecta un entorno externo

La [guía AI y ACP](/es/docs/ai) explica entornos y MCP. Para acceder directamente por terminal, consulta [Claude Code](/es/claude-code-from-phone) o [Codex](/es/codex-from-phone). Guarda claves en la configuración, no en prompts. NimoteCode no incluye créditos del modelo.

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
