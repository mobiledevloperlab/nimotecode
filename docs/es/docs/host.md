---
title: Usar Host：instalar NimoteHost y conectar sesiones | NimoteCode
description: Instala NimoteHost en Linux, macOS o Windows y conecta NimoteCode por SSH para usar terminales, tareas y Agent.
---

# Volver al trabajo remoto con Host

Host sirve para iniciar trabajo desde el móvil y volver más tarde. NimoteHost mantiene tareas y terminales en tu ordenador; NimoteCode usa SSH para mostrar la salida y enviar instrucciones.

## Qué puedes hacer con Host

- **Retomar el trabajo remoto:** Inicia una terminal o tarea desde el móvil y vuelve a conectarte para ver la salida y continuar una sesión que siga en ejecución.
- **Gestionar sesiones de Agent:** Usa Agents compatibles instalados en el ordenador, revisa las acciones de sus herramientas, responde a solicitudes de permisos y continúa la conversación.
- **Organizar el trabajo:** Busca, filtra y fija sesiones. Si el Host lo permite, la bandeja de tareas también muestra estados, registros de verificación y cambios de código.
- **Usar tu entorno de desarrollo:** Los comandos y Agents se ejecutan en la carpeta del proyecto del ordenador remoto. El móvil se conecta por SSH, por lo que no necesitas exponer a internet el puerto HTTP local de Host.

Host resulta útil para consultar compilaciones, pruebas y trabajo de Agent desde el móvil. Host y sus procesos deben seguir activos: la suspensión, el cierre de sesión o el reinicio de Host pueden interrumpir el trabajo, y reiniciar no restaura el proceso original. Las opciones de Agent, bandeja de tareas y plugins dependen de las capacidades del Host conectado.

Esta guía sigue la implementación 2.4.0. Host es una versión preliminar y las opciones dependen de sus capacidades. Las capturas son de un teléfono Android real, en inglés y con tema claro. El paquete móvil indicaba 2.3.1 (Build 64) y Host una compilación local 2.4.0.

## NimoteCode y NimoteHost

