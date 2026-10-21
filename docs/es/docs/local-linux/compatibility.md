---
title: Android Local Linux Compatibility | NimoteCode
description: Review NimoteCode Local Linux device, architecture, runtime, and workload compatibility expectations before starting development on Android.
---

# Compatibilidad con Linux local de Android


Linux local es compatible con Android 8 o posterior en dispositivos ARM64 y x86_64 de 64 bits. No está disponible en iOS y no es compatible con dispositivos ARM de 32 bits. El entorno incluido apunta a las entradas de Ubuntu 24.04 para estas arquitecturas; El tiempo de ejecución exacto y las declaraciones preestablecidas pertenecen a sus manifiestos publicados.


## Buenas cargas de trabajo locales


- Scripts de Shell, pequeñas utilidades, aprendizaje y trabajo de proyectos enfocado.

- Operaciones de Git y herramientas de lenguaje ligeras después de la instalación.

- Tareas que se benefician de mantener archivos y comandos en el dispositivo.


## Prefiere el desarrollo remoto cuando


- Una compilación necesita más CPU, memoria, almacenamiento o servicios persistentes de los que proporciona cómodamente un dispositivo móvil.

- El proyecto ya depende de contenedores de escritorio, redes de la empresa, hardware o una cadena de herramientas de host existente.

- No se ha verificado el comportamiento de una herramienta en PRoot, especialmente en lo que respecta a la depuración, ptrace o control de procesos.


El proyecto separado [Linux Presets](/docs/local-linux/presets) registra arquitecturas preestablecidas opcionales, la versión de Ubuntu y la política de prueba. Una prueba de contenedor exitosa por sí sola no es evidencia de compatibilidad con Android PRoot.
