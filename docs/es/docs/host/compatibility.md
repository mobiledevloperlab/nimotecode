---
title: "Hardware y selección de paquetes | NimoteHost"
description: "Elige el paquete según el sistema operativo y la arquitectura del ordenador o servidor que ejecuta NimoteHost, incluso si descargas desde el móvil. La CPU del móvil no determina el paquete. Elige CLI o escritorio y una versión compatible con NimoteCode."
---

# Hardware y selección de paquetes

Elige el paquete según **el sistema operativo y la arquitectura del ordenador o servidor que ejecuta NimoteHost**, incluso si descargas desde el móvil. La CPU del móvil no determina el paquete. Elige CLI o escritorio y una versión compatible con NimoteCode.

## Matriz de distribución actual

Basado en NimoteHost 2.4.0. Son destinos de compilación; la validación completa en plataformas nativas y móvil/Agent sigue pendiente. Comprueba los archivos disponibles en cada versión.

| Sistema / CPU del Host | Destino del paquete | CLI | Escritorio |
| --- | --- | --- | --- |
| Linux · Intel/AMD x64 | `linux-amd64` | ✓ | ✓ |
| Linux · ARM64 | `linux-arm64` | ✓ | ✓ |
| Linux · x86 (32-bit) | `linux-386` | ✓ | — |
| macOS · Apple Silicon | `darwin-arm64` | ✓ | ✓ |
| macOS · Intel | `darwin-amd64` | ✓ | ✓ |
| Windows · Intel/AMD x64 | `windows-amd64` | ✓ | ✓ |
| Windows · ARM64 | `windows-arm64` | ✓ | ✓ |
| Windows · x86 (32-bit) | `windows-386` | ✓ | — |

## Comprobar la arquitectura del Host

En Linux/macOS ejecuta `uname -m` en el Host. `x86_64` corresponde a `amd64`; `aarch64` o `arm64` a `arm64`; `i386` o `i686` a x86 de 32 bits (`386`, solo CLI de Linux). En Windows consulta Configuración → Sistema → Acerca de → Tipo de sistema, tanto CPU como SO instalado. Una CPU de 64 bits con SO de 32 bits necesita el paquete de 32 bits.

`amd64` cubre Intel y AMD x64; `arm64` es ARM de 64 bits, incluido Apple Silicon. No se distribuyen ARM de 32 bits, escritorio de 32 bits ni macOS de 32 bits. ARM64 requiere también un SO de 64 bits compatible.

## Requisitos y límites de soporte

Elige CLI para servidores sin escritorio, o el paquete de escritorio que incluye CLI para gestión gráfica. Requiere el entorno gráfico nativo correspondiente. El escritorio Linux necesita glibc 2.35 o posterior; no presupongas compatibilidad con Alpine/musl. Los paquetes macOS no están firmados ni notarizados.

No se han publicado mínimos universales de RAM, disco o GPU. Calcula los recursos según proyectos, tareas simultáneas y herramientas Agent. Usar un Agent en la nube no implica ejecutar un modelo local ni necesitar GPU.

El servicio usa systemd de usuario en Linux, una sesión gráfica iniciada en macOS y una tarea de inicio de sesión en Windows. Si no están disponibles, prueba CLI en primer plano. Configura SSH por separado y mantén el Host activo y accesible por red.

[Código y destinos de compilación](https://github.com/mobiledevloperlab/nimotehost/blob/master/README.md) · [Versiones](https://github.com/mobiledevloperlab/nimotehost/releases) · [Validación pendiente](https://github.com/mobiledevloperlab/nimotehost/blob/master/docs/pending.md)

[Descarga e instalación](/es/docs/host/getting-started)
