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
