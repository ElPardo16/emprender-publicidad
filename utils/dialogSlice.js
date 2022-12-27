import { createSlice } from "@reduxjs/toolkit"
// creamos el valor inicial del estado
const initialState = {
    showDialog: false,
    dialogType: "cart",
    selected: undefined 
 }
 // creamos el estado y asignamos las funciones para modificarlos
const dialogSlice = createSlice({
    name: "dialog",
    initialState,
    reducers: {
        show: (state, action) => {
            state.dialogType = action.payload.type
            state.showDialog = true
        },
        hide: state => {
            state.showDialog = false
        },
        select: (state,action) => {
            state.selected = action.payload
        }
    }
})

// exportamos las funciones que modifican el estado
export const { show , hide , select } = dialogSlice.actions
//exportamos el estado
export default dialogSlice.reducer