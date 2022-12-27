# Emprender Publicidad

## ¿Que tecnologias se usaron?


<br>


- react - libreria de diseño UI
- next js - framework fullstack de react
- redux - manejo de estados globales
- node js - servidor web
- mongo DB - base de datos
- netlify - despliegue

## ¿Porque next js?

Este framework de react nos permite relizar optimizaciones en la carga de imagenes y links, ademas de poder crear APIs y servidor desde el mismo paquete de una manera sencilla.

Tambien tiene nos permite hacer SSR(server side rendering) y SSG(static side generation) para optimizar la carga de la pagina ademas de mejorar el SEO.

Tenemos la oportunidad de crear layouts que son componentes que se repiten en distintas paginas como el header, ademas tenemos una etiqueta head que nos permite añadir meta tags, titulo a la pagina, favicon, entre otras etiquetas a nuestro head.

## mongo db para las bases de datos de productos

Elegi mongo ya que al ser no SQL permite un escalado horizontal sencillo y de esta manera poder agregar nuevas propiedades a los productos en caso de necesitarlas mas adelante.

## Test

Los test se realizaron con jest dom y react testing library

## Consideraciones

- La aplicacion esta pensada para una futura escabilidad
- Tambien esta pensada para actualizar a la version 13 de next posteriormente cuando sea estable
- Tiene SEO