---
title: Privacy Policy | NimoteCode
description: Read how NimoteCode handles account data, subscriptions, workspace settings, AI configuration, diagnostics, and third-party integrations.
---

# Política de Privacidad


**Fecha de entrada en vigor:** 16 de abril de 2026


Esta Política de Privacidad explica cómo NimoteCode maneja los datos cuando utiliza nuestra aplicación móvil y los canales de soporte relacionados.


## 1. Alcance


Esta política se aplica a las aplicaciones móviles de NimoteCode y a los canales de soporte oficiales.


## 2. Datos que procesamos


### 2.1 Cuenta y datos de inicio de sesión


Cuando inicias sesión, procesamos los datos de la cuenta a través de Firebase Authentication, que incluyen:


- ID de usuario

- Dirección de correo electrónico (para inicio de sesión con correo electrónico/contraseña)

- Metadatos del proveedor de inicio de sesión (por ejemplo, inicio de sesión de Google)


### 2.2 Datos de suscripción y prueba


Para proporcionar funciones Pro y controles de prueba, procesamos:


- Derecho de suscripción y estado de compra (a través de RevenueCat y tiendas de aplicaciones)

- Campos de estado de la prueba (por ejemplo, inicio/finalización de la prueba y si se utilizó la prueba)

- Un identificador de prueba de dispositivo con hash utilizado para ayudar a prevenir el abuso repetido de las pruebas


### 2.3 Datos de preferencias de aplicaciones y espacios de trabajo


Dependiendo del uso, NimoteCode almacena:


- Perfil SSH y configuración de conexión del espacio de trabajo (por ejemplo, host, puerto, nombre de usuario, método de autenticación, raíz del espacio de trabajo)

- Configuración y preferencias de la aplicación (por ejemplo, preferencias de tema, idioma, editor y teclado)

- Metadatos del flujo de trabajo e historial de chat/agente en las rutas del espacio de trabajo `.nimote` (local y/o remota, según su flujo de trabajo)


Manejo de contraseñas SSH:
Las contraseñas 

- SSH se utilizan únicamente para autenticar las conexiones que inicia.

- Las contraseñas SSH **no** se almacenan en su perfil local (configuración de conexión).

- Si elige la opción "recordar contraseña" en la aplicación, la contraseña se guarda en el almacenamiento seguro de la plataforma de su dispositivo (Llavero de iOS o Almacén de claves de Android); puede eliminarlo en cualquier momento eliminando el perfil o la conexión SSH guardados.


### 2.4 Configuración de AI y datos de solicitud de AI


Si configura proveedores de IA, procesamos:


- Valores de configuración del proveedor que ingresa (por ejemplo, tipo de proveedor, URL base, modelo, clave API)

- Mensajes y contenido que elijas enviar
Las solicitudes 

AI se envían solo a los puntos finales del proveedor que configure.


Almacenamiento de credenciales API AI:
Las claves API 

- AI se almacenan mediante mecanismos de almacenamiento seguro de la plataforma (por ejemplo, almacenamiento respaldado por iOS Keychain/Android Keystore).
Las claves API 
- AI ya no se almacenan en el almacenamiento simple de preferencias de aplicaciones.


### 2.5 Diagnóstico operativo


Podemos procesar registros operativos limitados necesarios para la confiabilidad, solución de problemas y seguridad.


Minimización de diagnósticos:


- En las versiones de lanzamiento, los registros de autenticación y credenciales se reducen y los campos confidenciales se enmascaran u omiten.


## 3. Cómo utilizamos los datos


Utilizamos datos para:


- Autenticar usuarios y cuentas seguras

- Proporciona funcionalidad de aplicación (espacio de trabajo, editor, terminal, control de fuente, IA y tareas)

- Verificar suscripción y elegibilidad de prueba

- Mantener la confiabilidad del servicio, la seguridad y las operaciones de soporte


## 4. Terceros e intercambio de datos


NimoteCode confía en terceros para funciones específicas:


- Firebase (autenticación y capacidades backend de nube relacionadas)

- RevenueCat (sincronización de derechos de suscripción)

- App Store / Google Play (facturación de compras dentro de la aplicación, renovaciones, reembolsos según la política de la tienda)

