---
title: Android Local Linux Troubleshooting | NimoteCode
description: Diagnose common NimoteCode Local Linux installation, package, architecture, and lifecycle issues on Android.
---

# Solución de problemas de Linux local de Android


## Linux local no aparece o no se instala


Confirme que el dispositivo ejecuta Android 8+ y tiene un entorno de aplicación ARM64 o x86_64 de 64 bits. Verifique el almacenamiento disponible y el acceso a la red, luego vuelva a intentarlo desde el selector de Linux local. Linux local no está disponible en dispositivos iOS o ARM de 32 bits.


## Los paquetes no se instalan


Primero lea el error APT completo. Las causas comunes son almacenamiento no disponible, índices de paquetes no disponibles, falla de red/DNS o una transacción de paquete simultánea. No elimine archivos bloqueados ni ejecute comandos de recuperación arbitrarios; espere a que finalice la transacción activa y utilice el estado informado del administrador de paquetes.


## Una herramienta funciona en un contenedor pero no en Android


PRoot no es una máquina virtual. Vuelva a verificar la arquitectura, la disponibilidad del paquete y las suposiciones sobre ptrace, `/proc`, creación de procesos, enlaces simbólicos y bits ejecutables. Prefiera los [registros de prueba y compatibilidad de tiempo de ejecución] del repositorio de ajustes preestablecidos (https://github.com/mobiledevloperlab/nimote-linux-presets/tree/master/docs) cuando se proporciona un conjunto de herramientas como ajuste preestablecido.


## El entorno se detuvo después de que la aplicación se puso en segundo plano


Android puede pausar o detener procesos en segundo plano. Regrese a la página de Linux local, inicie nuevamente el entorno y vuelva a conectarse a su espacio de trabajo. Utilice un host SSH remoto para trabajos que requieran servicios de mayor duración o recursos de escritorio.


Para inquietudes sobre fuentes/licencias, consulte [Fuente y licencias locales de Linux](/docs/local-linux-source). Para seguridad y verificación, consulte [Seguridad e integridad](/docs/local-linux/security-integrity).
