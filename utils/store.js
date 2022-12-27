import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menuSlice'
import dialogReducer from './dialogSlice'
import cartReducer from './cartSlice'
import productReducer from './productsSlice'
import filterReducer from './filterSlice'
//importamos las dependecias a usar
// creamos el contenedor del estado global y asignamos los estados y sus reducers
export const store = configureStore({
    reducer: {
        menu: menuReducer,
        dialog: dialogReducer,
        cart: cartReducer,
        product: productReducer,
        filter: filterReducer
    }
})