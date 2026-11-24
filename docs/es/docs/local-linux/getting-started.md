---
title: Instalar Local Linux en Android y ejecutar comandos | NimoteCode
description: "Instala Ubuntu en un Android compatible, abre un espacio de trabajo y ejecuta tu primer comando."
---

# Instalar Local Linux en Android

Sigue estos pasos para abrir un terminal Linux en tu dispositivo. Comprueba los [requisitos del dispositivo y la cuenta](/es/docs/local-linux#local-linux-requirements) y reserva espacio para el entorno y las herramientas. No necesitas configurar IA.

## Instalar y abrir el espacio de trabajo

1. Selecciona **Local Linux** en la bienvenida o en Explorer.
2. Selecciona **Install** y espera a que termine.
3. Selecciona **Start** y abre `/workspace`.

La primera instalación usa la imagen incluida en la app y guarda los archivos en su almacenamiento privado. Descargar paquetes adicionales requiere conexión de red.

<DocScreenshot file="local-linux-deploy.jpg" caption="Selecciona Install en el diálogo de instalación de Local Linux." />

## Ejecutar el primer comando

Abre [Terminal](/es/docs/terminal) en el mismo espacio y ejecuta:

```sh
pwd
printf 'Hello from Local Linux\n'
```

Si abriste `/workspace`, el terminal mostrará esa ruta seguida de `Hello from Local Linux`.

<DocScreenshot file="local-linux-terminal-uname-a.jpg" caption="El terminal de Local Linux ejecuta comandos directamente en el dispositivo." />

## Preparar las herramientas del proyecto

Abre o crea archivos en `/workspace` y usa el editor y el [control de código fuente](/es/docs/source-control). Añade solo las herramientas necesarias con el gestor de paquetes de Ubuntu. Los [Linux Presets](/es/docs/local-linux/presets) opcionales tienen sus propios requisitos de compatibilidad e instalación.

Para errores de paquetes o diferencias de ejecución bajo PRoot, consulta la [solución de problemas](/es/docs/local-linux/troubleshooting).

## Detener, restablecer o eliminar

Detener interrumpe el trabajo y conserva el entorno. Restablecer, eliminar el entorno o borrar los datos de la app elimina los archivos: haz una copia del proyecto antes.

Si Android cierra la app en segundo plano, vuelve a iniciar Local Linux.
