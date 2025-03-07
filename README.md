# Prueba técnica - Estudio Faser
## Instalación
1. Hacer un fork de este repositorio en su cuenta de Github, que sea público.
2. Clonar su fork en su equipo local.
3. Ingresar vía Terminal o Command Prompt a la carpeta del proyecto y correr `npm install` para descargar las dependencias.
4. Correr el servidor local con `ng serve`.
5. Ingresar a `http://localhost:4200` para ver el sitio de pruebas.
## Requerimientos
En este repositorio encontrarás un proyecto base Angular con elementos muy básicos. Dentro de `AppComponent` se encuentra una variable que contiene un listado de tareas. Debes realizar las modificaciones necesarias para obtener los siguientes resultados:
1. Cambiar el listado ordenado por una tabla HTML.
2. Agregar la opción para poder agregar nuevas tareas al listado, cada una con su título y duración en minutos.
3. Agregar un control que permita seleccionar una o varias tareas a la vez.
4. Agregar un botón para eliminar la o las tareas seleccionadas.
5. Agregar la opción de poder ordenar de manera ascendente o descendente la tabla al tocar los distintos encabezados de la misma.
6. Agregar un botón para marcar las tareas seleccionadas como destacadas. Las tareas destacadas deben tener un estilo que las distinga de las tareas normales.
7. Agregar un botón que permita ordenar todas las tareas de manera aleatoria.
## Observaciones
- Se calificará que se cumplan los requerimientos solicitados.
- Realizar un commit por cada punto completado, identificándolo claramente con el número del punto realizado.
- Se favorecerá al código legible, comentado y que siga buenas prácticas de programación.
- Concentrarse únicamente en el cumplimiento de los requerimientos. Se ignorará el aspecto gráfico de la aplicación.
- Cualquier duda sobre los requerimientos o la entrega comunicarla vía WhatsApp.
## Algunos cambios que se realizaron:
- Se cambió la version de jasmine-core de 3.4.0 a 5.6.0
## Resultados
![image](https://github.com/user-attachments/assets/4f4c2b1b-2d5b-4485-8655-9de11bf815b2)

## Nota rapida:
uiliza el sigueinte comando:
**Cómo configurarlo:** 
```powershell
    $env:NODE_OPTIONS="--openssl-legacy-provider"
```
Este proyecto requiere que la variable de entorno `NODE_OPTIONS` esté configurada con el valor `--openssl-legacy-provider` para ejecutarse correctamente. Esto se debe a que versiones recientes de Node.js (como la v22.14.0) han actualizado OpenSSL, lo que puede causar incompatibilidad con ciertas configuraciones de proyectos más antiguos. Al establecer esta variable, permitimos que Node.js utilice proveedores de OpenSSL heredados, resolviendo el error `ERR_OSSL_EVP_UNSUPPORTED` y asegurando la compatibilidad.
Corre el comando antes de ejecutar el `ng serve`. Se recomienda actualizar las dependencias del proyecto. 

