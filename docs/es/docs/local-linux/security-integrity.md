---
title: Android Local Linux Security and Integrity | NimoteCode
description: Verify Local Linux artifacts and use safe package, SSH, credential, and PRoot practices on Android.
---

# Seguridad e integridad de Linux local de Android


Local Linux es un entorno de desarrollo, no un mecanismo raíz de Android. Trátelo como un espacio de usuario distinto con sus propios paquetes y archivos mientras mantiene protegidas las credenciales de Android, SSH y del proveedor.


## Verifica lo que instalas


- Lea el manifiesto de la versión antes de usar un paquete preestablecido o de tiempo de ejecución.

- Verifique el valor SHA-256 publicado para los artefactos y scripts descargados.

- Utilice fuentes APT documentadas; La instalación del paquete cambia el entorno y puede requerir acceso a la red.

- No copie archivos rootfs, activos `.zst` ni publique paquetes en el repositorio del sitio web.


## Proteger el acceso


- Mantenga las credenciales del proveedor en un almacenamiento protegido y evite pegar secretos en registros o mensajes de IA.

- Utilice cuentas SSH con privilegios mínimos para hosts remotos; El servicio SSH de Linux local es solo de bucle invertido.

- Revise los comandos propuestos por el agente y las diferencias de Git antes de aceptar un cambio.


Para manifiestos específicos preestablecidos, hash de script y validación, lea [Preajustes de Linux](/docs/local-linux/presets). Para conocer los avisos de licencia y fuente correspondientes requeridos legalmente para el entorno incluido, lea [Fuente y licencias locales de Linux](/docs/local-linux-source).