- Proveedores de IA seleccionados por el usuario (puntos finales de inferencia de IA configurados por usted)

- Servidores remotos seleccionados por el usuario (operaciones SSH/SFTP)


No vendemos datos personales.


## 5. Permisos y acceso al dispositivo


NimoteCode no solicita acceso a datos confidenciales del dispositivo, como fotos, cámara, micrófono, contactos o ubicación precisa. Debido a que los modelos de permisos de Android e iOS difieren, los permisos que declaramos se enumeran por separado a continuación:


En **Android**, la aplicación declara permisos limitados en su manifiesto:

- `INTERNET` y `ACCESS_NETWORK_STATE` para desarrollo remoto, autenticación, comprobaciones de suscripción y comunicación entre IA y proveedores

- `com.android.vending.BILLING` para compras de suscripción a Google Play

- `com.google.android.gms.permission.AD_ID`, declarado como parte de las bibliotecas de servicios de Google (Firebase Analytics / Google Sign-In) utilizadas por la aplicación

- `READ_EXTERNAL_STORAGE` y `WRITE_EXTERNAL_STORAGE` solo en Android 9 y versiones anteriores, para abrir archivos y espacios de trabajo existentes; en Android 10 y superior, la aplicación utiliza el marco de acceso al almacenamiento y no requiere estos permisos


En **iOS**, la aplicación no solicita solicitudes de permiso de tiempo de ejecución para fotos, cámara, micrófono, contactos o archivos:


- El acceso a la red se utiliza para desarrollo remoto, autenticación, comprobaciones de suscripción y comunicación entre IA y proveedores.

- Las suscripciones y compras dentro de la aplicación se facturan a través de App Store (StoreKit, integrado a través de RevenueCat)

- La selección de archivos utiliza el selector de documentos nativo, por lo que no se requiere permiso de acceso a la biblioteca de archivos o fotos


Los permisos se utilizan para la funcionalidad de la aplicación, no para vender datos personales.


## 6. Retención de datos


- Los datos locales permanecen en su dispositivo/espacio de trabajo hasta que usted los elimine (por ejemplo, borrar datos de la aplicación, limpiar el espacio de trabajo, eliminar `.nimote`)

- Los registros de suscripción/cuenta en la nube se conservan según sea necesario para la operación del servicio, la prevención de fraude, la seguridad, el manejo de disputas y el cumplimiento legal.

- Los períodos de retención pueden variar según los requisitos legales y operativos.


## 7. Sus opciones y derechos


Puedes:


- Administre o elimine datos de aplicaciones/espacios de trabajo locales directamente

- Eliminar las configuraciones del proveedor de IA para dejar de enviar nuevas solicitudes a ese proveedor

- Inicie la eliminación de la cuenta en la aplicación a través de **Configuración -> Eliminar cuenta**

- Utilice nuestra página de eliminación web cuando no pueda iniciar sesión: [Eliminación de cuenta](/account-delete)

- Solicitar asistencia de cuenta/privacidad a través de los canales de contacto de soporte


## 8. Seguridad


Aplicamos salvaguardias técnicas y organizativas razonables. Ningún método de transmisión o almacenamiento puede garantizarse 100% seguro.


Las salvaguardas actuales incluyen:


- Almacenamiento seguro para credenciales de API de IA (almacenamiento seguro de plataforma)

- No hay almacenamiento local persistente de contraseñas SSH en perfiles de conexión

- Registro confidencial reducido y anonimizado en versiones de lanzamiento


## 9. niños


NimoteCode no está dirigido a niños menores de 13 años (o la edad mínima aplicable en su región).


## 10. Procesamiento Internacional


Debido a que los proveedores y la infraestructura configurados pueden operar en diferentes regiones, los datos pueden procesarse fuera de su país de acuerdo con la ley aplicable.


## 11. Actualizaciones de políticas


Podemos actualizar esta política. La última versión publicada y la fecha de vigencia en el control de esta página.


## 12. Contacto


- Correo electrónico: support@nimotecode.com

- Problemas de GitHub: https://github.com/mobiledevloperlab/nimote_issues/issues
