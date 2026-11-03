---
title: Control de código fuente | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Control de código fuente."
---

# Control de código fuente

<div class="doc-section">
<div class="doc-section__copy">

## Consultar el estado del repositorio

Abra Source Control en un espacio Git. **Changes** enumera archivos modificados, eliminados y sin seguimiento; **Staged Changes** muestra los preparados para un commit. Actualice el estado después de realizar operaciones fuera de la aplicación.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="source-control-changes.png" caption="Archivos modificados y sin seguimiento, con secciones separadas de cambios preparados e historial." />
</div>

</div>

## Usar GitHub desde el espacio de trabajo

Los flujos de trabajo de GitHub están disponibles en Android, iPhone y iPad desde **NimoteCode 2.2.0**. Abra la página **GitHub**, inicie sesión mediante autorización de dispositivo en el navegador o un token de acceso personal y elija un repositorio al que tenga acceso. Seleccione **This device** para clonar en el almacenamiento local o **SSH host** para clonar en la máquina remota elegida. El host ejecuta los comandos del proyecto y las operaciones de Git; NimoteCode mantiene unidos el explorador de repositorios y el espacio de trabajo en el dispositivo móvil.

<div class="doc-screenshots">
  <DocScreenshot file="github_entry.png" caption="Selector de repositorios de GitHub con destinos de clonación en el dispositivo local y en un host SSH." />
</div>

## Abrir un repositorio y colaborar

Elija un repositorio para consultar su rama predeterminada, ramas, incidencias, solicitudes de extracción, revisiones y comprobaciones antes de abrir el código. Puede filtrar incidencias y solicitudes de extracción, crear una incidencia o iniciar una tarea de Agent con el contexto de una incidencia. Cuando el cambio esté listo, cree o cambie de rama, envíe los cambios con los permisos del repositorio concedidos a su cuenta y abra una solicitud de extracción. Revise el diff y ejecute las comprobaciones del proyecto antes de publicar: el estado de GitHub aporta contexto de colaboración, pero no sustituye la revisión del repositorio.

<div class="doc-screenshots">
  <DocScreenshot file="github.png" caption="Vista de repositorio con Issues, Pull requests y Branches disponibles en la página GitHub." />
</div>

## Elegir un destino de clonación seguro

Antes de clonar, confirme el espacio de trabajo de destino, la carpeta de destino y la rama. Para clonar un repositorio privado en un host SSH, configure la clave SSH de GitHub y la entrada known_hosts de ese host; la aplicación no envía al host un token que conserva. Use una clonación superficial solo si el flujo de trabajo del proyecto no necesita el historial completo. La clonación abre el espacio de trabajo seleccionado, pero no configura ni instala automáticamente las dependencias del proyecto.

<div class="doc-screenshots">
  <DocScreenshot file="github_conf.png" caption="Opciones de clonación para un espacio de trabajo SSH: destino, rama, clonación superficial y autenticación con clave SSH." />
</div>

## Revisar diferencias y commits

Abra un archivo modificado para comparar su contenido anterior y nuevo. Abra un commit en **Commit History** para inspeccionar los cambios por archivo. El diff de la captura contiene una edición temporal de texto: ilustra la revisión, no recomienda ese cambio de código.

<div class="doc-screenshots">
  <DocScreenshot file="git-diff-view.jpg" caption="Contenido anterior y nuevo con adiciones y eliminaciones resaltadas." />
  <DocScreenshot file="git-commit-details.jpg" caption="Detalles del commit con parches por archivo." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Cambiar de rama

Seleccione el nombre de la rama en la cabecera para buscar, crear o hacer checkout de una rama existente. Revise el trabajo sin confirmar antes de cambiar. Las operaciones de escritura de Git requieren los permisos de repositorio y el acceso Pro correspondientes.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-branch-checkout.jpg" caption="Diálogo Checkout Branch con búsqueda y Create New Branch." />
</div>

</div>

<div class="doc-section">
<div class="doc-section__copy">

## Usar las herramientas de IA de Git

Abra **AI Tools**, elija proveedor y archivos, y seleccione **Commit Message**, **Explanation** o **Risk Analysis**. Para explicar los cambios, seleccione **Explain Changes**. El texto generado complementa el diff; verifíquelo antes de usarlo en un commit o una revisión.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="git-ai-explanation.jpg" caption="Pestaña Explanation con un resumen de IA de los cambios seleccionados." />
</div>

</div>
