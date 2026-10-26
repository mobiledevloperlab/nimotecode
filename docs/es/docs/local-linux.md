---
title: Local Linux en Android | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Local Linux en Android."
---

# Local Linux en Android

## Requisitos

Local Linux proporciona Ubuntu, Bash, Git y SSH en Android 8 o posterior con la aplicación de 64 bits para ARM64 o x86_64. Usa PRoot y no requiere acceso root. No está disponible en iOS ni en dispositivos ARM de 32 bits. Las herramientas de lenguaje, servidores de lenguaje, adaptadores de depuración y CLI de agentes externos se instalan por separado.

<div class="doc-section">
<div class="doc-section__copy">

## Instalar y abrir

1. Seleccione **Local Linux** en la bienvenida o en Explorer.
2. Seleccione **Install** y espere a que termine la instalación.
3. Inicie el entorno y abra su espacio de trabajo.

La instalación inicial usa una imagen incluida en la aplicación. Los paquetes adicionales pueden necesitar conexión a internet. Los archivos del entorno se guardan en el almacenamiento privado de la aplicación.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-deploy.jpg" caption="Diálogo de instalación de Local Linux con el estado Not installed y la acción Install." />
</div>

</div>

## Verificar el entorno

En Terminal, ejecute `uname -a` para consultar el kernel y la arquitectura. Use `cat /etc/os-release` para identificar la distribución. Local Linux comparte el kernel del host Android; su nombre no identifica por sí solo la versión del espacio de usuario de Ubuntu.

<div class="doc-screenshots">
  <DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="Salida de uname -a en el terminal de Local Linux." />
  <DocScreenshot file="local-linux-ai-print-os-info.jpg" caption="Respuesta de IA que resume la salida de uname y /etc/os-release." />
</div>

## Detener, restablecer o eliminar

Use los controles de Local Linux para gestionar el entorno. Detenerlo finaliza el trabajo activo; al reiniciarlo se usa el entorno existente. Restablecerlo, eliminarlo o borrar los datos de la aplicación elimina sus archivos. El servicio SSH integrado escucha en loopback para la conexión de la aplicación. Android puede terminar procesos en segundo plano; compruebe el estado al volver a la aplicación.

## Referencias

[Configuración](/es/docs/local-linux/getting-started) · [Arquitectura](/es/docs/local-linux/architecture) · [Compatibilidad](/es/docs/local-linux/compatibility) · [Seguridad e integridad](/es/docs/local-linux/security-integrity) · [Preajustes](/es/docs/local-linux/presets) · [Solución de problemas](/es/docs/local-linux/troubleshooting) · [Código fuente y licencias](/es/docs/local-linux-source)
