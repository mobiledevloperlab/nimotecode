---
title: "Cliente SSH para iPhone con SFTP, editor y Git | NimoteCode"
description: "Conecta NimoteCode en iPhone por SSH, explora archivos con SFTP, edita código, ejecuta comandos del equipo remoto y revisa Git. Configuración y descarga en App Store."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Cliente SSH para iPhone: trabaja en tu proyecto

¿Necesitas consultar un archivo del servidor, corregir un script o revisar un repositorio fuera de casa? NimoteCode reúne terminal SSH, explorador remoto, editor, revisión Git e IA opcional en un espacio para iPhone. El proyecto permanece en el equipo remoto y el teléfono proporciona la interfaz.

Para ejecutar solo comandos puede bastar una terminal dedicada. NimoteCode resulta útil cuando también necesitas encontrar un archivo, editarlo, comprobar el resultado y revisar los cambios.

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="Remote Explorer de NimoteCode en iPhone con el proyecto y la conexión SSH." loading="lazy" decoding="async">
  </a>
  <figcaption>Remote Explorer de NimoteCode en iPhone con el proyecto y la conexión SSH. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## Conecta el iPhone a tu equipo de desarrollo

1. Activa el servidor SSH en Windows, Mac o Linux y confirma que el equipo esté encendido y accesible. En Windows, sigue la [guía de OpenSSH y SFTP](/es/docs/windows-ssh-sftp).
2. Elige **Connect Remote Workspace** e introduce servidor, puerto, usuario y autenticación.
3. Antes de aceptar la primera conexión, compara la huella de la clave con un valor fiable obtenido en el equipo.
4. Selecciona la raíz del repositorio y confirma conexión y ruta en Remote Explorer.
5. Edita y guarda un archivo de prueba en una carpeta del usuario y comprueba el resultado en el equipo remoto.

La [guía SSH](/es/docs/ssh) explica perfiles y selección de carpetas. Fuera de la LAN necesitas una ruta segura, como una VPN. Instalar el cliente no hace accesible el servidor por sí solo.

## Explora por SFTP y edita en el mismo espacio

Busca código, documentación y configuración en el árbol del proyecto y abre archivos en pestañas. Guarda antes de ejecutar herramientas externas. SFTP respeta los permisos de la cuenta; iniciar sesión no concede escritura en todas las carpetas.

Las rutas SFTP de Windows pueden diferir de las locales. Utiliza las rutas que devuelve el servidor. La [guía del editor](/es/docs/editor) explica pestañas, selección de texto y paneles divididos.

## Ejecuta comandos y revisa Git

Los comandos se ejecutan en el equipo remoto. Allí deben estar los compiladores, Git, servidores de lenguaje y dependencias. Comprueba carpeta y rama antes de editar; lee el diff y ejecuta las comprobaciones del proyecto antes de confirmar.

iOS puede suspender aplicaciones en segundo plano. Para tareas largas, prepara una estrategia de sesiones en el equipo y verifica su estado al reconectar.

## Qué funciona en iPhone y qué necesita un equipo remoto

Las carpetas locales permiten editar archivos con los permisos de iOS, pero no proporcionan automáticamente compiladores ni Linux. **Local Linux de NimoteCode es exclusivo de Android**. Este flujo para iPhone ejecuta los comandos del proyecto en el equipo SSH. La IA es opcional y requiere configurar el proveedor. Consulta [IA](/es/docs/ai) y [programar con iPad](/es/ipad-coding).

## Preguntas frecuentes

<!-- faq:start -->

### ¿Admite SFTP en iPhone?

Sí. El espacio SSH utiliza SFTP para acceder a archivos remotos, según la configuración del servidor y los permisos de la cuenta. Comprueba por separado listado, apertura y guardado de un archivo de prueba.

### ¿Puedo ejecutar Ubuntu directamente en iPhone?

No. Local Linux de NimoteCode solo está disponible en dispositivos Android compatibles. En iPhone, un equipo SSH proporciona la shell Linux y las herramientas del proyecto.

### ¿Debo configurar IA antes de usar SSH?

No. Puedes conectar, explorar archivos, editar y usar la terminal básica sin configurar un modelo. La IA tiene requisitos independientes de proveedor y acceso.

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
