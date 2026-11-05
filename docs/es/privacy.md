---
title: "Política de privacidad | NimoteCode"
description: "Datos de NimoteCode: app, sitio web, credenciales, IA, analítica y eliminación."
pageClass: trust-page
---

<TrustNav />

# Política de privacidad

<p class="trust-meta">Vigencia original: 2026-04-16 · Última actualización: 2026-11-05</p>

Esta política cubre la app NimoteCode, el sitio oficial y los canales de soporte. Contacto de privacidad: [support@nimotecode.com](mailto:support@nimotecode.com).

<div class="trust-summary">

**Los destinatarios dependen de las funciones que utilices.** SSH, IA, GitHub, MCP y agentes externos conectan con los servicios configurados. Eliminar la cuenta, borrar datos del dispositivo y cancelar una suscripción son acciones distintas.

[Eliminar cuenta](/es/account-delete) · [Soporte](/es/support)

</div>

## Datos que tratamos {#data}

| Contexto | Datos y finalidad | Almacenamiento o destinatario |
| --- | --- | --- |
| Cuenta e inicio de sesión | ID de usuario, correo y datos del proveedor de acceso. Apple puede facilitar un correo de retransmisión; algunas funciones usan una identidad de invitado. | Firebase Authentication y servicios de cuenta en la nube. |
| Pro, compras y pruebas | Transacciones, tienda, derechos de acceso, caducidad y estado de prueba para verificar acceso y prevenir abusos. | RevenueCat, Apple / Google y Firebase. La tienda procesa el pago. |
| Verificación de prueba | Hashes de identificadores del dispositivo, de instalación de Firebase o de alternativas generadas. Un hash no implica anonimato. | Los originales se procesan en el dispositivo; los hashes y registros de prueba se envían al servidor. |
| Conexiones y ajustes | Host, puerto, usuario, rutas, preferencias y credenciales guardadas. | Metadatos en el dispositivo; secretos en almacenamiento seguro del sistema. El destino recibe la autenticación necesaria. |
| IA y herramientas | Instrucciones, contenido seleccionado, código relevante, rutas, entradas/salidas de herramientas y respuestas para tareas solicitadas o autorizadas. | Proveedores elegidos, GitHub, MCP, agentes externos y sus servicios. |
| Analítica de uso | Sesiones, funciones, plataforma, versión, región configurada, tipo de usuario, rutas del espacio de trabajo y metadatos de operaciones. Puede vincularse al ID de usuario al iniciar sesión. | Firebase Analytics, con una posible cola local antes del envío. |
| Soporte e informes | Correo, descripción y archivos enviados. Los informes de IA pueden incluir extractos, motivo, modelo y entorno. | Informes locales; buzón y servicio de correo después del envío. Las incidencias públicas se gestionan en GitHub. |

## Finalidades y diagnóstico operativo {#purposes}

Los ajustes de conexión incluyen método de autenticación y raíz del espacio de trabajo; las preferencias incluyen tema, idioma, editor y teclado. La configuración de IA incluye proveedor, URL base, modelo y API key. Las contraseñas SSH autentican conexiones que inicias y se almacenan de forma segura por separado de los ajustes ordinarios. El guardado actual de configuración de IA también separa las API keys de las preferencias ordinarias.

Usamos estos datos para autenticación y seguridad de cuenta; espacios, editor, terminal, control de versiones, IA y Tasks; verificación de suscripciones y pruebas; fiabilidad, seguridad y soporte.

La app puede generar registros operativos para diagnóstico, fiabilidad y seguridad. El componente general actual de registro suprime mensajes debug en versiones de producción. Esto no implica que todos los demás registros o errores sean anónimos o estén libres de información sensible. El diagnóstico es distinto de la analítica Firebase. Antes de enviar voluntariamente registros o capturas, elimina credenciales y contenido privado.

## Credenciales, conversaciones y archivos {#storage}

Las contraseñas SSH, claves privadas, frases de paso, autenticación de proxy, API keys de IA, tokens de GitHub y configuración MCP administrados por la app usan iOS Keychain o almacenamiento cifrado respaldado por Android Keystore. Esto no significa que la app nunca guarde credenciales SSH. Eliminar una conexión SSH guardada o una configuración de IA elimina sus credenciales asociadas en ese almacenamiento.

El historial de IA se guarda **por defecto en almacenamiento local de la app**, con mensajes y contexto de herramientas/proyecto para recuperar sesiones. Desactivar el guardado no borra el historial existente. Los informes también son locales hasta su eliminación o el límite de registros. El historial ordinario no equivale al almacenamiento seguro de credenciales.

Los archivos, cachés, metadatos de flujos y registros de agentes externos pueden existir por separado en el dispositivo, servidor o espacio de trabajo, incluidos directorios `.nimote`. Borrar el historial de la app no elimina esas copias ni datos ya recibidos por terceros. No introduzcas secretos en instrucciones o archivos del proyecto.

## IA y conexiones externas {#integrations}

