---
title: Editor de código | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Editor de código."
---

# Editor de código

## Abrir archivos y cambiar de pestaña

Abra un archivo desde Explorer o Search. Cada archivo abierto aparece en una pestaña. El editor admite archivos locales y remotos; los paneles divididos permiten trabajar con dos archivos en paralelo. Guarde los cambios antes de ejecutar herramientas externas que lean el archivo del disco.

<div class="doc-screenshots">
  <DocScreenshot file="editor-empty-state.png" caption="Browse files permite seleccionar un archivo cuando no hay pestañas abiertas." />
  <DocScreenshot file="editor-multiple-files.jpg" caption="Varias pestañas de archivos con webapp.py activo." />
</div>

## Seleccionar y editar texto

Seleccione un fragmento para copiarlo, cortarlo o sustituirlo. El menú de selección incluye **Ask AI**. El menú de más opciones permite deshacer, rehacer y usar el portapapeles. Teléfonos, tabletas y equipos de escritorio comparten la misma implementación del editor para teclado e IME.

<div class="doc-screenshots">
  <DocScreenshot file="editor-code-selection.png" caption="Código Python abierto con números de línea y resaltado de sintaxis." />
  <DocScreenshot file="editor-context-menu.jpg" caption="Menú de selección con Copy, Cut, Paste, Select All y Ask AI." />
  <DocScreenshot file="editor-overflow-menu.jpg" caption="Menú de más opciones con Undo, Redo y comandos del portapapeles." />
</div>

<div class="doc-section">
<div class="doc-section__copy">

## Navegar por símbolos e historial

El menú de símbolos reúne **Go To Definition**, **References**, **Rename Symbol**, **Outline** y acciones del historial de Git. La navegación de código depende del servidor de lenguaje configurado; el historial requiere un repositorio Git.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="editor-symbol-menu.jpg" caption="Acciones de símbolos e historial para el archivo activo." />
</div>

</div>

## Previsualizar Markdown y HTML

Edite el código Markdown y use la vista previa para leer los títulos, bloques de código y tablas renderizados. La vista HTML muestra una instantánea del contenido actual, incluidos cambios sin guardar, y lee los recursos referenciados del espacio de trabajo. El HTML estático no necesita un servidor web en el host SSH. El comportamiento del lado del servidor sí requiere el entorno de ejecución del proyecto.

<div class="doc-screenshots">
  <DocScreenshot file="markdown-source-editor.jpg" caption="README.md en modo de edición de código fuente." />
  <DocScreenshot file="markdown-preview.jpg" caption="Vista de README.md con un árbol de directorios y una tabla." />
  <DocScreenshot file="html-report-preview.jpg" caption="Informe de rendimiento HTML en una pestaña de vista previa del editor." />
</div>
