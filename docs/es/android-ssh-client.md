---
title: "Cliente SSH para Android: terminal, SFTP y editor | NimoteCode"
description: "Conecta Android a Linux, macOS o Windows con NimoteCode. Ejecuta comandos SSH, explora y edita archivos por SFTP y revisa cambios Git en un espacio remoto."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# Cliente SSH para Android con terminal, SFTP y editor de código

NimoteCode conecta tu teléfono o tableta Android a un equipo remoto mediante SSH. Ejecuta comandos, explora archivos del proyecto por SFTP y edita código desde la misma aplicación. El repositorio, las dependencias y las herramientas de compilación permanecen en el equipo remoto.

Puedes comprobar un servicio, modificar un archivo de configuración o corregir código cuando no tienes el ordenador a mano. Para trabajar con un proyecto, abre el repositorio como espacio remoto: tendrás acceso a sus archivos y a la revisión de cambios junto a la terminal.

## Comandos y archivos del proyecto

| Tarea | Cómo funciona en NimoteCode |
| --- | --- |
| Ejecutar comandos | La terminal SSH utiliza la shell y las herramientas instaladas en el equipo remoto. |
| Explorar archivos | Selecciona un directorio en el explorador remoto y accede a sus archivos por SFTP. |
| Editar código o configuración | Abre un archivo remoto en el editor y guárdalo en el servidor con los permisos de escritura de tu cuenta. |
| Revisar cambios | Examina las diferencias en Control de código fuente antes de confirmar. El servidor debe tener Git; algunas funciones avanzadas pueden requerir Pro. |

Linux y macOS utilizan la shell configurada en el equipo remoto. Los espacios Windows usan PowerShell y SFTP. La [guía de OpenSSH para Windows](/es/docs/windows-ssh-sftp) explica la instalación del servidor, el firewall y el acceso a archivos.

## Conecta Android al servidor SSH

Activa el servidor SSH y comprueba que tu cuenta puede acceder al directorio del proyecto. El equipo debe permanecer activo y ser accesible desde la red del dispositivo Android.

1. En NimoteCode, selecciona **Connect Remote Workspace** y después **Connect** para crear un perfil.
2. Introduce dirección, puerto SSH, usuario y un método de autenticación permitido por el servidor. En la misma red local, usa la dirección Wi-Fi o Ethernet activa del equipo.
3. Antes de aceptar la primera conexión, contrasta la huella de la clave del servidor con un registro obtenido por un canal de confianza.
4. Conecta y selecciona el proyecto en **Remote Directory**. Para un proyecto Git, elige la raíz del repositorio.
5. Comprueba el servidor, la cuenta y la ruta raíz que aparecen en el explorador remoto antes de editar.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Configuración SSH: servidor, puerto, usuario, autenticación y proxy opcional." />
  <DocScreenshot file="remote-workspace-connected.jpg" caption="El explorador remoto muestra el servidor conectado y la raíz del proyecto." />
</div>

**Alcance de la prueba de puerto:** **Ping / test SSH port** comprueba una conexión TCP directa al servidor y puerto indicados. No prueba el proxy configurado, no autentica la cuenta ni verifica SFTP. Un resultado correcto solo confirma esa comprobación de red.

Para acceder desde fuera de la red local, configura una vía segura, como una VPN. Si necesitas un proxy, el formulario admite SOCKS5 y HTTP CONNECT. Consulta los ajustes en la [referencia de espacios SSH](/es/docs/ssh).

## Verifica la conexión con una edición

Abre un archivo en un directorio de prueba de tu propiedad, haz un pequeño cambio y guárdalo. Vuelve a abrirlo para comprobar el contenido. Así verificas el acceso a archivos y los permisos de escritura por separado del acceso a la terminal.

Antes de ejecutar comandos, confirma el directorio de trabajo y la rama Git. En Linux o macOS:

```sh
pwd
git status --short --branch
```

Ejecuta las comprobaciones documentadas del proyecto en el equipo remoto y revisa las diferencias antes de confirmar. Los comandos usan el software instalado allí. Git, los servicios de lenguaje y los agentes de programación externos requieren su propia instalación, configuración y permisos.

## Solución de problemas de conexión

| Síntoma | Qué comprobar |
| --- | --- |
| La conexión agota el tiempo de espera | Encendido y suspensión del equipo, dirección, VPN, firewall y aislamiento de red. |
| Conexión rechazada | Que el servicio SSH esté activo y escuche en el puerto indicado. |
| Error de autenticación | Usuario, contraseña o clave y políticas de acceso del servidor. |
| La terminal funciona, pero los archivos no se abren | Subsistema SFTP y permisos de acceso al directorio. |
| Los archivos se abren, pero no se guardan | Propietario, permisos de escritura y sistema de archivos de solo lectura. |
| Falla un comando del proyecto | Directorio de la terminal, dependencias y permisos de las herramientas en el servidor. |

La [guía de configuración remota](/es/remote-coding) describe el proceso completo de conexión y verificación.

## Preguntas frecuentes

### ¿Necesito otro ordenador o servidor?

Para trabajar por SSH, sí. NimoteCode se conecta a un servidor SSH existente; los comandos de compilación y ejecución se procesan allí. Para trabajar íntegramente en un dispositivo Android compatible, consulta [IDE Android y Linux local](/es/android-ide).

### ¿El acceso a la terminal garantiza que SFTP funcione?

No. La shell SSH y el acceso SFTP dependen de ajustes distintos del servidor. La cuenta también necesita permiso para leer el directorio y escribir los archivos que vayas a modificar.

### ¿Qué incluye el plan gratuito?

Incluye espacios locales y SSH, edición y terminal básica. Las funciones avanzadas de Git, varias terminales y los servicios de lenguaje pueden requerir Pro. Consulta [Gratis y Pro](/es/pro) y las funciones disponibles para tu cuenta en la aplicación.

<div class="seo-cta">
  <p><strong>Instala NimoteCode para Android</strong></p>
  <p>Conecta tu servidor SSH y abre el directorio del proyecto.</p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Descargar en Google Play</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
