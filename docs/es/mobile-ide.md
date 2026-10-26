---
title: "IDE móvil: cómo trabajar en un proyecto desde el teléfono | NimoteCode"
description: "Elige entre edición local, SSH y agentes de IA remotos según tu tarea. Sigue una pequeña corrección en NimoteCode: edición, vista previa y revisión con Git."
pageClass: mobile-ide-article
---

# IDE móvil: cómo trabajar en un proyecto desde el teléfono

Encuentras un comando incorrecto en el README de tu proyecto. El repositorio está en tu equipo de desarrollo, pero no tienes el portátil a mano. Corregir una línea parece sencillo. Aun así, hay que comprobar cómo se ve la página, ejecutar las comprobaciones del proyecto y revisar que el diff no incluya otros cambios.

Es una buena prueba para un IDE móvil. Abrir un archivo es solo el principio. ¿Puedes terminar una tarea pequeña sin tener que montar de nuevo todo el entorno de desarrollo en el teléfono?

Desarrollamos NimoteCode, un editor y espacio de desarrollo para Android, iPhone y iPad. Lo usaremos como ejemplo, pero la primera decisión sirve para cualquier aplicación: **¿dónde se ejecutarán el código y las herramientas?**

<figure class="article-hero">
  <a href="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" target="_blank" rel="noopener">
    <img src="/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide/image-2.png" width="1414" height="878" alt="NimoteCode en una tableta, con Source Control y el editor de código visibles a la vez." loading="eager" decoding="async">
  </a>
  <figcaption>NimoteCode en una tableta, con Source Control y el editor de código visibles a la vez.</figcaption>
</figure>

## Elige cómo vas a trabajar antes de elegir la aplicación

Programar desde el teléfono puede significar editar un archivo local, conectarse a otro equipo o comprobar el trabajo de un agente de IA. Cada tarea pide herramientas distintas.

