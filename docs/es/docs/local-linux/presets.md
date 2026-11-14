---
title: "Linux Presets para Python, Node.js y C++ | NimoteCode"
description: "Explora herramientas Ubuntu opcionales para Local Linux en Android. Comprueba estado experimental, arquitecturas, dependencias y SHA-256 antes de instalar."
---

# NimoteCode Linux Presets

Los conjuntos de herramientas opcionales se mantienen en el [repositorio Linux Presets](https://github.com/mobiledevloperlab/nimote-linux-presets). Elige uno para tu proyecto y comprueba su compatibilidad antes de instalar.

## Herramientas disponibles

| Conjunto | Uso |
| --- | --- |
| `minimal` | Herramientas esenciales de línea de comandos |
| `python` | Python 3, pip y entornos virtuales |
| `web` | Node.js y npm de los paquetes de Ubuntu |
| `cpp` | GCC, CMake, GDB y compilación nativa |

El entorno declarado es Ubuntu 24.04 en ARM64 o AMD64. Los conjuntos están marcados como **experimental**. Consulta el manifiesto de la versión elegida para conocer estado, dependencias y requisitos exactos.

## Antes de instalar

1. Elige una versión o revisión compatible con tu entorno.
2. Lee su manifiesto y verifica `checksums.sha256` y los hashes de los scripts antes de seguir el instalador documentado.
3. Consulta las pruebas de Android PRoot. Superar las pruebas de contenedores Ubuntu no demuestra compatibilidad con tu dispositivo.

Para comenzar, consulta [primeros pasos](/es/docs/local-linux/getting-started). Revisa los límites en [compatibilidad](/es/docs/local-linux/compatibility) y la verificación en [seguridad e integridad](/es/docs/local-linux/security-integrity).
