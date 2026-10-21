---
title: "Use Codex From Your Phone with SSH and Git | NimoteCode"
description: "Use Codex from your phone in a practical remote development workflow: SSH into your development host, inspect project files, run checks and review Git changes with NimoteCode."
---

# Cómo usar Codex desde tu teléfono


Los agentes codificadores son más útiles cuando están cerca del repositorio, terminal y entorno de prueba que necesitan. Si Codex está configurado en un host de desarrollo remoto, un espacio de trabajo móvil basado en SSH le permite continuar ese trabajo desde su teléfono sin reducir la tarea a fragmentos copiados.


NimoteCode combina un editor, un explorador, una terminal SSH, Git, AI Chat y un agente para que pueda solucionar una sesión remota de Codex con el mismo contexto del proyecto: abra el código fuente, ejecute el comando, inspeccione el resultado y revise la diferencia real.


<ImagePlaceholder image-key="codexFromPhone" alt="Codex from phone remote workflow">
  <strong>Image placeholder — Remote Codex workflow</strong>
  <span>Replace with a redacted remote agent session, source inspection and validation output. Do not include credentials or private code.</span>
</ImagePlaceholder>

## Un flujo de trabajo Codex compatible con teléfonos


1. Configure Codex en su host de desarrollo remoto con las credenciales y controles requeridos por su organización.

2. Abra el repositorio en NimoteCode a través de [SSH Workspace](/docs/ssh).

3. Inicie o reanude la sesión de Codex desde el terminal SSH cuando así esté configurado su host.

4. Utilice las pestañas del Explorador y del editor para inspeccionar los archivos que se están discutiendo o modificando.

5. Ejecute pruebas o comprobaciones enfocadas en la Terminal.

6. Revise el resultado preparado y no preparado en [Control de fuente](/docs/source-control) antes de confirmar o enviar.


NimoteCode no se presenta como un reemplazo del Codex ni de su configuración oficial. Es el espacio de trabajo móvil que mantiene conectado y revisable el trabajo de desarrollo circundante.


## Utilice IA compatible con OpenAI en el espacio de trabajo


NimoteCode también admite la configuración del proveedor de IA para sus flujos de trabajo de agentes y chat de IA dentro de la aplicación. Esto puede resultar útil cuando desee explicaciones, planificación o automatización controlada teniendo en cuenta el espacio de trabajo junto con su sesión SSH. Consulte [Chat AI y Agente](/docs/ai) para la configuración del proveedor y [Seguridad y protección](/docs/security) para los controles de ejecución.


## Mantenga la tarea limitada y observable


En un teléfono, la velocidad proviene de reducir el cambio de contexto, no de saltarse las medidas de seguridad. Prefiera un objetivo claro a la vez, lea el archivo antes de aceptar una edición, ejecute el comando de verificación más pequeño apropiado e inspeccione la diferencia de Git. Este patrón funciona ya sea que Codex esté ayudando a una función, una refactorización o una respuesta a un incidente.


## Limitaciones de este flujo de trabajo


Codex ya debe estar configurado en un host al que pueda acceder mediante SSH; un teléfono no ejecuta Codex localmente. Eso significa que el flujo de trabajo hereda su red, la configuración del host y los límites de la cuenta del Codex. Las sesiones largas o exploratorias de los agentes son más fáciles de supervisar en una computadora de escritorio, por lo que en un teléfono mantenga cada ejecución estrecha y observable. NimoteCode es un espacio de trabajo móvil independiente: no actúa como proxy de Codex y se siguen aplicando la configuración y los controles propios del Codex.


## Preguntas frecuentes


### ¿Necesito NimoteCode para usar Codex desde mi teléfono?


No. NimoteCode es el espacio de trabajo móvil en torno a una sesión remota de Codex (Explorador, editor, terminal SSH y revisión de Git) mientras Codex se instala y autentica en su propio host de desarrollo.


### ¿Es Codex un socio oficial de NimoteCode?


No. Codex es un agente de codificación externo. NimoteCode no afirma ser una asociación oficial ni representa a Codex; ejecuta Codex en el host remoto y lo soluciona a través de SSH.


### ¿Puedo usar un asistente de IA en NimoteCode en lugar del Codex?


Sí. NimoteCode tiene sus propios flujos de trabajo de agentes y chat AI con configuración de proveedor, que se pueden usar además o en lugar de una sesión remota de Codex.


<div class="seo-cta">
  <p><strong>Keep the project, command output and Git review with you when you use Codex remotely.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=codex_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="https://apps.apple.com/app/nimotecode-ssh-client-ide/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noreferrer">Download for iOS</a>
    <a href="/demo?utm_source=codex_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## Páginas relacionadas


- [Espacio de trabajo de codificación de IA móvil](/mobile-ai-coding)

- [Código Claude desde el teléfono](/claude-code-from-phone)

- [flujo de trabajo de desarrollo remoto SSH](/docs/ssh)

- [¿Puede realmente un agente de IA codificar desde un teléfono?](/blog/can-an-ai-agent-really-code-from-a-phone)
