---
title: "Remote Coding from Your Phone or Tablet | NimoteCode"
description: "Remote coding from a phone or tablet done right: connect over SSH to your development machine, edit the real project, run terminal commands and review Git changes with NimoteCode."
---

# Codificación remota desde su teléfono o tableta


Codificación remota significa editar y ejecutar el proyecto en una máquina mientras interactúas desde otra. La configuración más común es un teléfono o tableta que se conecta a través de SSH a su computadora de escritorio, portátil o servidor y trabaja en el repositorio real en lugar de una copia.


NimoteCode es un espacio de trabajo móvil creado para ese modelo. En lugar de reducir la codificación remota a un flujo de texto de shell, le brinda un Explorador para el proyecto, un editor para los archivos, una terminal para comandos, Git para revisión y asistencia de IA para contexto, todo conectado al mismo host remoto.


<ImagePlaceholder image-key="sshIde" alt="Remote coding workspace over SSH">
  <strong>Image placeholder — Remote coding session</strong>
  <span>Replace with the remote project Explorer, an open file and a running command from one SSH workspace.</span>
</ImagePlaceholder>

## Qué requiere realmente la codificación remota


Una configuración remota viable necesita tres cosas: un host en el que confíes y al que puedas acceder a través de SSH, una conexión que sobreviva a los cambios de la red móvil y un espacio de trabajo que mantenga juntos los archivos, el terminal y Git. Las herramientas que solo le brindan uno de esos (un cliente SSH simple o un editor sin conexión) dejan el ciclo roto.


## Cuando la codificación remota es útil


- Su código base reside en un servidor o escritorio Mac, Linux y usted está lejos de él.

- Necesitas investigar un incidente, aplicar una pequeña solución o revisar una diferencia de forma remota.

- Viajas con un teléfono o tableta y quieres mantener una tarea en movimiento.

- Prefiere las herramientas y el cálculo completos de la máquina remota a la emulación local.


## Cómo encaja NimoteCode


Conéctese a través del [espacio de trabajo SSH](/docs/ssh), elija la raíz del proyecto y el repositorio permanecerá en el host. Su teléfono o tableta funciona con archivos reales: navegue en el Explorador, edite en pestañas, ejecute comprobaciones en Terminal e inspeccione el historial de Git sin copiar nada al dispositivo. Para los proyectos que ya están en el dispositivo, el mismo espacio de trabajo los abre localmente.


## Una sesión típica de codificación remota


1. Abra el perfil SSH y conéctese a su host de desarrollo.

2. Localice el módulo o archivo relevante en el Explorador del proyecto.

3. Edite el cambio más pequeño requerido en el editor.

4. Ejecute el comando de prueba, compilación o registro enfocado en [Terminal](/docs/terminal).

5. Revise el resultado preparado y no preparado en [Control de fuente](/docs/source-control).

6. Utilice [Chat y agente AI](/docs/ai) para explicar un error o planificar el siguiente paso con el contexto completo del proyecto.


## La diferencia remota versus local


- **Remoto**: el proyecto, las herramientas y el cálculo permanecen en el host; el teléfono lo lee y lo edita a través de SSH. Lo mejor para máquinas, servidores y proyectos pesados ​​existentes.

- **Local**: los archivos del proyecto viven en el dispositivo y se abren sin una red. Lo mejor para experimentos rápidos y trabajo sin conexión, pero limitado por el almacenamiento y la computación del teléfono.


## Limitaciones de la codificación remota


La codificación remota depende de la red y el host. En una conexión débil, sentirá latencia en las pulsaciones de teclas y en la salida del terminal; El manejo consciente de la reconexión ayuda, pero no lo elimina. Los repositorios muy grandes pueden tardar en explorarse hasta que los índices de búsqueda estén listos. Y el anfitrión hace el trabajo pesado: un teléfono no puede acelerar un servidor con poca potencia. Para ciclos de compilación largos y pesados, un escritorio sigue siendo el lugar más cómodo.


## Preguntas frecuentes


### ¿Qué significa la codificación remota en la práctica?


La codificación remota significa editar y ejecutar el proyecto en una máquina mientras interactúa desde otra. La configuración más común es un teléfono o tableta que se conecta a través de SSH a su computadora de escritorio, portátil o servidor y trabaja en el repositorio real.


### ¿Es lenta la codificación remota a través de SSH?

La edición interactiva a través de SSH generalmente responde con una buena conexión. Las operaciones pesadas (compilaciones grandes, reindexación completa o compilaciones de larga duración) están sujetas a su red y al host remoto y, a menudo, es mejor dejarlas en el escritorio.


### ¿Necesito los archivos del proyecto en mi teléfono?


No. Con un espacio de trabajo SSH, el proyecto permanece en el host remoto. Su teléfono lee y edita los archivos a través de SSH y ve la salida del terminal y los datos de Git de esa máquina, en lugar de duplicar el repositorio.


<div class="seo-cta">
  <p><strong>Keep your project, terminal and Git review with you wherever you are.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=remote_coding" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=remote_coding&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## Páginas relacionadas


- [SSH IDE para desarrollo remoto](/ssh-ide)

- [Descripción general del IDE móvil](/mobile-ide)

- [IDE de Android para codificación SSH, Git y AI](/android-ide)

- [Código de un teléfono](/code-from-phone)

- [Cómo usar Android como IDE remoto con Tailscale](/blog/tailscale-ssh-android-mac-linux)
