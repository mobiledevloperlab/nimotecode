---
title: "IDE SSH: archivos remotos, terminal y Git | NimoteCode"
description: "Explora el IDE SSH de NimoteCode: archivos SFTP, edición, terminal del equipo, Git y herramientas del lenguaje. Comprende conexión, permisos y requisitos."
lastUpdated: "2026-11-17"
pageClass: "seo-product-guide"
---

# IDE SSH para editar y verificar proyectos remotos

NimoteCode abre proyectos remotos por SSH en Android, iPhone y iPad. Explora archivos por SFTP, edita código en pestañas o paneles divididos, ejecuta comandos en el servidor y revisa cambios Git en el mismo espacio. El repositorio, las dependencias y el entorno de ejecución permanecen en el servidor.

## Separa las tres capas

| Capa | Objetivo | Requisito |
| --- | --- | --- |
| SSH | Conectar y autenticar | Servidor accesible y cuenta autorizada |
| SFTP | Explorar y guardar archivos | Subsistema y permisos |
| Herramientas | Git, pruebas, servicios del lenguaje y Agent | Dependencias, credenciales y ejecución |

Una shell operativa no demuestra que SFTP funcione. Abrir un archivo tampoco instala sus herramientas.

<div class="doc-screenshots">
  <DocScreenshot file="remote-workspace-connected.jpg" caption="Remote Explorer muestra el servidor SSH, la cuenta y la raíz del repositorio." />
</div>

## Qué aporta el espacio

Selecciona la raíz en Explorer y usa pestañas o paneles divididos. Guarda antes de ejecutar comandos. Control de código fuente muestra cambios e historial; escritura Git y GitHub dependen del acceso. Servidores de lenguaje y depuración necesitan configuración compatible en el destino.

## Adapta el entorno al equipo

Windows utiliza PowerShell y SFTP; consulta su [configuración](/es/docs/windows-ssh-sftp). Mac y Linux usan la shell y las herramientas del equipo. Mantén encendido el equipo con las dependencias necesarias; una conexión no mantiene los procesos.

## Comprueba el repositorio antes de editar

Confirma el servidor, la cuenta y la raíz en Remote Explorer. Comprueba por separado el directorio y la rama en Terminal: navegar por el editor no cambia el directorio de la shell. En Linux o macOS:

```sh
pwd
git status --short --branch
```

Guarda antes de ejecutar las pruebas o la compilación documentadas del proyecto. Revisa el diff y los cambios existentes antes de confirmar. Si funciona la terminal pero no los archivos, comprueba SFTP y los permisos del directorio. Si falta un comando, comprueba su instalación y el PATH del servidor.

## Prepara las sesiones para las desconexiones

Usa un gestor de sesiones en el servidor para trabajos largos y comprueba su estado al reconectar. En Linux o macOS, una sesión tmux configurada puede mantenerse tras una desconexión SSH mientras el equipo siga activo. Bloquear el teléfono o cambiar de aplicación puede interrumpir la conexión; suspender o reiniciar el servidor puede detener el trabajo.

## Configuración y diagnóstico

Sigue [desarrollo remoto](/es/remote-coding) y la [referencia SSH](/es/docs/ssh). Para elegir ejecución local o remota, lee [IDE móvil](/es/mobile-ide); para los modos de agentes, [IA móvil](/es/mobile-ai-coding).

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