NimoteCode es el cliente; NimoteHost ejecuta las tareas en tu ordenador. Host ofrece CLI y gestor de escritorio para Linux, macOS y Windows. Se publicará bajo Apache-2.0 en [su repositorio](https://github.com/mobiledevloperlab/nimotehost); NimoteCode sigue siendo comercial y de código cerrado. Host también puede ejecutarse de forma independiente e integrarse por RPC, el cliente Go o MCP.

La conexión es **NimoteCode → SSH → NimoteHost → herramientas del proyecto**. No requiere otra cuenta Nimote ni un puerto público de Host. Las credenciales locales permanecen en el ordenador; los comandos tienen los permisos de su cuenta del sistema. Usa cuentas separadas para aislar usuarios. SSH normal funciona sin instalar Host; Host añade tareas que continúan tras desconectar y gestión de Agents compatibles.

El repositorio y las descargas estarán disponibles al publicarse. Si aparece 404 o faltan paquetes, utiliza una distribución o código completo del mantenedor, o espera la publicación. El modo Host de la implementación 2.4.0 se incluirá en 2.4.1; instalar el servicio no añade esta función a una aplicación antigua.

## Antes de empezar

Prepara un ordenador Linux, macOS o Windows accesible por SSH, una compilación de NimoteCode con modo Host y un Host compatible y una carpeta de proyecto accesible para la cuenta remota. La ruta del proyecto pertenece al ordenador, no al teléfono. Si aún no tienes SSH, sigue la [guía de conexión](/es/docs/ssh) o la de [Windows SSH](/es/docs/windows-ssh-sftp).

## 1. Descargar el paquete

En [NimoteHost Releases](https://github.com/mobiledevloperlab/nimotehost/releases), elige el paquete completo para tu sistema y CPU. CLI basta para un servidor; el paquete GUI añade el gestor de escritorio.

| Sistema | Etiqueta | CPU |
| --- | --- | --- |
| Linux | linux | amd64 para Intel/AMD de 64 bits; arm64 para ARM de 64 bits |
| macOS | darwin | arm64 para Apple Silicon; amd64 para Intel |
| Windows | windows | amd64 para x64; arm64 para ARM |

Linux y Windows también tienen CLI 386, sin GUI. Descarga la suma SHA256 y compárala con `sha256sum`, `shasum -a 256` o `Get-FileHash -Algorithm SHA256`, según el sistema. Conserva todo el paquete: binarios, scripts, licencias, BUILD.json, MODULES.json y SHA256SUMS. No borres los archivos que usa el servicio.

Si falta un paquete para tu equipo, consulta el [repositorio](https://github.com/mobiledevloperlab/nimotehost). Compilar desde código requiere Go 1.26.5 o posterior; los paquetes precompilados no necesitan Go.

## 2. Instalar en el ordenador

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

### Paquetes y compilación desde código

Los archivos se llaman `nimotehost-<version>-<os>-<arch>` para CLI y `nimotehost-gui-<version>-<os>-<arch>` para escritorio. Linux/macOS usan `.tar.gz` y Windows `.zip`. Descarga la distribución binaria completa, no el archivo Source code de GitHub. Compara su hash con el `.sha256` adjunto antes de extraer todo el contenido. El escritorio Linux requiere glibc 2.35 o posterior; los paquetes macOS no están firmados ni notarizados.

Con Git y Go 1.26.5+, una vez público el repositorio, ejecuta como usuario normal:

```sh
git clone https://github.com/mobiledevloperlab/nimotehost.git
cd nimotehost
go run ./tools/install
```

Con código completo facilitado por el mantenedor, entra en su raíz y ejecuta la última línea. Funciona también en PowerShell: compila, verifica, instala e inicia la CLI. Para generar un paquete sin instalar, usa `go run ./tools/build`; el escritorio usa `go run ./tools/build -gui` y requiere SDK nativo y compilador C.

### Servicio y gestor de escritorio

Linux necesita un gestor de usuario systemd; macOS requiere la sesión gráfica del usuario; Windows usa una tarea programada al iniciar sesión. Sin ese entorno, usa el modo de primer plano. Mantén el ordenador despierto y SSH accesible, directamente o mediante tu VPN.

El directorio instalado es `~/.local/share/nimotehost` en Linux/macOS y `%LOCALAPPDATA%\NimoteHost` en Windows. Añádelo al PATH o usa la ruta completa. Abre `NimoteHost.app`, `nimotehost-gui.exe` o `nimotehost-gui` según el sistema. Overview muestra el servicio, Sessions las sesiones, Devices los dispositivos restringidos y Settings la configuración; Help & diagnostics ofrece registros. Cerrar la ventana conserva las tareas; detener Host las termina. Registrar un dispositivo requiere además configurar su clave SSH para restringir acceso.

## 3. Conectar desde el móvil

Elige Host en la pantalla de modos y toca SSH connections. Selecciona la cuenta y el ordenador donde instalaste Host; usa New Remote Connection si aún no existe. Verifica la clave SSH al conectar por primera vez.

<div class="doc-screenshots">
  <DocScreenshot file="host-mode.png" caption="En la bienvenida, Host aparece junto a IDE, Terminal e IA." />
  <DocScreenshot file="host-setup.png" caption="La pantalla inicial pide instalar el servicio y elegir una conexión SSH." />
</div>

Si el servicio falta, está detenido o no es compatible, corrige esa condición y reintenta. El cliente no inicia automáticamente un Host detenido.

## 4. Abrir un terminal

Toca +, elige Terminal, escribe una carpeta remota que ya exista y pulsa Start session. Prueba pwd y echo Host connected; en PowerShell usa Get-Location para ver la carpeta.

<div class="doc-screenshots">
  <DocScreenshot file="host-terminal.png" caption="El terminal de ejemplo conserva pwd y echo Host connected al volver a abrirlo." />
</div>

El ejemplo usa /tmp/nimote-host-guide. macOS puede mostrar /private/tmp/nimote-host-guide. Para trabajar, utiliza tu proyecto real; no guardes archivos importantes en una carpeta temporal. Volver a la lista no termina el Shell. Para cerrarlo, escribe exit o usa Detener.

## 5. Encontrar la sesión otra vez

Busca por nombre o carpeta en Sessions. Usa All, Running e History para cambiar el filtro y abre la sesión original. El menú permite fijar y cambiar el nombre.

<div class="doc-screenshots">
  <DocScreenshot file="host-sessions.png" caption="El filtro por carpeta y Running muestra el terminal del ejemplo que sigue activo." />
</div>

Si pierdes SSH, vuelve al mismo Host. Mientras el servicio y el proceso sigan vivos, puedes retomar la sesión sin repetir el comando. Un reinicio de Host o del sistema no revive procesos: las sesiones pendientes quedan interrumpidas. Cerrar la sesión del usuario también depende de las reglas del servicio de cada sistema.

Si el inicio tarda y acaba en timeout, revisa la lista antes de crear otra sesión.

## 6. Ejecutar una tarea

En + → Task, elige carpeta y comando. Prueba echo Host connected y después el comando de compilación o pruebas de tu proyecto. Mira el código de salida y el registro; el nombre de una tarea no demuestra que las pruebas hayan pasado. Para interacción continua, usa Terminal.

## 7. Crear una conversación Agent

Instala y autentica Codex, Claude Code u OpenCode en el ordenador. Claude estructurado necesita además un adaptador claude-agent-acp compatible. Host no descarga esas herramientas ni incluye acceso a modelos.

En + → Agent, revisa la carpeta y elige Installed agent. Si falta la pestaña Agent, comprueba instalación, autenticación y PATH del servicio. Empieza con confirmación de cada permiso, o con Smart execution: automatiza lecturas, búsquedas y ediciones estructuradas verificables, pero pregunta ante operaciones sensibles o desconocidas.

<div class="doc-screenshots">
  <DocScreenshot file="host-agent-form.png" caption="Formulario de Agent con carpeta y política. Esta captura solo muestra la configuración; no se inició una tarea de modelo." />
</div>

Pide primero algo pequeño: encontrar los comandos de prueba sin editar archivos. Revisa herramientas y aprobaciones antes de seguir. Las aprobaciones automáticas siguen el sandbox del Agent y no habilitan publicación automática. Un worktree independiente parte del HEAD confirmado y deja los archivos sin confirmar en la carpeta original. Los controles de modelos, comandos, historial e indicaciones en curso dependen del proveedor.

## 8. Revisar la bandeja de tareas

Si aparece Task inbox, úsalo para encontrar aprobaciones, fallos, tareas en ejecución y resultados pendientes de revisión. Comprueba el comando de prueba real, su salida, código y revisión. Un mensaje del Agent no sustituye esas pruebas.

Tras revisar puedes marcar como tratado o archivar; no puedes ocultar aprobaciones pendientes. Para corregir, vuelve a la sesión original. Antes de abrir Git, confirma ordenador y carpeta.

El envío de Issues requiere la capacidad correspondiente, un proyecto y gh instalado y autorizado en el Host. La sesión GitHub del teléfono no se copia al ordenador. Empieza con publicación manual y revisa diff y verificaciones antes de crear un PR. La publicación automática se elige expresamente al enviar; Host no fusiona PR automáticamente.

## 9. Abrir plugins del Host

Busca los plugins del Host conectado en la configuración de la aplicación y abre los disponibles desde la barra lateral. Los formularios dependen del plugin; resuelve avisos de permisos o compatibilidad antes de repetir una operación. Consulta [plugins](/es/docs/plugins).

## Mantenimiento, actualización y datos

| Comando | Efecto |
| --- | --- |
| `nimotehost version` | Versión del ejecutable. |
| `nimotehost status` | Servicio disponible: `running: true`. |
| `nimotehost capabilities` | Protocolo, funciones y herramientas. |
| `nimotehost agents` | Versiones de Agents instalados. |
| `nimotehost install` | Registra e inicia el servicio desde una ruta fija. |
| `nimotehost stop` | Detiene Host y sus tareas activas. |
| `nimotehost restart` | Reinicia el servicio instalado; interrumpe tareas. |
| `nimotehost uninstall` | Elimina el servicio; conserva credenciales y registros. |

Usa el ejecutable instalado; en PowerShell puedes invocarlo con `& "$env:LOCALAPPDATA\NimoteHost\nimotehost.exe" status`. Para un servicio instalado detenido, usa `restart`; `start` funciona en primer plano. `setup` verifica e instala el paquete completo, mientras que `install` registra el binario ya ubicado.

En un host Unix comprueba el entorno SSH con `ssh user@host 'command -v nimotehost && nimotehost status'`, sustituyendo el destino. Si falta el comando, prueba `ssh user@host '$HOME/.local/share/nimotehost/nimotehost status'` y corrige el PATH no interactivo. Tras cambiar rutas de herramientas, termina tareas y ejecuta `stop` seguido de `install` desde el ejecutable instalado en el entorno corregido.

Para actualizar, verifica el nuevo paquete completo y ejecuta su instalador con la misma cuenta tras terminar tareas y cerrar el GUI anterior. Conserva el paquete previo y rechaza interrumpir tareas activas. Comprueba después versión, estado y capacidades. Antes de bajar de versión, haz copia de los datos. Ejecuta `uninstall` antes de borrar los archivos instalados; los registros y credenciales permanecen.

| Sistema | Configuración y estado predeterminados |
| --- | --- |
| Linux | `~/.config/nimotehost` o `$XDG_CONFIG_HOME/nimotehost` |
| macOS | `~/Library/Application Support/nimotehost` |
| Windows | `%APPDATA%\nimotehost` |

Haz copias solo con Host detenido, conserva permisos privados y no publiques credenciales ni conversaciones. Los archivos del proyecto y datos del proveedor Agent requieren copias separadas. Copiar registros no restaura procesos.

Diagnóstico: Linux `systemctl --user status nimotehost.service` y `journalctl --user -u nimotehost.service -n 50 --no-pager`; macOS `launchctl print gui/$(id -u)/com.nimotehost`; Windows `schtasks.exe /Query /TN NimoteHost /V /FO LIST`. Comprueba la sesión del usuario y, en Linux, la política de lingering para continuar tras cerrar sesión.

## Si no conecta

Primero comprueba SSH normal. Si Host no aparece, revisa la cuenta, instalación y PATH; en Windows, el discovery.json del mismo usuario. Si está detenido, consulta nimotehost status en el ordenador. Si el protocolo no coincide, actualiza app y Host a versiones compatibles.

Una salida visible puede ser historial cargado: verifica conexión y proceso antes de escribir. Revisa que la carpeta remota exista y sea accesible. Si no sabes si una creación terminó, busca la sesión original antes de repetirla. Termina el trabajo activo antes de reiniciar, actualizar o detener Host.

[SSH](/es/docs/ssh) · [Agent](/es/docs/ai) · [Tareas](/es/docs/tasks)
