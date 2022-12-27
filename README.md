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

Este framework de react nos permite relizar optimizaciones en la carga de imagenes y links, ademas de poder crear APIs y servidor desde el mismo paquete de una manera sencilla, como en este caso para crear la API REST para hacer el CRUD a la base de datos de productos.

Tambien tiene nos permite hacer SSR(server side rendering) y SSG(static side generation) para optimizar la carga de la pagina ademas de mejorar el SEO.

Tenemos la oportunidad de crear layouts que son componentes que se repiten en distintas paginas como el header, ademas tenemos una etiqueta head que nos permite añadir meta tags, titulo a la pagina, favicon, entre otras etiquetas a nuestro head.

## Mongo db para las bases de datos de productos

Elegi mongo ya que al ser no SQL permite un escalado horizontal sencillo y de esta manera poder agregar nuevas propiedades a los productos en caso de necesitarlas mas adelante.

## Variables de entorno

Se usaron variables de entorno para no comprometer la ip, usuarios y contraseñas de la base de datos al hacer el despliegue, ya que el codigo esta alojado en un repositorio publico y esta informacion es confidencial.

## Redux con redux toolkit para el estado global

Al ser una aplicaion con una logica compleja y gran cantidad de componentes que nececitaban acceder a los mismos datos necesitaba tener un estado global para no pasar con props los estados y de esta manera sea escalable y legible el codigo, ademas facil de depurar en caso de errores.

Se uso el redux toolkit para ocuparse de lo realmente importante y dejar el codigo repetitivo a la libreria, ademas de otras operaciones abstractas que tiene redux como la inmutabilidad del estado

- creacion del los estados globales, con el toolkit

        import { configureStore } from "@reduxjs/toolkit";

        export const store = configureStore({
            reducer: {
                menu: menuReducer,
                dialog: dialogReducer,
                cart: cartReducer,
                product: productReducer,
                filter: filterReducer
            }
        })


- crecion de un estado y sus reducer, con el toolkit

        import { createSlice } from "@reduxjs/toolkit"

        const initialState = {
            products: []
        }

        const cartSlice = createSlice({
            name: "cart",
            initialState,
            reducers: {
                add: (state, action) => {
                    state.products.push(action.payload)
                },
                remove: (state, action) => {
                    state.products = state.products.filter(item => item.id !== action.payload)
                },
                update: (state, action) => {
                    const item = state.products.find(({id}) => id === action.payload.id)
                    item.quantity += action.payload.val
                }
            }
        })

        export const {add,remove,update} = cartSlice.actions
        
        export default cartSlice.reducer 

- encapsulamiento de los componentes para acceder al estado global

        import { store } from '../utils/store'
        import { Provider } from 'react-redux';

        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>

gracias al toolkit el codigo es bastante menos denso que con redux puro y mucho mas facil de entender y manipular.

## Filter, map, reduce, some, find, sort

Se usaron estos metodos de arreglos para filtrar productos, obtener el total del carrito, encontrar productos y renderizar listas de componentes

- Filtrar arreglo con una condicion, con filter

        productsState.filter(item => item.category == filterState.category)

- Ordenar arreglo con sort

        productFilter.sort((a, b) => a.price - b.price)


- Calcular el total

        products.reduce((acc, item) => {
            if (item.quantity > 1) {
                const subTotal = item.quantity * item.price
                return acc += subTotal
            }
            
            return acc += item.price
        },0)

## Test

Los test se realizaron con jest dom y react testing library, se hizo uso de expect para comparar los resultados y funciones como render y querySelector para obtener los componentes que se estan renderizando.


        test('renders a svg whatsapp icon', () => {
            const {container} = render(<FloatBtn />)
            expect(container.querySelector("svg")).toBeInTheDocument()
        });

## Consideraciones

- La aplicacion esta pensada para una futura escabilidad
- Tambien esta pensada para actualizar a la version 13 de next posteriormente cuando sea estable
- Tiene SEO