---
title: "Usar Codex desde el móvil por SSH | NimoteCode"
description: "Ejecuta Codex en tu equipo y accede desde Android o iPhone con NimoteCode. Configuración, recuperación de sesiones, revisión Git y diagnóstico paso a paso."
lastUpdated: "2026-11-13"
pageClass: "seo-product-guide"
---

# Usar Codex desde el móvil por SSH

¿Quieres continuar una tarea de Codex desde el móvil sin mover el repositorio? Esta guía accede por SSH a la CLI de un equipo Linux o macOS. NimoteCode añade exploración de archivos, edición, terminal y revisión Git alrededor de esa sesión.

SSH es una opción, no la única interfaz móvil. Si solo necesitas seguir al agente, revisa las opciones actuales web, móviles y remotas del proveedor. NimoteCode ayuda cuando también quieres acceso directo a los archivos y comandos del equipo.

## 1. Prepara el equipo y la cuenta

Necesitas un equipo encendido con SSH, un repositorio accesible y las dependencias. Instala y autentica el agente allí siguiendo su documentación oficial. Su cuenta, límites, permisos y credenciales son independientes de NimoteCode.

Elige el método oficial de instalación de Codex para el equipo. Ejemplo:

```sh
npm install -g @openai/codex
codex --version
```

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

En un equipo sin navegador, `codex login --device-auth` es una opción oficial cuando está habilitada. Sigue la guía de autenticación; localhost en el móvil no es el equipo remoto.

## 2. Abre el repositorio desde el móvil

Crea un [espacio SSH](/es/docs/ssh), verifica la huella y selecciona la raíz. En Terminal, cambia a la misma ruta y revisa cambios existentes. La ruta siguiente es un ejemplo; NimoteCode no la crea.

Estos ejemplos de shell son para un equipo SSH Linux o macOS. Sustituye la ruta del proyecto. Windows necesita comandos adecuados para PowerShell; consulta [SSH y SFTP en Windows](/es/docs/windows-ssh-sftp).

```sh
cd /path/to/project
pwd
git status --short --branch
```

<figure class="seo-phone-capture">
  <a href="/images/ios/iphone-terminal.webp" target="_blank" rel="noopener">
    <img src="/images/ios/iphone-terminal.webp" width="660" height="1433" alt="Terminal SSH de NimoteCode en iPhone con comandos de shell. No es una grabación de una tarea de Codex." loading="lazy" decoding="async">
  </a>
  <figcaption>Terminal SSH de NimoteCode en iPhone con comandos de shell. No es una grabación de una tarea de Codex. Fuente: ficha de NimoteCode en App Store. Captura promocional; no es una grabación continua.</figcaption>
</figure>

## 3. Inicia la tarea en una sesión del equipo

Con tmux instalado en Linux o macOS puedes conservar una terminal en el equipo aunque se desconecte el teléfono. Crea o conecta una sesión con nombre e inicia el agente dentro. Si ya está ejecutándose al reconectar, continúa allí en lugar de abrir otra instancia.

```sh
tmux new-session -A -s mobile-codex
codex
```

Empieza con una petición concreta:

> Localiza dónde se lee este valor de configuración. Explica los archivos relevantes y propone una comprobación. No modifiques archivos todavía.

## 4. Distingue reconexión y reanudación

Pulsa Ctrl+B y después D para separar tmux. Al volver por SSH, conecta la misma sesión. Si el agente terminó pero guardó la conversación, utiliza su comando de reanudación desde el mismo repositorio. Una conversación guardada no es un proceso activo.

```sh
tmux attach-session -t mobile-codex
```

```sh
codex resume
```

[tmux](https://github.com/tmux/tmux/wiki/Getting-Started)

## 5. Verifica fuera de la conversación

Abre los archivos cambiados, guarda, ejecuta las pruebas o compilación del proyecto y lee el diff. Estos comandos inspeccionan el parche, pero no sustituyen sus comprobaciones.

```sh
git diff --check
git diff --stat
git diff
```

El modo Confirm de Nimote Agent controla el agente integrado. No controla comandos SSH manuales ni sustituye los permisos de una CLI externa. Configura los permisos del agente; no desactives confirmaciones solo para reducir escritura en el móvil.

## Diagnostica la capa que falla

| Síntoma | Primera comprobación |
| --- | --- |
| SSH agota el tiempo | Suspensión, dirección, VPN, firewall o ruta |
| Comando no encontrado | Instalación y PATH en esa shell SSH |
| Falla el acceso | Cuenta del agente y guía oficial de autenticación sin navegador |
| Desaparece la sesión | tmux, reinicio, salida del proceso y reanudación de conversación |
| No ejecuta una prueba | Ruta, dependencias y permisos |

## Configuración oficial y guías relacionadas

[Codex CLI](https://learn.chatgpt.com/docs/codex/cli) · [CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli)

[SSH](/es/docs/ssh) · [Git](/es/docs/source-control) · [AI / ACP](/es/docs/ai)

## Preguntas frecuentes

<!-- faq:start -->

### ¿Incluye la suscripción de Codex?

No. Instala y autentica Codex por separado. NimoteCode es el espacio móvil alrededor de la sesión y no incluye la cuenta ni el uso del agente.

### ¿Cerrar la aplicación mantiene el agente activo?

No por sí solo. Una herramienta de sesiones ayuda ante desconexiones SSH, pero el equipo y el proceso deben seguir activos. Comprueba el estado al reconectar.

### ¿Es un cliente móvil oficial de Codex?

No. Es una guía independiente de SSH con NimoteCode. Las interfaces móviles o remotas del proveedor son opciones separadas.

<!-- faq:end -->

Puedes empezar con edición local o SSH y la terminal básica. Algunas funciones requieren Pro; consulta [Gratis y Pro](/es/pro) y el acceso mostrado en la aplicación. La IA requiere configurar tu proveedor de modelos, que factura el uso por separado.

<div class="seo-cta">
  <p><strong>Descargar NimoteCode</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode" class="home-page-btn primary" target="_blank" rel="noopener noreferrer">Google Play</a>
    <a href="https://apps.apple.com/app/id6776158253" class="home-page-btn tertiary" target="_blank" rel="noopener noreferrer">App Store</a>
    <a href="/es/docs/quick-start" class="home-page-btn secondary">Guía de inicio</a>
  </p>
</div>
