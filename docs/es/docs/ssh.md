---
title: Espacios de trabajo locales y SSH | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Espacios de trabajo locales y SSH."
---

# Espacios de trabajo locales y SSH

## Elegir un espacio de trabajo

Explorer ofrece acceso a espacios locales, SSH remotos, Local Linux y de demostración. Recent History muestra ubicaciones abiertas anteriormente. El espacio conectado determina los archivos y herramientas disponibles.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="Explorer antes de abrir un espacio, con tema claro." />
  <DocScreenshot file="workspace-start-dark.jpg" caption="Explorer antes de abrir un espacio, con tema oscuro." />
</div>

## Abrir una carpeta local

Seleccione **Open Local Workspace**, elija una ubicación en el selector del sistema y conceda acceso a la carpeta del proyecto. Ese directorio será la raíz de Local Explorer. El aspecto del selector y las ubicaciones disponibles dependen del sistema operativo.

<div class="doc-screenshots">
  <DocScreenshot file="local-storage-picker.png" caption="Selector de ubicación de almacenamiento de Android." />
  <DocScreenshot file="local-file-browser.png" caption="Selector de carpetas de Android con la acción Use this folder." />
  <DocScreenshot file="local-workspace-files.png" caption="Local Explorer después de seleccionar una carpeta; el ejemplo no muestra archivos del proyecto." />
</div>

## Configurar una conexión SSH

1. Seleccione **Connect Remote Workspace** y después **Connect** para añadir un perfil.
2. Introduzca host, puerto, usuario y método de autenticación.
3. Si es necesario, seleccione SOCKS5 o HTTP CONNECT en **Proxy Settings**.
4. Conecte y seleccione el directorio remoto del proyecto.

**Ping / test SSH port** comprueba una conexión TCP directa al host y puerto. No prueba el proxy ni autentica las credenciales. Un resultado correcto no establece un espacio de trabajo SSH.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Formulario SSH con prueba de puerto, proxy y autenticación." />
  <DocScreenshot file="remote-connection-history.png" caption="Recent History con un perfil SSH guardado." />
</div>

## Seleccionar la raíz del proyecto

Introduzca la ruta o navegue hasta la carpeta en el selector remoto. Una vez abierta, compruebe servidor, usuario, puerto y raíz en Explorer. Use **Select** para entrar en el modo de selección de archivos. Cambiar de directorio cambia el espacio que usan las herramientas del proyecto.

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="Diálogo Remote Directory para elegir la raíz del espacio de trabajo." />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer conectado, con el host y la ruta raíz activos." />
  <DocScreenshot file="remote-file-selection.jpg" caption="Remote Explorer en modo de selección de archivos." />
</div>
