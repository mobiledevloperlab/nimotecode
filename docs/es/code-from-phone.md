---
title: "Programar desde el móvil: archivos, Linux o SSH | NimoteCode"
description: "Empieza a programar en Android o iPhone. Elige edición local, Local Linux en Android o SSH y ejecuta tu primer script Python en el entorno adecuado."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Programar desde el móvil: elige dónde ejecutar

Puedes escribir código en el teléfono, pero ejecutarlo necesita un entorno compatible con el lenguaje y sus dependencias. NimoteCode ofrece edición local, SSH y Local Linux en Android compatible. Elige el proyecto antes de instalar todas las herramientas.

## Elige una ruta inicial

| Objetivo | Empieza con | Ejecución |
| --- | --- | --- |
| Editar texto, HTML o configuración | Carpeta local autorizada | Editar no proporciona un entorno de ejecución |
| Scripts en Android | Local Linux Android 8+ ARM64/x86_64 | Ubuntu y herramientas instaladas aparte |
| Continuar un proyecto del PC | SSH a Windows, Mac o Linux | Dependencias del equipo |

Local Linux utiliza PRoot sin root y no está disponible en iPhone o iPad. Un editor básico basta para texto; no necesitas configurar IA para empezar.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-editor.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-editor.webp" width="660" height="1433" alt="Edición en iPhone; ejecutar necesita un entorno configurado." loading="lazy" decoding="async">
  </a>
  <figcaption>Edición en iPhone; ejecutar necesita un entorno configurado. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Tu primer script Python

Crea `hello.py` en una carpeta con permiso de escritura:

```python
print("Hello from NimoteCode")
```

Guarda y ejecuta en esa carpeta de Local Linux o un equipo SSH Linux/macOS con Python 3 instalado:

```sh
python3 hello.py
```

Debe mostrar `Hello from NimoteCode`. Si no existe el comando, instala Python en el entorno de ejecución. Abrir un archivo no lo instala. En Windows usa el comando disponible en el equipo. Prepara [Local Linux](/es/docs/local-linux) o el [entorno remoto](/es/remote-coding).

## Continúa con tu proyecto

Abre la raíz, lee la configuración y revisa cambios existentes. Instala dependencias en el entorno elegido. Guarda, ejecuta comprobaciones y revisa Git. Consulta [editor](/es/docs/editor) y [control de código](/es/docs/source-control).

## Cuándo cambiar de entorno

Lleva herramientas incompatibles con PRoot o compilaciones pesadas a un equipo SSH adecuado. Para cambios grandes y depuración compleja, elige una pantalla y entrada que permitan revisar bien. [IDE móvil](/es/mobile-ide) explica las opciones.

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
