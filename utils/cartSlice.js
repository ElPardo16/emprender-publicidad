import { createSlice } from "@reduxjs/toolkit"

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