---
title: "Programar en iPad con SSH, editor, Git e IA | NimoteCode"
description: "Programa con NimoteCode en iPad: explorador, editor dividido, terminal SSH y revisión Git. Conoce la ejecución remota, las limitaciones de iPadOS y los primeros pasos."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Programa en iPad con tu entorno de desarrollo

La pantalla de una tablet ayuda a comparar código y salida de comandos. NimoteCode ofrece explorador, editor dividido, terminal SSH, Git e IA opcional en iPad. Puedes revisar un pull request, actualizar documentación o resolver un fallo concreto mientras el equipo de desarrollo realiza el trabajo pesado.

Para una nota puede bastar un editor sencillo. Para cambiar un proyecto, decide primero dónde se ejecutarán sus dependencias, comprobaciones y servicios.

<figure class="article-hero">
  <a href="/images/ios/ipad-workspace.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-workspace.webp" width="1200" height="899" alt="Vista de NimoteCode para iPad en App Store, con navegación del proyecto y edición." loading="lazy" decoding="async">
  </a>
  <figcaption>Vista de NimoteCode para iPad en App Store, con navegación del proyecto y edición. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Elige edición local o proyecto remoto

| Tarea | Dónde se ejecuta | Requisitos |
| --- | --- | --- |
| Editar archivos locales | iPad mediante un proveedor autorizado | Permiso sobre la carpeta |
| Comandos y compilaciones | Equipo SSH | Herramientas, dependencias y conexión |
| Revisar Git | Espacio Git activo | Repositorio compatible y permisos |
| Consultar a la IA | Proveedor y herramientas configuradas | Credenciales y acceso a funciones |

**Local Linux de Android no está disponible en iPadOS.** Abrir una carpeta no instala Node.js, Python, compiladores ni una shell Linux. Las carpetas de proveedores de archivos pueden limitar herramientas que necesitan rutas nativas. Consulta la [configuración del espacio de trabajo](/es/docs/ssh).

## Prepara el flujo en iPad

1. Instala desde App Store y revisa los requisitos de dispositivo y sistema.
2. Configura SSH a un equipo Windows, Mac o Linux encendido, verifica su huella y selecciona la raíz del repositorio.
3. Abre archivos y usa el editor dividido para compararlos. Confirma por separado la carpeta de la terminal.
4. Guarda, ejecuta las comprobaciones en el equipo remoto y revisa el diff antes de confirmar.

La [guía Windows](/es/docs/windows-ssh-sftp) cubre PowerShell y SFTP. Fuera de la LAN necesitas una ruta segura hacia el equipo.

## Aprovecha la pantalla para revisar

Mantén archivos relacionados en pestañas y compara implementación, configuración y pruebas. [Control de código fuente](/es/docs/source-control) muestra cambios, diferencias e historial. Las acciones GitHub dependen de tus permisos. El entorno de ejecución sigue estando en el equipo remoto.

<figure class="article-hero">
  <a href="/images/ios/ipad-git.webp" target="_blank" rel="noopener">
    <img src="/images/ios/ipad-git.webp" width="1200" height="899" alt="Vista para iPad en App Store con herramientas Git AI y análisis de cambios." loading="lazy" decoding="async">
  </a>
  <figcaption>Vista para iPad en App Store con herramientas Git AI y análisis de cambios. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Añade IA cuando ayude

Empieza por explicar código desconocido o analizar un error concreto. Nimote Agent utiliza las herramientas disponibles y en modo Confirm espera la aprobación del plan. Los agentes ACP externos necesitan su propio entorno compatible y credenciales. Consulta la [guía de IA](/es/docs/ai).

## Ten en cuenta el segundo plano de iPadOS

Cambiar de aplicación o bloquear la pantalla puede interrumpir la conexión. Un multiplexor de terminal en el equipo ayuda a conservar sesiones, pero no evita que el equipo se suspenda o reinicie. Al reconectar, comprueba archivos guardados y estado de los procesos. Una refactorización grande o una depuración larga pueden resultar más cómodas en un ordenador.

## Preguntas frecuentes

<!-- faq:start -->

### ¿Puedo usar Local Linux en iPad?

No. Local Linux es exclusivo de Android. En iPad, utiliza un equipo SSH para el entorno de ejecución, las herramientas de terminal y las compilaciones.

### ¿Puedo abrir archivos locales en iPad?

Sí, según los permisos de iPadOS y del proveedor de archivos. Abrir una carpeta no garantiza que funcionen todas las herramientas que requieren rutas nativas.

### ¿Tiene exactamente las funciones de Android?

Comparte la edición y los flujos SSH principales, pero los entornos son distintos. Local Linux no está disponible en iPad y los permisos y la ejecución en segundo plano dependen de la plataforma.

<!-- faq:end -->

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
