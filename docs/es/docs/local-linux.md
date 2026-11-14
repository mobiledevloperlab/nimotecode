---
title: Ubuntu en Android sin root | NimoteCode Local Linux
description: Usa Ubuntu, Bash, Git y SSH en Android sin acceso root. Consulta los dispositivos compatibles, las tareas locales y cuándo conviene trabajar por SSH.
---

# Local Linux en Android

Local Linux lleva un entorno de desarrollo Ubuntu a tu dispositivo Android. Usa Bash, Git y SSH junto al editor de NimoteCode sin acceso root.

[Instalar y ejecutar el primer comando](/es/docs/local-linux/getting-started)

## Qué puedes hacer

- Ejecutar scripts de Shell y tareas ligeras del proyecto en el dispositivo.
- Editar archivos y revisar el estado y los cambios de Git.
- Añadir herramientas de lenguaje o elegir un [Linux Preset](/es/docs/local-linux/presets) opcional.

Para servidores existentes, Docker o compilaciones largas, usa un [espacio de trabajo SSH](/es/docs/ssh). Consulta la [compatibilidad y los límites](/es/docs/local-linux/compatibility) antes de elegir herramientas locales.

<div id="local-linux-requirements"></div>

## Requisitos

- **Dispositivo**: Android 8 o posterior con la app de 64 bits ARM64 o x86_64. No admite iPhone, iPad ni ARM de 32 bits.
- **Acceso**: Requiere Early Access Pro. Consulta la disponibilidad en el [estado de tu cuenta](/es/docs/account-subscription) dentro de la app.
- **Herramientas**: Incluye Ubuntu, Bash, Git y SSH. Las cadenas de herramientas, servidores de lenguaje, depuradores y CLI de agentes externos requieren configuración aparte.

PRoot comparte el kernel de Android; no proporciona una máquina virtual ni acceso root. Android controla la ejecución en segundo plano.

## Siguientes pasos

- **[Solución de problemas](/es/docs/local-linux/troubleshooting)**: instalación, paquetes y cierre en segundo plano.
- **[Arquitectura](/es/docs/local-linux/architecture)** · **[Seguridad y verificación](/es/docs/local-linux/security-integrity)** · **[Código fuente y licencias](/es/docs/local-linux-source)**
