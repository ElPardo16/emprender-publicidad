import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: "pendones",
    options: {
        word: "",
        price: {
            min: undefined,
            max: undefined,
        },
        order: 3
    }
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        cat: (state, action) => {
            state.category = action.payload
        }
    }
})

export const {cat} = filterSlice.actions
export default filterSlice.reducer