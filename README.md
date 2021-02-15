# Api last.fm/api test 

Esta prueba esta realizada con react native y expo.

# Capas
El proyecto se divide en tres capas principales
  - Capa de los servicios y el modelo: 
    Esta capa contiene dos archivos, interactor y factory, esos archivos se encargaran de la comunicacion con la api y el almacenamiento de datos con AsyncStorage
  - Capa de los controladores:
    En esta capa se controla la interaccion de la vista con los servicios y se maneja la logica de negocio de cada componente
  - Capa de las vistas:
    En esta capa se renderizan los resultados de los servicios y se comunica mediante eventos con el controlador
  - Capa de utilidades:
    Ya que se requirio reutilizar muchas veces algunas vistas se crearon unas utilidades que recorrieran la informacion de manera dinamica 

# Estructura del proyecto
  - En la raiz del proyecto podemos encontrar:
    -   Controllers: En esta carpeta se almacenan las capas que proveen la aplicacion de datos y la navegacion principal
    -   ViewControllers: En esta carpeta se almacenan los controladores de las vistas que se comunican o requieren datos
    -   Views: En esta carpeta se almacenan las vistas que componen el proyecto
### Instalacion

Esta aplicacion require [Node.js](https://nodejs.org/) para correr.

Instala las dependencias y asegurate de configurar expo para que todo funcione correctamente

```sh
$ npm i
$ expo start
```
