---
title: "Instalar Nimote Connect para las sesiones Host | NimoteCode"
description: "Nimote Connect incluye el servicio NimoteHost que gestiona terminales, tareas y sesiones de Agent compatibles. Usa una cuenta SSH con acceso al proyecto y mantén el equipo y el servicio Host en ejecución. Las sesiones Host en la app requieren Pro."
---

# Instalar Nimote Connect para las sesiones Host

Nimote Connect incluye el servicio NimoteHost que gestiona terminales, tareas y sesiones de Agent compatibles. Usa una cuenta SSH con acceso al proyecto y mantén el equipo y el servicio Host en ejecución. Las sesiones Host en la app requieren Pro.

## Instalar desde NimoteCode {#install-over-ssh}

En NimoteCode, abre **Máquinas**, selecciona la conexión SSH del equipo y abre **Host**. Si falta Host, elige **Instalar Nimote Connect**. El asistente selecciona el equipo SSH, descarga el paquete correspondiente y verifica la instalación. Aprueba el dispositivo cuando se solicite. La instalación y la actualización automáticas están disponibles en macOS y Linux compatibles de 64 bits.

## Instalar manualmente {#host-install}

Si el asistente no puede cargar un paquete o el equipo usa Windows, instala Nimote Connect directamente en el equipo. Descarga el archivo y su SHA-256 de las [versiones oficiales](https://github.com/mobiledevloperlab/nimote-connect/releases), verifica el archivo y extráelo. Con la misma cuenta de SSH, ejecuta `./install.sh` en macOS o Linux, o `.\install.ps1` en PowerShell de Windows. Vuelve a conectarte y abre **Host**.

## Código fuente de NimoteHost {#host-source}

El [repositorio de NimoteHost](https://github.com/mobiledevloperlab/nimotehost) ofrece el código fuente y compilaciones Community independientes. La instalación desde NimoteCode usa Nimote Connect.

[Descripción general](/es/docs/host) · [Compatibilidad de paquetes](/es/docs/host/compatibility)