Las solicitudes directas al modelo se envían al proveedor elegido. Los agentes pueden leer archivos e incluir resultados de herramientas según la tarea, permisos y modo. Revisa la pantalla de privacidad previa al primer envío y las acciones que autorizas.

Los servidores HTTP MCP reciben solicitudes de herramientas; los stdio se ejecutan en el dispositivo, Local Linux o entorno SSH seleccionado. Los agentes ACP externos son procesos independientes con sus propias credenciales, comunicaciones, registros y almacenamiento. GitHub utiliza la autorización o token para las operaciones elegidas. Publicar, hacer push o compartir puede exponer contenido a otras personas.

BYOK no garantiza que un proveedor no conserve datos ni los use para entrenamiento. Revisa sus condiciones; elimina configuraciones, desconecta servicios o revoca autorizaciones para detener accesos futuros. Los datos enviados requieren el procedimiento de eliminación del destinatario.

## Analítica de la app y del sitio {#analytics}

**App:** la versión actual inicializa Firebase Analytics y registra los datos de uso descritos. No son completamente anónimos. La app actual no ofrece un interruptor general para desactivar la analítica; la elección del sitio no desactiva la analítica móvil. Puedes enviar solicitudes de privacidad por correo.

**Sitio:** Google Analytics solo se carga si lo permites. Mide visitas y clics con rutas, texto de enlaces, destino, campañas e información del navegador/dispositivo; puede usar cookies e identificadores. Rechazar no limita la lectura ni los enlaces de descarga. Puedes retirar el permiso en «Privacidad del sitio web», en el pie de página. No configuramos un ID de usuario conectado, Google Signals ni personalización publicitaria para esta analítica.

La elección se guarda en el navegador y se restablece al borrar los datos del sitio. El alojamiento, distribución y seguridad siguen procesando IP, solicitudes y conexiones básicas para servir páginas y prevenir abusos.

## Permisos y proveedores {#providers}

Android declara acceso a red, facturación, notificaciones, servicio en primer plano para sesiones SSH iniciadas por el usuario y almacenamiento externo solo hasta Android 9. También declara `AD_ID`; su tratamiento depende del sistema y del SDK. iOS / iPadOS usa red, el selector de documentos, compras de la tienda y Live Activities para estados de tareas. No se declara acceso a cámara, micrófono, contactos ni ubicación precisa para estas funciones. Las notificaciones y la pantalla bloqueada pueden ser visibles a terceros; se gestionan en ajustes del sistema.

[Firebase](https://firebase.google.com/support/privacy), [RevenueCat](https://www.revenuecat.com/privacy/), [Apple](https://www.apple.com/legal/privacy/), [Google](https://policies.google.com/privacy) y [GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) tratan datos para sus funciones. Los destinos de IA, MCP y SSH dependen de tu configuración. Puede haber tratamiento internacional; los avisos, autorizaciones y garantías aplicables dependen del servicio y configuración reales. No vendemos datos personales. Podemos revelar información necesaria para obligaciones legales, seguridad o controversias.

## Conservación, eliminación y derechos {#retention}

La eliminación correcta de la cuenta borra la cuenta de autenticación y el registro principal y desvincula la titularidad actual de la suscripción. Pueden conservarse transacciones, registros de desvinculación con el antiguo ID de usuario y hashes de prueba para verificar derechos, prevenir abusos, resolver disputas y cumplir obligaciones. No se borran automáticamente todos los datos de RevenueCat, analítica o soporte.

Gestiona por separado archivos, credenciales e historial local. La analítica y los registros siguen la configuración de conservación del servicio y las necesidades de seguridad y diagnóstico; el soporte se conserva para resolver solicitudes y obligaciones necesarias. No hay un plazo único para todos los datos. Las excepciones se limitan a su finalidad, obligación y duración necesaria; puedes consultar el alcance y tratamiento. [Detalles de eliminación](/es/account-delete).

Puedes usar Ajustes → Eliminar cuenta, borrar historial, desconectar integraciones, gestionar permisos y rechazar analítica web. Según la ley aplicable, puedes solicitar acceso, rectificación, copia, eliminación, retirada de consentimiento, limitación u oposición por correo. Tras la verificación necesaria, informaremos del progreso, fecha estimada o motivos de no cumplimiento; prevalecen los plazos legales. No envíes contraseñas ni códigos de verificación.

## Seguridad, menores y cambios {#updates}

Utilizamos almacenamiento seguro y autenticación, pero no garantizamos la seguridad de todos los dispositivos o entornos externos. El servicio se dirige a desarrolladores. Los menores de 13 años, o de una edad mínima local superior, no deben crear cuentas ni enviar datos personales. La clasificación de contenido de la tienda es distinta de este umbral. Contacta con soporte sobre datos de menores.

Actualizaremos la fecha cuando cambie esta política. Los cambios materiales en fines o destinatarios tendrán avisos adicionales o consentimiento cuando corresponda.

## Contacto {#contact}

Para privacidad, cuentas y eliminación usa correo privado: <mailto:support@nimotecode.com>. Para errores públicos e ideas: <https://github.com/mobiledevloperlab/nimote_issues/issues>. No publiques información personal ni credenciales.
