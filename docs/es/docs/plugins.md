---
title: Plugins personalizados | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Plugins personalizados."
---

# Plugins personalizados

Los plugins personalizados reúnen datos del espacio de trabajo, formularios y acciones en un panel reutilizable. Permiten agrupar información de Git, LSP, Tasks, Terminal y Agent, o abrir los paneles nativos que usa con más frecuencia.

<div class="doc-section">
<div class="doc-section__copy">

## Crear el primer plugin

Configure un modelo en [Configuración de IA](/es/docs/configuration) y abra el espacio que utilizará el plugin.

1. Abra **AI custom plugins** y seleccione **Create plugin**.
2. Describa los datos y acciones necesarios. Por ejemplo: «Muestra la rama actual, los archivos modificados y el número de errores LSP, con un acceso a Control de código fuente».
3. Refine el resultado en la misma conversación. Indique qué campos, etiquetas y acciones deben cambiar.
4. Previsualice el panel y, cuando cumpla sus requisitos, guárdelo e instálelo. Revise los permisos solicitados antes de aprobar la instalación.

</div>

<div class="doc-screenshots">
  <DocScreenshot file="ai-plugin-builder.png" caption="AI custom plugins antes de crear un plugin. Seleccione Create plugin para empezar a describir el panel." />
</div>

</div>

## Elegir datos y acciones

| Necesidad | Capacidad del plugin |
| --- | --- |
| Inspeccionar el proyecto | Mostrar datos del espacio, Git, LSP, Tasks, terminal o Agent. |
| Abrir una herramienta | Ofrecer accesos a los paneles nativos de Git, Tasks, Terminal, IA y editor. |
| Recoger datos | Añadir campos de formulario y usar sus valores en acciones compatibles. |
| Ejecutar un flujo | Combinar lecturas y acciones, pasar resultados entre pasos y definir condiciones o reintentos. |
| Ejecutar un script | Ejecutar Python, JavaScript o Shell en el destino SSH o Local Linux seleccionado. |

Los datos corresponden al espacio activo. Al cambiar de espacio, cambia el contexto disponible. Los accesos a archivos necesitan una ruta nativa estable y no están disponibles en espacios de proveedores de documentos.

## Vista previa, permisos y ejecución

La vista previa permite comprobar el panel sin modificar archivos, enviar solicitudes ni ejecutar comandos. Revise los permisos antes de instalar o actualizar. Las escrituras, solicitudes de red, comandos, ejecuciones de tareas y aperturas de archivos requieren confirmación al invocarse.

Los scripts usan intérpretes ya instalados en el destino y se ejecutan con los permisos de esa cuenta. Prepare antes el entorno Python, Node.js o shell necesario. Un plugin no instala servidores de lenguaje ni adaptadores de depuración; configúrelos mediante [LSP](/es/docs/lsp) y [Depuración](/es/docs/debug).

## Editar y gestionar un plugin

Continúe la conversación del plugin para modificar un panel existente. Previsualice la revisión antes de guardarla y compruebe los cambios de permisos al actualizar. La definición y la configuración del formulario se guardan por separado. Puede activar, desactivar o restaurar una versión reciente del plugin.

Para la visibilidad de los paneles integrados y la tipografía del editor, consulte [Ajustes](/es/docs/settings#panel-and-editor-preferences).

## Trabajos en segundo plano y programación

El cliente Android admite flujos en segundo plano y ejecuciones programadas en destinos SSH o Local Linux. El destino necesita Python 3.9 o posterior con SQLite. iOS admite acciones de plugins en primer plano, pero no flujos en segundo plano ni programación.

Describa el flujo y el calendario en la conversación. Revise el plan, los datos de entrada y la programación antes de desplegarlo. Abra **Background jobs & schedules** para consultar la salida, actualizar, pausar, reanudar o cancelar un trabajo. Puede continuar tras desconectar la aplicación mientras el destino siga activo; si este se reinicia, puede ser necesario reconectar para recuperarlo.

La navegación entre paneles, las operaciones LSP y las tareas nativas configuradas siguen siendo operaciones en primer plano. Use credenciales del destino para trabajos sin supervisión, ya que los campos secretos del formulario no se conservan para la ejecución en segundo plano.
