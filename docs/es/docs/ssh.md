---
title: Espacios de trabajo locales y SSH | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Espacios de trabajo locales y SSH."
---

# Espacios de trabajo locales y SSH

## Elegir un espacio de trabajo

Explorer ofrece acceso a espacios locales, SSH remotos, Local Linux y de demostración. Recent History muestra ubicaciones abiertas anteriormente. El espacio conectado determina los archivos y herramientas disponibles.

<div class="doc-screenshots">
  <DocScreenshot file="workspace-start-light.png" caption="Entradas al espacio de trabajo antes de abrir un proyecto, con tema oscuro." />
</div>

## Abrir una carpeta local

Seleccione **Open Local Workspace**, elija una ubicación en el selector del sistema y conceda acceso a la carpeta del proyecto. Ese directorio será la raíz de Local Explorer. El aspecto del selector y las ubicaciones disponibles dependen del sistema operativo.

### Elegir la ubicación de almacenamiento

Tras seleccionar **Open Local Workspace**, busca el proyecto en el selector del sistema. El ejemplo muestra Android; otros sistemas pueden tener una interfaz distinta.

### Autorizar el acceso a la carpeta

Abre la carpeta del proyecto, comprueba la ubicación y selecciona **Use this folder** para autorizar el acceso. Elige el directorio del proyecto, no un archivo individual.

### Comprobar el espacio de trabajo local

Al volver a Local Explorer, comprueba el directorio raíz. La carpeta del ejemplo está vacía; al abrir tu proyecto, verifica que sus archivos aparezcan aquí.

<div class="doc-screenshots">
  <DocScreenshot file="local-workspace-files.png" caption="Local Explorer con el proyecto Python temporal en Android." />
</div>

## Configurar una conexión SSH

1. Seleccione **Connect Remote Workspace** y después **Connect** para añadir un perfil.
2. Introduzca host, puerto, usuario y método de autenticación.
3. Si es necesario, seleccione SOCKS5 o HTTP CONNECT en **Proxy Settings**.
4. Conecte y seleccione el directorio remoto del proyecto.

**Ping / test SSH port** comprueba una conexión TCP directa al host y puerto. No prueba el proxy ni autentica las credenciales. Un resultado correcto no establece un espacio de trabajo SSH.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Formulario de conexión SSH con host, usuario, puerto y configuración de proxy." />
  <DocScreenshot file="remote-connection-history.png" caption="Conexión SSH guardada en el panel Connection environments." />
</div>

## Conectar con un equipo vinculado {#paired-computers}

En NimoteCode 2.5.0, inicia sesión y abre **Connect / Tailscale** en el selector de conexiones. Para vincular un equipo, elige **Introducir código de vinculación** y usa el código de un solo uso que muestra Nimote Connect en ese ordenador. Puedes eliminar la vinculación desde la lista.

Para usar Tailscale personal, conecta ambos dispositivos a la misma tailnet y habilita SSH en el ordenador. Selecciona el equipo y elige conectarte mediante Tailscale. La aplicación usa la IP de Tailscale o el nombre MagicDNS sincronizado. Introduce el usuario y la contraseña o clave SSH. Si falla, comprueba la dirección, el puerto SSH y MagicDNS si usas un nombre.

Nimote Relay es una opción independiente para equipos compatibles vinculados con acceso remoto activado. La conectividad pública sigue en validación, incluidas las conexiones directas entre redes y los cambios de ruta.

En Android, iPhone y iPad, las conexiones directas gestionadas y el relay de Nimote Connect requieren Pro. SSH estándar, Tailscale personal y Nimote Connect en versiones de escritorio son gratuitos.

Relay muestra cada paso desde la autorización hasta el inicio de sesión SSH. El equipo debe estar en línea con acceso remoto activado. Desvincularlo revoca su acceso por Relay. Para el modo Host, mantén el móvil y el equipo Host en la misma LAN.

## Seleccionar la raíz del proyecto

Introduzca la ruta o navegue hasta la carpeta en el selector remoto. Una vez abierta, compruebe servidor, usuario, puerto y raíz en Explorer. Use **Select** para entrar en el modo de selección de archivos. Cambiar de directorio cambia el espacio que usan las herramientas del proyecto.

### Localizar el directorio remoto

En **Remote Directory**, introduce la ruta o recorre las carpetas y selecciona la raíz del proyecto que quieras abrir.

<div class="doc-screenshots">
  <DocScreenshot file="remote-directory-picker.jpg" caption="Diálogo Remote Directory para elegir la raíz del espacio de trabajo." />
</div>

### Verificar la conexión y la ruta

Comprueba el host, el usuario, el puerto y la ruta raíz de Remote Explorer para confirmar que estás en el proyecto remoto correcto.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer conectado, con el host y la ruta raíz activos." />
</div>

### Activar la selección de archivos

Haz clic en **Select** para entrar en el modo de selección. Comprueba el espacio de trabajo actual antes de elegir los archivos.

<div class="doc-screenshots">
  <DocScreenshot file="remote-file-selection.jpg" caption="Remote Explorer en modo de selección de archivos." />
</div>


## Espacios Windows SSH

En hosts Windows, PowerShell y SFTP permiten trabajar con proyectos remotos. La búsqueda de archivos, Git y terminal necesitan las herramientas correspondientes en el host.

[Configuración y diagnóstico de Windows 11](/es/docs/windows-ssh-sftp)

## NimoteCode 2.4.0

**Espacio Host.** Instala e inicia NimoteHost compatible en la máquina remota y conecta por SSH para buscar, fijar y retomar sesiones de terminal y Agent. Host es opcional.

Verificación de claves SSH reforzada y mejor compatibilidad de Windows con known_hosts y servidores SSH modernos de macOS.

[2.4.0 →](/es/releases/2.4.0)

[Modo Host →](/es/docs/host) — Instalar NimoteHost, conectar por SSH y retomar terminales y tareas Agent.
