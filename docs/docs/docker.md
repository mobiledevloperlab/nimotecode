---
title: Docker and Dev Containers | NimoteCode
description: Manage Docker resources and open configured Dev Container workspaces on an SSH host.
---

# Docker and Dev Containers

Docker tools run on a connected SSH host. The host must have Docker installed and the connected account must be able to access its daemon.

## Open Docker

Docker and Dev Containers require Pro and a compatible host.

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="Docker image list with the temporary nimotecode-screenshot-demo:2.4.1 source bundle." />
</div>


Open the Docker panel from workspace tools. Browse containers, images, volumes, networks, and Compose projects. Inspect resources, follow container logs, view statistics, open an exec terminal, or search Docker Hub for images.

## Manage Compose services

<div class="doc-screenshots">
  <DocScreenshot file="docker-image-detail.png" caption="Temporary source-bundle image details: tag, architecture, OS and size. No runtime is included." />
</div>

Open a Compose project to inspect its services and control an individual service. Compose files and build context remain on the SSH host. Check the selected project and host before starting or stopping services.

## Create a Dev Container workspace

Open an SSH project containing `.devcontainer/devcontainer.json` or a root `devcontainer.json`. Review the configuration, then create or rebuild the container. After initialization, open the project in its isolated container workspace with the configured tools and environment.

Docker access follows the app's current Pro, trial, or Early Access status. If Docker is unavailable, check the host installation, daemon status, and account permissions. If a container exits during startup, inspect its exit code and logs.
