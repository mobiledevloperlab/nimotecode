---
title: "Solución de problemas | NimoteHost"
description: "NimoteHost: guía de solución de problemas."
---

# Solución de problemas

**Por ahora, NimoteHost solo admite conexiones en la red local (LAN).** Conecta el móvil y el equipo que ejecuta Host a la misma red local y usa la dirección local del equipo para conectarte por SSH.

## Si no conecta

Primero comprueba SSH normal. Si Host no aparece, revisa la cuenta, instalación y PATH; en Windows, el discovery.json del mismo usuario. Si el protocolo no coincide, actualiza app y Host a versiones compatibles.

Una salida visible puede ser historial cargado: verifica conexión y proceso antes de escribir. Revisa que la carpeta remota exista y sea accesible. Si no sabes si una creación terminó, busca la sesión original antes de repetirla. Termina el trabajo activo antes de reiniciar, actualizar o detener Host.

Para un servicio instalado, usa `nimotehost deploy status` y `nimotehost deploy start`. Si Host no detecta un agente instalado y autenticado en el equipo, ejecuta `nimotehost tools refresh` y después `nimotehost agents`.

[SSH](/es/docs/ssh) · [Agent](/es/docs/ai) · [Tareas](/es/docs/tasks)

[Resumen](/es/docs/host) · [Hardware y selección de paquetes](/es/docs/host/compatibility)
