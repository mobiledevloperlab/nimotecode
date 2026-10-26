---
title: Servicios de lenguaje (LSP) | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Servicios de lenguaje (LSP)."
---

# Servicios de lenguaje (LSP)

<div class="doc-section">
<div class="doc-section__copy">

## Comprobar la configuración del servidor de lenguaje

Abra un archivo fuente y después el panel LSP. Compruebe **LSP Setup** y el servidor de su lenguaje. El ejemplo muestra pyright-langserver instalado para Python, sin errores ni advertencias notificados. El estado instalado no garantiza que estén disponibles todas las dependencias del proyecto o las acciones de código.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="lsp-python-status.png" caption="Configuración del servidor de Python con las secciones Problems y Code Actions." />
</div>

</div>

## Usar diagnósticos y acciones de código

Despliegue **Problems** y seleccione un diagnóstico para abrir su ubicación en el código. Revise en **Code Actions** las acciones para la posición del cursor. Las opciones dependen del servidor de lenguaje. Tras aplicar una acción, guarde el archivo y repita la comprobación pertinente del proyecto. LSP requiere acceso Pro.
