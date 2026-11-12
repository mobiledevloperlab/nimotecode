---
title: "Desarrollo remoto desde el móvil: configurar SSH | NimoteCode"
description: "Configura desarrollo remoto en Android, iPhone o iPad: host SSH, acceso SFTP, repositorio, comprobaciones y diagnóstico de red y autenticación."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Desarrollo remoto: conecta el móvil a tu proyecto

Deja repositorio, dependencias y servicios en el equipo y usa NimoteCode para explorar y editar. Esta guía cubre configuración y verificación; [IDE SSH](/es/ssh-ide) explica las funciones.

## 1. Prepara equipo y red

Activa SSH, mantén el equipo encendido y confirma acceso al repositorio. Empieza con la dirección LAN real. Fuera de ella necesitas una ruta segura, como VPN. Una regla de firewall no garantiza por sí sola la conexión.

## 2. Comprueba conexión y archivos

1. Configura servidor, puerto, cuenta y autenticación permitida; verifica la huella.
2. Selecciona la raíz en Remote Explorer y prueba apertura y guardado en una carpeta del usuario para verificar SFTP y escritura.
3. Confirma carpeta y rama de la terminal por separado. En Linux o macOS puedes usar este ejemplo.

```sh
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-ssh.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-ssh.webp" width="660" height="1433" alt="Remote Explorer en iPhone con el proyecto SSH conectado." loading="lazy" decoding="async">
  </a>
  <figcaption>Remote Explorer en iPhone con el proyecto SSH conectado. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## 3. Verifica un cambio real

Guarda, ejecuta las comprobaciones del proyecto en el equipo y revisa Git. Conectar una shell no instala dependencias ni garantiza el mismo checkout que el editor. Gestiona las sesiones largas en el equipo y verifica su estado tras reconectar.

## Diagnostica cada capa

| Síntoma | Comprobación |
| --- | --- |
| Tiempo agotado | Encendido, dirección, VPN, firewall y aislamiento |
| Conexión rechazada | Servicio SSH y puerto de escucha |
| Autenticación fallida | Usuario, política, contraseña o clave |
| Solo funciona shell | SFTP y permisos de carpeta |
| Comando falla | Ruta, dependencias y permisos |

En Windows sigue [OpenSSH/SFTP](/es/docs/windows-ssh-sftp). Sin equipo remoto, consulta [programar desde el móvil](/es/code-from-phone); los controles están en la [referencia SSH](/es/docs/ssh).

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
