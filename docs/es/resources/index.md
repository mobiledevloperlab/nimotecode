---
title: Mobile Development Resources | NimoteCode
description: Practical technical resources on mobile development, Android Linux, PRoot, remote SSH development, mobile AI coding, and coding-agent workflows.
---

# Recursos de desarrollo móvil


Estos son puntos de partida técnicos para que los desarrolladores evalúen dónde debe ejecutarse el trabajo y cómo un teléfono encaja en un bucle de ingeniería real. Primero explican las compensaciones; NimoteCode es relevante cuando un editor móvil, una terminal SSH, una revisión de Git y un espacio de trabajo local de Linux ayudan a poner ese flujo de trabajo en práctica.


## Elija un entorno de desarrollo


| Question | Resource | Continue with |
| --- | --- | --- |
| Should this work be local, remote, or cloud-based? | [Mobile development: choosing a workspace](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-development.md) | [Examples and workflows](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples) |
| How do Termux, PRoot, AVF, SSH, and cloud workspaces differ? | [Android Linux development](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/android-linux-development.md) | [Local Linux overview](/docs/local-linux) |
| When should I keep the repository on a remote host? | [Remote development from a phone](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/remote-development-from-phone.md) | [SSH workspaces](/docs/ssh) |

## Codificación AI y flujos de trabajo SSH


- [Codificación de IA móvil](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/mobile-ai-coding.md) explica cómo mantener el trabajo de los agentes inspeccionable y comprobable.

- [herramientas de desarrollo SSH](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/ssh-development-tools.md) asigna una conexión segura al editor, terminal y capacidades de revisión de Git.

- [Claude Code en un teléfono](https://github.com/mobiledevloperlab/nimotecode/blob/main/resources/claude-code-on-phone.md) describe un flujo de trabajo de agente instalado en el host sin implicar que NimoteCode lo instale o lo represente.

- Los ejemplos de [Claude Code](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/claude-code-over-ssh) y [Codex](https://github.com/mobiledevloperlab/nimotecode/tree/main/examples/codex-over-ssh) convierten esos principios en un bucle SSH revisable.


## Android Linux local y ajustes preestablecidos


Android Local Linux usa Ubuntu a través de PRoot en dispositivos Android compatibles. Comience con [Descripción general](/docs/local-linux), luego lea [Arquitectura](/docs/local-linux/architecture), [Compatibilidad](/docs/local-linux/compatibility) y [Seguridad e integridad](/docs/local-linux/security-integrity). Los conjuntos de herramientas de desarrollo opcionales, manifiestos, hash y registros de prueba son propiedad del repositorio independiente [NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets).


Todos los archivos fuente de recursos están versionados en el [repositorio principal](https://github.com/mobiledevloperlab/nimotecode/tree/main/resources); informar correcciones o adiciones específicas a través de [Problemas de NimoteCode](https://github.com/mobiledevloperlab/nimote_issues/issues).
