---
title: Docker y Dev Containers | NimoteCode
description: Administra recursos Docker en un host SSH y abre espacios de trabajo Dev Container configurados.
---

# Docker y Dev Containers

Las herramientas Docker se ejecutan en un host SSH conectado. El host debe tener Docker instalado y la cuenta SSH necesita permiso para acceder al daemon.

## Abrir Docker

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Lista de imágenes Docker con el tema claro; incluye Debian bookworm-slim." />
</div>

Abre el panel Docker desde las herramientas del espacio de trabajo para consultar contenedores, imágenes, volúmenes, redes y proyectos Compose. Puedes inspeccionar recursos, seguir registros, consultar estadísticas, abrir un terminal exec y buscar imágenes en Docker Hub.

## Administrar servicios Compose

<div class="doc-screenshots">
  <DocScreenshot file="docker-image-detail.png" caption="Detalles de la imagen Debian bookworm-slim con el tema claro." />
</div>

Abre un proyecto Compose para consultar sus servicios y controlar cada uno. Los archivos Compose y el contexto de compilación permanecen en el host SSH. Comprueba el proyecto y el host antes de iniciar o detener servicios.

## Crear un espacio Dev Container

Abre un proyecto SSH que incluya `.devcontainer/devcontainer.json` o un `devcontainer.json` en la raíz. Revisa la configuración y crea o reconstruye el contenedor. Tras inicializarlo, abre el proyecto en su espacio aislado con las herramientas y el entorno configurados.

El acceso a Docker sigue el estado actual de Pro, prueba o Early Access de la aplicación. Si Docker no está disponible, comprueba su instalación en el host, el daemon y los permisos de la cuenta. Si el contenedor termina al arrancar, consulta el código de salida y los registros.
