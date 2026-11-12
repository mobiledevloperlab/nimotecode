---
title: "Conectar Windows 11 por SSH y SFTP | NimoteCode"
description: "Configura OpenSSH Server en Windows 11 y conecta NimoteCode 2.3.0 o posterior. Edita archivos por SFTP y diagnostica autenticación, firewall, tiempos de espera y WSL2."
lang: es
updated: 2026-11-13
---

# Conectar NimoteCode a Windows 11 por SSH y SFTP

> **Versión necesaria: NimoteCode 2.3.0 o posterior.** Esta guía se centra en Windows 11. Windows 10 y Windows Server pueden tener una configuración similar, pero no se garantiza la compatibilidad de combinaciones sin verificar. Consulta las [notas de la versión 2.3.0](/es/releases/2.3.0).

## 1. Cómo funciona la conexión

Activa Microsoft OpenSSH Server (`sshd`) en el PC Windows. NimoteCode, desde el móvil o la tablet, se conecta por SSH y utiliza el subsistema SFTP de esa conexión para explorar y editar los archivos accesibles para la cuenta Windows autenticada. La terminal remota permite utilizar la shell de Windows.

```text
NimoteCode (móvil/tablet) -- SSH TCP/22 --> Windows 11 OpenSSH Server
    |-- SFTP: explorar y editar archivos
    `-- Shell: PowerShell/CMD según configuración
```

Esta conexión no muestra el escritorio gráfico de Windows y no requiere WSL2. Debes comprobar por separado SSH, SFTP y la shell. Los nombres de los controles pueden variar según la versión de la aplicación.

## 2. Requisitos

- **NimoteCode 2.3.0 o posterior**; comprueba la versión instalada.
- Un PC Windows 11. Las políticas de una organización pueden restringir las características opcionales o las conexiones entrantes.
- Una cuenta Windows con contraseña utilizable o una clave SSH configurada. El PIN de Windows Hello no es la contraseña SSH.
- Para la primera configuración, conecta ambos dispositivos a la misma red local de confianza.
- Salvo indicación contraria, ejecuta los comandos Windows en **PowerShell como administrador**.

## 3. Instalar e iniciar OpenSSH Server

Comprueba el componente opcional:

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'
```

Si `OpenSSH.Server~~~~0.0.1.0` aparece como `NotPresent`, instálalo:

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```

También puedes buscar Características opcionales en Configuración de Windows y añadir OpenSSH Server. La ubicación y los nombres cambian entre compilaciones. Si falla la instalación, comprueba Windows Update y las políticas de la organización.

Inicia el servicio y activa el inicio automático:

```powershell
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
Get-Service sshd
```

El estado debe ser `Running`. Si no existe el servicio, confirma que se instaló el componente servidor.

Comprueba las direcciones de escucha:

```powershell
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue |
  Select-Object LocalAddress, LocalPort, OwningProcess
```

Lo habitual es `0.0.0.0` o `::`. Si solo escucha en `127.0.0.1`, normalmente no admite conexiones desde otros dispositivos de la LAN. Revisa `Port`, `ListenAddress` y `Subsystem sftp` en `C:\ProgramData\ssh\sshd_config` cuando sea necesario. Valida antes de reiniciar:

```powershell
& "$env:WINDIR\System32\OpenSSH\sshd.exe" -t
Restart-Service sshd
```

No reemplaces todo el archivo de configuración sin entender su contenido.

## 4. Comprobar el firewall de Windows

La instalación suele crear la regla `OpenSSH-Server-In-TCP`:

```powershell
Get-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -ErrorAction SilentlyContinue |
  Select-Object Name, DisplayName, Enabled, Direction, Action, Profile
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
```

Si no existe, puedes crear esta regla para redes de confianza con perfil **Private**. Si ya existe una regla personalizada con el mismo nombre, revisa primero su configuración:

```powershell
New-NetFirewallRule -Name 'NimoteCode-OpenSSH-Private' `
  -DisplayName 'NimoteCode OpenSSH (Private)' `
  -Enabled True -Direction Inbound -Action Allow -Protocol TCP `
  -LocalPort 22 -Profile Private
```

Una regla limitada a `Private` podría no permitir la conexión si la red activa es `Public`. Cambia el perfil **solo cuando confíes en esa red**, en lugar de habilitar SSH permanentemente en todas las redes. Sustituye `Wi-Fi` por el nombre exacto de la interfaz:

```powershell
Get-NetConnectionProfile
Set-NetConnectionProfile -InterfaceAlias 'Wi-Fi' -NetworkCategory Private
```

