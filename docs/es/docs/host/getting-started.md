---
title: "Descarga e instalación | NimoteHost"
description: "NimoteHost: guía de descarga e instalación."
---

# Descarga e instalación

**Por ahora, NimoteHost solo admite conexiones en la red local (LAN).** Conecta el móvil y el equipo que ejecuta Host a la misma red local y usa la dirección local del equipo para conectarte por SSH.

## Antes de empezar

Prepara un equipo Linux, macOS o Windows accesible por SSH y una carpeta de proyecto accesible para ese usuario. Usa la misma cuenta para instalar y conectar. Para conectar desde el móvil necesitas NimoteCode 2.4.1 o posterior, Pro y un Host compatible.

## Instalar desde NimoteCode {#install-over-ssh}

En NimoteCode 2.5.0 abre **Host**, conecta por SSH y sigue el aviso de instalación si aparece. El equipo necesita acceso a GitHub Releases. Si Host viene con Nimote Connect, sigue las instrucciones de esa edición.

## Instalar desde un paquete descargado {#host-install}

Community 2.5.0 ofrece paquetes de CLI y escritorio. Si no aparece la opción de instalación en la app o la descarga falla, sigue los pasos manuales de abajo.

Elige el [paquete completo de Community](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0) para tu equipo. Usa **CLI** para un servidor o **Escritorio** si quieres el gestor gráfico con la CLI incluida. Consulta [cómo elegir el paquete](/es/docs/host/compatibility). Verifica el SHA-256 y extrae todo el archivo. [Cómo verificarlo](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/deployment.md#install-from-a-website-download) En la versión publicada, los archivos de CLI empiezan por `nimotehost-` y los de escritorio por `nimotehost-gui-`.

Abre una terminal en la carpeta extraída con la misma cuenta que usas para SSH. En Linux y macOS ejecuta la instalación sin `sudo`.

### Linux o macOS

```sh
./nimotehost setup
./nimotehost deploy status
```

### Windows PowerShell

```powershell
.\nimotehost.exe setup
.\nimotehost.exe deploy status
```

`setup` instala el paquete e inicia el servicio de usuario. `deploy status` comprueba su estado. Cuando veas `"running": true`, abre **Host** en NimoteCode, selecciona la conexión SSH y la carpeta del proyecto en el equipo.

Linux necesita un gestor de usuario de systemd para el servicio. macOS y Windows necesitan una sesión de escritorio iniciada. Para probar en primer plano, ejecuta `./nimotehost start` (en Windows, `.\nimotehost.exe start`) desde la carpeta extraída y deja la terminal abierta.

### Compilar desde el código fuente {#host-source}

Consulta los requisitos y comandos en la [guía de compilación](https://github.com/mobiledevloperlab/nimotehost#build-and-run).

[Resumen](/es/docs/host) · [Conexiones, terminales y tareas](/es/docs/host/sessions)
