---
title: "Seguridad y compatibilidad | NimoteCode"
description: "Almacenamiento de credenciales SSH, envío de código a la IA, límites de sincronización, requisitos de Host y alcance de las pruebas de sistemas y Agents."
pageClass: trust-page compatibility-page
---

<TrustNav />

# Seguridad y compatibilidad

Una referencia breve antes de conectar un proyecto. Cada enlace explica la configuración y sus límites.

<p class="compatibility-scroll-hint">En pantallas pequeñas, desplaza las tablas horizontalmente.</p>

## Datos y ejecución {#boundaries}

<div class="compatibility-table" role="region" aria-label="Datos y ejecución" tabindex="0">

| Pregunta | Respuesta | Detalles |
| --- | --- | --- |
| ¿Dónde se guardan las credenciales SSH? | Los metadatos de conexión permanecen en el dispositivo. Las contraseñas, claves privadas y frases de paso gestionadas por la app usan iOS Keychain o almacenamiento cifrado basado en Android Keystore. Eliminar un perfil SSH elimina sus credenciales seguras asociadas. | [Credenciales](/es/privacy#storage) |
| ¿Cuándo se envía código al modelo? | Las solicitudes pueden incluir el prompt, contenido seleccionado, archivos relevantes, rutas y salida de herramientas. Las solicitudes directas van al proveedor elegido; los Agents pueden leer archivos para la tarea. Los Agents externos y MCP tienen sus propios destinatarios y políticas. BYOK no significa retención cero. | [Conexiones de IA](/es/privacy#integrations) · [Controles](/es/docs/ai) |
| ¿Qué escribe Sync / Cache? | **Sync: local → remoto. Cache: remoto → local.** Confirma proyecto y destino. La guía actual no especifica las reglas de sobrescritura de nombres iguales, propagación de borrados ni conflictos. Decide qué copia es la referencia y haz una copia de seguridad antes; el historial no la sustituye. | [Sincronización](/es/docs/sync-cache) |
| ¿Qué necesita Host? | NimoteCode **2.4.1+** con acceso a Host, el servicio Host instalado con Nimote Connect en Linux, macOS o Windows, conexión SSH y acceso al proyecto. El ordenador debe mantenerse activo. Los Agents requieren instalación e inicio de sesión propios. | [Instalar Host](/es/docs/host/getting-started) · [Pro](/es/pro) |
| ¿Dónde ejecuta Host el trabajo? | En tu ordenador, con los permisos de la cuenta del sistema. Su API autenticada solo escucha en loopback y se accede mediante SSH; las credenciales de Host permanecen en el ordenador. El trabajo gestionado puede continuar al desconectar; reiniciar Host o el sistema interrumpe los procesos. | [Host](/es/docs/host) · [Sesiones](/es/docs/host/sessions) |

</div>

## Compatibilidad y alcance de las pruebas {#compatibility}

**Los destinos de distribución, las capturas y las pruebas de aceptación completas son evidencias distintas.** Lo siguiente describe el alcance documentado, sin garantizar todas las combinaciones.

<div class="compatibility-table" role="region" aria-label="Compatibilidad y pruebas" tabindex="0">

| Sistema o Agent | Alcance documentado | Evidencia y límites |
| --- | --- | --- |
| App Android | **2.4.1 / build 66:** capturas ADB revisadas. No constituyen una matriz completa de aceptación por dispositivo y versión del sistema. | [Inventario](/images/placeholders/sources.json) · [Interfaz](/es/docs/screenshot-guide) |
| iPhone / iPad | **2.4.1+66, simuladores iOS 26.0:** iPhone 17 Pro e iPad Pro 11-inch (M5). SSH, pruebas de terminal y Git usan un proyecto temporal en Mac. La captura de IA es anterior a configurar el proveedor. No son pruebas completas en dispositivos físicos ni de tareas de modelo. | [Procedencia](/images/ios/sources.json) |
| Host Linux / macOS / Windows | **Distribución 2.4.0:** CLI/escritorio x64 y ARM64; Linux/Windows también ofrecen CLI x86. La aceptación completa nativa y móvil/Agent sigue pendiente. El escritorio Linux necesita glibc 2.35+; los paquetes macOS no están firmados ni notarizados. | [Compatibilidad de Host](/es/docs/host/compatibility) |
| Codex / Claude Code / OpenCode | Se documenta la detección de instalaciones compatibles. Las conversaciones estructuradas de Claude requieren además un adaptador `claude-agent-acp` compatible. Las guías enlazadas no publican una matriz completa por versión del Agent y sistema. | [Agents de Host](/es/docs/host/agents) · [Alcance](/es/docs/host/compatibility) |
| Herramientas de IA en Terminal | La página de flujo de trabajo incluye una grabación de terminal. Ejecutar una CLI no demuestra compatibilidad con conversaciones estructuradas de Host/ACP. | [Flujo de terminal](/es/use-cases/terminal-ai-tools) |
| Android Local Linux | Compatibilidad documentada: Android 8+, ARM64/x86_64 de 64 bits. No disponible en iOS ni ARM de 32 bits. Depende de la carga de trabajo; las pruebas en contenedor no verifican por sí solas Android PRoot. | [Compatibilidad y límites](/es/docs/local-linux/compatibility) |

</div>

El acceso depende de la cuenta y plataforma; el uso del modelo se factura aparte. Consulta [Pro](/es/pro), la [política de privacidad](/es/privacy) o [soporte](/es/support) para tu entorno.
