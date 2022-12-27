import { createSlice } from "@reduxjs/toolkit"
// creamos el valor inicial del estado
const initialState = {
    products: [
        /* {
            id: 1,
            price: 50000,
            quantity: 5
        },
        {
            id: 2,
            price: 20000,
            quantity: 1
        } */
    ]
}
// creamos el estado y asignamos las funciones para modificarlos
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
// exportamos las funciones que modifican el estado
export const {add,remove,update} = cartSlice.actions
//exportamos el estado
export default cartSlice.reducer 