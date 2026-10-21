---
title: Quick Start | NimoteCode Mobile IDE
description: Open a local, Android Local Linux, or SSH workspace in NimoteCode, edit a file, run a verification command and choose the next mobile development workflow.
---

# Inicio rápido


Utilice esta guía para probar el flujo de trabajo primero: abra un proyecto, realice una pequeña edición y verifíquelo en la terminal. Funciona con un proyecto local, un espacio de trabajo SSH o Android Local Linux en un dispositivo compatible.


<figure class="quick-start-hero">
  <img src="/images/placeholders/Start_Overview.png" width="1400" height="900" alt="NimoteCode overview showing the welcome screen and options for demo, Local Linux, remote SSH, and local workspaces" loading="lazy" decoding="async">
  <figcaption>Start with a demo, Local Linux, a remote SSH host, or files already on your device.</figcaption>
</figure>

## 1. Abrir un espacio de trabajo


Elija **Abrir espacio de trabajo local** para un proyecto en su dispositivo, **Conectar espacio de trabajo remoto** para un host remoto o **Linux local** para Ubuntu incluido en un dispositivo Android 8+ ARM64/x86_64 compatible. También puede utilizar **Pruebe el espacio de trabajo de demostración** para explorar un proyecto de muestra inmediatamente. Linux local no necesita acceso de root y no está disponible en iOS; consulte [Android Local Linux](/docs/local-linux) para conocer su configuración y ciclo de vida. Para un espacio de trabajo SSH, ingrese el host, el puerto y el nombre de usuario; luego elija contraseña, archivo de clave o autenticación de clave privada pegada. Confirme la raíz del proyecto antes de comenzar a trabajar.


<figure class="seo-media-placeholder seo-media-placeholder--device-pair has-image has-single-device-image">
  <div class="seo-media-placeholder__device-pair">
    <div class="seo-media-placeholder__device seo-media-placeholder__device--phone">
      <img class="seo-media-placeholder__image" src="/images/placeholders/Getting_Started.jpg" width="930" height="2048" alt="NimoteCode welcome screen with options to open a demo, Local Linux, remote, or local workspace" loading="lazy" decoding="async">
    </div>
  </div>
  <figcaption class="seo-media-placeholder__caption">Choose the workspace that matches where your project runs; AI configuration can be changed later.</figcaption>
</figure>

## 2. Abrir, editar y guardar un archivo


Seleccione un archivo en el Explorador o desde [Buscar](/docs/search). Se abre en el editor de pestañas. Realice un pequeño cambio, guárdelo y mantenga el archivo activo si planea preguntarle a AI al respecto.


## 3. Verificar en la terminal


Abra [Terminal](/docs/terminal) en el mismo espacio de trabajo y ejecute un comando inofensivo como `pwd`, `ls` o el comando de prueba de su proyecto. Utilice la búsqueda de resultados si el resultado es largo.


## 4. Elige el siguiente paso


<div class="product-card-grid">
  <div class="product-card"><strong>Review a change</strong><span>Open <a href="/docs/source-control">Source Control</a> to inspect the diff and stage it; committing or pushing needs Pro access.</span></div>
  <div class="product-card"><strong>Ask for help</strong><span>Use <a href="/docs/ai">AI Chat or Agent</a> to explain code, plan a change or assist controlled multi-step work.</span></div>
  <div class="product-card"><strong>Diagnose more deeply · Pro</strong><span>Use configured <a href="/docs/lsp">LSP</a>, <a href="/docs/debug">Debug</a> and <a href="/docs/terminal">Terminal</a> workflows.</span></div>
  <div class="product-card"><strong>Reuse a command</strong><span>Save an established remote procedure in <a href="/docs/tasks">Tasks</a>.</span></div>
</div>

> Para entornos de producción remotos, comience con una inspección de solo lectura y revise cada comando, sugerencia de IA y cambio de Git antes de aplicarlos.


Continúe con [SSH Workspace](/docs/ssh), [Editor](/docs/editor) o [Ver demostración](/demo?utm_source=quick_start&utm_medium=website&utm_campaign=watch_demo).
