---
title: Configuration Guide | NimoteCode
description: Configure NimoteCode for reliable mobile work with practical AI provider, SSH workspace and remote task setup checklists.
---

# Guía de configuración


Configure NimoteCode en función del trabajo que realmente realiza. Una configuración pequeña y probada es más segura y útil que un gran catálogo de perfiles que no reconoces bajo presión.


## AI: mantener un perfil principal y uno de respaldo


Agregue el punto final del proveedor, la credencial y el modelo que planea usar; luego verifíquelo en AI Chat antes de confiar en el Agente. Un perfil primario y un respaldo probado ayudan a equilibrar la confiabilidad y el costo. Elija una aleatoriedad más baja para tareas de código precisas, utilice la transmisión cuando mejore la capacidad de respuesta y establezca el comportamiento del contexto deliberadamente.


<ImagePlaceholder image-key="aiModelConfig" alt="AI model configuration on NimoteCode for phone">
  <strong>AI model configuration</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="aiEditConfig" alt="AI edit configuration on NimoteCode for phone">
  <strong>AI editing configuration</strong>
</ImagePlaceholder>

## SSH: nombrar el entorno, luego establecer el límite


Cree un perfil por entorno, con un nombre, host, puerto, usuario y método de autenticación reconocibles. Confirme la raíz del espacio de trabajo después de conectarse. Prefiera el acceso basado en claves y cuentas con privilegios mínimos para hosts sensibles; Nunca asuma que un perfil familiar todavía apunta a un entorno seguro.


## Tareas: registrar procedimientos conocidos, no conjeturas


Cree tareas claras para compilación/prueba, formato/pelusa, comprobaciones de estado e inspección de registros. Agrúpelos por propósito y haga que cualquier comando de reinicio, implementación o cambio de datos sea inconfundible. Las tareas se ejecutan a través de un flujo de trabajo SSH, así que valide el acceso y el directorio actual antes de la ejecución.


## Lista de verificación lista para trabajar


1. AI Chat devuelve una respuesta del perfil deseado.

2. El perfil SSH llega al host deseado y a la raíz del proyecto.

3. Un comando de terminal de bajo riesgo funciona en el espacio de trabajo.

4. Una tarea bien comprendida se ejecuta correctamente.

5. Si usa flujos de trabajo Pro Git, Source Control puede leer el estado del repositorio antes de escribir algo.


Continuar con [Configuración](/docs/settings) · [Chat AI y Agente](/docs/ai) · [Seguridad y protección](/docs/security)
