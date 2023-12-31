# Nombre del Proyecto
    API 1 TOOLBOX-BACK

# Explicacion de la Api

   Este proyecto consiste en una API REST que consume datos de una API externa y los reformatea para facilitar su consumo en el lado del front-end.

# Estructura de Carpetas
 ```bash
   project-root/
    |-- src/
    | |-- routes/ # Archivos de rutas de Express
    | |-- controllers/ # metodos de parseo a json
    | |-- index.js # Archivo principal de la aplicación Express
    | |-- services/ # servicios de extraccion de data y formateo de api externa
    |-- test/
    | |-- serviceApiexterna.test.js # Pruebas utilizando Mocha y Chai
    |-- node_modules/ # Dependencias de Node.js (ignorar en repositorio)
    |-- package.json # Archivo de configuración de Node.js
    |-- .gitignore # Especifica archivos/directorios a ignorar por Git
    |-- README.md # Documentación del proyecto
```
## Configuración del Proyecto

1. **Instalación de Dependencias:**

   Antes de comenzar, instala las dependencias del proyecto utilizando el siguiente comando:

   ```bash
   npm install

2. **Inicio del proyecto:**
   
   ```bash
   npm run start

3. **Correr Test del proyecto:**
   
   ```bash
   npm run test