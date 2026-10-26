---
title: Configuración de IA y conexiones | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Configuración de IA y conexiones."
---

# Configuración de IA y conexiones

## Añadir una configuración de modelo

Abra **AI Configuration**, seleccione **Add Model** y elija un proveedor. Introduzca un nombre visible, la clave API, la Base URL y el nombre del modelo, y guarde los cambios. Su cuenta del proveedor debe tener acceso al modelo. NimoteCode no incluye tokens del proveedor.

<div class="doc-screenshots">
  <DocScreenshot file="ai-provider-overview.png" caption="AI Configuration con un modelo guardado y ajustes generales." />
  <DocScreenshot file="ai-provider-settings.jpg" caption="Formulario del modelo con la clave API oculta y una prueba de conexión." />
</div>

## Probar la conexión de chat

Seleccione **Test chat connection** para enviar una instrucción breve de prueba. No se envían archivos del espacio de trabajo ni la instrucción de sistema configurada; la salida se limita a 1024 tokens. El proveedor puede cobrar por la solicitud. El éxito confirma una respuesta de texto, no la compatibilidad con herramientas de Agent ni la capacidad de contexto del modelo.

## Ajustes generales

AI Configuration incluye servidores de herramientas MCP, guardado automático del historial y privacidad de IA. Revise estos ajustes por separado de los parámetros de muestreo y salida del modelo. Para configurar el host SSH, consulte [Espacios de trabajo locales y SSH](/es/docs/ssh).
