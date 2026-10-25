---
title: Local and Remote SSH Workspaces | NimoteCode Mobile IDE
description: Open a local project or connect to a remote project with SSH in NimoteCode, then work from one clear project root.
---

# Espacios de trabajo SSH locales y remotos


NimoteCode comienza con un espacio de trabajo: un proyecto local almacenado en su dispositivo o un proyecto remoto al que se accede a través de SSH. El Explorador, el Editor y la Terminal permanecen conectados a la misma raíz del proyecto, por lo que una tarea sigue siendo comprensible desde la primera inspección hasta la verificación. Para Ubuntu incluido en Android, consulte [Android Local Linux](/docs/local-linux).


<ImagePlaceholder image-key="localWorkspace" alt="Local workspace in NimoteCode on phone">
  <strong>Local workspace</strong>
  <span>Open a project stored on the device with Local Explorer.</span>
</ImagePlaceholder>

## Abrir un espacio de trabajo local


Elija **Explorador local** para explorar un proyecto almacenado en su dispositivo. Confirme la carpeta antes de editar archivos, ejecutar comandos o revisar cambios en Source Control.


## Conectar un espacio de trabajo SSH


<ImagePlaceholder image-key="sshWorkspace" alt="NimoteCode SSH workspace setup">
  <strong>SSH workspace setup</strong>
  <span>Connect to a remote host, then open its project root in Remote Explorer.</span>
</ImagePlaceholder>

Conéctese en cuatro pasos:


1. Crea o selecciona un perfil SSH.

2. Ingrese el host, el puerto y el nombre de usuario.

3. Autenticar con una contraseña, un archivo de clave privada o una clave privada pegada. Cuando la red lo requiera, conéctese mediante un proxy SOCKS5 o HTTP CONNECT.

4. Confirme la raíz del proyecto remoto y luego ábralo en Remote Explorer.


## Elija y confirme el directorio remoto


Explorer es el punto de partida para un proyecto respaldado por SSH. Después de conectarse, seleccione **Remote Explorer**, luego confirme tanto el host como la raíz del proyecto antes de abrir archivos o ejecutar comandos.


<ImagePlaceholder image-key="explorerPage" alt="Explorer selection page on NimoteCode for phone">
  <strong>Select a workspace explorer</strong>
</ImagePlaceholder>

<ImagePlaceholder image-key="explorerPopup" alt="Explorer selection popup on NimoteCode for phone">
  <strong>Explorer selection controls</strong>
</ImagePlaceholder>

Elija la raíz del proyecto, no simplemente el directorio de inicio del servidor. Esto le da al Editor, Terminal, Búsqueda y Control de fuente un límite compartido y reduce la posibilidad de ejecutar un comando en la ubicación incorrecta.


<ImagePlaceholder image-key="remoteDirectory" alt="Remote directory selection dialog on NimoteCode for phone">
  <strong>Select the remote project directory</strong>
</ImagePlaceholder>

## Lo que permanece en contexto


- Explore el proyecto remoto y abra archivos en [Editor](/docs/editor).

- Ejecute comandos de shell en [Terminal](/docs/terminal) para ese espacio de trabajo.

- Busca contenido de archivos remotos con [Buscar](/docs/search).

- Revisar un parche enfocado en [Control de fuente](/docs/source-control); use Pro solo si la entrega necesita una acción de escritura Git cerrada.


## Hábitos remotos más seguros


Utilice un perfil separado para cada entorno, prefiera una cuenta con privilegios mínimos y autenticación basada en claves para hosts confidenciales y elija una raíz de proyecto deliberada. Si usa un proxy, verifique su dirección y límite de confianza con el mismo cuidado que el host de destino. El comportamiento consciente de la reconexión y la reutilización de la conexión hacen que los comandos remotos y los túneles de vista previa sean más resistentes, pero siempre debe verificar el host y el directorio activos antes de ejecutar un comando de escritura.


Siguiente: [Terminal](/docs/terminal) · [Flujo de trabajo de desarrollo remoto SSH](/docs/ssh) · [Seguridad y protección](/docs/security)
