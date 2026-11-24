---
title: Terminal | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Terminal."
---

# Terminal

<div class="doc-section">
<div class="doc-section__copy">

## Ejecutar comandos del espacio de trabajo

Abra Terminal en el espacio SSH o Local Linux activo. Ejecute `pwd` para confirmar el directorio y después el comando del proyecto. La salida pertenece a esa sesión; cambiar de pestaña del editor no cambia el directorio del shell.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-command-output.png" caption="Terminal con la salida de ls." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Buscar, copiar y analizar la salida

El menú de sesión incluye búsqueda, portapapeles, **Analyze with AI**, borrado de salida y cierre de sesión. Analyze with AI envía el contexto del terminal para obtener una explicación. Revise el contenido seleccionado antes de enviarlo al proveedor.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="terminal-actions-menu.jpg" caption="Acciones de sesión, incluidas Analyze with AI y Refresh Remote Environment." />
</div>

</div>

## Reanudar un terminal SSH con tmux {#persistent-ssh-terminal}

En NimoteCode 2.5.0 con Pro, conéctate a un host Linux o macOS compatible con tmux instalado. En el menú de terminal, elige crear un terminal persistente o consulta las sesiones tmux remotas para volver a una sesión del mismo host y usuario SSH. La lista usa el socket tmux predeterminado de ese usuario.

Cerrar la pestaña local desconecta el cliente y deja la sesión en marcha. Para detener la sesión y sus procesos, elige finalizar la sesión tmux remota y confirma. La sesión termina si el host se reinicia o el servidor tmux se detiene.

Si un programa como Codex o Claude Code captura el ratón, mantén pulsada Mayús mientras arrastras y copia desde el menú contextual. NimoteCode 2.5.0 conserva la selección tras el redibujado.

Reanuda una sesión tmux guardada desde el historial o usa la lista remota en otro cliente con el mismo usuario SSH. En horizontal, Esc, Ctrl y otras teclas aparecen si el teclado está abierto y queda espacio.

Con tmux instalado en Linux local de Android, el mismo menú permite abrir sesiones dentro del entorno en ejecución. Al detener el entorno, terminan las sesiones. Las acciones de persistencia no se ofrecen dentro de Dev Containers ni en hosts SSH nativos de Windows.

## Actualizar el entorno remoto

Tras cambiar la configuración del shell de la cuenta remota, seleccione **Refresh Remote Environment** o reconecte. Las herramientas remotas, como Tasks, Git, servidores de lenguaje, adaptadores de depuración y agentes externos, comparten el entorno de inicio de sesión obtenido.

## Personalizar pestañas del terminal

Abra el menú de personalización para cambiar el nombre o color de una pestaña, o restablecer sus ajustes. **Customize Terminal Tab** permite definir título, color e icono juntos. Estos ajustes identifican sesiones; no cambian el host ni el entorno de los comandos.

<div class="doc-screenshots">
  <DocScreenshot file="terminal-customize-menu.jpg" caption="Menú de personalización de pestañas." />
  <DocScreenshot file="terminal-tab-style-form.jpg" caption="Ajustes de título, color e icono de la pestaña." />
</div>


## Terminal dividido e integrado

Abre y ajusta varios paneles. Desde una ruta de archivo en la salida puedes abrirla en el IDE o enviar el texto seleccionado a la IA para analizarlo.

## NimoteCode 2.4.0

Mayor respuesta del terminal, actualizaciones sincronizadas, búsqueda, desplazamiento, Vim, portapapeles, pegado en Windows y teclado virtual.

[2.4.0 →](/es/releases/2.4.0)
