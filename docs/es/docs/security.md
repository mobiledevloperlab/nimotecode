---
title: Credenciales y revisión de operaciones | NimoteCode
description: "Configuración, procedimientos y referencia de la interfaz: Credenciales y revisión de operaciones."
---

# Credenciales y revisión de operaciones

## Acceso SSH

Use una cuenta SSH con permisos adecuados para el proyecto. Al abrir una sesión, compruebe el host, el usuario y la raíz del espacio de trabajo. El proxy cambia la ruta de conexión al host, pero no los permisos de la cuenta.

## Credenciales del proveedor

Introduzca las claves API en el formulario del proveedor. No incluya credenciales en instrucciones, archivos del proyecto ni registros compartidos. Revoque y sustituya cualquier clave expuesta a través del proveedor.

## Planes y cambios en archivos

Revise el plan de Agent antes de aprobar herramientas en modo Confirm. Compruebe los permisos solicitados al instalar o actualizar plugins. Antes de crear un commit, examine el [diff de Git](/es/docs/source-control) y ejecute las comprobaciones pertinentes del proyecto.
