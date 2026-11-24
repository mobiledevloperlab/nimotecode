---
title: Ubuntu en Android sin root | NimoteCode Local Linux
description: Usa Ubuntu, Bash, Git y SSH en Android sin acceso root. Consulta los dispositivos compatibles, las tareas locales y cuándo conviene trabajar por SSH.
---

# Local Linux en Android

Ejecuta scripts pequeños y usa Git y herramientas ligeras de desarrollo en Ubuntu desde Android. No necesitas acceso root.

[Instalar y ejecutar el primer comando](/es/docs/local-linux/getting-started)

Si necesitas Docker, servicios de larga duración o herramientas ya instaladas en tu equipo, usa un [espacio de trabajo SSH](/es/docs/ssh). [Límites de Local Linux](/es/docs/local-linux/compatibility)

<div id="local-linux-requirements"></div>

## Requisitos

- **Dispositivo**: Android 8 o posterior con la app de 64 bits ARM64 o x86_64. No admite iPhone, iPad ni ARM de 32 bits.
- Linux local básico es gratuito en dispositivos Android compatibles. La gestión de herramientas y la importación de carpetas compartidas requieren Pro.
- **Herramientas**: Incluye Ubuntu, Bash, Git y SSH. Las cadenas de herramientas, servidores de lenguaje, depuradores y CLI de agentes externos requieren configuración aparte.

PRoot comparte el kernel de Android; no proporciona una máquina virtual ni acceso root. Android controla la ejecución en segundo plano.

## Siguientes pasos

- **[Solución de problemas](/es/docs/local-linux/troubleshooting)**: instalación, paquetes y cierre en segundo plano.
- **[Arquitectura](/es/docs/local-linux/architecture)** · **[Seguridad y verificación](/es/docs/local-linux/security-integrity)** · **[Código fuente y licencias](/es/docs/local-linux-source)**
