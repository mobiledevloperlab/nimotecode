---
title: Android Local Linux Architecture | NimoteCode
description: Learn how Android, PRoot, Ubuntu, and a loopback SSH service form the NimoteCode Local Linux workspace architecture.
---

# Arquitectura local de Linux para Android


Linux local tiene cuatro límites: Android posee el almacenamiento y el ciclo de vida de las aplicaciones; PRoot presenta el espacio de usuario de Linux; Ubuntu proporciona el sistema de archivos raíz y los paquetes APT; y NimoteCode abre el espacio de trabajo a través de su conexión SSH local.


## Qué hace y qué no hace PRoot


PRoot proporciona a un proceso un directorio raíz alternativo y puede asignar las expectativas del sistema de archivos seleccionado sin otorgarle la raíz a Android. No es una máquina virtual y no hace que todo el comportamiento a nivel de kernel sea idéntico al de Linux de escritorio. Las herramientas que dependen de ptrace, montajes especiales, redes privilegiadas o semántica exacta de `/proc` necesitan pruebas de tiempo de ejecución de destino.


## Límite SSH local


El servicio SSH integrado escucha solo en la interfaz de bucle invertido del dispositivo. NimoteCode lo utiliza para unificar Linux local con sus flujos de trabajo Explorer, Editor, Terminal, Git, AI, Tasks, LSP y Debug; no es un servidor SSH expuesto externamente.


## Por qué esto es importante


La arquitectura es portátil y no necesita raíz de Android, pero Android puede pausar o detener el trabajo en segundo plano. Vuelva a abrir o reiniciar Linux local después de regresar a la aplicación y ejecute tareas largas o similares a las de producción en un host remoto cuando la persistencia y la capacidad sean más importantes. Consulte [Compatibilidad](/docs/local-linux/compatibility) y [Solución de problemas](/docs/local-linux/troubleshooting).
