---
title: Preguntas frecuentes de NimoteCode | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Preguntas frecuentes de NimoteCode."
---

# Preguntas frecuentes de NimoteCode

## ¿NimoteCode es solo un cliente SSH?

No. Puede abrir un proyecto local, usar Android Local Linux o conectar con un espacio SSH. Reúne Explorer, Editor, Terminal, Git, asistencia de IA y paneles de diagnóstico en el mismo contexto de proyecto.

## ¿Puedo usarlo sin Pro?

Sí. El plan gratuito incluye espacios locales y SSH, editor, terminal básico, AI Chat y Tasks básicas. La integración con GitHub y Android Local Linux requieren Early Access Pro. Local Linux necesita Android 8+ en ARM64 o x86_64 y no está disponible en iOS. Consulta [Pro](/es/pro).

## ¿Qué proveedores de IA puedo configurar?

La aplicación ofrece plantillas de proveedores y admite endpoints personalizados compatibles. La disponibilidad, el acceso a modelos y el coste dependen de su cuenta y ajustes del proveedor. Consulte [Configuración](/es/docs/configuration).

## ¿Qué admite Control de código fuente?

Todos los usuarios pueden consultar el estado, las diferencias y el historial del repositorio. Pro es necesario para operaciones restringidas de escritura de Git, como commits, pushes y stash. Consulte [Control de código fuente](/es/docs/source-control).

## ¿Las tareas se ejecutan localmente o en remoto?

Tasks está diseñado para comandos reutilizables en un espacio SSH. Los comandos se ejecutan en el espacio conectado. El directorio de trabajo predeterminado es su raíz, salvo que la tarea especifique otro.

## ¿LSP y la depuración funcionan con cualquier proyecto?

Dependen de que el host remoto tenga un servidor de lenguaje o adaptador compatible configurado, y de la configuración del proyecto. Son funciones Pro; consulte [LSP](/es/docs/lsp) y [Depuración](/es/docs/debug).
