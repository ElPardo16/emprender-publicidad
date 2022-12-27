import { createSlice } from "@reduxjs/toolkit"
// creamos el valor inicial del estado
const initialState = {
    category: "Tarjetas de presentacion",
    options: {
        word: "",
        price: {
            min: undefined,
            max: undefined,
        },
        order: "0"
    }
}
// creamos el estado y asignamos las funciones para modificarlos
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        cat: (state, action) => {
            state.category = action.payload
        },
        search: (state, action) => {
            state.options.word = action.payload
        },
        setPMin: (state, action) => {
            state.options.price.min = action.payload
        },
        setPMax: (state, action) => {
            state.options.price.max = action.payload
        },
        orderArray: (state, action) => {
            state.options.order = action.payload
        }
    }
})
// exportamos las funciones que modifican el estado
export const {cat, search, setPMin, setPMax, orderArray} = filterSlice.actions
//exportamos el estado
export default filterSlice.reducer