El perfil `Any` no es la opción inicial recomendada. Las reglas de bloqueo, los límites de direcciones de origen, el software de seguridad y el router también pueden afectar al acceso.

### Varias reglas que permiten TCP 22

`NimoteCode SSH LAN`, `OpenSSH SSH Server (sshd)` y `NimoteCode Windows SSH` pueden permitir el mismo puerto. Son tres reglas, no tres puertos de escucha. Las reglas de permiso duplicadas normalmente no crean conflictos de sockets. Revisa su alcance antes de borrar una regla por su nombre:

```powershell
Get-NetFirewallRule -Direction Inbound -Enabled True |
  Where-Object { $_.DisplayName -match 'SSH|NimoteCode' } |
  Select-Object Name, DisplayName, Action, Profile
```

## 5. Identificar la dirección y el usuario correctos

```powershell
ipconfig
whoami
```

Utiliza la IPv4 del adaptador físico Wi-Fi o Ethernet activo, por ejemplo `192.168.1.100`. Evita confundirla con las direcciones virtuales de WSL, Docker, Hyper-V o VPN. Los formatos de usuario SSH pueden variar entre cuentas locales, de dominio y Microsoft. Verifica el inicio de sesión real con otro cliente SSH. No introduzcas el PIN de Windows Hello como contraseña.

## 6. Verificar el servidor antes de configurar NimoteCode

Prueba el puerto TCP en el propio PC:

```powershell
Test-NetConnection 127.0.0.1 -Port 22
```

`TcpTestSucceeded : True` solo demuestra conectividad TCP; no confirma autenticación ni SFTP.

Desde otro equipo Windows de la misma LAN:

```powershell
Test-NetConnection 192.168.1.100 -Port 22
ssh username@192.168.1.100
sftp username@192.168.1.100
```

Sustituye la dirección y el usuario de ejemplo. En la primera conexión, **comprueba la huella de la clave del servidor** antes de confiar en ella.

Si funciona la dirección de bucle local pero la prueba por LAN agota el tiempo de espera, revisa la IPv4, el perfil activo, el alcance del firewall, el aislamiento de clientes de la red de invitados, la VPN y el software de seguridad.

## 7. Añadir la conexión Windows en NimoteCode

1. Instala **NimoteCode 2.3.0 o posterior**.
2. Crea una **conexión SSH o espacio de trabajo remoto** desde el flujo de conexión de la aplicación.
3. Introduce la IP de la LAN Windows en Host (por ejemplo `192.168.1.100`), `22` en Port y la cuenta de inicio de sesión SSH en Username.
4. Elige autenticación por contraseña o clave privada compatible y guarda. Protege las claves privadas.
5. Verifica la huella del servidor en la primera conexión. Comprueba que puedes listar una carpeta, editar un archivo de texto de prueba y guardarlo.
6. Abre la terminal y utiliza los comandos apropiados para su shell para comprobar la identidad y el directorio actual.

El acceso SFTP depende de la cuenta Windows y los permisos NTFS. Autenticarse no concede permiso para escribir en `C:\Windows` o `Program Files`. Las rutas SFTP pueden diferir de `C:\...`; utiliza la representación que devuelve el servidor.

<figure>
  <a href="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" target="_blank" rel="noopener">
    <img src="/blog/how-to-ssh-into-windows-11-from-your-phone-and-browse-files-with-sftp/nimotecode-win11.png" width="2020" height="1041" alt="Vistas distintas de NimoteCode para Windows: ajustes de conexión, archivos remotos, terminal PowerShell y una sesión Agent." loading="lazy" decoding="async">
  </a>
  <figcaption>Vistas distintas de NimoteCode para Windows: ajustes de conexión, archivos remotos, terminal PowerShell y una sesión Agent.</figcaption>
</figure>

### Shell de Windows y verificación del servidor

Windows OpenSSH utiliza inicialmente CMD si no se ha cambiado DefaultShell. Los espacios Windows de NimoteCode utilizan PowerShell y SFTP. Si SSH abre CMD y quieres establecer PowerShell como shell predeterminada, ejecuta lo siguiente en PowerShell como administrador. El cambio afecta a futuras sesiones SSH; coordínalo en equipos compartidos.

```powershell
New-ItemProperty -Path 'HKLM:\SOFTWARE\OpenSSH' -Name DefaultShell `
  -Value "$env:WINDIR\System32\WindowsPowerShell\v1.0\powershell.exe" `
  -PropertyType String -Force
```

Compara la huella del cliente con un valor fiable obtenido directamente en el equipo Windows. Para la clave de servidor Ed25519 predeterminada, ejecuta:

