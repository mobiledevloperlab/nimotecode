---
title: Android Local Linux Getting Started | NimoteCode
description: Prepare and open NimoteCode Local Linux on a supported Android device, then choose appropriate local or remote development work.
---

# Introducción a Linux local de Android


Utilice Linux local para un pequeño entorno de desarrollo basado en Ubuntu en Android. Está disponible en dispositivos Android 8+ de 64 bits ARM64 y x86_64, no necesita raíz de Android y no está disponible en iPhone o iPad.


## Antes de la instalación


- Mantenga suficiente almacenamiento en el dispositivo disponible para el entorno base y las herramientas del proyecto que planea instalar.

- Utilice una conexión de red para la configuración inicial y para la instalación posterior del paquete APT.

- Elija Linux local para un trabajo local compacto; use [SSH](/docs/ssh) cuando el proyecto dependa de una estación de trabajo, servidor, contenedor o compilación larga existente.


## Abrir un espacio de trabajo


1. Seleccione **Linux local** en el espacio de trabajo o en el selector del Explorador.

2. Seleccione **Instalar**, espere a que se complete la preparación y luego seleccione **Iniciar**.

3. Abra el directorio predeterminado `/workspace`.

4. Inspecciona el entorno en [Terminal](/docs/terminal), luego agrega solo la cadena de herramientas que tu proyecto necesita.

5. Utilice el Explorador, el Editor y el [Control de código fuente](/docs/source-control) en ese espacio de trabajo.


El entorno base proporciona las bases de Ubuntu, Bash, Git y SSH. No es una promesa de que todas las herramientas de escritorio o depuradores se comportarán de manera idéntica en PRoot. Lea [Compatibilidad](/docs/local-linux/compatibility) antes de seleccionar una carga de trabajo local y [Preajustes de Linux](/docs/local-linux/presets) para conocer los conjuntos de herramientas opcionales declarados.
