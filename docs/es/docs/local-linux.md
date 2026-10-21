---
title: Android Local Linux Overview | NimoteCode
description: Understand NimoteCode's bundled Ubuntu development environment on supported Android devices, its PRoot architecture, compatibility, integrity, presets, and troubleshooting resources.
---

# Descripción general de Linux local de Android


Local Linux proporciona un entorno de desarrollo Ubuntu incluido en dispositivos Android compatibles. Es una tercera opción de espacio de trabajo junto con un proyecto almacenado en el dispositivo y un host SSH remoto. Una vez abierto, utiliza los conocidos flujos de trabajo Explorer, Editor, Terminal, Git, AI, Tasks, LSP y Debug a través de su conexión SSH local.


## Disponibilidad y requisitos


Linux local está disponible solo en Android 8 o posterior con una aplicación ARM64 o x86_64 de 64 bits. No está disponible en iPhone o iPad y los dispositivos ARM de 32 bits no son compatibles. No se requiere acceso raíz ni una aplicación de terminal independiente.


El entorno incluido incluye Ubuntu, Bash, Git y SSH. De forma predeterminada, no incluye cadenas de herramientas de idiomas, servidores de idiomas, adaptadores de depuración ni CLI de agentes externos; Instale las herramientas que su proyecto necesita después de abrir el entorno. Utiliza PRoot, que proporciona un espacio de usuario de Linux sin otorgar acceso de root a Android.


## Instalar y abrir el entorno


1. Desde el espacio de trabajo o el selector del Explorador, seleccione **Linux local**.

2. Seleccione **Instalar** y espere a que se prepare el entorno incluido.

3. Seleccione **Iniciar**, luego **Abrir** para trabajar en el directorio predeterminado `/workspace`.

4. Abra archivos en el Explorador, ejecute comandos en [Terminal](/docs/terminal) e inspeccione los cambios de Git en [Control de código fuente](/docs/source-control).


La instalación inicial utiliza la imagen de Ubuntu incluida. La instalación de paquetes adicionales más adelante puede requerir acceso a Internet.


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux.jpg" width="930" height="2048" alt="NimoteCode Local Linux panel showing the environment status and Open, Start, Reset, and Delete Environment controls" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">The Local Linux panel shows the environment status, storage use, and its workspace and lifecycle controls.</figcaption>
</figure>

## Administrar su ciclo de vida


La página Linux local le permite iniciar, detener, restablecer o eliminar el entorno. Al detenerlo se cierra su espacio de trabajo activo; iniciarlo de nuevo se vuelve a conectar al mismo entorno. Restablecer y eliminar son acciones destructivas: revise la confirmación antes de usar cualquiera de ellas. La eliminación de Linux local elimina los datos de su entorno sin eliminar su otro dispositivo o espacios de trabajo SSH.


## Usa IA en el entorno local


Una vez que el entorno está abierto, [AI Chat and Agent](/docs/ai) puede funcionar en el mismo espacio de trabajo local de Linux que Explorer y Terminal. Comience con una pequeña solicitud de solo lectura, como verificar la versión del sistema operativo, luego revise los comandos y resultados planificados antes de permitir cualquier cambio.


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Local_Linux_AI_Agent.jpg" width="930" height="2048" alt="NimoteCode AI Agent reporting the Ubuntu version and ARM64 architecture from a Local Linux workspace" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">An AI Agent can inspect the Local Linux environment and present the result alongside its command plan.</figcaption>
</figure>

## Almacenamiento, red y comportamiento de procesos


Los archivos del entorno se guardan en el almacenamiento privado de la aplicación NimoteCode. El servicio SSH integrado escucha solo en la dirección de bucle invertido del dispositivo, por lo que NimoteCode lo utiliza en lugar de exponerlo como un servidor SSH de red. Android puede pausar o detener procesos en segundo plano; Después de regresar a la aplicación, inicie Local Linux nuevamente si está detenida.


## Documentación local de Linux


- [Comenzando](/docs/local-linux/getting-started): prepare, instale y elija un espacio de trabajo.

- [Arquitectura](/docs/local-linux/architecture): límites de Android, PRoot, Ubuntu y SSH local.

- [Compatibilidad](/docs/local-linux/compatibility): expectativas de dispositivo, arquitectura y carga de trabajo.

- [Seguridad e integridad](/docs/local-linux/security-integrity): guía de suma de verificación, paquete y credenciales.

- [Linux Presets](/docs/local-linux/presets): manifiestos, verificación del instalador y repositorio técnico independiente.

- [Solución de problemas](/docs/local-linux/troubleshooting): comprobaciones prácticas para problemas de instalación, paquete y ciclo de vida.


## Licencias y fuente correspondiente


El entorno incluido es Ubuntu, por lo que sus componentes GPL y LGPL requieren que la fuente correspondiente se publique con la aplicación. El paquete fuente completo, su suma de verificación, manifiestos, procedencia y avisos de licencia se enumeran en [Fuente y licencias locales de Linux] (/docs/local-linux-source). Los mismos avisos están disponibles dentro de la aplicación desde sus páginas de licencia.

Siguiente: [Comenzando](/docs/local-linux/getting-started) · [Preajustes de Linux](/docs/local-linux/presets) · [Espacios de trabajo SSH locales y remotos](/docs/ssh) · [Fuente y licencias locales de Linux](/docs/local-linux-source)