```powershell
& "$env:WINDIR\System32\OpenSSH\ssh-keygen.exe" -lf "$env:ProgramData\ssh\ssh_host_ed25519_key.pub"
```

## 8. Utilizar Windows y WSL2 por separado

| Destino | Puerto de ejemplo | Acceso |
| --- | ---: | --- |
| Windows OpenSSH | 22 | Archivos y shell de Windows |
| SSH Linux de WSL2 | 2222 | Archivos y shell Linux dentro de WSL2 |

`2222` es **un ejemplo elegido por el usuario**, no el puerto SSH predeterminado de WSL2. Configura sshd en Linux y la ruta de Windows a WSL, mediante reenvío o redes reflejadas según corresponda. El modo de red y los reinicios pueden cambiar la accesibilidad. Permitir `2222` en el firewall de Windows no demuestra que WSL2 esté escuchando ni sea accesible.

```powershell
Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 22,2222 }
```

No necesitas WSL2 para gestionar archivos Windows por SFTP.

## 9. Diagnosticar según el síntoma

| Síntoma | Área que revisar | Acción |
| --- | --- | --- |
| TCP 22 agota el tiempo | IP, firewall, aislamiento de clientes, VPN o ruta | Comparar `Test-NetConnection` local y por LAN |
| Conexión rechazada | sshd detenido, puerto incorrecto, sin escucha | `Get-Service sshd` y `Get-NetTCPConnection` |
| Falla la autenticación | Usuario, contraseña, clave o política | Probar `ssh -v` desde un cliente de escritorio |
| Funciona la shell pero falla SFTP | Subsistema SFTP, configuración, permisos | `sftp -v`, configuración y registros de eventos |
| Lectura posible pero no guardado | ACL de NTFS, solo lectura, carpeta protegida | Probar una carpeta del usuario |
| Funciona 22 pero no 2222 | sshd de WSL, reenvío, modo de red | Comprobar escuchas en WSL y Windows |
| Funciona la LAN pero no internet | NAT, CGNAT, router o VPN | Preferir VPN o túnel privado seguro |

### Qué demuestra la configuración Windows 11 comunicada

Las reglas observadas incluían `WSL2 SSH Access (Any)`, varias `WSL2 SSH 2222 (Any)` y `OpenSSH SSH Server (sshd) (Private)`. Esto demuestra la existencia de reglas, pero no que sshd escuche ni que el tráfico remoto llegue al PC. La restricción `Private` solo es relevante si no coincide con el perfil activo; por sí sola no confirma la causa.

Ejecuta este diagnóstico en PowerShell elevado:

```powershell
Get-Service sshd
Get-NetTCPConnection -LocalPort 22 -State Listen -ErrorAction SilentlyContinue
Get-NetConnectionProfile | Select-Object InterfaceAlias, NetworkCategory
Get-NetFirewallRule -Name OpenSSH-Server-In-TCP -ErrorAction SilentlyContinue |
  Select-Object DisplayName, Enabled, Action, Profile
Test-NetConnection 127.0.0.1 -Port 22
ipconfig
```

Localiza los registros OpenSSH disponibles:

```powershell
Get-WinEvent -ListLog '*OpenSSH*'
```

## 10. Recomendaciones de seguridad

- Limita SSH entrante a redes de confianza o direcciones necesarias. Utiliza `Private` cuando sea práctico.
- Para internet, prefiere una VPN o un túnel privado bien configurado a la exposición directa de TCP 22.
- Prioriza claves SSH y protege las claves privadas. No pegues contraseñas ni claves en informes de problemas.
- Mantén Windows actualizado y utiliza cuentas de privilegios mínimos y permisos de archivo adecuados.
- Verifica las huellas del servidor e investiga cambios inesperados.
- No desactives el firewall de Windows como solución general de diagnóstico.

## 11. Alcance y notas de versión

Esta guía cubre la **configuración SSH/SFTP de NimoteCode 2.3.0 o posterior con Windows OpenSSH**. Otras funciones, como Git, los servicios de lenguaje y Agent, dependen de las herramientas y permisos del equipo y de la versión de la aplicación. No se garantiza un comportamiento idéntico al de Linux o macOS. Consulta las [notas de versión](/es/releases/2.3.0) y la [guía de espacios de trabajo](/es/docs/ssh).

## Referencias oficiales

- [Microsoft: instalar OpenSSH en Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?pivots=windows-11)
- [Microsoft: configurar OpenSSH en Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh-server-configuration)
- [Inicio rápido de NimoteCode](/es/docs/quick-start)
