---
title: NimoteCode Linux Presets | Android Local Linux
description: Learn how NimoteCode Linux Presets declares optional Ubuntu development environments for Android Local Linux with manifests and SHA-256 verification.
---

# NimoteCode Ajustes preestablecidos de Linux


[NimoteCode Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets) es un repositorio técnico independiente para entornos de desarrollo locales de Linux opcionales. Posee los manifiestos, instaladores, verificadores, esquemas, arneses de prueba y activos de lanzamiento reales; Este sitio web no copia esos archivos ni un rootfs.


## Alcance actual


El repositorio declara los ajustes preestablecidos `minimal`, `python`, `web` y `cpp` para Ubuntu 24.04 en ARM64 y AMD64. Sus manifiestos actualmente los marcan `experimental`. El manifiesto raíz también registra la versión del tiempo de ejecución de PRoot, la URL de origen, SHA-256, los metadatos de entrada de rootfs y los hashes por ajuste preestablecido.


## Ruta de verificación


1. Elija una versión o revisión declarada en el repositorio de ajustes preestablecidos.

2. Lea los manifiestos raíz y preestablecidos para conocer el estado, la arquitectura, la versión de Ubuntu, las dependencias y los requisitos de red.

3. Verifique `checksums.sha256` más los valores SHA-256 declarados para los scripts seleccionados.

4. Siga las instrucciones de validación y prueba del repositorio antes de usar un ajuste preestablecido para trabajos importantes.


Esto no afirma que todas las herramientas se comporten igual en PRoot. Las comprobaciones de contenedores del repositorio validan el comportamiento normal de Ubuntu, mientras que sus informes PRoot de Android son la evidencia en tiempo de ejecución. Consulte [Arquitectura](/docs/local-linux/architecture), [Compatibilidad](/docs/local-linux/compatibility) y la [puerta de enlace de ajustes preestablecidos en el repositorio principal](https://github.com/mobiledevloperlab/nimotecode/tree/main/presets).
