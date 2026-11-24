---
title: "Descarga e instalación | NimoteHost"
description: "NimoteHost: guía de descarga e instalación."
---

# Descarga e instalación

Elige el paquete según **el sistema operativo y la arquitectura del ordenador o servidor que ejecuta NimoteHost**, incluso si descargas desde el móvil. La CPU del móvil no determina el paquete. Elige CLI o escritorio y una versión compatible con NimoteCode.

[Hardware y selección de paquetes](/es/docs/host/compatibility)

## Antes de empezar

Prepara un ordenador Linux, macOS o Windows accesible por SSH, una compilación de NimoteCode con modo Host y un Host compatible y una carpeta de proyecto accesible para la cuenta remota. La ruta del proyecto pertenece al ordenador, no al teléfono. Si aún no tienes SSH, sigue la [guía de conexión](/es/docs/ssh) o la de [Windows SSH](/es/docs/windows-ssh-sftp).

## Instalar o actualizar por SSH {#install-over-ssh}

En NimoteCode 2.5.0, abre **Host**, conecta por SSH y consulta el estado en el panel Host. Confirma la instalación para descargar y verificar el paquete CLI correspondiente de la versión oficial de NimoteHost indicada en el panel, instalarlo e iniciarlo con la cuenta SSH. El ordenador necesita acceso a GitHub Releases. Si el servicio está instalado pero detenido, usa la acción de inicio del panel.

El panel muestra el progreso, los errores y una opción para reintentar. Abre el aviso de actualización desde la cabecera de Host. Si la actualización requiere detener sesiones, revisa qué trabajo se interrumpirá antes de confirmar. Para obtener la interfaz de escritorio o compilar desde el código fuente, sigue los pasos manuales.

Cuando el panel identifica la edición de Host, usa la instalación o actualización que muestra. Community necesita un paquete CLI publicado para la plataforma. Si falta el servicio en un equipo vinculado, sigue las instrucciones de Nimote Connect. Si no se identifica la edición, comprueba el origen del paquete antes de actualizar.

## 1. Descargar el paquete

En [NimoteHost Community](https://github.com/mobiledevloperlab/nimotehost/releases/tag/community-v2.5.0), elige el paquete completo para tu sistema y CPU. CLI basta para un servidor; el paquete GUI añade el gestor de escritorio.

| Sistema | Etiqueta | CPU |
| --- | --- | --- |
| Linux | linux | amd64 para Intel/AMD de 64 bits; arm64 para ARM de 64 bits |
| macOS | darwin | arm64 para Apple Silicon; amd64 para Intel |
| Windows | windows | amd64 para x64; arm64 para ARM |

Linux y Windows también tienen CLI 386, sin GUI. Descarga la suma SHA256 y compárala con `sha256sum`, `shasum -a 256` o `Get-FileHash -Algorithm SHA256`, según el sistema. Conserva todo el paquete: binarios, scripts, licencias, BUILD.json, MODULES.json y SHA256SUMS. No borres los archivos que usa el servicio.

Si falta un paquete para tu equipo, consulta el [repositorio](https://github.com/mobiledevloperlab/nimotehost). Compilar desde código requiere Go 1.26.5 o posterior; los paquetes precompilados no necesitan Go.

## 2. Instalar en el ordenador {#host-install}

Usa la misma cuenta con la que conectarás por SSH. En Linux/macOS, abre un terminal en la carpeta extraída, sin sudo:

```sh
sh scripts/install.sh
./nimotehost status
./nimotehost capabilities
```

En Windows, desde PowerShell:

```powershell
.\scripts\install.ps1
.\nimotehost.exe status
.\nimotehost.exe capabilities
```

El instalador verifica el paquete e instala un servicio de usuario. Comprueba que status muestra running: true. En Unix, el comando también debe estar disponible en el PATH de SSH; una consola interactiva puede tener otro PATH. En Windows, el cliente compatible lee el discovery.json del mismo usuario, y después prueba la instalación fija y el PATH.

Para probar sin servicio, ejecuta `./nimotehost start` o `.\nimotehost.exe start` y deja esa ventana abierta. No arranques otra copia si ya hay un servicio activo. Host no configura SSH ni instala Agent. El teléfono lo alcanza por SSH; no abras su puerto HTTP local a internet.

### Paquetes y compilación desde código {#host-source}

Los archivos se llaman `nimotehost-<version>-<os>-<arch>` para CLI y `nimotehost-gui-<version>-<os>-<arch>` para escritorio. Linux/macOS usan `.tar.gz` y Windows `.zip`. Descarga la distribución binaria completa, no el archivo Source code de GitHub. Compara su hash con el `.sha256` adjunto antes de extraer todo el contenido. El escritorio Linux requiere glibc 2.35 o posterior; los paquetes macOS no están firmados ni notarizados.

Con Git y Go 1.26.5+, ejecuta como usuario normal:

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

Con código completo facilitado por el mantenedor, entra en su raíz y ejecuta la última línea. Funciona también en PowerShell: compila, verifica, instala e inicia la CLI. Para generar un paquete sin instalar, usa `go run ./tools/build`; el escritorio usa `go run ./tools/build -gui` y requiere SDK nativo y compilador C.

### Servicio y gestor de escritorio

Linux necesita un gestor de usuario systemd; macOS requiere la sesión gráfica del usuario; Windows usa una tarea programada al iniciar sesión. Sin ese entorno, usa el modo de primer plano. Mantén el ordenador despierto y SSH accesible, directamente o mediante tu VPN.

El directorio instalado es `~/.local/share/nimotehost` en Linux/macOS y `%LOCALAPPDATA%\NimoteHost` en Windows. Añádelo al PATH o usa la ruta completa. Abre `NimoteHost.app`, `nimotehost-gui.exe` o `nimotehost-gui` según el sistema. Overview muestra el servicio, Sessions las sesiones, Devices los dispositivos restringidos y Settings la configuración; Help & diagnostics ofrece registros. Cerrar la ventana conserva las tareas; detener Host las termina. Registrar un dispositivo requiere además configurar su clave SSH para restringir acceso.

[Resumen](/es/docs/host) · [Conexiones, terminales y tareas](/es/docs/host/sessions)
