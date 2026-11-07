---
title: Docker 与 Dev Containers | NimoteCode
description: 在 SSH 主机管理 Docker 资源，并打开配置好的 Dev Container 工作区。
---

# Docker 与 Dev Containers

Docker 工具运行在已连接的 SSH 主机上。主机需要安装 Docker，当前 SSH 账户也需要有权访问 Docker daemon。

## 打开 Docker

<div class="doc-screenshots">
  <DocScreenshot file="docker-images.png" caption="浅色主题下的 Docker 镜像列表，包含 Debian bookworm-slim 镜像。" />
</div>


从工作区工具中打开 Docker 面板，可浏览容器、镜像、卷、网络和 Compose 项目。可查看资源详情、跟随容器日志、查看统计信息、打开 exec 终端，或搜索 Docker Hub 镜像。

## 管理 Compose 服务

<div class="doc-screenshots">
  <DocScreenshot file="docker-image-detail.png" caption="浅色主题下的 Debian bookworm-slim 镜像详情。" />
</div>

打开 Compose 项目查看服务，并对单个服务执行控制操作。Compose 文件和构建上下文保留在 SSH 主机上。启动或停止服务前，请确认当前项目和主机。

## 创建 Dev Container 工作区

打开 SSH 主机上包含 `.devcontainer/devcontainer.json` 或根目录 `devcontainer.json` 的项目。检查配置后创建或重建容器。初始化成功后，可在隔离的容器工作区中打开项目，使用配置好的工具和环境。

Docker 权限与应用当前的 Pro、试用或 Early Access 状态一致。如果 Docker 不可用，请检查主机安装、daemon 状态和账户权限。容器启动时提前退出，可查看退出码和日志排查。