| Qué necesitas hacer | Por dónde empezar | Qué conviene comprobar |
| --- | --- | --- |
| Editar Markdown, configuración o HTML estático | Un editor local con la vista previa necesaria | Cómo devolver los archivos al repositorio |
| Ejecutar scripts y herramientas de terminal en Android | [Termux](https://termux.dev/en/) o un entorno Linux local compatible | Si las dependencias funcionan en el dispositivo |
| Administrar servidores y trabajar en una shell remota | [Termius](https://termius.com/) o [Blink Shell](https://docs.blink.sh/advanced/code) | Comodidad del teclado, acceso a archivos y herramientas habituales |
| Continuar una tarea de un agente que se ejecuta en otro equipo | [Redock](https://redock.dev/), [ServerCC](https://servercc.app/) o [Moshi](https://getmoshi.app/docs/introduction); [Orca](https://www.onorca.dev/) si utilizas su entorno de escritorio | Configuración del equipo remoto y revisión de los cambios del agente |
| Explorar un proyecto, editar archivos y revisar cambios de Git en una interfaz móvil | Un espacio de trabajo como NimoteCode | Entorno de ejecución y funciones que requieren Pro |

Las categorías se solapan. Blink Code permite editar archivos locales y remotos. Termux puede ejecutar editores y Git; una terminal SSH puede usar las herramientas instaladas en el equipo remoto. Algunos clientes de agentes también ofrecen diffs y vistas previas. Lo que importa es cómo encaja cada opción en tu trabajo.

La [comparativa de herramientas](/es/compare/mobile-ai-development-tools) enlaza las fuentes de cada función y restricción. Si aún no sabes dónde ejecutar el proyecto, consulta la [comparación de métodos de desarrollo](/es/compare/mobile-development-approaches).

## Si el proyecto ya funciona en un ordenador, empieza ahí

Con SSH puedes conservar las dependencias y los comandos de prueba en el equipo donde ya funcionan. El teléfono sirve para navegar y editar; el equipo remoto ejecuta los comandos. Necesitas poder acceder a ese equipo y mantener una conexión de red.

En NimoteCode, selecciona **Connect Remote Workspace**, introduce los datos de SSH y elige la carpeta raíz del repositorio. La [guía de SSH](/es/docs/ssh) explica la configuración. Antes de editar, comprueba el equipo y la ruta en Explorer; después comprueba también la terminal:

```sh
pwd
git status --short --branch
```

La shell debe estar en el repositorio correcto. Cambiar de pestaña en el editor no cambia el directorio de la terminal. Si ya hay modificaciones, identifica cuáles son antes de añadir las tuyas.

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/remote-workspace-connected.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/remote-workspace-connected.jpg" width="1080" height="2376" alt="Un espacio de trabajo conectado por SSH: comprueba el equipo y la raíz del proyecto antes de abrir archivos." loading="lazy" decoding="async">
  </a>
  <figcaption>Un espacio de trabajo conectado por SSH: comprueba el equipo y la raíz del proyecto antes de abrir archivos.</figcaption>
</figure>

## Completa una pequeña corrección

La corrección del README sirve como primera tarea. Es fácil de revisar en el teléfono y permite probar el acceso a archivos, la edición, la vista previa y Git. Las capturas siguientes ilustran las interfaces; no documentan el antes y el después de este ejemplo.

### 1. Abre el archivo y corrige la línea

Busca `README.md` en Explorer y ábrelo. Lee las instrucciones que rodean el comando antes de modificarlo. Limita este primer cambio a la corrección: reformatear todo el documento al mismo tiempo dificulta la revisión en una pantalla pequeña.

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/markdown-source-editor.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/markdown-source-editor.jpg" width="1080" height="2376" alt="README.md abierto en el editor móvil: el código Markdown que puedes comparar con la vista previa." loading="lazy" decoding="async">
  </a>
  <figcaption>README.md abierto en el editor móvil: el código Markdown que puedes comparar con la vista previa.</figcaption>
</figure>

### 2. Comprueba la vista previa y guarda

Abre la vista previa de Markdown para comprobar que el comando siga dentro de su bloque de código y que las listas se vean bien. Para HTML estático, NimoteCode puede mostrar el contenido actual del editor, incluidos los cambios sin guardar. Una aplicación con lógica de servidor sigue necesitando su propio entorno de ejecución. La [guía del editor](/es/docs/editor) explica la diferencia.

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/markdown-preview.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/markdown-preview.jpg" width="1080" height="2376" alt="La vista previa de Markdown permite comprobar cómo se muestran los títulos, los bloques de código y las tablas." loading="lazy" decoding="async">
  </a>
  <figcaption>La vista previa de Markdown permite comprobar cómo se muestran los títulos, los bloques de código y las tablas.</figcaption>
</figure>

Guarda antes de ejecutar las comprobaciones. Los comandos de la terminal leen los archivos guardados, no los cambios que solo están en el editor.

### 3. Ejecuta la comprobación del proyecto

Utiliza en el equipo SSH el comando de comprobación de documentación, enlaces o compilación que indique el repositorio. No existe un comando de prueba universal. La vista previa permite comprobar la presentación, pero no demuestra que el comando que escribiste sea correcto.

También puedes buscar ciertos errores de espacios en blanco con:

```sh
git diff --check
```

Ese comando solo detecta determinados problemas de espacios en blanco. No prueba las instrucciones del documento ni el comportamiento de la aplicación.

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/terminal-command-output.png" target="_blank" rel="noopener">
    <img src="/images/placeholders/terminal-command-output.png" width="1080" height="2376" alt="La terminal muestra un listado de directorio con ls. Es un ejemplo de salida de comandos, no una prueba superada." loading="lazy" decoding="async">
  </a>
  <figcaption>La terminal muestra un listado de directorio con ls. Es un ejemplo de salida de comandos, no una prueba superada.</figcaption>
</figure>

### 4. Lee el diff antes de hacer commit

Abre **Source Control**, busca el archivo modificado y revisa las diferencias. Comprueba el nombre del archivo, la línea exacta y si aparece algún archivo inesperado. La versión gratuita de NimoteCode permite consultar el estado de Git, los diffs y el historial; las operaciones de escritura y de ramas requieren Pro. Consulta los detalles en [Gratis y Pro](/es/pro).

<figure class="mobile-ide-screenshot">
  <a href="/images/placeholders/git-diff-view.jpg" target="_blank" rel="noopener">
    <img src="/images/placeholders/git-diff-view.jpg" width="1080" height="2376" alt="La vista de diferencias distingue las adiciones y eliminaciones por color. Esta captura existente contiene cambios de demostración, no la corrección del README del ejemplo." loading="lazy" decoding="async">
  </a>
  <figcaption>La vista de diferencias distingue las adiciones y eliminaciones por color. Esta captura existente contiene cambios de demostración, no la corrección del README del ejemplo.</figcaption>
</figure>

Puedes dejar el cambio guardado y revisado, y continuar cuando vuelvas al ordenador. Si haces commit desde la aplicación, sigue el proceso habitual de revisión y entrega de tu proyecto.

## Cuándo ayuda la IA en esta tarea

Si el README menciona un script que no conoces, puedes preguntar: «Busca el script que ejecuta este comando y explica sus argumentos. No modifiques archivos». Es una petición concreta cuya respuesta puedes contrastar con el repositorio.

NimoteCode incluye AI Chat y ofrece el flujo de AI Agent con Pro. Hay que configurar el acceso al modelo; un agente ACP externo también necesita un entorno de ejecución compatible en el equipo SSH. La [guía de IA](/es/docs/ai) explica la configuración y el modo Confirm, que permite revisar el plan antes de autorizar la ejecución de herramientas.

Para corregir una línea, quizá sea más rápido hacerlo a mano. En un proyecto desconocido, encontrar el archivo adecuado puede resultar más útil que generar el cambio. En ambos casos, revisa el diff y ejecuta las comprobaciones pertinentes.

## ¿Y si quieres ejecutarlo en el teléfono?

En dispositivos Android compatibles, Local Linux de NimoteCode ofrece Ubuntu mediante PRoot, sin root. Requiere Android 8 o posterior y una aplicación de 64 bits ARM64 o x86_64. Las herramientas de cada lenguaje se instalan por separado y la compatibilidad depende del proyecto. No está disponible en iOS. Consulta [Local Linux](/es/docs/local-linux) antes de elegirlo para compilar.

Abrir una carpeta con el selector de archivos del sistema es un caso diferente. Puedes explorarla y editar archivos, pero Git, los servicios de lenguaje, Tasks y los flujos de Agent necesitan una ruta nativa del sistema de archivos. Que una carpeta se abra no significa que todas las herramientas puedan trabajar con ella.

El teléfono sirve para una corrección acotada, una revisión concreta o leer un error fuera del escritorio. Una refactorización larga cuesta más de seguir en una pantalla pequeña. El trabajo remoto depende de la conexión, y reconectar la aplicación no garantiza que un proceso del equipo remoto haya seguido ejecutándose. Para empezar, elige una tarea que puedas revisar de principio a fin.

## Preguntas frecuentes

### ¿NimoteCode es solo un cliente SSH?

No. Reúne editor, Explorer, SSH, terminal, Git y AI Agent en un espacio de desarrollo móvil.

### ¿Puedo trabajar en un proyecto remoto desde un teléfono o una tableta?

Sí. Conecta por SSH para explorar archivos, editar código, ejecutar comandos y revisar cambios de Git en el mismo espacio de trabajo.

### ¿NimoteCode está disponible para Android e iOS?

La versión para Android está en Google Play; la de iPhone y iPad, en App Store.

## Empieza con un proyecto que conozcas

Elige un repositorio conocido y un cambio que puedas explicar en una frase. Ábrelo, edita, comprueba el resultado y lee el diff. Esa prueba te dirá más sobre si un IDE móvil encaja en tu trabajo que una lista de funciones.

Puedes ver primero la [demostración del espacio de trabajo](/es/use-cases/mobile-workspace-demo) o [descargar NimoteCode](/es/download?utm_source=mobile_ide&utm_medium=organic&utm_campaign=project_workflow) y seguir la [guía de inicio rápido](/es/docs/quick-start).
