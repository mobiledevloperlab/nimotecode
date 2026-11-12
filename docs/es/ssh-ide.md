---
title: "IDE SSH: archivos remotos, terminal y Git | NimoteCode"
description: "Explora el IDE SSH de NimoteCode: archivos SFTP, edición, terminal del equipo, Git y herramientas del lenguaje. Comprende conexión, permisos y requisitos."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# IDE SSH para trabajar en un proyecto remoto

Una terminal SSH basta para un comando conocido. Un IDE SSH ayuda cuando necesitas encontrar el repositorio, editar y revisar el parche. NimoteCode reúne explorador, editor, terminal, Git e IA opcional en Android, iPhone y iPad.

## Separa las tres capas

| Capa | Objetivo | Requisito |
| --- | --- | --- |
| SSH | Conectar y autenticar | Servidor accesible y cuenta autorizada |
| SFTP | Explorar y guardar archivos | Subsistema y permisos |
| Herramientas | Git, pruebas, servicios del lenguaje y Agent | Dependencias, credenciales y ejecución |

Una shell operativa no demuestra que SFTP funcione. Abrir un archivo tampoco instala sus herramientas.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="Editor iPhone con pestañas de código y teclado." loading="lazy" decoding="async">
  </a>
  <figcaption>Editor iPhone con pestañas de código y teclado. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Qué aporta el espacio

Selecciona la raíz en Explorer y usa pestañas o paneles divididos. Guarda antes de ejecutar comandos. Control de código fuente muestra cambios e historial; escritura Git y GitHub dependen del acceso. Servidores de lenguaje y depuración necesitan configuración compatible en el destino.

## Adapta el entorno al equipo

Windows utiliza PowerShell y SFTP; consulta su [configuración](/es/docs/windows-ssh-sftp). Mac y Linux usan la shell y las herramientas del equipo. Mantén encendido el equipo con las dependencias necesarias; una conexión no mantiene los procesos.

## Configuración y diagnóstico

Sigue [desarrollo remoto](/es/remote-coding) y la [referencia SSH](/es/docs/ssh). Para elegir ejecución local o remota, lee [IDE móvil](/es/mobile-ide); para los modos de agentes, [IA móvil](/es/mobile-ai-coding).

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
