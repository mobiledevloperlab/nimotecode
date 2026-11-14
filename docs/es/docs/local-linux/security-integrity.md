---
title: "Seguridad de Local Linux: paquetes y credenciales | NimoteCode"
description: "Verifica SHA-256 de descargas y Presets, usa fuentes de paquetes fiables y protege las credenciales SSH y de proveedores de IA."
---

# Seguridad e integridad de Linux local de Android

Usa paquetes fiables y protege las cuentas y credenciales que utilizas dentro de Local Linux.

## Verifica lo que instalas

- Lea el manifiesto de la versión antes de usar un paquete preestablecido o de tiempo de ejecución.

- Verifique el valor SHA-256 publicado para los artefactos y scripts descargados.

- Utilice fuentes APT documentadas; La instalación del paquete cambia el entorno y puede requerir acceso a la red.

## Proteger el acceso

- Mantenga las credenciales del proveedor en un almacenamiento protegido y evite pegar secretos en registros o mensajes de IA.

- Utilice cuentas SSH con privilegios mínimos para hosts remotos; El servicio SSH de Linux local es solo de bucle invertido.

- Revise los comandos propuestos por el agente y las diferencias de Git antes de aceptar un cambio.

Para manifiestos específicos preestablecidos, hash de script y validación, lea [Preajustes de Linux](/es/docs/local-linux/presets). Para conocer los avisos de licencia y fuente correspondientes requeridos legalmente para el entorno incluido, lea [Fuente y licencias locales de Linux](/es/docs/local-linux-source).
