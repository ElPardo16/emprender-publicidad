import { createSlice } from "@reduxjs/toolkit"

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

export const {cat, search, setPMin, setPMax, orderArray} = filterSlice.actions
export default filterSlice.reducer