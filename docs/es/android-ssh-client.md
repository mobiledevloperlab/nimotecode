---
title: "Cliente SSH Android con SFTP, editor y terminal | NimoteCode"
description: "Conecta NimoteCode desde Android a Linux, Mac o Windows. Configura autenticación SSH, explora archivos SFTP, edita y verifica el proyecto remoto."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Cliente SSH Android para comandos y archivos

Para comandos del servidor o configuración remota, NimoteCode reúne SSH, SFTP, edición y revisión Git. Una terminal dedicada basta para comandos; el espacio de proyecto ayuda cuando también necesitas archivos y cambios.

## Configura y verifica la conexión

Introduce servidor, puerto, cuenta y autenticación permitida. Verifica la huella en la primera conexión. La prueba de puerto solo comprueba TCP directo; no autentica ni demuestra que SFTP funcione. Selecciona la raíz al conectar.

<div class="doc-screenshots">
  <DocScreenshot file="remote-connection-form.jpg" caption="Formulario SSH en Android con prueba de puerto y autenticación." />
</div>

## Dirección y permisos

En la LAN utiliza la dirección activa Wi-Fi o Ethernet. Fuera, prepara una ruta segura como VPN. El equipo debe permanecer encendido. La autenticación sigue la política del servidor y guardar por SFTP también necesita permisos de archivo.

Windows usa PowerShell y SFTP; sigue la [guía Windows](/es/docs/windows-ssh-sftp) para OpenSSH y firewall. Mac y Linux utilizan la shell configurada.

## Verifica también los archivos

Abre y guarda un archivo de prueba en una carpeta del usuario, comprueba el directorio de terminal y las verificaciones, y lee el diff. Git, servicios de lenguaje y agentes externos requieren instalación y permisos en el equipo.

Para pasos y errores consulta [configuración remota](/es/remote-coding). Sin equipo aparte, lee [IDE Android](/es/android-ide); para funciones, [IDE SSH](/es/ssh-ide).

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
