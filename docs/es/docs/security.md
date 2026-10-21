---
title: Security and Safety | NimoteCode
description: Practical security guidance for NimoteCode SSH workspaces, provider credentials, AI Agent review, terminal commands, Git changes and subscription verification.
---

# Seguridad y protección


NimoteCode puede funcionar con acceso SSH, credenciales de proveedor, comandos de terminal y cambios de archivos. La aplicación proporciona mecanismos de almacenamiento seguro y flujo de trabajo controlado, pero el desarrollo remoto seguro aún depende de las elecciones que haga para cada host y acción.


## Credenciales y acceso


- Utilice cuentas SSH separadas y con privilegios mínimos para entornos sensibles.

- Prefiera la autenticación de clave privada para hosts críticos y confirme el host y la raíz del proyecto en cada sesión.

- Trate las credenciales del proveedor de IA como confidenciales; configúrelos en el flujo de almacenamiento protegido de la aplicación y rótelos con el proveedor cuando sea necesario.

- Mantenga la verificación de suscripción vinculada a su cuenta deseada y a su identidad de tienda de plataforma.


## AI Agente y acciones de escritura


AI Agent separa la ejecución de la herramienta de una simple respuesta de chat y aplica capas de validación y bloqueo alrededor del trabajo de archivos y comandos. Aún así, revise cada comando y cambio propuesto, especialmente cuando el espacio de trabajo tiene acceso de producción. Utilice la revisión de diferencias de [Control de fuente](/docs/source-control) antes de confirmar o presionar.


## Una rutina remota más segura


1. Verifique el host SSH, el usuario y la raíz del espacio de trabajo.

2. Comience con una inspección o un comando de bajo riesgo.

3. Lea el resultado del terminal y la propuesta de IA en contexto.

4. Haz el cambio más pequeño necesario.

5. Pruébelo y revise la diferencia de Git antes de la entrega.


Relacionado: [Espacio de trabajo SSH](/docs/ssh) · [Chat AI y Agente](/docs/ai) · [Configuración](/docs/configuration)
